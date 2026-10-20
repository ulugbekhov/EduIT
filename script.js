// Translations dictionary
const i18n = {
    uz: {
        nav_home: "Bosh sahifa",
        nav_features: "Imkoniyatlar",
        nav_about: "Loyiha haqida",
        btn_login: "Kirish",
        hero_badge: "Viloyat IT-Yetakchisi Loyihasi — 2026",
        hero_title: "Maktab O'quvchilari Uchun Interaktiv IT Platformasi",
        hero_desc: "Noutbuk va smartfondan erkin foydalanish orqali raqamli ko'nikmalarni rivojlantirish hamda amaliy dasturlash muhiti.",
        hero_start: "Boshlash",
        hero_more: "Batafsil",
        features_title: "Platforma Imkoniyatlari",
        features_subtitle: "Amaliy dasturlash va gamifikatsiya ekotizimi",
        feat1_title: "Interaktiv Kodlash",
        feat1_desc: "Dasturni o'rnatmasdan, brauzerda HTML, CSS va JS topshiriqlarini bajarish.",
        feat2_title: "Reyting Tizimi",
        feat2_desc: "Sinf va maktablar o'rtasida ballar hamda sovrinlar bo'yicha jonli musobaqa muhiti.",
        feat3_title: "Mini App Integratsiya",
        feat3_desc: "Telegram Mini App orqali smartfondan testlar yechish va darslarni kuzatish.",
        about_title: "Loyiha Muallifi",
        author_name: "Ulug'bekov Muhammadnofiy Bobirmirzo o'g'li",
        author_info: "1-maktab, 8-'G' sinf o'quvchisi | Axborot Texnologiyalari Yo'nalishi",
        modal_title: "Platformaga Kirish",
        label_username: "Foydalanuvchi nomi / Login",
        label_password: "Parol",
        remember_me: "Eslab qolish",
        forgot_pass: "Parolni unutdingizmi?",
        btn_submit: "Kirish",
        login_success: "Xush kelibsiz, "
    },
    ru: {
        nav_home: "Главная",
        nav_features: "Возможности",
        nav_about: "О проекте",
        btn_login: "Войти",
        hero_badge: "Проект IT-Лидера Области — 2026",
        hero_title: "Интерактивная IT-Платформа Для Учащихся",
        hero_desc: "Развитие цифровых навыков и практическая среда программирования с ноутбука и смартфона.",
        hero_start: "Начать",
        hero_more: "Подробнее",
        features_title: "Возможности Платформы",
        features_subtitle: "Экосистема практического программирования и геймификации",
        feat1_title: "Интерактивный Кодинг",
        feat1_desc: "Выполнение заданий HTML, CSS и JS прямо в браузере без установки программ.",
        feat2_title: "Система Рейтинга",
        feat2_desc: "Живое соревнование между классами и школами по баллам и призам.",
        feat3_title: "Интеграция Mini App",
        feat3_desc: "Решение тестов и просмотр уроков со смартфона через Telegram Mini App.",
        about_title: "Автор Проекта",
        author_name: "Улугбеков Мухаммаднофий Бобурмирзоевич",
        author_info: "Ученик 8-'Г' класса, школа №1 | Направление ИТ",
        modal_title: "Вход в Платформу",
        label_username: "Имя пользователя / Логин",
        label_password: "Пароль",
        remember_me: "Запомнить меня",
        forgot_pass: "Забыли пароль?",
        btn_submit: "Войти",
        login_success: "Добро пожаловать, "
    },
    en: {
        nav_home: "Home",
        nav_features: "Features",
        nav_about: "About",
        btn_login: "Login",
        hero_badge: "Regional IT Leader Project — 2026",
        hero_title: "Interactive IT Platform for Students",
        hero_desc: "Developing digital skills and a practical programming environment via laptops and smartphones.",
        hero_start: "Get Started",
        hero_more: "Learn More",
        features_title: "Platform Features",
        features_subtitle: "Practical programming and gamification ecosystem",
        feat1_title: "Interactive Coding",
        feat1_desc: "Solve HTML, CSS, and JS challenges directly in the browser without setup.",
        feat2_title: "Leaderboard System",
        feat2_desc: "Live competition environment with points and rewards between classes and schools.",
        feat3_title: "Mini App Integration",
        feat3_desc: "Take quizzes and track progress right from your phone via Telegram Mini App.",
        about_title: "Project Author",
        author_name: "Ulugbekov Muhammadnofiy Boburmirzoevich",
        author_info: "Grade 8-'G', School No. 1 | Information Technology Stream",
        modal_title: "Platform Login",
        label_username: "Username / Login",
        label_password: "Password",
        remember_me: "Remember me",
        forgot_pass: "Forgot Password?",
        btn_submit: "Login",
        login_success: "Welcome, "
    }
};

let currentLang = "uz";

document.addEventListener("DOMContentLoaded", () => {
    // Language Selector Listener
    document.querySelectorAll(".lang-select").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const lang = item.getAttribute("data-lang");
            setLanguage(lang);
        });
    });

    // Dark / Light Theme Switcher
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const htmlElem = document.documentElement;

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElem.getAttribute("data-bs-theme");
        if (currentTheme === "dark") {
            htmlElem.setAttribute("data-bs-theme", "light");
            themeIcon.className = "fa-solid fa-moon text-dark";
        } else {
            htmlElem.setAttribute("data-bs-theme", "dark");
            themeIcon.className = "fa-solid fa-sun text-warning";
        }
    });

    // Login Form Submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const modalElem = document.getElementById("loginModal");
            const modal = bootstrap.Modal.getInstance(modalElem);
            modal.hide();

            alert(i18n[currentLang].login_success + username + "!");
        });
    }
});

function setLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    document.getElementById("current-lang").textContent = lang.toUpperCase();

    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (i18n[lang][key]) {
            elem.textContent = i18n[lang][key];
        }
    });
}
