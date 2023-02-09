import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
