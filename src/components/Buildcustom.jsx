import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Buildcustom (props) {
  const [customBotName, setCustomBotName] = useState("");
  const [customMessagePrompt, setCustomMessagePrompt] = useState("");
  const [customContentPrompt, setCustomContentPrompt] = useState("");

  function handleSubmit() {
    const customData = {
      customBotName,
      customMessagePrompt,
      customContentPrompt,
    };
    props.handleCustomData(customData);
  }

  return (
    <div className="buildcustom__wrapper">
      <form>
        <h3>Name</h3>
        <input
          type="text"
          placeholder="Give your bot a name"
          onChange={(e) => setCustomBotName(e.target.value)}
        />
        <h3 className="custom__header">Initial message</h3>
        <input
          type="text"
          placeholder="The initial message the bot is going to send"
          onChange={(e) => setCustomMessagePrompt(e.target.value)}
        />
        <h3>Bot Behavior</h3>
        <textarea
          name=""
          id=""
          cols="15"
          rows="8"
          placeholder="Example: Act like a pirate"
          onChange={e => setCustomContentPrompt(e.target.value)}
        ></textarea>
        <Link to="/custom" className="submit__link" onClick={handleSubmit}>
          <button className="submit">Create Bot</button>
        </Link>
      </form>
    </div>
  );
}
