import React, { Fragment, useState } from 'react'
import ReactCardFlip from 'react-card-flip'

function Card(props: any) {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleclick = () => {
        setIsFlipped(!isFlipped)
    }
  return (
<ReactCardFlip isFlipped={isFlipped} containerClassName='card' flipDirection="horizontal" >
            <div className="front">
                <div className="clash-card barbarian pattern2">
                    <div className="bookmark"></div>
                    <div className="clash-card__image">
                        <img className="clash-card__barbarian" src={'../../public/img/barbaro.jpg'} alt="Barbarian" />
                    </div>
                    <div className='content'>
                        <div className="clash-card__unit-name ">Tank warrior</div>

                        <div className='clash-card__stats grid grid-cols-3 gap-2'>
                            <div className='flex justify-center align-middle'>
                                <img className='h-5 mt-1' src='../../public/img/crown.png' />
                                <p className='font-bold text-base'>11</p>
                            </div>
                            <div className='flex justify-center align-middle'>
                                <img className='h-5 mt-1' src='../../public/img/green-love.png' />
                                <p className='font-bold text-base'>11</p>
                            </div>
                            <div className='flex justify-center align-middle'>
                                <img className='h-5 mt-1' src='../../public/img/wooden.png' />
                                <p className='font-bold text-base'>11</p>
                            </div>
                            <div className='flex justify-around align-middle col-span-3 flex-row'>
                                <div className='flex-row flex'>
                                    <img className='h-5 mt-1' src='../../public/img/sword.png' />
                                    <p className='font-bold text-base'>(1d6)</p>
                                </div>
                                <div className='flex justify-around align-middle col-span-3 flex-row'>
                                    <img className='h-5 mt-1' src='../../public/img/swords.png' />
                                    <p className='font-bold text-base'>110+(1d6)</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center mt-1 relative' >
                            <div className='pattern1 cuerda absolute' />
                            <div className='placa '>
                                <div className='flex flex-row items-center'>
                                    <p className='font-bold text-base line-through pl-1 pr-1'>
                                        $50.000
                                    </p>
                                    <p className='text-xs align-middle pr-1 font-bold'>
                                        40.000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer pattern4 '>
                        <button id='btn-fav'>
                            <i className="fa-solid fa-regular fa-heart"></i>
                        </button>
                        <button id='btn-car' >
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button id='btn-rotate' className='justify-center align-middle' onClick={handleclick}>
                            <i className="fa-solid fa-rotate"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='back'>
                <div className="clash-card barbarian pattern2">

                    <div className="clash-card__unit-name">Description</div>
                    <div className="clash-card__unit-description">
                        Es un panda gigante que de manera improbable es elegido como el Guerrero
                        Dragón. Él es hijo adoptivo del Sr. Ping, y es uno de los estudiantes del
                        maestro Shifu. La profecía se refiere a Po como el Guerrero Dragón o guerrero
                        de blanco y negro.Es un panda gigante que de manera improbable es elegido
                        como el Guerrero Dragón. Él es hijo adoptivo del Sr. Ping, y es uno de
                        los estudiantes del maestro Shifu. La profecía se refiere a Po como el
                        Guerrero Dragón o guerrero de blanco y negro.Es un panda gigante que de
                        manera improbable es elegido como el Guerrero Dragón. Él es hijo adoptivo
                        del Sr. Ping, y es uno de los estudiantes del maestro Shifu. La profecía
                        se refiere a Po como el Guerrero Dragón o guerrero de blanco y negro.
                    </div>
                    <div className='card-footer pattern4'>
                        <button id='btn-fav'>
                            <i className="fa-sharp fa-regular fa-heart "></i>
                        </button>
                        <button id='btn-car'>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button id='btn-rotate' onClick={handleclick}>
                            <i className="fa-solid fa-rotate"></i>
                        </button>
                    </div>
                </div>
            </div>

        </ReactCardFlip>
  )
}

export default Card