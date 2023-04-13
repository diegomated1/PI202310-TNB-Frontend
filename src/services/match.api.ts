import axios from 'axios';
import IMatch from '../interfaces/IMatch';

class MatchApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_MATCH_URL;
    }

      getAll(): Promise<IMatch[]> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }
    

}
export default new MatchApi();
