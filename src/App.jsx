import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />}/>
            <Route path="/chisiamo" element={<ChiSiamo />}/>
            <Route path="/prodotti" element={<Prodotti />}/>
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App