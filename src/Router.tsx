import Home from './components/Home/Home'
import Items from './components/Items/Items'
import Error404 from './components/404/404'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/items" element={<Items />}/>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
