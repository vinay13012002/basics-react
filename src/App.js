import { useContext, useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";
import Cart from "./components/Cart";
import Forms from "./Forms-task/Forms";
import FormDataHolder from "./Forms-task/FormDataHolder";
import Slider from "./Continue-slider/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactForm from "./react-hook-form/ReactForm";
import IndexSlider from "./imges-slider-and-bg-change/IndexSlider";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import FancyComponent from "./fancy-box/Index";
import TodoForm from "./Forms-task/TodoForm";
import TodoList from "./Forms-task/TodoList";
// import AsNavFor from "./imges-slider-and-bg-change/AsNavForSlick";
// import Login from "./miniContext-task/Login";
// import CustomContext from "./miniContext-task/Context";

function App() {
  const [data, setData] = useState([]);

  // const [some, setSome] = useState(0);
  // const increase = () => {
  //   setSome(some + 1);
  // };

  const [dataStore, setDataStore] = useState(data);

  console.log("Clicked Item:", dataStore);
  const dataSend = (id) => {
    const clickedItem = data.find((item) => item.id === id);
    setDataStore((prevClick) => [...prevClick, clickedItem]);
  };

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
        console.log(data, "data");
      } catch (error) {
        console.log(error, "err");
      }
    };
    FetchData();
  }, []);

  // const { title } = dataHolder;

  return (
    <>
      <Router>
        <HeaderComponent dataStore={dataStore} />
        <Routes>
          <Route
            path="/"
            element={
              <CardComponent
                dataHolder={data}
                // some={some}
                // increase={increase}
                dataSend={dataSend}
                dataStore={dataStore}
              />
            }
          ></Route>
          <Route path="IndexSlider" element={<IndexSlider />}></Route>
          <Route path="ReactForm/" element={<ReactForm />}></Route>
          <Route path="/Forms" element={<Forms />}></Route>
          <Route path="/Slider" element={<Slider />}></Route>
          <Route path="/FormDataHolder" element={<FormDataHolder />} />
          <Route path="/Fancy-box" element={<FancyComponent />} />
          <Route path="/TodoForm" element={<TodoForm />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/Cart" element={<Cart dataStore={dataStore} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
