import { CustomModal} from '../Modal/modal';
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
        this.setSelectedImage(images);
        this.setModalOpen(true);
      }

    // Обработчик закрытия модального окна
    closeModal = () => {
    this.setState({
      selectedImage: null,
      modalOpen: false,
    });
    };

  render(){
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
          <CustomModal image={selectedImage} closeModal={this.closeModal}/>
        )}
      </ListItem>
    );
  }
};


  
  
  
  