/import { useEffect, useState } from "react";

const content = [
  {
    title: "First Slide",
    content: "This is first slide for your information",
  },
  {
    title: "Second Slide",
    content: "This is second slide for your information",
  },
  {
    title: "Third Slide",
    content: "This is third slide for your information",
  },
  {
    title: "Fourth Slide",
    content: "This is fourth slide for your information",
  },
];

const CarouselComponent = ({ index }) => {
  const data = content[index];
  return (
    <div>
      <h3>{data.title}</h3>
      <div>{data.content}</div>
    </div>
  );
};

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) =>
  //         prevIndex === content.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, []);
  //   useEffect(() => {
  //     setIndex(0);
  //   }, []);

  return (
    <div>
      <CarouselComponent index={index} />
      <div>
        {content.map((_, idx) => (
          <span key={idx} onClick={() => setIndex(idx)}>
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
