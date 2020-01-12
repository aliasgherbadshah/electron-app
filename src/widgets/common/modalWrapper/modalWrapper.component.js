import React,{Component} from 'react';
import ModalWrapperMainView from './templates/modalWrapper.mainView';

class ModalWrapperComponent extends Component {

    render(){
        return(
            <ModalWrapperMainView
                children={this.props.children}
            />
        )
    }

}

export default ModalWrapperComponent;