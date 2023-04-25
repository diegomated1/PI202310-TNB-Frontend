export default interface IHero {
    _id: string,
    id_user: string,
    id_hero: string,
    name: string,
    type: string,
    life: number,
    atq: {
        base: number,
        range: number
    },
    def: number,
    dmg: {
        base: number,
        range: number
    },
    power: number,
    last_dmg: number
};