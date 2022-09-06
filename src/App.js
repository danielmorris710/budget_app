import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Bills from './components/Bills'
import Bill from './components/Bill'
import Edit from './components/EditBill'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='bill-man'> Bill Manager </h1>
      </header>
      <div className='App-body'>
        <Router>
          <Routes>
            <Route path='/' element={<Bills/>} />
            <Route path='/:id' element={<Bill/>} />
            <Route path='/:id/edit' element={<Edit/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
