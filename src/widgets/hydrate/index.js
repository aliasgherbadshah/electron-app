import React,{Component} from 'react';
import Widgets from '../index';
import '../../styles/common/misc.css';

class Hydrate extends Component {

    render(){
        return (
            <Widgets.ModalWrapper>
                <div>
                    <div className="main-heading">Hydrate</div>
                    <div className="mooddiary-margintop-40">
                    <div className="sub-heading">
                      Why dont you do the water run for your collegues?
                      <br/><br/>
                      That way you will help to keep your team hydrated.
                    </div>
                    </div>
                </div>
            </Widgets.ModalWrapper>
                
        )
    }
    
}

export default Hydrate;