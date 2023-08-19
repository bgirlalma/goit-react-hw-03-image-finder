import {ListItem, Item, Images} from './galleryItem.styled'
export const GalleryItem = ({ images }) => {
  if (!images || images.length === 0) {
    return;
  }

  return (
    <ListItem className="gallery-list">
      {images.map((image) => (
        <Item key={image.id} className="gallery-item">
          <Images src={image.webformatURL} alt={`${image.id}`} />
        </Item>
      ))}
    </ListItem>
  );
};


  
  
  
  