## Pre: it used to display formatted text. it preserves whitespace, line breaks, and formatting exactly written in source.






import { useState } from "react";

const loginURL = "http://localhost:5005/";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [responseInformation, setResponseInformation] = useState("");
  const handleBackendCall = async (e) => {
    e.preventDefault(); //prevent page reload.
    setIsLoading(true);
    try {
      const result = await fetch(loginURL + "user/login", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userNameInput,
          password: userPassword,
        }),
      });
      const responseData = result.json();
      if (responseData.status === 1) {
        setResponseInformation(responseData.data);
      } else {
        setResponseInformation("Login Failed");
      }
    } catch (error) {
      setResponseInformation("An error occured");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleBackendCall}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={userNameInput}
            onChange={(e) => setUserNameInput(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loggin in..." : "Login"}
        </button>
      </form>

      {/* Display Response */}
      {responseInformation && (
        <div>
          <h3>Login Response</h3>
          <pre>{JSON.stringify(responseInformation, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
