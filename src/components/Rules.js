import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import logo from "./icons/Group.svg";
import "./Rules.css";
import lk from "./icons/lk.svg";
import { Row, Col } from "react-bootstrap";
import broken_bike from "./icons/broken_bike.jpg"

function Rules() {
  return (
    <div className="Rent">
      <Navbar expand="lg">
        <Container className="Container">
          <Navbar.Brand className="NavItem">
            <img src={logo} height="40" alt="App logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Item className="NavItem">
              <Nav.Link className="Navs" href="/aboutus">
                О нас
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="NavItem">
              <Nav.Link className="Navs" href="/rent">
                Аренда
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="NavItem">
              <Nav.Link className="Navs" href="/rules" style={{color: "#297fff"}}>
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
      <a href="#rent">Условия аренды</a>
      <a href="#return">Возмещение ущерба</a>
      </div> */}
      <div className="Rules">
        <div className="RulesLabel">Правила</div>
        <div className="RulesContent">
          <div className="RulesContentLabel" id="rent">Условия аренды</div>
          <div className="FlexibleRentLabels">
            <Col>
              <div className="RentLabels">Срок аренды</div>
              <div>
                Минимальный срок аренды велосипеда составляет 1 день. При брони
                от 5 дней действует скидка 10%
              </div>
            </Col>
            <Col>
              <div className="RentLabels">Доставка</div>
              <div>
                <ol>
                  <li>Доставка</li>
                  <ul>
                    <li>В пределах МКАД и до 30 км от МКАД — 490 рублей.</li>
                    <li>При оплате
                подписки сразу при регистрации доставка в пределах МКАД и до 15
                км от МКАД — бесплатно.</li>
                  </ul>
                  <li>Дополнительный выезд курьера</li>
                  <ul>
                    <li>Выезд курьера для возврата и замены в
                пределах МКАД и до 15 км от МКАД входит в стоимость подписки.</li>
                    <li>Выезд курьера от 15 км до 30 км от МКАД для возврата и замены
                составляет 490 рублей.</li>
                  </ul>
                </ol>
              </div>
            </Col>
            <Col>
              <div className="RentLabels" id="return">Возврат</div>
              <div>
                Вы можете забрать и вернуть велосипед самостоятельно в наш
                офис по адресу 1-й Кожевнический пер., д.6, стр. 6, заранее
                согласовав время с оператором по телефону: +7 (495) 152-64-15
              </div>
            </Col>
          </div>
          <div className="RulesContentLabel">Возмещение ущерба</div>
          <div onClick={() => window.open(broken_bike, 'height=600,width=800')}>
            <img src={broken_bike} height="50px">
            </img>
          </div>
        </div>
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

export default Rules;
