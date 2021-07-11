import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Blog from './components/Pages/Blog';
import Services from './components/Pages/Services';
import SignIn from './components/Pages/SignIn';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Blog" component={Blog} />
                    <Route path="/Services" component={Services} />
                    <Route path="/SignIn" component={SignIn} />
                </Switch>
            </Router>
        </>
    )
}

export default App;

