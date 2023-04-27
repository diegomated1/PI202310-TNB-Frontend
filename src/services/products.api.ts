import axios from 'axios';
import IProduct from '../interfaces/IProduct';

class ProductsApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_PRODUCTS_URL;
    }

    getProducts(): Promise<IProduct[]> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
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