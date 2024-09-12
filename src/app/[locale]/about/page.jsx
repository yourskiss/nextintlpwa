 
import {useTranslations} from 'next-intl';

 
export default function Aboutus() {
  const t = useTranslations('AboutPage');
  return (<div style={{'float':'left','width':'100%'}}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>);
}