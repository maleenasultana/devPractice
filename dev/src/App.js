import react,{useState} from "react";
import './App.css';

function App() {
  const list = [
    "apple",
    "banana",
    "mango",
    "pineapple",
    "orange",
    "watermelon",
    "berries",
    "grapes"
  ];

  const[filterlist, setFilterlist] = useState(list);

  const handleSearch = (e) => {
    if(e.target.value === ""){
      setFilterlist(list);
      return;
    }

    const filterValues = list.filter((item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
    setFilterlist(filterValues);
  };
  return (
    <div className="app">
  
        search: <input name="query" type= "text" onChange={handleSearch}/>
     
      {filterlist.map((item,index)=>(
        <div key={index} > {item} </div>
      ))}
    </div>
  );
}

export default App;
