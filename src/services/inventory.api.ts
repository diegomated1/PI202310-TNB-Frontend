import axios from 'axios';
import IUser from '../interfaces/IUser';
import IDeck from '../interfaces/IDeck';


interface errorResponse{
    error:string;
    message:string
}
class InventoryApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_INVENTORY_URL;
    }

    getById(id_user:string):Promise<IDeck>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/users/${id_user}/decks`);
                res(data.data)
            }catch(error){
                rej(error);
            }
        });
    }

}


export default new InventoryApi();

