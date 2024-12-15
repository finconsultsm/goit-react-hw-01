import sc from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={sc.profileCard}>
      <div className={sc.userInfo}>
        <img className={sc.avatar} src={image} alt="User avatar" />
        <p className={sc.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={sc.statsList}>
        <li className={sc.statsItem}>
          <span>Followers</span>
          <span className={sc.value}>{followers}</span>
        </li>
        <li className={sc.statsItem}>
          <span>Views</span>
          <span className={sc.value}>{views}</span>
        </li>
        <li className={sc.statsItem}>
          <span>Likes</span>
          <span className={sc.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
