import css from './FriendsListItem.module.css';
import PropTypes from 'prop-types'; 

export function FriendsListItem({avatar, name, isOnline}) {
    return (
      <li className={css.item}>
        {isOnline ? (
          <span className={css.isOnline}></span>
        ) : (
          <span className={css.isOffline}></span>
        )}
        <img className={css.avatar} src={avatar} alt={name} width={48} />
        <p className={css.name}>{name}</p>
      </li>
    );
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
}