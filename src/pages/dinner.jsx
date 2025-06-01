import React from "react";
import Hero from "../sections/dinner/hero";
import Invite from "../sections/dinner/invite";
import Leaderboard from "../sections/dinner/leaderboard";
import Bonus from "../sections/dinner/bonus";
import CallToAction from "../sections/dinner/call-to-action";
import HowItWorks from "../sections/dinner/how-it-works";
import Hold from "../sections/dinner/hold";
import CommunityCallToAction from "../sections/home/communityCallToAction";
import Faqsection from "../components/faqsection";
import { images } from "../utils/images";
import Button from "../components/button";
import { MdClose } from "react-icons/md";
import Navigationbar from "../sections/home/navigationbar";

const Dinner = () => {
  // const [modalOpen, setModalOpen] = React.useState(true);
  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // };
  React.useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [modalOpen]);

  return (
    <div className="overflow-hidden">
      <div className="sticky top-0 z-50 ">
        <Navigationbar />
      </div>
      <Hero />
      <Invite />
      <Leaderboard />
      <Bonus />
      <CallToAction />
      <HowItWorks />
      <Hold />
      <CommunityCallToAction />
      <Faqsection faq={faq} />

      {/* {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 ">
          <div className="w-[350px] bg-white relative animate-wiggle">
            <MdClose
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 cursor-pointer"
              size={24}
            />
            <div className="flex items-center justify-center bg-black  w-full">
              <img
                src={images.trumpDinner}
                alt="Dinner"
                className="max-w-[150px] h-auto max-h-[150px]"
              />
            </div>
            <div className="p-4 flex flex-col">
              <h4 className="text-black text-center font-black mb-6">
                {" "}
                IMPORTANT UPDATE:
              </h4>
              <p className="text-black font-thin leading-5">
                If you're one of Top 220 $TRUMP Coin Holders, check your email
                (and spam) and your phone for the official invite and details.{" "}
                <br /> <br />
                Look for our email from GetTrumpMemes to complete your required
                security check. You must submit the security form by Friday, May
                15 by 1pm EST (New York Time) or you will not be permitted entry
                to the dinner. <br /> <br /> If you don’t see it in your inbox,
                please check your spam folder. We'll also be calling you. Please
                respond IMMEDIATELY with the required security information in
                order to confirm your Dinner Invitation.{" "}
              </p>

              <Button className="mt-6 mb-2 rounded-none" onClick={toggleModal}>
                <h2 className="uppercase font-black">Check Leaderboard</h2>
              </Button>

              <button onClick={toggleModal} className="text-gray-400 ">
                close window{" "}
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Dinner;

const faq = [
  {
    title: "How do I know my ranking?",
    ans: `You can check your ranking hourly on the official $TRUMP leaderboard—updated in real-time throughout the holding period.

From April 23 to May 12, your average $TRUMP balance determines your spot. Get $Trump Memes and climb the ranks.

The Top 220 holders on May 12 (average holdings from April 23) lock in their spot at the Gala Dinner with President Trump.

Top 25 get a VIP Reception with President Trump and a Special Tour by us.

Stack. Hold. Celebrate. 🏆`,
  },
  {
    title: "How do I know this is real?",
    ans: `This is 100% real. Details about the $TRUMP Gala Dinner will be posted on the official $TRUMP website and shared across all verified $TRUMP social media channels.`,
  },
  {
    title:
      "Who is eligible to attend the $TRUMP Gala Dinner with President Trump?",
    ans: `To earn your dinner at the $TRUMP Gala Dinner with President Trump at Trump National Golf Club in Washington, D.C., you need to be a top 220 $TRUMP Holder.`,
  },
  {
    title: "What is the location and date?",
    ans: `The Gala Dinner will take place on Thursday, May 22, 2025 and is held at Trump National Golf Club, Washington, D.C., Trump National is located at 20391 Lowes Island Blvd, Sterling, VA 20165.`,
  },
  {
    title:
      "I made the qualifying list of top 220 $TRUMP holders, but cannot attend. Can I send somebody in my place?",
    ans: `At the time of registration, you will provide the name and contact info of the person who will be attending the dinner, whether it's you or your friend or family member. Once that information is submitted, it cannot be changed.`,
  },
  {
    title: "I'm having trouble connecting my wallet, what should I do?",
    ans: `Please try again! If you are still having issues, contact us at support@gettrumpmemes.com.`,
  },
  {
    title: "Can I bring someone with me to The Gala Dinner?",
    ans: `Unfortunately, no. This is one of the most exclusive events in the world. Entry is exclusively reserved for the Top 220 $TRUMP holders. Each Dinner invitation grants access for one individual—no plus-ones, no exceptions.`,
  },
  {
    title: "I don't see my wallet on the leaderboard, am I registered?",
    ans: `If you don't see your wallet, you are not one of the top 220 Holders.`,
  },
  {
    title:
      "If I am one of the top 220 Holders at the end of the holding period, do I need to purchase a dinner ticket?",
    ans: `No, you're a top $TRUMP Holder! You will be invited to the Gala Dinner as our guest. However, all expenses incurred (travel, hotel, etc.) are your responsibility.`,
  },
  {
    title: "What if I RSVP to the Dinner but can no longer attend?",
    ans: `If your plans change, email us at support@GetTrumpMemes.com to cancel your reservation and let the next person in.`,
  },
  {
    title:
      "What is the schedule for the event and when should guests plan to arrive?",
    ans: `The gate opens at 5:00 pm, and all guests must be seated in the Ballroom by 7:00pm.`,
  },
  {
    title: "What is the dress code?",
    ans: `Men are required to wear a suit jacket and tie, while formal attire is required for women. Black Tie is optional, but preferred.`,
  },
  {
    title: "What are the smoking restrictions?",
    ans: `Smoking is strictly prohibited in all general club areas.`,
  },
  {
    title: "Which airport is recommended for guests flying into the event?",
    ans: `We recommend flying into XXX for convenience and proximity to the venue.`,
  },
  {
    title: "Do I need a background check?",
    ans: `Once you are selected, you will need to pass a background check. We will also screen your wallet for KYC & compliance purposes.`,
  },
  {
    title:
      "What provisions are there for special dietary requests like Kosher & Vegan options?",
    ans: `Guests with specific dietary preferences or requirements should inform the event organizers in advance and we will try our best. The event should conclude by 9:30pm.`,
  },
  {
    title: "What are the parking or drop-off instructions?",
    ans: `We will announce parking arrangements in your Gala Dinner confirmation.`,
  },
  {
    title: "What items are guests prohibited from bringing to The Gala Dinner?",
    ans: `Firearms, explosives, knives, pepper spray, drones, large bags, gifts, or packages are prohibited. Travel light to avoid delays.`,
  },
  {
    title: "IMPORTANT: All guests will pass through security screening.",
    ans: `Plan accordingly and help us keep this an unforgettable—and safe—evening.`,
  },
  {
    title:
      "What is the use of electronics and photography policy during The Gala Dinner?",
    ans: `The use of electronic devices is restricted to event spaces, and phones should be on vibrate.`,
  },
  {
    title: "Is there anything else I need to know?",
    ans: `Please review our Terms & Conditions before attending the event.`,
  },
  {
    title: "How are Time Weighted $TRUMP Holdings Calculated?",
    ans: `Time weighted holdings are calculated based on both the amount and duration of your $TRUMP holdings.`,
  },
  {
    title: "Do I have to send $TRUMP Coins somewhere?",
    ans: `Absolutely not! We will never ask you to send us any $TRUMP.`,
  },
  {
    title: "How much $TRUMP do I need to register?",
    ans: `You must have a minimum of 1 $TRUMP to enter.`,
  },
  {
    title: "What is Metaplex?",
    ans: `Metaplex is the leading platform for launching tokens and NFTs on Solana and the SVM. It powered the $TRUMP token launch.`,
  },
];
