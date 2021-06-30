import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './App.css'

export default function App() {
    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="App">
            <div className="wrap-btn-languages">
                <button className="btn-language" onClick={() => changeLanguage("en")}>EN</button>
                <button className="btn-language" onClick={() => changeLanguage("id")}>ID</button>
            </div>
            <hr />
            <div className="content">
                <div style={{ fontWeight: 'bold', padding: '10px 0px', fontSize: 'x-large' }}>
                    {t("title")}
                </div>
                <div style={{ fontSize: 'large', fontWeight: 'bold', padding: '10px 0px' }}>
                    {t("description.part1")}
                </div>
                <div style={{ textAlign: 'justify' }}>{t("description.part2")}</div>
            </div>
        </div>
    )
}
