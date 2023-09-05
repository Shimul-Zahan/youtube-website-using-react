import React, { useEffect, useState } from 'react'

const Youtube = () => {

    const [catagories, setCatagories] = useState([]);
    const [id, categorySet] = useState();

    const fetchData = async () => {
        const fetching = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
        const data = await fetching.json();
        setCatagories(data.data)
    }
    console.log(catagories)
    useEffect(() => {
        fetchData();
    }, [])
    console.log(id)

    return (
        <div className='container mx-auto pt-10'>
            <div className='text-center flex flex-col justify-center items-center md:flex-row lg:flex-row'>
                {catagories.map(catagory => {
                    return (
                        <button value = {id} onClick={() => { categorySet(catagory.category_id) }} className="btn btn-outline btn-accent m-5">{catagory.category}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Youtube