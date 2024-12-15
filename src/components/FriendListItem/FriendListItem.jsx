import sc from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={sc.name}>{name}</p>
      <p className={isOnline ? sc.online : sc.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendListItem;
