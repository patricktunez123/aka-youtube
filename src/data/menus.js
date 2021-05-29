import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";

export const menus = [
  {
    name: "Home",
    icon: <MdHome size={23} />,
    url: "/",
  },
  {
    name: "Subscription",
    icon: <MdSubscriptions size={23} />,
    url: "/feed/subscriptions",
  },
  {
    name: "Liked videos",
    icon: <MdThumbUp size={23} />,
  },
  {
    name: "History",
    icon: <MdHistory size={23} />,
  },
  {
    name: "Library",
    icon: <MdLibraryBooks size={23} />,
  },
  {
    name: "IDK!",
    icon: <MdSentimentDissatisfied size={23} />,
  },
  {
    name: "Logout",
    icon: <MdExitToApp size={23} />,
  },
];
