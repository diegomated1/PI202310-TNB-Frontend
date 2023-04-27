export default interface IInventory{
    _id: string
    id_user: string
    product: {
        id_product: string
        quantity: number
    }[]
}