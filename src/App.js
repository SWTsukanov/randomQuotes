import React,{useState, useEffect} from 'react'

import './App.css';

import Quote from "./components/quote/Quote.component";


function App() {
    const [color,setColor] = useState('rgba(0,0,0,1)')
    const [autor,setAutor] = useState('')
    const [data,setData] = useState([])
    const [quote,setQuote] = useState('')
    let randomIndex = 0

    useEffect(()=>{

        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setData([...data])
                setQuote(data[randomIndex].text)
                setAutor(data[randomIndex].author)
            });
    },[])

    const changeQuoteClick = () => {
        setColor(`rgba(${Math.random()*255+1},${Math.random()*255+1},${Math.random()*255+1},0.6)`)
        randomIndex = Math.floor( Math.random() * 1642 +1);
        setQuote(data[randomIndex].text)
        setAutor(data[randomIndex].author)
    }
    return (
        <div className="App" style={{backgroundColor : color}}>
         <Quote autor={autor} text={quote} color = {color} handleClick={changeQuoteClick}/>
        </div>
    );
}

export default App;
