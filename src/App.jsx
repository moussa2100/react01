import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

export const App = () =>{

return (
<div className="container">
<div>Name:mdd </div>
<div>Framework: react</div>
<div>Language: JavaScript</div>
<div>CSS: Empty CSS</div>
</div>
);

}
ReactDOM.render(<App />, document.getElementById("app"));
