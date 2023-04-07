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

    getProduct(id_producto: string): Promise<IComments[]> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/product/${id_producto}/comments`);
                res(data.comments);
            } catch (error) {
                rej(error);
            }
        });
    }

    getProductById(id_carta: string): Promise<IProduct> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/product/${id_carta}`);
                console.log(data)
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    getComments(id_producto: string): Promise<IComments[]> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/product/${id_producto}/comments`);
                res(data.comments);
            } catch (error) {
                rej(error);
            }
        });
    }

    /*insert(comment:ISetComment,idusuario:id_usuario, image:File){
        return new Promise(async(res, rej)=>{
            try{
                const formData = new FormData();
                formData.append('valoracion', comment.Valoracion.toString());
                formData.append('comentario', comment.comentario);
                formData.append('id_usuario', comment.id_usuario);
                formData.append('image', image);
                
                const {data} = await axios.post(`${this.baseUrl}/product/:id_producto/comments'`, formData);
                res(data.data);
            }catch(error){
                rej(error);
            }
        });
    }*/


}


export default new ProductsApi();