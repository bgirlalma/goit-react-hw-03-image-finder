import { GalleryItem } from "components/GalleryItem/galleryItem";
import { Component } from "react";
export class Gallery extends Component {
    render(){
        const { images } = this.props;
        return(
            <div>
                    <GalleryItem images={images}/>
            </div>
        )
    }
}