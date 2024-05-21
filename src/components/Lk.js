import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Col from "react-bootstrap/Col";
import logo from "./icons/Group.svg";
import lk from "./icons/lk.svg";
import "./Lk.css";
import back from "./icons/back.webp"
import bike1 from "./icons/bike1.jpg"

function Lk() {
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
      <a href="#orders">Управление заказами</a>
      <a href="#history">История заказов</a>
      </div> */}
      <div className="Manage" id="orders">
        <form action="http://185.182.111.214:7628/cgi-bin/form_action.py" method="get">
        <div className="LkLabel">Управление заказами</div>
        <div className="Row">
        {/* <label for="return">Фактическая дата возврата</label>
          <input name="return" type="date"></input>
          <label for="start">Дата начала аренды</label>
          <input name="start" type="date"></input>
          <label for="end">Дата конца аренды</label>
          <input name="end" type="date"></input> */}
          <Col>
            <InputGroup>
              <Form.Label>Фактическая дата возврата</Form.Label>
            </InputGroup>
            <Form.Control type="date"></Form.Control>
          </Col>
          <Col>
            <InputGroup>
              <Form.Label>Дата начала аренды</Form.Label>
            </InputGroup>
            <InputGroup>
              <Form.Control type="date"></Form.Control>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <Form.Label>Дата конца аренды</Form.Label>
            </InputGroup>
            <InputGroup>
              <Form.Control type="date"></Form.Control>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <Form.Label>Статус заказа</Form.Label>
            </InputGroup>
            <InputGroup>
              <Form.Select>
                <option>Заявка получена</option>
                <option value="1">В обработке</option>
                <option value="2">Принят</option>
                <option value="3">Завершен</option>
              </Form.Select>
            </InputGroup>
          </Col>
        </div>
        <div className="Row">
          <Col>
            <InputGroup>
              <Form.Label>Тип аренды</Form.Label>
            </InputGroup>
            <Form.Select>
              <option>По часам</option>
              <option value="1">На день</option>
            </Form.Select>
          </Col>
          <Col>
            <InputGroup>
              <Form.Label>Тип доставки</Form.Label>
            </InputGroup>
            <InputGroup>
              <Form.Select>
                <option>Доставка</option>
                <option value="1">Самовывоз</option>
              </Form.Select>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <Form.Label>Тип оплаты</Form.Label>
            </InputGroup>
            <InputGroup>
              <Form.Select>
                <option>Карта</option>
                <option value="1">Наличные</option>
              </Form.Select>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <Form.Label>Статус оплаты</Form.Label>
            </InputGroup>
            <InputGroup>
              <Form.Select>
                <option>Не оплачен</option>
                <option value="1">В обработке</option>
                <option value="2">Оплата прошла</option>
              </Form.Select>
            </InputGroup>
          </Col>
        </div>
        <div className="BottomButtons">
          <Button
            style={{
              width: "200px",
              height: "50px",
              backgroundColor: "#297FFF",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Найти
          </Button>
          <div
            style={{
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "22px",
              textTransform: "uppercase",
              color: "#297FFF",
              marginTop: "10px",
            }}
          >
            Сбросить фильтр
          </div>
        </div>
        </form>
      </div>
      {/* <div className="Manage">
        <div className="LkLabel" id="history">История заказов</div>
        <table style={{marginTop: "20px"}} background={back} border="1px" cellSpacing={"10"} cellPadding={"20"}>
          <thead>
            <tr>
              <td>Порядковый номер</td>
              <td>Модель велосипеда</td>
              <td>Стоимость</td>
              <td>Ссылка на чек</td>
            </tr>
            </thead>
          <tbody>
          <tr>
              <td>1</td>
              <td><img src={bike1} height="70px"></img></td>
              <td>1200 руб.</td>
              <td><a href="https://docs.google.com/spreadsheets/d/1_s0vjblA40w5Cw7KGv-Igk5liQ3LvEQNxE0d_5YsptQ/edit#gid=560745672">чек</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src={bike1} height="70px"></img></td>
              <td>1600 руб.</td>
              <td><a href="https://docs.google.com/spreadsheets/d/1_s0vjblA40w5Cw7KGv-Igk5liQ3LvEQNxE0d_5YsptQ/edit#gid=560745672">чек</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src={bike1} height="70px"></img></td>
              <td>2800 руб.</td>
              <td><a href="https://docs.google.com/spreadsheets/d/1_s0vjblA40w5Cw7KGv-Igk5liQ3LvEQNxE0d_5YsptQ/edit#gid=560745672">чек</a></td>
            </tr>
          </tbody>
          </table>
        </div> */}
      <div className="Footer">
        {/*<div className="FooterBlock">
          <div>Аренда велосипедов</div>
          <div>Алюминий</div>
          <div>Карбон</div>
          <div>Горные/городские</div>
          <div>Городские эконом</div>
          </div>*/}
        <div>© BikePark, 2022</div>
        <div>Политика конфиденциальности</div>
      </div>
    </div>
  );
}

export default Lk;
