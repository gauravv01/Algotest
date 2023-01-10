import { Route,Routes } from 'react-router-dom';
import FetchedPage from './pages/FetchedPage';
import LegPage from './pages/LegPage';
import constants from './constants/Constants';

function App() {
  return (
    <Routes>
      <Route path={constants.HOME_PAGE} element={<LegPage/>}/>
      <Route path={constants.DATA_PAGE} element={<FetchedPage/>}/>
    </Routes>
  );
}

export default App;
