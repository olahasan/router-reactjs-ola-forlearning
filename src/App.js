import './App.css';

import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NotFound from './Components/NotFound';
import Books from './Components/Books';
import AddNewBook from './Components/AddNewBook';
import RelatedBooks from './Components/RelatedBooks';
import Ola from './Components/Ola';
import Ali from './Components/Ali';
import Mona from './Components/Mona';

function App() {
  return (
    <div className="App">
    <h1> react router dom 6</h1>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <NavLink to ="/contact">Contact</NavLink>
        <Link to ="/books">Books</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} >
          <Route path ="Ola" element={<Ola/>} />
          <Route path ="Ali" element={<Ali/>} />
        </Route>

        <Route path="/Books" element={<Books/>} >
          <Route path ="AddNewBook" element={<AddNewBook/>}/>
          <Route path ="RelatedBooks" element={<RelatedBooks/>}>
            <Route path ="Ola" element={<Ola/>} />
            <Route path ="Ali" element={<Ali/>} />
            <Route path ="Mona" element={<Mona/>} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
      <h3>foooter</h3>
    </div>
  );
}

export default App;
