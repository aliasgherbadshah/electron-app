import React, { Component } from 'react';
import Widgets from '../index';
import '../../styles/common/misc.css';

class Breath extends Component {
   
    render() {
        return (
            <Widgets.ModalWrapper>
                <div>


                    <div className="main-heading">Breath</div>
                    <p style={{textAlign:"center", marginTop:"10px"}}> follow the breath pulse</p>
                   
                    <div className="mooddiary-margintop-40">
                        <div className="sub-heading">
                           Breath in for 5 seconds.<br/>
                           Breath out for 7 seconds.
                                    </div>

                      
                    </div>

                </div>
            </Widgets.ModalWrapper>

        )
    }

}

export default Breath;