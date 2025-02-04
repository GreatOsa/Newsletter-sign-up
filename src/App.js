import { useState } from "react";
import "./App.css";
import SubscriptionPage from "./component/SubscriptionPage";
import ThankYouPage from "./component/ThankYouPage";

function App() {
  const [isClick, setIsClick] = useState(false); // i use usestate to toggle the pages
  const [email, setEmail] = useState("");

  const [isError, setIsError] = useState(null);

  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function toggleClick() {
    setIsClick(!isClick);
    setEmail("");
  }
  function checkValidEmail() {
    if (!re.test(email)) {
      setIsError(true);

      console.log("yres");
    } else {
      setIsError(false);
      setIsClick(!isClick);

      console.log("noooo");
    }
  }

  return (
    <div className="App">
      {isClick ? (
        <ThankYouPage toggleClick={toggleClick} email={email} />
      ) : (
        <SubscriptionPage
          toggleClick={toggleClick}
          email={email}
          setEmail={setEmail}
          isError={isError}
          checkValidEmail={checkValidEmail}
        />
      )}
    </div>
  );
}

export default App;
