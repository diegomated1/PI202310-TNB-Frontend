import axios from 'axios';
import ICard from '../interfaces/ICard';

class CardsApi{

    baseUrl: string
    constructor(){
        this.baseUrl = 'http://10.153.50.25:3000';
    }

    insert(card:ICard){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/cards`, {...card});
                res(data.data);
            }catch(error){
                rej(error);
            }
        });
    }

    getById(_id:string):Promise<ICard>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/cards/${_id}`);
                res(data.data);
            }catch(error){
                rej(error);
            }
        });
    }

    getAll():Promise<ICard[]>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/cards`);
                res(data.data);
            }catch(error){
                rej(error);
            }
        });
    }

}


export default new CardsApi();

