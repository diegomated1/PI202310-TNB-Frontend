import axios from 'axios';
import IGame from '../pages/game/interfaces/IGame';
import IHero from '../pages/game/interfaces/IHero';
class GameApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_SERVER_GAME;
    }

    create(players:string[], ias:number, min_bet:number):Promise<{message:string, id_game:string}>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/games`, {players, ias, min_bet});
                res(data);
            }catch(error){
                rej(error);
            }
        });
    }

    getGameById(id_game:string): Promise<{game:IGame}> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/games/${id_game}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    getUserByGameId(id_game:string, id_user:string): Promise<{user:string,hero:IHero}> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/games/${id_game}/users/${id_user}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    addUser(id_game:string, id_user:string){
        return new Promise(async (res, rej)=>{
            try{
                const { data } = await axios.post(`${this.baseUrl}/games/${id_game}/users`, {
                    id_player: id_user
                });
                res(data);
            } catch(error) {
                rej(error);
            }
        });
    }

}

export default new GameApi();