import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (
        <h1>
            Hello World
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

// https://dev.to/deadwing7x/setup-a-react-app-with-webpack-and-babel-4o3k