import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operation, setOperation] = useState("add");
    const [answer, setAnswer] = useState(0);
    const [user, setUser] = useState("");

    useEffect(() => {
        console.log("update answer");
        if (operation === "add") {
            setAnswer(number1 + number2);
        } else if (operation === "subtract") {
            setAnswer(number1 - number2);
        } else if (operation === "multiply") {
            setAnswer(number1 * number2);
        } else if (operation === "exponent") {
            setAnswer(number1 ** number2);
        } else {
            setAnswer(number1 / number2);
        }
    }, [number1, number2, operation]);

    const handleClick = (number) => {
        if (number === 1) {
            setNumber1(number1 + 1);
        } else {
            setNumber2(number2 + 1);
        }
    };

    const handleChange = (e) => {
        setOperation(e.target.value);
    };

    return (
        <div className="App">
            {user ? (
                <h5>Hello {user}!</h5>
            ) : (
                <button onClick={() => setUser("henry")}>Login</button>
            )}
            <h3>1st Number: {number1}</h3>
            <button onClick={() => handleClick(1)}>Incremet</button>
            <h3>2nd Number: {number2}</h3>
            <button onClick={() => handleClick(2)}>Incremet</button>
            <br />
            <h3>Operation: {operation}</h3>
            <select title="operation" onChange={handleChange} value={operation}>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
                <option value="exponent">Exponent</option>
            </select>
            <h2>Answer: {answer}</h2>
        </div>
    );
}

export default App;
