import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import List from "./components/List";
import BootstrapRoutes from "./components/bootstrap";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/bootstrap" component={BootstrapRoutes}/>
                        <Route path="/" component={List} exact={true}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
