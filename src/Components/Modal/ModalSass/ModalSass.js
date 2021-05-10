import React from 'react';
import './ModalSass.scss';

const ModalSass = (props) => {
    document.body.style.overflow = "hidden";

    return (
        <div className="modal_sass">
            <div className="bg" onClick={() => {
                props.setsassAlert(false)
                document.body.style.overflow = "unset"
            }}>

                <div className="content">
                    <p className="title"><strong>Sass</strong></p>
                    <p>Sass와 같은 CSS pre-processor 사용에 능숙합니다. </p> 
                    <i class="fas fa-caret-down"></i>
                </div>
                
            </div>
        </div>
    );
};

export default ModalSass;