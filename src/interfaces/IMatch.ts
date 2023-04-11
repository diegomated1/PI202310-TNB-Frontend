
export default interface IMatch{
    _id: string,
    id_owner: string,
    max_number_players: number,
    ias: number,
    players: {id_user: string, bet: number, id_hero:string}[],
    min_bet: number
}
