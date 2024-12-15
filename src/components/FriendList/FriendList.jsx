import FriendListItem from "../FriendListItem/FriendListItem";
import sc from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={sc.list}>
      {friends.map((friend) => (
        <li className={sc.item} key={friend.name}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
