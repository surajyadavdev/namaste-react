import React from "react";
import ReactDOM from "react-dom/client";



    // const parent = React.createElement(
    //     "div",
    //     {id:"parent"},[
    //     React.createElement(
    //         "div",{id:"children"}, [
    //             React.createElement("h1",{},"this is h1 tag"),
    //             React.createElement("h2",{},"This is h2"),
    //         ]),
    //     React.createElement(
    //         "div",{id:"children2"}, [
    //             React.createElement("h1",{},"this is h1 tag"),
    //             React.createElement("h2",{},"This is h2"),
    //         ])    
    //     ]);
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
    
    // console.log(parent);//js object

    // const heading = React.createElement(
    //     "h1",
    //     {id:"heading",xyz:"abc"},
    //     "Hello React!");s
    const elem = <span>React Elem</span>
    const JsxHeading = (
        <h1 className="head" tabIndex="1">
        {elem}
        Namaste react Jsx Introductions</h1>
    );
    
    // const HeadingComponent = ()=>{
    //     return<h1 className="heading">It is  Functional componenet </h1>;
    // };
    const JsxHeading1 = () =>(
        <h1 className="head" tabIndex="1">
        Namaste react Jsx1 Introductions</h1>
    );
    const number = 1000;
    const JsxHeading2 = () =>(
        <h1 className="head" tabIndex="1">
        Namaste react Jsx Introductions</h1>
    );
    const JsxHeading3 = function(){
        return(
            <h1 className="head" tabIndex="1">Normal function</h1>
        );
        };
    const HeadingComponent = ()=>(
        <div id="container">
            {number}
            {JsxHeading}
            <JsxHeading1/>
            {JsxHeading()}// jsx at the end is function so we can call it 
            <JsxHeading1> </JsxHeading1>
            <JsxHeading2/>
            <JsxHeading3/>

            <h1 className="heading">It is  Functional componenetss </h1>
        </div>
    );


    // console.log(jsxHeading);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent/>);