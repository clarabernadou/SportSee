import React, { useEffect, useState } from "react"; // Imports hooks
import "./home.css" // Imports the styles

// Importing the components
import NavLeft from "../componants/navigationSection/navLeft/NavLeft";
import NavTop from "../componants/navigationSection/navTop/NavTop"
import Header from "../componants/dashboardSection/header/Header";
import WeightChart from "../componants/dashboardSection/graphic/weightChart/WeightChart";
import ObjectivesChart from "../componants/dashboardSection/graphic/objectivesChart/ObjectivesChart";
import RadarChart from "../componants/dashboardSection/graphic/radarChart/RadarChart";
import KpiChartComponent from "../componants/dashboardSection/graphic/kpiChart/KpiChart";
import ChildrenProps from "../componants/dashboardSection/cards/ChildrenProps";

const userId = process.env.REACT_APP_USER_ID; // Assigning the user ID to a constant variable

export default function Home() {

  // Creating state for user data, user activity, user average sessions, and user performance
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  // Using the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => { // Creating an async function to fetch user data
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`); // Fetching the user data from the server
        const data = await response.json(); // Converting the response to JSON
        setUserData(data.data); // Updating the user data state with the fetched data
      } catch (error) {
        console.error(error); // Logging any errors to the console
      }
    };

    // Similar functions for fetching user activity, user average sessions, and user performance data
    const fetchUserActivity = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
        const data = await response.json();
        setUserActivity(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAverageSessionsData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        const data = await response.json();
        setUserAverageSessions(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPerformanceData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
        const data = await response.json();
        setUserPerformance(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    Promise.all([fetchUserData(), fetchUserActivity(), fetchAverageSessionsData(), fetchPerformanceData()]); // Using Promise.all to fetch all data simultaneously
  }, []);
  
  return (
    <>
      <NavTop />
      <div className="flex">
        <NavLeft />
        <div className="dashboardContent">
          <Header userData={userData?.userInfos} /> {/* Pass the user data to the 'Header' component as a prop & Use the safety operator to avoid errors */}
          <div className="flex gap">
            <div className="columnAlignment">
              <WeightChart userActivity={userActivity?.sessions} />
              <div className="flex gap">
                <ObjectivesChart userAverageSessions={userAverageSessions?.sessions} />
                <RadarChart userPerformance={userPerformance} />
                <KpiChartComponent userKpi={userData?.score ?? userData?.todayScore} />
              </div>              
            </div>
            <ChildrenProps userData={userData?.keyData} />
          </div>
        </div>
      </div>

    </>
  );
}
