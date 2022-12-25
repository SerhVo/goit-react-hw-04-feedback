
import {
    BtnFeedback, BtnWrap
} from "./Feedback.styled";
import PropTypes from 'prop-types';


const FeedbackOption = ({ option, onLeaveFeedback }) => {
    return (
        <>
            <BtnWrap>
                {option.map(el => (<BtnFeedback key={el} type='button' onClick={onLeaveFeedback}>{el}</BtnFeedback>))}
            </BtnWrap>
        </>
    );
};

FeedbackOption.propTypes = {
    option: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption