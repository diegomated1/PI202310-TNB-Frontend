import IHero from "./IHero"

export default interface IResult {
    hero: IHero
    hero_target: IHero
    attack: number
    defense: number
    damage: number
}