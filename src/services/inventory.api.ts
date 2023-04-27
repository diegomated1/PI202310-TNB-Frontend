import axios from 'axios';
import IUser from '../interfaces/IUser';
import IDeck from '../interfaces/IDeck';
import IInventory from '../interfaces/IInventory';


interface errorResponse{
    error:string;
    message:string
}
class InventoryApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_INVENTORY_URL;
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

    insertInventoryById(id_user:string, id_product:string, quantity:number):Promise<IInventory>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/users/${id_user}/inventory`,{
                    id_product: id_product, quantity: quantity,
                });
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }

    

}


export default new InventoryApi();

