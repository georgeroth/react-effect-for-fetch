export default function UsersListItem({user, index, backgroundColor}) {
    return (
        <li className={backgroundColor}>
          <img
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
          <p>Email: {user.email}</p>
        </li>
    )
}