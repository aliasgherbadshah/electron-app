import React, { Component } from 'react';
import Widgets from '../index';
import '../../styles/common/misc.css';
import PuzzelQuestion from './template/puzzle.question';
import StartPuzzel from './template/start.puzzle';

class Puzzel extends Component {
    state = {
        isPuzzleStart: false
    }

    startPuzzle = () => {
        this.setState({
            isPuzzleStart: true
        })
    }
    render() {
        return (
            <Widgets.ModalWrapper>
                {
                    this.state.isPuzzleStart ?
                        <StartPuzzel /> :
                        <PuzzelQuestion startPuzzle={this.startPuzzle} />
                }
            </Widgets.ModalWrapper>

        )
    }

}

export default Puzzel;