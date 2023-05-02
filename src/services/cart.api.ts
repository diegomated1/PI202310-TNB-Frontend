import axios from 'axios';

interface errorResponse{
    error:string;
    message:string
}
class ShoppingCartApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_CART_URL;
    }

    getCart(id_user:string):Promise<errorResponse>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/cart/${id_user}`);
                res(data)
            }catch(error){
                console.log(error);
                res({error: '', message: (error as Error).message});
            }
        });
    }

    setQuantityShoppingCart(id_user:string, id_product:string, quantity:number):Promise<errorResponse>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.put(`${this.baseUrl}/cart/${id_user}`, {id_product, quantity});
                res(data)
            }catch(error){
                console.log(error);
                res({error: '', message: (error as Error).message});
            }
        });
    }

    delete(id_user:string, id_product:string):Promise<errorResponse>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.delete(`${this.baseUrl}/cart/${id_user}/products/${id_product}`);
                res(data)
            }catch(error){
                console.log(error);
                res({error: '', message: (error as Error).message});
            }
        });
    }

    getOrders(id_user:string):
        Promise<{id_order:string,quantity:number,gross_price:number,total_price:number}>
    {
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/order/${id_user}`);
                res(data)
            }catch(error){
                rej(error);
            }
        });
    }

    getOrderById(id_user:string, id_order:string):
        Promise<{id_product:string, quantity:number, unit_price:number, discount:number}[]>
    {
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/order/${id_user}/${id_order}`);
                res(data)
            }catch(error){
                rej(error);
            }
        });
    }

    createOrder(id_user:string,products:{id_product: string, quantity: number}[]):
        Promise<{id_order:string,quantity:number,gross_price:number,total_price:number}>
    {
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/order/${id_user}`,{
                    products
                });
                res(data)
            }catch(error){
                rej(error);
            }
        });
    }

    createOrderFromCart(id_user:string):
        Promise<{id_order:string,quantity:number,gross_price:number,total_price:number}>
    {
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/order/${id_user}/cart`);
                res(data)
            }catch(error){
                rej(error);
            }
        });
    }

    getWishList(id_user:string, page:number){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/wishlist/${id_user}?page=${page}`);
                res(data)
            }catch(error){
                rej(error);
            }
        });
    }

    checkWishListProduct(id_user:string,id_product:string){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/wishlist/${id_user}/products/${id_product}`);
                res(data)
            }catch(error){
                rej(error);
            }
        });
    }

    setProductWishlist(id_user:string,id_product:string){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.put(`${this.baseUrl}/wishlist/${id_user}/products/${id_product}`);
                res(data)
            }catch(error){
                rej(error);
            }
        });
    }

}


export default new ShoppingCartApi();

