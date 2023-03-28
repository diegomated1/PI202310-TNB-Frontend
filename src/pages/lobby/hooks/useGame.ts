import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useSocket from "../../../hooks/useSocket";
import IMatch from "../../../interfaces/IMatch";
import IHero from "../../../interfaces/inGame/IHero";
import heroeApi from "../../../services/heroe.api";

export default function useGame(isOwner:boolean):[string|undefined, (match: IMatch)=>Promise<void>]{

    const [socketUrl, setSocketUrl] = useState<string|undefined>();
    const socket = useSocket(socketUrl);
    const [idGame, setIdGame] = useState<string|undefined>();
    const {user} = useAuth();

    useEffect(()=>{
        if(isOwner){
            setSocketUrl("ws://localhost:3001");
        }
    }, [isOwner]);

    useEffect(()=>{
        if(socket && user){
            function gameCreate(_created:boolean, id_game?:string){
                if(_created){
                    setIdGame(id_game);
                }
            }

            // Events that this custom hook listens to
            socket.on('game:create', gameCreate);

            // Clean up function to remove the event listener when the component unmounts.
            return () => {
                socket.off('game:create', gameCreate);
            }
        }
    }, [socket, user]);

    interface IUser {
        _id: string,
        id_hero: string,
        all_cards: string[],
        used_cards: string[]
    };

    async function gameCreate(match:IMatch){
        if(socket && user){
            try{
                let _user:IUser = {
                    _id: user.id_user,
                    id_hero: "",
                    all_cards: [
                        "ilfr4nqjg", "ilfr4p9r3", "ilfr4nqjg", "ilfr4p9r3",
                        "ilfr4nqjg", "ilfr4p9r3", "ilfr4nqjg", "ilfr4p9r3",
                        "ilfr4w9p0", "ilfr4w9p0", "ilfr4w9p0", "ilfr4w9p0",
                        "ilfr50t3p", "ilfr50t3p", "ilfr50t3p", "ilfr50t3p",
                        "ilfr55zjo", "ilfr59iym", "ilfr57ewz", "ilfr583j7", "ilfr58yi2",
                        "ilfr55zjo", "ilfr59iym", "ilfr57ewz", "ilfr583j7", "ilfr58yi2",
                        "ilfr4jkmz", "ilfr4jkmz", "ilfr4jkmz", "ilfr4jkmz"
                    ],
                    used_cards: []
                }
                const users = [];
                const heroes = ["ilfr4mbhc", "ilfr4l5ub"];
                for(let i=0;i<match.players.length;i++){
                    const hero = await heroeApi.getById(heroes[Math.floor(Math.random()*2)]);
                    const _hero = {
                        _id: hero._id!,
                        atq: {
                            base: hero.attack_basic,
                            range: hero.attack_range
                        },
                        def: hero.defense,
                        dmg: {
                            base: 1,
                            range: hero.damage_range
                        },
                        last_dmg: 0,
                        life: hero.health,
                        name: hero.name,
                        power: hero.power,
                    }
                    users.push({user: {..._user, _id:match.players[i].id_user, id_hero: match.players[i].id_hero}, hero: _hero});
                }
                console.log("emitir");
                socket.emit('game:create', users, match.ias, match.min_bet);
            }catch(error){
                console.log(error);
                alert('Ocurrio un error al crear la partida, vuelve a intentarlo');
            }
        }
    }

    return [idGame, gameCreate];
}



