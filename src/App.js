import "./global/globalStyles.scss";
import { BrowserRouter as Router } from "react-router-dom";

import { Pages } from "./routes/auth.routes";

function App() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
