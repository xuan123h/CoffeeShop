import React from "react";
import "./styles.scss";
function GoogleMap(props) {
  return (
    <div className="google-map">
      <h2> Store </h2>
      <div className="google-map__item">
        <div className="google-map__item-one">
          <h3> CHI NHÁNH THE COFFEE SHOP </h3>
          <p> -- 115 Hai Bà Trưng Bến Nghé, Quận 1, Hồ Chí Minh </p>
          <p> -- Số 53, Lê Hoàng Phong, QUận 5, Hồ Chí Minh </p>
          <p> -- Số 1, Võ Văn Ngân, Linh Chiểu, Thủ Đức </p>
        </div>
        <div className="google-map__item-two">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.5764295829565!2d106.70040919254014!3d10.780106507201634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4839288a55%3A0x692f701751f4008!2zMTE1IEhhaSBCw6AgVHLGsG5nLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1641899438417!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.0531087499044!2d106.7724529830421!3d10.850999728329217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752774d7e357c3%3A0x7cc744cb226ad64!2zc-G7kSAxIMSQLiBWw7UgVsSDbiBOZ8OibiwgTGluaCBDaGnhu4N1LCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1641899756301!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2081.66266376634!2d106.67685376149439!3d10.757459786958407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee206c7d3eb%3A0x438955f0433c63e6!2zTMOqIEjhu5NuZyBQaG9uZywgcGjGsOG7nW5nIDIsIFF14bqtbiA1LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1641899891877!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default GoogleMap;
