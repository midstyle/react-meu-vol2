import Signin from "./components/jsx/index.jsx";
import Dashbaord from "./components/jsx/dashboard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./components/jsx/sidenav";
import "./App.css";
import ForgotPass from "./components/jsx/forgotpass";
import Profilepage from "./components/jsx/profilepage.jsx";
import Profilepageadd from "./components/jsx/profilepageadd.jsx";
import Registry from "./components/jsx/registry";
import Registryinformation from "./components/jsx/registryinformation";
import Student_Classes from "./components/jsx/student&classes";
import Students from "./components/jsx/students";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="dashboard" element={<Dashbaord />} />
          <Route path="forgot_password" element={<ForgotPass />} />
          <Route path="profilepage" element={<Profilepage />} />
          <Route path="profilepageadd" element={<Profilepageadd />} />
          <Route path="registry" element={<Registry />} />
          <Route path="registryinformation" element={<Registryinformation />} />
          <Route path="classespage" element={<Student_Classes />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
