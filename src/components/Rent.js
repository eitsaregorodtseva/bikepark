import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Col from "react-bootstrap/Col";
import logo from "./icons/Group.svg";
import "./Rent.css";
import Row from "react-bootstrap/Row";
import helmet from "./icons/helmet.png";
import torch from "./icons/torch.png";
import lock from "./icons/lock.png";
import bike from "./icons/bike.svg";
import lk from "./icons/lk.svg";
import { ToggleButton } from "react-bootstrap";



const bikes_c = [
  { id: 0, name: "1", price: 1500, select: false },
  { id: 1, name: "2", price: 1700, select: false },
  { id: 2, name: "1", price: 1500, select: false },
  { id: 3, name: "2", price: 1700, select: false },
];


export default function Rent() {
  const [radioValue, setRadioValue] = useState("1");

  


  const [bikes, setBikes] = useState(bikes_c);
  const [sum, setSum] = useState(0)

  const [bikes_cop, setBikes_cop] = useState(bikes_c);
  const [sum_cop, setSum_cop] = useState(0)

  const [sumState, setSumState] = useState(false)

  console.log(bikes)

  const selectBike = (id) => {
    console.log(id)
    let bikes_copy = bikes
    let sum_copy = sum
    // Object.assign(bikes_copy, bikes)
    for (let item of bikes_copy) {
      if (item.id === id) {
        let new_select = !item.select
        if (new_select === false) {
          sum_copy = sum - item.price
        }
        else {
          sum_copy = sum + item.price
        }
        item.select = new_select
      }
    }
    console.log(bikes_copy)
    setBikes_cop(bikes_copy)
    console.log(bikes)
    setSum_cop(sum_copy)
    console.log(sum)
  }

  const countSum = () => {
    setBikes(bikes_cop)
    setSum(sum_cop)
    setSumState(true)
  }
  // const [q1, setQ1] = useState("");
  // const [q2, setQ2] = useState("");
  // const [r, setR] = useState("");
  // const [w, setW] = useState("");
  // const [error, setError] = useState("");

  // const count = (e) => {
  //   e.preventDefault();
  //   console.log(parseInt(q1) && parseInt(q2) && parseInt(r))
  //   console.log(Number.isInteger(q2))
  //   console.log(Number.isInteger(r))
  //   if (parseInt(q1) && parseInt(q2) && parseInt(r) === 1) {
  //     setW(parseInt(q1)*parseInt(q2)/parseInt(r))
  //   }
  //   else {
  //     console.log("!")
  //     setError("На вход подано не число!")
  //     setW("")
  //     console.log(error)
  //   }
  //   console.log(error)

  // }

  // const reset = () => {
  //   setQ1("")
  //   setQ2("")
  //   setR("")
  //   setW("")
  //   setError("")
  // }

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
              <Nav.Link className="Navs" href="/rent" style={{color: "#297fff"}}>
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
      <a href="#type">Тип велосипеда</a>
      <a href="#bike">Выбрать велосипед</a>
      </div> */}
      <div className="RentBox">
        <div className="Header">
          <div className="RentBoxLabel">
            <a href="#mark" style={{textDecoration: "none", color: "black"}}>Аренда велосипедов с доставкой</a>
            </div>
          <div className="Logo">
            <div className="HelmetBox">
              <img
                alt="Шлем"
                src={helmet}
                style={{
                  marginTop: "30px",
                  marginLeft: "20px",
                  transform: "skew(23deg)",
                }}
              />
              <div className="FreeNames">Шлем</div>
              <div className="Frees">Бесплатно</div>
            </div>
            <div className="TorchBox">
              <img
                alt="Фонарик"
                src={torch}
                style={{
                  marginTop: "30px",
                  marginLeft: "30px",
                  transform: "skew(23deg)",
                }}
              />
              <div className="FreeNames">Фонарик</div>
              <div className="Frees">Бесплатно</div>
            </div>
            <div className="LockBox">
              <div className="HoverLockBox">
                <img
                  alt="Замок"
                  src={lock}
                  style={{
                    marginTop: "30px",
                    marginLeft: "60px",
                    transform: "skew(23deg)",
                  }}
                />
                <div className="FreeNames">Замок</div>
                <div className="Frees">Бесплатно</div>
              </div>
            </div>
          </div>
        </div>
        <div className="RentBoxForm">
          <div className="FormGroup">
            <Col>
              <InputGroup>
                <Form.Label>Тип аренды</Form.Label>
              </InputGroup>
              <ButtonGroup>
                <ToggleButton variant="primary">По дням</ToggleButton>
                <ToggleButton
                  style={{ backgroundColor: "#ffffff", color: "#14233D" }}
                >
                  2 часа
                </ToggleButton>
              </ButtonGroup>
            </Col>
            <Col>
              <InputGroup>
                <Form.Label>Дата и время начала</Form.Label>
              </InputGroup>
              <InputGroup>
                <Form.Control type="date"></Form.Control>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <Form.Label>Дата и время конца</Form.Label>
              </InputGroup>
              <InputGroup>
                <Form.Control type="date"></Form.Control>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <Form.Label>Доставка</Form.Label>
              </InputGroup>
              <InputGroup>
                <Form.Select>
                  <option>По адресу</option>
                  <option value="1">Самовывоз</option>
                </Form.Select>
              </InputGroup>
            </Col>
          </div>
        </div>
      </div>
      <div className="Connection"></div>
      {/* <div className="BikeTypes" id="type">
        <Form.Label style={{ marginLeft: "45px", marginTop: "29px" }}>
          Тип велосипеда
        </Form.Label>
        <div
          className="Bikes"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "120px",
          }}
        >
          <div className="Bikes1">
            <Col>
              <div className="BikeMaterial">
                <img src={bike} style={{ zIndex: "1", marginTop: "-110px" }} />
                <div style={{ marginTop: "20px", marginLeft: "25px" }}>
                  Алюминий
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="RentPrice">1500 руб</div>
                  <Button
                    style={{
                      marginLeft: "25px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    variant="outline-secondary"
                  >
                    ?
                  </Button>
                  <Button
                    style={{
                      marginLeft: "10px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    variant="outline-secondary"
                  >
                    +
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="BikeMaterial">
                <img src={bike} style={{ zIndex: "1", marginTop: "-110px" }} />
                <div style={{ marginTop: "20px", marginLeft: "25px" }}>
                  Карбон
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="RentPrice">1500 руб</div>
                  <Button
                    style={{
                      marginLeft: "25px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    variant="outline-secondary"
                  >
                    ?
                  </Button>
                  <Button
                    style={{
                      marginLeft: "10px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    variant="outline-secondary"
                  >
                    +
                  </Button>
                </div>
              </div>
            </Col>
          </div>
          <div className="Bikes2">
            <Col>
              <div className="BikeMaterial">
                <img src={bike} style={{ zIndex: "1", marginTop: "-110px" }} />
                <div style={{ marginTop: "20px", marginLeft: "25px" }}>
                  Горный/городской
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="RentPrice">1500 руб</div>
                  <Button
                    style={{
                      marginLeft: "25px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    variant="outline-secondary"
                  >
                    ?
                  </Button>
                  <Button
                    style={{
                      marginLeft: "10px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    variant="outline-secondary"
                  >
                    +
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="BikeMaterial">
                <img src={bike} style={{ zIndex: "1", marginTop: "-110px" }} />
                <div style={{ marginTop: "20px", marginLeft: "25px" }}>
                  Городской эконом
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="RentPrice">1500 руб</div>
                  <Button
                    style={{
                      marginLeft: "25px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    variant="outline-secondary"
                  >
                    ?
                  </Button>
                  <Button
                    style={{
                      marginLeft: "10px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                    variant="outline-secondary"
                  >
                    +
                  </Button>
                </div>
              </div>
            </Col>
          </div>
        </div>
        <Button className="ButtonMargin">Найти</Button>
      </div> */}
      <div class="BikeTypes" id="bike">
        <div id="mark" style={{ marginLeft: "45px", marginTop: "29px" }}>Выбрать велосипед</div>
        <div style={{display: "flex", flexDirection: "row", gap: "30px"}} >
          {bikes.map((obj, i) => (
            <Col key={i}>
            <div className="BikeMaterial" style={{marginTop: "150px"}}>
              <img src={bike} style={{ zIndex: "1", marginTop: "-110px" }} />
              <div style={{ marginTop: "20px", marginLeft: "25px", textAlign: "center"}}>
                {obj.name}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  marginLeft: "25px",
                }}
              >
                <div className="RentPrice" style={{textAlign: "center"}}>{obj.price}</div>
                <div>
                <Button
                  style={{
                    marginTop: "30px",
                    marginLeft: "15px",
                    height: "40px",
                    width: "80%",
                    borderRadius: "10px",
                  }}
                  key={i}
                  onClick={() => selectBike(obj.id)}
                  variant={obj.select ? "secondary" : "primary"}
                  
                >
                  {obj.select ? "Отменить выбор" : "Выбрать"}
                </Button>
                </div>
              </div>
            </div>
          </Col>
          ))}
        
        </div>
        <Button className="ButtonMargin" onClick={countSum}>Далее</Button>
        {sumState && 
          <div style={{fontSize: "20px", textAlign: "right"}}>К оплате: {sum}</div>}
      </div>

      {/* <div className="RentBox" style={{width: "700px", fontSize: "18px"}}>
        <Form onSubmit={count}>
        <div>Энергия системы точечных зарядов</div>
        <div style={{fontSize: "14px"}}>
          <div style={{display: "flex", margin: "10px"}}>
          <InputGroup>
          <Form.Label>Заряд 1, Кл</Form.Label>
          </InputGroup>
          <InputGroup>
          <Form.Control required style={{height: "40px"}} value={q1.toString()} onChange={(e) => setQ1(e.target.value)}/>
          </InputGroup>
          </div>
          <div style={{display: "flex", margin: "10px"}}>
          <InputGroup>
          <Form.Label>Заряд 2, Кл</Form.Label>
          </InputGroup>
          <InputGroup>
          <Form.Control required style={{height: "40px"}} value={q2.toString()} onChange={(e) => setQ2(e.target.value)}/>
          </InputGroup>
          </div>
          <div style={{display: "flex", margin: "10px"}}>
          <InputGroup>
          <Form.Label>Расстояние, м</Form.Label>
          </InputGroup>
          <InputGroup>
          <Form.Control required style={{height: "40px"}} value={r.toString()} onChange={(e) => setR(e.target.value)}/>
          </InputGroup>
          </div>
          </div>
          <p style={{color: "red"}}>{error}</p>
          <Button type="submit" style={{marginRight: "50px"}}>Рассчитать</Button>
          <Button onClick={reset}>Сброс</Button>
          <div style={{display: "flex", margin: "10px"}}>
          <InputGroup>
          <Form.Label>Результат, Дж:</Form.Label>
          </InputGroup>
          <InputGroup>
          <Form.Control disabled style={{height: "40px"}} value={w.toString()}/>
          </InputGroup>
          </div>
          </Form>
      </div> */}

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
