import "./global/globalStyles.scss";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./routes/auth.routes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
