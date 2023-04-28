import React, { useEffect, useState } from "react";
import "./home.css"

import NavLeft from "../componants/navigationSection/navLeft/NavLeft";
import NavTop from "../componants/navigationSection/navTop/NavTop"
import Header from "../componants/dashboardSection/header/Header";
import WeightChart from "../componants/dashboardSection/graphic/weightChart/WeightChart";
import ObjectivesChart from "../componants/dashboardSection/graphic/objectivesChart/ObjectivesChart";
import RadarChart from "../componants/dashboardSection/graphic/radarChart/RadarChart";
import KpiChartComponent from "../componants/dashboardSection/graphic/kpiChart/KpiChart";

const userId = process.env.REACT_APP_USER_ID;

console.log(userId);

export default function Home() {
  const [userData, setUserData] = useState(null); // Define a state variable named 'userData' and initialize it to 'null'
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userKpi, setUserKpi] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
        const data = await response.json();
        setUserActivity(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserActivity();
  }, []);

  useEffect(() => {
    const fetchAverageSessionsData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        const data = await response.json();
        setUserAverageSessions(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAverageSessionsData();
  }, []);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
        const data = await response.json();
        setUserPerformance(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPerformanceData();
  }, []);

  useEffect(() => {
    const fetchKpiData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        setUserKpi(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchKpiData();
  }, []);
  
  return (
    <>
      <NavTop />
      <div className="bodyContainer">
        <NavLeft />
        <div className="dashboardContent">
          <Header userData={userData?.userInfos} /> {/* Pass the user data to the 'Header' component as a prop & Use the safety operator to avoid errors */}
          <WeightChart userActivity={userActivity?.sessions} />
          <div className="smallCharts">
            <ObjectivesChart userAverageSessions={userAverageSessions?.sessions} />
            <RadarChart userPerformance={userPerformance} />
            <KpiChartComponent userKpi={userKpi?.score} />            
          </div>
        </div>
      </div>

    </>
  );
}
