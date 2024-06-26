import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import TeamMemberDetails from "./TeamMemberDetails";

function About() {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 md:px-8 my-10">
      <div className="flex flex-col font-bold text-2xl sm:text-3xl mb-12 px-8">
        <div className=" ">About</div>
        <div className=" text-orange-400 mt-2 sm:mt-0">Food Alix</div>
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-sky-100 p-8 items-center rounded-3xl mb-6">
        <div className="missionDesc mb-4 md:mb-0 md:w-1/2 pr-7">
          <div className="missionTitle font-bold text-2xl mb-4">Mission</div>
          <div>
            <p>
              Our mission is to deliver delicious, high-quality meals from your
              favorite restaurants right to your doorstep. We strive to provide
              exceptional service, ensuring every order is fast, fresh, and
              convenient. By partnering with local eateries, we aim to support
              community businesses while offering our customers a diverse and
              delightful dining experience at home.
            </p>
          </div>
        </div>
        <div className="missionImgCtr w-full md:w-1/2 flex justify-center px-4 md:px-20">
          <img
            className="w-3/4 lg:w-3/4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7IEJ9WZ1HwuTM8Cch1gragAuRzdvhMnuXw&s"
            alt="Mission Image"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around bg-rose-100 p-8 items-center rounded-3xl mb-6">
        <div className="historyImgCtr">
          <img
            className="historyImg w-full lg:w-3/4"
            src="https://cdni.iconscout.com/illustration/premium/thumb/greece-history-5526266-4620026.png?f=webp"
          />
        </div>
        <div className="historyDesc mb-4 md:mb-0 md:w-1/2 pr-7">
          <div className="historyTitle font-bold text-2xl mb-4">History</div>
          <div>
            <p>
              Founded in 2010, our food delivery company began as a small
              startup with a vision to revolutionize the dining experience.
              Starting with just a handful of restaurants, we focused on
              delivering meals to busy professionals and families. Over the
              years, we expanded our partnerships, incorporated advanced
              technology for seamless ordering, and grew into a nationwide
              service.
            </p>
          </div>
        </div>
      </div>

      <div className="ourTeamContainer flex flex-col justify-around p-8 bg-fuchsia-100 rounded-3xl">
        <div className="TeamDesc flex flex-col md:flex-row justify-between items-center py-2 mb-8">
          <div className="ourTeamTitle font-bold text-2xl mb-4 md:mb-0 md:w-auto">
            Our Team
          </div>
          <div className="aboutTeam text-center md:text-left md:max-w-md w-full md:w-auto md:ml-4">
            <p>
              We are a team of dedicated scientists and business leaders, with a
              passion and commitment to great and healthy food.
            </p>
          </div>
        </div>

        <div className="TeamMemberCardCtr flex justify-between ">
          {TeamMemberDetails.map((member) => (
            <TeamMemberCard
              name={member.name}
              designation={member.designation}
              country={member.country}
              src={member.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
