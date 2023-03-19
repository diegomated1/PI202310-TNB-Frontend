import { useState, FormEvent } from "react";
import Card from "../../components/Card";
import Icons from "../../components/Icons"
import NavBar from "../../components/NavBar";

export default function AdminViewGrid() {

    

    return (
        <div className="w-full h-screen flex flex-col">
            <NavBar></NavBar>
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1">
                    as
                </div>
                <div className="flex-[4]">
                    <div className="h-full grid grid-cols-3 grid-rows-2 gap-3 p-2">
                        <Card _id="29klfek6kkq"></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
            </div>
        </div>
    )
}