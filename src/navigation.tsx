"use client";
import { useLocale, useTranslations} from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
 
export default function NavigationComponent() {

  
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Navigation');
  

  const changeLangHandler = (lang:string) => {
    const localpath = "/"+locale;
    const language = "/"+lang;
    let newurl = pathname.replace(localpath, language);
    router.push(newurl)
  }

  return (
    <header className='header' > 
        <ul>
          <li><Link href={`/${locale}/`}>Home</Link></li>
          <li><Link href={`/${locale}/about`}>About</Link></li>
          <li><Link href={`/${locale}/contact`}>Contact</Link></li>
        </ul>
            <p style={{'float':'right'}}>
              <span className={locale == 'en' ? 'langactive' : ''} onClick={()=>changeLangHandler("en")}>{t('english')}</span>
               &nbsp; | &nbsp; 
              <span className={locale == 'hi' ? 'langactive' : ''} onClick={()=>changeLangHandler("hi")}>{t('hindi')}</span>
            </p>
        
    </header>
  )
}
