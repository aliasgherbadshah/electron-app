import React,{Component} from 'react';
import Widgets from '../../index';
import '../../../styles/common/misc.css';
import MoodDiaryThoughts from "./moodDiary.thoughts";

class MoodDiaryMainView extends Component {
    state={
        moodSelectionView: true
    }

    toggleMoodSelectionView = () => {
        this.setState({
            moodSelectionView: !this.state.moodSelectionView
        })
    }

    render(){
        return (
            <Widgets.ModalWrapper>
                <div>
                
                    <div className="main-heading">Mood Diary</div>
                  
                        <MoodDiaryThoughts />
                    
                </div>
            </Widgets.ModalWrapper>
                
        )
    }
    
}

export default MoodDiaryMainView;