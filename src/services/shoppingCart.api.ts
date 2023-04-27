import axios from 'axios';

interface errorResponse{
    error:string;
    message:string
}
class ShoppingCartApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_USERS_URL;
    }

    delete(id_user:string, id_producto:string):Promise<errorResponse>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/auth/login`, {id_user,id_producto}, {
                    withCredentials: true,
                });
                res(data)
            }catch(error){
                console.log(error);
                res({error: '', message: (error as Error).message});
            }
        });
    }


}


export default new ShoppingCartApi();

