import axios from 'axios';
import Card from '../components/Card';
import ICard from '../interfaces/ICard';
import IComments from '../interfaces/IComments';

class ProductsApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_PRODUCTS_URL;
    }

    getComments(id_producto: string): Promise<IComments[]> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/product/${id_producto}/comments`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

}


export default new ProductsApi();