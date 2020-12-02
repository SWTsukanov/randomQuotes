import React from 'react'

 import  './quote.component.scss'

const Quote = ({text, autor, color,handleClick})=>{
    const link = `https://twitter.com/intent/tweet?hashtags=quotes&text="${text}"%20${autor}`
    return(
            <div className='wrapper'style = {{color:color}} id="quote-box" >
                <div className='text' id="text">
                    "{text}"
                </div>
                <div className='autor' id="author">
                    -{autor}-
                </div>
                <div className="buttons">
                    <div className="sotialNetwork">
                        <a href = {link} style = {{backgroundColor:color}}><i  className="fa fa-twitter"></i></a>
                        <a href="#" style = {{backgroundColor:color}}><i className="fa fa-fighter-jet"></i></a>
                    </div>
                    <button style = {{backgroundColor:color}} onClick={handleClick}>
                        New quote
                    </button>
                </div>
            </div>
        )
}

export default Quote;