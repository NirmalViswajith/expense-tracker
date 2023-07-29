import "bootstrap/dist/css/bootstrap.min.css";
import AddProductForm from "./Components/AddProductForm";
import ListProvider from "./Components/ListContext/ListProvider";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <ListProvider>
        <AddProductForm />
        <ProductList />
    </ListProvider>
  );
}

export default App;
