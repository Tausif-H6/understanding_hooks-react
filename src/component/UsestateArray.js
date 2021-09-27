import React, { useState } from 'react'

export default function UsestateArray() {
    const bioData = [
        {
            id: 0,
            name: "Tausif1",
            age: 20

        },
        {
            id: 1,
            name: "Tausif2",
            age: 20

        },
        {
            id: 2,
            name: "Tausif3",
            age: 20

        },
        {
            id: 3,
            name: "Tausif4",
            age: 20

        },

    ]

    const [myArr, setmyArr] = useState(bioData )

    let changeState = () => {
        
        setmyArr([]);
        console.log(myArr)
        setmyArr([]);
        console.log(myArr);
    }

    return (
        <div>

            <div className="row" >
                {
                    bioData.map((element) => {
                        return <h1 key={element.id}>Name :{element.name}& Age:{element.age} & id:{element.id} </h1>
                    })
                }
            </div>
            <button className="btn" onClick={changeState}> clear</button>

        </div>
    )
}
