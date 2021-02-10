import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

// import components
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Certificates from './components/Certificates';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/post/:slug" component={SinglePost}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/certificates" component={Certificates}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
