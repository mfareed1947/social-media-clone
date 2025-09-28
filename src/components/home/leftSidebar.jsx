import React from "react";
import userIcon from "../../../public/icons/user_icon.jpg";
const shortcuts = [
  {
    name: "Save the Pomeroy Theatre",
    icon: "/images/save-theatre.jpg", // Replace with actual image path
  },
  {
    name: "Weekend Trips",
    icon: "/images/weekend-trips.jpg",
  },
  {
    name: "Jasper's Market",
    icon: "/images/jaspers-market.jpg",
  },
  {
    name: "Red Table Talk Group",
    icon: "/images/red-table.jpg",
  },
  {
    name: "Best Hidden Hiking Trails",
    icon: "/images/hiking-trails.jpg",
  },
];

const LeftSidebar = () => {
  return (
    <div className="w-64 p-4 space-y-6 bg-white">
      {/* Profile */}
      <div className="flex items-center space-x-3">
        <img
          src={userIcon}
          alt="Josephine Williams"
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium text-gray-800">Josephine Williams</span>
      </div>

      {/* Menu */}
      <div className="space-y-4">
        <SidebarItem icon="🎬" label="Watch" />
        <SidebarItem icon="📅" label="Events" />
        <SidebarItem icon="👥" label="Friends" />
        <SidebarItem icon="🕓" label="Memories" />
        <SidebarItem icon="⬇️" label="See More" />
      </div>

      {/* Shortcuts */}
      <div>
        <h3 className="text-gray-500 text-sm font-semibold mb-2">Shortcuts</h3>
        <div className="space-y-3">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex items-center space-x-3">
              <img
                src={userIcon || shortcut.icon}
                alt={shortcut.name}
                className="w-8 h-8 rounded-md object-cover"
              />
              <span className="text-sm text-gray-800">{shortcut.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
    <span className="text-xl">{icon}</span>
    <span className="text-gray-800 font-medium">{label}</span>
  </div>
);
