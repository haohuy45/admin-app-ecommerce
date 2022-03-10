import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../../dummyData";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import { Layout } from "../../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <FeaturedInfo />
        <Chart data={data} title="Thống kê doanh số" grid dataKey="Tiền" />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}
