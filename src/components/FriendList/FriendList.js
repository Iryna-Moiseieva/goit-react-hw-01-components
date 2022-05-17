import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
    return (
        <ul className={styles["friend-list"]}>
            {friends.map(({ id, avatar, name, isOnline }) => { 
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                );
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequired
    )
}

 // Массив объектов конкретного типа
// optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

// Объект с определённой структурой
//   optionalObjectWithShape: PropTypes.shape({
//     color: PropTypes.string,
//     fontSize: PropTypes.number
//   }),
