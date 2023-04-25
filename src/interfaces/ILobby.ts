export interface IPLayer {
    id_user: string,
    id_hero: string,
    id_deck: string
}

export default interface ILobby{
    _id?: string,
    id_owner: string,
    max_number_players: number,
    ias: number,
    players: IPLayer[],
    min_bet: number
}
