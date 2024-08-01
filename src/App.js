
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Tasks from './components/Tasks';
import Messages from './components/Messages';
import Leaves from './components/Leaves';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}>Login</Route>
      <Route path="/signup" element={<Signup/>}>Signup</Route>
      <Route path="/dashboard" element={<Dashboard/>}>DashBoard</Route>
      <Route path="*" element={<PageNotFound/>}></Route>
      <Route path="/tasks" element={<Tasks/>}></Route>
      <Route path="/message" element={<Messages/>}></Route>
      <Route path="/leaves" element={<Leaves/>}></Route>
      </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
