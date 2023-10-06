import { NavBar } from "./components/NavBar/NavBar";
import { ProductsList } from "./components/Products/ProductsList";
import { Fotter } from "./components/Footer/Fotter";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ProductsList />
      <Fotter />
    </>
  );
}

export default App;
