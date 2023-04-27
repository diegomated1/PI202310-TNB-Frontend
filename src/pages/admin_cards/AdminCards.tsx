import { useState, FormEvent, useEffect } from "react";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import cardApi from "../../services/card.api";
import ICard from "../../interfaces/ICard";
import Pager from "../../components/Pager";

export default function AdminCards() {

    const [cards, setCards] = useState<ICard[]>([]);

    const [parcialCards, setParcialCards] = useState<ICard[]>([]);

    const handlerGetCards = async () => {
        var data = await cardApi.getAll();
        setParcialCards(data.slice(0,6));
        setCards(data);
    }

    useEffect(() => {
        handlerGetCards();
    }, []);

    return (
        <div className="w-full h-screen flex flex-col">
            <NavBar></NavBar>
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 items-center flex flex-col">
                    <Pager setParcialCards={setParcialCards} cardsArray={cards}></Pager>
                </div>
                <div className="flex-[4] flex-col">
                    <div className="h-full grid grid-cols-3 grid-rows-2 gap-3 p-2">
                        {parcialCards.map((card, id) => (
                            <Card key={card._id} card={card}></Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}