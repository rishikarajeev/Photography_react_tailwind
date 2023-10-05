import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PhotoDetailsPage from './Pages/PhotoDetailsPage';



function App() {
  return (
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/details/:id" element={<PhotoDetailsPage/>}></Route>
</Routes>
  );
}

export default App;
