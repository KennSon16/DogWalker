import { Link } from "react-router-dom";

function UserObj(props)
{
    return (
        <div class="space-x-6 rounded-3xl overflow-hidden shadow-xl max-w-xl mx-auto my-40 bg-blue-200">
          <div>
            <img src={props.profile_image} alt={props.name}/>
          </div>
          <div class="text-xl">
            <div class="flex space-x-5">
              <div>Name:</div>
              <div>{props.name}</div>
            </div>
            <div class="flex space-x-6">
              <div>Email:</div>
              <div>{props.email}</div>
            </div>
            <div>Interest: {props.interest}</div>
          </div>
          <div class="space-y-5">{props.bio}</div>
          <div>
            <Link
              to="/needhelp"
              className="py-2 px-4 bg-blue-500 rounded-full text-1xl hover:bg-green-300 transition duration-300 ease-in-out items-center"
            >
              Hire!
            </Link>
          </div>
        </div>
    );
}

export default UserObj;
