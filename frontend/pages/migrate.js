import Layout from "../components/Layout";
import MigrationForm from "../components/MigrationForm";

export default function Migrate() {
  const handleMigrate = async (amount) => {
    // Call the token migration contract to migrate the specified amount
    // Update the UI accordingly
  };

  return (
    <Layout>
      <h1>Migrate Tokens</h1>
      <MigrationForm onMigrate={handleMigrate} />
    </Layout>
  );
}
