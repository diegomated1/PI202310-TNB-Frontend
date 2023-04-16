import axios from 'axios';
import ILobby, {IPLayer} from '../interfaces/ILobby';
import IGame from '../pages/game/interfaces/IGame';

class GameApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_SERVER_GAME;
    }

    create(players:IPLayer[], ias:number, min_bet:number):Promise<{message:string, id_game:string}>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/games`, {players, ias, min_bet});
                res(data);
            }catch(error){
                rej(error);
            }
        });
    }

    getGameById(id_game:string, id_user:string): Promise<IGame> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/games/${id_game}/users/${id_user}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    addUser(id_game:string, id_user:string, id_hero:string, id_deck:string){
        return new Promise(async (res, rej)=>{
            try{
                const { data } = await axios.post(`${this.baseUrl}/games/${id_game}/users`, {
                    id_player: id_user, id_hero, id_deck
                });
                res(data);
            } catch(error) {
                rej(error);
            }
        });
    }

}

export default new GameApi();