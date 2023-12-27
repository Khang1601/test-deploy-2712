import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import en from './locales/en'
import vi from './locales/vi'

i18n.use(initReactI18next).init({
        resources: {
            en,
            vi
        },
        lng: "en", 
        fallbackLng: "en"
    });


    
function Translate(){
    const {t} = useTranslation();
    return (
        <div>
            <h1>{t('hello')}</h1>
        </div>
    )
}
export default Translate;