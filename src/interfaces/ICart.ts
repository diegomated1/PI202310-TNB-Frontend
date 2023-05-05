export interface ICartProduct{
    id_product: string,
    quantity: number
}

export default interface ICart{
    _id?: string,
    id_user: string,
    product: ICartProduct[]
}
