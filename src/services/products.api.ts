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
                const { data } = await axios.get(`${this.baseUrl}/${id_carta}`);
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

    addListFavorites(id_producto: string): void {
        // Crear una estructura de datos para almacenar los productos en favoritos
        let favoriteProducts: { [key: string]: IProduct } = {};

        // Función para agregar un producto a la lista de favoritos
        const addFavoriteProduct = (id: string) => {
            this.getProductById(id).then((product: IProduct) => {
                favoriteProducts[id] = product;
            }).catch((error: any) => {
                console.log(`Error al agregar el producto ${id} a la lista de favoritos: ${error}`);
            });
        };

        // Función para eliminar un producto de la lista de favoritos
        const removeFavoriteProduct = (id: string) => {
            delete favoriteProducts[id];
        };

        // Función para obtener la lista de productos que están en favoritos
        const getFavoriteProducts = (): { [key: string]: IProduct } => {
            return favoriteProducts;
        };

        // Agregar el producto a la lista de favoritos
        addFavoriteProduct(id_producto);

        // Obtener la lista de productos que están en favoritos
        const favoriteProductsList = getFavoriteProducts();

        console.log('Lista de productos en favoritos:');
        console.log(favoriteProductsList);
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