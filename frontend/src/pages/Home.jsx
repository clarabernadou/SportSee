import React, { useEffect, useState } from "react";

import NavLeft from "../componants/navigationSection/navLeft/NavLeft";
import NavTop from "../componants/navigationSection/navTop/NavTop"
import Header from "../componants/dashboardSection/header/Header";

export default function Home() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/user/18');
            const data = await response.json();
            setUserData(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <NavTop />
            <Header userData={userData} />
            <NavLeft />
        </>
    );
}

