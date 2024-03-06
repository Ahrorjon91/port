import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Мои <strong className="purple">Последние Работы</strong>
        </h1>
        <p style={{ color: "white" }}>
          Вот несколько проектов, над которыми я работал недавно.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Чатифай"
              description="Личная комната чата или рабочее пространство для обмена ресурсами и общения с друзьями, созданное с использованием React.js, Material-UI и Firebase. Имеет функции, которые позволяют пользователям обмениваться сообщениями в реальном времени, делиться изображениями, а также поддерживает реакции на сообщения."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Битс-0ф-К0д"
              description="Моя персональная страница блога, созданная с использованием Next.js и Tailwind Css, которая берет содержимое из файлов макета и отображает его с использованием Next.js. Поддерживает темный режим и прост в написании блогов с использованием markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Онлайн-редактор кода и markdown, созданный с использованием react.js. Онлайн-редактор, который поддерживает код html, css и js с мгновенным просмотром веб-сайта. Онлайн-редактор markdown для создания файла README, который поддерживает GFM, настраиваемые теги Html с панелью инструментов и мгновенным предварительным просмотром. Оба редактора поддерживают автосохранение работы с использованием локального хранилища."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Использовал набор данных о болезнях растений из Kaggle и обучил модель классификатора изображений с использованием фреймворка 'PyTorch' с помощью CNN и Transfer Learning с 38 классами различных листьев растений. Модель успешно смогла обнаружить больные и здоровые листья 14 уникальных растений. Мне удалось достичь точности 98% с использованием предварительно обученной модели Resnet34."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ИИ для Социальной Полезности"
              description="Использование 'Обработки естественного языка' для обнаружения сообщений, связанных с самоубийством, и идеации самоубийства пользователей в киберпространстве, тем самым помогая в предотвращении самоубийств."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Пожалуйста, включите ссылку на демонстрацию здесь
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Распознавание Лица и Определение Эмоций"
              description="Обучил классификатор CNN с использованием набора данных 'FER-2013' с помощью Keras и tensorflow backend. Классификатор успешно предсказывал различные типы эмоций у человека. И высшая точность, полученная с моделью, составила 60,1%.
              Затем использовал Open-CV для обнаружения лица на изображении, а затем передал лицо в классификатор для предсказания эмоции человека."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Пожалуйста, включите ссылку на демонстрацию здесь 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
