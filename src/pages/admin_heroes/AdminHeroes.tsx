import { useState, FormEvent, useEffect } from "react";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import cardApi from "../../services/card.api";
import ICard from "../../interfaces/ICard";
import Pager from "../../components/Pager";
import Hero from "../../components/Hero";
import IHeroe from "../../interfaces/IHero";
import heroeApi from "../../services/hero.api";

export default function AdminHeroes() {

    const [heroes, setHeroes] = useState<IHeroe[]>([]);

    const [parcialHeroes, setParcialHeroes] = useState<IHeroe[]>([]);

    const handlerGetHeroes = async () => {
        var data = await heroeApi.getAll();
        setParcialHeroes(data.slice(0,6));
        setHeroes(data);
    }

    useEffect(() => {
        handlerGetHeroes();
    }, []);


    return (
        <div className="w-full h-screen flex flex-col">
            <NavBar></NavBar>
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 items-center flex flex-col">
                    
                </div>
                <div className="flex-[4] flex-col">
                    <div className="h-full grid grid-cols-3 grid-rows-2 gap-3 p-2">
                        {parcialHeroes.map((hero, id) => (
                            <Hero key={hero._id} hero={hero}></Hero>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}