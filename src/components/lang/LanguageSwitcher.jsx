import ita from '../../assets/icons/ita.png'
import eng from '../../assets/icons/eng.png'
import { useLanguage } from './LanguageProvider'

export const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage()
  return (
    <div className="d-flex justify-content-end">
      <button onClick={() => switchLanguage('it')} className="lang-button">
        <img src={ita} alt="Italiano" />
      </button>
      <button onClick={() => switchLanguage('en')} className="lang-button">
        <img src={eng} alt="English" />
      </button>
      {/* <p>Lingua attuale: {language === 'it' ? 'Italiano' : 'English'}</p> */}
    </div>
  )
}

export default LanguageSwitcher
