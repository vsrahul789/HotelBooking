import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
} from "react-router-dom";

import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Homepage</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
