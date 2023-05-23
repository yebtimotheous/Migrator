import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-deep-yellow text-white">
      <Head>
        <title>Token Migration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-center py-6">
        <h1 className="text-2xl font-semibold">Token Migration</h1>
      </header>
      <main className="container mx-auto px-4 flex-grow">{children}</main>
      <footer className="flex items-center justify-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}
