import UserList from '../components/user/UserList';

const DUMMY_DATA = [
  {
    id: 'p1',
    name: 'Emma Emma',
    backgroud_image: 'https://i.imgur.com/OvwRnz4.png',
    profile_image:'https://static.wixstatic.com/media/b0f5f0_899895dc14e644ae8d72b1a4c9bc3fe8~mv2.jpg/v1/fill/w_680,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dog%2520pic%252010_edited.jpg',
    bio:"I am proud to be your dog sitter!",
    email: 'fakeemail@doggy.com',
    interest: 'Walks, Early Raiser, Outdoors'
  },
  {
    id: 'p2',
    name: 'Jake Jake',
    backgroud_image: 'https://i.imgur.com/OvwRnz4.png',
    profile_image:'https://bulletproofdogtraining.com/wp-content/uploads/2020/02/mike.jpg',
    bio:"I work well with misbehaving dogs!",
    email: 'anotherfakeemail@doggy.com',
    interest: 'Walks, Dog Tricks , Helping abused dogs'
  },
];

function Profile()
{
  return (
    <section>
      <UserList users={DUMMY_DATA}>
      </UserList>

    </section>
  );
}

export default Profile;
