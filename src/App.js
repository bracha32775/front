
import { AppBar } from '@mui/material';
import './App.css';
import { Routing } from './components/Routing/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
function App() {
 

  return ( <ThemeProvider dir="rtl">
    <div className="App">

<Routing></Routing>
  </div></ThemeProvider>
  );
}

export default App;
