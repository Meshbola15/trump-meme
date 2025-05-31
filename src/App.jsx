import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dinner from "./pages/dinner";
import Navigationbar from "./sections/home/navigationbar";
import Footer from "./sections/footer";

function App() {
  const TOKEN = "fde151b4e2ebbf";

  const getVisitorDetails = async () => {
    try {
      const browserDetails = {
        browserName: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
      };

      const locationResponse = await fetch(
        `https://ipinfo.io/json?token=${TOKEN}`
      );
      const locationDetails = await locationResponse.json();

      return {
        ...browserDetails,
        ip: locationDetails.ip,
        country: locationDetails.country,
        region: locationDetails.region,
        city: locationDetails.city,
        location: locationDetails.loc,
        timezone: locationDetails.timezone,
      };
    } catch (error) {
      console.error("Error fetching visitor details:", error);
      return null;
    }
  };

  const sendToTelegram = async (details) => {
    if (!details) return;

    try {
      const response = await axios.post(
        "https://telegram-bot-visitors-info.onrender.com/visitor",
        {
          ip: details.ip,
          country: details.country,
          region: details.region,
          city: details.city,
          browser: details.browserName,
          platform: details.platform,
          language: details.language,
          screenResolution: details.screenResolution,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error("Error sending to Telegram:", err);
    }
  };

  useEffect(() => {
    getVisitorDetails()
      .then((details) => sendToTelegram(details))
      .catch((error) => console.error("Error in useEffect:", error));
  }, []);

  return (
    <Router>
      {/* <Navigationbar /> */}
      <Routes>
        <Route path="/dinner" element={<Dinner />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
