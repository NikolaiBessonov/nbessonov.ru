document.addEventListener('DOMContentLoaded', () => {
    // ----------- Content and links -----------
    const CONTACTS = {
        website: "https://cv.bessonov.xyz/",
        email: "nickolaybessonov@gmail.com",                // add your email if needed
        phone: "+995533332783",                // add your phone number
        location: "Батуми, Грузия",       // example: "Батуми, Грузия" or "Batumi, Georgia"
        github: "https://github.com/NikolaiBessonov",               // example: "https://github.com/yourname"
        linkedin: "https://linkedin.com/in/nbessonov",
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
            subtitle: "Senior DevOps-инженер",
            cta: "Скачать резюме",
            status: "Открыт к предложениям",
            nav: { about: "Обо мне", skills: "Скиллы", experience: "Опыт", projects: "Проекты", certs: "Сертификаты", education: "Образование", contact: "Контакты" },
            sidebar: { contacts: "Контакты", skills: "Ключевые навыки" },
            about:
                "Senior DevOps-инженер с 7+ годами опыта. Строит и поддерживает крупные инфраструктурные платформы: Kubernetes, Terraform, AWS, GitLab CI, ArgoCD, мониторинг (Prometheus, Grafana). Опыт работы в финтехе и крупных корпорациях — построение инфраструктурных платформ и SSO-систем. Строит отказоустойчивые системы, автоматизирует CI/CD-пайплайны и тесно работает с командами разработки, чтобы упростить эксплуатацию. Сертифицирован CKA и CKS.",
            skills: [
                "Python, Bash",
                "Docker",
                "Kubernetes, Talos, Helm",
                "Ansible, Cilium",
                "Terraform",
                "GitLab CI, CI/CD",
                "ArgoCD",
                "Git",
                "AWS (EC2, S3, IAM, VPC)",
                "Prometheus, Grafana",
                "Kafka",
                "PostgreSQL, MongoDB, Elasticsearch",
                "Keycloak / SSO",
                "Linux",
                "Istio"
            ],
            experience: [
                {
                    role: "Senior DevOps Engineer (Platform Team)",
                    company: "DATS.Team",
                    period: "июнь 2025 — н.в.",
                    bullets: [
                        "Разворачивал и поддерживал production Kubernetes-кластеры на AWS EC2 и bare-metal серверах (Hetzner, Fornex) с помощью Terraform, используя переиспользуемые модули для AWS, Hetzner и OpenNebula, что сократило время подготовки кластера с ~недели до одного рабочего дня.",
                        "Заменил фиксированный парк on-demand нод на автоскейлинг через Karpenter (on-demand база для HA между зонами, Spot для пиковой нагрузки) и NLB (L4) для входящего трафика, сократив расходы на вычисления более чем на 60% без даунтайма при деплоях.",
                        "Мигрировал Kubernetes-кластеры в production, staging, dev и lab окружениях (bare-metal, Hetzner, Fornex) на Talos OS без даунтайма. В рамках миграции также сменил сетевой плагин кластера с Flannel на Cilium, повысив безопасность, масштабируемость и производительность сети.",
                        "Повысил безопасность Kubernetes-кластеров, перенеся системные сервисы во внутреннюю сеть и сократив внешнюю поверхность атаки.",
                        "Стандартизировал bare-metal инфраструктуру во всех окружениях и настроил полуавтоматические обновления кластеров, сократив ручную работу и число ошибок.",
                        "Контрибьютил в open-source Terraform-провайдер для Sonatype Nexus (terraform-provider-nexus): добавил поддержку OIDC security-ресурса и data source, исправил баги в CI, тестах и коде провайдера.",
                        "Повысил стабильность кластеров, добавив StartupCPUBoost для Java-нагрузок с высоким потреблением CPU при старте. Улучшил GitOps-процессы управления инфраструктурой и предложил перенос небольших cloud-native сервисов (Redis, RabbitMQ и др.) с виртуальных машин в Kubernetes — по оценке, это сократит серверный бюджет примерно на 10%.",
                        "Участвовал в архитектурных обсуждениях и планировании инфраструктуры в команде платформы из 5-8 человек. Проводил код-ревью и онбордил 4-6 новых инженеров."
                    ]
                },
                {
                    role: "DevOps Engineer (CI/CD Team)",
                    company: "DATS.Team",
                    period: "дек. 2023 — июнь 2025",
                    bullets: [
                        "Строил и поддерживал CI/CD-пайплайны на GitLab CI и ArgoCD для более чем 150 проектов. Сократил среднее время пайплайна с 15 до 4 минут, перенеся Java-сборки на Jib и улучшив кэширование сборок.",
                        "Создавал и поддерживал общие Helm-чарты для стандартизации деплоя во всех проектах, что упростило патчинг уязвимостей и одновременное обновление множества проектов.",
                        "Автоматизировал рутинные операционные задачи на Bash и Python. Разворачивал и поддерживал приложения в Kubernetes для повышения доступности и надёжности деплоев.",
                        "Управлял NGINX и HAProxy для обеспечения высокой доступности, настраивал мониторинг и логирование на Prometheus и Grafana.",
                        "Поддерживал production-окружения и расследовал инфраструктурные проблемы. Работал с командами разработки над улучшением процессов деплоя и помогал онбордить новых членов команды."
                    ]
                },
                {
                    role: "DevOps Engineer",
                    company: "T1 Group",
                    period: "март 2020 — дек. 2023",
                    bullets: [
                        "Мигрировал крупную микросервисную платформу финансового сектора (контакт-центр и партнёрские каналы на Kafka) в Kubernetes-окружение на стороне заказчика (Rancher RKE).",
                        "Перенёс git-репозитории, CI/CD-пайплайны (GitLab CI, TeamCity, ArgoCD), контейнерные реестры и хранилище артефактов в рамках этого переезда.",
                        "Разработал и поддерживал кастомный инструмент автоматизации релизов на Python и Bash. Он строит DAG (граф зависимостей) Java-сборок между репозиториями, формирует релизные манифесты и параллельно собирает 10+ микросервисов — сократив релизный процесс с 1 рабочего дня до ~1 часа.",
                        "Контейнеризировал приложения для production с помощью Docker, использовал Kaniko для безопасной rootless-сборки образов внутри GitLab CI пайплайнов. Стандартизировал доставку с помощью переиспользуемых Helm-чартов и CI-шаблонов.",
                        "Разворачивал и эксплуатировал платформы корпоративных порталов в Kubernetes через ArgoCD. Платформы построены на микросервисной архитектуре с Keycloak SSO и feature flags на Unleash, плюс автоматизированный бэкап и восстановление PostgreSQL.",
                        "Построил и эксплуатировал платформу электронного документооборота для ритейла, полностью работающую в Kubernetes, включая базы данных и хранилище — 3-нодовый MongoDB replica set и MinIO S3 с TLS, развёрнутые как Kubernetes workload'ы.",
                        "Настроил автоматические бэкапы (mongodump и s3cmd через CronJob) в S3 и интегрировал оборудование электронной подписи для подписания документов.",
                        "Разворачивал и поддерживал корпоративные инфраструктурные сервисы: GitLab, GitLab Runner, ArgoCD и OpenSearch. Эти сервисы обеспечивают CI/CD и корпоративные контент/поисковые платформы для нескольких проектов."
                    ]
                },
                {
                    role: "DevOps Engineer",
                    company: "AT Consulting",
                    period: "июнь 2019 — окт. 2019",
                    bullets: [
                        "Построил self-service платформу для автоматизации SAN и backup-инфраструктуры банковского клиента, объединив Jenkins-пайплайны, Ansible и Python-скрипты.",
                        "Автоматизировал настройку дисковых массивов (Huawei/IBM), fibre-channel zoning, пересканирование портов и развёртывание backup-агентов на клиентских и master-хостах, заменив ручные операции по администрированию СХД.",
                        "Автоматизировал настройку Linux-хостов для OKD (OpenShift) кластеров с помощью Ansible-ролей: управление пользователями и hostname, crontab, импорт сертификатов, Nginx и развёртывание агента мониторинга Zabbix.",
                        "Развернул и настроил Kubernetes-платформу, включая стек мониторинга Prometheus/Grafana/Alertmanager и SSO-аутентификацию (Dex и OAuth2 Proxy) перед ingress кластера.",
                        "Контейнеризировал и тестировал приложения с Docker для деплоя в Kubernetes, включая настройку ingress и storage class."
                    ]
                },
                {
                    role: "System Engineer",
                    company: "General Fueller",
                    period: "нояб. 2017 — март 2020",
                    bullets: [
                        "Автоматизировал сетевую инфраструктуру топливной розничной компании с множеством филиалов с помощью Ansible. Управлял 25+ роутерами Mikrotik (обновления RouterOS, firewall, DHCP, IPsec/L2TP) и VPN-шлюзами (Pritunl, SoftEther), соединяющими 30+ удалённых АЗС с головным офисом.",
                        "Автоматизировал администрирование Windows-рабочих станций и серверов филиалов (160+ рабочих станций, 30+ серверов), используя WinRM/PSRP через SSH bastion и SOCKS5-туннели для площадок без прямого доступа к сети. Это включало установку патчей и обновлений, проверку сервисов и лицензий, управление перезагрузками.",
                        "Автоматизировал обновления баз данных 1С:Предприятие в рознице. Писал скрипты для завершения активных сессий и деплоя конфигурации из центрального репозитория, поддерживая синхронизацию бухгалтерских систем филиалов и топливораздаточных колонок с минимальным простоем.",
                        "Разворачивал и защищал ключевые инфраструктурные сервисы: Chef-сервер, GitLab, мониторинг Zabbix с алертами в Telegram и PostgreSQL. Использовал UFW, fail2ban и автоматизацию Let's Encrypt (certbot) для безопасности.",
                        "Писал Chef-кукбуки и Ansible-роли для управления более чем 50 Linux-серверами в удалённых филиалах. Писал Python/Bash-скрипты для мониторинга АЗС-оборудования и кастомных приложений, чтобы быстро находить и устранять проблемы."
                    ]
                }
            ],
            projects: [
                { name: "Terraform-модули для Kubernetes-кластеров", desc: "Переиспользуемые модули для AWS, Hetzner и OpenNebula, сократившие время развёртывания кластера с недели до одного рабочего дня." },
                { name: "Миграция кластеров на Talos OS и Cilium", desc: "Zero-downtime миграция production/staging/dev/lab кластеров на Talos OS со сменой CNI с Flannel на Cilium." },
                { name: "Контрибьюция в terraform-provider-nexus", desc: "Добавил OIDC security-ресурс и data source в open-source Terraform-провайдер для Sonatype Nexus, исправил баги в CI и тестах." },
                { name: "DAG-инструмент автоматизации релизов", desc: "Кастомный инструмент на Python/Bash, который резолвит зависимости Java-сборок в граф и параллельно собирает 10+ микросервисов, сократив релиз с 1 дня до ~1 часа." }
            ],
            certs: ["Certified Kubernetes Administrator (CKA)", "Certified Kubernetes Security Specialist (CKS)"],
            education: ["Диплом по специальности «Информатика», Красногорский колледж — 2015"],
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
            subtitle: "Senior DevOps Engineer",
            cta: "Download CV",
            status: "Open to opportunities",
            nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", certs: "Certifications", education: "Education", contact: "Contacts" },
            sidebar: { contacts: "Contacts", skills: "Key Skills" },
            about:
                "Senior DevOps Engineer with 7+ years of experience. Builds and runs large infrastructure platforms. Main skills: Kubernetes, Terraform, AWS, GitLab CI, ArgoCD, and monitoring tools (Prometheus, Grafana). Experience in fintech and large enterprise companies, building infrastructure platforms and SSO systems. Builds highly available systems, automates CI/CD pipelines, and works closely with development teams to make operations simpler. CKA and CKS certified.",
            skills: [
                "Python, Bash",
                "Docker",
                "Kubernetes, Talos, Helm",
                "Ansible, Cilium",
                "Terraform",
                "GitLab CI, CI/CD",
                "ArgoCD",
                "Git",
                "AWS (EC2, S3, IAM, VPC)",
                "Prometheus, Grafana",
                "Kafka",
                "PostgreSQL, MongoDB, Elasticsearch",
                "Keycloak / SSO",
                "Linux",
                "Istio"
            ],
            experience: [
                {
                    role: "Senior DevOps Engineer (Platform Team)",
                    company: "DATS.Team",
                    period: "Jun 2025 — Present",
                    bullets: [
                        "Set up and managed production Kubernetes clusters on AWS EC2 and bare-metal servers (Hetzner, Fornex) using Terraform, with reusable modules for AWS, Hetzner, and OpenNebula that cut cluster setup time from about one week to one working day.",
                        "Replaced a fixed fleet of on-demand nodes with Karpenter-managed autoscaling (on-demand baseline for HA across zones, Spot for burst capacity) and NLB (L4) for traffic ingress, cutting compute costs by over 60% with zero downtime during deployments.",
                        "Migrated Kubernetes clusters in production, staging, dev, and lab environments (bare-metal, Hetzner, Fornex) to Talos OS with zero downtime. As part of this, also changed the cluster networking from Flannel to Cilium, improving security, scalability, and network performance.",
                        "Improved Kubernetes cluster security by moving system services to the internal network and reducing external exposure.",
                        "Standardized bare-metal infrastructure across all environments and set up semi-automated cluster upgrades to reduce manual work and human error.",
                        "Contributed to the open-source Terraform provider for Sonatype Nexus (terraform-provider-nexus). Added support for an OIDC security resource and data source, and fixed bugs in CI, tests, and the provider code.",
                        "Increased cluster stability by adding StartupCPUBoost for Java workloads with high CPU use at startup. Improved GitOps workflows for infrastructure management, and proposed moving small cloud-native services (Redis, RabbitMQ, etc.) from virtual machines to Kubernetes, projected to cut the server budget by about 10%.",
                        "Took part in architecture discussions and infrastructure planning within a 5-8 person platform team. Did code reviews and onboarded 4-6 new engineers."
                    ]
                },
                {
                    role: "DevOps Engineer (CI/CD Team)",
                    company: "DATS.Team",
                    period: "Dec 2023 — Jun 2025",
                    bullets: [
                        "Built and managed CI/CD pipelines with GitLab CI and ArgoCD for more than 150 projects. Reduced average pipeline time from 15 to 4 minutes by moving Java builds to Jib and improving build caching.",
                        "Built and maintained shared Helm charts to standardize deployment across all projects, making it easier to patch vulnerabilities and upgrade many projects at once.",
                        "Automated routine operational tasks with Bash and Python. Deployed and supported applications in Kubernetes to improve availability and deployment reliability.",
                        "Managed NGINX and HAProxy for high availability, and set up monitoring and logging with Prometheus and Grafana.",
                        "Supported production environments and investigated infrastructure problems. Worked with development teams to improve deployment processes and helped onboard new team members."
                    ]
                },
                {
                    role: "DevOps Engineer",
                    company: "T1 Group",
                    period: "Mar 2020 — Dec 2023",
                    bullets: [
                        "Migrated a large financial-sector microservices platform (contact-center and partner-channel systems using Kafka) to a Kubernetes environment hosted by the customer (Rancher RKE).",
                        "Migrated git repositories, CI/CD pipelines (GitLab CI, TeamCity, ArgoCD), container registries, and artifact storage as part of that move.",
                        "Built and maintained a custom release-automation tool in Python and Bash. It resolves Java build dependencies across repositories into a DAG (dependency graph), creates release manifests, and runs builds in parallel for 10+ microservices - cutting the release process from 1 business day to about 1 hour.",
                        "Containerized applications for production with Docker, and used Kaniko for secure, rootless image builds inside GitLab CI pipelines. Standardized delivery with reusable Helm charts and CI templates.",
                        "Deployed and operated corporate portal platforms on Kubernetes using ArgoCD. These platforms use a microservices architecture with Keycloak SSO, and Unleash feature flags, plus automated PostgreSQL backup and restore.",
                        "Built and operated a retail Electronic Document Management platform running fully in Kubernetes, including its databases and storage - a 3-node MongoDB replica set and MinIO S3 storage with TLS, all deployed as Kubernetes workloads.",
                        "Automated backups (mongodump and s3cmd via CronJob) to S3, and integrated digital-signature hardware for signing documents.",
                        "Deployed and maintained enterprise infrastructure services: GitLab, GitLab Runner, ArgoCD, and OpenSearch. These services support CI/CD and enterprise content/search platforms across several projects."
                    ]
                },
                {
                    role: "DevOps Engineer",
                    company: "AT Consulting",
                    period: "Jun 2019 — Oct 2019",
                    bullets: [
                        "Built a self-service platform to automate SAN and backup infrastructure for a banking client, combining Jenkins pipelines, Ansible, and Python scripts.",
                        "Automated disk array setup (Huawei/IBM), fibre-channel zoning, port rescanning, and backup agent deployment on client and master hosts, replacing manual storage administration steps.",
                        "Automated Linux host setup for OKD (OpenShift) clusters using Ansible roles: user and hostname management, crontab, certificate import, Nginx, and Zabbix monitoring agent deployment.",
                        "Deployed and configured a Kubernetes platform, including a Prometheus/Grafana/Alertmanager monitoring stack and SSO authentication (Dex and OAuth2 Proxy) in front of the cluster ingress.",
                        "Containerized and tested applications with Docker for deployment to Kubernetes, including ingress and storage class configuration."
                    ]
                },
                {
                    role: "System Engineer",
                    company: "General Fueller",
                    period: "Nov 2017 — Mar 2020",
                    bullets: [
                        "Automated network infrastructure for a fuel retail company with many branches, using Ansible. Managed 25+ Mikrotik routers (RouterOS upgrades, firewall, DHCP, IPsec/L2TP) and VPN gateways (Pritunl, SoftEther) that connected 30+ remote gas-station branches to the head office.",
                        "Automated management of Windows workstations and branch servers (160+ workstations, 30+ branch servers), using WinRM/PSRP over SSH bastion and SOCKS5 tunnels for sites without direct network access. This covered patch and update deployment, service and license checks, and reboot management.",
                        "Automated 1C:Enterprise retail database updates. Wrote scripts to close active sessions and deploy configuration from a central repository, keeping branch accounting and fuel-dispenser systems in sync with minimal downtime.",
                        "Deployed and secured core infrastructure services: Chef server, GitLab, Zabbix monitoring with Telegram alerts, and PostgreSQL. Used UFW, fail2ban, and Let's Encrypt (certbot) automation for security.",
                        "Wrote Chef cookbooks and Ansible roles to manage more than 50 Linux servers across remote branches. Wrote Python/Bash scripts to monitor gas-station equipment and custom applications, to find and fix problems quickly."
                    ]
                }
            ],
            projects: [
                { name: "Terraform modules for Kubernetes clusters", desc: "Reusable modules for AWS, Hetzner, and OpenNebula that cut cluster provisioning time from about a week to one working day." },
                { name: "Talos OS and Cilium cluster migration", desc: "Zero-downtime migration of production/staging/dev/lab clusters to Talos OS, switching the CNI from Flannel to Cilium." },
                { name: "Contribution to terraform-provider-nexus", desc: "Added an OIDC security resource and data source to the open-source Sonatype Nexus Terraform provider, fixed bugs in CI and tests." },
                { name: "DAG-based release automation tool", desc: "Custom Python/Bash tool that resolves Java build dependencies into a DAG and runs parallel builds for 10+ microservices, cutting release time from 1 day to about 1 hour." }
            ],
            certs: ["Certified Kubernetes Administrator (CKA)", "Certified Kubernetes Security Specialist (CKS)"],
            education: ["Diploma in Computer Science, Krasnogorsk College — 2015"],
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

        // Education
        const eduWrap = q('eduWrap');
        if (eduWrap) {
            eduWrap.innerHTML = '';
            t.education.forEach(ed => {
                const card = document.createElement('div');
                card.className = 'card cert-card';
                const icon = document.createElement('span');
                icon.className = 'cert-icon';
                icon.setAttribute('aria-hidden', 'true');
                icon.textContent = '🎓';
                const name = document.createElement('span');
                name.className = 'cert-name';
                name.textContent = ed;
                card.appendChild(icon);
                card.appendChild(name);
                eduWrap.appendChild(card);
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
            console.assert(copy.ru.education.length === copy.en.education.length, 'education count RU/EN mismatch');
            // DOM nodes presence (warn only) — new two-column layout
            ['avatar', 'sbName', 'sbRole', 'statusText', 'sbNav', 'sbContactsList', 'sbSkillsChips',
                'eyebrow', 'heroHeading', 'aboutText', 'skillsList', 'expWrap', 'projectsWrap', 'certsWrap', 'eduWrap',
                'ctaTitle', 'ctaBtn', 'contactText', 'contactsGrid', 'downloadBtn', 'themeToggle', 'langToggle']
                .forEach(id => { if (!q(id)) console.warn('[resume] Missing node:', id); });
            console.groupEnd();
        } catch (e) { console.error('Self-tests error', e); }
    })();
});
