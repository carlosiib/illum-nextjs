import React, { useState } from 'react'


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
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
      setState("ERROR");
    }
  };

  return (
    <section>
      <div className="newsLetterContainer">
        <div>
          <p>Join the community</p>
          <p>It<span>&apos;</span>s free</p>
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={state === "LOADING" ? "" : ""}
            type="button"
            disabled={state === "LOADING"}
            onClick={subscribe}
          >
            JOIN NOW!
          </button>
          {state === "ERROR" && (
            <p className="failedSubmission">{errorMessage}</p>
          )}
          {state === "SUCCESS" && (
            <p className="successSubmission">Success!</p>
          )}
        </div>
        <img src="/svg/newsletter-person.svg" alt="Join the community with Illumidesk newsletter" />
      </div>
    </section>
  );
}

export default Newsletter
