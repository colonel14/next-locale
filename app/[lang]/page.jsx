import { getDictionary } from '../../lib/dictionary'

export default async function Home({params}) {
  console.log(params.lang);
  const dict = await getDictionary(params.lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {dict.home.title}
     </main>
  )
}
