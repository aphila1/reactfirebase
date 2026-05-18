import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Write from "./Components/Write";
import SplashScreen from "./SplashScreen";
import './SplashScreen';
import { useState, useEffect } from "react";



function App() {
  //Create a state variable called "showSplash" to control the visibility of the splash screen.
  const [isLoading, setIsLoading] =useState(true);

  //use "useEffect" to set a timer that will change the "showSplash" state to false after 3 seconds (3000 milliseconds).
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  //Conditional rendering is used to display the SplashScreen component while "showSplash" is true, and the main application content (the Router and Routes) when "showSplash" is false.
  if (isLoading) {
    return <SplashScreen />;
  }
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
