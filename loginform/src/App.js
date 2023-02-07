import {useState} from "react";

import LoginForm from "./component/LoginForm";
import './App.css';

function App() {
  const  adminUser ={
    email : "admin@admin.com",
    password : "admin123"
  }

  const [user, setUser] = useState({name:"", password: ""});
  const [error, setError] = useState("");

  const login = details =>{
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
      name: details.name,
      email:details.email
    })
    }else{
      console.log("Details do not matched");
      setError("Details do not matched")
    }
  }
  const logout =()=>{
   setUser({user:"",email:""});
  }
  return (
    <div className="App">

        {(user.email != "") ? (
          <div className="welcome">
            <h2>Welcome ,<span>{user.name}</span></h2>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={login} error={error}/>
        )}
  

    </div>
  );
}

export default App;
