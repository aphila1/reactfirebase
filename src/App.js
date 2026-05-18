import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Write from "./Components/Write";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          // The Routes component is used to define the different routes in the application. 
          // Each Route component specifies a path and the corresponding component to render 
          // when that path is accessed. In this case, both the root path ("/") and the "/write" path 
          // will render the Write component, allowing users to input data and save it to the 
          // Firebase Realtime Database.
          <Route path="/" element={<Write />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
