const Greetings = ({ Name }) => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return (
      <>
        <h3>Good moring {Name}</h3>
      </>
    );
  } else if (hour > 12 && hour < 13) {
    return (
      <>
        <h3>Good afternoon {Name}</h3>
      </>
    );
  } else {
    return (
      <>
        <h3>Good evening {Name}</h3>
      </>
    );
  }
};

export default App = () => {
  const Name = "Chico Ramoe";
  return (
    <div>
      <Greetings Name={Name} />
    </div>
  );
};
