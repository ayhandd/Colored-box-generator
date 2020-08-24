import React from 'react'

const Inputs = (props) => {
    const {color, setColor, results, setResults} = props;
    const colorBox = (e) => {
        setColor(e.target.value);
    } 
    const addBox = (e) => {
        const temp = {color: color}
        setResults([...results, temp])
        setColor("");
        
    }
    return(
        <div>
            <h1>Generate boxes with your choise of color</h1>
            <label>Color: </label>
            <input onChange={colorBox} type="text" name="color" value={color}/>
            <button onClick={addBox}>Add</button>
        </div>
    )
}
export default Inputs 