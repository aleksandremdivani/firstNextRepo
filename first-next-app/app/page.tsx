import Link from "next/link";

const Home = () => {
  return (
    <div className="flex gap-4">
      <h1>home page</h1>
      <Link href="articles/news-123?lang=en">en</Link>
      <Link href="articles/news-123?lang=es">es</Link>
      <Link href="articles/news-123?lang=fr">fr</Link>
    </div>
  );
};

export default Home;
