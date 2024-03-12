import React from "react";
// import { Card, Metric, Text, LineChart, Title } from "@tremor/react";

import Layout from "../../../components/layout/Layout";
import Kpi from "./Kpi";


function Dashboard() {
  return (
    <Layout>
      <Kpi />
    </Layout>
  );
}

export default Dashboard;
