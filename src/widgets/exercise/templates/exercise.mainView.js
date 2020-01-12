import React,{Component} from 'react';
import Widgets from '../../index';
import '../../../styles/common/misc.css';

class ExerciseMainView extends Component {

    render(){
        return (
            <Widgets.ModalWrapper>
                <div>
                    <div className="main-heading">Exercise</div>
                    <div className="margin-top-140">
                        <div className="sub-heading">
                            Have you got any exercise planned over coming days ?
                        </div>
                    </div>
                </div>
            </Widgets.ModalWrapper>
                
        )
    }
    
}

export default ExerciseMainView;