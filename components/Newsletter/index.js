import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    console.log("front", email)
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        "body": JSON.stringify({ email: email })
      });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      console.log(e.response.data.error)
      setState("ERROR");
    }
  };

  return (
    <div >
      <div >
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={state === "LOADING" ? "" : ""}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p className="">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="">Success!</p>
      )}
    </div>
  );
}

export default Newsletter
