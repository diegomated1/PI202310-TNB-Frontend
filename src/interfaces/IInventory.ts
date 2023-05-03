export default interface IInventory{
    coins: number;
    inventory: {
        id_product:string,
        quantity:number
    }[];
}