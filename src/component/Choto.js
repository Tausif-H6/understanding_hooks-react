import React,{useState} from 'react'
import Chotomamacard from './Chotomamacard'


function Choto() {
    const bioData = [
        {
            id: 0,
            name: "Mitul",
            age: 40,
            amount: 200,
            url: "https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png"

        },
        {
            id: 1,
            name: "Mitul friend 2",
            age: 80,
            amount: 200,
            url: "https://icons-for-free.com/iconfiles/png/512/guy+hipster+man+icon-1320166734287352721.png"

        },
        {
            id: 2,
            name: "Mitul friend 3",
            age: 60,
            amount: 200,
            url: "https://icons-for-free.com/download-icon-disney+princess+lady+princess+icon-1320166734379413664_512.png"

        },
        {
            id: 3,
            name: "Mitul friend 4",
            age: 50,
            amount: 200,
            url: "https://icons-for-free.com/iconfiles/png/128/disney+princess+jasmine+princess+icon-1320166733656334505.png"

        },

    ]

    const [value , setValue ]=useState(bioData);


    const removePeople = (id) => {
        alert("Removing element.Are you sure!!?" + id)
        const myNewarry= bioData.filter((element)=>{
            return element.id !=id;
        })
        setValue(myNewarry);
    }

    
    return (
        <div>
            <div className="container">
            <h1 className="text-center" style={{fontSize:50, }}>
            See the members of Sabik Pharma</h1>
                <div className="row">
                    {
                        bioData.map((element) => {
                            return <div className="col-md-3 my-4">
                             <Chotomamacard name={element.name} age={element.age} amount={element.amount} imgurl={element.url}  id={element.id} remoVe={removePeople()}/>
                            </div>

                        })

                    }
                </div>

            </div>




        </div>

    )
}

export default Choto
