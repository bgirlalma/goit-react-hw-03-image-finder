import { Component } from "react";
import{BackDrob, ModalActive, CloseModal, ModalImage} from './modal.styled'
    export class Modal extends Component {
        render() {
            
            const {image} = this.props;
            return(
                <BackDrob className="overlay">
                <ModalActive className="modal">
                  <ModalImage src={image.largeImageURL} alt={image.id} />
                  <CloseModal type="button" onClick={this.props.closeModal}>Close</CloseModal>
                </ModalActive>
              </BackDrob>
            )
        }
    }