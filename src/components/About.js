import React from 'react'

function About() {
  return (
    <div className="aboutUs">
      <div className='aboutUsHero'>About <br></br><span>Food Alix</span></div>
      <div className='ourMission'>
        <div className='missionDesc'><p>Our mission is to deliver delicious, high-quality meals from your favorite restaurants right to your doorstep. We strive to provide exceptional service, ensuring every order is fast, fresh, and convenient. By partnering with local eateries, we aim to support community businesses while offering our customers a diverse and delightful dining experience at home.</p></div>
        <div className='missionImgCtr'>
          <img className='missionImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7IEJ9WZ1HwuTM8Cch1gragAuRzdvhMnuXw&s"/>
        </div>
      </div>
      <div className='history'>
        <div className='historyImg'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/greece-history-5526266-4620026.png?f=webp"/>
        </div>
        <div className='historyDesc'><p>Founded in 2010, our food delivery company began as a small startup with a vision to revolutionize the dining experience. Starting with just a handful of restaurants, we focused on delivering meals to busy professionals and families. Over the years, we expanded our partnerships, incorporated advanced technology for seamless ordering, and grew into a nationwide service. Today, we pride ourselves on connecting customers with a wide variety of local and gourmet cuisine, making dining effortless and enjoyable for everyone.</p></div>
      </div>
      <div className='ourTeamContainer'>
        <div className='TeamMemberCard'></div>
      </div>
    </div>
  )
}

export default About