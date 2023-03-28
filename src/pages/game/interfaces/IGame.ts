export default interface IGame{
    _id: string,
    ias: number,
    players: string[],
    min_bet: number,
    current_round: number,
    current_turn: number
}