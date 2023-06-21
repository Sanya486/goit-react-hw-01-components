import css from './FriendList.module.css'
import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
export function FriendList({friends}) {
    return (
      <ul className={css.friendsList}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendsListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
        
      </ul>
    );
}

FriendList.propTypes ={
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}
