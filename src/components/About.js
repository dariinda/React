import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import TeamMemberDetails from "./TeamMemberDetails";

function About() {
  return (
    <div className="aboutUs">
      <div className="aboutUsHero">
        <div>About</div>
        <div className="divtwo">Food Alix</div>
      </div>
      <div className="ourMission">
        <div className="missionDesc">
          <div className="missionTitle">Mission</div>
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
        <div className="missionImgCtr">
          <img
            className="missionImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7IEJ9WZ1HwuTM8Cch1gragAuRzdvhMnuXw&s"
          />
        </div>
      </div>
      <div className="history">
        <div className="historyImgCtr">
          <img
            className="historyImg"
            src="https://cdni.iconscout.com/illustration/premium/thumb/greece-history-5526266-4620026.png?f=webp"
          />
        </div>
        <div className="historyDesc">
          <div className="historyTitle">History</div>
          <div>
            <p>
              Founded in 2010, our food delivery company began as a small
              startup with a vision to revolutionize the dining experience.
              Starting with just a handful of restaurants, we focused on
              delivering meals to busy professionals and families. Over the
              years, we expanded our partnerships, incorporated advanced
              technology for seamless ordering, and grew into a nationwide
              service. Today, we pride ourselves on connecting customers with a
              wide variety of local and gourmet cuisine, making dining
              effortless and enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="ourTeamContainer">
        <div className="TeamDesc">
          <div className="ourTeamTitle">Our Team</div>
          <div className="aboutTeam">
            <p>
              We are a team of dedicated scientist and business leaders, with a
              passion and commitments to great and healthy food.
            </p>
          </div>
        </div>
        <div className="TeamMemberCardCtr">
          {TeamMemberDetails.map((member) => (
            <TeamMemberCard 
            name={member.name} 
            designation={member.designation}
            country={member.country}
            src={member.src}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
