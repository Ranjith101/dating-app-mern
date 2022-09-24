import React, { useState } from "react";
import DatingCard from "react-tinder-card";
import "./DatingCards.css";
const DatingCards = () => {
  const [people, setPeople] = useState([
    {
      name: "K Kumar",
      imgUrl:
        "https://files.oyebesmartest.com/uploads/large/1611563098870pyi0zm1bhhg6wrolv56bbdxye0fygkssebbpvxhsalaul6thlt2t22gtrw19hsopdnt5bfeh4lkwoi0ftwyoraut1ahi2ckg8eev.jpg",
    },
    {
      name: "Janson",
      imgUrl:
        "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Fareena",
      imgUrl:
        "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdGlmdWwlMjBnaXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Amyra",
      imgUrl:
        "https://www.unicef.org/pakistan/sites/unicef.org.pakistan/files/styles/hero_desktop/public/AZ_WASH_Punjab_132.JPG?itok=YWcKNrG1",
    },
  ]);

  console.log(people);
  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <DatingCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3 style={{color:"white"}}>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  );
};
export default DatingCards;
