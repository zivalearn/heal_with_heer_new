export interface TarotCard {
  id: string;
  name: string;
  number: number;
  keywords: string;
  symbolism: string;
  reflection: string;
  guidance: string;
  image: string;
  
  // Learn More details
  traditionalMeaning: string;
  element: string;
  planet: string;
  numerology: string;
  history: string;

  // Rich interpretation database properties
  lightMeaning: string;
  shadowMeaning: string;
  loveMeaning: string;
  careerMeaning: string;
  spiritualMeaning: string;
  energyType: 'active' | 'receptive' | 'transitional' | 'stabilizing';
  reflectionPrompts: string[];
  affirmation: string;
}

export const TAROT_CARDS: TarotCard[] = [
  {
    id: 'fool',
    name: 'THE FOOL',
    number: 0,
    keywords: 'Adventure • Beginnings • Pure Potential',
    symbolism: 'A reminder that every grand adventure starts with a single step into the unknown.',
    reflection: 'You stand at the precipice of a new cycle. Trusting your feet to find ground is more valuable than having a detailed map.',
    guidance: 'Where are you holding back due to fear of looking foolish? Allow yourself the luxury of starting fresh.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Fool represents spontaneous action, unlimited potential, and the ultimate leap of faith. It signifies an open mind and a spirit of adventure.',
    element: 'Air',
    planet: 'Uranus',
    numerology: '0 (The Source, Infinity)',
    history: 'Historically, the Fool represents the court jester, the only one who could speak the absolute truth without fear of consequences.',
    lightMeaning: 'Embrace of the unknown, dynamic trust in the universe, freedom from worry, and pure unconditioned potential.',
    shadowMeaning: 'Recklessness, fear of beginning, holding back from a necessary leap, or acting without considering boundaries.',
    loveMeaning: 'An invitation to let go of old relational defenses, step into a playful new dynamic, or trust a new connection.',
    careerMeaning: 'A call to initiate a fresh professional chapter, take a calculated creative risk, or embrace non-traditional opportunities.',
    spiritualMeaning: 'Standing as a clean slate, trusting the divine flow completely, and walking with absolute presence.',
    energyType: 'transitional',
    reflectionPrompts: [
      'What risk would you take if failure were completely impossible?',
      'Where is your fear of looking foolish keeping you stagnant?',
      'How can you bring a sense of play and beginning to your current situation?'
    ],
    affirmation: 'I trust the path ahead and step fearlessly into my next great adventure.'
  },
  {
    id: 'magician',
    name: 'THE MAGICIAN',
    number: 1,
    keywords: 'Manifestation • Focus • Resourcefulness',
    symbolism: 'The conscious alignment of intellect, passion, emotion, and practical action.',
    reflection: 'The tools you need are already on your table. It is not a matter of acquiring more, but of coordinating what you have.',
    guidance: 'Channel your attention into a singular, high-integrity project. Your focus is your greatest creative power.',
    image: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Magician acts as a conduit between heaven and earth. It signals willpower, mastery of resources, and translating spiritual vision into material reality.',
    element: 'Air',
    planet: 'Mercury',
    numerology: '1 (New beginnings, unity, leadership)',
    history: 'In traditional decks, the Magician (Le Bateleur) was originally depicted as a street performer or artisan displaying tools of the trade.',
    lightMeaning: 'Masterful application of skills, direct manifestation, intentional focus, and alignment of cosmic elements.',
    shadowMeaning: 'Manipulative energy, unfocused talent, hesitation to act, or neglecting to use the rich tools at your disposal.',
    loveMeaning: 'Clear, conscious communication of desires and taking active steps to manifest deeper mutual respect.',
    careerMeaning: 'Excellent alignment for launching projects, showcasing versatile talents, and executing strategic plans with high capability.',
    spiritualMeaning: 'Acting as a clear channel for divine will, realizing that you are a co-creator of your reality.',
    energyType: 'active',
    reflectionPrompts: [
      'What tools do you already possess that you are neglecting to use?',
      'How can you align your mental focus with your heartfelt values today?',
      'Where is your will asking to be translated into immediate, practical action?'
    ],
    affirmation: 'I hold the power to manifest my soul\'s truth through focused and deliberate action.'
  },
  {
    id: 'priestess',
    name: 'THE HIGH PRIESTESS',
    number: 2,
    keywords: 'Intuition • Mystery • Sacred Stillness',
    symbolism: 'The keeper of the subconscious gate, floating in the quiet space behind the veil.',
    reflection: 'There is a deeper current running beneath your current circumstances. Trust the silent knowing over external noise.',
    guidance: 'Withdraw your attention from worldly demands for a moment. The answers you seek are written in your silence.',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The High Priestess embodies the divine feminine, intuition, hidden knowledge, and spiritual mystery. She advises patience, waiting, and listening to the inner voice.',
    element: 'Water',
    planet: 'Moon',
    numerology: '2 (Balance, duality, connection)',
    history: 'Historically associated with Pope Joan, symbolizing deep spiritual authority held quietly and non-traditionally.',
    lightMeaning: 'Deep intuitive knowing, sacred stillness, trust in divine timing, and tapping into the sub-conscious database.',
    shadowMeaning: 'Ignoring your inner promptings, superficial understanding, hiding secrets, or resisting quiet reflection.',
    loveMeaning: 'A time for deeper, silent energetic connection, honoring unspoken mutual boundaries, and avoiding forced answers.',
    careerMeaning: 'Relying on strategic intuition, observing background dynamics before making major choices, and keeping plans confidential.',
    spiritualMeaning: 'Floating peacefully behind the veil of the material world, acknowledging that mystery is a sacred teacher.',
    energyType: 'receptive',
    reflectionPrompts: [
      'What is your quietest inner voice trying to tell you right now?',
      'How can you create a sanctuary of complete silence in your daily routine?',
      'What hidden current or pattern are you currently sensing beneath the surface?'
    ],
    affirmation: 'I am deeply connected to my inner wisdom and trust the quiet guidance of my soul.'
  },
  {
    id: 'empress',
    name: 'THE EMPRESS',
    number: 3,
    keywords: 'Abundance • Creation • Sensory Grace',
    symbolism: 'The rich, velvet unfolding of nature, sensory beauty, and unconditional love.',
    reflection: 'You are entering a fertile field of experience. Allow your ideas, relationships, or creative projects to mature naturally.',
    guidance: 'Nurture yourself and those around you. True abundance is felt through the senses, connection, and deep appreciation of the present.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Empress represents the Earth Mother, fertility, domestic harmony, creativity, and luxury. She reminds us to connect with nature and our physical bodies.',
    element: 'Earth',
    planet: 'Venus',
    numerology: '3 (Growth, expression, synthesis)',
    history: 'Depicted as a crowned queen, often in a lush wheat field, representing the ancient Roman goddess Ceres and harvest cycles.',
    lightMeaning: 'Nurturing creativity, connection to the natural world, boundless abundance, and expressing absolute sensory grace.',
    shadowMeaning: 'Over-protectiveness, smothering behavior, feeling creatively blocked, or neglecting your physical and sensory needs.',
    loveMeaning: 'Deep warmth, emotional fertility, unconditional acceptance, and celebrating physical and sensual pleasure.',
    careerMeaning: 'A highly creative, generative phase. Projects grow organically and flourish through cooperative, nurturing environments.',
    spiritualMeaning: 'Finding the sacred within the material world, celebrating natural beauty, and alignment with mother earth.',
    energyType: 'receptive',
    reflectionPrompts: [
      'In what ways can you actively nurture your body and senses today?',
      'What creative spark in your life is asking to be fed and allowed to mature?',
      'How can you open your heart to receive the abundance already surrounding you?'
    ],
    affirmation: 'I am a natural channel for abundance, creativity, and unconditional love.'
  },
  {
    id: 'emperor',
    name: 'THE EMPEROR',
    number: 4,
    keywords: 'Structure • Sovereignty • Clear Boundaries',
    symbolism: 'An unshakeable mountain peak, providing safe harbor and structural integrity.',
    reflection: 'Clarity, leadership, and structured discipline are your allies. Order is not restrictive; it is the skeleton that supports flight.',
    guidance: 'Where in your life do you need to step forward as the ultimate authority? Set kind but unyielding boundaries.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Emperor represents authority, paternal influence, solid foundation, and protective structures. It governs law, order, and strategic wisdom.',
    element: 'Fire',
    planet: 'Aries / Mars',
    numerology: '4 (Stability, form, physical boundaries)',
    history: 'The Emperor holds an orb and scepter, symbols of mastery over his domain, reflecting historical monarchs.',
    lightMeaning: 'Clear leadership, establishing protective boundaries, structural integrity, and sovereign command of your space.',
    shadowMeaning: 'Rigidity, control struggles, overbearing structure, or conversely, a complete lack of personal discipline.',
    loveMeaning: 'Establishing safe structures, mutual commitments, and clear boundaries that respect each partner\'s individual sovereignty.',
    careerMeaning: 'Organizing chaos into structured systems, taking decisive authority, and setting solid business foundations.',
    spiritualMeaning: 'Embodying spiritual discipline and realizing that order supports the free flow of your highest soul path.',
    energyType: 'stabilizing',
    reflectionPrompts: [
      'Where do you need to establish firmer boundaries to protect your creative energy?',
      'How can structure and daily discipline support your personal freedom right now?',
      'What area of your life is asking you to step up as a wise, sovereign protector?'
    ],
    affirmation: 'I stand sovereign in my truth, creating solid structures that support my growth.'
  },
  {
    id: 'hierophant',
    name: 'THE HIEROPHANT',
    number: 5,
    keywords: 'Wisdom • Lineage • Sacred Practice',
    symbolism: 'The bridge between historic tradition and modern spiritual integration.',
    reflection: 'Connecting with teachers, ancient lineages, or structured study can ground your personal spiritual search.',
    guidance: 'Honor the practices that have stood the test of time. Seek mentors or frameworks that elevate your understanding.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Hierophant governs traditional belief systems, education, spiritual counsel, and institutional paths. It counsels group learning and ethical guidance.',
    element: 'Earth',
    planet: 'Taurus',
    numerology: '5 (Change, conflict, spiritual seeking)',
    history: 'Also known as Le Pape in French decks, representing the high priest or bridge-builder between mundane and sacred worlds.',
    lightMeaning: 'Sacred mentoring, alignment with historical wisdom, structured learning, and honoring spiritual lineages.',
    shadowMeaning: 'Blind conformity, dogmatic beliefs, rigidity, or resisting any form of structure or guidance.',
    loveMeaning: 'Traditional relationship milestones, shared values, and building deep mutual trust based on shared spiritual beliefs.',
    careerMeaning: 'Working within structured institutions, pursuing higher training, or taking on a mentoring role for others.',
    spiritualMeaning: 'Bridging the physical and divine through daily practices, rituals, and the timeless study of universal law.',
    energyType: 'stabilizing',
    reflectionPrompts: [
      'What timeless spiritual practices or rituals make you feel most grounded?',
      'Who are the wise mentors or lineage teachings that speak to your soul?',
      'Where are you conforming to societal expectations at the expense of your truth?'
    ],
    affirmation: 'I honor the sacred lineage of wisdom and translate deep truth into daily practice.'
  },
  {
    id: 'lovers',
    name: 'THE LOVERS',
    number: 6,
    keywords: 'Alignment • Choices • Devoted Resonance',
    symbolism: 'The beautiful meeting of dualities in perfect harmony and mutual respect.',
    reflection: 'This is a season of deep integration and choice. True alignment requires choosing from your deepest core values, not convenience.',
    guidance: 'Ensure your decisions reflect your soul\'s absolute truth. Harmony comes from authentic, honest relationships.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Lovers represents physical and emotional harmony, sacred contracts, mutual trust, and crucial moral crossroads that shape your path.',
    element: 'Air',
    planet: 'Gemini',
    numerology: '6 (Harmony, adjustment, relationships)',
    history: 'In earlier tarot decks, Le Amoureux depicted a young man standing between two paths, symbolizing a crucial developmental choice.',
    lightMeaning: 'Deep personal alignment, choosing with complete integrity, intimate partnerships, and healing dualities.',
    shadowMeaning: 'Disharmony, avoiding difficult choices, values misalignment, or seeking external validation rather than inner unity.',
    loveMeaning: 'Perfect emotional resonance, sacred union, mutual vulnerability, and making joint choices with integrity.',
    careerMeaning: 'Collaborative projects, successful partnerships, and aligning your work style with your highest ethics.',
    spiritualMeaning: 'Integrating the inner masculine and feminine, aligning mind and heart, and choosing the path of devotion.',
    energyType: 'transitional',
    reflectionPrompts: [
      'What does your heart truly value, and do your choices actively reflect that?',
      'In what relationship are you holding back from authentic vulnerability?',
      'What critical crossroads are you currently facing, and what is the high-integrity choice?'
    ],
    affirmation: 'I choose with complete integrity, aligning my heart with my highest truth.'
  },
  {
    id: 'chariot',
    name: 'THE CHARIOT',
    number: 7,
    keywords: 'Willpower • Direction • Focused Momentum',
    symbolism: 'Harnessing opposite forces to pull in a single, focused direction of growth.',
    reflection: 'Momentum is building. By aligning your mind, emotions, and willpower, you can move through any obstacle with grace.',
    guidance: 'Stay committed to your chosen trajectory. Discipline and focused intent will help you master internal and external dualities.',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Chariot signifies triumph over adversity, sheer determination, control, and successful journeys through focused effort.',
    element: 'Water',
    planet: 'Cancer',
    numerology: '7 (Wisdom, challenge, spiritual growth)',
    history: 'Depicts a hero in a chariot drawn by two opposing sphinxes, representing the control of dual passions and drives.',
    lightMeaning: 'Focused determination, personal mastery, victory through alignment, and balanced momentum.',
    shadowMeaning: 'Lack of control, aggressive force, losing direction, or feeling overwhelmed by conflicting desires.',
    loveMeaning: 'Actively driving a relationship forward with conscious communication, mastering reactivity, and joint goals.',
    careerMeaning: 'Unyielding focus on career goals, overcoming professional hurdles, and spearheading complex projects successfully.',
    spiritualMeaning: 'Steering your physical body and emotional vehicle toward higher consciousness with dynamic willpower.',
    energyType: 'active',
    reflectionPrompts: [
      'What opposing forces or desires are pulling you in different directions?',
      'How can you bring deeper discipline and focus to your highest creative goals?',
      'Where in your life do you need to take the reins and steer with absolute clarity?'
    ],
    affirmation: 'I steer my life with clear intent, mastering my emotions to build sacred momentum.'
  },
  {
    id: 'strength',
    name: 'STRENGTH',
    number: 8,
    keywords: 'Compassion • Fortitude • Soft Mastery',
    symbolism: 'Taming the wild lion of our primal urges through gentle, loving-kindness rather than force.',
    reflection: 'True power lies not in aggressive dominance, but in persistent, loving endurance and self-compassion.',
    guidance: 'Approach your vulnerabilities and fears with absolute gentleness. Healing comes from soothing, not fighting, your inner storms.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'Strength symbolizes courage, patience, inner resolve, and the power of soft influence. It marks a period of personal endurance and emotional mastery.',
    element: 'Fire',
    planet: 'Leo',
    numerology: '8 (Power, balance, infinity, manifestation)',
    history: 'Known as La Force, often represented by the mythical heroine taming a lion with bare, graceful hands.',
    lightMeaning: 'Gentle power, radical self-compassion, patience with yourself, quiet fortitude, and taming reactive instincts.',
    shadowMeaning: 'Overwhelming raw emotion, self-doubt, relying on force instead of love, or feeling spiritually exhausted.',
    loveMeaning: 'Approaching relationship difficulties with infinite patience, soothing old wounds, and holding a compassionate space.',
    careerMeaning: 'Resilience under pressure, quiet persuasion rather than aggressive demands, and steady professional mastery.',
    spiritualMeaning: 'Integrating animal instincts with spiritual heart consciousness, showing that soft grace overcomes harsh ego.',
    energyType: 'stabilizing',
    reflectionPrompts: [
      'Where are you fighting yourself instead of offering deep compassion?',
      'What part of your instinctual nature is asking to be met with gentle understanding?',
      'How can you practice quiet resilience in your current circumstances?'
    ],
    affirmation: 'I tame my fears with love and hold space for my soul\'s quiet strength.'
  },
  {
    id: 'hermit',
    name: 'THE HERMIT',
    number: 9,
    keywords: 'Solitude • Inner Lantern • Self-Knowledge',
    symbolism: 'A single lantern lighting the path, highlighting that wisdom is found by looking inward.',
    reflection: 'It is time to retreat temporarily from external expectations. Your inner light is the only compass you need right now.',
    guidance: 'Carve out spaces of absolute quiet. Use self-reflection, writing, or contemplation to illuminate your personal truth.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Hermit represents introspection, seeking guidance from within, spiritual retreat, and the profound wisdom of quiet, intentional solitude.',
    element: 'Earth',
    planet: 'Virgo',
    numerology: '9 (Completion, wisdom, humanitarianism)',
    history: 'Associated with the ancient Greek philosopher Diogenes, who carried a lantern in broad daylight looking for an honest soul.',
    lightMeaning: 'Deep contemplation, spiritual retreat, finding comfort in solitude, and letting your inner light guide your actions.',
    shadowMeaning: 'Isolation, social withdrawal due to fear, refusing wise counsel, or losing touch with practical reality.',
    loveMeaning: 'Taking space to clarify your personal values, loving yourself first, and connecting from a place of self-wholeness.',
    careerMeaning: 'Stepping back to evaluate your vocational calling, researching thoroughly, or acting as a silent, wise advisor.',
    spiritualMeaning: 'Walking the silent inner pathways of the soul, knowing that the ultimate teacher is found within your own heart.',
    energyType: 'receptive',
    reflectionPrompts: [
      'What parts of your truth can only be heard when you step away from others?',
      'How can you treat your solitude as a sacred retreat rather than empty loneliness?',
      'What is your inner lantern currently lighting up on the immediate path ahead?'
    ],
    affirmation: 'I withdraw from external noise to bathe in the brilliant light of my inner truth.'
  },
  {
    id: 'wheel',
    name: 'WHEEL OF FORTUNE',
    number: 10,
    keywords: 'Cycles • Luck • Evolutionary Flow',
    symbolism: 'The turning wheel of life, reminding us that both joy and challenge are temporary cycles.',
    reflection: 'Change is the only constant. By centering yourself at the axle of the wheel, you remain unshakeable regardless of external turns.',
    guidance: 'Observe the patterns repeating in your life. What is this cycle trying to teach you about letting go or taking action?',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Wheel represents destiny, luck, sudden changes, karma, and the inevitable ups and downs of human existence.',
    element: 'Fire / All Elements',
    planet: 'Jupiter',
    numerology: '10 (Completion of a cycle, new beginnings)',
    history: 'Inspired by the medieval concept of Rota Fortunae, where kings fall and beggars rise, representing impermanence.',
    lightMeaning: 'Synchronicity, major turning points, trusting evolutionary cycles, and finding comfort in cosmic patterns.',
    shadowMeaning: 'Resisting inevitable change, feeling victimized by bad luck, or clinging to a passing state of affairs.',
    loveMeaning: 'A turning point in relationships, sudden synchronicities, or learning repetitive relational lessons once and for all.',
    careerMeaning: 'Sudden developments, shifting tides, unexpected opportunities, and adapting creatively to new market demands.',
    spiritualMeaning: 'Finding quiet peace at the center axis of life, remaining unmoved by external fluctuations.',
    energyType: 'transitional',
    reflectionPrompts: [
      'What repeating cycle or pattern is currently asking for your conscious awareness?',
      'How can you remain centered and calm at the axle while your life spins on the wheel?',
      'What represents a "good fortune" that you are currently taking for granted?'
    ],
    affirmation: 'I flow gracefully with the turning cycles of life, centered in my own unshakeable peace.'
  },
  {
    id: 'justice',
    name: 'JUSTICE',
    number: 11,
    keywords: 'Truth • Balance • Karmic Clarity',
    symbolism: 'Perfect scales balanced on a sword of truth, demanding objectivity and personal integrity.',
    reflection: 'Truth is calling for your recognition. Approach your current situation with cold, loving clarity and complete honesty.',
    guidance: 'Take full responsibility for your choices. Act from a space of fairness, clarity, and deep personal integrity.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'Justice signifies fairness, truth, legal matters, cause and effect (karma), and the need for balanced, objective decision-making.',
    element: 'Air',
    planet: 'Libra',
    numerology: '11 (Mastery, balance, dynamic alignment)',
    history: 'Derived from Astraea, the Greek goddess of innocence and purity, who ascended to heaven as the constellation Libra.',
    lightMeaning: 'Absolute integrity, objective truth, fair resolutions, taking responsibility, and balanced perspectives.',
    shadowMeaning: 'Dishonesty, avoiding accountability, unfair bias, or feeling paralyzed by indecision and moral conflicts.',
    loveMeaning: 'Honest contracts, equal sharing of emotional labor, transparency, and resolving disputes with mature fairness.',
    careerMeaning: 'Signing legal contracts, objective evaluations of progress, and resolving professional matters with high ethics.',
    spiritualMeaning: 'Living in alignment with cosmic balance and understanding that every action carries an energetic harvest.',
    energyType: 'stabilizing',
    reflectionPrompts: [
      'What truth are you currently avoiding or resisting in your life?',
      'How can you bring deeper fairness and balance to your closest relationships?',
      'In what area of your life must you take full, sovereign responsibility today?'
    ],
    affirmation: 'I speak my truth clearly, live with total integrity, and trust the scales of life to balance.'
  },
  {
    id: 'star',
    name: 'THE STAR',
    number: 17,
    keywords: 'Hope • Renewal • Cosmic Alignment',
    symbolism: 'A brilliant beacon shining down, pouring restorative water onto the earth and sea.',
    reflection: 'Healing often arrives quietly, consistently, and without fanfare. You are safe to let your guard down and trust the path.',
    guidance: 'Notice where life is inviting you to slow down, reconnect with your inner universe, and embrace beautiful possibilities.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Star offers profound spiritual protection, hope, faith, healing, and alignment. It indicates a period of recovery and peace after a storm.',
    element: 'Air',
    planet: 'Aquarius',
    numerology: '17 (8) (Inner resolve, high manifestation, alignment)',
    history: 'In ancient cultures, associated with Sirius, the Dog Star, whose rising marked the healing flooding of the Nile.',
    lightMeaning: 'Rejuvenating hope, quiet healing of past wounds, divine inspiration, and feeling aligned with cosmic grace.',
    shadowMeaning: 'Despair, lack of faith, feeling disconnected from your dreams, or ignoring your physical recovery.',
    loveMeaning: 'Open-hearted vulnerability, spiritual compatibility, mutual healing, and trust returning after a challenging phase.',
    careerMeaning: 'Following inspiring callings, recognition of creative visions, and long-term professional renewal.',
    spiritualMeaning: 'Bathing in the luminous energy of your higher self, realizing that you are always protected and guided.',
    energyType: 'receptive',
    reflectionPrompts: [
      'What quiet healing processes are currently asking for your gentle patience?',
      'Where is your soul inviting you to rest, recover, and let your guard down?',
      'What beautiful long-term vision is currently inspiring your creative path?'
    ],
    affirmation: 'I am a vessel of light, healing quietly, and flowing in absolute alignment with my destiny.'
  },
  {
    id: 'moon',
    name: 'THE MOON',
    number: 18,
    keywords: 'Subconscious • Wild Instincts • Illusion',
    symbolism: 'A luminous moon hanging in the night, illuminating wild landscapes and the deep ocean of the subconscious.',
    reflection: 'Not everything is as it appears. Allow your intuition and dreams to guide you through the beautiful, misty terrain of your subconscious.',
    guidance: 'Honor your wild, instinctual side. Do not fear the shadows; they hold the unintegrated parts of your immense strength.',
    image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Moon governs dreams, psychic pathways, illusions, anxieties, and the integration of the deep subconscious shadow self.',
    element: 'Water',
    planet: 'Pisces',
    numerology: '18 (9) (Completing deep cycles of spiritual mystery)',
    history: 'Historically shows a lobster or crayfish crawling out of the water, representing the earliest stages of emerging consciousness.',
    lightMeaning: 'subconscious exploration, honoring dreams, vivid intuition, integrating shadows, and understanding wild instincts.',
    shadowMeaning: 'Fear, paranoia, self-deception, navigating illusions, or feeling lost in emotional waters.',
    loveMeaning: 'Unspoken emotional current, psychic connection, but also a warning to avoid projecting past fears onto your partner.',
    careerMeaning: 'Avoiding unclear contracts, trusting gut instincts about business associates, and channeled creative genius.',
    spiritualMeaning: 'Navigating the mystical, fluid dreamtime, respecting the dark night of the soul as a deep womb for rebirth.',
    energyType: 'receptive',
    reflectionPrompts: [
      'What dreams or intuitive feelings have you been ignoring or writing off?',
      'How can you welcome your unintegrated shadow parts with open, loving arms?',
      'Where are you letting subconscious fears create illusions in your current reality?'
    ],
    affirmation: 'I walk through the mists of mystery with calm confidence, guided by my deep intuition.'
  },
  {
    id: 'sun',
    name: 'THE SUN',
    number: 19,
    keywords: 'Vitality • Radiant Joy • Full Clarity',
    symbolism: 'Warm, life-giving sunlight illuminating a brilliant sunflower field of joy and expansion.',
    reflection: 'A period of absolute clarity, abundance, and warm joy is bathing your experience. Radiate your light without reservation.',
    guidance: 'Celebrate your existence. Embrace playful creativity, express gratitude, and allow your authentic self to be seen clearly by the world.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The Sun represents success, abundance, warm vitality, health, happiness, and complete alignment between the outer self and inner spirit.',
    element: 'Fire',
    planet: 'Sun',
    numerology: '19 (1) (Ultimate illumination, returning to unity)',
    history: 'Typically depicts innocent children playing under a shining sun, representing pure joy and spiritual rebirth.',
    lightMeaning: 'Radiant success, vibrant health, supreme clarity, youthful optimism, and complete alignment with your joy.',
    shadowMeaning: 'Temporary lack of clarity, hidden light, over-confidence, or neglecting to celebrate small victories.',
    loveMeaning: 'Warm, open devotion, mutual celebration, happiness, and absolute transparency in romantic partnerships.',
    careerMeaning: 'Outstanding recognition, creative breakthroughs, leadership success, and manifesting major professional abundance.',
    spiritualMeaning: 'Waking up to your divine nature, radiating warmth, and standing fully illuminated as a beacon of joy.',
    energyType: 'active',
    reflectionPrompts: [
      'What part of your life is finally ready to shine in full, glorious clarity?',
      'How can you cultivate a sense of playful gratitude and child-like joy today?',
      'What would it look like to express your authentic self without any filters?'
    ],
    affirmation: 'I allow my authentic light to shine fully and embrace the warmth of complete clarity.'
  },
  {
    id: 'world',
    name: 'THE WORLD',
    number: 21,
    keywords: 'Wholeness • Integration • Triumph',
    symbolism: 'The cosmic dancer celebrating the completion of a grand evolutionary journey.',
    reflection: 'You are integrating a massive cycle of growth. Celebrate how far you have come; every aspect of your life is weaving into a beautiful, coherent pattern.',
    guidance: 'Embrace your current sense of wholeness. Step into your next cycle with wisdom, deep peace, and profound self-worth.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    traditionalMeaning: 'The World signifies completion, travel, spiritual integration, cosmic harmony, and the successful attainment of your soul\'s deep desires.',
    element: 'Earth / All Elements',
    planet: 'Saturn',
    numerology: '21 (3) (Dynamic completion, creative synthesis, wholeness)',
    history: 'Known as Le Monde, depicting a central figure inside a laurel wreath, surrounded by creatures representing the cardinal zodiac signs.',
    lightMeaning: 'Integrating life cycles, beautiful completions, global perspective, profound achievement, and inner wholeness.',
    shadowMeaning: 'Creative stagnancy, unfinished business, refusing closure, or feeling blocked on the final step of a cycle.',
    loveMeaning: 'Deep spiritual compatibility, feeling completely secure in yourself and your connection, and celebrating mutual milestones.',
    careerMeaning: 'Successful project delivery, achieving high professional recognition, and stepping into global or expansive roles.',
    spiritualMeaning: 'Becoming the cosmic dancer, realizing that the beginning and end are connected in perfect, sacred harmony.',
    energyType: 'stabilizing',
    reflectionPrompts: [
      'What major cycle of your life is currently drawing to a successful and beautiful close?',
      'How can you celebrate and honor the massive lessons and growth you have achieved?',
      'Where in your life are you resisting closure and avoiding a clean, new slate?'
    ],
    affirmation: 'I celebrate my complete journey and step into my next cycle with wisdom and peace.'
  }
];
