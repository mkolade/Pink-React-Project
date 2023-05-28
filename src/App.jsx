import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          {/*The SWITCH in react-router-dom v5 is  ROUTES in react-router-dom v6*/}
          <Routes>
            <Route exact path='/' element={ <Home/>}/>
            <Route exact path='/create' element={ <Create/>}/>
            <Route exact path='/blogs/:id' element={ <BlogDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
