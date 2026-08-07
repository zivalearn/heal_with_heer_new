export interface TarotCard78 {
  id: string;
  name: string;
  number: number;
  arcana: 'Major' | 'Minor';
  suit: 'Wands' | 'Cups' | 'Swords' | 'Pentacles' | 'None';
  keywords: string[];
  upright: string;
  reversed: string;
  image: string;
}

const baseImgUrl = "https://raw.githubusercontent.com/gregoryortega/tarot-api/master/public/cards";

export const TAROT_CARDS_78: TarotCard78[] = [
  // ==========================================
  // MAJOR ARCANA (0 - 21)
  // ==========================================
  {
    id: "m00",
    name: "The Fool",
    number: 0,
    arcana: "Major",
    suit: "None",
    keywords: ["Beginnings", "Spontaneity", "Faith", "Pure Potential"],
    upright: "A leap of faith, fresh beginnings, unlimited opportunities, and trusting the universe's flow.",
    reversed: "Recklessness, taking foolish risks, hesitation, fear of the unknown, or blocked initiation.",
    image: `${baseImgUrl}/m00.jpg`
  },
  {
    id: "m01",
    name: "The Magician",
    number: 1,
    arcana: "Major",
    suit: "None",
    keywords: ["Manifestation", "Willpower", "Resourcefulness", "Skill"],
    upright: "Aligning your tools, thoughts, and intentions to manifest desires. Masterful creative command.",
    reversed: "Manipulative behavior, wasted talent, unfocused willpower, or unexpressed capability.",
    image: `${baseImgUrl}/m01.jpg`
  },
  {
    id: "m02",
    name: "The High Priestess",
    number: 2,
    arcana: "Major",
    suit: "None",
    keywords: ["Intuition", "Subconscious", "Sacred Mystery", "Stillness"],
    upright: "Connecting with inner wisdom, trusting silent knowing, and awaiting divine timing.",
    reversed: "Ignoring intuition, superficial understanding, hidden motives, or fear of stillness.",
    image: `${baseImgUrl}/m02.jpg`
  },
  {
    id: "m03",
    name: "The Empress",
    number: 3,
    arcana: "Major",
    suit: "None",
    keywords: ["Abundance", "Nurturing", "Creativity", "Nature"],
    upright: "Organic growth, creative expression, sensory pleasure, and unconditional nurturing support.",
    reversed: "Creative stagnation, smothering boundaries, neglect of self, or disharmony in the home.",
    image: `${baseImgUrl}/m03.jpg`
  },
  {
    id: "m04",
    name: "The Emperor",
    number: 4,
    arcana: "Major",
    suit: "None",
    keywords: ["Authority", "Structure", "Boundaries", "Sovereignty"],
    upright: "Establishing healthy order, protective structures, stable foundations, and solid discipline.",
    reversed: "Rigid control, lack of discipline, power struggles, or abuse of authority.",
    image: `${baseImgUrl}/m04.jpg`
  },
  {
    id: "m05",
    name: "The Hierophant",
    number: 5,
    arcana: "Major",
    suit: "None",
    keywords: ["Tradition", "Spiritual Wisdom", "Lineage", "Mentorship"],
    upright: "Honoring ancient practices, seeking structured education, following ethics, and guidance from mentors.",
    reversed: "Dogmatic beliefs, blind conformity, rebellious unorthodoxy, or outdated structures.",
    image: `${baseImgUrl}/m05.jpg`
  },
  {
    id: "m06",
    name: "The Lovers",
    number: 6,
    arcana: "Major",
    suit: "None",
    keywords: ["Alignment", "Choices", "Harmony", "Relationships"],
    upright: "Perfect emotional resonance, choices made with high integrity, harmony, and deeper union.",
    reversed: "Disharmony, misalignment of values, avoidance of crucial choices, or internal conflict.",
    image: `${baseImgUrl}/m06.jpg`
  },
  {
    id: "m07",
    name: "The Chariot",
    number: 7,
    arcana: "Major",
    suit: "None",
    keywords: ["Willpower", "Momentum", "Direction", "Control"],
    upright: "Harnessing opposing forces, focused determination, overcoming obstacles, and swift victory.",
    reversed: "Loss of direction, aggressive force, lack of control, or hitting major roadblocks.",
    image: `${baseImgUrl}/m07.jpg`
  },
  {
    id: "m08",
    name: "Strength",
    number: 8,
    arcana: "Major",
    suit: "None",
    keywords: ["Fortitude", "Compassion", "Patience", "Soft Mastery"],
    upright: "Inner resilience, gentle control of base instincts, infinite patience, and silent courage.",
    reversed: "Self-doubt, raw reactivity, weakness of will, or overbearing use of physical force.",
    image: `${baseImgUrl}/m08.jpg`
  },
  {
    id: "m09",
    name: "The Hermit",
    number: 9,
    arcana: "Major",
    suit: "None",
    keywords: ["Soul Searching", "Inner Guidance", "Solitude", "Wisdom"],
    upright: "Withdrawing to reflect, finding your inner lantern, quiet contemplation, and spiritual retreat.",
    reversed: "Loneliness, toxic isolation, paranoia, or refusal to take necessary time for reflection.",
    image: `${baseImgUrl}/m09.jpg`
  },
  {
    id: "m10",
    name: "Wheel of Fortune",
    number: 10,
    arcana: "Major",
    suit: "None",
    keywords: ["Destiny", "Change", "Luck", "Life Cycles"],
    upright: "Sudden shifts, cosmic alignment, a turn for the better, and understanding life's natural cycles.",
    reversed: "Resisting change, a string of bad luck, breaking bad habits, or temporary chaos.",
    image: `${baseImgUrl}/m10.jpg`
  },
  {
    id: "m11",
    name: "Justice",
    number: 11,
    arcana: "Major",
    suit: "None",
    keywords: ["Fairness", "Truth", "Cause & Effect", "Law"],
    upright: "Karmic balance, objective truth, legal resolutions, and taking responsibility for actions.",
    reversed: "Unfair treatment, dishonesty, unaccountability, or legal/ethical complications.",
    image: `${baseImgUrl}/m11.jpg`
  },
  {
    id: "m12",
    name: "The Hanged Man",
    number: 12,
    arcana: "Major",
    suit: "None",
    keywords: ["Perspective", "Sacrifice", "Letting Go", "Suspension"],
    upright: "Surrendering control, viewing things from a new angle, pausing for clarity, and self-sacrifice.",
    reversed: "Ego resistance, feeling stalled, stagnation, useless sacrifice, or wasting energy.",
    image: `${baseImgUrl}/m12.jpg`
  },
  {
    id: "m13",
    name: "Death",
    number: 13,
    arcana: "Major",
    suit: "None",
    keywords: ["Transformation", "Endings", "Rebirth", "Transition"],
    upright: "The closing of a major life cycle, letting go of what no longer serves, and clearing space for rebirth.",
    reversed: "Fear of change, resisting necessary endings, repeating painful cycles, or slow transitions.",
    image: `${baseImgUrl}/m13.jpg`
  },
  {
    id: "m14",
    name: "Temperance",
    number: 14,
    arcana: "Major",
    suit: "None",
    keywords: ["Alchemy", "Balance", "Moderation", "Integration"],
    upright: "Perfect blending of opposites, finding middle ground, healing, and patience in synthesis.",
    reversed: "Imbalance, excess, conflicting goals, lack of spiritual alignment, or hasty choices.",
    image: `${baseImgUrl}/m14.jpg`
  },
  {
    id: "m15",
    name: "The Devil",
    number: 15,
    arcana: "Major",
    suit: "None",
    keywords: ["Shadow Self", "Attachment", "Illusion", "Materialism"],
    upright: "Confronting unhealthy attachments, recognizing codependency, identifying illusions, and facing fears.",
    reversed: "Releasing limiting beliefs, breaking free from addiction, reclaiming personal power, and shadow integration.",
    image: `${baseImgUrl}/m15.jpg`
  },
  {
    id: "m16",
    name: "The Tower",
    number: 16,
    arcana: "Major",
    suit: "None",
    keywords: ["Sudden Shift", "Revelation", "Breakthrough", "Liberation"],
    upright: "The collapse of false structures, sudden spiritual awakening, truth cutting through illusion, and hard-won freedom.",
    reversed: "Avoiding a necessary crisis, resisting truth, gradual decay, or fear of dismantling old habits.",
    image: `${baseImgUrl}/m16.jpg`
  },
  {
    id: "m17",
    name: "The Star",
    number: 17,
    arcana: "Major",
    suit: "None",
    keywords: ["Hope", "Healing", "Serenity", "Divine Inspiration"],
    upright: "Gentle spiritual healing, absolute hope, serenity after the storm, and alignment with destiny.",
    reversed: "Temporary loss of faith, discouragement, creative drought, or ignoring spiritual guidance.",
    image: `${baseImgUrl}/m17.jpg`
  },
  {
    id: "m18",
    name: "The Moon",
    number: 18,
    arcana: "Major",
    suit: "None",
    keywords: ["Illusion", "Fear", "Subconscious", "Dreams"],
    upright: "Navigating deep emotions, vivid dream insights, clarifying projections, and stepping through mystery.",
    reversed: "Clarity returning, fear subsiding, unmasking illusions, or resolving emotional confusion.",
    image: `${baseImgUrl}/m18.jpg`
  },
  {
    id: "m19",
    name: "The Sun",
    number: 19,
    arcana: "Major",
    suit: "None",
    keywords: ["Vitality", "Joy", "Clarity", "Abundance"],
    upright: "Brilliant success, supreme clarity, youthful optimism, warm vitality, and celebrating your truth.",
    reversed: "Temporary lack of clarity, hidden light, over-confidence, or minor delays in joy.",
    image: `${baseImgUrl}/m19.jpg`
  },
  {
    id: "m20",
    name: "Judgement",
    number: 20,
    arcana: "Major",
    suit: "None",
    keywords: ["Awakening", "Rebirth", "Absolution", "Calling"],
    upright: "Hearing your soul's calling, making major life decisions, forgiveness, and absolute self-evaluation.",
    reversed: "Self-doubt, ignoring your inner call, harsh self-criticism, or refusing to close a past chapter.",
    image: `${baseImgUrl}/m20.jpg`
  },
  {
    id: "m21",
    name: "The World",
    number: 21,
    arcana: "Major",
    suit: "None",
    keywords: ["Completion", "Integration", "Wholeness", "Triumph"],
    upright: "Successful completion of a cycle, spiritual integration, ultimate wholeness, and international expansion.",
    reversed: "Stagnancy, refusal to find closure, unfinished business, or feeling blocked on the final step.",
    image: `${baseImgUrl}/m21.jpg`
  },

  // ==========================================
  // WANDS (w01 - w14)
  // ==========================================
  {
    id: "w01",
    name: "Ace of Wands",
    number: 1,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Inspiration", "New Initiative", "Passion", "Potential"],
    upright: "A sudden burst of creative energy, a passionate new project, raw inspiration, and potential.",
    reversed: "Wasted creative energy, delays in execution, lack of passion, or a false start.",
    image: `${baseImgUrl}/w01.jpg`
  },
  {
    id: "w02",
    name: "Two of Wands",
    number: 2,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Planning", "Future Decisions", "Discovery", "Expansion"],
    upright: "Looking at the horizon, strategic planning, stepping out of comfort zones, and choosing expansion.",
    reversed: "Fear of taking risks, lack of planning, staying in comfort zones, or delays.",
    image: `${baseImgUrl}/w02.jpg`
  },
  {
    id: "w03",
    name: "Three of Wands",
    number: 3,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Foresight", "Enterprise", "Collaboration", "Expectation"],
    upright: "Ships returning to harbor, seeing efforts bear fruit, expanding horizons, and enterprise.",
    reversed: "Delays in results, lack of foresight, cooperative conflict, or feeling disappointed.",
    image: `${baseImgUrl}/w03.jpg`
  },
  {
    id: "w04",
    name: "Four of Wands",
    number: 4,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Celebration", "Homecoming", "Community", "Foundation"],
    upright: "Joyful celebration, safe and happy home foundations, welcoming community, and deep peace.",
    reversed: "Minor family tension, delayed celebration, transition at home, or unaligned foundations.",
    image: `${baseImgUrl}/w04.jpg`
  },
  {
    id: "w05",
    name: "Five of Wands",
    number: 5,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Competition", "Conflict", "Brainstorming", "Rivalry"],
    upright: "Healthy competition, conflicting opinions, brainstorming struggles, or minor disagreements.",
    reversed: "Avoiding conflict, resolving differences, harmony returning, or unproductive arguing.",
    image: `${baseImgUrl}/w05.jpg`
  },
  {
    id: "w06",
    name: "Six of Wands",
    number: 6,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Victory", "Public Acclaim", "Confidence", "Recognition"],
    upright: "Riding high in triumph, receiving public recognition, self-confidence, and major milestones.",
    reversed: "Ego issues, lack of recognition, private struggles, or fall from grace.",
    image: `${baseImgUrl}/w06.jpg`
  },
  {
    id: "w07",
    name: "Seven of Wands",
    number: 7,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Defensiveness", "Courage", "Stand Tall", "Conviction"],
    upright: "Defending your position, standing tall against competition, immense courage, and boundaries.",
    reversed: "Feeling overwhelmed, giving up your ground, compromise, or over-defensiveness.",
    image: `${baseImgUrl}/w07.jpg`
  },
  {
    id: "w08",
    name: "Eight of Wands",
    number: 8,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Rapid Motion", "Swiftness", "Clear Messages", "Alignment"],
    upright: "Sudden acceleration, fast-paced events, clear communication, and swift, positive resolutions.",
    reversed: "Major delays, chaotic speed, miscommunication, or hitting unexpected walls.",
    image: `${baseImgUrl}/w08.jpg`
  },
  {
    id: "w09",
    name: "Nine of Wands",
    number: 9,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Resilience", "Last Stand", "Persist", "Guard"],
    upright: "Standing strong near the finish line, deep inner resilience, guarding boundaries, and persistence.",
    reversed: "Exhaustion, feeling defensive, refusal to ask for help, or giving up at the final hurdle.",
    image: `${baseImgUrl}/w09.jpg`
  },
  {
    id: "w10",
    name: "Ten of Wands",
    number: 10,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Burden", "Over-responsibility", "Stress", "Duty"],
    upright: "Carrying too heavy a load, over-commitment, heavy professional burdens, and extreme duty.",
    reversed: "Releasing burdens, delegation, burnout, or refusal to take on any responsibility.",
    image: `${baseImgUrl}/w10.jpg`
  },
  {
    id: "w11",
    name: "Page of Wands",
    number: 11,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Exploration", "Excitement", "Free Spirit", "Discovery"],
    upright: "A passionate seeker, delivering exciting news, child-like creative wanderlust, and discovery.",
    reversed: "Lack of direction, child-like tantrums, creative blocks, or delayed messages.",
    image: `${baseImgUrl}/w11.jpg`
  },
  {
    id: "w12",
    name: "Knight of Wands",
    number: 12,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Action", "Adventure", "Impulsiveness", "Passion"],
    upright: "Charging forward with adventure, immense passion, dynamic action, and bold courage.",
    reversed: "Recklessness, burns out quickly, unfocused anger, or delayed travel.",
    image: `${baseImgUrl}/w12.jpg`
  },
  {
    id: "w13",
    name: "Queen of Wands",
    number: 13,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Vibrancy", "Warmth", "Confidence", "Self-assurance"],
    upright: "A warm, magnetic presence, extreme confidence, creative fertility, and independent fire.",
    reversed: "Jealousy, temperamental spikes, low self-esteem, or creative burnout.",
    image: `${baseImgUrl}/w13.jpg`
  },
  {
    id: "w14",
    name: "King of Wands",
    number: 14,
    arcana: "Minor",
    suit: "Wands",
    keywords: ["Visionary Leadership", "Command", "Inspiration", "Integrity"],
    upright: "A visionary leader, dramatic command of space, motivating others, and high-integrity fire.",
    reversed: "Dictatorial control, ruthless ambition, lack of vision, or impulsive aggression.",
    image: `${baseImgUrl}/w14.jpg`
  },

  // ==========================================
  // CUPS (c01 - c14)
  // ==========================================
  {
    id: "c01",
    name: "Ace of Cups",
    number: 1,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Emotion", "Love", "Overflow", "Spiritual Intuition"],
    upright: "The emotional cup overflowing, new love, deep compassion, and absolute spiritual alignment.",
    reversed: "Blocked emotions, self-love dry spell, emotional exhaustion, or empty cup.",
    image: `${baseImgUrl}/c01.jpg`
  },
  {
    id: "c02",
    name: "Two of Cups",
    number: 2,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Connection", "Union", "Partnership", "Attraction"],
    upright: "Sacred romantic or business connection, mutual trust, union, and reciprocal appreciation.",
    reversed: "Relational friction, broken agreements, lack of communication, or codependency.",
    image: `${baseImgUrl}/c02.jpg`
  },
  {
    id: "c03",
    name: "Three of Cups",
    number: 3,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Sisterhood", "Friendship", "Celebration", "Collaborative Joy"],
    upright: "Joyful group celebration, true friendship, emotional support systems, and community bonding.",
    reversed: "Gossip, feeling left out, overindulgence, or dynamic group tension.",
    image: `${baseImgUrl}/c03.jpg`
  },
  {
    id: "c04",
    name: "Four of Cups",
    number: 4,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Apathy", "Discontent", "Missed Offer", "Refusal"],
    upright: "Apathy and discontent, ignoring the cup of offer, deep introspection, or temporary withdrawal.",
    reversed: "Awareness returning, accepting support, active participation, or fresh interest.",
    image: `${baseImgUrl}/c04.jpg`
  },
  {
    id: "c05",
    name: "Five of Cups",
    number: 5,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Grief", "Disappointment", "Regret", "Hidden Cups"],
    upright: "Mourning spilled cups, deep grief or disappointment, regret, and forgetting remaining blessings.",
    reversed: "Healing from grief, acceptance, moving forward, or appreciating remaining opportunities.",
    image: `${baseImgUrl}/c05.jpg`
  },
  {
    id: "c06",
    name: "Six of Cups",
    number: 6,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Nostalgia", "Innocence", "Reunion", "Simple Gifts"],
    upright: "Nostalgic memories, sweet child-like innocence, happy reunions, and simple acts of generosity.",
    reversed: "Clinging to the past, childhood trauma, unrealistic projections, or letting go of memory.",
    image: `${baseImgUrl}/c06.jpg`
  },
  {
    id: "c07",
    name: "Seven of Cups",
    number: 7,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Choices", "Illusion", "Daydreams", "Overwhelm"],
    upright: "Too many choices, vivid daydreams, spiritual illusions, and confusion of paths.",
    reversed: "Making firm choices, clearing illusions, focus returning, or realistic alignment.",
    image: `${baseImgUrl}/c07.jpg`
  },
  {
    id: "c08",
    name: "Eight of Cups",
    number: 8,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Walking Away", "Transition", "Deconsecration", "Deeper Search"],
    upright: "Walking away from stable cups toward spiritual growth, necessary transitions, and seeking truth.",
    reversed: "Refusing to leave, fear of transition, stagnation in unhappy states, or returning.",
    image: `${baseImgUrl}/c08.jpg`
  },
  {
    id: "c09",
    name: "Nine of Cups",
    number: 9,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Satisfaction", "Wish Fulfilled", "Gratitude", "Sensory Comfort"],
    upright: "The wish card, deep emotional satisfaction, pure gratitude, and luxurious physical comfort.",
    reversed: "Greed, superficial satisfaction, unfulfilled expectations, or over-indulgence.",
    image: `${baseImgUrl}/c09.jpg`
  },
  {
    id: "c10",
    name: "Ten of Cups",
    number: 10,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Alignment", "Family Harmony", "Pure Contentment", "Sacred Nest"],
    upright: "Radiant emotional harmony, stable family alignment, loving domestic nests, and contentment.",
    reversed: "Domestic friction, unaligned family goals, hidden sadness, or broken home foundations.",
    image: `${baseImgUrl}/c10.jpg`
  },
  {
    id: "c11",
    name: "Page of Cups",
    number: 11,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Intuitive Messages", "Playfulness", "Vulnerability", "Clairvoyance"],
    upright: "A creative child-like messenger, intuitive fish-in-a-cup insights, emotional open-heartedness.",
    reversed: "Emotional insecurity, child-like drama, ignoring dreams, or intuitive blocks.",
    image: `${baseImgUrl}/c11.jpg`
  },
  {
    id: "c12",
    name: "Knight of Cups",
    number: 12,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Romance", "Chivalry", "Inspiration", "Dreamer"],
    upright: "An idealist romantic, pursuing artistic inspiration, offering the cup of love, and chivalry.",
    reversed: "Mood swings, unrealistic projections, deceitful promises, or creative blocks.",
    image: `${baseImgUrl}/c12.jpg`
  },
  {
    id: "c13",
    name: "Queen of Cups",
    number: 13,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Empathy", "Clairaudience", "Compassion", "Holding Space"],
    upright: "Unmatched empathic listening, deep maternal compassion, clairaudient wisdom, and holding space.",
    reversed: "Emotional dependency, absorbing others' pain, boundaries breakdown, or self-pity.",
    image: `${baseImgUrl}/c13.jpg`
  },
  {
    id: "c14",
    name: "King of Cups",
    number: 14,
    arcana: "Minor",
    suit: "Cups",
    keywords: ["Emotional Wisdom", "Calmness", "Diplomacy", "Mastery of Feeling"],
    upright: "Calmness in storms, absolute emotional wisdom, healing diplomacy, and control over feelings.",
    reversed: "Emotional manipulation, cold withdrawal, deep anger, or dependency issues.",
    image: `${baseImgUrl}/c14.jpg`
  },

  // ==========================================
  // SWORDS (s01 - s14)
  // ==========================================
  {
    id: "s01",
    name: "Ace of Swords",
    number: 1,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Clarity", "Intellectual Breakthrough", "Absolute Truth", "Force"],
    upright: "A sudden burst of absolute clarity, razor-sharp truth, cutting through lies, and breakthroughs.",
    reversed: "Mental confusion, harsh communications, lack of focus, or misuse of logic.",
    image: `${baseImgUrl}/s01.jpg`
  },
  {
    id: "s02",
    name: "Two of Swords",
    number: 2,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Stalemate", "Blocked Sight", "Difficult Choice", "Avoidance"],
    upright: "A blindfolded standoff, stalemate of logic, difficult choices, and defensive avoidance.",
    reversed: "Blindfold coming off, making hard choices, resolving stalemates, or emotional overwhelm.",
    image: `${baseImgUrl}/s02.jpg`
  },
  {
    id: "s03",
    name: "Three of Swords",
    number: 3,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Heartbreak", "Grief", "Release", "Emotional Storm"],
    upright: "Tears in rain, logical heartbreak, emotional storms, and necessary painful release.",
    reversed: "Recovery from heartbreak, forgiveness, letting go of past pain, or unexpressed grief.",
    image: `${baseImgUrl}/s03.jpg`
  },
  {
    id: "s04",
    name: "Four of Swords",
    number: 4,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Rest", "Sanctuary", "Contemplation", "Convalescence"],
    upright: "Taking necessary mental rest, finding safe sanctuary, contemplative pause, and quiet healing.",
    reversed: "Mental burnout, returning to activity too soon, restlessness, or waking up.",
    image: `${baseImgUrl}/s04.jpg`
  },
  {
    id: "s05",
    name: "Five of Swords",
    number: 5,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Empty Victory", "Ego Struggles", "Betrayal", "Conflict"],
    upright: "An empty logical victory, conflict where all parties lose, ego dominance, and feeling defeated.",
    reversed: "Resolving conflict, moving past old resentment, letting go of pride, or hidden betrayals.",
    image: `${baseImgUrl}/s05.jpg`
  },
  {
    id: "s06",
    name: "Six of Swords",
    number: 6,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Smooth Waters", "Transition", "Mental Journey", "Moving Forward"],
    upright: "Moving away from rough seas toward calm shores, mental transition, accepting help, and recovery.",
    reversed: "Resisting transition, getting stuck in mental loops, cargo issues, or returning.",
    image: `${baseImgUrl}/s06.jpg`
  },
  {
    id: "s07",
    name: "Seven of Swords",
    number: 7,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Strategy", "Secrecy", "Cleverness", "Independent Action"],
    upright: "Clever strategic planning, necessary secrecy, working behind the scenes, or self-reliance.",
    reversed: "Confession, unmasking secrets, poor planning, or return of stolen credit.",
    image: `${baseImgUrl}/s07.jpg`
  },
  {
    id: "s08",
    name: "Eight of Swords",
    number: 8,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Limiting Beliefs", "Entrapment", "Powerlessness", "Blindfold"],
    upright: "Feeling logically trapped by your own thoughts, self-imposed prison, and powerlessness.",
    reversed: "Stepping out of the mental cage, unmasking limiting beliefs, reclaiming agency, or escape.",
    image: `${baseImgUrl}/s08.jpg`
  },
  {
    id: "s09",
    name: "Nine of Swords",
    number: 9,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Anxiety", "Sleeplessness", "Mental Stress", "Regret"],
    upright: "Sleepless nights, mental stress and anxiety, facing ungrounded worries, and deep regret.",
    reversed: "Waking up from nightmares, releasing unfounded anxiety, finding support, or deep relief.",
    image: `${baseImgUrl}/s09.jpg`
  },
  {
    id: "s10",
    name: "Ten of Swords",
    number: 10,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Endings", "Over-analysis", "Dawn of Rebirth", "Defeat"],
    upright: "Logical endings, hitting rock bottom, over-analyzing yourself, but knowing the dawn is coming.",
    reversed: "Slow recovery, avoiding complete disaster, resisting necessary closures, or fresh perspectives.",
    image: `${baseImgUrl}/s10.jpg`
  },
  {
    id: "s11",
    name: "Page of Swords",
    number: 11,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Curiosity", "Vigilance", "Mental Sparks", "Communication"],
    upright: "An eager intellectual seeker, high vigilance, mental sparks, and fast-paced communication.",
    reversed: "Gossip, defensive speech, intellectual arrogance, or defensive blocks.",
    image: `${baseImgUrl}/s11.jpg`
  },
  {
    id: "s12",
    name: "Knight of Swords",
    number: 12,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Action-oriented Intellect", "Haste", "Directness", "Force"],
    upright: "Charging forward with razor intellect, swift logical actions, extreme directness, and willpower.",
    reversed: "Scattered logic, rude comments, burns out quickly, or absolute chaotic haste.",
    image: `${baseImgUrl}/s12.jpg`
  },
  {
    id: "s13",
    name: "Queen of Swords",
    number: 13,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Clear Boundaries", "Discernment", "Truth-telling", "Intellectual Integrity"],
    upright: "Razor-sharp boundaries, beautiful analytical discernment, speaking truth directly, and absolute integrity.",
    reversed: "Cold withdrawal, overly critical judgments, bitter communications, or unbending rules.",
    image: `${baseImgUrl}/s13.jpg`
  },
  {
    id: "s14",
    name: "King of Swords",
    number: 14,
    arcana: "Minor",
    suit: "Swords",
    keywords: ["Truth Champion", "Logic Master", "Strategic Authority", "Intellectual Mastery"],
    upright: "Intellectual mastery, objective logic champion, sovereign strategic command, and ethical authority.",
    reversed: "Manipulative calculations, absolute detachment, abuse of authority, or chaotic communication.",
    image: `${baseImgUrl}/s14.jpg`
  },

  // ==========================================
  // PENTACLES (p01 - p14)
  // ==========================================
  {
    id: "p01",
    name: "Ace of Pentacles",
    number: 1,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Manifestation", "Stable Seed", "Financial Opportunity", "Abundance"],
    upright: "A solid physical seed, amazing new career or financial opportunity, stable abundance.",
    reversed: "Wasted financial opportunity, delayed returns, unstable seeds, or slow growth.",
    image: `${baseImgUrl}/p01.jpg`
  },
  {
    id: "p02",
    name: "Two of Pentacles",
    number: 2,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Balance", "Flexibility", "Adaptation", "Prioritization"],
    upright: "Juggling resources gracefully, adaptive prioritization, flexibility in daily tasks.",
    reversed: "Scattered energy, financial over-extension, poor time management, or overwhelm.",
    image: `${baseImgUrl}/p02.jpg`
  },
  {
    id: "p03",
    name: "Three of Pentacles",
    number: 3,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Collaboration", "Cooperation", "Craftsmanship", "Acclaim"],
    upright: "Masterful collaboration, creative cooperation, showcasing professional skills, and shared goals.",
    reversed: "Uncooperative dynamics, poor alignment of skills, creative isolation, or lack of effort.",
    image: `${baseImgUrl}/p03.jpg`
  },
  {
    id: "p04",
    name: "Four of Pentacles",
    number: 4,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Security", "Control", "Holding Tight", "Boundaries"],
    upright: "Ensuring material security, solid boundaries, but holding too tight to old structures.",
    reversed: "Releasing control, financial splurges, letting go of fear, or boundary breakdown.",
    image: `${baseImgUrl}/p04.jpg`
  },
  {
    id: "p05",
    name: "Five of Pentacles",
    number: 5,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Scarcity", "Cold", "Spiritual Poverty", "Seeking Sanctuary"],
    upright: "Temporary financial or physical scarcity, walking in the cold, but missing open doors of sanctuary.",
    reversed: "Financial recovery, warming up, accepting material help, or finding inner stability.",
    image: `${baseImgUrl}/p05.jpg`
  },
  {
    id: "p06",
    name: "Six of Pentacles",
    number: 6,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Generosity", "Balance of Giving", "Receiving", "Charity"],
    upright: "Perfect balance of giving and receiving, acts of generous charity, and equitable exchange.",
    reversed: "Unbalanced power dynamics, strings-attached gifts, financial dependency, or greed.",
    image: `${baseImgUrl}/p06.jpg`
  },
  {
    id: "p07",
    name: "Seven of Pentacles",
    number: 7,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Patience", "Evaluation", "Long-term Investment", "Harvest"],
    upright: "Pausing to evaluate growth, long-term investments, patience in crop maturation, and harvests.",
    reversed: "Impatience, poor investments, feeling unrewarded, or wasted physical effort.",
    image: `${baseImgUrl}/p07.jpg`
  },
  {
    id: "p08",
    name: "Eight of Pentacles",
    number: 8,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Diligence", "Apprenticeship", "Craftsmanship", "Focus"],
    upright: "Daily diligent work, mastering a craft, focused skill development, and proud output.",
    reversed: "Lack of effort, cutting corners, boring routines, or misalignment of professional focus.",
    image: `${baseImgUrl}/p08.jpg`
  },
  {
    id: "p09",
    name: "Nine of Pentacles",
    number: 9,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Sovereignty", "Luxury", "Abundance", "Self-reliance"],
    upright: "Standing proud in a lush estate, independent abundance, sensory luxury, and graceful sovereignty.",
    reversed: "Over-spending, unstable luxury, feelings of isolation, or dependent security.",
    image: `${baseImgUrl}/p09.jpg`
  },
  {
    id: "p10",
    name: "Ten of Pentacles",
    number: 10,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Legacy", "Wealth", "Generational Nest", "Wholeness"],
    upright: "Wealth in legacy, strong generational nesting, lasting stability, and beautiful physical wholeness.",
    reversed: "Financial family disputes, short-sighted choices, loss of stable foundation, or legacy blocks.",
    image: `${baseImgUrl}/p10.jpg`
  },
  {
    id: "p11",
    name: "Page of Pentacles",
    number: 11,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Ambition", "Studiousness", "Seed-sowing", "Practical Discovery"],
    upright: "An eager studious learner, sowing practical seeds of growth, career ambitions, and discovery.",
    reversed: "Lack of commitment, lazy attitudes, financial delay, or unfocused career choices.",
    image: `${baseImgUrl}/p11.jpg`
  },
  {
    id: "p12",
    name: "Knight of Pentacles",
    number: 12,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Diligence", "Reliability", "Steady Progress", "Grit"],
    upright: "The slowest steadiest mover, absolute reliability, hard-won grit, and consistent progress.",
    reversed: "Stagnant routines, stubborn resistance, laziness, or complete lack of motion.",
    image: `${baseImgUrl}/p12.jpg`
  },
  {
    id: "p13",
    name: "Queen of Pentacles",
    number: 13,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Nurturing", "Sensory Grace", "Stable Abundance", "Warm Haven"],
    upright: "A warm grounding parent, sensory home haven, managing resource grids, and practical stability.",
    reversed: "Work-life imbalance, material codependency, low physical vitality, or security fear.",
    image: `${baseImgUrl}/p13.jpg`
  },
  {
    id: "p14",
    name: "King of Pentacles",
    number: 14,
    arcana: "Minor",
    suit: "Pentacles",
    keywords: ["Material Mastery", "Financial Sovereign", "Legacy Builder", "Abundance"],
    upright: "Supreme material mastery, financial security sovereign, builder of physical legacies, and abundance.",
    reversed: "Extreme greed, rigid control of resources, unstable structures, or career stagnancy.",
    image: `${baseImgUrl}/p14.jpg`
  }
];
