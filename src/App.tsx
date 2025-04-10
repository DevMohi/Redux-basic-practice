import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import { Button } from "./components/ui/button";
// import { decreament, increament } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const dispatch = useAppDispatch();
  // const { count } = useAppSelector((state) => state.counter);

  // const handleIncreament = (amount: number) => {
  //   dispatch(increament(amount));
  // };

  // const handleDecreament = () => {
  //   dispatch(decreament());
  // };
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default App;

//redux er jnno wrapper lagbe and redux toolkit lagbe
