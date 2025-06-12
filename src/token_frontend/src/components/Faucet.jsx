import React, {useState} from "react";
import { token_backend, canisterId, createActor } from "../../../declarations/token_backend";

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Claim Tokens");

  async function handleClick(event) {
    setDisable(true);
    const result = await token_backend.payOut();
    console.log("payout: " + result);
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free DShub tokens here! Claim 10,000 DSJ tokens
      </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;