import { Modal } from '../Modal/modal';
import {ListItem, Item, Images} from './galleryItem.styled'
import { Component } from 'react';

export class GalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      selectedImage: null,
    }
  }
    setSelectedImage = (images) => {
      this.setState({selectedImage: images})
    }

    setModalOpen = (isOpen) => {
      this.setState({modalOpen: isOpen})
    }
    
       // Обработчик открытия модального окна
       openModal = (images) => {
        console.log('Opening modal with image:', images);
        this.setSelectedImage(images);
        this.setModalOpen(true);
      }

    // Обработчик закрытия модального окна
    closeModal = () => {
      console.log('Closing modal');
    this.setState({
      selectedImage: null,
      modalOpen: false,
    });
    };

  render(){
    console.log('GalleryItem received images:', this.props.images);
    const { images } = this.props;

    if (!images || images.length === 0) {
    return null;
  }
    const { modalOpen, selectedImage } = this.state;
    return (
      <ListItem className="gallery-list">
        {images.map((image) => (
          <Item key={image.id} className="gallery-item">
            <Images src={image.webformatURL} alt={`${image.id}`}  onClick={() => this.openModal(image)}/>
           
          </Item>
        ))}
  
        {modalOpen && (
          <Modal image={selectedImage} closeModal={this.closeModal}/>
        )}
      </ListItem>
    );
  }
};


  
  
  
  