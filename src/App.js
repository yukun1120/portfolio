import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/Content/HomePage';
import BlogPage from './components/Content/BlogPage';
import SnsPage from './components/Content/SnsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sns" element={<SnsPage />} />
        </Routes>
    </div>
  );
}

export default App;
