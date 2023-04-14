import FormContainer from "./containers/FormContainer";

import "./App.scss";

export default function App() {
    return (
        <div id="app">
            <div id="left">
                <FormContainer />
            </div>
            <div id="right">
                right
            </div>
        </div>
    ) 
}