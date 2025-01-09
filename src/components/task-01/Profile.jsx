import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={ css.container}>
      <div className={ css.imgContainer}>
    <img
          src={image}
          alt="User avatar"
          className={css.image}
    />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
  </div>

      <ul className={ css.list}>
    <li className={ css.listItem}>
      <span>Followers</span>
          <span className={ css.follower}>{stats.followers}</span>
    </li>
    <li className={ css.listItem}>
      <span>Views</span>
          <span className={ css.follower}>{stats.views}</span>
    </li>
    <li className={ css.listItem}>
      <span>Likes</span>
          <span className={ css.follower}>{stats.likes}</span>
    </li>
  </ul>
</div>

  );
}

export default Profile;
