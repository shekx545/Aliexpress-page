import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="column">
            <h3>XARIDORLAR UCHUN</h3>
            <a href="#" className="footer-link">Qo'llab-quvvatlash</a>
            <a href="#" className="footer-link">Arzonlashtirilgan savdolar taqvimi</a>
            <a href="#" className="footer-link">AliExpress Yordami</a>
          </div>
          <div className="column">
            <h3>HAMKORLARGA</h3>
            <a href="#" className="footer-link">AliExpress'da soting</a>
            <a href="#" className="footer-link">Affiliat dasturi</a>
          </div>
          <div className="column">
            <h3>KOMPANIYA HAQIDA</h3>
            <a href="#" className="footer-link">AliExpress-dagi martaba</a>
            <a href="#" className="footer-link">Biz Habrdamiz</a>
          </div>
          <div className="column">
            <h3>BIZ IJTIMOIY TARMOQLARDA</h3>
            <a href="#" className="footer-link">VK</a>
            <a href="#" className="footer-link">Telegram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © AliExpress® 2019 – 2026 <br />
            Axborot resurslarida quyidagilar qo'llaniladi{" "}
            <a href="#">tavsiya texnologiyalari</a>
          </div>

          <div className="footer-links">
            <a href="#">Maxfiylik Siyosati</a>
            <a href="#">Foydalanish kelishuvlari</a>
          </div>

          <div className="app-buttons">
            <div className="btn-placeholder">Google Play</div>
            <div className="btn-placeholder">App Store</div>
            <div className="btn-placeholder">AppGallery</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;