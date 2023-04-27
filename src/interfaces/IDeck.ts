import ICard from "./ICard";
import IHeroe from "./IHeroe";

export default interface IDeck{
    id_user:String,
    hero: IHeroe,
    armors: {[key:string]: ICard},
    weapon: {[key:string]: ICard},
    items: {[key:string]: ICard},
    epics: {[key:string]: ICard}
}

