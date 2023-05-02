import { useEffect, useState } from "react"
import IOrder from "../../../../interfaces/IOrder";
import cartApi from "../../../../services/cart.api";
import Buttons from "../../../../components/Button";

export default function Facturas({id_user}:{id_user?:string}){

    const [orders, setOrders] = useState<IOrder[]>([]); 
    
    useEffect(()=>{
        if(id_user){
            const handleGetOrders = async () => {
                //ilh2udb51
                const orders = await cartApi.getOrders(id_user);
                setOrders(orders);
            }
            handleGetOrders();
        }
    }, [id_user]);

    return(
        <div className="w-full h-full">
            {orders.map((order,i)=>(
                <Order key={i} order={order} />
            ))}
        </div>
    )
}


function Order({order}:{order:IOrder}){
    return(
        <div className="w-full h-24 flex border-black border-b">
            <div className="flex-1 flex flex-col">
                <span>Id.</span>
                <span>{order.id_order}</span>
            </div>
            <div className="flex-1 flex flex-col">
                <span>Cantidad.</span>
                <span>{order.quantity}</span>
            </div>
            <div className="flex-1 flex flex-col">
                <span>valor bruto.</span>
                <span>{order.gross_price}</span>
            </div>
            <div className="flex-1 flex flex-col">
                <span>valor total.</span>
                <span>{order.total_price}</span>
            </div>
            <div className="flex-1">
                
                <Buttons.buttonYellow>
                    Ir a la factura
                </Buttons.buttonYellow>
            </div>
        </div>
    )
}

