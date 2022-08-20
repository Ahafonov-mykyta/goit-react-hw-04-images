import {useState, useEffect} from "react";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { Grid } from  'react-loader-spinner'

export default function  ImageGallery({name, incrementPage, page})  {

    const [photo, setPhoto] = useState(null)
    const [totalHits, setTotalHits] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [largeImageURL, setLargeImageURL] = useState(null)
    const [loading, setLoading] = useState(false)

    
    const onToogleModal = () => {
      setShowModal(prevState=> !prevState)
    };

    const showLargeImage = (event) => {
      onToogleModal()
  
      const photoIndex = event.target.getAttribute("name");
      const url = photo[photoIndex].webformatURL
      setLargeImageURL(url)
      

    }

    const fetchPhoto = () => {
      return fetch(
           `https://pixabay.com/api/?q=${name}&page=${page}&key=28643311-9e0ce007077315ffa397e3b9e&image_type=photo&orientation=horizontal&per_page=10`
         ).then(res => res.json())
    };


    useEffect(()=>{
      if(name=== ''){
        return;
      }
      
      setLoading(true)
       setTimeout(()=> fetchPhoto().then(data => {setPhoto(data.hits); setTotalHits(data.totalHits)}).finally(()=> setLoading(false)), 0)
    },[name]
    )

    useEffect(()=>{
      if(page=== 1){
        return;
      }
      setLoading(true)
       setTimeout(()=> fetchPhoto().then(data =>  setPhoto(prevState => [...prevState, ...data.hits])).finally(()=> setLoading(false)), 0)
    },[page]
    )
   
       return (
        <>
        <ul className="imageGallery">
        {loading && <Grid
    height = "200"
    width = "200"
    radius = "9"
    color = '#3f51b5'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass = "loader"
  />}
         {showModal && <Modal showModal={showModal} onToogleModal={onToogleModal} largeImageURL={largeImageURL}/> } 
        
        { photo && photo.map((photo,index) => {
                return(
                    <li key={photo.webformatURL}  onClick={showLargeImage} className="imageGalleryItem">
                    <img name={index} className="imageGalleryItem-image" src={photo.webformatURL} alt={photo.tags} />
                  </li>
                )
            })}

          
     </ul>
    <Button incrementPage={incrementPage} page={page} photo={photo} totalHits={totalHits}/>
    </>
     
     )
    }


