import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MUIProvider } from './Providers/MUI.Provider';
import { Home } from './Pages/Home.Page';
import { SearchResult } from './Pages/SearchResult';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <>
      <MUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:username' element={<SearchResult />} />
            <Route path='*' element={<h1>404 - Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </MUIProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}
