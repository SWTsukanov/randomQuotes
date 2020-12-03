import React from 'react'

 import  './quote.component.scss'

const Quote = ({text, autor, color,handleClick})=>{
    const linkTwitter = `https://twitter.com/intent/tweet?hashtags=quotes&text="${text}"%20${autor}`;

    // <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank"
    //    href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Christopher%20Columbus&amp;content=You%20can%20never%20cross%20the%20ocean%20until%20you%20have%20the%20courage%20to%20lose%20sight%20of%20the%20shore.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
    //    style="background-color: rgb(189, 187, 153);">
    //     <i className="fa fa-tumblr"></i>
    // </a>

    const linkTmblr = `https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=${autor}&content=${text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button`;
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
                        <a href = {linkTwitter} style = {{backgroundColor:color}}><i className="fab fa-twitter"></i></a>
                        <a href={linkTmblr} style = {{backgroundColor:color}}><i className="fab fa-tumblr"></i></a>
                    </div>
                    <button style = {{backgroundColor:color}} onClick={handleClick}>
                        New quote
                    </button>
                </div>
            </div>
        )
}

export default Quote;