import React, { useEffect, useState } from "react";

import axios from "./Axios";
import TodoCard from "./Todocard";

function AllTodo() {
  const [fetchedData, setFetchedData] = useState([]);
  async function fetchApi() {
    const response = await axios.get(`/todos`);
    setFetchedData(response.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  // console.log(fetchedData);
  return (
    <div>
      {/* { fetchData ? <p>{ fetchData.title}</p> : <p>not loaded </p> } */}
      {fetchedData ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {fetchedData.slice(0, 10).map((item) => {
            return <TodoCard key={item.id} props={item} />;
          })}
        </div>
      ) : (
        <h1> api yet not loaded</h1>
      )}
    </div>
  );
}

export default AllTodo;
