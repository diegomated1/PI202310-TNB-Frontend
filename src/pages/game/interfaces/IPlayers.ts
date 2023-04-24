import IHero from "./IHero";
import IPlayer from "./IPlayer";

export default interface IPlayers {
    [key:string]:{
        user:IPlayer,
        hero:IHero
    }
}