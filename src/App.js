import './App.scss';
import BookSelfHome from './components/book-self-home';
import BookReader from './components/book-reader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/reader">
            <BookReader />
          </Route>
          <Route path="/home">
            <BookSelfHome />
          </Route>
          <Route path="/">
            <BookReader />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
