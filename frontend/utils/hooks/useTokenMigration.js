import { useState, useEffect } from "react";
import { getOldToken, getTokenMigration } from "../utils/contracts";
import getEthers from "../utils/getEthers";

export default function useTokenMigration() {
  const [provider, setProvider] = useState(null);
  const [oldToken, setOldToken] = useState(null);
  const [tokenMigration, setTokenMigration] = useState(null);

  useEffect(() => {
    const initEthers = async () => {
      try {
        const provider = await getEthers();
        setProvider(provider);
      } catch (error) {
        console.error(error);
      }
    };
    initEthers();
  }, []);

  useEffect(() => {
    if (provider) {
      setOldToken(getOldToken(provider));
      setTokenMigration(getTokenMigration(provider));
    }
  }, [provider]);

  const migrateTokens = async (amount) => {
    if (!oldToken || !tokenMigration) return;

    const weiAmount = ethers.utils.parseEther(amount.toString());
    const allowance = await oldToken.allowance(
      provider.getSigner()._address,
      tokenMigration.address
    );

    if (allowance.lt(weiAmount)) {
      await oldToken.approve(tokenMigration.address, weiAmount);
    }

    await tokenMigration.migrate(weiAmount);
  };

  return { provider, oldToken, tokenMigration, migrateTokens };
}
