import{Route, Routes, Navigate} from 'react-router-dom';
import Main from './components/Main/Main.tsx';
import SignUp from './components/Signup/SignUp.tsx';
import Login from './components/Login/Login.tsx';


function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path="/login" exact element = {<Login/>}/>}
      <Route path="/signup" exact element = {<SignUp/>}/>
      <Route path="/login" exact element = {<Login/>}/>
      <Route path="/" exact element =  {<Navigate replace to ="/login"/>}/>
    </Routes>
  
  );
}

export default App;
