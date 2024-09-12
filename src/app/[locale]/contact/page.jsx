 
import {useTranslations} from 'next-intl';

 
export default function Contactus() {
  const t = useTranslations('ContactPage');
  return (<div style={{'float':'left','width':'100%'}}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>);
}