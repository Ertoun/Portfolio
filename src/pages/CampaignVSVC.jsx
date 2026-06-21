import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  Users, 
  MessageSquare, 
  Flame, 
  ShieldCheck, 
  Send, 
  ThumbsUp, 
  TrendingUp, 
  Trophy, 
  Clock, 
  Coins, 
  CheckCircle2
} from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

// Import local assets
import equipmentsImg from '../assets/vsvc_equipment_jersey.png';
import clubLifeImg from '../assets/vsvc_club_life_outside.png';
import democracyImg from '../assets/vsvc_democracy_talk.png';
import brandCommImg from '../assets/vsvc_brand_comm.png';

// Local translation dictionary for the campaign
const campaignTranslations = {
  fr: {
    heroTag: "Campagne Présidentielle VSVC 2026",
    heroTitle: "L'activité associative au coeur du VSVC",
    heroSubtitle: "Candidature pour la présidence du VSVC. Un projet ambitieux, centré sur l'expérience joueur, la transparence et la convivialité.",
    visionTitle: "Ma Vision pour le VSVC",
    visionText: "Ma candidature repose sur une conviction simple : le club vit et évolue par l'action et l'engagement de ses membres. En plaçant l'activité associative au cœur de chaque décision, nous renforçons ensemble la dynamique du VSVC. Modernisons nos pratiques, réaffirmons notre identité et créons des moments forts qui fédèrent toute la communauté.",
    
    // Category titles
    catEquip: "Équipements & Matériel",
    catClub: "Vie Sociale & Événements",
    catDialogue: "Transparence & Dialogue",
    catSport: "Sport & Entraînements",
    catBrand: "Identité & Communication",

    // Labels
    importance: "Priorité MoSCoW",
    mustBadge: "MUST - Indispensable",
    shouldBadge: "SHOULD - Recommandé",
    couldBadge: "COULD - Optionnel",
    voteCount: "votes",
    
    // Promises detail
    promises: {
      equipments: [
        { title: "Équipement complet floqué", desc: "T-shirt d'entraînement floqué, maillot et short de compétition officiel floqués avec nom et numéro pour chaque joueur.", priority: "Must" },
        { title: "Renouvellement du matériel", desc: "Nouveaux ballons de match, chariots/paniers de rangement, et matériel d'aide à la réception et au service.", priority: "Must" }
      ],
      clubLife: [
        { title: "Sorties Beach Volley & Green Volley", desc: "Activités estivales hors gymnase avec filets, ballons et équipement nécessaire pris en charge par l'association.", priority: "Must" },
        { title: "Moments de partage & Restos", desc: "Dîners de cohésion pris en charge, apéros réguliers et gâteaux d'anniversaire offerts à la demande pour resserrer les liens.", priority: "Must" }
      ],
      dialogue: [
        { title: "Site web & fonctionnalités", desc: "Mise en place d'un site web interactif pour le partage des actus, la prise de retours à chaud et la co-construction des choix du club.", priority: "Must" },
        { title: "Transparence financière & décisive", desc: "Accès complet aux décisions du conseil d'administration et aux rapports budgétaires détaillés (achats, cotisations, subventions).", priority: "Must" }
      ],
      sport: [
        { title: "Entraînements par niveau & besoin", desc: "Organisation méthodique des créneaux selon le niveau de jeu, l'ancienneté et les besoins spécifiques des collectifs.", priority: "Should" },
        { title: "Tournois thématiques trimestriels", desc: "Organisation d'au moins un tournoi interne ou externe par trimestre (Saisonnier, Coupe du monde, Fluo, etc.).", priority: "Should" },
        { title: "Matchs amicaux inter-clubs", desc: "Développement du dialogue social entre clubs et programmation de rencontres amicales régulières dans la région.", priority: "Should" },
        { title: "Dashboard & suivi des Scores", desc: "Interface numérique interne pour les inscriptions aux matchs, le suivi des résultats et les statistiques de la saison.", priority: "Could" }
      ],
      brand: [
        { title: "Ateliers d'identité visuelle", desc: "Dialogue ouvert et vote collectif sur le logo, la palette de couleurs et la charte graphique officielle du club.", priority: "Should" },
        { title: "Dynamisation des réseaux sociaux", desc: "Création active de contenus courts (Instagram, TikTok, Shorts) pour valoriser nos équipes et attirer de nouveaux partenaires.", priority: "Should" }
      ]
    },

    // Interactive sections
    feedbackTitle: "La Boîte à Idées",
    feedbackSubtitle: "Votre avis est au cœur du projet. Proposez une idée, votez pour celles des autres, et observez les résultats en temps réel.",
    inputPlaceholder: "Ex: Organiser un tournoi déguisé à Halloween...",
    submitBtn: "Soumettre l'idée",
    recentSuggestions: "Suggestions de la communauté",
    feedbackSuccess: "Suggestion ajoutée avec succès ! Merci pour votre engagement.",
    
    // WhatsApp simulator
    whatsappTitle: "Fil WhatsApp VSVC (Simulateur)",
    whatsappStatus: "En ligne - Canal Officiel",
    whatsappIntro: "Bienvenue sur le canal d'information et de dialogue du VSVC ! Voici nos actualités en direct :",
    whatsappMsg1: "Bonjour l'équipe ! 🏐 Premier grand sondage concernant nos futurs maillots. Quel design préférez-vous ?",
    whatsappPollOpt1: "🔵 Option A : Bleu Indigo & Cyan (Moderne)",
    whatsappPollOpt2: "⚫ Option B : Noir & Or (Premium)",
    whatsappVoteSuccess: "Merci pour votre vote ! Les résultats seront partagés lors de l'assemblée générale.",

    // Budget transparency
    budgetTitle: "Transparence du Budget (Simulation)",
    budgetSubtitle: "Suivez l'utilisation de chaque euro de l'association.",
    budgetItem1: "Achat de matériel d'entraînement (Ballons, paniers)",
    budgetItem2: "Financement des maillots personnalisés",
    budgetItem3: "Budget convivialité & Sorties d'été",
    budgetItem4: "Frais administratifs & Assurances",
    budgetStatusApproved: "Approuvé par le Bureau",
    budgetStatusPending: "En discussion",
    allocated: "alloué",
    remaining: "restant"
  },
  en: {
    heroTag: "VSVC Presidential Campaign 2026",
    heroTitle: "Association activity at the heart of VSVC",
    heroSubtitle: "Candidacy for the presidency of VSVC. An ambitious project focused on user experience, transparency, and community vibe.",
    visionTitle: "My Vision for VSVC",
    visionText: "My candidacy rests on a simple conviction: the club belongs to the players who make it thrive every day. By applying a user-centered (UX) approach, every major decision will be made in direct consultation with you. Together, let's modernize our gear, energize our training, and celebrate our team spirit.",
    
    // Category titles
    catEquip: "Equipment & Gear",
    catClub: "Social Life & Events",
    catDialogue: "Transparence & Feedback",
    catSport: "Sports & Training",
    catBrand: "Identity & Communication",

    // Labels
    importance: "MoSCoW Priority",
    mustBadge: "MUST - Essential",
    shouldBadge: "SHOULD - Recommended",
    couldBadge: "COULD - Optional",
    voteCount: "votes",
    
    // Promises detail
    promises: {
      equipments: [
        { title: "Full custom jersey & shorts", desc: "Training T-shirt, match jersey, and shorts customized with name and number for every member.", priority: "Must" },
        { title: "New training material", desc: "Brand new match volleyballs, storage carts/baskets, and specialized target devices for reception and service training.", priority: "Must" }
      ],
      clubLife: [
        { title: "Beach & Green Volley Outings", desc: "Outdoor summer sessions with high-quality nets and balls completely financed by the club.", priority: "Must" },
        { title: "Social events & dinners", desc: "Club-paid dinners and gatherings, drinks, and birthday cakes provided on demand to build strong team connections.", priority: "Must" }
      ],
      dialogue: [
        { title: "WhatsApp Channel & Newsfeed", desc: "Launching an interactive channel for real-time club news, instant feedback polls, and continuous dialogue.", priority: "Must" },
        { title: "Financial & Board Transparency", desc: "Full access to board decisions, meeting minutes, and detailed budget reports (equipment purchases, fees, grants).", priority: "Must" }
      ],
      sport: [
        { title: "Structured training sessions", desc: "Sessions organized by skill level, category of need, and seniority to support everyone's progress.", priority: "Should" },
        { title: "Quarterly thematic tournaments", desc: "At least one internal or external tournament per quarter (Seasonal, World Cup style, Glow-in-the-dark, etc.).", priority: "Should" },
        { title: "Friendly inter-club matches", desc: "Fostering inter-club dialogue and organizing regular friendly scrimmages within the region.", priority: "Should" },
        { title: "Competition Dashboard", desc: "Internal digital platform for game registration, score tracking, and seasonal player statistics.", priority: "Could" }
      ],
      brand: [
        { title: "Brand identity workshops", desc: "Open workshop and community vote to redesign the club logo, official color palette, and upcoming jerseys.", priority: "Should" },
        { title: "Social media boost", desc: "Active video creation (Instagram, TikTok, Shorts) to showcase our team matches and attract sponsors.", priority: "Should" }
      ]
    },

    // Interactive sections
    feedbackTitle: "Suggestion Box (UX-Centric)",
    feedbackSubtitle: "Your voice drives the project. Submit an idea, vote for others, and watch the community board update in real-time.",
    inputPlaceholder: "E.g. Organize a themed Halloween tournament...",
    submitBtn: "Submit Idea",
    recentSuggestions: "Community Suggestions",
    feedbackSuccess: "Suggestion successfully added! Thank you for getting involved.",
    
    // WhatsApp simulator
    whatsappTitle: "VSVC WhatsApp (Simulator)",
    whatsappStatus: "Online - Official Channel",
    whatsappIntro: "Welcome to the official VSVC news and feedback channel! Today's updates:",
    whatsappMsg1: "Hello team! 🏐 Time for our first big poll regarding upcoming jerseys. Which layout do you prefer?",
    whatsappPollOpt1: "🔵 Option A: Indigo Blue & Cyan (Modern)",
    whatsappPollOpt2: "⚫ Option B: Black & Gold (Premium)",
    whatsappVoteSuccess: "Thank you for voting! Results will be shared during our general assembly.",

    // Budget transparency
    budgetTitle: "Budget Transparency (Simulation)",
    budgetSubtitle: "Follow the allocation of every single euro of the association.",
    budgetItem1: "Training material (Balls, carts)",
    budgetItem2: "Custom player match outfits",
    budgetItem3: "Social budget & summer outings",
    budgetItem4: "Administration & Insurance",
    budgetStatusApproved: "Approved by Board",
    budgetStatusPending: "Under Discussion",
    allocated: "allocated",
    remaining: "remaining"
  }
};

const CampaignVSVC = () => {
  const { language } = useLanguage();
  const cT = campaignTranslations[language] || campaignTranslations.fr;

  // State for user suggestions (interactive demo)
  const [suggestions, setSuggestions] = useState([
    { id: 1, text: language === 'fr' ? 'Achat de gourdes aux couleurs de l\'association' : 'Buy branded water bottles for all players', votes: 14 },
    { id: 2, text: language === 'fr' ? 'Une séance d\'évaluation du niveau en début de saison' : 'An evaluation session at the start of the season', votes: 9 }
  ]);
  const [newSuggestion, setNewSuggestion] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // WhatsApp simulation state
  const [votedOption, setVotedOption] = useState(null);
  const [whatsappPollVotes, setWhatsappPollVotes] = useState({ optA: 18, optB: 12 });

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    if (!newSuggestion.trim()) return;

    const added = {
      id: Date.now(),
      text: newSuggestion,
      votes: 1
    };

    setSuggestions([added, ...suggestions]);
    setNewSuggestion('');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  const handleVoteSuggestion = (id) => {
    setSuggestions(suggestions.map(s => s.id === id ? { ...s, votes: s.votes + 1 } : s));
  };

  const handlePollVote = (opt) => {
    if (votedOption) return;
    setVotedOption(opt);
    if (opt === 'A') {
      setWhatsappPollVotes(prev => ({ ...prev, optA: prev.optA + 1 }));
    } else {
      setWhatsappPollVotes(prev => ({ ...prev, optB: prev.optB + 1 }));
    }
  };

  // Helper to render priority badges
  const renderPriorityBadge = (p) => {
    if (p === 'Must') {
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20">
          <Flame className="w-3.5 h-3.5" />
          MUST
        </span>
      );
    } else if (p === 'Should') {
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
          <Clock className="w-3.5 h-3.5" />
          SHOULD
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
          <CheckCircle2 className="w-3.5 h-3.5" />
          COULD
        </span>
      );
    }
  };

  return (
    <main className="min-h-screen bg-background text-primary selection:bg-indigo-500 selection:text-white pb-16">
      
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-secondary/30 via-background to-background">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Vibe badge */}
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wide uppercase mb-6"
            >
              <Trophy className="w-4 h-4 text-accent" />
              {cT.heroTag}
            </motion.span>

            {/* Main campaign title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-indigo-500 dark:from-white dark:via-accent dark:to-indigo-400"
            >
              {cT.heroTitle}
            </motion.h1>

            {/* Campaign sub */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto mb-10"
            >
              {cT.heroSubtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── VISION STATEMENT ── */}
      <section className="container mx-auto px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto bg-secondary/20 border border-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-8 text-accent/10 pointer-events-none">
            <Users className="w-48 h-48" />
          </div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-accent" />
              {cT.visionTitle}
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              {cT.visionText}
            </p>
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN PROMISES GRID ── */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 gap-16 max-w-6xl mx-auto">
          
           {/* Section 1: Dialogue & Transparence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-secondary/50 pb-16">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-rose-500 uppercase flex items-center gap-1.5">
                <Flame className="w-4 h-4" /> MUST HAVE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{cT.catDialogue}</h2>
              <div className="space-y-6">
                {cT.promises.dialogue.map((p, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-secondary/15 p-5 rounded-2xl border border-secondary/30">
                    <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-secondary bg-secondary/10 p-2 group shadow-xl">
              <img 
                src={democracyImg} 
                alt="Member suggestion box dashboard visualization" 
                className="rounded-2xl w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Section 2: Vie du Club & Convivialité */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-secondary/50 pb-16">
            <div className="lg:col-span-5 order-last lg:order-first rounded-3xl overflow-hidden border border-secondary bg-secondary/10 p-2 group shadow-xl">
              <img 
                src={clubLifeImg} 
                alt="Club outdoor events beach volleyball" 
                className="rounded-2xl w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-rose-500 uppercase flex items-center gap-1.5">
                <Flame className="w-4 h-4" /> MUST HAVE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{cT.catClub}</h2>
              <div className="space-y-6">
                {cT.promises.clubLife.map((p, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-secondary/15 p-5 rounded-2xl border border-secondary/30">
                    <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Équipements de Pointe */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-secondary/50 pb-16">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-rose-500 uppercase flex items-center gap-1.5">
                <Flame className="w-4 h-4" /> MUST HAVE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{cT.catEquip}</h2>
              <div className="space-y-6">
                {cT.promises.equipments.map((p, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-secondary/15 p-5 rounded-2xl border border-secondary/30">
                    <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-secondary bg-secondary/10 p-2 group shadow-xl">
              <img 
                src={equipmentsImg} 
                alt="VSVC Volleyball equipment mockups" 
                className="rounded-2xl w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>

         

          {/* Section 4: Sport & Entraînements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-secondary/50 pb-16">
            <div className="lg:col-span-5 order-last lg:order-first rounded-3xl overflow-hidden border border-secondary bg-secondary/10 p-2 group shadow-xl">
              <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary/50 h-80 flex flex-col justify-between overflow-y-auto">
                <div>
                  <h4 className="font-bold text-sm text-accent uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <Coins className="w-4 h-4" /> {cT.budgetTitle}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-muted">{cT.budgetItem1}</span>
                        <span className="text-emerald-500">950 € (100% {cT.allocated})</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[100%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-muted">{cT.budgetItem2}</span>
                        <span className="text-emerald-500">2 400 € (100% {cT.allocated})</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[100%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-muted">{cT.budgetItem3}</span>
                        <span className="text-amber-500">1 200 € (60% {cT.allocated})</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                        <div className="bg-amber-500 h-full w-[60%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-secondary pt-3 flex justify-between items-center text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    {cT.budgetStatusApproved}
                  </span>
                  <span>Mise à jour: Juin 2026</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-amber-500 uppercase flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> SHOULD / COULD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{cT.catSport}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cT.promises.sport.map((p, idx) => (
                  <div key={idx} className="bg-secondary/15 p-5 rounded-2xl border border-secondary/30 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-base">{p.title}</h4>
                        {renderPriorityBadge(p.priority)}
                      </div>
                      <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5: Identité & Communication */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-amber-500 uppercase flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" /> SHOULD++ (High priority)
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{cT.catBrand}</h2>
              <div className="space-y-6">
                {cT.promises.brand.map((p, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-secondary/15 p-5 rounded-2xl border border-secondary/30">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-secondary bg-secondary/10 p-2 group shadow-xl">
              <img 
                src={brandCommImg} 
                alt="Instagram brand redesign presentation" 
                className="rounded-2xl w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE MOCKUPS: FEEDBACK BOX & WHATSAPP SIMULATOR ── */}
      <section className="bg-secondary/10 border-y border-secondary py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Suggestion Box */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 mb-4">
                  <MessageSquare className="w-3.5 h-3.5" />
                  UX-Centric Club Design
                </span>
                <h3 className="text-3xl font-bold tracking-tight mb-4">{cT.feedbackTitle}</h3>
                <p className="text-muted leading-relaxed mb-6">{cT.feedbackSubtitle}</p>
              </div>

              {/* Form Submission */}
              <form onSubmit={handleSuggestionSubmit} className="mb-8">
                <div className="flex gap-2 bg-background p-2 rounded-2xl border border-secondary focus-within:border-accent transition-colors shadow-inner">
                  <input 
                    type="text" 
                    value={newSuggestion}
                    onChange={(e) => setNewSuggestion(e.target.value)}
                    placeholder={cT.inputPlaceholder}
                    className="bg-transparent flex-1 outline-none px-3 text-sm text-primary"
                  />
                  <button 
                    type="submit"
                    className="p-3 bg-accent text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                
                <AnimatePresence>
                  {showAlert && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-3 text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 p-3 rounded-xl flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{cT.feedbackSuccess}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Interactive suggestion feed */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-2">
                  {cT.recentSuggestions}
                </h4>
                <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {suggestions.map((s) => (
                    <motion.div 
                      key={s.id}
                      layout
                      className="flex items-center justify-between bg-background border border-secondary/70 p-4 rounded-xl shadow-sm hover:border-secondary"
                    >
                      <span className="text-sm text-primary font-medium">{s.text}</span>
                      <button 
                        onClick={() => handleVoteSuggestion(s.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-secondary hover:bg-secondary text-xs text-muted hover:text-accent font-semibold transition-all"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{s.votes} {cT.voteCount}</span>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Simulated WhatsApp UI */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[340px] bg-slate-900 text-slate-100 rounded-[40px] border-8 border-slate-800 shadow-2xl overflow-hidden aspect-[9/18] flex flex-col">
                {/* Smartphone top status bar */}
                <div className="h-6 bg-slate-950 flex justify-between items-center px-6 text-[10px] text-slate-400 font-mono font-bold">
                  <span>21:42</span>
                  <div className="w-16 h-4 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center text-[8px] text-slate-500">
                    VSVC Live
                  </div>
                  <span>100%</span>
                </div>

                {/* WhatsApp Chat Header */}
                <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center font-bold text-accent">
                    VS
                  </div>
                  <div>
                    <h5 className="font-bold text-xs leading-none">{cT.whatsappTitle}</h5>
                    <span className="text-[9px] text-emerald-500 font-medium">{cT.whatsappStatus}</span>
                  </div>
                </div>

                {/* WhatsApp Chat Body */}
                <div className="flex-1 bg-slate-950/40 p-4 space-y-4 overflow-y-auto text-xs flex flex-col justify-end">
                  {/* System Msg */}
                  <div className="bg-slate-900/60 text-slate-400 rounded-lg p-2.5 text-center text-[10px] border border-slate-800/40 max-w-[85%] mx-auto">
                    {cT.whatsappIntro}
                  </div>

                  {/* Candidate message */}
                  <div className="bg-slate-800 text-slate-100 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] shadow-md border border-slate-700/30">
                    <p className="leading-relaxed">{cT.whatsappMsg1}</p>
                  </div>

                  {/* Poll Message */}
                  <div className="bg-slate-800 text-slate-100 p-4 rounded-2xl self-start max-w-[85%] shadow-md border border-slate-700/30 w-full space-y-3">
                    <div className="border-b border-slate-700 pb-2 mb-1">
                      <span className="text-[10px] text-accent font-semibold uppercase tracking-wider">Sondage Express</span>
                    </div>

                    <button 
                      onClick={() => handlePollVote('A')}
                      disabled={!!votedOption}
                      className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                        votedOption === 'A' 
                          ? 'bg-accent/20 border-accent text-accent font-semibold' 
                          : 'bg-slate-900 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-[11px] mb-1">{cT.whatsappPollOpt1}</div>
                      {votedOption && (
                        <div className="text-[9px] text-slate-400 flex justify-between">
                          <span>{whatsappPollVotes.optA} votes</span>
                          <span>{Math.round((whatsappPollVotes.optA / (whatsappPollVotes.optA + whatsappPollVotes.optB)) * 100)}%</span>
                        </div>
                      )}
                    </button>

                    <button 
                      onClick={() => handlePollVote('B')}
                      disabled={!!votedOption}
                      className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                        votedOption === 'B' 
                          ? 'bg-accent/20 border-accent text-accent font-semibold' 
                          : 'bg-slate-900 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-[11px] mb-1">{cT.whatsappPollOpt2}</div>
                      {votedOption && (
                        <div className="text-[9px] text-slate-400 flex justify-between">
                          <span>{whatsappPollVotes.optB} votes</span>
                          <span>{Math.round((whatsappPollVotes.optB / (whatsappPollVotes.optA + whatsappPollVotes.optB)) * 100)}%</span>
                        </div>
                      )}
                    </button>
                    
                    {votedOption && (
                      <p className="text-[9px] text-emerald-400 font-semibold text-center mt-1">
                        {cT.whatsappVoteSuccess}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER-LIKE CALL TO ACTION ── */}
      <section className="container mx-auto px-4 md:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {language === 'fr' ? "Ensemble, portons le VSVC vers de nouveaux sommets !" : "Together, let's lift VSVC to new heights!"}
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            {language === 'fr' 
              ? "Chaque voix compte pour construire une association à l'écoute de tous. Votez pour le renouveau !" 
              : "Every voice counts to build a club that listens to everyone. Vote for renewal!"}
          </p>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
};

export default CampaignVSVC;
