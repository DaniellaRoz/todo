import { Title, Description, DueBy, Submit } from "../components/FormComponents";

import "./FormContainer.scss";

export default function FormContainer() {
    return (
        <div id="formContainer">
            <form>
                <Title />
                <Description />
                <DueBy />
                <Submit />
            </form>
        </div>
    )
}