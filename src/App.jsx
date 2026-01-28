import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"

const App = () => {
  return (
    <>
      <h1>si parte!!!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/homepage" element={<Homepage />}></Route>
            <Route path="/chisiamo" element={<ChiSiamo />}></Route>
            <Route path="/prodotti" element={<Prodotti />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App