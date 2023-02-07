import {useState} from "react";
import './App.css';

function App() {
 const [data, setData] = useState([

    
{title:"book1", author: "abc", id: 1},
{title:"book2", author:"def", id: 2},
{title:"book3", author:"ghi",  id: 3},
{title:"book4", author:"jkl", id: 4},
{title:"book5", author:"mno", id: 5},

]);
  return (
    <>
    <div className="App">
      <header className="App-header">
       <h1>Display List</h1>
       {data.map((data)=> (
        <div key={data.id}>
        <h2>{data.title}</h2>
       <p> written by : {data.author}</p>
       </div>))}
      </header>
    </div>
    </>
  );
}

export default App;
