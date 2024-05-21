import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import logo from "./icons/Group.svg";
import lk from "./icons/lk.svg";
import "./Lk.css";

export default function Feedback() {
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
                  <img href="/lk" src={lk} style={{ cursor: "pointer"}} />
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
      <a href="#review">Отзыв</a>
      </div> */}
      <div className="Manage">
      <div className="LkLabel" id="review">Оставить отзыв</div>
        <Form.Control
          style={{ marginTop: "35px", height: "60px", width: "560px" }}
          placeholder="Имя*"
        ></Form.Control>
        <Form.Control
          style={{ marginTop: "20px", height: "60px", width: "560px" }}
          placeholder="Номер телефона*"
        ></Form.Control>
        <Form.Control
          as="textarea"
          rows="4"
          style={{ marginTop: "20px", height: "60px", width: "560px" }}
          placeholder="Отзыв*"
        ></Form.Control>
        <Button className="ButtonStyle">Отправить</Button>
      </div>
    </div>
  );
}
