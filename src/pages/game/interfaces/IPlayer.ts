export default interface IPlayer {
    _id: string
    id_hero: string
    upgrades: number
    changes: number
    all_cards: string[]
    hand_cards: string[]
    used_cards: string[]
};