import { useDispatch } from "react-redux";
import Cart from "./components/Cart";
import Product from "./components/Product";
import products from "./products.json"


const App = () => {
  const dispatch = useDispatch();


  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (<Product key={product.id} {...product}/>))}
      </div>
    </div>
  );
}

export default App