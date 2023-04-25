
interface IUser{
    id_user: string
    username?: string
}

export interface IAttack extends IUser{
    id_hero: string
    id_hero_target: string
    final_attack: number
    final_defense: number
    final_damage: number
}

export interface IPass extends IUser{

}

export interface IUseCard extends IUser{
    id_card: string
}

export interface IEffect extends IUser{
    id_card: string
    effects: string[]
}

export interface IChangeCard extends IUser{
    id_old_card: string
    id_new_card: string
}

export interface IGrabCard extends IUser{
    id_new_card: string
}

export interface IDead extends IUser{
    id_hero: string
}

export default interface IAction<t>{
    round:number
    turn:string
    type:'attack'|'pass'|'effect'|'use'|'change'|'grab'|'dead'
    action: t
}


