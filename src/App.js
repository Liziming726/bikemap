import RouterView from "./router";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <RouterView></RouterView>
      </Router>
    </>
  );
}

export default App