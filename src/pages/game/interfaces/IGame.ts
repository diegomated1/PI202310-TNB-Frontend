export default interface IGame{
    _id: string,
    ias: number,
    players: string[],
    players_in_game: string[],
    min_bet: number,
    current_round: number,
    turn: string
}