import React from 'react'

const Display = (props) =>{
    const {results} = props;
    return(
        <div>
            {results && results.map((result, i)=>(
            <div className="square" style={{backgroundColor:`${result.color}`}} key={i}></div>
            ))}
        </div>
        
        
    )
}
export default Display;