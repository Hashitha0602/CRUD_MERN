import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import CodeForInterview from "./components/CodeForInterview";
import AllUsers from "./components/AllUsers";

import { BrowserRouter,Route,Routes } from "react-router-dom";
import EditUser from "./components/EditUser";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element= {<CodeForInterview />} />
        <Route path='/all' element= {<AllUsers />} />
        <Route path='/add' element= {<AddUser />} />
        <Route path='/edit/:id' element ={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
