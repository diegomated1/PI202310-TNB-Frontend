
export default interface IMatch{
    _id: string,
    id_owner: string,
    max_number_players: number,
    players: {id_user: string, bet: number}[],
    min_bet: number
}
