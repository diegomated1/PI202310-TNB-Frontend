import axios from 'axios';
import IAuction from '../interfaces/IAuction';

class AuctionsApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_AUCTION_URL;
    }

    getById(id_card: string): Promise<IAuction|null> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/${id_card}`);
                res(data.data);
            } catch (error) {
                res(null);
            }
        });
    }

    getAll(): Promise<IAuction[]> {
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


export default new AuctionsApi();

