import axios from 'axios';
import IAuction from '../interfaces/IAuction';

class AuctionsApi {

    baseUrl: string
    constructor() {
        this.baseUrl = import.meta.env.VITE_SERVER_AUCTION;
    }

    getById(id_card: string): Promise<IAuction|null> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/auctions/${id_card}`);
                res(data.data);
            } catch (error) {
                res(null);
            }
        });
    }

    getAll(): Promise<IAuction[]> {
        return new Promise(async (res, rej) => {
            try {
                const { data } = await axios.get(`${this.baseUrl}/auctions`);
                res(data.data);
            } catch (error) {
                rej(error);
            }
        });
    }

}


export default new AuctionsApi();

