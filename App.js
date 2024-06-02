const Parent = React.createElement(
    "div",
    {id:"Parent"},
    React.createElement (
        "div",
        {id : "child"},
        [React.createElement("h1",{},"Hello everyone"),React.createElement("h2",{},"Hello everyone")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);