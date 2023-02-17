

export default function AdminCardsNavBar(){
    return(
        <div className="w-full h-[70px] bg-gray-200 grid grid-cols-3">
            <div className="col-span-1 flex items-center">
                <div className="h-full">
                    
                </div>
            </div>
            <div className="col-span-2 grid grid-cols-6">
                <NavBarBtn text="Tienda"/>
                <NavBarBtn text="Subasta"/>
                <NavBarBtn text="Inventario"/>
                <NavBarBtn text="Lista deseados"/>
                <NavBarBtn text="Carrito"/>
                <NavBarBtn text="Admin carta"/>
            </div>
        </div>
    )
}

function NavBarBtn({text}:{text:string}){
    return(
        <div className="flex justify-center items-center">
            <span>
                {text}
            </span>
        </div>
    )
}
