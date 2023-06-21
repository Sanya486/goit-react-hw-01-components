import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import {Profile} from './Profile/Profile'
import { Statistics } from './Statistics/Staticstics';
import { FriendList } from './FriendList/FriendList';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </>
  );
};
