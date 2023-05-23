import React from "react";

const TokenBalance = ({ oldTokenBalance, newTokenBalance }) => {
  return (
    <div>
      <p>Old Token Balance: {oldTokenBalance}</p>
      <p>New Token Balance: {newTokenBalance}</p>
    </div>
  );
};

export default TokenBalance;
