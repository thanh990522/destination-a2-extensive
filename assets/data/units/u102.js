/* Review 2 · Units 4, 5 and 6
   Book: Destination A2, Review 2, pages 28–29.
   Order: book Review exercises quoted exactly, book numbering 1–50 kept.
   The book puts grammar first (A–B, past simple), then vocabulary (C–F, leisure time):
   grammar A–B → extra grammar challenge; vocabulary C–F → extra vocabulary challenge. */
window.A2_UNITS[102] = {
  n: 102, type: 'Review', title: 'Units 4, 5 and 6',
  focus: 'Grammar and vocabulary review',
  book: 'Destination A2 · Review 2 · pages 28–29',
  goals: ['Check the grammar of Units 4–5: past simple of regular and irregular verbs, negatives and questions.', 'Check the vocabulary of Unit 6: leisure nouns, verbs, phrasal verbs, phrases and word families.', 'Go further with extra challenge exercises after the book review.'],
  audio: {},
  stages: [
    { id: 'start', skill: 'start', icon: '🔁', name: 'Review 2', caption: 'Units 4, 5 and 6.' },
    { id: 'grammar', skill: 'grammar', icon: '🧩', name: 'Grammar', caption: 'Book exercises A–B → extra grammar challenge.' },
    { id: 'vocab', skill: 'vocab', icon: '📚', name: 'Vocabulary', caption: 'Book exercises C–F → extra vocabulary challenge.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Finish', caption: 'Can-do list and homework.' }
  ],
  cards: [
    { id: 'cover', stage: 'start', type: 'cover', title: 'Review ==2==' },

    /* ---------- GRAMMAR: book A–B (p. 28), quoted exactly ---------- */
    { id: 'exA', stage: 'grammar', type: 'practice', book: 'A', page: 28, numStart: 1, tag: 'Grammar · book', title: 'Exercise ==A==', lead: 'Complete the sentences using the appropriate verb forms.', cols: true,
      items: [
        { q: 'I ___ to play until the game was nearly over.', a: ['didn’t begin', 'did not begin'], hint: '**(not / begin)**' },
        { q: 'Daniel ___ three sandwiches during the game.', a: 'ate', hint: '**(eat)**' },
        { q: 'The player ___ the ball.', a: 'caught', hint: '**(catch)**' },
        { q: 'She ___ past us on her new bicycle.', a: 'went', hint: '**(go)**' },
        { q: 'Charlie ___ his chess pieces so we could play together.', a: 'brought', hint: '**(bring)**' },
        { q: 'Nobody ___ to the coach after the match.', a: 'spoke', hint: '**(speak)**' },
        { q: 'The athlete ___ if he could run any faster.', a: ['didn’t know', 'did not know'], hint: '**(not / know)**' },
        { q: 'How much ___ for his shoes?', a: 'did Carl pay', hint: '**(Carl / pay)**' }] },
    { id: 'exB', stage: 'grammar', type: 'practice', book: 'B', page: 28, numStart: 9, tag: 'Grammar · book', title: 'Exercise ==B==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: 'I missed the bus because I {waked|woke} up late.', a: 'woke' },
        { q: 'I couldn’t remember the answer, but Caroline {knew|knowed} it.', a: 'knew' },
        { q: 'Barney {wore|weared} his best trousers to the dance.', a: 'wore' },
        { q: 'I stayed awake and {read|readed} the end of the book.', a: 'read' },
        { q: 'The cat nearly {felt|fell} out of the tree!', a: 'fell' },
        { q: 'The wind {blowed|blew} so hard against the windows I thought they would break.', a: 'blew' },
        { q: 'The dog {drunk|drank} all the water in his bowl.', a: 'drank' },
        { q: 'My best friend {gave|gaved} me a book for my birthday.', a: 'gave' },
        { q: 'Is this the person you {speaked|spoke} to yesterday?', a: 'spoke' },
        { q: 'Do you remember when they {won|win} the cup?', a: 'won' },
        { q: 'She was in the mall yesterday when she {meet|met} her cousin.', a: 'met' },
        { q: 'I {run|ran} all the way to the station.', a: 'ran' }] },

    /* ---------- GRAMMAR: extra challenge ---------- */
    { id: 'xg1', stage: 'grammar', type: 'cloze', tag: 'Extra · grammar challenge', title: 'Extra 1: ==a story in the past==', lead: 'Put the verbs in the past simple. Some are negative or questions. Watch the spelling of regular verbs.',
      textTitle: 'The worst (and best) day of my holiday',
      text: 'Last summer my family [1] to Phú Quốc for a week. On the third day, we [2] a boat trip to a small island. The weather [3] perfect in the morning, and we [4] in the clear water for hours. My little brother [5] shells and [6] them in his hat.\n\nAfter lunch, the sky suddenly [7] dark and it [8] to rain. The boat driver [9] us back because the sea was too rough, so we [10] the afternoon in a tiny café. My brother [11] , but my dad [12] us funny stories about his childhood. ‘[13] you [14] a good time?’ Mum asked that night. ‘Yes,’ we [15] . ‘It was the best day!’',
      items: [
        { a: 'travelled', hint: 'travel' }, { a: 'took', hint: 'take' }, { a: 'was', hint: 'be' }, { a: 'swam', hint: 'swim' },
        { a: 'collected', hint: 'collect' }, { a: 'put', hint: 'put' }, { a: 'became', hint: 'become' }, { a: 'began', hint: 'begin' },
        { a: ['didn’t take', 'did not take'], hint: 'not take' }, { a: 'spent', hint: 'spend' }, { a: 'cried', hint: 'cry' }, { a: 'told', hint: 'tell' },
        { a: 'Did', hint: 'do' }, { a: 'have', hint: 'have' }, { a: 'said', hint: 'say' }] },
    { id: 'xg2', stage: 'grammar', type: 'practice', tag: 'Extra · grammar challenge', title: 'Extra 2: ==find the mistake==', lead: 'Each sentence has **one** mistake. Write the correct words.', cols: true,
      items: [
        { t: 'error', q: 'We didn’t went to school yesterday.', a: ['didn’t go', 'did not go', 'We didn’t go to school yesterday.'], show: 'We **didn’t go** to school yesterday.' },
        { t: 'error', q: 'Did you saw the match last night?', a: ['see', 'Did you see', 'Did you see the match last night?'], show: 'Did you **see** the match last night?' },
        { t: 'error', q: 'The bus stoped near the park.', a: ['stopped', 'The bus stopped near the park.'], show: 'The bus **stopped** near the park.' },
        { t: 'error', q: 'She studyed for three hours.', a: ['studied', 'She studied for three hours.'], show: 'She **studied** for three hours.' },
        { t: 'error', q: 'They was very tired after the trip.', a: ['were', 'They were very tired after the trip.'], show: 'They **were** very tired after the trip.' },
        { t: 'error', q: 'I buyed a new bike last week.', a: ['bought', 'I bought a new bike last week.'], show: 'I **bought** a new bike last week.' },
        { t: 'error', q: 'Where you went last weekend?', a: ['did you go', 'Where did you go last weekend?'], show: 'Where **did you go** last weekend?' },
        { t: 'error', q: 'We visited Huế two years before.', a: ['ago', 'two years ago', 'We visited Huế two years ago.'], show: 'We visited Huế two years **ago**.' },
        { t: 'error', q: 'Did she enjoyed the film?', a: ['enjoy', 'Did she enjoy the film?'], show: 'Did she **enjoy** the film?' },
        { t: 'error', q: 'The film started in 7 o’clock.', a: ['at', 'at 7 o’clock', 'The film started at 7 o’clock.'], show: 'The film started **at** 7 o’clock.' }] },
    { id: 'xg3', stage: 'grammar', type: 'practice', tag: 'Extra · grammar challenge', title: 'Extra 3: ==ask about the past==', lead: 'Write the past simple question for the answer in **bold**.', cols: true,
      items: [
        { t: 'write', q: 'We went **to Đà Lạt** last summer.', a: ['Where did you go last summer?'] },
        { t: 'write', q: 'She met her friends **at the cinema**.', a: ['Where did she meet her friends?'] },
        { t: 'write', q: 'They arrived **at nine o’clock**.', a: ['What time did they arrive?', 'When did they arrive?'], show: 'What time did they arrive?' },
        { t: 'write', q: 'He bought **a new guitar**.', a: ['What did he buy?'] },
        { t: 'write', q: '**My uncle** fixed my bike.', a: ['Who fixed your bike?'] },
        { t: 'write', q: 'The tickets cost **50,000 dong**.', a: ['How much did the tickets cost?'] },
        { t: 'write', q: 'I was late **because I missed the bus**.', a: ['Why were you late?'] },
        { t: 'write', q: 'The concert was **amazing**.', a: ['How was the concert?', 'What was the concert like?'], show: 'How was the concert?' },
        { t: 'write', q: '**Yes, I did.** I watched the final with my dad.', a: ['Did you watch the final?', 'Did you watch the final with your dad?'], show: 'Did you watch the final?' },
        { t: 'write', q: '**No, they weren’t.** They were at home.', a: ['Were they at the party?', 'Were they at school?', 'Were they out?'], show: 'Were they at the party? (any Were they …? question)' }] },

    /* ---------- VOCABULARY: book C–F (pp. 28–29), quoted exactly ---------- */
    { id: 'exC', stage: 'vocab', type: 'practice', book: 'C', page: 28, numStart: 21, tag: 'Vocabulary · book', title: 'Exercise ==C==', lead: 'Choose the correct answer.', cols: true, abc: true,
      items: [
        { q: 'I was a bit disappointed when the ___ was cancelled at the last minute.', o: ['concert', 'member', 'camera'], a: 'concert' },
        { q: 'The art of ___ is not easy to learn.', o: ['actress', 'actor', 'acting'], a: 'acting' },
        { q: 'Shelley had a fancy dress party and everyone had to ___ .', o: ['laze around', 'go out', 'dress up'], a: 'dress up' },
        { q: 'When did you last ___ the theatre?', o: ['play', 'visit', 'act'], a: 'visit' },
        { q: 'It’s not healthy to stay ___ on such a lovely summer day!', o: ['recently', 'indoors', 'great'], a: 'indoors' },
        { q: '*Spoons* is a new ___ magazine for people interested in cooking.', o: ['weekly', 'classical', 'competitive'], a: 'weekly' },
        { q: 'Now this is what I call real ___ !', o: ['dancer', 'interest', 'entertainment'], a: 'entertainment' }] },
    { id: 'exD', stage: 'vocab', type: 'practice', book: 'D', page: 29, numStart: 28, tag: 'Vocabulary · book', title: 'Exercise ==D==', lead: 'Fill in the gaps using the verbs given in the box.', cols: true,
      bank: ['be', 'fix', 'go', 'hang', 'ride', 'sing', 'take', 'write'],
      items: [
        { q: 'The children decided to ___ three songs at the school concert.', a: 'sing' },
        { q: '‘What a terrible day,’ he began to ___ in his blog. ‘It all started in the morning …’.', a: 'write' },
        { q: 'How often do you ___ out with your friends?', a: 'go' },
        { q: 'Lots of teenagers ___ around at the mall at weekends.', a: 'hang' },
        { q: 'Samantha wants to ___ very good at cooking but her food always tastes awful.', a: 'be' },
        { q: 'Did your dad ___ your skateboard when it broke?', a: 'fix' },
        { q: 'My teacher encouraged me to ___ up a new hobby.', a: 'take' },
        { q: 'Jonathan likes to ___ his bike all the way to the shops and back again.', a: 'ride' }] },
    { id: 'exE', stage: 'vocab', type: 'pairs', book: 'E', page: 29, numStart: 36, tag: 'Vocabulary · book', title: 'Exercise ==E==', lead: 'Match the two halves of each sentence.',
      right: ['to the chess club.', 'in a film?', 'to the coach.', 'at the list.', 'to the cinema.', 'at tennis.', 'at the swimming pool today?'],
      items: [
        { t: 'match', q: 'He practised all summer, and now he is really good', a: 'at tennis.' },
        { t: 'match', q: 'Frank belongs', a: 'to the chess club.' },
        { t: 'match', q: 'Tonight, everyone is going', a: 'to the cinema.' },
        { t: 'match', q: 'Have you ever acted', a: 'in a film?' },
        { t: 'match', q: 'I couldn’t see my name when I looked', a: 'at the list.' },
        { t: 'match', q: 'The whole team listened carefully', a: 'to the coach.' },
        { t: 'match', q: 'Did you have a good time', a: 'at the swimming pool today?' }] },
    { id: 'exF', stage: 'vocab', type: 'practice', book: 'F', page: 29, numStart: 43, tag: 'Vocabulary · book', title: 'Exercise ==F==', lead: 'Read the text below. Use the words in capitals at the ends of the lines to form words that fit the text grammatically and in meaning. Fill the gaps with these words. Fill in the blanks with the words you get.', cols: true,
      items: [
        { q: 'In the 1950s and 1960s, many British people went on holiday to holiday camps like Butlins. They were called ‘camps’ but people didn’t go ___ there, they stayed in small rooms called ‘chalets’.', a: 'camping', hint: '**CAMP**' },
        { q: 'The people who worked at Butlins were called ‘Redcoats’ and it was their job to make your holiday as ___ as possible.', a: 'interesting', hint: '**INTEREST**' },
        { q: 'There were a lot of different types of ___ to keep all the family amused.', a: 'entertainment', hint: '**ENTERTAIN**' },
        { q: 'Every morning, the Redcoats would sing the Butlins ___ at breakfast with all the campers, and that was just the start of the fun!', a: 'song', hint: '**SING**' },
        { q: 'You could enter a sports ___ , like swimming or running.', a: 'competition', hint: '**COMPETE**' },
        { q: 'For the artists among the campers, there was also a weekly prize for the best ___ of life in the camp.', a: 'drawing', hint: '**DRAW**' },
        { q: 'For people who liked ___ , there was a dance held every night in the big hall.', a: 'dancing', hint: '**DANCE**' },
        { q: 'The camp ___ would take your picture so you would never forget your holiday.', a: 'photographer', hint: '**PHOTOGRAPH**' }] },

    /* ---------- VOCABULARY: extra challenge ---------- */
    { id: 'xv1', stage: 'vocab', type: 'cloze', tag: 'Extra · vocabulary challenge', title: 'Extra 1: ==word families== in a text', lead: 'Change the word in brackets so that it fits the gap.',
      textTitle: 'Our school arts festival',
      text: 'Last Friday our school had its first arts festival, and it was the most [1] day of the year. In the morning there was a [2] for young musicians. My friend Khoa played the guitar and won second prize – he’s a really talented [3] ! In the hall, students showed their paintings and [4] , and a professional [5] took pictures of everyone’s work.\n\nIn the afternoon there was a play. The main [6] was only twelve, but her [7] was fantastic. After that, a group of [8] performed a K-pop routine, and everybody joined in the [9] . I’m not very [10] , but I want to take up painting next year!',
      items: [{ a: 'entertaining', hint: 'ENTERTAIN' }, { a: 'competition', hint: 'COMPETE' }, { a: 'musician', hint: 'MUSIC' }, { a: 'drawings', hint: 'DRAW' }, { a: 'photographer', hint: 'PHOTOGRAPH' }, { a: 'actress', hint: 'ACT' }, { a: 'acting', hint: 'ACT' }, { a: 'dancers', hint: 'DANCE' }, { a: 'dancing', hint: 'DANCE' }, { a: 'artistic', hint: 'ART' }] },
    { id: 'xv2', stage: 'vocab', type: 'practice', tag: 'Extra · vocabulary challenge', title: 'Extra 2: ==tricky words==', lead: 'Choose the correct answer. Be careful: the options are close in meaning.', cols: true,
      items: [
        { q: 'I’m really ___ in photography. I want to take a course.', o: ['interested', 'interesting', 'interest', 'entertaining'], a: 'interested' },
        { q: 'Did you ___ yourself at the concert?', o: ['enjoy', 'like', 'have', 'join'], a: 'enjoy' },
        { q: 'My brother ___ the drums in a rock band.', o: ['plays', 'does', 'goes', 'makes'], a: 'plays' },
        { q: 'We ___ skateboarding in the park every Sunday.', o: ['go', 'play', 'do', 'ride'], a: 'go' },
        { q: 'I’d like to ___ the drama club next term.', o: ['join', 'belong', 'take', 'visit'], a: 'join' },
        { q: 'On rainy weekends I just ___ around at home.', o: ['laze', 'dress', 'go', 'take'], a: 'laze' },
        { q: 'You need practice to ___ your piano playing.', o: ['improve', 'fix', 'collect', 'perform'], a: 'improve' },
        { q: 'My grandfather ___ old coins and stamps.', o: ['collects', 'improves', 'joins', 'performs'], a: 'collects' },
        { q: 'I ___ started learning the guitar, so I’m still a beginner.', o: ['recently', 'weekly', 'outdoors', 'great'], a: 'recently' },
        { q: 'He’s a famous ___ musician. He plays Mozart and Bach.', o: ['classical', 'pop', 'rock', 'weekly'], a: 'classical' }] },
    { id: 'xv3', stage: 'vocab', type: 'practice', tag: 'Extra · vocabulary challenge', title: 'Extra 3: ==say it another way==', lead: 'Complete the second sentence so that it means the same as the first. Use the word in capitals. Write **two to four words**.', cols: true,
      items: [
        { q: 'I started learning yoga last year. → I ___ yoga last year.', hint: '**UP**', a: ['took up'], show: 'took up' },
        { q: 'Mai is a member of the art club. → Mai ___ the art club.', hint: '**BELONGS**', a: ['belongs to'], show: 'belongs to' },
        { q: 'He plays chess very well. → He’s very ___ chess.', hint: '**GOOD**', a: ['good at'], show: 'good at' },
        { q: 'We spent time with friends at the mall. → We ___ with friends at the mall.', hint: '**HUNG**', a: ['hung out', 'hung around'], show: 'hung out' },
        { q: 'The party was really fun for us. → We ___ at the party.', hint: '**ENJOYED**', a: ['enjoyed ourselves', 'really enjoyed ourselves'], show: 'enjoyed ourselves' },
        { q: 'Let’s ride horses this weekend. → Let’s ___ this weekend.', hint: '**GO**', a: ['go horse-riding', 'go horse riding'], show: 'go horse-riding' },
        { q: 'She wore a costume to the party. → She ___ for the party.', hint: '**DRESSED**', a: ['dressed up'], show: 'dressed up' },
        { q: 'I spend my free time with my cousins. → I ___ my cousins in my free time.', hint: '**OUT**', a: ['go out with', 'hang out with'], show: 'go out with / hang out with' },
        { q: 'The film was very entertaining. → The film was great ___ .', hint: '**ENTERTAINMENT**', a: ['entertainment'], show: 'entertainment' },
        { q: 'I don’t like drawing. → I’m not ___ drawing.', hint: '**INTERESTED**', a: ['interested in'], show: 'interested in' }] },

    /* ---------- FINISH ---------- */
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Finish', title: 'How did you ==do==?',
      cando: ['I can use the past simple of regular and irregular verbs.', 'I can make past simple negatives and questions with did.', 'I can use was / were correctly.', 'I can use leisure nouns, verbs, phrasal verbs and phrases from Unit 6.', 'I can build word families (photograph → photographer → photography).'],
      extra: 'Book score: count your correct answers in A–F (**/50**). The homework has **50 grammar** and **50 vocabulary** questions.' }
  ]
};
