import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Привет всем, я <span className="purple">Ахрорджон Турдиев </span>
            из <span className="purple"> Худжанда, Таджикистан</span>
            <br />
            В настоящее время я работаю разработчиком Фрилансом.
            <br />
            Я окончил Универ в области Телекоммуникации и ИТ.
            <br />
            <br />
            Кроме программирования, есть еще несколько занятий, которые я люблю делать!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Играть в игры
            </li>
            <li className="about-activity">
              <ImPointRight /> Писать технические блоги
            </li>
            <li className="about-activity">
              <ImPointRight /> Путешествовать
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Стремитесь создавать вещи, которые изменят мир!"{" "}
          </p>
          <footer className="blockquote-footer">Ахрорджон</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
