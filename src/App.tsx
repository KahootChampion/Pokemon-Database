import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PokemonInfo from "./Pages/PokemonInfo/PokemonInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonInfo />} />
    </Routes>
  );
}

export default App;
