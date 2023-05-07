export default interface ILobby{
    _id?: string,
    id_owner: string,
    max_number_players: number,
    ias: number,
    players: string[],
    min_bet: number
}
