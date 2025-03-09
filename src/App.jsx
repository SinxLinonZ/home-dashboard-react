import './App.css';
import Clock from './components/Clock/Clock';
import Calendar from './components/Calendar/Calendar';
import Weather from './components/Weather/Weather';
import RSSList from './components/RSSNews/RSSNews';

function App() {

  return (
    <>
      <div id="mainFrame">
        <Clock />
        <Calendar />

        <Weather />
        <RSSList />
      </div>
    </>
  );
}

export default App;
