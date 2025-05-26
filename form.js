import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: true,
  });
  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const validateFields = () => {
    const errors = {};

    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.email = "Enter a valid email address";

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contact)) errors.contact = "Contact number must be 10 digits";

    if (!resume) errors.resume = "Resume is required";
    if (!url.trim()) errors.url = "URL is required";

    if (!selectedOption) errors.selectedOption = "Please select an option";

    if (!about.trim()) errors.about = "Please write something about yourself";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;        //Object.keys() is commonly used for iterating over an object's properties, Dynamically accessing or manipulating object properties.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log({
        firstName,
        lastName,
        email,
        contact,
        gender,
        subjects,
        resume,
        url,
        selectedOption,
        about,
      });
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the validation errors.");
    }
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: true,
    });
    setResume(null);
    setUrl("");
    setSelectedOption("");
    setAbout("");
    setFormErrors({});
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          {formErrors.firstName && (
            <span style={{ color: "red" }}>{formErrors.firstName}</span>
          )}

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          {formErrors.lastName && (
            <span style={{ color: "red" }}>{formErrors.lastName}</span>
          )}

          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          {formErrors.email && (
            <span style={{ color: "red" }}>{formErrors.email}</span>
          )}

          <label htmlFor="contact">Set Contact Number</label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => {
                const onlyNums=e.target.value.replace(/\D/g, "");
                setContact(onlyNums);
            }}
            placeholder="Enter Contact Number"
            maxLength={10}
            required
          />
          {formErrors.contact && (
            <span style={{ color: "red" }}>{formErrors.contact}</span>
          )}

          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female

          <label>Subjects</label>
          <input
            type="checkbox"
            name="english"
            checked={subjects.english}
            onChange={() => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="maths"
            checked={subjects.maths}
            onChange={() => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="physics"
            checked={subjects.physics}
            onChange={() => handleSubjectChange("physics")}
          />
          Physics

          <label htmlFor="file">Upload Resume</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
          {formErrors.resume && (
            <span style={{ color: "red" }}>{formErrors.resume}</span>
          )}

          <label htmlFor="url">Enter URL</label>
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            required
          />
          {formErrors.url && (
            <span style={{ color: "red" }}>{formErrors.url}</span>
          )}

          <label htmlFor="select">Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          >
            <option value="" disabled>
              Select your answer
            </option>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
            </optgroup>
          </select>
          {formErrors.selectedOption && (
            <span style={{ color: "red" }}>{formErrors.selectedOption}</span>
          )}

          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About yourself"
            required
          ></textarea>
          {formErrors.about && (
            <span style={{ color: "red" }}>{formErrors.about}</span>
          )}

          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
