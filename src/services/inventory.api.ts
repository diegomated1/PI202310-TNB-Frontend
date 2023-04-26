import axios from 'axios';
import IUser from '../interfaces/IUser';
import IInventory from '../interfaces/IInventory';


interface errorResponse{
    error:string;
    message:string
}
class IventoryApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_INVENTORY_URL;
        console.log(this.baseUrl);
    }

    getByUserId(id_user:string):Promise<IInventory>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/users/${id_user}/inventory`);
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }

}


export default new IventoryApi();

