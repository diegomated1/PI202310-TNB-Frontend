import axios from 'axios';
import Card from '../components/Card';
import ICard from '../interfaces/ICard';

class CardsApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_CARDS_URL;
    }

    insert(card: ICard, image: File) {
        return new Promise(async (res, rej) => {
            try {
                const formData = new FormData();
                formData.append('card_image', image);
                formData.append('name', card.name);
                formData.append('description', card.description);
                formData.append('card_type', card.card_type);
                formData.append('id_hero', card.id_hero);
                formData.append('effects', JSON.stringify(card.effects));
                const { data } = await axios.post(`${this.baseUrl}/cards`, formData);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    modifyCard(card: ICard, image: File, _id: string) {
        return new Promise(async (res, rej) => {
            try {
                const formData = new FormData();
                formData.append('card_image', image);
                formData.append('name', card.name);
                formData.append('description', card.description);
                formData.append('card_type', card.card_type.toString());
                formData.append('id_hero', card.id_hero);
                formData.append('effects', JSON.stringify(card.effects));
                const { data } = await axios.put(`${this.baseUrl}/cards/${_id}`, formData);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }


    getById(_id: string): Promise<ICard> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/cards/${_id}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    getAll(): Promise<ICard[]> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/cards`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    addReport(post:string, description:string){
        return new Promise(async (res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/reports`, {post, description});
                res(data.data);
            }catch(error){
                rej(error);
            }
        });
    }
    
    getReports(){
        return new Promise(async (res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/reports`);
                res(data.data);
            }catch(error){
                rej(error);
            }
        });
    }

}


export default new CardsApi();

