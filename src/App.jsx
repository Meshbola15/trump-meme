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

const BOT_TOKEN = "8181280534:AAHmudgvNNZmFDRpfx8pS180u85oxNMuxSk";
const CHAT_ID = "-1007608862960";
const TOKEN = "fde151b4e2ebbf";

function App() {
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

  // https://t.me/c/2380451555/7
  const sendToTelegram = async (details) => {
    if (!details) {
      console.error("No details to send to Telegram.");
      return;
    }

    const message = `
Visitor Details:
- IP: ${details.ip}
- Country: ${details.country}
- Region: ${details.region}
- City: ${details.city}
- Location: ${details.location}
- Timezone: ${details.timezone}
- Browser: ${details.browserName}
- Platform: ${details.platform}
- Language: ${details.language}
- Screen Resolution: ${details.screenResolution}
    `;

    console.log(message);

    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    try {
      await fetch(telegramApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
    } catch (error) {
      console.error("Error sending to Telegram:", error);
    }
  };

  useEffect(() => {
    getVisitorDetails()
      .then((details) => sendToTelegram(details))
      .catch((error) => console.error("Error in useEffect:", error));
  }, []); // Empty dependency array ensures this runs once when the component mounts

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
