import { useState } from "react";
import "./App.css";
import SubscriptionPage from "./component/SubscriptionPage";
import ThankYouPage from "./component/ThankYouPage";

function App() {
  const [isClick, setIsClick] = useState(false); // i use usestate to toggle the pages
  const [email, setEmail] = useState("");

  function toggleClick() {
    setIsClick(!isClick);
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
        />
      )}
    </div>
  );
}

export default App;
