import Link from "next/link";

export default async function Article({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>artictle: {articleId}</h1>
      <p>reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>en</Link>
        <Link href={`/articles/${articleId}?lang=es`}>es</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>fr</Link>
      </div> 
    </div>
  );
}
