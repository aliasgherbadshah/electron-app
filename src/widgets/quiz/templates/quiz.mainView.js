import React from 'react';
import '../../../styles/widgets/quiz.css';
import '../../../styles/common/button.css';

const QuizMainView = (props) => {
    return (
        <div className={'quiz-main-wrapper box-shadow'}>
                <div className='quiz-question'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                </div>
                <br />
                <ul className='quiz-ul'>
                    <li>
                        <input type="radio" />
                        <span>Option 1</span>
                    </li>
                    <li>
                        <input type="radio" />
                        <span>Option 1</span>
                    </li>
                    <li>
                        <input type="radio" />
                        <span>Option 1</span>
                    </li>
                    <li>
                        <input type="radio" />
                        <span>Option 1</span>
                    </li>
                </ul>
                <div className='flex-end'>
                    <button className='button-primary'>
                        Submit
                    </button>
                </div>
        </div>
    );
}

export default QuizMainView;