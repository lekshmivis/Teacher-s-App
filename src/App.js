import logo from './logo.svg';
import './App.css';
import AddTeachers from './Components/AddTeachers';
import SearchTeacher from './Components/SearchTeacher';
import DeleteTeacher from './Components/DeleteTeacher';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AddTeachers/>}/>
    <Route path='/search' element={<SearchTeacher/>}/>
    <Route path='/delete' element={<DeleteTeacher/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
