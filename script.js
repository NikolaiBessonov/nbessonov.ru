document.addEventListener('DOMContentLoaded', () => {
    // ----------- Content and links -----------
    const CONTACTS = {
        website: "https://cv.bessonov.xyz/",
        email: "nickolaybessonov@gmail.com",                // add your email if needed
        phone: "",                // add your phone number
        location: "Грузия",       // example: "Батуми, Грузия" or "Batumi, Georgia"
        github: "https://github.com/NikolaiBessonov",               // example: "https://github.com/yourname"
        linkedin: "https://ru.linkedin.com/in/nbessonov/ru",
        telegram: "https://t.me/nbessonov"
    };

    // Icons (Flaticon CDN)
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
            status: "Открыт к предложениям",
            nav: { about: "Обо мне", skills: "Скиллы", experience: "Опыт", projects: "Проекты", certs: "Сертификаты", contact: "Контакты" },
            sidebar: { contacts: "Контакты", skills: "Ключевые навыки" },
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
                    role: "DevOps Engineer (Platform Team)",
                    company: "Dats.team",
                    period: "июнь 2025 — н.в. · удалённо",
                    bullets: [
                        "Улучшал и оптимизировал Kubernetes-платформу, обслуживающую несколько production-сред.",
                        "Планировал и внедрял улучшения инфраструктуры вместе с Platform-командой.",
                        "Повысил безопасность кластеров Kubernetes, перенеся системные сервисы во внутреннюю сеть и сократив внешнюю поверхность.",
                        "Оптимизировал конфигурацию Cilium CNI: производительность сети, надёжность, связность сервисов.",
                        "Внедрил полуавтоматические обновления кластеров Kubernetes, сократив ручную работу и число ошибок.",
                        "Стандартизировал bare-metal инфраструктуру во всех средах, упростив обслуживание и замену оборудования.",
                        "Вместе с командой разработал Terraform-модули для автоматизации развёртывания кластеров: время подготовки кластера сократилось с ~недели до одного рабочего дня.",
                        "Улучшил GitOps-процессы, сделав управление инфраструктурой стабильнее и проще.",
                        "Повысил стабильность кластеров, внедрив StartupCPUBoost для Java-нагрузок с высоким потреблением CPU на старте.",
                        "Предлагал улучшения инфраструктуры, включая перенос небольших cloud-native сервисов (Redis, RabbitMQ и др.) с виртуальных машин в Kubernetes для снижения затрат.",
                        "Участвовал в архитектурных обсуждениях, планировании инфраструктуры и принятии технических решений.",
                        "Проводил код-ревью и помогал онбордить новых инженеров."
                    ]
                },
                {
                    role: "DevOps Engineer (CI/CD Team)",
                    company: "Dats.team",
                    period: "дек. 2023 — июнь 2025 · удалённо",
                    bullets: [
                        "Создавал и поддерживал CI/CD-пайплайны на GitLab CI.",
                        "Автоматизировал рутинные задачи на Bash и Python.",
                        "Разворачивал и поддерживал приложения в Kubernetes.",
                        "Повысил доступность приложений и надёжность деплоев.",
                        "Управлял NGINX и HAProxy для обеспечения высокой доступности приложений.",
                        "Настраивал мониторинг и логирование на Prometheus и Grafana.",
                        "Поддерживал production-среды и расследовал инфраструктурные инциденты.",
                        "Работал с командами разработки над улучшением процессов деплоя.",
                        "Помогал онбордить новых членов команды."
                    ]
                },
                {
                    role: "DevOps Engineer",
                    company: "T1 Consulting",
                    period: "март 2020 — нояб. 2023 · Москва, удалённо",
                    bullets: [
                        "Реализовал несколько проектов в разных отраслях (финансы, ритейл и др.).",
                        "Работал с Kubernetes и его плагинами.",
                        "Настроил SSO на базе Keycloak.",
                        "Писал Helm-чарты с использованием lib-charts.",
                        "Создавал и оптимизировал CI/CD-процессы на базе GitLab CI, TeamCity и Argo CD.",
                        "Много автоматизации на Python и Bash; автоматизировал процессы релизов.",
                        "Организовал и поддерживал среды test/dev/prod на стороне заказчика.",
                        "Разворачивал серверы: PostgreSQL, MongoDB, pfSense, PowerDNS, S3, Nexus, Kafka, Redis, RabbitMQ и др.",
                        "Постоянно изучаю новые технологии и внедряю их в работу."
                    ]
                },
                {
                    role: "System Engineer",
                    company: "Complex Oil",
                    period: "нояб. 2017 — июнь 2020 · Балашиха",
                    bullets: [
                        "Внедрил централизованное логирование и мониторинг виртуальных машин и веб-сервисов, резервное копирование.",
                        "Освоил Ansible и Chef и внедрил их в рабочие процессы.",
                        "Автоматизировал релизы и обновления через Jenkins + Ansible.",
                        "Докеризировал веб- и прокси-сервисы, сократив затраты на виртуальные машины.",
                        "Повышал безопасность с помощью ограничивающих сетевых политик.",
                        "Поддерживал серверы и рабочие станции на Linux (Ubuntu, CentOS) и Windows (Server 2008/2012r2/2016, 10).",
                        "Писал скрипты для уведомлений (e-mail, мессенджеры) и создания задач в service desk для 1-й линии поддержки."
                    ]
                },
                {
                    role: "DevOps Engineer",
                    company: "AT Consulting",
                    period: "июль 2019 — окт. 2019 · Москва",
                    bullets: [
                        "Работал над проектами в финансовом секторе.",
                        "Освоил процессы CI/CD на базе Jenkins.",
                        "Настроил CD-процессы деплоя в Kubernetes.",
                        "Писал Ansible-роли и плейбуки."
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
                website: "Сайт", email: "Email", phone: "Телефон", github: "GitHub", linkedin: "LinkedIn", location: "Локация",
                ctaBtn: "Написать мне"
            },
            footer: () => `© ${new Date().getFullYear()} Николай Бессонов`
        },
        en: {
            langLabel: "EN",
            title: "Nikolai Bessonov",
            subtitle: "DevOps Engineer",
            cta: "Download CV",
            status: "Open to opportunities",
            nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", certs: "Certifications", contact: "Contacts" },
            sidebar: { contacts: "Contacts", skills: "Key Skills" },
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
                    role: "DevOps Engineer (Platform Team)",
                    company: "Dats.team",
                    period: "Jun 2025 — Present · Remote",
                    bullets: [
                        "Improved and optimized a Kubernetes platform used by multiple production environments.",
                        "Planned and implemented infrastructure improvements together with the Platform team.",
                        "Improved Kubernetes cluster security by moving system services to the internal network and reducing external exposure.",
                        "Optimized Cilium CNI configuration to improve network performance, reliability, and service communication.",
                        "Implemented semi-automated Kubernetes cluster upgrades to reduce manual work and human errors.",
                        "Standardized bare-metal infrastructure across all environments to simplify maintenance and hardware replacement.",
                        "Developed Terraform modules with the team to automate Kubernetes cluster deployment; reduced cluster provisioning time from about one week to one working day.",
                        "Improved GitOps workflows to make infrastructure management more stable and easier.",
                        "Increased cluster stability by implementing StartupCPUBoost for Java workloads with high CPU usage during startup.",
                        "Proposed infrastructure improvements, including moving small cloud-native services (Redis, RabbitMQ, etc.) from virtual machines to Kubernetes to reduce infrastructure costs.",
                        "Participated in architecture discussions, infrastructure planning, and technical decision making.",
                        "Performed code reviews and helped onboard new engineers."
                    ]
                },
                {
                    role: "DevOps Engineer (CI/CD Team)",
                    company: "Dats.team",
                    period: "Dec 2023 — Jun 2025 · Remote",
                    bullets: [
                        "Built and maintained CI/CD pipelines using GitLab CI.",
                        "Automated routine tasks with Bash and Python.",
                        "Deployed and supported applications in Kubernetes.",
                        "Improved application availability and deployment reliability.",
                        "Managed NGINX and HAProxy to provide high availability for applications.",
                        "Configured monitoring and logging with Prometheus and Grafana.",
                        "Supported production environments and investigated infrastructure issues.",
                        "Worked with development teams to improve deployment processes.",
                        "Helped onboard new team members."
                    ]
                },
                {
                    role: "DevOps Engineer",
                    company: "T1 Consulting",
                    period: "Mar 2020 — Nov 2023 · Moscow, remote",
                    bullets: [
                        "Implemented several projects in different business sectors (financial, retail, etc.).",
                        "Worked with Kubernetes and its plugins.",
                        "Set up SSO based on Keycloak.",
                        "Wrote Helm charts using lib-charts.",
                        "Created and optimized CI/CD processes based on GitLab CI, TeamCity, and Argo CD.",
                        "Extensive automation with Python and Bash; automated release processes.",
                        "Organized and supported test/dev/prod environments on the customer's side.",
                        "Set up servers such as PostgreSQL, MongoDB, pfSense, PowerDNS, S3, Nexus, Kafka, Redis, RabbitMQ, etc.",
                        "Constantly exploring new technologies and putting them into practice."
                    ]
                },
                {
                    role: "System Engineer",
                    company: "Complex Oil",
                    period: "Nov 2017 — Jun 2020 · Balashikha",
                    bullets: [
                        "Implemented centralized logging and monitoring of VMs and web services, backups, etc.",
                        "Learned Ansible and Chef and put them to work.",
                        "Automated release processes and updates via Jenkins + Ansible.",
                        "Dockerized web services, proxy services, etc., thereby minimizing virtual machine costs.",
                        "Improved security with restrictive network policies.",
                        "Supported Linux (Ubuntu, CentOS) and Windows (Server 2008/2012r2/2016, 10) servers and workstations.",
                        "Wrote scripts creating notifications (e-mail, messengers) and service desk tasks for 1st line support."
                    ]
                },
                {
                    role: "DevOps Engineer",
                    company: "AT Consulting",
                    period: "Jul 2019 — Oct 2019 · Moscow",
                    bullets: [
                        "Worked on projects in the financial sector.",
                        "Gained knowledge of Jenkins-based CI/CD processes.",
                        "Created CD processes targeting Kubernetes.",
                        "Wrote Ansible roles and playbooks."
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
                website: "Website", email: "Email", phone: "Phone", github: "GitHub", linkedin: "LinkedIn", location: "Location",
                ctaBtn: "Get in touch"
            },
            footer: () => `© ${new Date().getFullYear()} Nikolai Bessonov`
        }
    };

    // ---- Country translation and normalization ----
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

    // ----------- Helpers -----------
    const q = (id) => document.getElementById(id);
    const setText = (selector, text) => { const n = document.querySelector(selector); if (n) n.textContent = text; };

    // One shared list of contact channels (used in the sidebar and in the #contact block)
    function getContactItems(lang, t) {
        const targetLang = lang === 'ru' ? 'ru' : 'en';
        const items = [];
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
        return items;
    }

    // ----------- Theme -----------
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

    // ----------- Render (RU/EN) -----------
    const savedLang = localStorage.getItem('lang') || 'ru';

    function render(lang) {
        const t = copy[lang];
        document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';

        // Sidebar: profile
        const av = q('avatar'); if (av) av.textContent = (t.title || '').trim().charAt(0).toUpperCase();
        setText('#sbName', t.title);
        setText('#sbRole', t.subtitle);
        setText('#statusText', t.status);
        setText('#sbContactsLabel', t.sidebar.contacts);
        setText('#sbSkillsLabel', t.sidebar.skills);

        // Hero (main section)
        setText('#eyebrow', t.nav.about);
        setText('#heroHeading', t.subtitle);
        setText('#aboutText', t.about);
        setText('#downloadBtn span', t.cta);
        const di = q('downloadIcon'); if (di) { di.src = ICONS.download; di.alt = (lang === 'ru' ? 'Скачать резюме' : 'Download CV'); }

        // Menu (sidebar nav + section titles)
        document.querySelectorAll('[data-i18n^="nav."]').forEach(node => {
            const key = node.getAttribute('data-i18n').split('.')[1];
            node.textContent = t.nav[key];
        });

        // Sidebar: contacts
        const sbList = q('sbContactsList');
        if (sbList) {
            sbList.innerHTML = '';
            getContactItems(lang, t).forEach(it => {
                const row = document.createElement(it.href ? 'a' : 'div');
                row.className = 'contact-row' + (it.href ? ' link-row' : '');
                if (it.href) { row.href = it.href; row.target = '_blank'; row.rel = 'noreferrer'; }
                const img = document.createElement('img');
                img.className = 'ico sb-ico';
                img.alt = it.key;
                img.src = ICONS[it.key] || ICONS.website;
                const span = document.createElement('span');
                span.textContent = it.label;
                row.appendChild(img);
                row.appendChild(span);
                sbList.appendChild(row);
            });
        }

        // Sidebar: key skills (no invented percentages — only the real list)
        const sbSkills = q('sbSkillsChips');
        if (sbSkills) {
            sbSkills.innerHTML = '';
            t.skills.forEach(s => {
                const span = document.createElement('span');
                span.className = 'badge';
                span.textContent = s;
                sbSkills.appendChild(span);
            });
        }

        // Skills (main block)
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

        // Experience — timeline
        const expWrap = q('expWrap');
        if (expWrap) {
            expWrap.innerHTML = '';
            t.experience.forEach((e) => {
                const item = document.createElement('div');
                item.className = 'tl-item';

                const date = document.createElement('div');
                date.className = 'tl-date';
                date.textContent = e.period;

                const title = document.createElement('div');
                title.className = 'tl-title';
                title.textContent = e.role;

                item.appendChild(date);
                item.appendChild(title);

                if (e.company) {
                    const org = document.createElement('div');
                    org.className = 'tl-org';
                    org.textContent = e.company;
                    item.appendChild(org);
                }

                const desc = document.createElement('div');
                desc.className = 'tl-desc';
                const ul = document.createElement('ul');
                e.bullets.forEach(b => {
                    const li = document.createElement('li');
                    li.textContent = b;
                    ul.appendChild(li);
                });
                desc.appendChild(ul);
                item.appendChild(desc);

                expWrap.appendChild(item);
            });
        }

        // Projects
        const projWrap = q('projectsWrap');
        if (projWrap) {
            projWrap.innerHTML = '';
            t.projects.forEach(p => {
                const card = document.createElement('div');
                card.className = 'proj-card';
                const h4 = document.createElement('h4'); h4.textContent = p.name;
                const pEl = document.createElement('p'); pEl.textContent = p.desc;
                card.appendChild(h4); card.appendChild(pEl);
                projWrap.appendChild(card);
            });
        }

        // Certificates
        const certsWrap = q('certsWrap');
        if (certsWrap) {
            certsWrap.innerHTML = '';
            t.certs.forEach(c => {
                const card = document.createElement('div');
                card.className = 'card cert-card';
                const icon = document.createElement('span');
                icon.className = 'cert-icon';
                icon.setAttribute('aria-hidden', 'true');
                icon.textContent = '✓';
                const name = document.createElement('span');
                name.className = 'cert-name';
                name.textContent = c;
                card.appendChild(icon);
                card.appendChild(name);
                certsWrap.appendChild(card);
            });
        }

        // Contacts — CTA block
        setText('#ctaTitle', t.status);
        setText('#contactText', t.contact.text);
        const ctaBtn = q('ctaBtn');
        if (ctaBtn) {
            const primary = CONTACTS.email ? `mailto:${CONTACTS.email}` : (CONTACTS.website || '#');
            ctaBtn.href = primary;
            ctaBtn.textContent = t.contact.ctaBtn;
            if (primary.startsWith('http')) { ctaBtn.target = '_blank'; ctaBtn.rel = 'noreferrer'; }
            else { ctaBtn.removeAttribute('target'); ctaBtn.removeAttribute('rel'); }
        }

        // Contacts — full grid
        const cg = q('contactsGrid');
        if (cg) {
            cg.innerHTML = '';
            getContactItems(lang, t).forEach(it => {
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

        // Footer
        const footerText = q('footerText'); if (footerText) footerText.textContent = t.footer();

        // Language toggle label
        const langBtn = q('langToggle');
        if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
    }

    render(savedLang);

    // Language switching
    const langToggle = q('langToggle');
    if (langToggle) langToggle.addEventListener('click', () => {
        const current = localStorage.getItem('lang') || 'ru';
        const next = current === 'ru' ? 'en' : 'ru';
        localStorage.setItem('lang', next);
        render(next);
    });

    // Resume download (.txt)
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

    // Current year
    const year = q('year'); if (year) year.textContent = new Date().getFullYear();

    // --- Mini self-tests (browser console) ---
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
            // copy.ru / copy.en structural parity (RU and EN must have the same structure)
            console.assert(copy.ru.experience.length === copy.en.experience.length, 'experience count RU/EN mismatch');
            console.assert(copy.ru.skills.length === copy.en.skills.length, 'skills count RU/EN mismatch');
            console.assert(copy.ru.projects.length === copy.en.projects.length, 'projects count RU/EN mismatch');
            console.assert(copy.ru.certs.length === copy.en.certs.length, 'certs count RU/EN mismatch');
            // DOM nodes presence (warn only) — new two-column layout
            ['avatar', 'sbName', 'sbRole', 'statusText', 'sbNav', 'sbContactsList', 'sbSkillsChips',
                'eyebrow', 'heroHeading', 'aboutText', 'skillsList', 'expWrap', 'projectsWrap', 'certsWrap',
                'ctaTitle', 'ctaBtn', 'contactText', 'contactsGrid', 'downloadBtn', 'themeToggle', 'langToggle']
                .forEach(id => { if (!q(id)) console.warn('[resume] Missing node:', id); });
            console.groupEnd();
        } catch (e) { console.error('Self-tests error', e); }
    })();
});
