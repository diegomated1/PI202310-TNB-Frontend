import axios from 'axios';
import IHeroe from '../interfaces/IHeroe';

class HeroesApi{

    baseUrl: string
    constructor(){
<<<<<<< HEAD
        this.baseUrl = 'http://192.168.1.8:3000';
=======
        this.baseUrl = 'http://localhost:3000';
>>>>>>> 8943b21f9dc3c6b57b019937f5c62731b750683e
    }

    insert(heroe:IHeroe, image:File){
        return new Promise(async(res, rej)=>{
            try{
                const formData = new FormData();
                formData.append('card_image', image);
                formData.append('name', heroe.name);
                formData.append('description', heroe.description);
                formData.append('power', heroe.power.toString());
                formData.append('health', heroe.health.toString());
                formData.append('defense', heroe.defense.toString());
                formData.append('attack_basic', heroe.attack_basic.toString());
                formData.append('attack_range', heroe.attack_range.toString());
                formData.append('damage_range', heroe.damage_range.toString());
                const {data} = await axios.post(`${this.baseUrl}/heroes`, formData);
                res(data.data);
            }catch(error){
                rej(error);
            }
        });
    }

    get():Promise<IHeroe[]>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/heroes`);
                res(data.data as unknown as IHeroe[]);
            }catch(error){
                rej(error);
            }
        });
    }

}


export default new HeroesApi();

