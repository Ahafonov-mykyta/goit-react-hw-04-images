

import {useEffect} from "react";

export default function Modal ({showModal,onToogleModal,largeImageURL}) {

     const onKeyHandle = (e) => {
      if(e.code === 'Escape'){
        onToogleModal()
        
      }  
      };
    
      useEffect(()=> {
      window.addEventListener('keydown', onKeyHandle )

      return()=>{
        window.removeEventListener('keydown', onKeyHandle )
      }
    },[])


    

   
     return  (  
         <div onClick={(e)=> { if(e.target.classList.contains("overlay")){ onToogleModal() }}} className="overlay">
        <div className="modal">
          <img
            src={largeImageURL}
            alt=""
          />
        </div>
      </div>)
    }
