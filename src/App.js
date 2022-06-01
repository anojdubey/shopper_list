import { Route, Routes } from "react-router";
import AddShop from "./component/AddShop";
import Home from "./Home";


function App() {
  return (
    <div style={{flex:1}} >
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/add" element={<AddShop/>} />
      </Routes>
    </div>
  );
}

export default App;
