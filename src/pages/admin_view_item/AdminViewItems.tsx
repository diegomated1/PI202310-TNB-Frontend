import { useState, FormEvent, useEffect } from "react";
import Card from "../../components/Card";
import Icons from "../../components/Icons"
import NavBar from "../../components/NavBar";
import cardApi from "../../services/card.api";
import ICard from "../../interfaces/ICard";

export default function AdminViewGrid() {

    const [cards, setCards] = useState<ICard[]>([]);

    const handlerGetCards = async () => {
        var data = await cardApi.getAll();
        setCards(data)
    }

    useEffect(() => {
        handlerGetCards();
    }, []);

    console.log("hola")
    return (
        <div className="w-full h-screen flex flex-col">
            <NavBar></NavBar>
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1">
                    as
                </div>
                <div className="flex-[4]">
                    <div className="h-full grid grid-cols-3 grid-rows-2 gap-3 p-2">
                        {cards.map((card, id) => (
                            <Card key={id} _id={card._id} name={card.name} description={card.description} id_hero={card.id_hero} card_type={card.card_type} price={10} discount={15} obtained={"yes"}></Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}