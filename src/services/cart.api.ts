import axios from 'axios';
import IShoppingCart from '../interfaces/ICart';

class CartApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_CART_URL;
    }

    findByUser(id_user: string): Promise<IShoppingCart> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/${id_user}`);
                res(data.comments);
            } catch (error) {
                rej(error);
            }
        });
    }

    addToCart(id_user: string, id_product:string, quantity:number): Promise<any> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.put(`${this.baseUrl}/${id_user}`,{
                    id_product, quantity
                });
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

}


export default new CartApi();