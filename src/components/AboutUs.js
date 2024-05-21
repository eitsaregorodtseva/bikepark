import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import logo from "./icons/Group.svg";
import aboutus from "./icons/bikes.jpg";
import "./AboutUs.css";
import { Carousel } from "react-bootstrap";
import lk from "./icons/lk.svg";
import feedback from "./icons/feedback.svg";

function AboutUs() {
  return (
    <div>
      <Navbar expand="lg">
        <Container className="Container">
          <Navbar.Brand className="NavItem">
            <img src={logo} height="40" alt="App logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Item className="NavItem">
              <Nav.Link className="Navs" href="/aboutus" style={{color: "#297fff"}}>
                О нас
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="NavItem">
              <Nav.Link className="Navs" href="/rent">
                Аренда
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="NavItem">
              <Nav.Link className="Navs" href="/rules">
                Доставка
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="NavItem">
              <Nav.Link className="Navs" href="/contacts">
                Контакты
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="Lk">
              <Nav.Link href="/lk">
                {/* <OverlayTrigger
                  key="right"
                  placement="bottom"
                  overlay={
                    <Popover>
                      <Popover.Header></Popover.Header>
                      <Popover.Body>
                        <div>Управление заказами</div>
                        <div style={{ marginTop: "10px" }}>Выйти</div>
                      </Popover.Body>
                    </Popover>
                  }
                > */}
                  <img href="/lk" src={lk} style={{ cursor: "pointer" }} />
                {/* </OverlayTrigger> */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="FeedbackButton">
              <Button href="/feedback">Feedback</Button>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div style={{display: "flex", flexDirection: "column"}}>
      <a href="#aboutus">О нас</a>
      <a href="#reviews">Отзывы</a>
      </div> */}
      <div className="AboutUs" id="aboutus">
        <div className="AboutUsLabel">О нас</div>
        <div className="AboutUsContent">
          <div className="AboutUsText">
            Наша компания стремится сделать для вас максимально комфортные
            условия аренды велосипедов. У нас в наличии есть разные модели
            велосипедов. После каждого заказа мы проводим техническое
            обслуживание всех велосипедов, чтобы вы могли быть уверены в их
            надежности. Арендуя велосипед, вы получаете все необходимое для
            безопасной езды бесплатно: 
            <ul>
              <li>шлем;</li>
              <li>замок;</li>
              <li>фонарик;</li>
              <li>детское кресло (по запросу).</li>
            </ul>
            Порядок аренды:
            <ol>
              <li>Зарегистрироваться на сайте</li>
              <li>Выбрать велосипед</li>
              <li>Оформить заказ на нужную дату</li>
              <li>Ждать доставку!</li>
            </ol>
          </div>
          <div>
            <img
              src={aboutus}
              width="460px"
              height="286px"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
      <div className="Feedback" id="reviews">
        <div className="FeedbackLabel">Отзывы</div>
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="FeedbackContent">
              <div className="FeedbackBox">
                <div className="FeedbackText">Все отлично!.</div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
              <div className="FeedbackBox">
                <div className="FeedbackText">
                  Мне очень понравилось то, что появилась услуга велопроката в
                  Москве. Я пользовалась ею уже не один раз, меня устраивают и
                  условия сотрудничества, и сам транспорт, который
                  предоставляют. Конечно, я давно задумывалась о покупке
                  велосипеда, но это довольно дорого. А еще у меня нет столько
                  времени на катание на велосипеде, обычно езжу спонтанно,
                  раз-два в месяц. Так что мне кажется, покупка просто будет
                  нерациональной. В общем, еще не раз буду сюда обращаться
                  потом)
                </div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
              <div className="FeedbackBox">
                <div className="FeedbackText">
                  Хорошая компания, никаких проблем с ней не было. Так что еще
                  не раз будем арендовать велосипеды. Спасибо!
                </div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="FeedbackContent">
              <div className="FeedbackBox">
                <div className="FeedbackText">
                  Пригласил друзей к себе в Москву. Вообще не знал, как их лучше
                  развлечь, но мне посоветовали велоэкскурсию. Повезло, что все
                  друзья умеют кататься на велосипедах) В общем, все прошло
                  очень удачно, мы посмотрели основные достопримечательности,
                  провели время активно и весело. Возможно, потом буду еще
                  просто велосипед в прокат брать)
                </div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
              <div className="FeedbackBox">
                <div className="FeedbackText">
                  У меня только положительные впечатления о сотрудничестве. Цены
                  приемлемые, состояние велосипедов идеальное)
                </div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
              <div className="FeedbackBox">
                <div className="FeedbackText">
                  Теперь если у меня свободные выходные, просто арендую здесь
                  велосипед (иногда ко мне присоединяется подруга), и наматываю
                  километры. Отличный вариант времяпрепровождения, и польза для
                  фигуры, и свежим воздухом можно подышать. Кстати, замечаю, что
                  все больше людей так катаются тоже. Успела познакомиться с
                  активными, веселыми ребятами)
                </div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="FeedbackContent">
              <div className="FeedbackBox">
                <div className="FeedbackText">
                  Безусловно, семантический разбор внешних противодействий
                  способствует повышению качества вывода текущих активов.
                  противодействий способствует повышению качества вывода текущих
                  активов.
                </div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
              <div className="FeedbackBox">
                <div className="FeedbackText">
                  Безусловно, семантический разбор внешних противодействий
                  способствует повышению качества вывода текущих активов.
                  противодействий способствует повышению качества вывода текущих
                  активов.
                </div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
              <div className="FeedbackBox">
                <div className="FeedbackText">
                  Безусловно, семантический разбор внешних противодействий
                  способствует повышению качества вывода текущих активов.
                  противодействий способствует повышению качества вывода текущих
                  активов.
                </div>
                <div className="FeedbackName">
                  <img src={feedback} />
                  <div>Александр Н.</div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Footer">
        {/* <div>Аренда велосипедов</div>
        <div>Алюминий</div>
        <div>Карбон</div>
        <div>Горные/городские</div>
        <div>Городские эконом</div> */}
        <div>© BikePark, 2022</div>
        <div>Политика конфиденциальности</div>
      </div>
    </div>
  );
}

export default AboutUs;
