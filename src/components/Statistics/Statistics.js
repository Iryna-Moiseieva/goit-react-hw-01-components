import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


export default function Statistics({ title, stats }) {
    return (
        <section className={styles['statistics']}>
            {title && <h2 className={styles['title']}>{title}</h2>} 

            <ul className={styles['stat-list']}>
                {stats.map(data => {
                    return (
                        <li className={styles['item']} key={data.id}>
                            <span className={styles['label']}>{data.label}</span>
                            <span className={styles['percentage']}>{data.percentage}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
    ),
}

