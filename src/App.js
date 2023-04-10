import './App.css';
import {BrowserRouter as Router,Link,Routes,Route } from "react-router-dom";
import CalciComponent from './Components/CalciComponent/CalciComponent';
import CvComponent from './Components/CvComponent/CvComponent';
import AxiosComponent from './Components/AxiosComponent/AxiosComponent';
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">CV</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Axios">Axios</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/Calculator' element={<CalciComponent/>}></Route>
          <Route exact path='/Axios' element={<AxiosComponent/>}></Route>
          <Route exact path='/' element={<CvComponent/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
