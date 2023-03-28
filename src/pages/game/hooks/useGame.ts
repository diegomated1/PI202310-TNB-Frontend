import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useSocket from "../../../hooks/useSocket";
import IHeroe from "../../../interfaces/IHeroe";
import IGame from "../interfaces/IGame";
import IHero from "../interfaces/IHero";
import IUser from "../interfaces/IUser";
import IUsers from "../interfaces/IUsers";


export default function useGame(){

    const navigate = useNavigate();
    const socket = useSocket("ws://localhost:3001");
    const {user} = useAuth();
    const [token, setToken] = useState<string|undefined>();

    const [game, setGame] = useState<IGame>();
    const [userGame, setUserGame] = useState<IUser>();
    const [hero, setHero] = useState<IHero>();

    const [users, setUsers] = useState<IUsers>({});

    useEffect(()=>{
        const token = localStorage.getItem('mathToken');
        console.log(token);
        if(token){
            setToken(token);
        }else{
            //navigate('/game/lobby/create');
        }
    }, []);

    useEffect(()=>{
        if(socket && user && token){
            function gameUseJoin(_user:IUser, hero:IHero){
                if(_user && (_user._id != user!.id_user)  && hero){
                    _user.id_hero = _user.id_hero.split('-')[1];
                    hero._id = _user.id_hero;
                    setUsers(_users=>({..._users, [_user._id]: {
                        hero, user: _user
                    }}));
                }
            }

            function gameGetUserInfo
            (verified:boolean, game:IGame, user:IUser, hero:IHero, _users:IUsers){
                if(verified){
                    setGame(game);
                    setUserGame({...user, id_hero: user.id_hero.split('-')[1]});
                    setHero(hero);
                    setUsers(_users);
                }else{
                    //navigate('/game/lobby/create');
                }
            }

            socket.on('game:user:join', gameUseJoin);
            socket.on('game:get:user:info', gameGetUserInfo);

            socket.emit('game:get:user:info', user.id_user, token);
            // Clean up function to remove the event listener when the component unmounts.
            return () => {
                socket.off('game:user:join', gameUseJoin);
                socket.off('game:get:user:info', gameGetUserInfo);
            }
        }
    }, [socket, user]);

    return {
        game, user: userGame, hero, users
    }
}


