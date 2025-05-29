import { useState, useEffect } from "react";
import "./styles.css";
const petData = [
  {
    animal: "Cheetah",
    fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
    image: "https://unsplash.com/s/photos/cheetah",
  },
  {
    animal: "Koala",
    fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
    image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg",
  },
  {
    animal: "Elephant",
    fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
    image: "../src/assets/1.svg",
  },
  {
    animal: "Zebra",
    fact: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
    image: "../src/assets/7.svg",
  },
  {
    animal: "Horse",
    fact: "Horses have excellent memory and are capable of recognizing human emotions.",
    image: "https://unsplash.com/s/photos/cheetah",
  },
];
const RenderComponents = ({ animal, fact, image }) => {
  return (
    <div>
      <img src={image} alt={animal} />
      <div>{fact}</div>
    </div>
  );
};

const Tabs = () => {
  const [selectedContent, setSelectedContent] = useState(petData[0]);

  const handleSelection = (animalName) => {
    const content = petData.find((data) => data.animal === animalName);
    if (content) {
      setSelectedContent(content);
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="header">
        {petData.map((data) => (
          <div
          className={`headercontent ${
    selectedContent.animal === data.animal ? "active" : ""
  }`}
            key={data.animal}
            onClick={() => handleSelection(data.animal)}
          >
            {data.animal}
          </div>
        ))}
      </div>

      {selectedContent && (
        <div className="mainContent">
          <RenderComponents
            animal={selectedContent.animal}
            fact={selectedContent.fact}
            image={selectedContent.image}
          />{" "}
        </div>
      )}
    </div>
  );
};

export default Tabs;
