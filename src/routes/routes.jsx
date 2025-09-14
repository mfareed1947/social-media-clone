import FindFriend from "../pages/home/findFriend";
import Games from "../pages/home/games";
import Home from "../pages/home/home";
import MarketPlace from "../pages/home/marketPlace";
import Reels from "../pages/home/reels";

export const routes = [
  {
    path: "/home",
    component: <Home />,
  },
  {
    path: "/reels",
    component: <Reels />,
  },
  {
    path: "/market",
    component: <MarketPlace />,
  },
  {
    path: "/friends",
    component: <FindFriend />,
  },
  {
    path: "/games",
    component: <Games />,
  },
];
