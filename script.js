document.addEventListener('DOMContentLoaded', () => {
    // ----------- Контент и ссылки -----------
    const CONTACTS = {
        website: "https://nbessonov.ru/",
        email: "nickolaybessonov@gmail.com",                // добавьте email при необходимости
        phone: "",                // добавьте телефон
        location: "Грузия",       // пример: "Батуми, Грузия" или "Batumi, Georgia"
        github: "https://github.com/NikolaiBessonov",               // например: "https://github.com/yourname"
        linkedin: "https://ru.linkedin.com/in/nbessonov/ru",
        telegram: "https://t.me/nbessonov"
    };

    // Иконки (Flaticon CDN)
    const ICONS = {
        website: 'https://cdn-icons-png.flaticon.com/512/535/535239.png',
        email: 'https://cdn-icons-png.flaticon.com/512/561/561127.png',
        phone: 'https://cdn-icons-png.flaticon.com/512/597/597177.png',
        github: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png',
        linkedin: 'https://cdn-icons-png.flaticon.com/128/1236/1236849.png',
        location: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        telegram: 'https://cdn-icons-png.flaticon.com/128/1946/1946547.png',
        download: 'https://cdn-icons-png.flaticon.com/512/724/724933.png'
    };

    const copy = {
        ru: {
            langLabel: "RU",
            title: "Николай Бессонов",
            subtitle: "DevOps-инженер",
            cta: "Скачать резюме",
            nav: { about: "Обо мне", skills: "Скиллы", experience: "Опыт", projects: "Проекты", certs: "Сертификаты", contact: "Контакты" },
            about:
                "Senior DevOps инженер с 5+ годами опыта. Kubernetes (CKA/CKS), GitOps (FluxCD/Argo CD), Cilium, Helm, Terraform, GitLab CI/TeamCity, Keycloak SSO, Python и Bash. В проде поддерживал и оптимизировал кластеры K8s (22+ ноды), настраивал Cilium BGP и NodeLocal DNS, строил мониторинг на Prometheus/Grafana и автоматику деплоев. Фокус — надёжность, безопасность и максимальная автоматизация.",
            skills: [
                "Kubernetes (1.30), Talos",
                "GitOps: FluxCD, Argo CD",
                "Cilium CNI, BGP, NetworkPolicy",
                "Helm, Helmfile, Kustomize",
                "GitLab CI, TeamCity",
                "Terraform, Ansible",
                "Keycloak (SSO, OIDC)",
                "Prometheus, Alertmanager, Grafana",
                "Python, Bash",
                "Nginx, HAProxy",
                "Nexus Repository, контейнерные реестры",
                "Kyverno, политика безопасности"
            ],
            experience: [
                {
                    role: "Senior DevOps Engineer", 
                    company: "Ваша компания", 
                    period: "2021 — по н.в.", 
                    bullets: [
                        "Поддержка прод-кластеров Kubernetes (22+ ноды), повышение стабильности и производительности.",
                        "Внедрение GitOps (FluxCD/Argo CD), унификация Helm-чартов и пайплайнов.",
                        "Сетевая оптимизация с Cilium: BGP-экспорт, отладка L3/L7, NodeLocal DNS.",
                        "SSO на базе Keycloak: интеграция с внутренними инструментами и GitLab.",
                        "Наблюдаемость: Prometheus/Grafana, алерты, дешборды, SLO/SLI.",
                        "Автоматизация релизов и обслуживания на Python/Bash (CI jobs, проверки, миграции)."
                    ]
                },
                {
                    role: "DevOps Engineer", 
                    period: "2019 — 2021", 
                    company: "Ваша компания",
                    bullets: [
                        "CI/CD на GitLab CI и TeamCity, ускорение сборок и выката.",
                        "Инфраструктура как код (Terraform) и контейнеризация сервисов.",
                        "Ведение dev/test/prod сред, отказоустойчивость и бэкапы."
                    ]
                }
            ],
            projects: [
                { name: "Автообновление кластеров Talos через GitLab CI", desc: "GitOps-пайплайны для безопасного обновления Kubernetes-нод и кластеров с подтверждениями и откатами." },
                { name: "Сетевой стек на Cilium + BGP", desc: "Экспорт маршрутов на граничный роутер, отказоустойчивые Ingress-пути, точные NetworkPolicy." },
                { name: "Политики безопасности Kubernetes (Kyverno)", desc: "Запрет ручных namespace, контроль RBAC, валидация ресурсов, соответствие best practices." },
                { name: "Self-hosted Nexus", desc: "Репозитории, кэш публичных реестров, политики хранения, интеграция с CI/CD." }
            ],
            certs: ["Certified Kubernetes Administrator (CKA)", "Certified Kubernetes Security Specialist (CKS)"],
            contact: {
                text: "Открыт к предложениям и интересным задачам. Свяжитесь удобным способом:",
                website: "Сайт", email: "Email", phone: "Телефон", github: "GitHub", linkedin: "LinkedIn", location: "Локация"
            },
            footer: () => `© ${new Date().getFullYear()} Николай Бессонов`
        },
        en: {
            langLabel: "EN",
            title: "Nikolai Bessonov",
            subtitle: "DevOps Engineer",
            cta: "Download CV",
            nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", certs: "Certifications", contact: "Contacts" },
            about:
                "Senior DevOps engineer with 5+ years of experience. Kubernetes (CKA/CKS), GitOps (FluxCD/Argo CD), Cilium, Helm, Terraform, GitLab CI/TeamCity, Keycloak SSO, Python & Bash. Operated and optimized production K8s clusters (22+ nodes), configured Cilium BGP and NodeLocal DNS, built monitoring with Prometheus/Grafana, and automated delivery. Focused on reliability, security and automation.",
            skills: [
                "Kubernetes (1.30), Talos",
                "GitOps: FluxCD, Argo CD",
                "Cilium CNI, BGP, NetworkPolicy",
                "Helm, Helmfile, Kustomize",
                "GitLab CI, TeamCity",
                "Terraform, Ansible",
                "Keycloak (SSO, OIDC)",
                "Prometheus, Alertmanager, Grafana",
                "Python, Bash",
                "Nginx, HAProxy",
                "Nexus Repository, container registries",
                "Kyverno, security policies"
            ],
            experience: [
                {
                    role: "Senior DevOps Engineer", 
                    period: "2021 — present", 
                    company: "Your Company",
                    bullets: [
                        "Maintained production Kubernetes clusters (22+ nodes) with improved stability and performance.",
                        "Rolled out GitOps (FluxCD/Argo CD), unified Helm charts and pipelines.",
                        "Network optimization with Cilium: BGP export, L3/L7 troubleshooting, NodeLocal DNS.",
                        "Keycloak-based SSO: integration with internal tooling and GitLab.",
                        "Observability: Prometheus/Grafana, alerts, dashboards, SLO/SLI.",
                        "Release and ops automation in Python/Bash (CI jobs, checks, migrations)."
                    ]
                },
                {
                    role: "DevOps Engineer", 
                    period: "2019 — 2021", 
                    company: "Your Company",
                    bullets: [
                        "CI/CD with GitLab CI and TeamCity; faster builds and deployments.",
                        "Infrastructure as Code (Terraform) and containerization.",
                        "Managed dev/test/prod environments, HA and backups."
                    ]
                }
            ],
            projects: [
                { name: "Talos cluster auto-updates via GitLab CI", desc: "GitOps pipelines for safe node/cluster upgrades with approvals and rollbacks." },
                { name: "Cilium + BGP networking stack", desc: "Route export to edge router, resilient ingress paths, fine-grained NetworkPolicy." },
                { name: "Kubernetes security policies (Kyverno)", desc: "Block manual namespaces, enforce RBAC hygiene, validate resources." },
                { name: "Self-hosted Nexus", desc: "Repositories, public mirror cache, retention policies, CI/CD integration." }
            ],
            certs: ["Certified Kubernetes Administrator (CKA)", "Certified Kubernetes Security Specialist (CKS)"],
            contact: {
                text: "Open to opportunities and interesting challenges. Get in touch via:",
                website: "Website", email: "Email", phone: "Phone", github: "GitHub", linkedin: "LinkedIn", location: "Location"
            },
            footer: () => `© ${new Date().getFullYear()} Nikolai Bessonov`
        }
    };

    // ---- Перевод страны и нормализация ----
    const LOC_DICT = {
        ru2en: {
            'грузия': 'Georgia', 'россия': 'Russia', 'нидерланды': 'Netherlands',
            'испания': 'Spain', 'португалия': 'Portugal', 'германия': 'Germany',
            'черногория': 'Montenegro', 'албания': 'Albania'
        },
        en2ru: {
            'georgia': 'Грузия', 'russia': 'Россия', 'netherlands': 'Нидерланды',
            'spain': 'Испания', 'portugal': 'Португалия', 'germany': 'Германия',
            'montenegro': 'Черногория', 'albania': 'Албания'
        }
    };
    function countryOnly(raw) {
        if (!raw) return '';
        const parts = String(raw).split(',').map(s => s.trim()).filter(Boolean);
        return parts.length ? parts[parts.length - 1] : String(raw).trim();
    }
    function translateCountry(raw, targetLang) {
        const c = countryOnly(raw);
        const low = c.toLowerCase();
        if (targetLang === 'en') return LOC_DICT.ru2en[low] || c;
        return LOC_DICT.en2ru[low] || c;
    }

    // ----------- Хелперы -----------
    const q = (id) => document.getElementById(id);
    const setText = (selector, text) => { const n = document.querySelector(selector); if (n) n.textContent = text; };

    // ----------- Тема -----------
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    const themeToggle = q('themeToggle');
    if (themeToggle) themeToggle.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
    if (themeToggle) themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });

    // ----------- Рендер (RU/EN) -----------
    const savedLang = localStorage.getItem('lang') || 'ru';

    function render(lang) {
        const t = copy[lang];
        document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
        setText('#brand', t.title);
        setText('#title', t.title);
        setText('#subtitle', t.subtitle);
        setText('#aboutText', t.about);
        setText('#downloadBtn span', t.cta);

        // Меню
        document.querySelectorAll('[data-i18n^="nav."]').forEach(node => {
            const key = node.getAttribute('data-i18n').split('.')[1];
            node.textContent = t.nav[key];
        });

        // Верхние кнопки + иконки (с проверками)
        const websiteLink = q('websiteLink');
        if (websiteLink) {
            websiteLink.style.display = CONTACTS.website ? 'inline-flex' : 'none';
            if (CONTACTS.website) websiteLink.href = CONTACTS.website;
            const wi = websiteLink.querySelector('img.ico'); if (wi) { wi.src = ICONS.website; wi.alt = 'Website'; }
        }
        const telegramLink = q('telegramLink');
        if (telegramLink) {
            telegramLink.style.display = CONTACTS.telegram ? 'inline-flex' : 'none';
            if (CONTACTS.telegram) telegramLink.href = CONTACTS.telegram;
            const ti = telegramLink.querySelector('img.ico'); if (ti) { ti.src = ICONS.telegram; ti.alt = 'Telegram'; }
        }
        const githubLink = q('githubLink');
        if (githubLink) {
            githubLink.style.display = CONTACTS.github ? 'inline-flex' : 'none';
            if (CONTACTS.github) githubLink.href = CONTACTS.github;
            const gi = githubLink.querySelector('img.ico'); if (gi) { gi.src = ICONS.github; gi.alt = 'GitHub'; }
        }
        const linkedinLink = q('linkedinLink');
        if (linkedinLink) {
            linkedinLink.style.display = CONTACTS.linkedin ? 'inline-flex' : 'none';
            if (CONTACTS.linkedin) linkedinLink.href = CONTACTS.linkedin;
            const li = linkedinLink.querySelector('img.ico'); if (li) { li.src = ICONS.linkedin; li.alt = 'LinkedIn'; }
        }
        const di = q('downloadIcon'); if (di) { di.src = ICONS.download; di.alt = (lang === 'ru' ? 'Скачать резюме' : 'Download CV'); }

        // Скиллы
        const skillsWrap = q('skillsList');
        if (skillsWrap) {
            skillsWrap.innerHTML = '';
            t.skills.forEach((s, i) => {
                const span = document.createElement('span');
                span.className = 'badge';
                span.style.setProperty('--i', i);
                span.textContent = s;
                skillsWrap.appendChild(span);
            });
        }

        // Опыт
        const expWrap = q('expWrap');
        if (expWrap) {
            expWrap.innerHTML = '';
            t.experience.forEach((e) => {
                const card = document.createElement('div');
                card.className = 'card';

                const h3 = document.createElement('h3');
                h3.textContent = e.role;

                // новый блок meta: компания и период
                const meta = document.createElement('div');
                meta.className = 'meta';
                if (e.company) {
                    const company = document.createElement('span');
                    company.className = 'company';
                    company.textContent = e.company;
                    meta.appendChild(company);
                    // разделительная точка
                    const dot = document.createElement('span');
                    dot.className = 'dot';
                    dot.textContent = '•';
                    meta.appendChild(dot);
                }
                const period = document.createElement('span');
                period.className = 'period';
                period.textContent = e.period;
                meta.appendChild(period);

                const ul = document.createElement('ul');
                e.bullets.forEach(b => {
                    const li = document.createElement('li');
                    li.textContent = b;
                    ul.appendChild(li);
                });

                card.appendChild(h3);
                card.appendChild(meta);
                card.appendChild(ul);
                expWrap.appendChild(card);
            });
        }

        // Проекты
        const projWrap = q('projectsWrap');
        if (projWrap) {
            projWrap.innerHTML = '';
            t.projects.forEach(p => {
                const card = document.createElement('div');
                card.className = 'card';
                const h3 = document.createElement('h3'); h3.textContent = p.name;
                const pEl = document.createElement('p'); pEl.className = 'lead'; pEl.textContent = p.desc;
                card.appendChild(h3); card.appendChild(pEl);
                projWrap.appendChild(card);
            });
        }

        // Сертификаты
        const certsWrap = q('certsWrap');
        if (certsWrap) {
            certsWrap.innerHTML = '';
            t.certs.forEach(c => { const b = document.createElement('span'); b.className = 'badge'; b.textContent = c; certsWrap.appendChild(b) });
        }

        // Контакты (внизу)
        const cg = q('contactsGrid');
        if (cg) {
            cg.innerHTML = '';
            const items = [];
            const targetLang = lang === 'ru' ? 'ru' : 'en';
            if (CONTACTS.website) items.push({ key: 'website', label: t.contact.website, href: CONTACTS.website });
            if (CONTACTS.email) items.push({ key: 'email', label: t.contact.email, href: `mailto:${CONTACTS.email}` });
            if (CONTACTS.phone) items.push({ key: 'phone', label: t.contact.phone, href: `tel:${CONTACTS.phone}` });
            if (CONTACTS.github) items.push({ key: 'github', label: 'GitHub', href: CONTACTS.github });
            if (CONTACTS.linkedin) items.push({ key: 'linkedin', label: 'LinkedIn', href: CONTACTS.linkedin });
            if (CONTACTS.telegram) items.push({ key: 'telegram', label: 'Telegram', href: CONTACTS.telegram });
            if (CONTACTS.location) {
                const country = translateCountry(CONTACTS.location, targetLang);
                items.push({ key: 'location', label: country, href: null });
            }

            items.forEach(it => {
                const a = document.createElement(it.href ? 'a' : 'div');
                a.className = 'btn';
                a.style.justifyContent = 'flex-start';
                if (it.href) { a.href = it.href; a.target = '_blank'; a.rel = 'noreferrer'; }
                const img = document.createElement('img');
                img.className = 'ico';
                img.alt = it.key;
                img.src = ICONS[it.key] || ICONS.website;
                const span = document.createElement('span');
                span.textContent = it.label;
                a.appendChild(img);
                a.appendChild(span);
                cg.appendChild(a);
            });
        }

        // Текст и футер
        setText('#contactText', t.contact.text);
        const footerText = q('footerText'); if (footerText) footerText.textContent = t.footer();

        // Текст переключателя языка
        const langBtn = q('langToggle');
        if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
    }

    render(savedLang);

    // Переключение языка
    const langToggle = q('langToggle');
    if (langToggle) langToggle.addEventListener('click', () => {
        const current = localStorage.getItem('lang') || 'ru';
        const next = current === 'ru' ? 'en' : 'ru';
        localStorage.setItem('lang', next);
        render(next);
    });

    // Скачивание резюме (.txt)
    const downloadBtn = q('downloadBtn');
    if (downloadBtn) downloadBtn.addEventListener('click', () => {
        const lang = localStorage.getItem('lang') || 'ru';
        const t = copy[lang];
        const lines = [];
        lines.push(`${t.title} — ${t.subtitle}`);
        lines.push('');
        lines.push(t.about);
        lines.push('');
        lines.push(lang === 'ru' ? 'Скиллы:' : 'Skills:');
        t.skills.forEach(s => lines.push(`• ${s}`));
        lines.push('');
        lines.push(lang === 'ru' ? 'Опыт:' : 'Experience:');
        t.experience.forEach(e => { lines.push(`${e.role} (${e.period})`); e.bullets.forEach(b => lines.push(`  - ${b}`)); lines.push('') });
        const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = lang === 'ru' ? 'Rezume_Bessonov.txt' : 'Resume_Bessonov.txt';
        a.click(); URL.revokeObjectURL(url);
    });

    // Год
    const year = q('year'); if (year) year.textContent = new Date().getFullYear();

    // --- Мини-тесты (консоль) ---
    (function runTests() {
        try {
            console.group('%cResume self-tests', 'color:gray');
            // countryOnly
            console.assert(countryOnly('Batumi, Georgia') === 'Georgia', 'countryOnly city,country failed');
            console.assert(countryOnly('Грузия') === 'Грузия', 'countryOnly single failed');
            // translateCountry RU->EN
            console.assert(translateCountry('Грузия', 'en') === 'Georgia', 'translate RU->EN failed');
            // translateCountry EN->RU
            console.assert(translateCountry('Georgia', 'ru') === 'Грузия', 'translate EN->RU failed');
            // DOM nodes presence (warn only)
            ['skillsList', 'expWrap', 'projectsWrap', 'certsWrap', 'contactsGrid', 'downloadBtn', 'themeToggle', 'langToggle']
                .forEach(id => { if (!q(id)) console.warn('[resume] Missing node:', id); });
            console.groupEnd();
        } catch (e) { console.error('Self-tests error', e); }
    })();
});