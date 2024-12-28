export const dynamic = 'force-dynamic'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default async function Home() {
  const data = await fetch("http://nginx/nest-app/");
  const posts = await data.json();

  return <h1>{posts ? posts?.msg : "Helloworld"}</h1>;
}
