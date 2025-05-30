import { useState } from "react";

const FirstForm = ({ username, setUsername, setStep }) => {
  return (
    <div>
      <label>username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setStep(2)}>Next</button>
    </div>
  );
};

const SecondForm = ({ email, setEmail, setStep }) => {
  return (
    <div>
      <label>email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <button onClick={() => setStep((prev) => prev - 1)}>Previous</button>
        <button onClick={() => setStep(3)}>Next</button>
      </div>
    </div>
  );
};

const ThirdForm = ({ phone, setPhone }) => {
  return (
    <div>
      <label>Phone</label>

      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit"> Submit </button>
    </div>
  );
};

const DisplayFormDataContent = ({ username, email, phone }) => {
  return (
    <div>
      <div>
        <label>username</label>
        <p>{username}</p>
      </div>

      <div>
        <label>email</label>
        <p>{email}</p>
      </div>
      <div>
        <label>phone</label>
        <p>{phone}</p>
      </div>
    </div>
  );
};

const MainForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <FirstForm
            username={username}
            setUsername={setUsername}
            setStep={setStep}
          />
        )}
        {step === 2 && (
          <SecondForm email={email} setEmail={setEmail} setStep={setStep} />
        )}
        {step === 3 && <ThirdForm phone={phone} setPhone={setPhone} />}
      </form>
      {submitClicked && (
        <DisplayFormDataContent
          username={username}
          email={email}
          phone={phone}
        />
      )}
    </div>
  );
};

export default MainForm;
