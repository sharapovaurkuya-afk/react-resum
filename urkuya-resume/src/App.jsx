
import "./index.css";

const skills = [
  {
    title: "HTML5",
    description:
      "Изучаю структуру веб-страниц, семантические теги, заголовки, формы, списки и организацию контента."
  },
  {
    title: "CSS3",
    description:
      "Изучаю оформление сайтов, цвета, шрифты, Flexbox, адаптивную вёрстку и создание пользовательских интерфейсов."
  },
  {
    title: "JavaScript",
    description:
      "Изучаю переменные, функции, условия, циклы, массивы, объекты и основы взаимодействия с веб-страницами."
  },
  {
    title: "React",
    description:
      "Осваиваю компоненты, JSX, props, обработчики событий и создание динамических интерфейсов."
  },
  {
    title: "Git и GitHub",
    description:
      "Изучаю контроль версий, работу с репозиториями, хранение исходного кода и публикацию проектов."
  }
];

const qualities = [
  "Ответственность",
  "Внимание к деталям",
  "Самостоятельное обучение",
  "Логическое мышление",
  "Организованность",
  "Стремление к развитию"
];

const projects = [
  {
    number: "01",
    type: "PERSONAL PROJECT",
    title: "Персональное резюме",
    description:
      "Персональный сайт для представления информации об образовании, навыках, интересах и проектах. При разработке используются React, JavaScript и CSS. Проект помогает изучать компоненты, адаптивную вёрстку и создание пользовательских интерфейсов.",
    technologies: ["React", "JavaScript", "CSS", "Vite"]
  },
  {
    number: "02",
    type: "LEARNING PROJECT",
    title: "Учебные веб-интерфейсы",
    description:
      "Практика создания веб-страниц с использованием HTML, CSS и JavaScript. Основное внимание уделяется структуре контента, расположению элементов, оформлению и удобству использования сайта.",
    technologies: ["HTML5", "CSS3", "JavaScript"]
  }
];

function App() {
  return (
    <main className="page">
      <article className="resume">

        <header className="header">
          <div className="avatar">УШ</div>

          <div className="profile">
            <p className="label">PERSONAL PORTFOLIO</p>

            <h1>Urkuya Sharapova</h1>

            <h2>Junior Frontend Developer</h2>

            <p className="intro">
              Начинающий веб-разработчик, интересующийся
              созданием современных, функциональных и
              визуально привлекательных веб-сайтов.
            </p>

            <div className="profile-tags">
              <span>Frontend Development</span>
              <span>React</span>
              <span>Web Design</span>
            </div>
          </div>
        </header>

        <nav className="navigation">
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#education">Образование</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>

        <section id="about" className="section">
          <p className="section-label">01 / PROFILE</p>
          <h3>Обо мне</h3>

          <p>
            Меня зовут Уркуя Шарапова. Я изучаю
            программирование и разработку веб-приложений.
            Мне интересно понимать, как устроены современные
            сайты, как работает их интерфейс и каким образом
            идеи превращаются в работающие цифровые продукты.
          </p>

          <p>
            В процессе обучения я знакомлюсь с основами
            веб-разработки, изучаю HTML, CSS, JavaScript
            и React. Я стремлюсь не только писать код,
            но и понимать логику его работы, структуру
            проекта и взаимодействие отдельных компонентов.
          </p>

          <p>
            Для меня важно постепенно развивать технические
            навыки, учиться решать задачи самостоятельно
            и применять полученные знания на практике.
            Я готова изучать новые инструменты, анализировать
            ошибки и совершенствовать свои проекты.
          </p>

          <p>
            Моя цель — стать квалифицированным Frontend-
            разработчиком, научиться создавать качественные
            пользовательские интерфейсы и участвовать
            в разработке реальных цифровых продуктов.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="section-label">02 / TECHNICAL SKILLS</p>
          <h3>Технические навыки</h3>

          <p className="section-intro">
            Технологии, которые я изучаю и применяю
            в учебных проектах.
          </p>

          <div className="skill-list">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <div className="skill-heading">
                  <h4>{skill.title}</h4>
                  <span>В процессе изучения</span>
                </div>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-label">03 / PERSONAL SKILLS</p>
          <h3>Личные качества</h3>

          <p>
            Я считаю важными ответственность за результат,
            последовательное обучение и внимательное
            отношение к деталям. При решении задач стараюсь
            разобраться в причине проблемы и найти
            понятное решение.
          </p>

          <div className="skills">
            {qualities.map((quality) => (
              <span key={quality}>{quality}</span>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="section-label">04 / EDUCATION</p>
          <h3>Образование</h3>

          <div className="timeline-item">
            <div className="timeline-dot" />

            <div>
              <p className="date">Текущее обучение</p>
              <h4>INAI</h4>

              <p>
                Направление: технологии программирования.
                Изучение основ программирования,
                алгоритмического мышления, разработки
                программного обеспечения и веб-технологий.
              </p>

              <p>
                В рамках обучения я развиваю навыки написания
                кода, решения практических задач и создания
                проектов, которые помогают закреплять
                теоретические знания.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />

            <div>
              <p className="date">Самостоятельное развитие</p>
              <h4>Frontend Development</h4>

              <p>
                Дополнительно изучаю React, CSS, JavaScript
                и инструменты разработчика. Практика помогает
                лучше понимать структуру веб-приложений
                и постепенно расширять технические навыки.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">05 / PROJECTS</p>
          <h3>Мои проекты</h3>

          <p className="section-intro">
            Практические проекты помогают закреплять знания,
            развивать навыки программирования и формировать
            профессиональное портфолио.
          </p>

          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div className="skills">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="section">
          <p className="section-label">06 / CAREER GOALS</p>
          <h3>Профессиональные цели</h3>

          <p>
            На ближайшем этапе я хочу укрепить знания
            JavaScript и React, научиться увереннее работать
            с компонентами, состоянием приложения,
            запросами к API и обработкой данных.
          </p>

          <p>
            Также я планирую совершенствовать навыки Git
            и GitHub, изучать лучшие практики разработки
            и научиться работать над командными проектами.
          </p>

          <p>
            В дальнейшем я хочу получить практический опыт,
            участвовать в разработке реальных приложений
            и постоянно повышать свой профессиональный уровень.
          </p>
        </section>

        <section id="contact" className="section contact">
          <p className="section-label">07 / CONTACT</p>
          <h3>Связаться со мной</h3>

          <p>
            Буду рада новым знакомствам, интересным проектам,
            предложениям о стажировке и возможностям
            профессионального развития.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-label">ИМЯ</span>
              <p>Urkuya Sharapova</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">ГОРОД</span>
              <p>Бишкек, Кыргызстан</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">EMAIL</span>
              <p>
                <a href="mailto:sharapovaurkuya@gmail.com">
                  sharapovaurkuya@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-item">
              <span className="contact-label">GITHUB</span>
              <p>
                <a
                  href="https://github.com/sharapovaurkuya-afk"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/sharapovaurkuya-afk
                </a>
              </p>
            </div>
          </div>

          <a
            className="github-button"
            href="https://github.com/sharapovaurkuya-afk"
            target="_blank"
            rel="noreferrer"
          >
            Посмотреть GitHub →
          </a>
        </section>

        <button
          className="download"
          onClick={() => window.print()}
        >
          Скачать резюме в PDF ↓
        </button>

        <footer className="footer">
          <p>Urkuya Sharapova</p>
          <p>Personal Portfolio · Built with React</p>
          <a
            href="https://github.com/sharapovaurkuya-afk"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </footer>

      </article>
    </main>
  );
}

export default App;
