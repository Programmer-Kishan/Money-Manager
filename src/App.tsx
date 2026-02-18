import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout';

import AddMoneyDetails from "./pages/AddMoneyDetail";
import Charts from './pages/Charts';
import Comparision from './pages/Comparision';
import Records from './pages/Records';
import Stats from './pages/Stats';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<AddMoneyDetails />} />
        <Route path="/MonthlyDetails" element={<Records />} />
        <Route path="/MonthlyCharts" element={<Charts />} />
        <Route path="/Comparision" element={<Comparision />} />
        <Route path="/Stats" element={<Stats />} />
      </Route>
    </Routes>
  )
}

export default App
