import './App.css';
import './styles.scss'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route path='/' element={<Landing />} />
           <Route path='/home' element={<Home />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
