import React, { useState, useEffect, createContext } from 'react';

const DataContext = createContext(); // Creating a new context for data

const userId = process.env.REACT_APP_USER_ID; // Getting the user ID from environment variables
const useMockData = process.env.REACT_APP_MOCK_DATA === "true"; // Checking if mock data should be used

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
          // Setting the state variables with the fetched data based on the user ID
          setUserData(data.userMainData.find((user) => user.id === parseInt(userId)));
          setUserActivity(data.userActivity.find((user) => user.userId === parseInt(userId)));
          setUserAverageSessions(data.userAverageSession.find((user) => user.userId === parseInt(userId)));
          setUserPerformance(data.userPerformance.find((user) => user.userId === parseInt(userId)));
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("The code uses localhost data");
        try {
          // Fetching the data from the server using the user ID
          const responseUserData = await fetch(`http://localhost:3000/user/${userId}`);
          const userData = await responseUserData.json();
          setUserData(userData.data);

          const responseUserActivity = await fetch(`http://localhost:3000/user/${userId}/activity`);
          const userActivity = await responseUserActivity.json();
          setUserActivity(userActivity.data);

          const responseAverageSessions = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
          const averageSessions = await responseAverageSessions.json();
          setUserAverageSessions(averageSessions.data);

          const responsePerformance = await fetch(`http://localhost:3000/user/${userId}/performance`);
          const performanceData = await responsePerformance.json();
          setUserPerformance(performanceData.data);
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
