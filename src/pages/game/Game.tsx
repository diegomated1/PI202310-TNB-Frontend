import Card from "./components/Card";
import Deck from "./components/Deck";
import Hero from "./components/Hero";


export default function Game(){

    return(
        <div className="w-screen h-screen flex">
            <div className="flex-1 h-full bg-red-100 flex">
                <div className="w-full h-1/3 bg-red-200 flex flex-col">
                    <div className="flex-1 flex justify-center items-center text-4xl">
                        <span>Ronda: 1</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center text-4xl">
                        <span>Turno: kevin</span>
                    </div>
                </div>
            </div>
            <div className="flex-[3] flex flex-col">
                <div className="flex-1 flex items-center">
                    <div className="flex-1 flex justify-evenly">
                        <Hero/>
                        <Hero/>
                        <Hero/>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex-1 flex justify-evenly">
                        <Deck/>
                        <Hero/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    )
}




