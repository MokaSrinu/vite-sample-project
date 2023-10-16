import { Route, Routes } from 'react-router-dom';
import './App.module.scss';
import { ExpenseTracker, ToDoList, WeatherForecast } from './pages';

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<ToDoList />}/>
        <Route path="/todo-list" element={<ToDoList />}/>
        <Route path='/expense-tracker' element={<ExpenseTracker />}/>
        <Route path='/weather-forecast' element={<WeatherForecast />}/>
      </Routes>
    </>
  )
}

export default App
