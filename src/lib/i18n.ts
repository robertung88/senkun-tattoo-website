export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      work: "Portfolio",
      about: "À propos",
      contact: "Contact",
      faq: "FAQ",
      bookNow: "Réserver",
    },
    hero: {
      subtitle: "Genève • Illustration Noir & Gris",
      description:
        "Spécialiste du fin line et dotwork, je crée des récits à grande échelle dans la peau. Fantaisie, mythologie et géométrie ornementale—gravés avec précision.",
      viewPortfolio: "Voir le Portfolio",
      bookConsultation: "Réserver une Consultation",
      scroll: "Défiler",
      est: "Fondé en 2018 • Genève",
    },
    portfolio: {
      title: "Œuvres Sélectionnées",
      subtitle: "Portfolio",
      description:
        "Chaque pièce est une collaboration, une histoire gravée dans la peau. Parcourez par catégorie ou visionnez la collection complète.",
      categories: {
        all: "Tous",
        fantasy: "Fantaisie & Mythologie",
        ornamental: "Ornemental",
        largeScale: "Grande Échelle",
      },
    },
    about: {
      title: "Senkun",
      subtitle: "L'Artiste",
      description1:
        "Basé à Genève, je me spécialise dans les tatouages illustratifs noir et gris qui brouillent la frontière entre l'art et l'art corporel. Mon travail puise dans la mythologie, la fantaisie et les traditions ornementales—réimaginés à travers le prisme du blackwork contemporain.",
      description2:
        "La technique du dotwork est ma signature : des milliers de points individuels créant des dégradés, des textures et de la profondeur que l'ombrage traditionnel ne peut atteindre. Chaque pièce est construite patiemment, séance après séance.",
      description3:
        "Je crois que les tatouages devraient être plus que de la décoration—ce devraient être des récits qui font partie de vous. C'est pourquoi je me concentre sur le travail personnalisé, en collaborant étroitement avec chaque client.",
      yearsExperience: "Années d'Expérience",
      tattoosCreated: "Tatouages Créés",
      based: "Studio à Genève",
      process: {
        title: "De la Vision à la Peau",
        subtitle: "Le Parcours",
        steps: [
          {
            title: "Consultation",
            description:
              "Nous discutons de votre vision, de l'emplacement et de l'histoire que vous voulez raconter. Chaque pièce commence par la compréhension.",
          },
          {
            title: "Design",
            description:
              "Artwork personnalisé conçu pour votre corps. Plusieurs révisions assurent que le design s'accorde avec votre anatomie.",
          },
          {
            title: "Tatouage",
            description:
              "La transformation. Les séances sont rythmées pour la précision et votre confort. Les grandes pièces s'étendent sur plusieurs séances.",
          },
          {
            title: "Guéri",
            description:
              "La révélation finale. Avec des soins appropriés, le dotwork et le fin line se déposent en un art net et durable.",
          },
        ],
      },
      studio: {
        title: "Là où l'Art se Fait",
        subtitle: "Le Studio",
        description:
          "Studio privé à Genève. Stérile, confortable et conçu pour des sessions de plusieurs heures. Aiguilles à usage unique, stérilisation de qualité hospitalière.",
      },
    },
    contact: {
      title: "Réserver une Consultation",
      subtitle: "Commencez Votre Voyage",
      description:
        "Réservations ouvertes 6-8 semaines à l'avance. Remplissez le formulaire ci-dessous pour démarrer la conversation sur votre prochaine pièce.",
      form: {
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        placement: "Emplacement",
        size: "Taille Approximative",
        description: "Parlez-moi de votre idée",
        firstTattoo: "Premier Tatouage ?",
        yes: "Oui, premier tatouage",
        no: "Non, j'ai des tatouages",
        sizeOptions: {
          select: "Sélectionnez la taille...",
          small: "Petit (moins de 10cm)",
          medium: "Moyen (10-20cm)",
          large: "Grand (20-30cm)",
          xl: "Très Grand (manchette, dos)",
        },
        send: "Envoyer la Demande",
      },
      availability: {
        title: "Disponibilité",
        booking: "Réservations Ouvertes",
        waitTime: "Délai d'attente : 6-8 semaines pour nouveaux projets",
        description:
          "Les pièces à grande échelle (manchettes, dos) nécessitent généralement 3-8 séances espacées de 2-4 semaines.",
      },
      pricing: {
        title: "Tarifs",
        hourly: "Tarif horaire",
        minimum: "Session minimum",
        fullDay: "Journée complète (6h)",
        deposit:
          "Un acompte de 30% est requis pour sécuriser votre rendez-vous. Celui-ci couvre le temps de design et est déduit du coût final.",
      },
      contact: {
        title: "Contact",
        studio: "Studio",
        hours: "Sur rendezous uniquement",
        schedule: "Mar — Sam, 11:00 — 19:00",
      },
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Questions",
      description:
        "Tout ce que vous devez savoir avant de réserver. Vous ne trouvez pas votre réponse ? Contactez-moi directement.",
      stillQuestions: "Vous avez encore des questions ?",
      getInTouch: "Contactez-moi",
    },
    aftercare: {
      title: "Soins",
      subtitle: "Guide de Soins",
      description:
        "Des soins appropriés sont essentiels pour que votre tatouage guérisse magnifiquement. Suivez ces directives—particulièrement important pour le dotwork et le fin line.",
      do: "À Faire",
      dont: "À Éviter",
      timeline: {
        title: "Calendrier de Guérison",
        phases: [
          {
            days: "Jours 1-3",
            title: "Frais & Protégé",
            description:
              "Le tatouage sera sensible, légèrement gonflé et peut suinter. Gardez-le propre et légèrement hydraté. Rougueur et gonflement normaux.",
          },
          {
            days: "Jours 4-7",
            title: "Peeling",
            description:
              "Le tatouage commence à peler comme un coup de soleil. C'est normal—laissez-le faire. Continuez l'hydratation légère.",
          },
          {
            days: "Jours 8-14",
            title: "Installation",
            description:
              "Le peeling diminue. Le tatouage peut paraître terne pendant que la nouvelle peau se forme. Démangeaisons normales—ne grattez pas.",
          },
          {
            days: "Semaines 3-6",
            title: "Complètement Guéri",
            description:
              "La couche supérieure est guérie. Les couleurs et détails deviennent nets. Vous pouvez reprendre toutes les activités.",
          },
        ],
      },
      download: "Télécharger le PDF",
    },
    footer: {
      description:
        "Artiste tatoueur noir et gris illustratif basé à Genève. Spécialisé dans le fin line, dotwork et les récits à grande échelle.",
      navigation: "Navigation",
      contact: "Contact",
      follow: "Suivre",
      followText: "Suivez pour les flash drops, photos guéries et coulisses.",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
      faq: "FAQ",
      bookNow: "Book Now",
    },
    hero: {
      subtitle: "Geneva • Black & Grey Illustrative",
      description:
        "Fine line & dotwork specialist crafting large-scale narratives in skin. Fantasy, mythology, and ornamental geometry—etched with precision.",
      viewPortfolio: "View Portfolio",
      bookConsultation: "Book Consultation",
      scroll: "Scroll",
      est: "Est. 2018 • Geneva",
    },
    portfolio: {
      title: "Selected Works",
      subtitle: "Portfolio",
      description:
        "Each piece is a collaboration, a story etched in skin. Browse by category or view the complete collection.",
      categories: {
        all: "All Work",
        fantasy: "Fantasy & Mythology",
        ornamental: "Ornamental",
        largeScale: "Large Scale",
      },
    },
    about: {
      title: "Senkun",
      subtitle: "The Artist",
      description1:
        "Based in Geneva, I specialize in black & grey illustrative tattoos that blur the line between fine art and body art. My work draws from mythology, fantasy, and ornamental traditions—reimagined through the lens of contemporary blackwork.",
      description2:
        "The dotwork technique is my signature: thousands of individual points creating gradients, textures, and depth that traditional shading cannot achieve. Each piece is built patiently, session by session.",
      description3:
        "I believe tattoos should be more than decoration—they should be narratives that become part of you. This is why I focus on custom work, collaborating closely with each client.",
      yearsExperience: "Years Experience",
      tattoosCreated: "Tattoos Created",
      based: "Based Studio",
      process: {
        title: "From Vision to Skin",
        subtitle: "The Journey",
        steps: [
          {
            title: "Consultation",
            description:
              "We discuss your vision, placement, and the story you want to tell. Every piece begins with understanding.",
          },
          {
            title: "Design",
            description:
              "Custom artwork crafted for your body. Multiple revisions ensure the design flows with your anatomy.",
          },
          {
            title: "Tattoo",
            description:
              "The transformation. Sessions are paced for both precision and your comfort. Large pieces span multiple sittings.",
          },
          {
            title: "Healed",
            description:
              "The final reveal. With proper aftercare, dotwork and fine line settle into crisp, lasting art.",
          },
        ],
      },
      studio: {
        title: "Where Art Happens",
        subtitle: "The Studio",
        description:
          "Private studio in Geneva. Sterile, comfortable, and designed for focused, multi-hour sessions. Single-use needles, hospital-grade sterilization.",
      },
    },
    contact: {
      title: "Book a Consultation",
      subtitle: "Start Your Journey",
      description:
        "Currently booking 6-8 weeks out. Fill out the form below to start the conversation about your next piece.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        placement: "Placement",
        size: "Approximate Size",
        description: "Tell me about your idea",
        firstTattoo: "First Tattoo?",
        yes: "Yes, first tattoo",
        no: "No, I have tattoos",
        sizeOptions: {
          select: "Select size...",
          small: "Small (under 10cm)",
          medium: "Medium (10-20cm)",
          large: "Large (20-30cm)",
          xl: "Extra Large (sleeve, back piece)",
        },
        send: "Send Inquiry",
      },
      availability: {
        title: "Availability",
        booking: "Currently Booking",
        waitTime: "Wait time: 6-8 weeks for new projects",
        description:
          "Large-scale pieces (sleeves, back pieces) typically require 3-8 sessions scheduled 2-4 weeks apart.",
      },
      pricing: {
        title: "Pricing",
        hourly: "Hourly rate",
        minimum: "Minimum session",
        fullDay: "Full day (6h)",
        deposit:
          "A 30% deposit is required to secure your appointment. This covers design time and is deducted from the final cost.",
      },
      contact: {
        title: "Get in Touch",
        studio: "Studio",
        hours: "By appointment only",
        schedule: "Tue — Sat, 11:00 — 19:00",
      },
    },
    faq: {
      title: "Frequently Asked",
      subtitle: "Questions",
      description:
        "Everything you need to know before booking. Can't find your answer? Reach out directly.",
      stillQuestions: "Still have questions?",
      getInTouch: "Get in Touch",
    },
    aftercare: {
      title: "Aftercare",
      subtitle: "Care Guide",
      description:
        "Proper aftercare is essential for your tattoo to heal beautifully. Follow these guidelines—especially important for dotwork and fine line pieces.",
      do: "Do",
      dont: "Don't",
      timeline: {
        title: "Healing Timeline",
        phases: [
          {
            days: "Days 1-3",
            title: "Fresh & Protected",
            description:
              "The tattoo will be tender, slightly raised, and may weep plasma. Keep it clean and lightly moisturized. Redness and swelling are normal.",
          },
          {
            days: "Days 4-7",
            title: "Peeling Begins",
            description:
              "The tattoo will start to flake and peel like a sunburn. This is normal—let it happen naturally. Continue light moisturizing.",
          },
          {
            days: "Days 8-14",
            title: "Settling In",
            description:
              "Peeling subsides. The tattoo may look dull or cloudy as new skin forms. Continue care routine. Itching is common—don't scratch.",
          },
          {
            days: "Weeks 3-6",
            title: "Fully Healed",
            description:
              "The top layer is healed, though deeper layers continue settling. Colors and details become crisp. You can resume all activities.",
          },
        ],
      },
      download: "Download Aftercare PDF",
    },
    footer: {
      description:
        "Black & grey illustrative tattoo artist based in Geneva. Specializing in fine line, dotwork, and large-scale narratives.",
      navigation: "Navigation",
      contact: "Contact",
      follow: "Follow",
      followText: "Follow for flash drops, healed photos, and behind-the-scenes.",
    },
  },
};

export type Translations = typeof translations;
