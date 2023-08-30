import './App.css';

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import JsonReaderApp from './components/JsonTextReader';
import QuestionViewport from './components/QuestionViewport';
import Dash from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function MainNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">React Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className='nav-link'>Json Reader</Link>
                    <Link to="/question-viewport" className='nav-link'>Question Viewport</Link>
                    <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}


function App() {
  const [jsonVal, setJsonVal] = useState('');
  const [trackQuestion, setTrackQuestion] = useState([]);

  const jsonReaderCallback = (value) => {
    setJsonVal(value);
    setTrackQuestion([...trackQuestion, value]);
  };

  useEffect(() => {
    console.log("json reader callback: ", jsonVal);
    console.log("track question value: ", trackQuestion);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path='/' element={<JsonReaderApp callback={jsonReaderCallback} />} />
          <Route path='/question-viewport' element={<QuestionViewport text={ jsonVal } />} />
          <Route path='/dashboard' element={<Dash questions={trackQuestion} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
