import AdminCardsNavBar from "../../components/AdminCardsNavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"

export default function Login() {
    return (
        <div className="h-screen">
            <AdminCardsNavBar />
            <div className="h-[calc(100%-50px)]">
                <figure className="h-full relative">
                    <img className="h-full w-full object-fit m-0" src="" alt="imagen de fondo" />
                </figure>
                <div className="w-[418px] h-[500px] bg-grisesito absolute top-28 left-32 flex-col p-6 bg-gradient-to-b from-gradientFrom to-gradientTo">
                    <div className="flex-colum justify-evenly" >
                        <h1 className="font-extrabold text-4xl text-center text-yellow-300 mt-4 italic" >
                            NEXUS BATTLE
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}