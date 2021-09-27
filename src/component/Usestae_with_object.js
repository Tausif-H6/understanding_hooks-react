import React,{useState} from 'react'

function Usestae_with_object() {
  


    const [myObj,setmyObj]=useState({
        myname:"Tausif ",
        roll:12586,
        id:75
    });

    const changeObj = () => {
       //setmyObj({myname:"Asif",roll:56,id:56});
      // setmyObj({myname:"Dada"})//Obj er baki portion pabe na 
      /*  solution is    spread operator*/
      setmyObj({...myObj,myname:"tausif hossain"})
    }


const clearText =()=>{
    setmyObj("");
}




    return (
        <div>
            <div className="container">
            
            <div className="row">
            <h1>Name : {myObj.myname} & rollis:{myObj.roll} & id:{myObj.id} </h1>
            <button className="btn" onClick={changeObj}>Click me</button>
            <button className="btn" onClick={clearText}>Clear me</button>
            
            </div>
            
            
            
            </div>
        </div>
    )
}

export default Usestae_with_object
