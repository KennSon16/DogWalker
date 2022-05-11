import UserObj from './UserObj';

function UserList(props)
{
  return (
      <ul>
        {props.users.map((user) =>
          <UserObj
            key={user.id}
            name={user.name}
            id={user.id}
            backgroud_image={user.backgroud_image}
            profile_image={user.profile_image}
            bio={user.bio}
            email={user.email}
            interest={user.interest}
          />)}
      </ul>
  );
}

export default UserList;
