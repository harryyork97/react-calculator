import React from "react";
import "./Button.css";

type ButtonProps = {
    buttonValue: string;
    buttonType: "number" | "operator";
    setOperator: React.Dispatch<React.SetStateAction<string>>;
    setClickedValue: React.Dispatch<React.SetStateAction<string>>;
    setFirstNum: React.Dispatch<React.SetStateAction<string>>;
    firstNum: string;
    clickedValue: string;
    solveEquation: () => void;
};

const Button = ({
    buttonValue,
    buttonType,
    setOperator,
    setClickedValue,
    setFirstNum,
    clickedValue,
    solveEquation,
    firstNum,
}: ButtonProps): JSX.Element => {
    const setUpEquation = () => {
        const operators: string[] = ["+", "-", "x", "÷"];
        if (operators.includes(buttonValue)) {
            checkForMultipleOperator();
        } else if (buttonValue === ".") {
            if (clickedValue.indexOf(".") === -1) {
                setClickedValue((value) => value + buttonValue);
            }
        } else {
            setClickedValue((value) => value + buttonValue);
        }
    };

    const checkForMultipleOperator = (): void => {
        if (firstNum && clickedValue) {
            solveEquation();
            setOperator(buttonValue);
        } else if (firstNum && !clickedValue) {
            setOperator(buttonValue);
        } else {
            setFirstNum(clickedValue);
            setClickedValue("");
            setOperator(buttonValue);
        }
    };

    return (
        <button
            className={`button ${
                buttonType === "number" ? "button--number" : "button--operator"
            }`}
            onClick={setUpEquation}
        >
            {buttonValue}
        </button>
    );
};

export default Button;
