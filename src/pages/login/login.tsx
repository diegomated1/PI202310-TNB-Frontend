import AdminCardsNavBar from "../../components/AdminCardsNavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"

export default function Login() {
    return (
        <div className="h-screen">
            <AdminCardsNavBar />
            <div className="h-[calc(100%-60px)]">
                <figure className="h-full relative">
                    <img className="h-full w-full object-fit m-0" src="" alt=" asd " />
                </figure>
                <div className="w-[418px] h-[616px] bg-grisesito absolute top-28 left-32 flex-col p-6 bg-gradient-to-b from-gradientFrom to-gradientTo">
                    <div className="flex-colum justify-evenly " >
                        <h1 className="font-extrabold text-4xl text-center text-yellow-300 mt-14 italic" >
                            THE NEXUS BATTLE
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}