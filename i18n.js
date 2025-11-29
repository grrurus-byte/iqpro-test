const translations = {
    en: {
        welcome: "Welcome to IQ Pro Test",
        start: "Start Test",
        next: "Next",
        result: "Your result is",
        questionPrefix: "Question"
    },
    uk: {
        welcome: "Ласкаво просимо до IQ Pro Test",
        start: "Почати тест",
        next: "Далі",
        result: "Ваш результат",
        questionPrefix: "Питання"
    }
};

function t(lang, key) {
    return translations[lang]?.[key] || translations["en"][key];
}
