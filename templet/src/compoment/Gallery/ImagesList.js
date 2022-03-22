import React, { useEffect, useState } from "react";



const ImagesList = () => {
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        const ImageFetchData = async () => {
            const responseData = await fetch('https://template-34792-default-rtdb.firebaseio.com/images.json')
            const response = await responseData.json();

            const loadData = []
            for (const key in response) {
                loadData.push({
                    id: key,
                    image: response[key].image
                })

            }
            setImageList(loadData)


        }
        ImageFetchData();
    }, [])
    return (
        <ul>
            {imageList.map((data,key) => {
                return (
                    <div className="row" key={data.id}>
                        <li className="col-md-4 col-sm-6 gal-img">
                    
                                <a href="#gal1"><img src={data.image} alt="aegis" className="img-fluid mt-4" /></a>
                        
                        </li>
                    </div>
                )
            })}
        </ul>

    )

}
export default ImagesList;