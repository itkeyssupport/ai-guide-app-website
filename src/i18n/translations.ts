export type Lang = "en" | "fr" | "ar";

export interface LangTranslations {
  dir: "ltr" | "rtl";
  htmlLang: string;

  // SEO
  seoTitle: string;
  seoDescription: string;

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroPrimary: string;
  heroSecondary: string;
  trust: string[];

  // Hero cards (4 floating cards)
  heroCards: { title: string; subtitle: string }[];

  // Stats
  statsLabels: string[];

  // Challenge
  challengeEyebrow: string;
  challengeTitle: string;
  challengeIntro: string;
  challengeItems: string[];
  challengeConclusion: string;
  confusionCaption: string;
  solvesText: string;
  challengeTags: string[];

  // Inside the app
  appEyebrow: string;
  appTitle: string;
  appDescription: string;
  appFeatures: { title: string; text: string }[];
  screenLabels: { tools: string; learn: string; home: string; compare: string; progress: string };

  // Solution
  solutionTitleParts: [string, string, string];
  solutionCards: { title: string; text: string }[];

  // Features
  featuresEyebrow: string;
  featuresTitle: string;
  featuresList: { title: string; text: string }[];

  // AI Tools
  toolsEyebrow: string;
  toolsTitle: string;
  toolsSeeAll: string;
  toolsLearnCta: string;
  toolsDisclaimer: string;
  toolDescriptions: {
    short: string;
    description: string;
    bestFor: string;
  }[];

  // Compare
  compareEyebrow: string;
  compareTitle: string;
  compareCta: string;
  compareCategories: string[];
  comparisons: { title: string; note: string }[];

  // Learning paths
  learnEyebrow: string;
  learnTitle: string;
  learnPathLabel: string;
  learningPaths: { title: string; text: string }[];

  // Audience
  audienceEyebrow: string;
  audienceTitle: string;
  audienceLabels: string[];

  // CTA
  ctaBadge: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaFootnote: string;

  // FAQ
  faqEyebrow: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];

  // Nav + header
  navLabels: string[];
  headerDownload: string;

  // Footer
  footerTagline: string;
  footerProduct: string;
  footerProductLinks: string[];
  footerCompany: string;
  footerCompanyLinks: string[];
  footerResources: string;
  footerResourcesLinks: string[];
  footerCopyright: string;
  footerDisclaimer: string;

  // Page heroes (inner pages)
  pageHeroFeatures: { eyebrow: string; title: string; description: string };
  pageHeroTools: { eyebrow: string; title: string; description: string };
  pageHeroCompare: { eyebrow: string; title: string; description: string };
  pageHeroLearn: { eyebrow: string; title: string; description: string };
  pageHeroContact: { eyebrow: string; title: string; description: string };
  pageHeroDownload: { eyebrow: string; title: string; description: string };

  // Shared UI labels
  bestForLabel: string;
  compareVsLabel: string;
  compareInAppCta: string;
  learnPathPrefix: string;

  // CTA section (inner pages)
  ctaSectionBadge: string;
  ctaSectionTitle: string;
  ctaSectionDescription: string;
  ctaSectionAndroidNote: string;

  // Contact page
  contactEmailTitle: string;
  contactEmailDesc: string;
  contactFeedbackTitle: string;
  contactFeedbackDesc: string;
  contactResponseTitle: string;
  contactResponseDesc: string;
  contactFormTitle: string;
  contactFormDesc: string;
  contactFieldName: string;
  contactFieldEmail: string;
  contactFieldSubject: string;
  contactFieldMessage: string;
  contactNamePlaceholder: string;
  contactEmailPlaceholder: string;
  contactSubjectPlaceholder: string;
  contactMessagePlaceholder: string;
  contactSubmitButton: string;
  contactConsentText: string;

  // Download page
  downloadInstallTitle: string;
  downloadInstallDesc: string;
  downloadFeatureItems: string[];
  downloadScanTitle: string;
  downloadScanDesc: string;
}

const en: LangTranslations = {
  dir: "ltr",
  htmlLang: "en",

  seoTitle: "AI Guide - Learn, Compare and Master AI Tools",
  seoDescription:
    "Download AI Guide to learn, compare, and master popular AI tools like ChatGPT, Claude, Gemini, Perplexity AI, DeepSeek, Meta AI, Notion AI, and more with step-by-step guides.",

  heroBadge: "The AI learning app for everyone",
  heroTitle: "Learn AI Tools",
  heroHighlight: "Faster",
  heroDescription:
    "AI Guide helps you discover, compare, and master tools like ChatGPT, Claude, Gemini, Perplexity AI, DeepSeek, Meta AI, Notion AI, and more through simple step-by-step guides.",
  heroPrimary: "Download AI Guide",
  heroSecondary: "Explore Features",
  trust: ["Beginner friendly", "Step-by-step guides", "AI tool comparisons", "Multilingual learning"],

  heroCards: [
    { title: "Step-by-step lessons", subtitle: "8 learning paths" },
    { title: "AI tool comparisons", subtitle: "10+ categories" },
    { title: "Progress tracking", subtitle: "Pick up where you left off" },
    { title: "Latest AI news", subtitle: "Always up to date" },
  ],

  statsLabels: ["AI tools covered", "Learning paths", "Comparison categories", "Languages supported"],

  challengeEyebrow: "The challenge",
  challengeTitle: "AI tools are powerful, but choosing and learning them can be confusing.",
  challengeIntro: "Most people don't know:",
  challengeItems: [
    "Which AI tool to use for their needs",
    "How to write better prompts",
    "How ChatGPT, Claude, Gemini, DeepSeek, Perplexity, Meta AI, Notion AI, and Manus AI differ",
    "How to learn AI in a structured way",
    "How to stay updated with AI news",
  ],
  challengeConclusion: "AI Guide brings everything together in one beginner-friendly app.",
  confusionCaption: "So many tools, so little guidance...",
  solvesText: "AI Guide solves this",
  challengeTags: ["Learn", "Compare", "Discover"],

  appEyebrow: "Inside the app",
  appTitle: "A clean, intuitive AI learning experience.",
  appDescription:
    "Designed for everyday users. Navigate tools, comparisons, learning paths, and news, all from one app.",
  appFeatures: [
    { title: "Fast and lightweight", text: "Optimized for smooth navigation on any device." },
    { title: "Structured content", text: "Every topic organized into clear, digestible lessons." },
    { title: "3 languages", text: "Available in French, English, and Arabic." },
  ],
  screenLabels: { tools: "AI Tools", learn: "Learn", home: "Home", compare: "Compare", progress: "Progress" },

  solutionTitleParts: ["One app to", "learn, compare, and master", "AI tools."],
  solutionCards: [
    { title: "Learn", text: "Structured learning paths and beginner guides for every AI tool." },
    { title: "Compare", text: "Understand differences between AI tools side-by-side." },
    { title: "Discover", text: "Explore popular AI tools, use cases, ratings, tips, and news." },
  ],

  featuresEyebrow: "Features",
  featuresTitle: "Everything you need to learn AI, in one app.",
  featuresList: [
    { title: "AI Tools Directory", text: "Explore popular AI tools with clear explanations, use cases, strengths, limitations, ratings, and practical tips." },
    { title: "Step-by-Step Learning Paths", text: "Follow organized lessons that teach you what to learn first, what to practice, and how to improve." },
    { title: "AI Tool Comparisons", text: "Compare tools like ChatGPT vs Claude, Gemini vs Perplexity, and DeepSeek vs ChatGPT for writing, research, coding, and more." },
    { title: "Prompt Examples and Tips", text: "Learn how to use AI tools with real examples, prompt ideas, and simple explanations." },
    { title: "Quizzes and Knowledge Checks", text: "Test what you learned and improve your understanding of AI tools and responsible AI usage." },
    { title: "Progress Tracking", text: "Continue from where you left off and keep your learning journey organized." },
    { title: "Latest AI News", text: "Stay updated with important AI model releases, product updates, and industry trends." },
    { title: "Bookmarks", text: "Save useful tools, lessons, guides, and comparisons for later." },
    { title: "Multilingual Support", text: "Learn AI in French, English, and Arabic." },
  ],

  toolsEyebrow: "AI Tools",
  toolsTitle: "Explore the AI tools people are using every day.",
  toolsSeeAll: "See all tools",
  toolsLearnCta: "Learn in the app",
  toolsDisclaimer: "AI Guide is an independent educational app. Tool names are used for informational and educational purposes only.",
  toolDescriptions: [
    { short: "Conversational AI", description: "Great for writing, brainstorming, learning, coding support, and everyday productivity.", bestFor: "Writing, brainstorming, coding help" },
    { short: "Anthropic assistant", description: "Useful for long documents, writing, analysis, and thoughtful assistant-style responses.", bestFor: "Long-form writing & analysis" },
    { short: "Google AI", description: "Helpful for Google ecosystem users, research, productivity, and multimodal AI tasks.", bestFor: "Google workspace & multimodal" },
    { short: "AI search", description: "Designed for AI-powered search, quick research, and source-based answers.", bestFor: "Research with citations" },
    { short: "Reasoning & code", description: "Known for reasoning, coding, and technical AI tasks.", bestFor: "Coding & reasoning" },
    { short: "Workspace AI", description: "Useful for notes, documents, productivity, summaries, and workspace automation.", bestFor: "Notes & docs productivity" },
    { short: "Meta assistant", description: "Helpful for social, assistant-style tasks, and AI features across Meta products.", bestFor: "Social & assistant tasks" },
    { short: "Agent workflows", description: "Useful for exploring agent-style AI workflows and productivity tasks.", bestFor: "Agent workflows" },
  ],

  compareEyebrow: "Compare",
  compareTitle: "Choose the right AI tool for the right task.",
  compareCta: "Compare AI tools in the app",
  compareCategories: [
    "Writing quality", "Research ability", "Coding support", "Ease of use",
    "Speed", "Creativity", "Reasoning", "Productivity", "Free plan value", "Beginner friendliness",
  ],
  comparisons: [
    { title: "ChatGPT vs Claude", note: "Versatile generalist vs long-form thoughtful writer." },
    { title: "Gemini vs Perplexity AI", note: "Multimodal Google AI vs source-based research search." },
    { title: "DeepSeek vs ChatGPT", note: "Reasoning & code specialist vs all-rounder assistant." },
    { title: "Notion AI vs ChatGPT", note: "Workspace-native AI vs standalone assistant." },
  ],

  learnEyebrow: "Learn",
  learnTitle: "Structured AI learning for beginners and everyday users.",
  learnPathLabel: "Path",
  learningPaths: [
    { title: "ChatGPT Beginner Guide", text: "Start from zero and learn the essentials of ChatGPT." },
    { title: "Prompt Engineering Basics", text: "Write better prompts that get better answers." },
    { title: "AI Productivity", text: "Use AI to save time on everyday tasks." },
    { title: "AI for Research", text: "Find, summarize, and verify information faster." },
    { title: "AI for Students", text: "Learn, study, and revise with AI." },
    { title: "AI for Work", text: "Apply AI to real workplace tasks." },
    { title: "AI Tool Comparison Basics", text: "Pick the right tool for each task." },
    { title: "Safe and Responsible AI Usage", text: "Use AI ethically, safely, and effectively." },
  ],

  audienceEyebrow: "Who is it for",
  audienceTitle: "Built for anyone who wants to understand AI.",
  audienceLabels: ["Students", "Creators", "Professionals", "Business owners", "Developers", "Researchers", "Beginners", "Productivity lovers"],

  ctaBadge: "Free to download",
  ctaTitle: "Start learning AI today.",
  ctaDescription: "Download AI Guide and discover simple guides, smart comparisons, and practical tips for the most popular AI tools.",
  ctaFootnote: "Available first on Android. iOS support coming soon.",

  faqEyebrow: "FAQ",
  faqTitle: "Frequently asked questions",
  faqs: [
    { q: "What is AI Guide?", a: "AI Guide is a mobile app that helps users learn, compare, and understand popular AI tools through guides, lessons, comparisons, quizzes, and AI news." },
    { q: "Is AI Guide beginner friendly?", a: "Yes. AI Guide is designed for beginners and everyday users who want simple explanations and step-by-step learning." },
    { q: "Which AI tools does AI Guide cover?", a: "AI Guide covers tools such as ChatGPT, Claude, Gemini, Perplexity AI, Meta AI, DeepSeek, Notion AI, Manus AI, and more." },
    { q: "Can I compare AI tools inside the app?", a: "Yes. The app includes AI tool comparisons across categories such as writing, research, coding, speed, creativity, reasoning, productivity, and beginner friendliness." },
    { q: "Does AI Guide teach prompt engineering?", a: "Yes. AI Guide includes prompt examples, practical tips, and learning paths that help users write better prompts." },
    { q: "Is AI Guide affiliated with ChatGPT, Claude, Gemini, or other AI tools?", a: "No. AI Guide is an independent educational app and is not affiliated with the AI tools mentioned." },
    { q: "Is AI Guide free?", a: "The app may include free content and may also include ads or future premium learning resources." },
  ],

  navLabels: ["Home", "Features", "AI Tools", "Compare", "Learn", "Contact"],
  headerDownload: "Download App",

  footerTagline: "Learn, compare, and master popular AI tools with simple step-by-step guides, designed for beginners and everyday users.",
  footerProduct: "Product",
  footerProductLinks: ["Features", "AI Tools", "Compare", "Learn", "Download"],
  footerCompany: "Company",
  footerCompanyLinks: ["Contact", "Privacy Policy", "Terms of Use", "Delete Account"],
  footerResources: "Resources",
  footerResourcesLinks: ["AI Guides", "AI Comparisons", "AI Tools", "AI News"],
  footerCopyright: "All rights reserved.",
  footerDisclaimer: "AI Guide is an independent educational app and is not affiliated with the AI tools mentioned.",

  pageHeroFeatures: { eyebrow: "Features", title: "Everything you need to learn AI.", description: "AI Guide brings structured learning, AI tool pages, comparisons, quizzes, news, and more into one beginner-friendly mobile app." },
  pageHeroTools: { eyebrow: "AI Tools Directory", title: "Explore the AI tools people use every day.", description: "Clear explanations, use cases, and practical tips for the most popular AI tools, all inside AI Guide." },
  pageHeroCompare: { eyebrow: "Compare", title: "Choose the right AI tool for the right task.", description: "Compare AI tools across the categories that matter most to your workflow." },
  pageHeroLearn: { eyebrow: "Learn", title: "Structured AI learning for beginners and everyday users.", description: "From your first ChatGPT prompt to comparing tools like a pro. AI Guide walks you through it step by step." },
  pageHeroContact: { eyebrow: "Contact", title: "Get in touch", description: "Have a question, suggestion, or partnership request? We'd love to hear from you." },
  pageHeroDownload: { eyebrow: "Download", title: "Get AI Guide on your phone.", description: "Available first on Android. iOS support can be added when ready." },

  bestForLabel: "Best for:",
  compareVsLabel: "vs",
  compareInAppCta: "See full comparison in the app",
  learnPathPrefix: "Path",

  ctaSectionBadge: "Free to download",
  ctaSectionTitle: "Start learning AI today.",
  ctaSectionDescription: "Download AI Guide and discover simple guides, smart comparisons, and practical tips for the most popular AI tools.",
  ctaSectionAndroidNote: "Available first on Android. iOS support coming soon.",

  contactEmailTitle: "Email us",
  contactEmailDesc: "We respond to every message as quickly as possible.",
  contactFeedbackTitle: "Feedback & suggestions",
  contactFeedbackDesc: "Help us improve AI Guide with your ideas and feature requests.",
  contactResponseTitle: "Response time",
  contactResponseDesc: "We aim to respond within 1-2 business days.",
  contactFormTitle: "Send a message",
  contactFormDesc: "Fill in the form and we'll get back to you shortly.",
  contactFieldName: "Your name",
  contactFieldEmail: "Email address",
  contactFieldSubject: "Subject",
  contactFieldMessage: "Message",
  contactNamePlaceholder: "John Doe",
  contactEmailPlaceholder: "john@example.com",
  contactSubjectPlaceholder: "How can we help?",
  contactMessagePlaceholder: "Tell us more...",
  contactSubmitButton: "Send message",
  contactConsentText: "By sending this form you agree that your message is stored and forwarded to our support team at",

  downloadInstallTitle: "Install AI Guide",
  downloadInstallDesc: "One tap to start your AI learning journey. The app is built for beginners. No technical background required.",
  downloadFeatureItems: ["Step-by-step guides for popular AI tools", "AI tool comparisons", "Quizzes and progress tracking", "Latest AI news", "Multilingual support"],
  downloadScanTitle: "Scan to download",
  downloadScanDesc: "Open your phone camera and point it at a code to open AI Guide on Google Play or the App Store.",
};

const fr: LangTranslations = {
  dir: "ltr",
  htmlLang: "fr",

  seoTitle: "AI Guide - Apprenez, Comparez et Maîtrisez les Outils IA",
  seoDescription:
    "Téléchargez AI Guide pour apprendre, comparer et maîtriser les outils IA populaires comme ChatGPT, Claude, Gemini, Perplexity AI, DeepSeek, Meta AI, Notion AI et plus encore.",

  heroBadge: "L'application IA pour tout le monde",
  heroTitle: "Maîtrisez les outils IA",
  heroHighlight: "plus vite",
  heroDescription:
    "AI Guide vous aide à découvrir, comparer et maîtriser des outils comme ChatGPT, Claude, Gemini, Perplexity AI, DeepSeek, Meta AI, Notion AI et bien d'autres via des guides simples étape par étape.",
  heroPrimary: "Télécharger AI Guide",
  heroSecondary: "Voir les fonctionnalités",
  trust: ["Idéal pour les débutants", "Guides étape par étape", "Comparaisons d'outils IA", "Apprentissage multilingue"],

  heroCards: [
    { title: "Leçons étape par étape", subtitle: "8 parcours d'apprentissage" },
    { title: "Comparaisons d'outils IA", subtitle: "10+ catégories" },
    { title: "Suivi des progrès", subtitle: "Reprenez où vous étiez" },
    { title: "Actualités IA récentes", subtitle: "Toujours à jour" },
  ],

  statsLabels: ["Outils IA couverts", "Parcours d'apprentissage", "Catégories de comparaison", "Langues disponibles"],

  challengeEyebrow: "Le défi",
  challengeTitle: "Les outils IA sont puissants, mais les choisir et les apprendre peut être déstabilisant.",
  challengeIntro: "La plupart des gens ne savent pas :",
  challengeItems: [
    "Quel outil IA utiliser selon leurs besoins",
    "Comment écrire de meilleurs prompts",
    "En quoi diffèrent ChatGPT, Claude, Gemini, DeepSeek, Perplexity, Meta AI, Notion AI et Manus AI",
    "Comment apprendre l'IA de manière structurée",
    "Comment rester informé des actualités IA",
  ],
  challengeConclusion: "AI Guide rassemble tout dans une application conviviale pour les débutants.",
  confusionCaption: "Autant d'outils, si peu de guidance...",
  solvesText: "AI Guide résout ce problème",
  challengeTags: ["Apprendre", "Comparer", "Découvrir"],

  appEyebrow: "Dans l'application",
  appTitle: "Une expérience d'apprentissage IA propre et intuitive.",
  appDescription:
    "Conçu pour les utilisateurs du quotidien. Naviguez parmi les outils, comparaisons, parcours et actualités, le tout depuis une seule application.",
  appFeatures: [
    { title: "Rapide et léger", text: "Optimisé pour une navigation fluide sur tous les appareils." },
    { title: "Contenu structuré", text: "Chaque sujet organisé en leçons claires et digestibles." },
    { title: "3 langues", text: "Disponible en français, anglais et arabe." },
  ],
  screenLabels: { tools: "Outils IA", learn: "Apprendre", home: "Accueil", compare: "Comparer", progress: "Progrès" },

  solutionTitleParts: ["Une application pour", "apprendre, comparer et maîtriser", "les outils IA."],
  solutionCards: [
    { title: "Apprendre", text: "Des parcours d'apprentissage structurés et des guides pour débutants pour chaque outil IA." },
    { title: "Comparer", text: "Comprenez les différences entre les outils IA côte à côte." },
    { title: "Découvrir", text: "Explorez les outils populaires, leurs cas d'utilisation, évaluations, conseils et actualités." },
  ],

  featuresEyebrow: "Fonctionnalités",
  featuresTitle: "Tout ce qu'il faut pour apprendre l'IA, en une seule application.",
  featuresList: [
    { title: "Répertoire d'outils IA", text: "Explorez les outils IA populaires avec des explications claires, cas d'utilisation, points forts, limites, évaluations et conseils pratiques." },
    { title: "Parcours d'apprentissage étape par étape", text: "Suivez des leçons organisées qui vous enseignent quoi apprendre en premier, quoi pratiquer et comment progresser." },
    { title: "Comparaisons d'outils IA", text: "Comparez des outils comme ChatGPT vs Claude, Gemini vs Perplexity, et DeepSeek vs ChatGPT pour l'écriture, la recherche, le codage et bien plus." },
    { title: "Exemples de prompts et conseils pratiques", text: "Apprenez à utiliser les outils IA avec des exemples réels, des idées de prompts et des explications simples." },
    { title: "Quiz et vérifications des connaissances", text: "Testez vos acquis et améliorez votre compréhension des outils IA et de l'utilisation responsable de l'IA." },
    { title: "Suivi des progrès", text: "Reprenez là où vous vous êtes arrêté et gardez votre parcours d'apprentissage organisé." },
    { title: "Actualités IA récentes", text: "Restez informé des nouvelles sorties de modèles IA, mises à jour produits et tendances du secteur." },
    { title: "Favoris", text: "Sauvegardez les outils, leçons, guides et comparaisons utiles pour plus tard." },
    { title: "Support multilingue", text: "Apprenez l'IA en plusieurs langues, dont le français, l'anglais et l'arabe." },
  ],

  toolsEyebrow: "Outils IA",
  toolsTitle: "Explorez les outils IA que les gens utilisent au quotidien.",
  toolsSeeAll: "Voir tous les outils",
  toolsLearnCta: "Apprendre dans l'application",
  toolsDisclaimer: "AI Guide est une application éducative indépendante. Les noms des outils sont utilisés à des fins d'information et d'éducation uniquement.",
  toolDescriptions: [
    { short: "IA conversationnelle", description: "Idéal pour l'écriture, le brainstorming, l'apprentissage, l'aide au codage et la productivité au quotidien.", bestFor: "Écriture, brainstorming, aide au code" },
    { short: "Assistant Anthropic", description: "Utile pour les longs documents, l'écriture, l'analyse et les réponses réfléchies.", bestFor: "Écriture longue et analyse" },
    { short: "IA Google", description: "Aide pour les utilisateurs de l'écosystème Google, la recherche, la productivité et les tâches IA multimodales.", bestFor: "Google workspace et multimodal" },
    { short: "Recherche IA", description: "Conçu pour la recherche alimentée par l'IA et les réponses avec sources.", bestFor: "Recherche avec citations" },
    { short: "Raisonnement et code", description: "Connu pour le raisonnement, le codage et les tâches IA techniques.", bestFor: "Codage et raisonnement" },
    { short: "IA workspace", description: "Utile pour les notes, documents, productivité, résumés et automatisation du workspace.", bestFor: "Notes et productivité documentaire" },
    { short: "Assistant Meta", description: "Aide pour les tâches sociales et les fonctionnalités IA sur les produits Meta.", bestFor: "Tâches sociales et assistant" },
    { short: "Flux agents IA", description: "Utile pour explorer les flux de travail IA de type agent et les tâches de productivité.", bestFor: "Flux de travail agents" },
  ],

  compareEyebrow: "Comparer",
  compareTitle: "Choisissez le bon outil IA pour la bonne tâche.",
  compareCta: "Comparer les outils IA dans l'application",
  compareCategories: [
    "Qualité d'écriture", "Capacité de recherche", "Aide au codage", "Facilité d'utilisation",
    "Vitesse", "Créativité", "Raisonnement", "Productivité", "Valeur de l'offre gratuite", "Accessibilité débutants",
  ],
  comparisons: [
    { title: "ChatGPT vs Claude", note: "Généraliste polyvalent vs rédacteur réfléchi pour longs textes." },
    { title: "Gemini vs Perplexity AI", note: "IA Google multimodale vs recherche avec sources." },
    { title: "DeepSeek vs ChatGPT", note: "Spécialiste raisonnement et code vs assistant polyvalent." },
    { title: "Notion AI vs ChatGPT", note: "IA intégrée workspace vs assistant autonome." },
  ],

  learnEyebrow: "Apprendre",
  learnTitle: "Apprentissage structuré de l'IA pour débutants et utilisateurs du quotidien.",
  learnPathLabel: "Parcours",
  learningPaths: [
    { title: "Guide débutant ChatGPT", text: "Partez de zéro et apprenez les bases de ChatGPT." },
    { title: "Bases du Prompt Engineering", text: "Rédigez de meilleurs prompts pour obtenir de meilleures réponses." },
    { title: "IA et productivité", text: "Utilisez l'IA pour gagner du temps sur les tâches quotidiennes." },
    { title: "IA pour la recherche", text: "Trouvez, résumez et vérifiez l'information plus rapidement." },
    { title: "IA pour les étudiants", text: "Apprenez, étudiez et révisez avec l'IA." },
    { title: "IA au travail", text: "Appliquez l'IA à des tâches professionnelles concrètes." },
    { title: "Comparaison des outils IA", text: "Choisissez le bon outil pour chaque tâche." },
    { title: "Utilisation sûre et responsable de l'IA", text: "Utilisez l'IA de manière éthique, sûre et efficace." },
  ],

  audienceEyebrow: "Pour qui",
  audienceTitle: "Conçu pour tous ceux qui veulent comprendre l'IA.",
  audienceLabels: ["Étudiants", "Créateurs", "Professionnels", "Chefs d'entreprise", "Développeurs", "Chercheurs", "Débutants", "Amateurs de productivité"],

  ctaBadge: "Gratuit à télécharger",
  ctaTitle: "Commencez à apprendre l'IA aujourd'hui.",
  ctaDescription: "Téléchargez AI Guide et découvrez des guides simples, des comparaisons intelligentes et des conseils pratiques pour les outils IA les plus populaires.",
  ctaFootnote: "Disponible d'abord sur Android. Support iOS bientôt disponible.",

  faqEyebrow: "FAQ",
  faqTitle: "Questions fréquemment posées",
  faqs: [
    { q: "Qu'est-ce qu'AI Guide ?", a: "AI Guide est une application mobile qui aide les utilisateurs à apprendre, comparer et comprendre les outils IA populaires via des guides, leçons, comparaisons, quiz et actualités IA." },
    { q: "AI Guide est-il adapté aux débutants ?", a: "Oui. AI Guide est conçu pour les débutants et les utilisateurs du quotidien qui souhaitent des explications simples et un apprentissage étape par étape." },
    { q: "Quels outils IA AI Guide couvre-t-il ?", a: "AI Guide couvre des outils comme ChatGPT, Claude, Gemini, Perplexity AI, Meta AI, DeepSeek, Notion AI, Manus AI et bien d'autres." },
    { q: "Peut-on comparer les outils IA dans l'application ?", a: "Oui. L'application inclut des comparaisons d'outils IA sur des catégories comme l'écriture, la recherche, le codage, la vitesse, la créativité, le raisonnement, la productivité et l'accessibilité pour débutants." },
    { q: "AI Guide enseigne-t-il le prompt engineering ?", a: "Oui. AI Guide inclut des exemples de prompts, des conseils pratiques et des parcours d'apprentissage pour aider les utilisateurs à écrire de meilleurs prompts." },
    { q: "AI Guide est-il affilié à ChatGPT, Claude, Gemini ou d'autres outils IA ?", a: "Non. AI Guide est une application éducative indépendante et n'est pas affiliée aux outils IA mentionnés." },
    { q: "AI Guide est-il gratuit ?", a: "L'application peut inclure du contenu gratuit ainsi que des publicités ou de futures ressources d'apprentissage premium." },
  ],

  navLabels: ["Accueil", "Fonctionnalités", "Outils IA", "Comparer", "Apprendre", "Contact"],
  headerDownload: "Télécharger",

  footerTagline: "Apprenez, comparez et maîtrisez les outils IA populaires avec des guides simples étape par étape, conçus pour les débutants et les utilisateurs du quotidien.",
  footerProduct: "Produit",
  footerProductLinks: ["Fonctionnalités", "Outils IA", "Comparer", "Apprendre", "Télécharger"],
  footerCompany: "Société",
  footerCompanyLinks: ["Contact", "Politique de confidentialité", "Conditions d'utilisation", "Supprimer mon compte"],
  footerResources: "Ressources",
  footerResourcesLinks: ["Guides IA", "Comparaisons IA", "Outils IA", "Actualités IA"],
  footerCopyright: "Tous droits réservés.",
  footerDisclaimer: "AI Guide est une application éducative indépendante et n'est pas affiliée aux outils IA mentionnés.",

  pageHeroFeatures: { eyebrow: "Fonctionnalités", title: "Tout ce qu'il vous faut pour apprendre l'IA.", description: "AI Guide réunit apprentissage structuré, fiches outils, comparatifs, quiz, actualités et bien plus dans une application mobile accessible à tous." },
  pageHeroTools: { eyebrow: "Répertoire d'outils IA", title: "Explorez les outils IA utilisés au quotidien.", description: "Explications claires, cas d'usage et conseils pratiques pour les outils IA les plus populaires, directement dans AI Guide." },
  pageHeroCompare: { eyebrow: "Comparer", title: "Choisissez le bon outil IA pour la bonne tâche.", description: "Comparez les outils IA selon les critères les plus importants pour votre utilisation." },
  pageHeroLearn: { eyebrow: "Apprendre", title: "Un apprentissage structuré de l'IA pour les débutants.", description: "De votre premier prompt ChatGPT à la comparaison des outils comme un expert. AI Guide vous guide étape par étape." },
  pageHeroContact: { eyebrow: "Contact", title: "Contactez-nous", description: "Une question, une suggestion ou une demande de partenariat ? Nous serions ravis de vous lire." },
  pageHeroDownload: { eyebrow: "Télécharger", title: "Installez AI Guide sur votre téléphone.", description: "Disponible d'abord sur Android. Le support iOS pourra être ajouté ultérieurement." },

  bestForLabel: "Idéal pour :",
  compareVsLabel: "vs",
  compareInAppCta: "Voir la comparaison complète dans l'app",
  learnPathPrefix: "Parcours",

  ctaSectionBadge: "Gratuit",
  ctaSectionTitle: "Commencez à apprendre l'IA dès aujourd'hui.",
  ctaSectionDescription: "Téléchargez AI Guide et découvrez des guides simples, des comparatifs intelligents et des conseils pratiques pour les outils IA les plus populaires.",
  ctaSectionAndroidNote: "Disponible d'abord sur Android. Support iOS à venir.",

  contactEmailTitle: "Nous écrire",
  contactEmailDesc: "Nous répondons à chaque message le plus rapidement possible.",
  contactFeedbackTitle: "Retours et suggestions",
  contactFeedbackDesc: "Aidez-nous à améliorer AI Guide avec vos idées et demandes de fonctionnalités.",
  contactResponseTitle: "Délai de réponse",
  contactResponseDesc: "Nous visons à répondre sous 1 à 2 jours ouvrables.",
  contactFormTitle: "Envoyer un message",
  contactFormDesc: "Remplissez le formulaire et nous vous répondrons rapidement.",
  contactFieldName: "Votre nom",
  contactFieldEmail: "Adresse e-mail",
  contactFieldSubject: "Sujet",
  contactFieldMessage: "Message",
  contactNamePlaceholder: "Jean Dupont",
  contactEmailPlaceholder: "jean@exemple.com",
  contactSubjectPlaceholder: "Comment pouvons-nous vous aider ?",
  contactMessagePlaceholder: "Dites-nous en plus...",
  contactSubmitButton: "Envoyer le message",
  contactConsentText: "En envoyant ce formulaire, vous acceptez que votre message soit enregistré et transmis à notre équipe d'assistance à",

  downloadInstallTitle: "Installer AI Guide",
  downloadInstallDesc: "En un seul appui pour démarrer votre parcours d'apprentissage de l'IA. L'application est conçue pour les débutants. Aucune connaissance technique requise.",
  downloadFeatureItems: ["Guides étape par étape pour les outils IA populaires", "Comparatifs d'outils IA", "Quiz et suivi de progression", "Dernières actualités IA", "Support multilingue"],
  downloadScanTitle: "Scannez pour télécharger",
  downloadScanDesc: "Ouvrez l'appareil photo de votre téléphone et pointez-le vers un code pour ouvrir AI Guide sur Google Play ou l'App Store.",
};

const ar: LangTranslations = {
  dir: "rtl",
  htmlLang: "ar",

  seoTitle: "AI Guide - تعلم، قارن وأتقن أدوات الذكاء الاصطناعي",
  seoDescription:
    "حمّل AI Guide لتعلم ومقارنة وإتقان أدوات الذكاء الاصطناعي الشائعة مثل ChatGPT وClaude وGemini وPerplexity AI وDeepSeek وMeta AI وNotion AI والمزيد.",

  heroBadge: "تطبيق تعلم الذكاء الاصطناعي للجميع",
  heroTitle: "أتقن أدوات الذكاء الاصطناعي",
  heroHighlight: "بشكل أسرع",
  heroDescription:
    "يساعدك AI Guide على اكتشاف ومقارنة وإتقان أدوات مثل ChatGPT وClaude وGemini وPerplexity AI وDeepSeek وMeta AI وNotion AI والمزيد من خلال أدلة بسيطة خطوة بخطوة.",
  heroPrimary: "تحميل AI Guide",
  heroSecondary: "استكشاف الميزات",
  trust: ["مناسب للمبتدئين", "أدلة خطوة بخطوة", "مقارنات أدوات الذكاء الاصطناعي", "تعلم متعدد اللغات"],

  heroCards: [
    { title: "دروس خطوة بخطوة", subtitle: "8 مسارات تعليمية" },
    { title: "مقارنات أدوات الذكاء الاصطناعي", subtitle: "أكثر من 10 فئات" },
    { title: "تتبع التقدم", subtitle: "تابع من حيث توقفت" },
    { title: "آخر أخبار الذكاء الاصطناعي", subtitle: "محدّث دائماً" },
  ],

  statsLabels: ["أدوات ذكاء اصطناعي", "مسارات تعليمية", "فئات المقارنة", "لغات مدعومة"],

  challengeEyebrow: "التحدي",
  challengeTitle: "أدوات الذكاء الاصطناعي قوية، لكن اختيارها وتعلمها قد يكون محيراً.",
  challengeIntro: "معظم الناس لا يعرفون:",
  challengeItems: [
    "أي أداة ذكاء اصطناعي تناسب احتياجاتهم",
    "كيفية كتابة مطالبات أفضل",
    "الفرق بين ChatGPT وClaude وGemini وDeepSeek وPerplexity وMeta AI وNotion AI وManus AI",
    "كيفية تعلم الذكاء الاصطناعي بطريقة منظمة",
    "كيفية متابعة آخر أخبار الذكاء الاصطناعي",
  ],
  challengeConclusion: "يجمع AI Guide كل شيء في تطبيق واحد سهل الاستخدام للمبتدئين.",
  confusionCaption: "الكثير من الأدوات، القليل من التوجيه...",
  solvesText: "AI Guide يحل هذه المشكلة",
  challengeTags: ["تعلم", "قارن", "اكتشف"],

  appEyebrow: "داخل التطبيق",
  appTitle: "تجربة تعلم ذكاء اصطناعي نظيفة وبديهية.",
  appDescription:
    "مصمم للمستخدمين اليوميين. تصفح الأدوات والمقارنات ومسارات التعلم والأخبار، كل ذلك من تطبيق واحد.",
  appFeatures: [
    { title: "سريع وخفيف", text: "محسّن للتصفح السلس على أي جهاز." },
    { title: "محتوى منظم", text: "كل موضوع منظم في دروس واضحة وسهلة الاستيعاب." },
    { title: "3 لغات", text: "متوفر بالفرنسية والإنجليزية والعربية." },
  ],
  screenLabels: { tools: "أدوات الذكاء الاصطناعي", learn: "تعلم", home: "الرئيسية", compare: "مقارنة", progress: "التقدم" },

  solutionTitleParts: ["تطبيق واحد", "لتعلم ومقارنة وإتقان", "أدوات الذكاء الاصطناعي."],
  solutionCards: [
    { title: "تعلّم", text: "مسارات تعليمية منظمة وأدلة للمبتدئين لكل أداة ذكاء اصطناعي." },
    { title: "قارن", text: "افهم الفروق بين أدوات الذكاء الاصطناعي جنباً إلى جنب." },
    { title: "اكتشف", text: "استكشف الأدوات الشائعة وحالات الاستخدام والتقييمات والنصائح والأخبار." },
  ],

  featuresEyebrow: "الميزات",
  featuresTitle: "كل ما تحتاجه لتعلم الذكاء الاصطناعي في تطبيق واحد.",
  featuresList: [
    { title: "دليل أدوات الذكاء الاصطناعي", text: "استكشف الأدوات الشائعة مع شروحات واضحة وحالات استخدام ونقاط قوة وحدود وتقييمات ونصائح عملية." },
    { title: "مسارات تعليمية خطوة بخطوة", text: "اتبع دروساً منظمة تعلمك ما يجب تعلمه أولاً وما يجب تطبيقه وكيفية التحسن." },
    { title: "مقارنات أدوات الذكاء الاصطناعي", text: "قارن أدوات مثل ChatGPT مقابل Claude وGemini مقابل Perplexity وDeepSeek مقابل ChatGPT للكتابة والبحث والبرمجة والمزيد." },
    { title: "أمثلة المطالبات والنصائح العملية", text: "تعلم كيفية استخدام أدوات الذكاء الاصطناعي مع أمثلة حقيقية وأفكار للمطالبات وشروحات بسيطة." },
    { title: "الاختبارات والتقييمات المعرفية", text: "اختبر ما تعلمته وحسّن فهمك لأدوات الذكاء الاصطناعي والاستخدام المسؤول للذكاء الاصطناعي." },
    { title: "تتبع التقدم", text: "تابع من حيث توقفت وحافظ على تنظيم رحلتك التعليمية." },
    { title: "آخر أخبار الذكاء الاصطناعي", text: "ابق على اطلاع بآخر إصدارات نماذج الذكاء الاصطناعي وتحديثات المنتجات واتجاهات الصناعة." },
    { title: "الإشارات المرجعية", text: "احفظ الأدوات والدروس والأدلة والمقارنات المفيدة لوقت لاحق." },
    { title: "دعم متعدد اللغات", text: "تعلم الذكاء الاصطناعي بعدة لغات منها الإنجليزية والفرنسية والعربية." },
  ],

  toolsEyebrow: "أدوات الذكاء الاصطناعي",
  toolsTitle: "استكشف أدوات الذكاء الاصطناعي التي يستخدمها الناس يومياً.",
  toolsSeeAll: "عرض جميع الأدوات",
  toolsLearnCta: "تعلم في التطبيق",
  toolsDisclaimer: "AI Guide تطبيق تعليمي مستقل. أسماء الأدوات تُستخدم لأغراض معلوماتية وتعليمية فقط.",
  toolDescriptions: [
    { short: "ذكاء اصطناعي تحادثي", description: "رائع للكتابة والعصف الذهني والتعلم ودعم البرمجة والإنتاجية اليومية.", bestFor: "الكتابة، العصف الذهني، دعم البرمجة" },
    { short: "مساعد Anthropic", description: "مفيد للوثائق الطويلة والكتابة والتحليل والردود الذكية.", bestFor: "الكتابة الطويلة والتحليل" },
    { short: "ذكاء Google", description: "مفيد لمستخدمي نظام Google البيئي والبحث والإنتاجية والمهام متعددة الوسائط.", bestFor: "Google workspace ومتعدد الوسائط" },
    { short: "بحث ذكي", description: "مصمم للبحث بالذكاء الاصطناعي والإجابات المستندة إلى المصادر.", bestFor: "البحث مع المراجع" },
    { short: "تفكير وبرمجة", description: "معروف بالتفكير المنطقي والبرمجة والمهام التقنية.", bestFor: "البرمجة والتفكير المنطقي" },
    { short: "ذكاء workspace", description: "مفيد للملاحظات والوثائق والإنتاجية والملخصات وأتمتة workspace.", bestFor: "ملاحظات وإنتاجية الوثائق" },
    { short: "مساعد Meta", description: "مفيد للمهام الاجتماعية وميزات الذكاء الاصطناعي عبر منتجات Meta.", bestFor: "المهام الاجتماعية والمساعد" },
    { short: "سير عمل الوكلاء", description: "مفيد لاستكشاف سير عمل الذكاء الاصطناعي من نوع الوكلاء ومهام الإنتاجية.", bestFor: "سير عمل الوكلاء" },
  ],

  compareEyebrow: "مقارنة",
  compareTitle: "اختر أداة الذكاء الاصطناعي المناسبة للمهمة المناسبة.",
  compareCta: "قارن أدوات الذكاء الاصطناعي في التطبيق",
  compareCategories: [
    "جودة الكتابة", "قدرة البحث", "دعم البرمجة", "سهولة الاستخدام",
    "السرعة", "الإبداع", "التفكير المنطقي", "الإنتاجية", "قيمة الخطة المجانية", "الملاءمة للمبتدئين",
  ],
  comparisons: [
    { title: "ChatGPT مقابل Claude", note: "مساعد متعدد الأغراض مقابل كاتب طويل المدى." },
    { title: "Gemini مقابل Perplexity AI", note: "ذكاء اصطناعي متعدد الوسائط من Google مقابل بحث مستند إلى المصادر." },
    { title: "DeepSeek مقابل ChatGPT", note: "متخصص في التفكير والبرمجة مقابل مساعد شامل." },
    { title: "Notion AI مقابل ChatGPT", note: "ذكاء اصطناعي متكامل مع workspace مقابل مساعد مستقل." },
  ],

  learnEyebrow: "تعلم",
  learnTitle: "تعلم الذكاء الاصطناعي بطريقة منظمة للمبتدئين والمستخدمين اليوميين.",
  learnPathLabel: "المسار",
  learningPaths: [
    { title: "دليل ChatGPT للمبتدئين", text: "ابدأ من الصفر وتعلم أساسيات ChatGPT." },
    { title: "أساسيات هندسة المطالبات", text: "اكتب مطالبات أفضل للحصول على إجابات أفضل." },
    { title: "الذكاء الاصطناعي والإنتاجية", text: "استخدم الذكاء الاصطناعي لتوفير الوقت في المهام اليومية." },
    { title: "الذكاء الاصطناعي للبحث", text: "ابحث وخلّص وتحقق من المعلومات بشكل أسرع." },
    { title: "الذكاء الاصطناعي للطلاب", text: "تعلم وادرس وراجع مع الذكاء الاصطناعي." },
    { title: "الذكاء الاصطناعي في العمل", text: "طبّق الذكاء الاصطناعي على مهام العمل الحقيقية." },
    { title: "أساسيات مقارنة أدوات الذكاء الاصطناعي", text: "اختر الأداة المناسبة لكل مهمة." },
    { title: "الاستخدام الآمن والمسؤول للذكاء الاصطناعي", text: "استخدم الذكاء الاصطناعي بأخلاقية وأمان وفعالية." },
  ],

  audienceEyebrow: "لمن هو؟",
  audienceTitle: "مصمم لكل من يريد فهم الذكاء الاصطناعي.",
  audienceLabels: ["الطلاب", "المبدعون", "المحترفون", "أصحاب الأعمال", "المطورون", "الباحثون", "المبتدئون", "عشاق الإنتاجية"],

  ctaBadge: "مجاني للتحميل",
  ctaTitle: "ابدأ تعلم الذكاء الاصطناعي اليوم.",
  ctaDescription: "حمّل AI Guide واكتشف أدلة بسيطة ومقارنات ذكية ونصائح عملية لأكثر أدوات الذكاء الاصطناعي شعبية.",
  ctaFootnote: "متاح أولاً على Android. دعم iOS قريباً.",

  faqEyebrow: "الأسئلة الشائعة",
  faqTitle: "الأسئلة المتكررة",
  faqs: [
    { q: "ما هو AI Guide؟", a: "AI Guide تطبيق جوال يساعد المستخدمين على تعلم ومقارنة وفهم أدوات الذكاء الاصطناعي الشائعة من خلال أدلة ودروس ومقارنات واختبارات وأخبار الذكاء الاصطناعي." },
    { q: "هل AI Guide مناسب للمبتدئين؟", a: "نعم. تم تصميم AI Guide للمبتدئين والمستخدمين اليوميين الذين يريدون شروحات بسيطة وتعلماً خطوة بخطوة." },
    { q: "ما أدوات الذكاء الاصطناعي التي يغطيها AI Guide؟", a: "يغطي AI Guide أدوات مثل ChatGPT وClaude وGemini وPerplexity AI وMeta AI وDeepSeek وNotion AI وManus AI والمزيد." },
    { q: "هل يمكن مقارنة أدوات الذكاء الاصطناعي داخل التطبيق؟", a: "نعم. يشمل التطبيق مقارنات بين أدوات الذكاء الاصطناعي عبر فئات مثل الكتابة والبحث والبرمجة والسرعة والإبداع والتفكير المنطقي والإنتاجية والملاءمة للمبتدئين." },
    { q: "هل يعلّم AI Guide هندسة المطالبات؟", a: "نعم. يشمل AI Guide أمثلة للمطالبات ونصائح عملية ومسارات تعليمية لمساعدة المستخدمين على كتابة مطالبات أفضل." },
    { q: "هل AI Guide تابع لـ ChatGPT أو Claude أو Gemini أو أدوات ذكاء اصطناعي أخرى؟", a: "لا. AI Guide تطبيق تعليمي مستقل وغير تابع لأدوات الذكاء الاصطناعي المذكورة." },
    { q: "هل AI Guide مجاني؟", a: "قد يحتوي التطبيق على محتوى مجاني وقد يتضمن أيضاً إعلانات أو موارد تعليمية متميزة مستقبلاً." },
  ],

  navLabels: ["الرئيسية", "الميزات", "أدوات الذكاء الاصطناعي", "مقارنة", "تعلم", "اتصل بنا"],
  headerDownload: "تحميل التطبيق",

  footerTagline: "تعلم وقارن وأتقن أدوات الذكاء الاصطناعي الشائعة مع أدلة بسيطة خطوة بخطوة، مصممة للمبتدئين والمستخدمين اليوميين.",
  footerProduct: "المنتج",
  footerProductLinks: ["الميزات", "أدوات الذكاء الاصطناعي", "مقارنة", "تعلم", "تحميل"],
  footerCompany: "الشركة",
  footerCompanyLinks: ["اتصل بنا", "سياسة الخصوصية", "شروط الاستخدام", "حذف الحساب"],
  footerResources: "الموارد",
  footerResourcesLinks: ["أدلة الذكاء الاصطناعي", "مقارنات الذكاء الاصطناعي", "أدوات الذكاء الاصطناعي", "أخبار الذكاء الاصطناعي"],
  footerCopyright: "جميع الحقوق محفوظة.",
  footerDisclaimer: "AI Guide تطبيق تعليمي مستقل وغير تابع لأدوات الذكاء الاصطناعي المذكورة.",

  pageHeroFeatures: { eyebrow: "الميزات", title: "كل ما تحتاجه لتعلم الذكاء الاصطناعي.", description: "يجمع AI Guide التعلم المنظم وصفحات الأدوات والمقارنات والاختبارات والأخبار وأكثر في تطبيق جوال سهل الاستخدام للمبتدئين." },
  pageHeroTools: { eyebrow: "دليل أدوات الذكاء الاصطناعي", title: "اكتشف أدوات الذكاء الاصطناعي التي يستخدمها الناس يومياً.", description: "شروحات واضحة وحالات استخدام ونصائح عملية لأشهر أدوات الذكاء الاصطناعي، كلها داخل AI Guide." },
  pageHeroCompare: { eyebrow: "مقارنة", title: "اختر الأداة المناسبة للمهمة المناسبة.", description: "قارن بين أدوات الذكاء الاصطناعي في المعايير الأكثر أهمية لسير عملك." },
  pageHeroLearn: { eyebrow: "التعلم", title: "تعلم منظم للذكاء الاصطناعي للمبتدئين والمستخدمين اليوميين.", description: "من أول موجه لـ ChatGPT إلى مقارنة الأدوات كالمحترفين. AI Guide يرشدك خطوة بخطوة." },
  pageHeroContact: { eyebrow: "التواصل", title: "تواصل معنا", description: "لديك سؤال أو اقتراح أو طلب شراكة؟ يسعدنا سماعك." },
  pageHeroDownload: { eyebrow: "تنزيل", title: "احصل على AI Guide على هاتفك.", description: "متاح أولاً على Android. يمكن إضافة دعم iOS عند الاستعداد." },

  bestForLabel: "الأفضل لـ:",
  compareVsLabel: "مقابل",
  compareInAppCta: "انظر المقارنة الكاملة في التطبيق",
  learnPathPrefix: "المسار",

  ctaSectionBadge: "مجاني للتنزيل",
  ctaSectionTitle: "ابدأ تعلم الذكاء الاصطناعي اليوم.",
  ctaSectionDescription: "حمّل AI Guide واكتشف أدلة بسيطة ومقارنات ذكية ونصائح عملية لأشهر أدوات الذكاء الاصطناعي.",
  ctaSectionAndroidNote: "متاح أولاً على Android. دعم iOS قادم قريباً.",

  contactEmailTitle: "راسلنا",
  contactEmailDesc: "نرد على كل رسالة في أقرب وقت ممكن.",
  contactFeedbackTitle: "الملاحظات والاقتراحات",
  contactFeedbackDesc: "ساعدنا في تحسين AI Guide بأفكارك وطلبات الميزات.",
  contactResponseTitle: "وقت الاستجابة",
  contactResponseDesc: "نهدف إلى الرد خلال 1-2 يوم عمل.",
  contactFormTitle: "أرسل رسالة",
  contactFormDesc: "املأ النموذج وسنرد عليك في أقرب وقت.",
  contactFieldName: "اسمك",
  contactFieldEmail: "البريد الإلكتروني",
  contactFieldSubject: "الموضوع",
  contactFieldMessage: "الرسالة",
  contactNamePlaceholder: "محمد علي",
  contactEmailPlaceholder: "mohammed@example.com",
  contactSubjectPlaceholder: "كيف يمكننا مساعدتك؟",
  contactMessagePlaceholder: "أخبرنا بالمزيد...",
  contactSubmitButton: "إرسال الرسالة",
  contactConsentText: "بإرسال هذا النموذج، توافق على تخزين رسالتك وإعادة توجيهها إلى فريق الدعم على",

  downloadInstallTitle: "تثبيت AI Guide",
  downloadInstallDesc: "نقرة واحدة لبدء رحلتك في تعلم الذكاء الاصطناعي. التطبيق مصمم للمبتدئين. لا خلفية تقنية مطلوبة.",
  downloadFeatureItems: ["أدلة خطوة بخطوة لأدوات الذكاء الاصطناعي الشائعة", "مقارنات أدوات الذكاء الاصطناعي", "اختبارات وتتبع التقدم", "أحدث أخبار الذكاء الاصطناعي", "دعم متعدد اللغات"],
  downloadScanTitle: "امسح الرمز للتنزيل",
  downloadScanDesc: "افتح كاميرا هاتفك وأشر إلى أحد الرموز لفتح AI Guide على Google Play أو App Store.",
};

export const translations: Record<Lang, LangTranslations> = { en, fr, ar };
