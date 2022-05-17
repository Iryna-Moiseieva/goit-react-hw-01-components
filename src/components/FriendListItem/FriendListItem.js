import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={styles['item']}>
            <span
                className={styles['status']}
                style = {isOnline? { backgroundColor: 'green'} : {backgroundColor: 'grey'}}
            ></span>
            <img className={styles['avatar']} src={ avatar} alt="User avatar" width="48" />
            <p className={styles['name']}>{ name}</p>
        </li>
    )    
}

FriendListItem.propType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}