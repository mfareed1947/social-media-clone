import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const values = useAppContext();
  console.log(values, "values");
  const [state, setstate] = useState(0);

  // useEffect(() => {
  // console.log("parent render");
  // }, []);

  return (
    <div>
      <button onClick={() => setstate(state + 1)}>click</button>
      {state}
      <Child />
    </div>
  );
};

export default Home;

const Child = () => {
  // useEffect(() => {
  // console.log("child render");
  // }, []);

  return (
    <>
      <div className=" w-12 sm:16 md:w-20">child</div>
    </>
  );
};

// function a() {} re-render
// function b() {} re-render na ho

// /products // 3 sec
// [] 100

//useMemo

// useMemo(
//   () =>
//     function b() {
//       return null;
//     },
//   [next]
// );
