import React from "react";


export default class Button extends React.Component{

    render(){
       
        if (this.props.photo !== null && this.props.photo.length !== 0 && this.props.page !== 50 && this.props.page <= this.props.totalHits/10 ){
        return  ( <button onClick={ this.props.incrementPage} className="button" type="button">Load more</button>)}
       
       }
        
       
    }




