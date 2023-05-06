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

    getProducts(page: number): Promise<{pages: number, products: IProduct[]}>{
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/?page=${page}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    getProductById(id_product: string): Promise<IProduct> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/${id_product}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    editProduct(id_product: string, attr:{stock?:number,rating?:number,price?:number,discount?:number,availability?:number}){
        return new Promise(async (res, rej) => {
            try {
                await axios.put(`${this.baseUrl}/${id_product}`, {...attr});
                if(attr.stock){
                    await axios.put(`${this.baseUrl}/${id_product}/stock`,{stock:attr.stock});
                }
                if(attr.rating){
                    await axios.put(`${this.baseUrl}/${id_product}/rating`,{rating:attr.rating});
                }
                res(true);
            } catch (error) {
                rej(error);
            }
        });
    }

}


export default new ProductsApi();