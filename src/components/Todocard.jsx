import React from "react";
import { useNavigate } from "react-router-dom" 

function TodoCard({ props }) {

    const navigate = useNavigate()
  const { id, title, completed } = props;

//   console.log(title);
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "gray",
        margin: "10px",
        padding: "15px",
        textAlign: "center"      }}
        onClick={()=>{
            navigate(`/todos/${id}`)
        }}
    >
      <h3>id : {id}</h3>
      {/* <h4>title : {title}</h4>
            <h4>{`completed: ${completed}`}</h4> */}
    </div>
  );
}

export default TodoCard;
