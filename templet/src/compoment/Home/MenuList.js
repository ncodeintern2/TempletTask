import React, { useEffect, useState } from "react";


const MenuList = () => {
    const [menuData, setMenuData] = useState([])
    useEffect(() => {
        const fetData = async () => {
            const responseData = await fetch('https://template-34792-default-rtdb.firebaseio.com/menuOne.json')
            const response = await responseData.json();
            const loadData = []
            for (const key in response) {
                loadData.push({
                    id: key,
                    data: response[key].data,
                    amount: response[key].amount,
                })
            }
            setMenuData(loadData)
        }
        fetData();
    }, [])

    return (
        <ul>
            {menuData.map((u, key) => {
                return (
                    <div className="menu-item" key={u.id}>
                        <li>
                            <div className="row border-dot no-gutters">

                                <div className="col-8 menu-item-name">
                                    <h6>{u.data}</h6>
                                </div>
                                <div className="col-4 menu-item-price text-right">
                                    <h6>{u.amount}</h6>
                                </div>


                            </div>
                        </li>

                    </div>
                )
            })}

        </ul>

    )

}
export default MenuList;