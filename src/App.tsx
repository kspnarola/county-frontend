import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout/AppLayout';
import { AppStateProvider } from './context';
import Country from './pages/Country/Country';
import useApp from './state/useApp';
import useCountry from './state/useCountry';
import CountryDetails from './pages/CountryDetails/CountryDetails';
import './lib/fontawesome'
import './App.css';

const containers = {
  app: useApp,
  country: useCountry,
}

function App() {
  return (
    <AppStateProvider containers={containers}>
      <AppLayout>
        <Router basename='/'>
          <Routes>
            <Route path='/' element={<Country />} />
            <Route path='/country/:code' element={<CountryDetails />} />
          </Routes>
        </Router>
      </AppLayout>
    </AppStateProvider>
  );
}

export default App;
