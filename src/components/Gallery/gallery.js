import { GalleryItem } from "components/GalleryItem/galleryItem";
import { Component } from "react";

export class Gallery extends Component {
    render(){
        return(
            <div>
                <ul class="gallery">
                <GalleryItem/>
                </ul>
            </div>
        )
    }
}