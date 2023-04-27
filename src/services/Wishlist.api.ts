import axios from 'axios';

interface errorResponse{
    error:string;
    message:string
}
class WishlistApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_CART_URL;
    }

    deleteWhislist(id_user:string, id_product:string):Promise<errorResponse>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.delete(`${this.baseUrl}/${id_user}/product/${id_product}`);
                res(data)
            }catch(error){
                console.log(error);
                res({error: '', message: (error as Error).message});
            }
        });
    }

    whislistGetById(id_user:string):Promise<string[]>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/wishlist/${id_user}`);
                res(data["data"]["product"])
            }catch(error){
                console.log(error);
                
            }
        });
    }

    setWishlist(id_user:string, id_product:string):Promise<errorResponse>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.put(`${this.baseUrl}/${id_user}/product/${id_product}`);
                res(data)
            }catch(error){
                console.log(error);
                res({error: '', message: (error as Error).message});
            }
        });
    }


}


export default new WishlistApi();