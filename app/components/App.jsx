import Form from './Form';
import Home from './Home';
import Counter from './Counter';
import TailwindPage from './TailwindPage';
import MaterialUiAccordian from './MaterialuiAccordian';
import ClassComponent from './ClassComponent';
import { format } from "date-fns";
import {
  BrowserRouter, Routes, Route, Link
} from "react-router-dom";

const App = () => {

  const date = format(new Date(2014, 1, 11), "yyyy-MM-dd");
  console.log(date);

  return (
    <div>
      <h3>Test - 190 { date }</h3>
      <BrowserRouter>
        <div className='link'>
          <Link to="/app/">Home</Link>
          <Link to="/app/tailwind">Tailwind</Link>
          <Link to="/app/form">Form</Link>
          <Link to="/app/counter">counter</Link>
          <Link to="/app/materialui">Material UI</Link>
          <Link to="/app/classComponent">Class Component</Link>
        </div>
        <Routes>
          <Route path='*' element={ <Home /> } />
          <Route path='/app/tailwind' element={ <TailwindPage /> } />
          <Route path='/app/form' element={ <Form /> } />
          <Route path='/app/counter' element={ <Counter /> } />
          <Route path='/app/materialui' element={ <MaterialUiAccordian /> } />
          <Route path='/app/classComponent' element={ <ClassComponent /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;






