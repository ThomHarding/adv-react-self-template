import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  import Other from './Other/Other.jsx';
  import Home from './Home/Home.jsx';
  import Header from './Home/Header/Header.jsx';
  

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="other" element={<Other />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}