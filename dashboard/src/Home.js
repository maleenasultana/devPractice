import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";

const Home = () => {
  const [notes, setNote] = useState([]);
  const [inputNote, setInputNote] = useState();

  const Add = (a) => {
    a.preventDefault();
    setNote([...notes, inputNote]);

    setInputNote("");
    console.log(inputNote);
  };

  return (
    <div
    // style={{
    //   margin: "5px",
    //   backgroundColor: "gray",
    //   width: "100%",
    //   height: "100vh"
    // }}
    >
      hello you have been routed to home
      <div className="container">
        <div className="heading">
          <h1>Welcome to my app</h1>
          <h3>Add things to do</h3>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Add note</label>
            <textarea
              type="text"
              value={inputNote}
              onChange={(a) => setInputNote(a.target.value)}
              className="input-group"
              rows="fit-content"
            />
          </div>
          <button
            disabled={!inputNote}
            type="submit"
            onClick={Add}
            className="btn btn-primary"
          >
            Add
          </button>
        </form>
        {/* {notes.map((val) => (
          <div className="container border ">{val}</div>
        ))} */}
        <div
          style={{
            margin: "5px",
            backgroundColor: "gray",
            width: "100%",
            height: "100vh"
          }}
        >
          <h1> added todos </h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {notes.map((val) => (
              <div>
                <div
                  className="card "
                  style={{ width: "10rem", margin: "5px" }}
                >
                  <div className="card-body ">
                    <div className="card-title ">{val}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
