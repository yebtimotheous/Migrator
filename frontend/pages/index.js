import Layout from "../components/Layout";
import TokenBalance from "../components/TokenBalance";

export default function Home() {
  // Fetch user's old and new token balances
  const oldTokenBalance = 0; // Replace with actual data
  const newTokenBalance = 0; // Replace with actual data

  return (
    <Layout>
      <h1>Token Migration</h1>
      <TokenBalance
        oldTokenBalance={oldTokenBalance}
        newTokenBalance={newTokenBalance}
      />
    </Layout>
  );
}
