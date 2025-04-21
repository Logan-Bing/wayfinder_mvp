import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home";
import PageTransiton from "./pages/PageTranstion/PageTransition"
import Form from "./pages/Form/Form";
import Result from "./pages/Result/Result";
import Domain from "./pages/Domain/Domain"
import Plan from  "./pages/Plan/Plan"

function App() {


  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pagetransition" element={<PageTransiton/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="/domain/:domainId" element={<Domain/>}/>
            <Route path="/plan/:planId" element={<Plan/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
