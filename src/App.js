
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './login';
import { Auth } from './context/context';
import { useState } from 'react';
import Employees from './Employees';
import Upload from './Upload';
// import Menu from './menu';



function App() {
  const [sesion, setSesion] = useState(false)
  const home = "/";
  return (
    <div
      id="MainAPP"
      className='divMainApp'
    >
      <Auth.Provider value={{ sesion, setSesion }}>
        <BrowserRouter>
          <Routes>
            <Route exact path={home} element={<Login />} />
            <Route exact path={home + "/EMPLOYEES"} element={<Employees />} />
            <Route exact path={home + "/Upload"} element={<Upload />} />
            <Route
              path="*"
              element={
                sesion === false ?
                  <main style={{ padding: "1rem" }}>
                    <h1>:c</h1>
                    <p>There's nothing here!</p>
                  </main> : <Login />
              }
            />
          </Routes>
        </BrowserRouter>
      </Auth.Provider>
    </div>
  );
}

export default App;
