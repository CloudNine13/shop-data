import Home from './components/Home/Home'
import Items from './components/Items/Items'
import Table from './components/Table/Table';
import Error404 from './components/404/404'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Detail from './components/Items/Item/Detail/Detail';

function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/items' element={<Items />}/>
          <Route path='/table' element={<Table />}/>
          <Route path='/detail' element={<Detail />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
