import { useState, useEffect } from "react";
import "./styles.css";

const content = {
  title: "Sucess",
  content: "Working",
};
const ToastNotification = ({ title, content, setToastOpen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToastOpen(false);
    }, 4000);
  }, []);
  return (
    <div>
      <div className="toastdiv">
        <p>{title}</p>
        <div>{content}</div>
      </div>
    </div>
  );
};

const Toast = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setToastOpen((prev) => !prev)}>
        {" "}
        Show Toast{" "}
      </button>
      {toastOpen && (
        <ToastNotification
          title={content.title}
          content={content.content}
          setToastOpen={setToastOpen}
        />
      )}
    </div>
  );
};
export default Toast;
