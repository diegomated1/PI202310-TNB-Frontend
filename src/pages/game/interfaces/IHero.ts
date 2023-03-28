export default interface IHero {
    _id: string,
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