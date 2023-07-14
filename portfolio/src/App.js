import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { darkPurple } from './colors';

const App = () => {
  return (
    <div style={{ backgroundColor: darkPurple}} className="App">
      <Layout />
    </div>
  );
};

export default App;
