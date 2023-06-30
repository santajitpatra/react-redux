import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import Product from "./components/Product";
import products from "./products.json"
import { fetchTodos } from "./redux/slices/todo";


const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  console.log("state", state)

  if (state.todo.isLoading) {
    return <h1>loading...</h1>
    
  }

  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (<Product key={product.id} {...product}/>))}
      </div>
      <button onClick={(e) => dispatch(fetchTodos())}>fetch todo</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
    </div>
  );
}

export default App