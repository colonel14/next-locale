import { getDictionary } from '@/lib/dictionary'

export default async function About({ params }) {
  console.log(params.lang);

  const dict = await getDictionary(params.lang || 'en') 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {dict.about.title}
     </main>
  )
}
