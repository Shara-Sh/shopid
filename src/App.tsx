import BestSells from "./components/BestSells";
import Category from "./components/Category";
import Feature from "./components/Feature";
import Header from "./components/Header";
import News from "./components/News";

function App() {
  return (
    <div className="m-auto md:w-11/12">
      <Header />
      <Feature />
      <Category />
      <BestSells />
      <News />
    </div>
  );
}

export default App;
