import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Incomes from './pages/Incomes';
import Expenses from './pages/Expenses';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  );
}
