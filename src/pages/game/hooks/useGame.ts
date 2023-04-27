import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useSocket from "../../../hooks/useSocket";
import IGame from "../interfaces/IGame";
import IHero from "../interfaces/IHero";
import gameApi from "../../../services/game.api";
import IResult from "../interfaces/IResult";
import IPlayer from "../interfaces/IPlayer";
import IUser from "../../../interfaces/IUser";
import IAction, { IUseCard } from "../interfaces/IAction";


export default function userGame(id_game:string|null, user:IUser|null|undefined){
    
    const navigate = useNavigate();
    const socket = useSocket(import.meta.env.VITE_SOCKET_GAME);

    const [game, setGame] = useState<IGame>();

    const [players, setPlayers] = useState<{[key:string]:IPlayer}>({});
    const [heroes, setHeroes] = useState<{[key:string]:IHero}>({});

    /**
     * Get all game info (game and users)
     */
    useEffect(()=>{
        if(id_game && user){
            const handleGetGame = async () => {
                const {game} = await gameApi.getGameById(id_game);
                const _players:{[key:string]:IPlayer} = {};
                const _heroes:{[key:string]:IHero} = {};
                for(const player of game.players){
                    const _player = await gameApi.getUserByGameId(id_game, player);
                    _players[_player.user._id] = _player.user;
                    _heroes[_player.hero._id] = _player.hero;
                }
                setGame(game);
                setPlayers(_players);
                setHeroes(_heroes);
            }
            handleGetGame();
        }
    }, [user]);

    useEffect(()=>{
        if(id_game && socket && user){
            /**
             * Event when new player join the game 
             * @param _user user joined
             * @param _hero hero of the user
             */
            function gameUseJoin(_user:IPlayer, _hero:IHero){
                if(_user && _hero){
                    setPlayers(players=>({...players, [_user._id]: _user}));
                    setHeroes(heroes=>({...heroes, [_hero._id]: _hero}));
                }
            }

            function gameUserLeave(id_user:string){
                console.log(id_user);
            }

            function gameStart(game:IGame){
                setGame({...game});
            }

            function onAttack(result:IResult){
                if(result.attack>result.defense){
                    setHeroes((heroes)=>({
                        ...heroes,
                        [result.hero._id]: result.hero,
                        [result.hero_target._id]: result.hero_target
                    }));
                }
            }

            function onPass(turn:string, round?:number){
                if(round){
                    setGame(game=>({...game!, turn, current_round: round}));
                    console.log("aaa");
                    socket?.emit('game:newRound', id_game, user?.id_user);
                }else{
                    setGame(game=>({...game!, turn}));
                }
            }

            function onNewRound(id_player:string, id_hero:string, new_card?:string){
                console.log(id_player);
                console.log(id_hero);
                console.log(new_card);
                if(new_card){
                    setPlayers(players=>({
                        ...players,
                        [id_player]: {
                            ...players[id_player],
                            all_cards: [...players[id_player].all_cards.slice(0, -1)],
                            hand_cards: [...players[id_player].hand_cards, new_card]
                        }
                    }));
                }
                setHeroes(heroes=>({
                    ...heroes,
                    [id_hero]: {
                        ...heroes[id_hero],
                        power: (heroes[id_hero].power>0) ? 
                            heroes[id_hero].power : 
                            heroes[id_hero].power+1
                    }
                }));
            }

            function onChangeCard(id_player:string, all_cards:string[], hand_cards:string[]){
                setPlayers((players)=>({
                    ...players,
                    [id_player]: {
                        ...players[id_player],
                        hand_cards: [...hand_cards],
                        all_cards: [...all_cards]
                    }
                }))
            }

            function onUseCard(action:IAction<IUseCard>, hero:IHero){
                console.log(action);
                setHeroes((heroes)=>({
                    ...heroes,
                    [hero._id]: hero
                }));
                setPlayers(players=>({
                    ...players,
                    [action.action.id_user]: {
                        ...players[action.action.id_user],
                        used_cards: [...players[action.action.id_user].used_cards, action.action.id_card],
                        hand_cards: [...players[action.action.id_user].hand_cards.filter(card=>card!=action.action.id_card)]
                    }
                }));
            }

            socket.on('game:user:join', gameUseJoin);
            socket.on('game:user:leave', gameUserLeave);
            socket.on('game:user:attack', onAttack);
            socket.on('game:user:pass', onPass);
            socket.on('game:user:changeCard', onChangeCard);
            socket.on('game:user:useCard', onUseCard);
            socket.on('game:newRound', onNewRound);
            socket.on('game:start', gameStart);

            socket.emit('game:user:join', user.id_user, id_game);
            // Clean up function to remove the event listener when the component unmounts.
            return () => {
                socket.off('game:user:join', gameUseJoin);
                socket.off('game:user:leave', gameUserLeave);
                socket.off('game:user:attack', onAttack);
                socket.off('game:user:pass', onPass);
                socket.off('game:user:changeCard', onChangeCard);
                socket.off('game:user:useCard', onUseCard);
                socket.off('game:newRound', onNewRound);
                socket.off('game:start', gameStart);
            }
        }
    }, [socket, user]);

    function attack(id_hero_target:string){
        if(socket && user && game){
            const id_hero = players[user.id_user].id_hero;
            socket.emit('game:user:attack', game._id, id_hero, id_hero_target);
        }
    }

    function grabCard(){
        if(socket && user && game){
            console.log("grabeando");
            socket.emit('game:user:grab', game._id, user.id_user);
        }
    }

    function useCard(id_card:string){
        if(socket && user && game){
            socket.emit('game:user:useCard', game._id, players[user.id_user].id_hero, user.id_user, id_card);
        }
    }

    function changeCard(id_card:string){
        if(socket && user && game){
            socket.emit('game:user:changeCard', game._id, user.id_user, id_card);
        }
    }

    function passTurn(){
        if(socket && user && game){
            socket.emit('game:user:pass', game._id, user.id_user);
        }
    }

    return {
        game,
        players, heroes,
        actions: {
            attack, grabCard, changeCard, passTurn, useCard
        }
    }
}


