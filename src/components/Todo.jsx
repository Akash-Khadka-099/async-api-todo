import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "./Axios";

function Todo() {
  const [todoDetails, setTodoDetails] = useState({});
  const { id } = useParams();

  async function fetchApi() {
    const response = await axios.get(`todos/${id}`);
    setTodoDetails(response.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);
//   console.log(todoDetails);
  const { id: todoId, userId, completed, title } = todoDetails;
  return (
      <div>
      { todoDetails ?
         (<div
      style={{
        textAlign: "center",
        backgroundColor: "gray",
        margin: "15px",
        padding: "15px",
        width: "300px",
      }}
    >
      <p>{`userID : ${userId} `}</p>
      <p>{`ID : ${todoId} `}</p>
      <p>{`title : ${title} `}</p>
      <p>{`completed : ${completed} `}</p>
    </div>)
      
      :
      (<p>api yet loading</p>)
    }
    </div>
    
  );
}

export default Todo;
