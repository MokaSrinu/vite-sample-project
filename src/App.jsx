import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  ExpenseTracker,
  Home,
  RQSuperHeros,
  ToDoList,
  TraditionalSuperHeros,
  WeatherForecast,
} from "./pages";
import Layout from "./components/Layout/Layout";
import "./App.module.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
          <Route
            path="traditional-super-heros"
            element={<TraditionalSuperHeros />}
          />
          <Route path="rq-super-heros" element={<RQSuperHeros />} />
          <Route path="todo-list" element={<ToDoList />} />
          <Route path="expense-tracker" element={<ExpenseTracker />} />
          <Route path="weather-forecast" element={<WeatherForecast />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
