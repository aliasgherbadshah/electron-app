import React from 'react';
import happy from '../../assets/happy.png';
import sad from '../../assets/sad.png';
import normal from '../../assets/normal.png';
import '../../styles/widgets/mooddiary.css';
import Widgets from '../index';
import { Link } from 'react-router-dom';

const Moorning = (props) => {
    return (
        <Widgets.ModalWrapper>
            <div>
                <div className="main-heading">Morning</div>
                <div className="mooddiary-margintop-40">
                    <div className="sub-heading">
                        How are you feeling today ?
            </div>
                    <div className="mooddiary-imagesection">
                       <Link to="/mooddiary"> <img src={happy} alt="happy" /></Link>
                       <Link to="/mooddiary"> <img src={sad} alt="sad" /></Link>
                       <Link to="/mooddiary"> <img src={normal} alt="normal" /></Link>
                       
                    </div>
                </div>
            </div>
        </Widgets.ModalWrapper>
    )
}

export default Moorning;