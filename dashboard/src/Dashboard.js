import React from "react";

const Dashboard = () => {
  const notes = [
    "this is dummy data",
    "how is it going ",
    " this data is not realtime",
    "this is dummy data",
    "how is it going ",
    " this data is not realtime"
  ];

  return (
    <div
      style={{
        margin: "5px",
        backgroundColor: "gray",
        width: "100%",
        height: "100vh"
      }}
    >
      hello you have been routed to Dashboard
      <h1> Things to do </h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((val) => (
          <div className="card " style={{ width: "10rem", margin: "5px" }}>
            <div className="card-body ">
              <div className="card-title ">{val}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
