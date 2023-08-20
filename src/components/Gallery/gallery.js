import { GalleryItem } from "components/GalleryItem/galleryItem";
import { Component } from "react";
import{Container,} from './galery.styled'
export class Gallery extends Component {
    
    render(){
        const { images } = this.props;
        return(
            <Container>
                    <GalleryItem images={images}/>
            </Container>
        )
    }
}