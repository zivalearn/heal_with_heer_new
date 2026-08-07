import heroBg from '@/assets/hero_bg.jpeg';
import heroBgMobile from '@/assets/hero_bg_mobile.jpeg';
import logoImg from '@/assets/logo.jpg';
import bgHeerImage from '@/assets/bg-heer-image.jpeg';
import bgHeerMentor from '@/assets/bg-heer-mentor.jpeg';

export interface CatalogImageItem {
  id: string;
  title: string;
  category: string;
  description: string;
  defaultSrc: string;
}

export const CATEGORIES = [
  "All",
  "Global & Branding",
  "Homepage",
  "About Page",
  "Reiki & Chakra",
  "Trauma Healing",
  "Relationship Mastery",
  "NLP Healing",
  "Timeline Therapy",
  "Hypnotherapy & EFT",
  "Tarot & Angel Guidance",
  "Inner Child Healing",
  "Train The Trainer",
  "Celestial Constellation",
  "Healing Journal"
] as const;

export const IMAGE_CATALOG: CatalogImageItem[] = [
  // Global & Branding
  {
    id: "global.logo",
    title: "Heal With Heer Main Logo",
    category: "Global & Branding",
    description: "Primary brand emblem displayed in header navigation and footer.",
    defaultSrc: logoImg
  },

  // Homepage
  {
    id: "homepage.hero_bg_desktop",
    title: "Homepage Hero Background (Desktop)",
    category: "Homepage",
    description: "Main background image for desktop viewport in sanctuary hero banner.",
    defaultSrc: heroBg
  },
  {
    id: "homepage.hero_bg_mobile",
    title: "Homepage Hero Background (Mobile)",
    category: "Homepage",
    description: "Optimized mobile hero background image.",
    defaultSrc: heroBgMobile
  },
  {
    id: "homepage.heer_portrait",
    title: "Founder Heer Portrait (Homepage)",
    category: "Homepage",
    description: "Portrait of Heer featured on the homepage mentor spotlight.",
    defaultSrc: bgHeerImage
  },
  {
    id: "homepage.mentor_portrait",
    title: "Mentor Dr. Vikram Portrait (Homepage)",
    category: "Homepage",
    description: "Portrait of senior mentor Dr. Vikram featured on the homepage.",
    defaultSrc: bgHeerMentor
  },
  {
    id: "homepage.healing_step_1",
    title: "Healing Stage 1 - Awareness",
    category: "Homepage",
    description: "Lotus medallion visual for Awareness stage.",
    defaultSrc: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "homepage.healing_step_2",
    title: "Healing Stage 2 - Release",
    category: "Homepage",
    description: "Lotus medallion visual for Release stage.",
    defaultSrc: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "homepage.healing_step_3",
    title: "Healing Stage 3 - Heal",
    category: "Homepage",
    description: "Lotus medallion visual for Heal stage.",
    defaultSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "homepage.healing_step_4",
    title: "Healing Stage 4 - Realign",
    category: "Homepage",
    description: "Lotus medallion visual for Realign stage.",
    defaultSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "homepage.healing_step_5",
    title: "Healing Stage 5 - Rise",
    category: "Homepage",
    description: "Lotus medallion visual for Rise stage.",
    defaultSrc: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=300"
  },

  // Modalities Overview Cards
  {
    id: "modality.hypnotherapy",
    title: "Modality Card - Hypnotherapy & EFT",
    category: "Hypnotherapy & EFT",
    description: "Card thumbnail for Hypnotherapy & EFT on sanctuary grid.",
    defaultSrc: "/assets/modalities/hypnotherapy.jpeg"
  },
  {
    id: "modality.innerchild",
    title: "Modality Card - Inner Child Healing",
    category: "Inner Child Healing",
    description: "Card thumbnail for Inner Child Healing on sanctuary grid.",
    defaultSrc: "/assets/modalities/innerchild.jpeg"
  },
  {
    id: "modality.nlp",
    title: "Modality Card - NLP Neuro-Reprogramming",
    category: "NLP Healing",
    description: "Card thumbnail for NLP Neuro-Reprogramming on sanctuary grid.",
    defaultSrc: "/assets/modalities/nlp.jpeg"
  },
  {
    id: "modality.reiki",
    title: "Modality Card - Reiki & Chakra Healing",
    category: "Reiki & Chakra",
    description: "Card thumbnail for Reiki & Chakra Healing on sanctuary grid.",
    defaultSrc: "/assets/modalities/reiki.jpeg"
  },
  {
    id: "modality.relationship",
    title: "Modality Card - Relationship Mastery",
    category: "Relationship Mastery",
    description: "Card thumbnail for Relationship Mastery on sanctuary grid.",
    defaultSrc: "/assets/modalities/relationship.jpeg"
  },
  {
    id: "modality.tarot",
    title: "Modality Card - Tarot & Angel Guidance",
    category: "Tarot & Angel Guidance",
    description: "Card thumbnail for Tarot & Angel Guidance on sanctuary grid.",
    defaultSrc: "/assets/modalities/tarot.jpeg"
  },
  {
    id: "modality.timeline",
    title: "Modality Card - Timeline Therapy",
    category: "Timeline Therapy",
    description: "Card thumbnail for Timeline Therapy on sanctuary grid.",
    defaultSrc: "/assets/modalities/timeline.jpeg"
  },
  {
    id: "modality.trauma",
    title: "Modality Card - Trauma Healing",
    category: "Trauma Healing",
    description: "Card thumbnail for Trauma Healing on sanctuary grid.",
    defaultSrc: "/assets/modalities/trauma.jpeg"
  },

  // About Page
  {
    id: "about.heer_portrait",
    title: "Heer Founder Portrait (About Page)",
    category: "About Page",
    description: "Main biography portrait on the About page.",
    defaultSrc: bgHeerImage
  },
  {
    id: "about.mentor_portrait",
    title: "Dr. Vikram Portrait (About Page)",
    category: "About Page",
    description: "Mentor profile portrait on the About page.",
    defaultSrc: bgHeerMentor
  },

  // Energetic Signature / Aura
  {
    id: "energetic.aura_field",
    title: "Human Aura & Chakra Energy Field",
    category: "Reiki & Chakra",
    description: "Illustrative human aura field graphic in Energetic Signature section.",
    defaultSrc: "/assets/images/human-aura-field.jpg"
  },

  // Reiki & Chakra Healing
  {
    id: "reiki.hero_bg",
    title: "Reiki & Chakra Hero Banner",
    category: "Reiki & Chakra",
    description: "Header banner image for Reiki & Chakra Healing course page.",
    defaultSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "reiki.natural_healing",
    title: "Reiki Natural Healing Mortar Artwork",
    category: "Reiki & Chakra",
    description: "Circular emblem photo of mortar pestle herbs & natural healing on Reiki page.",
    defaultSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "reiki.cta_bg",
    title: "Reiki Call To Action Background",
    category: "Reiki & Chakra",
    description: "Serene forest background image for Reiki CTA section.",
    defaultSrc: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1600"
  },

  // Trauma Healing
  {
    id: "trauma.hero_bg",
    title: "Trauma Healing Sanctuary Banner",
    category: "Trauma Healing",
    description: "Hero banner image for Trauma & Somatic Release modality page.",
    defaultSrc: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "trauma.sanctuary_bg",
    title: "Trauma Sanctuary Serene Background",
    category: "Trauma Healing",
    description: "Subtle forest sanctuary overlay in Trauma CTA section.",
    defaultSrc: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1600"
  },

  // Relationship Mastery
  {
    id: "relationship.hero_bg",
    title: "Relationship Mastery Banner",
    category: "Relationship Mastery",
    description: "Main header artwork for Relationship & Feminine Reclamation.",
    defaultSrc: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "relationship.union_diamond",
    title: "Sacred Union Diamond Artwork",
    category: "Relationship Mastery",
    description: "Diamond connection photo on Relationship page.",
    defaultSrc: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "relationship.dialogue",
    title: "Relationship Flower - Dialogue",
    category: "Relationship Mastery",
    description: "Conscious dialogue flower ring photo.",
    defaultSrc: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "relationship.boundaries",
    title: "Relationship Flower - Boundaries",
    category: "Relationship Mastery",
    description: "Sovereign boundary flower ring photo.",
    defaultSrc: "https://images.unsplash.com/photo-1593349480506-8433a14cd785?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "relationship.rebuilding",
    title: "Relationship Flower - Rebuilding",
    category: "Relationship Mastery",
    description: "Trust & vulnerability flower ring photo.",
    defaultSrc: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "relationship.connection",
    title: "Relationship Flower - Connection",
    category: "Relationship Mastery",
    description: "Secure union flower ring photo.",
    defaultSrc: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "relationship.writing_desk_bg",
    title: "Relationship Vintage Writing Desk Background",
    category: "Relationship Mastery",
    description: "Vintage writing desk background for relationship letter component.",
    defaultSrc: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "relationship.cta_bg",
    title: "Relationship Call To Action Background",
    category: "Relationship Mastery",
    description: "Serene background artwork for Relationship CTA section.",
    defaultSrc: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1600"
  },

  // NLP Healing
  {
    id: "nlp.hero_bg",
    title: "NLP Neuro-Reprogramming Banner",
    category: "NLP Healing",
    description: "Mind & subconscious reprogramming visual for NLP page.",
    defaultSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "nlp.mind_illustration",
    title: "NLP Subconscious Mind Artwork",
    category: "NLP Healing",
    description: "Subconscious mapping illustration on NLP page.",
    defaultSrc: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "nlp.synaptic_firing",
    title: "NLP Synaptic Firing Waves",
    category: "NLP Healing",
    description: "Neural brain synapse photo on NLP page.",
    defaultSrc: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "nlp.flow_meditation",
    title: "NLP Consciousness Flow Meditation",
    category: "NLP Healing",
    description: "Flowing meditating figure background photo on NLP page.",
    defaultSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "nlp.decisions",
    title: "NLP Wheel - Decisions",
    category: "NLP Healing",
    description: "Subconscious decisions ring photo on NLP page.",
    defaultSrc: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "nlp.actions",
    title: "NLP Wheel - Actions",
    category: "NLP Healing",
    description: "Aligned actions ring photo on NLP page.",
    defaultSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "nlp.habits",
    title: "NLP Wheel - Habits",
    category: "NLP Healing",
    description: "Empowering habits ring photo on NLP page.",
    defaultSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "nlp.results",
    title: "NLP Wheel - Results",
    category: "NLP Healing",
    description: "Transformational results ring photo on NLP page.",
    defaultSrc: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=300"
  },

  // Timeline Therapy
  {
    id: "timeline.hero_bg",
    title: "Timeline Therapy Hero Artwork",
    category: "Timeline Therapy",
    description: "Hero background visual for Timeline & Karmic Regression.",
    defaultSrc: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "timeline.regression_bg",
    title: "Past Timeline Journey Background",
    category: "Timeline Therapy",
    description: "Illustration of past timeline regression.",
    defaultSrc: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "timeline.time_stream",
    title: "Timeline Celestial Stream Arched Portal",
    category: "Timeline Therapy",
    description: "Celestial time-stream portal background photo.",
    defaultSrc: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "timeline.pocket_watch",
    title: "Timeline Pocket Watch Portrait",
    category: "Timeline Therapy",
    description: "Antique golden pocket watch photo representing timeline flow.",
    defaultSrc: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "timeline.benefit_1",
    title: "Timeline Benefit - Root Cause Resolution",
    category: "Timeline Therapy",
    description: "Small photo for root cause resolution benefit.",
    defaultSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "timeline.benefit_2",
    title: "Timeline Benefit - Emotional Liberation",
    category: "Timeline Therapy",
    description: "Small photo for emotional liberation benefit.",
    defaultSrc: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "timeline.benefit_3",
    title: "Timeline Benefit - Future Alignment",
    category: "Timeline Therapy",
    description: "Small photo for future timeline alignment benefit.",
    defaultSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=150"
  },

  // Hypnotherapy & EFT
  {
    id: "hypno.hero_bg",
    title: "Hypnotherapy & EFT Tapping Banner",
    category: "Hypnotherapy & EFT",
    description: "Somatic EFT & trance healing hero banner image.",
    defaultSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },

  // Tarot & Angel Guidance
  {
    id: "tarot.hero_bg",
    title: "Tarot & Angel Guidance Hero Artwork",
    category: "Tarot & Angel Guidance",
    description: "Header visual for Tarot & Angel Guidance consultation.",
    defaultSrc: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "tarot.intuitive_portal",
    title: "Tarot Intuitive Portal Diamond",
    category: "Tarot & Angel Guidance",
    description: "Celestial intuitive portal artwork photo.",
    defaultSrc: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "tarot.cta_bg",
    title: "Tarot Call To Action Background",
    category: "Tarot & Angel Guidance",
    description: "Mystic background artwork for Tarot CTA section.",
    defaultSrc: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "tarot.card.fool",
    title: "Tarot Card - The Fool",
    category: "Tarot & Angel Guidance",
    description: "Card face artwork for Major Arcana 0 - The Fool.",
    defaultSrc: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tarot.card.magician",
    title: "Tarot Card - The Magician",
    category: "Tarot & Angel Guidance",
    description: "Card face artwork for Major Arcana I - The Magician.",
    defaultSrc: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tarot.card.priestess",
    title: "Tarot Card - The High Priestess",
    category: "Tarot & Angel Guidance",
    description: "Card face artwork for Major Arcana II - The High Priestess.",
    defaultSrc: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tarot.card.empress",
    title: "Tarot Card - The Empress",
    category: "Tarot & Angel Guidance",
    description: "Card face artwork for Major Arcana III - The Empress.",
    defaultSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tarot.card.emperor",
    title: "Tarot Card - The Emperor",
    category: "Tarot & Angel Guidance",
    description: "Card face artwork for Major Arcana IV - The Emperor.",
    defaultSrc: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tarot.card.hierophant",
    title: "Tarot Card - The Hierophant",
    category: "Tarot & Angel Guidance",
    description: "Card face artwork for Major Arcana V - The Hierophant.",
    defaultSrc: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tarot.card.lovers",
    title: "Tarot Card - The Lovers",
    category: "Tarot & Angel Guidance",
    description: "Card face artwork for Major Arcana VI - The Lovers.",
    defaultSrc: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600"
  },

  // Inner Child Healing
  {
    id: "innerchild.hero_bg",
    title: "Inner Child Reconnection Banner",
    category: "Inner Child Healing",
    description: "Gentle inner child integration banner visual.",
    defaultSrc: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "innerchild.energy_path_1",
    title: "Inner Child Path 1 - Safety",
    category: "Inner Child Healing",
    description: "Somatic safety diamond photo.",
    defaultSrc: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "innerchild.energy_path_2",
    title: "Inner Child Path 2 - Feeling",
    category: "Inner Child Healing",
    description: "Emotional expression diamond photo.",
    defaultSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "innerchild.energy_path_3",
    title: "Inner Child Path 3 - Truth",
    category: "Inner Child Healing",
    description: "Voice & boundaries diamond photo.",
    defaultSrc: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "innerchild.energy_path_4",
    title: "Inner Child Path 4 - Play",
    category: "Inner Child Healing",
    description: "Creative play diamond photo.",
    defaultSrc: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "innerchild.energy_path_5",
    title: "Inner Child Path 5 - Trust",
    category: "Inner Child Healing",
    description: "Relational trust diamond photo.",
    defaultSrc: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "innerchild.energy_path_6",
    title: "Inner Child Path 6 - Wholeness",
    category: "Inner Child Healing",
    description: "Integrated self diamond photo.",
    defaultSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
  },

  // Train The Trainer
  {
    id: "traintrainer.hero_bg",
    title: "Train The Trainer Certification Hero",
    category: "Train The Trainer",
    description: "Master Practitioner & Trainer Certification header banner.",
    defaultSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "traintrainer.alumni_1",
    title: "Train The Trainer Graduate - Anjali",
    category: "Train The Trainer",
    description: "Alumni testimonial portrait photo for Anjali Sharma.",
    defaultSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "traintrainer.alumni_2",
    title: "Train The Trainer Graduate - Vikram",
    category: "Train The Trainer",
    description: "Alumni testimonial portrait photo for Dr. Vikram Mehta.",
    defaultSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "traintrainer.alumni_3",
    title: "Train The Trainer Graduate - Rhea",
    category: "Train The Trainer",
    description: "Alumni testimonial portrait photo for Rhea Nair.",
    defaultSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "traintrainer.cta_bg",
    title: "Train The Trainer Call To Action Background",
    category: "Train The Trainer",
    description: "Celestial background artwork for Train The Trainer CTA section.",
    defaultSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1600"
  },

  // Healing Journal
  {
    id: "journal.service_1",
    title: "Healing Journal - Somatic Energy Release",
    category: "Healing Journal",
    description: "Topic illustration photo for Chapter 1 in Healing Journal.",
    defaultSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "journal.service_2",
    title: "Healing Journal - Subconscious Reprogramming",
    category: "Healing Journal",
    description: "Topic illustration photo for Chapter 2 in Healing Journal.",
    defaultSrc: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "journal.service_3",
    title: "Healing Journal - Relationship Alignment",
    category: "Healing Journal",
    description: "Topic illustration photo for Chapter 3 in Healing Journal.",
    defaultSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "journal.service_4",
    title: "Healing Journal - Emotional Integration",
    category: "Healing Journal",
    description: "Topic illustration photo for Chapter 4 in Healing Journal.",
    defaultSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "journal.service_5",
    title: "Healing Journal - Ancestral Constellations",
    category: "Healing Journal",
    description: "Topic illustration photo for Chapter 5 in Healing Journal.",
    defaultSrc: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "journal.service_6",
    title: "Healing Journal - Sacred Soul Purpose",
    category: "Healing Journal",
    description: "Topic illustration photo for Chapter 6 in Healing Journal.",
    defaultSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800"
  },

  // WhatsApp
  {
    id: "whatsapp.bg_wallpaper",
    title: "WhatsApp Chat Window Background Wallpaper",
    category: "Global & Branding",
    description: "Ethereal chat window wallpaper background image in WhatsApp widget.",
    defaultSrc: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=200&blur=4"
  }
];
