import { useState, useEffect } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import Calendar from './components/Calendar/Calendar';

function App() {
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setReloadKey(prevKey => prevKey + 1);
    }, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="mainFrame">
        <Clock />
        <Calendar />

        <div id="weather" key={reloadKey}>
          <div id="ww_76ea7ae5d5835" v='1.3' loc='id' a='{"t":"horizontal","lang":"zh","sl_lpl":1,"ids":["wl4480"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'><a href="https://weatherwidget.org/" id="ww_76ea7ae5d5835_u" target="_blank">Weather widget html</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_76ea7ae5d5835"></script>
          <div id="ww_e1234bbda49f9" v='1.3' loc='id' a='{"t":"responsive","lang":"zh","sl_lpl":1,"ids":["wl4480"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_cwi":3,"el_nme":3,"el_ctm":3}'><a href="https://weatherwidget.org/" id="ww_e1234bbda49f9_u" target="_blank">Weather widget html</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_e1234bbda49f9"></script>
        </div>

      </div>
    </>
  );
}

export default App;
