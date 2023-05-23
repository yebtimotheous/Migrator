import React, { useState } from "react";

const MigrationForm = ({ onMigrate }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onMigrate(amount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Amount to Migrate:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0"
        step="1"
      />
      <button type="submit">Migrate Tokens</button>
    </form>
  );
};

export default MigrationForm;
