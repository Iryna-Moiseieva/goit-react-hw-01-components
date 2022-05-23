import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={s["friend-list"]}>
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
