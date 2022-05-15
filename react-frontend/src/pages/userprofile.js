import React from "react";
import UserList from '../components/user/UserList';

const DUMMY_PROFILE = [
  {
    id: 'p3',
    name: 'Kenn Son',
    backgroud_image: 'https://i.imgur.com/OvwRnz4.png',
    profile_image:'https://media-exp1.licdn.com/dms/image/C5603AQEGoAGlgeMfOA/profile-displayphoto-shrink_800_800/0/1601860635727?e=1657756800&v=beta&t=g6x2KpEltarfOe0NmXhwnu8T_aWivUBn1Ol7hdd5NaY',
    bio:"Hello! I am always in need of someone who can take care of my dog!",
    email: 'kennson@doggy.com',
    interest: 'Walks, Dog Tricks, Outdoors'
  },
];


const userprofile = () => {
  return (
    <section>
      <div>
        This is you! The user!
      </div>
      <UserList users={DUMMY_PROFILE}>
      </UserList>

    </section>
  );
};

export default userprofile;
