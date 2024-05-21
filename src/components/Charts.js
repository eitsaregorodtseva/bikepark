import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Bar,
  BarChart,
  PieChart,
  Pie,
} from "recharts";

//1. количество велосипедов по видам +
//2. заказы по сезонам +
//3. длительность аренды
//4. аренда по месяцам +
//5. сравнение за 3 года +

const data1 = [
  {
    name: "1 час",
    Мужчины: 40,
    Женщины: 24,
  },
  {
    name: "2 часа",
    Мужчины: 45,
    Женщины: 50,
  },
  {
    name: "3 часа",
    Мужчины: 60,
    Женщины: 65,
  },
  {
    name: "4 часа",
    Мужчины: 58,
    Женщины: 45,
  },
  {
    name: "5 часов",
    Мужчины: 47,
    Женщины: 35,
  },
  {
    name: "6 часов",
    Мужчины: 30,
    Женщины: 20,
  },
];

const data2 = [
  {
    name: "Янв",
    2019: 5,
    2020: 4,
    2021: 3,
  },
  {
    name: "Фев",
    2019: 10,
    2020: 12,
    2021: 13,
  },
  {
    name: "Март",
    2019: 19,
    2020: 10,
    2021: 8,
  },
  {
    name: "Апр",
    2019: 20,
    2020: 30,
    2021: 40,
  },
  {
    name: "Май",
    2019: 500,
    2020: 520,
    2021: 630,
  },
  {
    name: "Июнь",
    2019: 700,
    2020: 820,
    2021: 837,
  },
  {
    name: "Июль",
    2019: 815,
    2020: 637,
    2021: 821,
  },
  {
    name: "Авг",
    2019: 190,
    2020: 500,
    2021: 564,
  },
  {
    name: "Сен",
    2019: 200,
    2020: 280,
    2021: 240,
  },
  {
    name: "Окт",
    2019: 150,
    2020: 170,
    2021: 190,
  },
  {
    name: "Ноя",
    2019: 40,
    2020: 20,
    2021: 10,
  },
  {
    name: "Дек",
    2019: 2,
    2020: 2,
    2021: 6,
  },
];

const data3 = [
  {
    name: "Дорожные",
    Детский: 90,
    Взрослый: 200,
  },
  {
    name: "Городские",
    Детский: 145,
    Взрослый: 89,
  },
  {
    name: "Горные",
    Детский: 100,
    Взрослый: 137,
  },
  {
    name: "Гибридные",
    Детский: 100,
    Взрослый: 120,
  },
];

const data4 = [
  {
    name: "Апр",
    Дорожные: 20,
    Городские: 23,
    Горные: 38,
    Гибридные: 25,
  },
  {
    name: "Май",
    Дорожные: 25,
    Городские: 27,
    Горные: 30,
    Гибридные: 21,
  },
  {
    name: "Июнь",
    Дорожные: 52,
    Городские: 61,
    Горные: 40,
    Гибридные: 42,
  },
  {
    name: "Июль",
    Дорожные: 70,
    Городские: 76,
    Горные: 45,
    Гибридные: 55,
  },
  {
    name: "Авг",
    Дорожные: 69,
    Городские: 37,
    Горные: 57,
    Гибридные: 43,
  },
  {
    name: "Сен",
    Дорожные: 26,
    Городские: 24,
    Горные: 38,
    Гибридные: 33,
  },
];
const data5 = [
  { name: "Весна", value: 400 },
  { name: "Лето", value: 300 },
  { name: "Зима", value: 300 },
  { name: "Осень", value: 200 },
];

export default function Charts() {
  return (
    <div
      style={{
        margin: "100px 50px",
        display: "flex",
        flexDirection: "column",
        gap: "100px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "70px" }}>
        <div>
          <div
            style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}
          >
            Длительность аренды мужчинами и женщинами
          </div>
          <LineChart
            width={600}
            height={600}
            data={data1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Мужчины"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="Женщины"
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2"
            />
          </LineChart>
        </div>

        <div>
          <div
            style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}
          >
            Сравнение количества прокатов по месяцам за 3 года
          </div>
          <AreaChart
            width={700}
            height={600}
            data={data2}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="2019"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="2020"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="2021"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
        <div>
          <div
            style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}
          >
            Количество велосипедов каждого вида
          </div>
          <BarChart
            width={600}
            height={600}
            data={data3}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Детский" fill="#8884d8" />
            <Bar dataKey="Взрослый" fill="#82ca9d" />
          </BarChart>
        </div>

        <div>
          <div
            style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}
          >
            Аренда велосипедов каждого вида
          </div>
          <BarChart
            width={600}
            height={600}
            data={data4}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Дорожные" stackId="a" fill="#8884d8" />
            <Bar dataKey="Городские" stackId="a" fill="#82ca9d" />
            <Bar dataKey="Горные" stackId="a" fill="#ffc658" />
            <Bar dataKey="Гибридные" stackId="a" fill="#42b6f5" />
          </BarChart>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
        <div>
          <div
            style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}
          >
            Аренда по сезонам
          </div>
          <PieChart width={600} height={600}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data5}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
