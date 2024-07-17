import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminForm from './pages/admin/AdminForm';
import './assets/style.css';


// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       {/* <Route path="/admin" element={<AdminForm />} /> */}
//     </Routes>
//   </Router>
// );
function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
