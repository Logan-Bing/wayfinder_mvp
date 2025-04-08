import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";

function App() {


  return (
    <div>
      <Router>
        <Layout>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<Form/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
