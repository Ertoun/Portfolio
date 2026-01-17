export const translations = {
    en: {
        header: {
            home: 'Home',
            caseStudies: 'Case Studies',
            downloadPortfolio: 'Download Portfolio',
            downloadResume: 'Download Resume',
        },
        hero: {
            titlePlain1: 'Designing experiences that ',
            titleHighlight1: 'inspire',
            titlePlain2: ' and ',
            titleHighlight2: 'connect',
            titlePlain3: '.',
            description: "Hello, I'm a UX Designer based in Paris. I specialize in crafting intuitive user interfaces and delightful digital products.",
            cta: 'Get in touch',
        },
        impact: {
            title: "Designed for Impact",
            subtitle: "Delivering measurable results through user-centric design leadership.",
            tagsLabel: "Methods used",
            tabs: [
                {
                    id: 'results',
                    label: 'Business Results',
                    title: 'Driving verifiable growth',
                    description: "Design isn't just about aesthetics; it's about business outcomes. Through data-informed redesigns and optimization, I've consistently delivered measurable improvements in key metrics.",
                    stat: { value: "40%", label: "Conversion Rate Uplift" },
                    stat2: { value: "15%", label: "Retention Increase" },
                    tags: ["A/B Testing", "Heap Analytics", "User Maps"],
                    imageCaption: "See how we optimized the checkout flow to boost revenue.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
                    link: "/case-studies/results"
                },
                {
                    id: 'leadership',
                    label: 'Team Leadership',
                    title: 'Building high-performing teams',
                    description: "I believe in empowering designers to do their best work. Promoting a culture of feedback, continuous learning, and cross-functional collaboration is at the core of my management style.",
                    stat: { value: "5x", label: "Team Growth" },
                    stat2: { value: "90%", label: "Employee Satisfaction" },
                    tags: ["Career Ladders", "Mentorship", "Hiring"],
                    imageCaption: "Learn about my approach to scaling design culture.",
                    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
                    link: "/case-studies/leadership"
                },
                {
                    id: 'scale',
                    label: 'Global Scale',
                    title: 'Designing for millions',
                    description: "Creating experiences that resonate across cultures and demographics. My work has been deployed to millions of users worldwide, requiring robust and accessible design systems.",
                    stat: { value: "2M+", label: "Active Users" },
                    stat2: { value: "12", label: "Supported Languages" },
                    tags: ["Design Systems", "i18n", "Accessibility"],
                    imageCaption: "Discover how we localized the product for 12 new markets.",
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
                    link: "/case-studies/scale"
                },
                {
                    id: 'product',
                    label: 'Product Strategy',
                    title: 'From zero to one',
                    description: "Guiding products from initial concept to market launch. I partner closely with stakeholders to align design strategy with business goals and user needs.",
                    stat: { value: "15+", label: "Products Launched" },
                    stat2: { value: "-6mo", label: "Time-to-Market" },
                    tags: ["Agile/Scrum", "Roadmapping", "Workshops"],
                    imageCaption: "Read the story behind our latest enterprise product launch.",
                    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
                    link: "/case-studies/product"
                }
            ],
            sectionCta: "Explore all case studies",
            cta: "Read full story"
        },
        caseStudies: {
            title: 'Case Studies',
            subtitle: 'Deep dives into my process, leadership, and impact.',
            landing: {
                overviewTitle: 'My Approach',
                overviewText: "I approach every project with a blend of data-driven strategy and creative intuition. My process is iterative, collaborative, and always focused on the user's needs and the business's goals.",
                methodsTitle: 'Core Methods',
                methods: [
                    { title: "Discovery", desc: "User interviews, competitive analysis, and data auditing." },
                    { title: "Definition", desc: "Problem framing, persona creation, and journey mapping." },
                    { title: "Design", desc: "Wireframing, prototyping, and high-fidelity UI design." },
                    { title: "Delivery", desc: "Design systems, developer handoff, and QA." }
                ],
                environmentTitle: "Work Environment",
                environmentText: "I thrive in agile, cross-functional environments where design has a seat at the table. I value transparency, rapid iteration, and a culture of psychological safety.",
            },
            nextProject: "Next Case Study",
            items: {
                results: {
                    id: 'results',
                    title: "Driving Business Growth",
                    role: "Lead Product Designer",
                    duration: "8 months",
                    tags: ["E-commerce", "Optimization", "Data Analysis"],
                    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
                    challenge: {
                        title: "The Challenge",
                        content: "The existing checkout flow had a high drop-off rate of 65% at the payment step. Users found the process confusing and lacked trust in the security of the platform. We needed to identify the friction points and redesign the flow to improve conversion without implementing a completely new backend system."
                    },
                    solution: {
                        title: "The Solution",
                        content: "We conducted extensive usability testing and heatmap analysis to pinpoint exactly where users were getting stuck. Based on these insights, I simplified the form fields, introduced a progress indicator, and added reassuring security badges. We also implemented a guest checkout option to reduce friction for new users."
                    },
                    result: {
                        title: "The Result",
                        content: "The redesigned checkout flow resulted in a 40% uplift in conversion rate within the first three months. Customer support tickets related to payment issues dropped by 25%. The project also established a new design pattern for forms that was adopted across the entire platform.",
                        stats: [
                            { value: "40%", label: "Conversion Uplift" },
                            { value: "-25%", label: "Support Tickets" },
                            { value: "$1.2M", label: "Est. Annual Revenue" }
                        ]
                    }
                },
                leadership: {
                    id: 'leadership',
                    title: "Scaling Design Culture",
                    role: "UX Design Manager",
                    duration: "2 years",
                    tags: ["Evangelism", "UX Data", "Cross-functional"],
                    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
                    challenge: {
                        title: "The Challenge",
                        content: "During a rapid growth phase, the main challenge was to prevent design from becoming a bottleneck. I needed to instill a shared user-centric culture across all departments (Engineering, Marketing, and Sales) to ensure product consistency."
                    },
                    solution: {
                        title: "The Solution",
                        content: "I established 'UX Days' to align all teams with UX best practices and implemented 1-to-1 Design Reviews with developers. Additionally, I created tailored workflows for the Marketing team and pioneered UX data storytelling by building PowerBI dashboards."
                    },
                    result: {
                        title: "The Result",
                        content: "UX became a core strategic pillar. By presenting UX metrics during All-hands meetings to the entire company, I ensured high visibility for user needs, leading to better-informed business decisions and stronger cross-team synergy.",
                        stats: [
                            { value: "100%", label: "Teams Aligned" },
                            { value: "1-to-1", label: "Dev/Design Sync" },
                            { value: "Data", label: "PowerBI Driven" }
                        ]
                    }
                },
                scale: {
                    id: 'scale',
                    title: "Global Product Localization",
                    role: "Senior UX Designer",
                    duration: "1 year",
                    tags: ["System Design", "Localization", "Accessibility"],
                    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
                    challenge: {
                        title: "The Challenge",
                        content: "Our product was launching in 12 new markets across Asia and the Middle East. The existing UI wasn't built to handle right-to-left (RTL) languages or variable text lengths. Additionally, the color palette and iconography had not been tested for cultural appropriateness in these new regions."
                    },
                    solution: {
                        title: "The Solution",
                        content: "I led the creation of a new, flexible design system capable of automatic RTL flipping. We audited the entire component library for accessibility and localization readiness. I collaborated with local experts to refine our visual language, ensuring it resonated with local users while maintaining our brand identity."
                    },
                    result: {
                        title: "The Result",
                        content: "Successfully launched in all 12 markets on schedule. The platform now supports 2M+ active users globally. The new design system reduced the time required to spin up a new country landing page from 2 weeks to 2 days.",
                        stats: [
                            { value: "12", label: "New Markets" },
                            { value: "2M+", label: "Global Users" },
                            { value: "100%", label: "Accessibility Score" }
                        ]
                    }
                },
                product: {
                    id: 'product',
                    title: "Enterprise SaaS Launch",
                    role: "Product Design Lead",
                    duration: "1.5 years",
                    tags: ["Strategy", "Zero to One", "SaaS"],
                    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
                    challenge: {
                        title: "The Challenge",
                        content: "The company wanted to enter the enterprise market with a new B2B product. We had a broad vision but no concrete requirements. We needed to validate the market need, define the MVP feature set, and design a complex interface that remained intuitive for non-technical users."
                    },
                    solution: {
                        title: "The Solution",
                        content: "I facilitated a series of design sprints with stakeholders and potential customers to define the product roadmap. We built rapid prototypes to test value propositions. I established a 'customer advisory board' to get continuous feedback throughout the development cycle."
                    },
                    result: {
                        title: "The Result",
                        content: "The product launched within 6 months, beating the market entry target. We onboarded 15 enterprise clients in the first quarter. The product was praised for its ease of use compared to legacy competitors, helping close deals with Fortune 500 companies.",
                        stats: [
                            { value: "6mo", label: "Time-to-Market" },
                            { value: "15", label: "Enterprise Clients" },
                            { value: "$500k", label: "Q1 ARR" }
                        ]
                    }
                }
            }
        },
        contact: {
            title: "Ready to make an impact?",
            description: "From strategic design leadership to crafting intuitive user journeys, I'm here to help you solve complex problems. Currently available for freelance and full-time roles.",
            button: 'Say Hello',
            email: 'ertan.ozaydin@gmail.com',
            copy: 'Copy Email',
            copied: 'Copied!'
        },
        footer: {
            rights: 'Design Portfolio. All rights reserved.',
        }
    },
    fr: {
         header: {
            home: 'Accueil',
            caseStudies: 'Études de cas',
            downloadPortfolio: 'Télécharger Portfolio',
            downloadResume: 'Télécharger CV',
        },
        hero: {
            titlePlain1: 'Concevoir des expériences qui ',
            titleHighlight1: 'inspirent',
            titlePlain2: ' et ',
            titleHighlight2: 'connectent',
            titlePlain3: '.',
            description: "Bonjour, je suis Ertan, UX Designer basé à Paris. Je me spécialise dans la création d'interfaces utilisateur intuitives et de produits numériques agréables.",
            cta: 'Contactez-moi',
        },
        impact: {
            title: "Conçu pour l'impact",
            subtitle: "Des résultats mesurables grâce à un leadership design centré sur l'utilisateur.",
            tagsLabel: "Méthodes utilisées",
            tabs: [
                {
                    id: 'results',
                    label: 'Résultats',
                    title: 'Stimuler une croissance vérifiable',
                    description: "Le design ne concerne pas seulement l'esthétique, mais aussi les résultats commerciaux. Grâce à des refontes basées sur les données, j'ai constamment apporté des améliorations mesurables.",
                    stat: { value: "40%", label: "Hausse de Conversion" },
                    stat2: { value: "15%", label: "Hausse Rétention" },
                    tags: ["A/B Testing", "Analyse Heap", "User Maps"],
                    imageCaption: "Découvrez comment nous avons optimisé le parcours d'achat.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
                    link: "/case-studies/results"
                },
                {
                    id: 'leadership',
                    label: 'Leadership',
                    title: 'Bâtir des équipes performantes',
                    description: "Je crois en l'autonomisation des designers. Promouvoir une culture du feedback, de l'apprentissage continu et de la collaboration interfonctionnelle est au cœur de mon style de gestion.",
                    stat: { value: "5x", label: "Croissance d'Équipe" },
                    stat2: { value: "90%", label: "Satisfaction Équipe" },
                    tags: ["Gestion Carrière", "Mentorat", "Recrutement"],
                    imageCaption: "En savoir plus sur mon approche de la culture design.",
                    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
                    link: "/case-studies/leadership"
                },
                {
                    id: 'scale',
                    label: 'Échelle Mondiale',
                    title: 'Concevoir pour des millions',
                    description: "Créer des expériences qui résonnent à travers les cultures. Mon travail a été déployé pour des millions d'utilisateurs, nécessitant des systèmes de design robustes et accessibles.",
                    stat: { value: "2M+", label: "Utilisateurs Actifs" },
                    stat2: { value: "12", label: "Langues Supportées" },
                    tags: ["Systèmes Design", "i18n", "Accessibilité"],
                    imageCaption: "Comment nous avons localisé le produit pour 12 nouveaux marchés.",
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
                    link: "/case-studies/scale"
                },
                {
                    id: 'product',
                    label: 'Stratégie Produit',
                    title: 'De zéro à un',
                    description: "Guider les produits du concept au lancement. Je collabore étroitement avec les parties prenantes pour aligner la stratégie de design avec les objectifs commerciaux.",
                    stat: { value: "15+", label: "Produits Lancés" },
                    stat2: { value: "-6mo", label: "Time-to-Market" },
                    tags: ["Agile/Scrum", "Roadmapping", "Ateliers"],
                    imageCaption: "L'histoire derrière notre dernier lancement produit.",
                    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
                    link: "/case-studies/product"
                }
            ],
            sectionCta: "Explorer tous les projets",
            cta: "Lire l'histoire"
        },
        caseStudies: {
            title: 'Études de cas',
            subtitle: 'Une plongée dans mon processus, mon leadership et mon impact.',
            landing: {
                overviewTitle: 'Mon approche',
                overviewText: "J'aborde chaque projet avec un mélange de stratégie basée sur les données et d'intuition créative. Mon processus est itératif, collaboratif et toujours centré sur les besoins de l'utilisateur et les objectifs de l'entreprise.",
                methodsTitle: 'Méthodes clés',
                methods: [
                    { title: "Découverte", desc: "Entretiens utilisateurs, analyse concurrentielle et audit de données." },
                    { title: "Définition", desc: "Cadrage du problème, cration de personas et cartographie du parcours." },
                    { title: "Design", desc: "Wireframing, prototypage et conception UI haute fidélité." },
                    { title: "Livraison", desc: "Systèmes de design, transfert aux développeurs et QA." }
                ],
                environmentTitle: "Environnement de travail",
                environmentText: "Je m'épanouis dans des environnements agiles et interfonctionnels où le design a sa place à la table. Je valorise la transparence, l'itération rapide et une culture de sécurité psychologique.",
            },
            nextProject: "Étude suivante",
            items: {
                results: {
                    id: 'results',
                    title: "Croissance commerciale",
                    role: "Lead Product Designer",
                    duration: "8 mois",
                    tags: ["E-commerce", "Optimisation", "Analyse données"],
                    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
                    challenge: {
                        title: "Le Défi",
                        content: "Le flux de paiement existant avait un taux d'abandon élevé de 65%. Les utilisateurs trouvaient le processus confus et manquaient de confiance. Il fallait identifier les points de friction et repenser le flux pour améliorer la conversion sans refondre tout le backend."
                    },
                    solution: {
                        title: "La Solution",
                        content: "Nous avons mené des tests d'utilisabilité et des analyses de cartes thermiques. J'ai simplifié les formulaires, ajouté un indicateur de progression et des badges de sécurité. Nous avons aussi implémenté une option de paiement invité."
                    },
                    result: {
                        title: "Le Résultat",
                        content: "Le nouveau flux a entraîné une hausse de 40% du taux de conversion en trois mois. Les tickets de support liés au paiement ont chuté de 25%. Le projet a établi un nouveau modèle de design pour les formulaires.",
                        stats: [
                            { value: "40%", label: "Hausse Conversion" },
                            { value: "-25%", label: "Tickets Support" },
                            { value: "1.2M€", label: "Revenu Annuel Est." }
                        ]
                    }
                },
                leadership: {
                    id: 'leadership',
                    title: "Culture design à l'échelle",
                    role: "UX Design Manager",
                    duration: "2 ans",
                    tags: ["Évangélisation", "Data UX", "Collaboration"],
                    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
                    challenge: {
                        title: "Le défi",
                        content: "Dans une phase de croissance rapide, le design risquait de devenir un simple exécutant. Le défi était d'insuffler une véritable culture utilisateur commune à toutes les équipes (Dev, Marketing, Sales) pour garantir la cohérence du produit."
                    },
                    solution: {
                        title: "La solution",
                        content: "J'ai instauré les 'UX Days' pour former les équipes aux bonnes pratiques et mis en place des Design Reviews en 1to1 avec les développeurs. J'ai également créé des processus spécifiques pour le marketing et automatisé le suivi de la performance via des dashboards PowerBI."
                    },
                    result: {
                        title: "Le résultat",
                        content: "Le design est devenu un pilier central des décisions stratégiques. La donnée UX est désormais partagée en Allhands devant toute l'entreprise, garantissant un alignement total entre les objectifs business et l'expérience utilisateur.",
                        stats: [
                            { value: "100%", label: "Équipes sensibilisées" },
                            { value: "1to1", label: "Design/Dev Review" },
                            { value: "PowerBI", label: "Data-Driven UX" }
                        ]
                    }
                },
                scale: {
                    id: 'scale',
                    title: "Localisation de produit globale",
                    role: "Senior UX Designer",
                    duration: "2.5 ans",
                    tags: ["System Design", "Localisation", "Accessibilité"],
                    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
                    challenge: {
                        title: "Le défi",
                        content: "Notre lancement dans 12 nouveaux marchés nécessitait de supporter les langues RTL et des longueurs de texte variables. La palette de couleurs et l'iconographie devaient aussi être adaptées culturellement."
                    },
                    solution: {
                        title: "La solution",
                        content: "J'ai dirigé la création d'un système de design flexible capable de basculer automatiquement en RTL. Nous avons audité la bibliothèque pour l'accessibilité et collaboré avec des experts locaux."
                    },
                    result: {
                        title: "Le résultat",
                        content: "Lancement réussi sur 12 marchés. La plateforme supporte 2M+ utilisateurs. Le nouveau système a réduit le temps de création de landing pages de 2 semaines à 2 jours.",
                        stats: [
                            { value: "12", label: "Nouveaux marchés" },
                            { value: "2M+", label: "Utilisateurs" },
                            { value: "100%", label: "Score accessibilité" }
                        ]
                    }
                },
                product: {
                    id: 'product',
                    title: "Lancement SaaS B2B",
                    role: "Product Design Lead",
                    duration: "1.5 ans",
                    tags: ["Stratégie", "Zéro à Un", "SaaS"],
                    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
                    challenge: {
                        title: "Le défi",
                        content: "Nous voulions pénétrer le marché B2B avec un nouveau produit SaaS. Nous avions une vision large mais pas de prérequis concrets. Il fallait valider le besoin et définir le MVP."
                    },
                    solution: {
                        title: "La solution",
                        content: "J'ai animé des design sprints avec les parties prenantes et clients potentiels. Nous avons construit des prototypes rapides pour tester les propositions de valeur."
                    },
                    result: {
                        title: "Le résultat",
                        content: "Le produit a été lancé en 6 mois. Nous avons signé 15 clients B2B au premier trimestre. Le produit a été salué pour sa facilité d'utilisation.",
                        stats: [
                            { value: "6 mois", label: "Time-to-market" },
                            { value: "15", label: "Clients B2B" },
                            { value: "500k€", label: "ARR T1" }
                        ]
                    }
                }
            }
        },
        contact: {
            title: "Prêt à avoir un impact ?",
            description: "Du leadership design stratégique à la conception de parcours utilisateurs intuitifs, je suis là pour vous aider à résoudre des problèmes complexes. Actuellement disponible pour freelance et CDI.",
            button: 'Dites bonjour',
            email: 'hello@ertoun.design',
            copy: 'Copier l\'email',
            copied: 'Copié !'
        },
        footer: {
            rights: 'Design Portfolio. Tous droits réservés.',
        }
    },
};
