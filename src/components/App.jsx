import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  import Other from './other/other.jsx';
  import Home from './home/home.jsx';
  import Header from './home/header/header.jsx';
  

export default function App() {
  return (
    <Router>
      <header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="other" element={<Other />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}