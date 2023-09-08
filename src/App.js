import logo from './logo.svg';
import './App.css';
import { AppInsightsProvider } from './AppInsightsProvider';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Home</p>
      </header>
      <AppInsightsProvider>
        <div>Hello world</div>
      </AppInsightsProvider>
    </div>
  );
}

export default App;
