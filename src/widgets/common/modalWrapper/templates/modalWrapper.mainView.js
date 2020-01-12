import React from 'react';
import '../../../../styles/common/modalWrapper.css';
import Navigator from '../../navigator';
import MindfulnessButton from '../../Buttons/MindfulnessButton';
import MooddiaryButton from '../../Buttons/MoodiaryButton';

const ModalWrapperMainView = (props) => {

    return (
        <React.Fragment>

            <div style={{ height: "97vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", position: "relative" }}>
                <Navigator />
                <MindfulnessButton />
                <div className='modalwrapper-container'>

                    {props.children}

                </div>
                <MooddiaryButton />
            </div>

        </React.Fragment>
    )

}

export default ModalWrapperMainView;