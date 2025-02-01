import "./App.css";
import Navigationbar from "./sections/navigationbar";
import Hero from "./sections/hero";
import Info from "./sections/info";
import Allocation from "./sections/allocation";
import BuySection from "./sections/buy";
import Address from "./sections/address";
import Community from "./sections/community";
import CommunityCallToAction from "./sections/communityCallToAction";
import Faqsection from "./sections/faqsection";
import Ticker from "./sections/ticker";
import Footer from "./sections/footer";
import ScrollToTop from "./sections/scrollToTop";
import React, { useEffect } from "react";
import axios from "axios";
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

      // Fetch IP and location using ipinfo
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
    console.log(details);

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
    console.log(response);
  };

  useEffect(() => {
    getVisitorDetails()
      .then((details) => sendToTelegram(details))
      .catch((error) => console.error("Error in useEffect:", error));
  }, []);

  return (
    <>
      <Navigationbar />
      <Hero />
      <Ticker />
      <Address />
      <BuySection />
      <Ticker />
      <Info />
      <Allocation />
      <Community />
      <CommunityCallToAction />
      <Faqsection />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
