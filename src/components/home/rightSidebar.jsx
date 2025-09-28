import React from "react";

const sponsoredItems = [
  {
    title: "Lebo's Pizza",
    url: "lebospizza.com",
    image: "/images/lebo-pizza.jpg",
  },
  {
    title: "Jasper’s Market Produce Sale",
    url: "jaspersmarket.com",
    image: "/images/jaspers-market.jpg",
  },
];

const contacts = [
  { name: "Dennis Han", avatar: "/images/dennis.jpg" },
  { name: "Eric Jones", avatar: "/images/eric.jpg" },
  { name: "Cynthia Lopez", avatar: "/images/cynthia.jpg" },
  { name: "Betty Chen", avatar: "/images/betty.jpg" },
];
const RightSidebar = () => {
  return (
    <div className="w-64 p-4 space-y-6 bg-gray-50 text-sm text-gray-800">
      {/* Sponsored */}
      <div>
        <h3 className="text-gray-500 font-semibold mb-2">Sponsored</h3>
        <div className="space-y-3">
          {sponsoredItems.map((item, index) => (
            <div key={index} className="flex space-x-3 items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Birthdays */}
      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-gray-500 font-semibold mb-2">Birthdays</h3>
        <p className="flex items-start space-x-2">
          <span className="text-lg">🎁</span>
          <span>
            <span className="font-medium">Jessica, Erica</span> and{" "}
            <span className="font-medium">2 others</span> have birthdays today
          </span>
        </p>
      </div>

      {/* Contacts */}
      <div className="border-t border-gray-300 pt-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-500 font-semibold">Contacts</h3>
          <div className="flex items-center space-x-2">
            <button className="text-xl">🔍</button>
            <button className="text-xl">⋯</button>
          </div>
        </div>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-3">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{contact.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating action icon (bottom right corner) */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
          🖊️
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
