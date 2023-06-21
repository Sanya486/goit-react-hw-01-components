import css from './FriendList.module.css'
import PropTypes from 'prop-types';

export function FriendList({friends}) {
    return (
      <ul className={css.friendsList}>
        {friends.map(({ id, isOnline, avatar, name }) => {
          return (
            <li key={id} className={css.item}>
              {isOnline ? (
                <span className={css.isOnline}></span>
              ) : (
                <span className={css.isOffline}></span>
              )}
              <img className={css.avatar} src={avatar} alt={name} width={48} />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    );
}

FriendList.propTypes ={
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })),
}
