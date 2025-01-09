
import css from "./FriendList.module.css"
import clsx from "clsx";

export function FriendListItem({ avatar, name, isOnline }) {
 const ifOnline = clsx(css.onlineStatus, {
    [css.online]: isOnline,
    [css.offline]: !isOnline, 
  });
    return (
 <div>
  <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
         <p className={ifOnline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
</div>

    );
}

export default FriendListItem
