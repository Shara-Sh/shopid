import BestSells from "./components/BestSells";
import Category from "./components/Category";
import Feature from "./components/Feature";
import Header from "./components/Header";

function App() {
  return (
    <div className="m-auto md:w-11/12">
      <Header />
      <Feature />
      <Category />
      <BestSells />
    </div>
  );
}

export default App;
