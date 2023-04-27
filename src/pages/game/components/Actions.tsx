import Buttons from "../../../components/Button"

interface IActionsProps{
    change?: ()=>void
    power: number
    turn: boolean
    attack: ()=>void
    pass: ()=>void
}
// onClick={()=>{change(c=>!c)}}
export default function Actions({power, turn, attack, change, pass}:IActionsProps){

    const handleChange = ()=>{
        //change(est=>{})
    }

    return(
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-44 h-20 bg-red-100 flex flex-col">
            <div className="flex-1 flex justify-center items-center">
                {(turn && power>0) ? (
                    <Buttons.default>
                        Atacar
                    </Buttons.default>
                ) : ''}
            </div>
            <div className="flex-1 flex justify-center items-center">
                {(turn && change) ? (
                    <Buttons.default onClick={change}>
                        Cambiar carta
                    </Buttons.default>
                ) : ''}
            </div>
            <div className="flex-1 flex justify-center items-center">
                {(turn) ? (
                    <Buttons.default onClick={pass}>
                        Terminar turno
                    </Buttons.default>
                ) : ''}
            </div>
        </div>
    )
}
