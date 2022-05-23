import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={s['item']}>
            <span
                className={s['status']}
                style = {isOnline? { backgroundColor: 'green'} : {backgroundColor: 'red'}}
            />
            <img className={s['avatar']} src={ avatar} alt="User avatar" width="48" />
            <p className={s['name']}>{ name}</p>
        </li>
    )    
}

FriendListItem.propType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}