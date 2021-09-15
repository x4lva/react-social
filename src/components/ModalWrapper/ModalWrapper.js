import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector, useStore} from "react-redux";
import {setLoginModalShow} from "../../redux/actions/MainActions";

const ModalWrapper = (props, children) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {props.component}
            </Modal.Body>
        </Modal>
    );
};

export default ModalWrapper;