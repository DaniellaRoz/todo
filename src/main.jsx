import React from "react"
import ReactDOM from "react-dom/client"
import FormContainer from "./containers/FormContainer";
import TodoContainer from "./containers/TodoContainer"; 
import "./index.scss"

ReactDOM.createRoot(document.getElementById("left")).render(
    <React.StrictMode>
        <FormContainer />
    </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById("right")).render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode> 
)