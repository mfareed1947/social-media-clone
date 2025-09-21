import { useAppContext } from "../../context/AppContext";

const Reels = () => {
  const values = useAppContext();
  console.log(values, "reels");
  return <div>Reels</div>;
};

export default Reels;
