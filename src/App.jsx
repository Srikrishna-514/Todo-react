import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("https://simpletodoapis-6n9s.onrender.com/api/todos/getAllTodos")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div>I learn how to connect frontend and backend this project</div>;
};

export default App;
