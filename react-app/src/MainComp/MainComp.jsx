import { useState } from "react"
import './MainComp.css'

export default function MainComp(){
    const [color, setColor] = useState('');
    function changeColor(e){
        console.log(e.target.value)
        setColor(e.target.value)
    }

    return (
    <>

        MainComp
       
        <br />
        <ColorSelector color={color} onChangeColor={changeColor}/>
        <br />
        <PrevieBox color={color} />
    </>
    )
}


function ColorSelector({color, onChangeColor}){
    
    return (
        <>
            Color Selector
            <select onChange={onChangeColor}  name="select" id="">
                <option value="">choose color</option>
                <option value="orange">orange</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>
        </>
    )
}

function PrevieBox({color}){

    return (
        <>
            Preview Box
            <div className="field" style={{backgroundColor: color}}>

            </div>
        </>
    )
}