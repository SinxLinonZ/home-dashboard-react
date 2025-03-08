import './App.css';
import Clock from './components/Clock/Clock';
import Calendar from './components/Calendar/Calendar';
import Weather from './components/Weather/Weather';

function App() {

  return (
    <>
      <div id="mainFrame">
        <Clock />
        <Calendar />

        <Weather />
      </div>
    </>
  );
}

export default App;
