import IHero from "./IHero";
import IUser from "./IUser";

export default interface IUsers {
    [key:string]:{
        user:IUser,
        hero:IHero
    }
}