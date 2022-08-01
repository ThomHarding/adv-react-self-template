import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Other from './Other/Other.jsx';
import Home from './Home/Home.jsx';
import Header from './Header/Header.jsx';
import Forms from './Forms/Forms.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import MonsterList from './Monsters/MonsterList.jsx';
import MonsterProvider from '../state/context/monsterContext.jsx';

export default function App() {
  return (
    <Router>
      <Toaster />
      <Header />
      <MonsterProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="other" element={<Other />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="monsters" element={<MonsterList />} />
          <Route path="forms" element={<Forms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MonsterProvider>
    </Router>
  );
}
