import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import { i18n } from '@/i18n.config'

export default async function Navbar({ lang }) {
  const dict = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={lang == i18n.defaultLocale ? '/': `/${lang}/`}>{dict.navigation.home}</Link>
          </li>
          <li>
            <Link href={lang == i18n.defaultLocale ? '/about': `/${lang}/about`}>{dict.navigation.about}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}