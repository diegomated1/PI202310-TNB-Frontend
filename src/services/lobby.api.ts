import axios from 'axios';
import ILobby from '../interfaces/ILobby';

class LobbyApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_LOBBY_URL;
    }

    insert(lobby:ILobby){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}`, {...lobby});
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }

    getAll():Promise<ILobby[]>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}`);
                res(data.data as ILobby[]);
            }catch(error){
                rej(error);
            }
        });
    }

    getById(id_lobby: string): Promise<ILobby> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/${id_lobby}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

}

export default new LobbyApi();

