import axios from 'axios';
import Card from '../components/Card';
import ICard from '../interfaces/ICard';
import IComments from '../interfaces/IComments';
import IProduct from '../interfaces/IProduct';
import ISetComment from '../interfaces/ISetComment';

class ProductsApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_PRODUCTS_URL;
    }

    getProductById(id_carta: string): Promise<IProduct> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/${id_carta}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

}


export default new ProductsApi();