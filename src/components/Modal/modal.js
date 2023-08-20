import { Component } from "react";
import Modal from 'react-modal';
import {AiOutlineCloseCircle} from "react-icons/ai";
import{BackDrop, ModalActive, CloseModal, ModalImage} from './modal.styled'

Modal.setAppElement('#root');
    export class CustomModal extends Component {
        render() {
            
            const {image, closeModal} = this.props;
            return(
              <Modal
              isOpen={true} 
              onRequestClose={closeModal}
              style={{
                overlay: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
                content: {
                  position: 'static',
                  overflow: 'hidden',
                  backgroundColor: 'rgb(255, 255, 255)',
                  cursor: 'default',
                },
              }}
            >
              <BackDrop>
                <ModalActive>
                <CloseModal onClick={closeModal}>{AiOutlineCloseCircle()}</CloseModal>
                  <ModalImage src={image.largeImageURL} alt={image.id}/>
                </ModalActive>
              </BackDrop>
            </Modal>
            )
        }
    }