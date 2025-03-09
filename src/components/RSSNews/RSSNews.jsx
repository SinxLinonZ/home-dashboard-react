import React, { useEffect, useState } from 'react';
import './RSSNews.css';
import QRCode from 'qrcode';

function RSSNews() {

  const [rssNews, setRssNews] = useState([]);

  function refreshNewsFeed() {
    fetch('https://cors-anywhere.herokuapp.com/https://feeds.bbci.co.uk/zhongwen/trad/rss.xml')
      .then(async (response) => {
        const str = await response.text();
        const doc = new window.DOMParser().parseFromString(str, "text/xml");
        const items = doc.documentElement.querySelectorAll("item");

        setRssNews(items);
      });
  }
  useEffect(() => {
    refreshNewsFeed();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      refreshNewsFeed();
    }, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);


  const [currentNews, setCurrentNews] = useState(0);

  useEffect(() => {
    if (rssNews.length === 0) return;
    QRCode.toCanvas(
      document.querySelector('canvas'),
      rssNews[currentNews].querySelector("link").textContent,
      { color: { dark: '#000000ff', light: '#ffffffff' } },
      function (error) {
        if (error) console.error(error);
      });
  }, [rssNews, currentNews]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((currentNews + 1) % rssNews.length);
    }, 30 * 1000);
    return () => clearInterval(interval);
  }, [currentNews, rssNews]);

  return (
    <div id="rssNews">

      <img id="thumbnail" src={rssNews[currentNews]?.getElementsByTagName("media:thumbnail")[0].getAttribute("url")} alt="" />

      <div id="title">
        {rssNews[currentNews]?.querySelector("title").textContent}
      </div>

      <div id="content">
        {rssNews[currentNews]?.querySelector("description").textContent
          .replace(/<[^>]*>/g, '')
          .replace(/&[^;]*;/g, '')}
      </div>

      <div id="qrCode">
        <canvas></canvas>
        <div>详细页面</div>
      </div>

    </div>
  );
}

export default RSSNews;