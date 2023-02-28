import axios from 'axios';


interface errorResponse{
    error:string;
    message:string
}
class UserApi{

    baseUrl: string
    constructor(){
        this.baseUrl = 'http://192.168.1.8:3000';
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
                rej(error);
            }
        });
    }

}


export default new UserApi();

