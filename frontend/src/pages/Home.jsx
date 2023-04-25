import React, { useEffect, useState } from "react";
import "./home.css"

import NavLeft from "../componants/navigationSection/navLeft/NavLeft";
import NavTop from "../componants/navigationSection/navTop/NavTop"
import Header from "../componants/dashboardSection/header/Header";

export default function Home() {
  const [userData, setUserData] = useState(null); // Define a state variable named 'userData' and initialize it to 'null'

  useEffect(() => {
    // Declare an async function named 'fetchData' to fetch user data from the server
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/user/18'); // Send a GET request to the server for user data with an ID
      const data = await response.json(); // Convert the response to JSON format
      setUserData(data.data); // Set the state variable 'userData' to the fetched data
    };
    fetchData(); // Call the 'fetchData' function when the component mounts
  }, []);
  return (
    <>
      <NavTop />
      <div className="bodyContainer">
        <NavLeft />
        <div className="dashboardContent">
          <Header userData={userData?.userInfos} /> {/* Pass the user data to the 'Header' component as a prop & Use the safety operator to avoid errors */}        
        </div>
      </div>

    </>
  );
}
