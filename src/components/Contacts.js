import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import logo from "./icons/Group.svg";
import "./Contacts.css";
import lk from "./icons/lk.svg";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Contacts() {
  const [last_name, setLastName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = () => {
    const user = {
      last_name: last_name,
      first_name: first_name,
      number: number,
      email: email,
    };
    axios
      .post(`http://185.182.111.214:7628/cgi-bin/form_action.py`, { user })
      .then((res) => {
        console.log(res.data);
      });
  };

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
              <Nav.Link className="Navs" href="/rules">
                Доставка
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="NavItem">
              <Nav.Link
                className="Navs"
                href="/contacts"
                style={{ color: "#297fff" }}
              >
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
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <a href="#contacts">Контакты</a>
      </div> */}
      <div className="Contacts" id="contacts">
        <div className="ContactsLabel">Контакты</div>

        <div className="ContactsContent">
          <Col>
            <div className="Label">Номер телефона</div>
            <div className="Text">+7 (987) 716-22-07 </div>
            <div className="Label" style={{ marginTop: "30px" }}>
              E-mail
            </div>
            <div className="Text">bikepark@gmail.com</div>
            <div className="Label" style={{ marginTop: "30px" }}>
              Адрес
            </div>
            <div className="Text">
              Москва, 1-й Кожевнический пер., д.6, стр. 6
            </div>
          </Col>
          <Col>
            <div className="Label">Оставить заявку</div>
            <div className="Text">Остались вопросы? Свяжитесь с нами</div>
            <form action="http://185.182.111.214:7628/cgi-bin/form_action.py" method="get">
            <Form.Control
              style={{ marginTop: "35px", height: "60px", width: "560px" }}
              placeholder="Фамилия*"
              value={last_name}
              onChange={(event) => setLastName(event.target.value)}
            ></Form.Control>
            <Form.Control
              style={{ marginTop: "35px", height: "60px", width: "560px" }}
              placeholder="Имя*"
              value={first_name}
              onChange={(event) => setFirstName(event.target.value)}
            ></Form.Control>
            <Form.Control
              style={{ marginTop: "20px", height: "60px", width: "560px" }}
              placeholder="Номер телефона*"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            ></Form.Control>
            <Form.Control
              style={{ marginTop: "20px", height: "60px", width: "560px" }}
              placeholder="Электронная почта*"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></Form.Control>
            </form>
            <Button className="ButtonStyle" type="submit">
              Отправить
            </Button>
          </Col>
          <div style={{display: "flex", flexDirection: "column"}}>
          {/* <form style={{display: "flex", flexDirection: "column"}} action="http://185.182.111.214:7628/cgi-bin/form_action.py" method="get">
  <label for="fname">Имя:</label>
  <input type="text" id="fname" name="fname"/>
  <label for="lname">Фамилия:</label>
  <input type="text" id="lname" name="lname"/>
  <label for="fname">Номер телефона:</label>
  <input type="tel" id="tel" name="tel"/>
  <label for="lname">Почта:</label>
  <input type="email" id="email" name="email"/>
  <input type="submit" className="ButtonStyle" value="Отправить"/>
  </form> */}
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

export default Contacts;
