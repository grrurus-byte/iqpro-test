const translations = {
    en: { start: "Start Test", welcome: "Welcome to IQ Pro Test" },
    uk: { start: "Почати Тест", welcome: "Ласкаво просимо до IQ Тесту" }
};

function t(lang, key) {
    return translations[lang]?.[key] || translations["en"][key];
}
