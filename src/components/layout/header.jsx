// import {
//   FaFacebook,
//   FaHome,
//   FaVideo,
//   FaStore,
//   FaUsers,
//   FaTh,
//   FaPlus,
//   FaFacebookMessenger,
//   FaBell,
//   FaChevronDown,
// } from "react-icons/fa";
import {
  Facebook,
  Home,
  Video,
  Store,
  Users,
  Layout,
  Plus,
  MessageCircle,
  Bell,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import userIcon from "../../../public/icons/user_icon.jpg";

const menuItems = [
  {
    path: "/home",

    icons: Home,
  },
  {
    path: "/reels",

    icons: Video,
  },
  {
    path: "/market",

    icons: Store,
  },
  {
    path: "/friends",

    icons: Users,
  },
  {
    path: "/games",

    icons: Layout,
  },
];

const Header = () => {
  const location = useLocation();
  const { state } = useAuthContext();
  const { firstName, surName } = state;
  console.log(state);
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        {/* Left: Facebook Logo + Search */}
        <div className="flex items-center gap-3">
          <Facebook className="text-blue-600 w-8 h-8" />
          {/* <FaFacebook className="text-blue-600 w-8 h-8" /> */}
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-gray-100 rounded-full px-4 py-1 text-sm outline-none w-48"
          />
        </div>

        {/* Center: Navigation Icons */}
        <div className="flex gap-6">
          {/* <FaHome className="w-6 h-6 text-blue-600 border-b-4 border-blue-600 pb-1" />
          <FaVideo className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
          <FaStore className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
          <FaUsers className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
          <FaTh className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" /> */}

          {/* <Home className="w-6 h-6 text-blue-600 border-b-2 border-blue-600" />
          <Video className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
          <Store className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
          <Users className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
          <Layout className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" /> */}
          {menuItems.map(({ classes, icons: Icon, path }, index) => {
            return (
              <Link key={index} to={path}>
                <Icon
                  className={`${
                    path == location.pathname
                      ? "text-blue-600"
                      : "text-gray-500"
                  } w-6 h-6 hover:text-blue-600 cursor-pointer`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: Profile + Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img
              src={userIcon}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-sm">{firstName + surName}</span>
          </div>

          <button className="bg-gray-200 p-2 rounded-full">
            <Plus className="w-5 h-5" />
            {/* <FaPlus className="w-4 h-4" /> */}
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <MessageCircle className="w-5 h-5" />
            {/* <FaFacebookMessenger className="w-4 h-4" /> */}
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <Bell className="w-5 h-5" />
            {/* <FaBell className="w-4 h-4" /> */}
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <ChevronDown className="w-5 h-5" />
            {/* <FaChevronDown className="w-4 h-4" /> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
