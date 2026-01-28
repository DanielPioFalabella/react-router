import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Homepage />}/>
            <Route path="chisiamo" element={<ChiSiamo />}/>
            <Route path="prodotti" element={<Prodotti />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App