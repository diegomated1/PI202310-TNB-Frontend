import axios from 'axios';
import IComments from '../interfaces/IComments';
import IProduct from '../interfaces/IProduct';

class CommentApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_COMMENTS_URL;
    }

    get(id_producto: string): Promise<IComments[]> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/product/${id_producto}`);
                res(data.comments);
            } catch (error) {
                rej(error);
            }
        });
    }

    insert(id_product:string, id_user:string, comment:string, valoration:number, image:File): Promise<IProduct> {
        return new Promise(async (res, rej) => {
            try {
                const formData = new FormData();
                formData.append('id_usuario', id_user);
                formData.append('comentario', comment);
                formData.append('valoracion', valoration.toString());
                formData.append('comment_images', image);

                const { data } = await axios.post(`${this.baseUrl}/product/${id_product}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

}


export default new CommentApi();