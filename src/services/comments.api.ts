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
                const { data } = await axios.get(`${this.baseUrl}/product/${id_producto}/comments`);
                res(data.comments);
            } catch (error) {
                rej(error);
            }
        });
    }

    insert(id_user: string, id_product: string, comment: string, valoration: number): Promise<IProduct> {
        return new Promise(async (res, rej) => {
            try {
                const formData = new FormData();
                formData.append('id_usuario', id_user);
                formData.append('comentario', comment);
                formData.append('valoracion', valoration.toString());

                const { data } = await axios.post(`${this.baseUrl}/product/${id_product}/comments`, formData);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

    deleteComment(id_product:string, id_comment: string, userId: string): Promise<void> {
        return new Promise(async (res, rej) => {
            try {
                await axios.delete(`${ this.baseUrl}/product/${id_product}/comments/${id_comment}`);
                res();
            } catch (error) {
                rej(error);
            }
        });
    }

    editComment(id_product:string, id_comment: string, id_user: string, comment:string): Promise<void> {
        return new Promise(async (res, rej) => {
            try {
                await axios.put(`${ this.baseUrl}/product/${id_product}/comments/${id_comment}`, {
                    id_usuario: id_user, comentario: comment
                });
                res();
            } catch (error) {
                rej(error);
            }
        });
    }

}


export default new CommentApi();