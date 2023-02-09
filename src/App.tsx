import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MUIProvider } from './Providers/MUI.Provider';

export function App() {
  return (
    <MUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Hello World</h1>} />
          <Route path='*' element={<h1>404 - Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </MUIProvider>
  );
}
