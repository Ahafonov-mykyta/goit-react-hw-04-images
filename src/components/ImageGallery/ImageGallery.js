import React from "react";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { Grid } from  'react-loader-spinner'

export default class  ImageGallery extends React.Component {
    state={
        photo:null,
        totalHits: null,
        showModal: false,
        largeImageURL: null,
        loading:false
    }
    
    onToogleModal = () => {
       this.setState(prevState => ({ showModal: !prevState.showModal }));
    };

    showLargeImage = (event) => {
      this.onToogleModal()
  
      const photoIndex = event.target.getAttribute("name");
      const url = this.state.photo[photoIndex].webformatURL
      this.setState({
        largeImageURL:url,
      })

    }

   fetchPhoto = () => {
   
       return fetch(
            `https://pixabay.com/api/?q=${this.props.name}&page=${this.props.page}&key=28643311-9e0ce007077315ffa397e3b9e&image_type=photo&orientation=horizontal&per_page=10`
          ).then(res => res.json())
    }


    // componentDidMount (){
    //   this.setState({loading:true})
    // }

    componentDidUpdate(prevProps, prevState){

        if(prevProps.name !== this.props.name){
          this.setState({loading:true})
          return setTimeout(()=> this.fetchPhoto().then(data =>  this.setState({photo : [...data.hits], totalHits: data.totalHits,   loading: false})).finally(()=> this.setState({loading:false})), 0)
          
        }

        if(prevProps.page !== this.props.page ){
          this.setState({loading:true})
         return setTimeout(()=> this.fetchPhoto().then(data => this.setState({photo :[ ...prevState.photo, ...data.hits]})).finally(()=> this.setState({loading:false})), 0)
        
        }
    }


    render(){
       return (
        <>
        <ul className="imageGallery">
        {this.state.loading && <Grid
    height = "200"
    width = "200"
    radius = "9"
    color = '#3f51b5'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass = "loader"
  />}
         {this.state.showModal && <Modal showModal={this.state.showModal} onToogleModal={this.onToogleModal} largeImageURL={this.state.largeImageURL}/> } 
        {this.state.photo && this.state.photo.map((photo,index) => {
                return(
                    <li key={photo.webformatURL}  onClick={this.showLargeImage} className="imageGalleryItem">
                    <img name={index} className="imageGalleryItem-image" src={photo.webformatURL} alt={photo.tags} />
                  </li>
                )
            })}

          
     </ul>
    <Button incrementPage={this.props.incrementPage} page={this.props.page} photo={this.state.photo} totalHits={this.state.totalHits}/>
    </>
     
     )
    }

}
