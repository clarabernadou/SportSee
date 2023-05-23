import React, { useState, useEffect, createContext } from 'react';

const DataContext = createContext(); // Creating a new context for data

const userId = process.env.REACT_APP_USER_ID; // Getting the user ID from environment variables
const useMockData = process.env.REACT_APP_MOCK_DATA === "true"; // Checking if mock data should be used

class UserMainDataModel {
  constructor(id, userInfos, score, todayScore, keyData) {
    this.id = id;
    this.userInfos = userInfos;
    this.score = score || todayScore;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}

class UserActivityModel {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

class UserAverageSessionsModel {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

class UserPerformanceModel {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}

export const DataProvider = ({ children }) => {
  // State variables to store the fetched data
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (useMockData) {
        console.log("The code uses mocked data");
        try {
          const data = await import('./data/data.json'); // Importing mocked data from the local file

          const userMainData = data.userMainData.map(user => new UserMainDataModel(
            user.id,
            user.userInfos,
            user.score,
            user.todayScore,
            user.keyData
          ));          
          const userActivityData = data.userActivity.map(activity => new UserActivityModel(
            activity.userId,
            activity.sessions
          ));
          const userAverageSessionData = data.userAverageSession.map(session => new UserAverageSessionsModel(
            session.userId,
            session.sessions
          ));
          const userPerformanceData = data.userPerformance.map(performance => new UserPerformanceModel(
            performance.userId,
            performance.kind,
            performance.data
          ));

          console.log(userMainData);

          setUserData(userMainData.find((user) => user.id === parseInt(userId)));
          setUserActivity(userActivityData.find((user) => user.userId === parseInt(userId)));
          setUserAverageSessions(userAverageSessionData.find((user) => user.userId === parseInt(userId)));
          setUserPerformance(userPerformanceData.find((user) => user.userId === parseInt(userId)));
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("The code uses localhost data");
        try {
          // Fetching the data from the server using the user ID
          const responseUserData = await fetch(`http://localhost:3000/user/${userId}`);
          const userData = await responseUserData.json();
          setUserData(new UserMainDataModel(
            userData.data.id,
            userData.data.userInfos,
            userData.data.score,
            userData.data.todayScore,
            userData.data.keyData
          ));

          const responseUserActivity = await fetch(`http://localhost:3000/user/${userId}/activity`);
          const userActivity = await responseUserActivity.json();
          setUserActivity(new UserActivityModel(userActivity.data.userId, userActivity.data.sessions));

          const responseAverageSessions = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
          const averageSessions = await responseAverageSessions.json();
          setUserAverageSessions(new UserAverageSessionsModel(averageSessions.data.userId, averageSessions.data.sessions));

          const responsePerformance = await fetch(`http://localhost:3000/user/${userId}/performance`);
          const performanceData = await responsePerformance.json();
          setUserPerformance(new UserPerformanceModel(performanceData.data.userId, performanceData.data.kind, performanceData.data.data));
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData(); // Call the data fetching function
  }, []);

  // Providing the data through the context provider
  return (
    <DataContext.Provider
      value={{
        userData,
        userActivity,
        userAverageSessions,
        userPerformance,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
