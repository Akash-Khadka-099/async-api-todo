import React, { useEffect, useState } from "react";

import axios from "./axios";

function AllTodo() {
  const [fetchData, setFetchData] = useState([]);
  async function fetchApi() {
    const response = await axios.get();
    setFetchData(response.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  console.log(fetchData);
  return (
    <div>
      {/* { fetchData ? <p>{ fetchData.title}</p> : <p>not loaded </p> } */}
      {fetchData.map((item)=>{
        return(
          <div style={{ width:"250px", backgroundColor:"gray",margin:"10px", padding:"15px" }}>
            <h3>id : {item.id}</h3>
            <h4>{item.title}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default AllTodo;
