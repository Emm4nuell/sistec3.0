import  'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CadastrarUsuario from './pages/CadastrarUsuario';
import Container from './layout/Container';
import Footer from './layout/Foonter';
import Nav from './layout/Nav'
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Container customClass="min_height">
          {window.location.pathname !== '/' ?<Nav /> : ''}
          <Routes>
            <Route exact path='/' element={<Login />}/>
            <Route exact path='/cadastrar' element={<CadastrarUsuario />}/>
          </Routes>  
      </Container>
      {window.location.pathname !== '/' ?<Footer /> : ''}
        </BrowserRouter>
  );
}

export default App;
