import React from 'react'

function Chotomamacard(props) {
    let { name, age, amount, imgurl, id ,remoVe} = props;









    return (
        <>



            <div className="card" >
                <img src={imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <p className="card-text">Age:{age} & Amount:{amount}</p>

                    <button className="btn btn-primary" onClick={()=>remoVe(id)}>RemoveMe!!</button>
                </div>
            </div>










        </>

    )
}

export default Chotomamacard

