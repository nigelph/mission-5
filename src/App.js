import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InsuranceHome from './pages/InsuranceHome/InsuranceHome'
import Navbar from './global-components/Navbar/Navbar'
import Footer from './global-components/Footer/Footer'
import Header from './global-components/Header/Header'

function App() {
  return (
    <div className="global-container">
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InsuranceHome />}>

          </Route>
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
