import React from "react";


export default function Button({incrementPage, page, photo, totalHits}) {

        if (photo !== null && photo.length !== 0 && page !== 50 && page <= totalHits/10 ){
        return  ( <button onClick={ incrementPage} className="button" type="button">Load more</button>)}
  
    }




