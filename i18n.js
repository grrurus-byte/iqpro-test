const translations = {
  en: {
    start: "Start Test",
    next: "Next",
    welcome: "Welcome to IQ Pro Test",
    resultTitle: "Test Result",
    iqText: "Your IQ",
    percentileText: "Percentile",
    restart: "Take Test Again",
    belowAvg: "Below average intelligence",
    avg: "Average intelligence",
    aboveAvg: "Above average intelligence",
    high: "High intelligence",
    progress: "Progress"
  },
  uk: {
    start: "Почати Тест",
    next: "Далі",
    welcome: "Ласкаво просимо до IQ Тесту",
    resultTitle: "Результат тесту",
    iqText: "Ваш IQ",
    percentileText: "Процентиль",
    restart: "Пройти ще раз",
    belowAvg: "Нижче середнього рівня інтелекту",
    avg: "Середній рівень інтелекту",
    aboveAvg: "Вищий за середній рівень інтелекту",
    high: "Високий рівень інтелекту",
    progress: "Прогрес"
  },
  es: {
    start: "Comenzar Test",
    next: "Siguiente",
    welcome: "Bienvenido al Test de IQ Pro",
    resultTitle: "Resultado del Test",
    iqText: "Tu IQ",
    percentileText: "Percentil",
    restart: "Hacer el Test de Nuevo",
    belowAvg: "Inteligencia por debajo del promedio",
    avg: "Inteligencia promedio",
    aboveAvg: "Inteligencia superior al promedio",
    high: "Alta inteligencia",
    progress: "Progreso"
  },
  de: {
    start: "Test Starten",
    next: "Weiter",
    welcome: "Willkommen beim IQ Pro Test",
    resultTitle: "Testergebnis",
    iqText: "Ihr IQ",
    percentileText: "Perzentil",
    restart: "Test erneut machen",
    belowAvg: "Unterdurchschnittliche Intelligenz",
    avg: "Durchschnittliche Intelligenz",
    aboveAvg: "Überdurchschnittliche Intelligenz",
    high: "Hohe Intelligenz",
    progress: "Fortschritt"
  },
  fr: {
    start: "Commencer le Test",
    next: "Suivant",
    welcome: "Bienvenue au Test de QI Pro",
    resultTitle: "Résultat du Test",
    iqText: "Votre QI",
    percentileText: "Percentile",
    restart: "Refaire le Test",
    belowAvg: "Intelligence inférieure à la moyenne",
    avg: "Intelligence moyenne",
    aboveAvg: "Intelligence supérieure à la moyenne",
    high: "Haute intelligence",
    progress: "Progression"
  }
};

// Функція для отримання тексту на потрібній мові
function t(lang, key) {
  return translations[lang] && translations[lang][key] ? translations[lang][key] : translations['en'][key];
}
