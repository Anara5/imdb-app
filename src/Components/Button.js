import React from "react";

const Button = ({click, isClicked}) => {
    return <button onClick={isClicked}>
    {click}
    </button>;
};
export default Button;