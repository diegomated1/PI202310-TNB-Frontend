import axios from 'axios';

class UserApi{

    baseUrl: string
    constructor(){
        this.baseUrl = 'http://10.153.50.14:3001';
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

}


export default new UserApi();

