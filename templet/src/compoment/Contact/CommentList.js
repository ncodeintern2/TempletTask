import React, { useEffect, useState } from "react"
import Comment from "./Comment"
const CommentList = () => {
    const [commentlist, setCommenlist] = useState([])
    useEffect(() => {
        const fetchComment = async () => {
            const response = await fetch("https://template-34792-default-rtdb.firebaseio.com/comment.json")
            const responseData = await response.json();


            const loadData = []
            for (const key in responseData) {
                loadData.push({
                    id: key,
                    name: responseData[key].name,
                    image:responseData[key].image,
                    comment: responseData[key].comment,
                })
            }
            setCommenlist(loadData)


        }
        fetchComment();
    }


        , [])





    return (
        <div>
            <div className="comment-sec-w3ls" >
                <h4 className="leave-w3ls mb-5">3 Comments</h4>
                <ul >
                    {commentlist.map((data, key) => {
                        return (


                            <div key={data.id}>
                                <li className="media">
                                    <img className="mr-3 img-fluid" src={data.image} alt="" />

                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">{data.name}</h5>
                                        <p className="mt-3">{data.comment} </p>
                                    </div>
                                </li>


                            </div>


                        )



                    })}
                </ul>
            </div>

        </div >


    )
}
export default CommentList;