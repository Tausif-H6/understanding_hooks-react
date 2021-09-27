import React, { useState } from 'react'

export default function Usestatehook() {
    const [text, setText] = useState(" ")

    const changeTeaxt = () => {
        let temptext = text;
        (temptext === 'Allahu') ? setText('Subhan Allah ') : setText('Allahu');
        num = num + 1;
        changeNum(num);

    }
    var [num, changeNum] = useState(0)
    // const changeNumber = () => {
    //     num = num + 1;
    //     changeNum(num);
    // }

    return (
        <div className="container">

            <div>
         <h1 >Digital tasbih by Tausif</h1>
                <h1>
                    {text}
                </h1>
                <h4>Count: {num}</h4>
               
                <button type="button" className="btn btn-dark" onClick={changeTeaxt}>Click me !</button>
            </div>

        </div>
    )
}
