import { useState } from "react";
import store from "../stores/RobotStore.js";

const RobotForm = (props) => {
    const [robotName, setRobotName] = useState("");
    const [robotType, setRobotType] = useState("");
    const [robotMass, setRobotMass] = useState("");

    const handleRobotAdd = (event) => {
        store.addRobot({
            name: robotName,
            type: robotType,
            mass: robotMass,
        });
    };
    return (
        <>
            <h1>Robot form</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setRobotName("");
                    setRobotMass("");
                    setRobotType("");
                }}
            >
                <input
                    id="name"
                    type="text"
                    aria-label="name"
                    value={robotName}
                    onChange={(event) => {
                        setRobotName(event.target.value);
                    }}
                ></input>
                <input
                    id="type"
                    type="text"
                    aria-label="type"
                    value={robotType}
                    onChange={(event) => {
                        setRobotType(event.target.value);
                    }}
                ></input>
                <input
                    id="mass"
                    type="text"
                    aria-label="mass"
                    value={robotMass}
                    onChange={(event) => {
                        setRobotMass(event.target.value);
                    }}
                ></input>
                <button onClick={handleRobotAdd}>Add</button>
            </form>
        </>
    );
};

export default RobotForm;
