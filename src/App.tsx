import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PokemonInfo from "./Pages/PokemonInfo/PokemonInfo";
import Layout from "./Pages/Shared/LayoutComponent";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonInfo />} />
      </Routes>
    </Layout>
  );
}

export default App;
