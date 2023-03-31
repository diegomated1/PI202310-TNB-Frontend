import IBidder from "./IBidder";

export default interface IAuction{
    _id: string,
    id_user: string,
    id_card: string,
    time: number, 
    bidders: IBidder[],
    min_coins: number,
    insta_win: string[]
}
