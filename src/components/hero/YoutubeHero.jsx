
import React, { useEffect, useState } from 'react'

const YoutubeHero = () => {

    const [cardData, setCardData] = useState([]);

    const getHeroData = async () => {
        const fetching = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
        const data = await fetching.json();
        setCardData(data.data)
    }

    useEffect(() => {
        getHeroData();
    }, [])

    return (
        <div className='container mx-auto pt-10'>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 justify-center items-center md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:gap-20'>
                    {cardData.map(item => {
                        {/* console.log(item.thumbnail) */}
                        return (
                            <div>
                                <div className="rounded-lg w-80 bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={ item.thumbnail } alt="Shoes" />
                                    </figure>
                                    <div className='p-4'>
                                        <h2 class="card-title">Hello</h2>
                                        <div class="flex items-center gap-2">
                                            <p class="text-[#5D5D5D]">How are you?</p>
                                            <p>Image</p>
                                        </div>
                                        <p>view</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default YoutubeHero

    // < div className = "card-body p-4" >
    //                                     <h2 className="card-title">Shoes!</h2>
    //                                     <p>If a dog chews shoes whose shoes does he choose?</p>
    //                                 </div >