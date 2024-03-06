import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ПОЗВОЛЬТЕ МНЕ <span className="purple"> ПРЕДСТАВИТЬСЯ </span>
            </h1>
            <p className="home-about-body">
              Программирование для меня как хоббы и, каджый день хочеться что-то новое усвоить…
              <br />
              <br />Я владею классическими языками программирования, такими как
              <i>
                <b className="purple"> PYTHON, Javascript и Java. </b>
              </i>
              <br />
              <br />
              Мои области интересов - создание новых &nbsp;
              <i>
                <b className="purple">Веб-технологий и Программы </b> а также в областях, связанных с{" "}
                <b className="purple">
                  Блокчейном.
                </b>
              </i>
              <br />
              <br />
              При возможности, я также применяю свою страсть к разработке продуктов с использованием <b className="purple">Node.js</b> и
              <i>
                <b className="purple">
                  {" "}
                  Современных Библиотек и Фреймворков на Javascript
                </b>
              </i>
              &nbsp; таких как
              <i>
                <b className="purple"> React.js и Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="аватар" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>НАЙДИТЕ МЕНЯ В</h1>
            <p>
              Не стесняйтесь <span className="purple">связаться </span> со мной
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://gitlab.com/ahrorjon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahrorjon91/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                > <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/ahrorko"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                > <FaTelegram />
                </a>
              </li>
             </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
