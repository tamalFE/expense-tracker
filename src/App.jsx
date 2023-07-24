import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Incomes from './pages/Incomes';
import Expenses from './pages/Expenses';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
