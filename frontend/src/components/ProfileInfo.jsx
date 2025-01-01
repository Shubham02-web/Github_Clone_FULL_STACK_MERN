import { IoLocationOutline } from "react-icons/io5";
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserFollowLine,
} from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberSince } from "../utils/functions";
const ProfileInfo = ({ userProfile }) => {
  // const userProfile = {
  //   avatar_url:
  //     "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //   bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
  //   email: "johndoe@gmail.com",
  //   followers: 100,
  //   following: 200,
  //   html_url: "https://github.com/burakorkmez",
  //   location: "Somewhere,  Earth",
  //   name: "john Doe",
  //   public_gists: 100,
  //   public_repos: 100,
  //   twitter_username: "johndoe",
  //   login: "johndoe",
  // };

  const memberSince = formatMemberSince(userProfile?.created_at);
  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10">
      <div className="bg-glass hover:bg-gray-600/10 rounded-lg p-4">
        <div className="flex gap-4 items-center">
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={userProfile?.avatar_url}
              className="rounded-md w-24 h-24 mb-2"
              alt=""
            />
          </a>
          <div className="flex gap-2 items-center flex-col">
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-glass hover:bg-gray-600/10 font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View On Github
            </a>
          </div>
        </div>
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p className="text-sm">{userProfile?.bio.substring(0, 60)}....</p>
          </div>
        ) : null}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            {userProfile?.location}
          </div>
        ) : null}
        {userProfile?.twitter_username ? (
          <a
            href={`https://twitter.com/${userProfile.twitter_username}`}
            target="_blank"
            rel="nonreferrer"
            className="flex items-center gap-2 hover:text-sky-500"
          >
            <FaXTwitter />
            {userProfile?.twitter_username}
          </a>
        ) : null}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Member Since</p>
          <p className="">{memberSince}</p>
        </div>
        {userProfile?.email && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Email Address</p>
            <p className="">{userProfile.email}</p>
          </div>
        )}
        {userProfile?.name && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Full Name</p>
            <p className="">{userProfile?.name}</p>
          </div>
        )}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">User Name</p>
          <p>{userProfile?.login}</p>
        </div>
        <div className="flex flex-wrap gap-2 mx-4">
          <div className="flex items-center gap-2 hover:bg-gray-600/10 bg-glass rounded-lg p-2 flex-1 min-w-24">
            <RiUserFollowFill className="w-5 h-5 text-blue-800" />
            <p className="text-xs">Followers: {userProfile?.followers}</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-600/10 bg-glass rounded-lg p-2 flex-1 min-w-24">
            <RiUserFollowLine className="w-5 h-5 text-blue-800" />
            <p className="text-xs">Following: {userProfile?.following}</p>
          </div>

          <div className="flex items-center gap-2 hover:bg-gray-600/10 bg-glass rounded-lg p-2 flex-1 min-w-24">
            <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
            <p className="text-xs">Public repos: {userProfile?.public_repos}</p>
          </div>

          <div className="flex items-center gap-2 hover:bg-gray-600/10 bg-glass rounded-lg p-2 flex-1 min-w-24">
            <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
            <p className="text-xs">Public gists: {userProfile?.public_gists}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
