{/* <div id="parent">
        <div id="children">
            <h1>This is h1 tag</h1>
            <h2>This is h2</>
        </div>
    </div> */}

    const parent = React.createElement(
        "div",
        {id:"parent"},[
        React.createElement(
            "div",{id:"children"}, [
                React.createElement("h1",{},"this is h1 tag"),
                React.createElement("h2",{},"This is h2"),
            ]),
        React.createElement(
            "div",{id:"children2"}, [
                React.createElement("h1",{},"this is h1 tag"),
                React.createElement("h2",{},"This is h2"),
            ])    
        ]);
    //mesy code for thiswe use jsx.
    
    // const parent = React.createElement(
    //     "div",
    //     {id:"parent"},
    //     React.createElement(
    //         "div",
    //         {id:"children"},
    //         React.createElement("h1",{},"this is h1 tag")//for single chidren
    //         )
    // );
    
    
    // const heading = React.createElement(
    //     "h1",
    //     {id:"heading",xyz:"abc"},
    //     "Hello React!");
    console.log(parent);//js object
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);// heading is h1 element for react