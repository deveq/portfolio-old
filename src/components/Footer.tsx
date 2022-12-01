import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer id="footer" className="Footer">
      <ul>
        <li className="abcd">
          이메일: <a href="mailto:deveq@kakao.com">deveq@kakao.com</a>
        </li>
        <li>사는곳: 성남시 분당구</li>
        <li>희망근무지: 서울시, 성남시,</li>
      </ul>
    </footer>
  );
};

export default Footer;
