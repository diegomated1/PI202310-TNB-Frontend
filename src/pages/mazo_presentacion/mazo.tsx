import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/Button';
import Card from '../../components/Card'
import NavBar from '../../components/NavBar'
import ICard from '../../interfaces/ICard'
import IHeroe from '../../interfaces/IHeroe';
import cardApi from '../../services/card.api';
import heroeApi from '../../services/heroe.api';



const exampleCard: ICard = {
    _id: "fadfaf",
    name: 'Fireball',
    description: 'Deals 5 damage to all enemies.',
    id_hero: 'mage',
    card_type: 'armor',
    effects: ['damage', 'area-of-effect'],
};

const mazoCompletoNumber = 2;

export default function mazo() {

    const navigate = useNavigate()

    const [cards, setCards] = useState<ICard[]>([]);
    const [heroes, setHeroes] = useState<IHeroe[]>([]);


    const handlerGetCards = async () => {
        var data = await cardApi.getAll();
        setCards(data)
    }
    const handleGetHeroes = async () => {
        var data = await heroeApi.get();
        setHeroes(data);

    }
    useEffect(() => {
        handleGetHeroes();
        handlerGetCards();
    }, []);
    return (
        <div className="w-full h-screen flex flex-col bg-gray-500">
            <NavBar />
            <div className="flex-1 grid grid-cols-10 gap-4 p-4 ">

                {cards.length >= mazoCompletoNumber ? <Fragment>
                    {/* Columna derecha */}
                    <div className="col-span-10 grid grid-cols-5 gap-4">


                        {/* HEROES */}
                        <div className="col-span-1 bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="p-4">
                                <h2 className="text-lg font-medium rounded-full bg-red-500 text-white py-2 px-4 mb-4 font-sans text-center">Heroe</h2>

                                <div className="grid grid-cols-1 gap-4 justify-items-center epic-cards">
                                    <Card key={exampleCard._id} card={exampleCard} />
                                </div>
                            </div>
                        </div>


                        {/* ARMADURA */}
                        <div className="col-span-1 bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="p-4">
                                <h2 className="text-lg font-medium rounded-full bg-red-500 text-white py-2 px-4 mb-4 font-sans text-center">Armadura</h2>
                                <div className="grid grid-cols-1 gap-4 justify-items-center epic-cards">
                                    <Card key={exampleCard._id} card={exampleCard} />
                                </div>
                            </div>
                        </div>

                        {/* ITEM */}
                        <div className="col-span-1 bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="p-4">
                                <h2 className="text-lg font-medium rounded-full bg-red-500 text-white py-2 px-4 mb-4 font-sans text-center">Item</h2>
                                <div className="grid grid-cols-1 gap-4 justify-items-center epic-cards">
                                    <Card key={exampleCard._id} card={exampleCard} />
                                </div>
                            </div>
                        </div>

                        {/* ARMAS */}
                        <div className="col-span-2 bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="p-4">
                                <h2 className="text-lg font-medium rounded-full bg-red-500 text-white py-2 px-4 mb-4 font-sans text-center">Arma</h2>
                                <div className="grid grid-cols-2 gap-4 justify-items-center epic-cards">
                                    <Card key={exampleCard._id} card={exampleCard} />
                                    <Card key={exampleCard._id} card={exampleCard} />
                                </div>
                            </div>
                        </div>

                        {/* EPICAS */}
                        <div className="col-span-5 bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="p-4">
                                <h2 className="text-lg font-medium rounded-full bg-red-500 text-white py-2 px-4 mb-4 font-sans text-center">Epicas</h2>
                                <div className="grid grid-cols-5 gap-10 justify-items-center epic-cards">
                                    <Card key={exampleCard._id} card={exampleCard} />
                                    <Card key={exampleCard._id} card={exampleCard} />
                                    <Card key={exampleCard._id} card={exampleCard} />
                                    <Card key={exampleCard._id} card={exampleCard} />
                                    <Card key={exampleCard._id} card={exampleCard} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment> : <Fragment>
                    <h1 className="col-span-10 text-4xl text-center mt-10 font-bold">No tienes un mazo creado, crea uno para poder jugar oprime el boton de crear mazo y crea el tuyo</h1>
                </Fragment>}
            </div>
            <div className="flex justify-end flex-row p-10">
                <button className="w-80 bg-yellow-600 text-white rounded-lg p-4 hover:bg-yellow-700 focus:outline-none focus:bg-yellow-700" 
                onClick={() => navigate('../../game/create/deck')}>
                    Crear Mazo
                </button>
                {cards.length >= mazoCompletoNumber ? <button className="w-80  ml-2 px-4 py-2  bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 focus:outline-none focus:bg-yellow-700" onClick={() => navigate('../game/lobby/create')}>
                    Jugar
                </button> : null}
            </div>
        </div>
    )
}
