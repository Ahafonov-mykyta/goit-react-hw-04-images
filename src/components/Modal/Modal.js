

import React from "react";

export default class Modal extends React.Component {

    onKeyHandle = (e) => {
      if(e.code === 'Escape'){
        this.props.onToogleModal()
      }  
      };
    
    componentDidMount(){
        window.addEventListener('keydown', this.onKeyHandle )
    }
    
    componentWillUnmount(){
      window.removeEventListener('keydown',  this.onKeyHandle )
  }
    

    render(){
     return  (  
         <div onClick={(e)=> { if(e.target.classList.contains("overlay")){ this.props.onToogleModal() }}} className="overlay">
        <div className="modal">
          <img
            src={this.props.largeImageURL}
            alt=""
          />
        </div>
      </div>)
    }
}