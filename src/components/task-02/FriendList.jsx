import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";


export function FriendList({ friends }) {
    let b = 1;
  return (
    <ul className={ css.list}>
      {friends.map((friend) => (
        <li key={b++} className={ css.listItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
