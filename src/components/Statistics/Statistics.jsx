import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

function Statistics({options, state, total, positiveFeedback}) {
    return ( 
        <>
            <ul className={styles.counter}>
                {options.map((option) => (
                    <li key={option} className={styles.counterValue}>
                    {option.slice(0, 1).toUpperCase() + option.slice(1)} : {state[option]}
                    </li>
                ))}
            </ul>
            <div>
                <p className={styles.counterValue}>Total: {total}</p>
                <p className={styles.counterValue}>Positive feedback: {positiveFeedback}%</p>
            </div>
        </>
  )
}

Statistics.propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        total: PropTypes.number.isRequired,
        positiveFeedback: PropTypes.number.isRequired
}

export default Statistics;