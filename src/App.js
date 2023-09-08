import './App.css';
import { AppInsightsProvider } from './AppInsightsProvider';
import TestComponent from './TestComponent';

function App() {
  return (
    <div className='App'>
      <p>Home</p>
      <AppInsightsProvider>
        <TestComponent />
      </AppInsightsProvider>
    </div>
  );
}

export default App;
