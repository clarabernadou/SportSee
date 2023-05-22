import React, { useContext } from "react"; // Imports hooks
import PropTypes from "prop-types"; // Imports PropTypes
import "./home.css"; 

import DataContext from "../DataProvider";

// Importing the components
import NavLeft from "../componants/navigationSection/navLeft/NavLeft";
import NavTop from "../componants/navigationSection/navTop/NavTop";
import Header from "../componants/dashboardSection/header/Header";
import WeightChart from "../componants/dashboardSection/graphic/weightChart/WeightChart";
import ObjectivesChart from "../componants/dashboardSection/graphic/objectivesChart/ObjectivesChart";
import RadarChart from "../componants/dashboardSection/graphic/radarChart/RadarChart";
import KpiChartComponent from "../componants/dashboardSection/graphic/kpiChart/KpiChart";
import ChildrenProps from "../componants/dashboardSection/cards/ChildrenProps";

const Home = () => {
  const { userData, userActivity, userAverageSessions, userPerformance } = useContext(DataContext); // Destructuring the values from the DataContext using the useContext hook
  
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
                <KpiChartComponent userKpi={userData?.score} />
              </div>              
            </div>
            <ChildrenProps userData={userData?.keyData} />
          </div>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  userData: PropTypes.shape({
    userInfos: PropTypes.object,
    keyData: PropTypes.object,
    score: PropTypes.number,
    todayScore: PropTypes.number,
  }),
  userActivity: PropTypes.shape({
    sessions: PropTypes.array,
  }),
  userAverageSessions: PropTypes.shape({
    sessions: PropTypes.array,
  }),
  userPerformance: PropTypes.object,
  userKpi: PropTypes.number,
};

export default Home;
