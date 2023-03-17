import axios from 'axios';


interface errorResponse{
    error:string;
    message:string
}
class UserApi{

    baseUrl: string
    constructor(){
        this.baseUrl = process.env.REACT_APP_API_USERS_URL!;
    }

    auth(){
        return new Promise(async(res, rej)=>{
            try{
                const {data} = await axios.post(`${this.baseUrl}/auth`, {}, {
                    withCredentials: true,
                });
                res(data.data);
            }catch(error){
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

}


export default new UserApi();

