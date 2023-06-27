import { Route, Routes } from "react-router-dom"
import Card from './Card/components/Card';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Card />} />
    </Routes>
  );
}

export default App;
