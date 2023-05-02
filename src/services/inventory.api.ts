import axios from 'axios';
import IUser from '../interfaces/IUser';
import { IInventory } from '../interfaces/IInventory';


interface errorResponse{
    error:string;
    message:string
}
class InventoryApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_INVENTORY_URL;
    }

    getDeck(id_user:string):
        Promise<{id_product:string,quantity:number,type:string}[]>
    {
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/deck/${id_user}`);
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }

    createDeck(id_user:string, products:{
        id_product: string
        quantity: number
        type: string
    }){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/deck/${id_user}`, {products});
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }

    getInventory(id_user:string):
        Promise<{id_product:string,quantity:number}[]>
    {
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/inventory/${id_user}`);
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }

    addProductToInventory(id_user:string, products:{id_product:string, quantity:number}[]){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/inventory/${id_user}`,{products});
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }

    delProductToInventory(id_user:string, id_product:string){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/inventory/${id_user}/products/${id_product}`);
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }
    

}


export default new InventoryApi();

