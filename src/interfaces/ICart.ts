
export default interface IShoppingCart{
    _id: string,
    id_user: string,
    product: {
        id_product: string,
        quantity: string
    }[]
}
