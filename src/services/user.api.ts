import axios from 'axios';
import IUser from '../interfaces/IUser';


interface errorResponse{
    error:string;
    message:string
}
class UserApi{

    baseUrl: string
    constructor(){
        this.baseUrl = import.meta.env.VITE_API_USERS_URL;
        console.log(this.baseUrl);
    }

    auth(){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/auth`, {}, {
                    withCredentials: true,
                });
                res(data.data);
            }catch(error){
                console.log(error);
                rej(error);
            }
        });
    }

    login( email: string, password : string):Promise<errorResponse>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/auth/login`, {email,password}, {
                    withCredentials: true,
                });
                res(data)
            }catch(error){
                console.log(error);
                res({error: '', message: (error as Error).message});
            }
        });
    }

    register( email:string, username:string, password:string ):Promise<errorResponse>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/auth/register`, {
                    email,
                    username,
                    password
                }, {
                    withCredentials: true,
                });
                res(data)
            }catch(error){
                rej(error);
            }
        });
    }

    getById(id_user:string):Promise<IUser>{
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.get(`${this.baseUrl}/user/${id_user}`);
                res(data.data)
            }catch(error){
                rej(error);
            }
        });
    }

}


export default new UserApi();

