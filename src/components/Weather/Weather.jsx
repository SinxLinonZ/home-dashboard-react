import React from 'react';
import './Weather.css';

function Weather() {

  const srcDoc_weather =
    `<div id="ww_76ea7ae5d5835" v='1.3' loc='id' a='{"t":"horizontal","lang":"zh","sl_lpl":1,"ids":["wl4480"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'><a href="https://weatherwidget.org/" id="ww_76ea7ae5d5835_u" target="_blank">Weather widget html</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_76ea7ae5d5835"></script>
  <div id="ww_e1234bbda49f9" v='1.3' loc='id' a='{"t":"responsive","lang":"zh","sl_lpl":1,"ids":["wl4480"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_cwi":3,"el_nme":3,"el_ctm":3}'><a href="https://weatherwidget.org/" id="ww_e1234bbda49f9_u" target="_blank">Weather widget html</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_e1234bbda49f9"></script>
  <style>
    body {
      font-weight: bold;
      width: fit-content;
      background-color: #242424;
      transform-origin: top left;
      transform: scale(1.65);
    }
    #ww_e1234bbda49f9 {
      width: 440px;
    }
  </style>
  <script>
    setTimeout(() => {
      document.location.reload();
    }, 30 * 60 * 1000);
  </script>
  `;

  return (
    <>
      <iframe
        id="weather"
        srcDoc={srcDoc_weather}
        style={{ border: 'none', width: '100%', height: '100%', margin: '0', padding: '0' }}
      ></iframe>
    </>
  );
}

export default Weather;