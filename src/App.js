import { useDispatch } from "react-redux";
import Count from "./components/Count";

const App = () => {
  const dispatch = useDispatch();


  return (
    <div>
      <button onClick={(e) => dispatch({ type: "INCREMENT" })}>Increase</button>
      <Count />
      <button onClick={(e) => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
}

export default App