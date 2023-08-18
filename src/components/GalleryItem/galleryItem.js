export const GalleryItem = ({ images }) => {
  if (!images || images.length === 0) {
    return;
  }

  return (
    <ul className="gallery-list">
      {images.map((image) => (
        <li key={image.id} className="gallery-item">
          <img src={image.webformatURL} alt={`${image.id}`} />
        </li>
      ))}
    </ul>
  );
};


  
  
  
  