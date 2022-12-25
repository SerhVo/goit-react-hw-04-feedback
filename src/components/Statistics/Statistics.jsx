import PropTypes from 'prop-types';
import { StatWrapper, StatInfo } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <StatWrapper>
                <StatInfo>Good: {good}</StatInfo>
                <StatInfo>Neutral: {neutral}</StatInfo>
                <StatInfo>Bad: {bad}</StatInfo>
                <StatInfo>Total: {total}</StatInfo>
                <StatInfo>Positive feedback: {positivePercentage}%</StatInfo>
            </StatWrapper>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
