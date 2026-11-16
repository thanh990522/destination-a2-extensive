/* Unit 5 · Past simple 2 (to be, irregular verbs)
   Book: Destination A2, Unit 5, pages 21–23.
   Order: grammar theory (page 21) → book exercises A–F, quoted exactly (pages 22–23) →
   skills, each with its own pre-stage for new words → review. One card = one slide. */
window.A2_UNITS[5] = {
  n: 5, type: 'Grammar', title: 'What happened?',
  focus: 'Past simple 2 · to be · irregular verbs',
  book: 'Destination A2 · Unit 5 · pages 21–23',
  goals: ['Use was / were in sentences, questions and short answers.', 'Use common irregular past forms (went, saw, took, ate…).', 'Understand three real speakers talk about a day, a trip and a weekend.', 'Interview a partner about last weekend and write a summary.'],
  audio: {
    day: { title: 'How was your day?', speakers: 'Todd, USA', level: 'A2', length: '1:11', provider: 'ELLLO One Minute English A2-014', src: 'https://elllo.org/Audio/1ME-A2BEG/A2-014-TODD-PAST-TENSE.mp3', page: 'https://elllo.org/video/A2BEG/A2-014-TODD-PAST-TENSE.htm' },
    trip: { title: 'A trip to Brazil', speakers: 'A man and a woman', level: 'A2', length: '0:32', provider: 'ELLLO Sound Grammar A2-07 · Conversation 2', src: 'https://elllo.org/Audio/SoundGrammar/A2-Audio4x/A2-07-2-Past-Tense-%20Irregular-Trip.mp3', page: 'https://elllo.org/book/A2/A2-07-Past-Tense-Irregular.html' },
    weekend: { title: 'What did you do over the weekend?', speakers: 'Jill, Australia', level: 'A2', length: '1:24', provider: 'ELLLO One Minute English A2-049', src: 'https://elllo.org/Audio/1ME-A2BEG/A2-049-JILL-AUSTRALIA-WEEKEND.mp3', page: 'https://elllo.org/video/A2BEG/A2-049-JILL-AUSTRALIA-WEEKEND.htm' }
  },
  stages: [
    { id: 'start', skill: 'start', icon: '🗞️', name: 'Welcome', caption: 'What happened last weekend?' },
    { id: 'grammar', skill: 'grammar', icon: '🧩', name: 'Grammar', caption: 'Was / were and irregular verbs: all the rules first, then the book exercises A–F.' },
    { id: 'l1', skill: 'listening', icon: '🌾', name: 'Listening 1: How was your day?', caption: 'Pre-listening words → yes or no? → speaking.' },
    { id: 'l2', skill: 'listening', icon: '🏖️', name: 'Listening 2: A trip to Brazil', caption: 'Pre-listening words → complete the notes → speaking.' },
    { id: 'l3', skill: 'listening', icon: '⛰️', name: 'Listening 3: A special weekend', caption: 'Pre-listening words → multiple choice → speaking.' },
    { id: 'read', skill: 'reading', icon: '📰', name: 'Reading: Good news stories', caption: 'Two texts, from easier to harder. Pre-reading words, then read for details.' },
    { id: 'speak', skill: 'speaking', icon: '🎤', name: 'Speaking: Interview', caption: 'Interview phrases → the missing cake information gap → interview a partner.' },
    { id: 'write', skill: 'writing', icon: '✍️', name: 'Writing: An interview summary', caption: 'Model text → plan, write and check.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Review', caption: 'Unit check, can-do list and homework.' }
  ],
  cards: [
    /* ---------- WELCOME ---------- */
    { id: 'cover', stage: 'start', type: 'cover', title: 'What ==happened==?' },
    { id: 'warm', stage: 'start', type: 'talk', tag: 'Warm-up · speaking', title: 'How ==was== your weekend?', lead: 'Ask and answer with a partner.',
      items: [
        { q: 'How was your weekend?', frame: 'It was ___. I ___.', model: 'It was great. I went to the beach with my family.' },
        { q: 'Where were you on Saturday afternoon?', frame: 'I was at / in ___.', model: 'I was at my grandparents’ house.' },
        { q: 'What did you eat for dinner last night?', frame: 'I ate ___. It was ___.', model: 'I ate phở. It was delicious.' },
        { q: 'Who did you see at the weekend?', frame: 'I saw ___. We ___.', model: 'I saw my cousins. We played games.' }] },

    /* ---------- GRAMMAR: theory (book p. 21) ---------- */
    { id: 'g1', stage: 'grammar', type: 'grammar', tag: 'Grammar 1 · to be', title: 'Past simple: ==to be==',
      blocks: [
        { formulas: [
          ['✅ Affirmative', 'I / he / she / it **was** · you / we / they **were**', 'I / He / She / It **was** the best. · You / We / They **were** the best.'],
          ['❌ Negative', 'S + **was not (wasn’t)** / **were not (weren’t)**', 'I / He / She / It **was not (wasn’t)** the best. · You / We / They **were not (weren’t)** the best.'],
          ['❓ Question', '**Was / Were** + S …?', '**Was** I / he / she / it the best? · **Were** you / we / they the best?'],
          ['💬 Short answer', 'Yes, S + **was / were**.   ·   No, S + **wasn’t / weren’t**.', 'Yes, I / he / she / it **was**. / No, I / he / she / it **wasn’t**. · Yes, you / we / they **were**. / No, you / we / they **weren’t**.']] },
        { watch: { text: 'The past simple form usually stays the same with all pronouns and nouns. The exception is **to be**, which has two forms: **was** and **were**.' } },
        { vi: '**was** dùng với I / he / she / it; **were** dùng với you / we / they. Câu hỏi và phủ định của **to be** KHÔNG dùng did: ✅ Was it good? ❌ Did it be good?' }] },
    { id: 'g2', stage: 'grammar', type: 'grammar', tag: 'Grammar 2 · irregular verbs', title: 'Irregular verbs: ==form==',
      blocks: [
        { formulas: [
          ['✅ Affirmative', 'S + **past form** (went, saw, took…)', 'I / You / He / She / It / We / They **went** to the theatre.'],
          ['❌ Negative', 'S + **did not (didn’t)** + **V**', 'I / You / He / She / It / We / They **did not (didn’t) go** to the theatre.'],
          ['❓ Question', '**Did** + S + **V** …?', '**Did** I / you / he / she / it / we / they **go** to the theatre?'],
          ['💬 Short answer', 'Yes, S + **did**.   ·   No, S + **didn’t**.', 'Yes, I / you / he / she / it / we / they **did**. · No, I / you / he / she / it / we / they **didn’t**.']] },
        { vi: 'Động từ bất quy tắc chỉ đổi dạng ở câu **khẳng định** (go → **went**). Câu phủ định và câu hỏi vẫn dùng **didn’t / Did + động từ nguyên mẫu** (didn’t **go**, Did you **go**?).' }] },
    { id: 'g3', stage: 'grammar', type: 'grammar', tag: 'Grammar 3 · irregular verbs', title: 'Verbs with a ==vowel change==',
      blocks: [
        { form: { cols: ['Bare infinitive', 'Past simple', 'Bare infinitive', 'Past simple', 'Bare infinitive', 'Past simple'], rows: [
          ['become', '**became**', 'fall', '**fell**', 'sing', '**sang**'],
          ['begin', '**began**', 'find', '**found**', 'sit', '**sat**'],
          ['blow', '**blew**', 'get', '**got**', 'speak', '**spoke**'],
          ['break', '**broke**', 'give', '**gave**', 'wake', '**woke**'],
          ['choose', '**chose**', 'grow', '**grew**', 'wear', '**wore**'],
          ['come', '**came**', 'know', '**knew**', 'win', '**won**'],
          ['draw', '**drew**', 'meet', '**met**', 'write', '**wrote**'],
          ['drink', '**drank**', 'read', '**read** /red/', '', ''],
          ['eat', '**ate**', 'run', '**ran**', '', '']] } }] },
    { id: 'g4', stage: 'grammar', type: 'grammar', tag: 'Grammar 4 · irregular verbs', title: 'Other changes · ==no change==',
      blocks: [
        { form: { title: 'Other changes', cols: ['Bare infinitive', 'Past simple', 'Bare infinitive', 'Past simple', 'Bare infinitive', 'Past simple'], rows: [
          ['bring', '**brought**', 'have', '**had**', 'send', '**sent**'],
          ['build', '**built**', 'keep', '**kept**', 'spend', '**spent**'],
          ['buy', '**bought**', 'leave', '**left**', 'stand', '**stood**'],
          ['catch', '**caught**', 'lose', '**lost**', 'take', '**took**'],
          ['do', '**did**', 'make', '**made**', 'teach', '**taught**'],
          ['feel', '**felt**', 'pay', '**paid**', 'tell', '**told**'],
          ['fight', '**fought**', 'say', '**said**', 'think', '**thought**'],
          ['go', '**went**', 'see', '**saw**', 'understand', '**understood**']] } },
        { chips: { title: 'Verbs that do not change', list: ['beat → beat', 'cut → cut', 'hit → hit', 'let → let', 'put → put'] } }] },

    /* ---------- GRAMMAR: book exercises A–F (pp. 22–23), quoted exactly ---------- */
    { id: 'exA', stage: 'grammar', type: 'cloze', book: 'A', page: 22, tag: 'Grammar practice', title: 'Exercise ==A==', lead: 'Complete the sentences with the verbs in past simple.', style: 'dialogue',
      text: 'Yesterday I [1] the kitchen window playing football in the garden.\nThe bus [2] late, so we missed the beginning of the film.\nKaren didn’t go to school yesterday because she [3] sick.\nSusan [4a] her jeans to the party – she [4b] her new dress.\nLast night we [5] to the theatre to see a ballet.\n[6] the dog out for a walk this morning?\n‘Where [7a] your mobile?’ ‘I [7b] it under my bed!’\nOur grandparents [8a] emails but they [8b] letters.',
      items: [
        { a: 'broke', hint: 'break' }, { a: 'was', hint: 'be' }, { a: 'felt', hint: 'feel' },
        { a: ['didn’t wear', 'did not wear'], hint: 'not wear' }, { a: 'wore', hint: 'wear' }, { a: 'went', hint: 'go' },
        { a: 'Did Jason take', hint: 'Jason / take' }, { a: 'did you find', hint: 'you / find' }, { a: 'found', hint: 'find' },
        { a: ['didn’t send', 'did not send'], hint: 'not send' }, { a: 'wrote', hint: 'write' }] },
    { id: 'exB', stage: 'grammar', type: 'cloze', book: 'B', page: 22, tag: 'Grammar practice', title: 'Exercise ==B==', lead: 'Fill in the gaps in the sentences by putting the verbs in past simple.', style: 'dialogue',
      bank: ['become', 'buy', 'come', 'draw', 'not leave', 'pay', 'see', 'spend'],
      text: 'I forgot my wallet, so Tom [1] for my ticket.\nWe didn’t invite Harry to the party, but he [2] anyway.\nShe started her career as an engineer, but then [3] a writer.\nI [4] this dress in the sales for only 20 pounds!\n[5a] you [5b] Peter and Sally at the meeting yesterday?\nEugene [6] the party until after eleven o’clock.\nI asked Tess about her house and she [7] a picture of it for me.\nLast week I [8] about 60 pounds on new school books.',
      items: [{ a: 'paid' }, { a: 'came' }, { a: 'became' }, { a: 'bought' }, { a: 'Did' }, { a: 'see' }, { a: ['didn’t leave', 'did not leave'] }, { a: 'drew' }, { a: 'spent' }] },
    { id: 'exC', stage: 'grammar', type: 'practice', book: 'C', page: 22, tag: 'Grammar practice', title: 'Exercise ==C==', lead: 'Rewrite sentences by putting verbs in past simple.', cols: true,
      items: [
        { t: 'write', q: 'The trees in her garden grow really tall.', a: ['The trees in her garden grew really tall.'] },
        { t: 'write', q: 'He says his father builds their house.', a: ['He said his father built their house.'] },
        { t: 'write', q: 'Do you do anything interesting at the weekend?', a: ['Did you do anything interesting at the weekend?'] },
        { t: 'write', q: 'I tell him I don’t have a sister.', a: ['I told him I didn’t have a sister.'] },
        { t: 'write', q: 'I wake up early and make breakfast for everyone.', a: ['I woke up early and made breakfast for everyone.'] },
        { t: 'write', q: 'Does the film begin at seven?', a: ['Did the film begin at seven?'] },
        { t: 'write', q: 'What subject does she teach?', a: ['What subject did she teach?'] },
        { t: 'write', q: 'Dave eats a lot but he doesn’t have anything to drink.', a: ['Dave ate a lot but he didn’t have anything to drink.'] }] },
    { id: 'exD', stage: 'grammar', type: 'practice', book: 'D', page: 23, tag: 'Grammar practice', title: 'Exercise ==D==', lead: 'Make sentences using verbs in past simple.', cols: true,
      items: [
        { t: 'write', q: 'Jeff / lose / his mobile phone / but we / find / it / this morning', a: ['Jeff lost his mobile phone but we found it this morning.', 'Jeff lost his mobile phone but this morning we found it.'] },
        { t: 'write', q: 'he / run / fast / and / catch / the bus / in time', a: ['He ran fast and caught the bus in time.'] },
        { t: 'write', q: 'your parents / give / you / a new tablet / for your birthday?', a: ['Did your parents give you a new tablet for your birthday?'] },
        { t: 'write', q: 'I / not know / that / Mr Smith / teach / at your school', a: ['I didn’t know that Mr Smith taught at your school.'] },
        { t: 'write', q: 'Grace / blow out / the candles / and / the guests / sing / ‘Happy Birthday’', a: ['Grace blew out the candles and the guests sang ‘Happy Birthday’.', 'Grace blew out the candles and the guests sang Happy Birthday.'], show: 'Grace blew out the candles and the guests sang ‘Happy Birthday’.' },
        { t: 'write', q: 'I / leave / my school bag / at your house / yesterday/?', a: ['Did I leave my school bag at your house yesterday?', 'I left my school bag at your house yesterday.'], show: 'Did I leave my school bag at your house yesterday? (or: I left my school bag at your house yesterday.)' }] },
    { id: 'exE', stage: 'grammar', type: 'cloze', book: 'E', page: 23, tag: 'Grammar practice', title: 'Exercise ==E==', lead: 'Fill in the gaps using the verbs in past simple.',
      bank: ['be (x2)', 'make', 'meet', 'not go', 'not see', 'say', 'sit', 'take', 'tell'],
      textTitle: 'Hi Sam,',
      text: 'It [1] good to hear your news. Lenny [2] you were ill, so I’m glad you are better. Did you watch the big match on TV last night? I [3] it because my parents [4] me to see a play. The actors [5] very good but the play was quite boring and I didn’t enjoy it very much. I [6] in my seat, wishing I was at home watching the football! Any more news? Oh, yes! I [7] Katie the other day and she [8] me about this new club for teenagers. She asked me to go with her right then, but I had homework to do, so I [9] . But we [10] a date for another day. Well, that’s all my news.\n\nJoe',
      items: [{ a: 'was' }, { a: 'said' }, { a: ['didn’t see', 'did not see'] }, { a: 'took' }, { a: 'were' }, { a: 'sat' }, { a: 'met' }, { a: 'told' }, { a: ['didn’t go', 'did not go'] }, { a: 'made' }] },
    { id: 'exF', stage: 'grammar', type: 'cloze', book: 'F', page: 23, tag: 'Grammar practice', title: 'Exercise ==F==', lead: 'Fill in the gaps using past simple verbs. Some sentences may be negative.', style: 'dialogue',
      text: 'We [1a] the other team at hockey and [1b] the cup.\nTom wasn’t hungry so he [2] anything for lunch.\nLast night she [3] a letter to her aunt.\nPeter [4] the answer to the question, but the teacher didn’t ask him.\nHe was so thirsty, he [5] three glasses of water.\nI’m sure I [6] it back in the box last night.',
      items: [{ a: 'beat' }, { a: 'won' }, { a: ['didn’t eat', 'did not eat'] }, { a: ['wrote', 'sent'] }, { a: 'knew' }, { a: 'drank' }, { a: 'put' }] },

    /* ---------- LISTENING 1: yes or no? ---------- */
    { id: 'l1-w', stage: 'l1', type: 'words', tag: 'Listening 1 · pre-listening', title: 'New words for ==Todd’s day==',
      words: [
        ['⏰', 'wake up early', '/weɪk ʌp ˈɜːli/', 'phrase', 'dậy sớm', 'I **woke up early** today.'],
        ['🚗', 'take a drive', '/teɪk ə draɪv/', 'phrase', 'lái xe đi dạo', 'He **took a drive** to the coast.'],
        ['🌾', 'rice field', '/raɪs fiːld/', 'noun', 'cánh đồng lúa', 'I walked along the **rice fields**.'],
        ['🏞️', 'countryside', '/ˈkʌntrisaɪd/', 'noun', 'vùng nông thôn', 'I drove to the **countryside**.'],
        ['🧘', 'clear my mind', '/klɪə maɪ maɪnd/', 'phrase', 'làm đầu óc thư thái', 'I sat by the sea and **cleared my mind**.'],
        ['😣', 'stressed', '/strest/', 'adjective', 'căng thẳng', 'I didn’t feel **stressed** at all.']] },
    { id: 'l1-det', stage: 'l1', type: 'listen', audio: 'day', tag: 'Listening 1 · while listening', title: 'Did Todd ==do== it?', task: 'Listen twice. Choose the correct short answer.', cols: true,
      items: [
        { q: 'Did Todd wake up early?', o: ['Yes, he did.', 'No, he didn’t.'], a: 'Yes, he did.' },
        { q: 'Did he read a book?', o: ['Yes, he did.', 'No, he didn’t.'], a: 'Yes, he did.' },
        { q: 'Did he drive to a big city?', o: ['Yes, he did.', 'No, he didn’t.'], a: 'No, he didn’t.' },
        { q: 'Did he walk along the rice fields?', o: ['Yes, he did.', 'No, he didn’t.'], a: 'Yes, he did.' },
        { q: 'Did he swim in the sea?', o: ['Yes, he did.', 'No, he didn’t.'], a: 'No, he didn’t.' },
        { q: 'Did he feel stressed?', o: ['Yes, he did.', 'No, he didn’t.'], a: 'No, he didn’t.' },
        { q: 'Did he buy anything?', o: ['Yes, he did.', 'No, he didn’t.'], a: 'Yes, he did.' },
        { q: 'Was it a Sunday?', o: ['Yes, it was.', 'No, it wasn’t.'], a: 'Yes, it was.' }] },
    { id: 'l1-say', stage: 'l1', type: 'talk', tag: 'Listening 1 · post-listening', title: 'Answer ==Todd’s questions==', lead: 'Todd asks you about your day. Answer with irregular verbs.',
      items: [
        { q: 'What did you do today?', frame: 'Today I ___ (went / had / took…).', model: 'Today I went to school and had a maths test.' },
        { q: 'Did you go anywhere?', frame: 'Yes, I went to ___. / No, I didn’t.', model: 'Yes, I went to the bookshop after school.' },
        { q: 'Did you buy anything?', frame: 'Yes, I bought ___. / No, I didn’t buy anything.', model: 'Yes, I bought a bánh mì for breakfast.' },
        { q: 'How was your day?', frame: 'It was ___. I felt ___.', model: 'It was busy, but I felt happy.' }] },

    /* ---------- LISTENING 2: complete the notes ---------- */
    { id: 'l2-w', stage: 'l2', type: 'words', tag: 'Listening 2 · pre-listening', title: 'New words for ==A trip to Brazil==',
      words: [
        ['✈️', 'trip', '/trɪp/', 'noun', 'chuyến đi', 'How was your **trip**?'],
        ['🤩', 'wonderful', '/ˈwʌndəfl/', 'adjective', 'tuyệt vời', 'It was **wonderful**.'],
        ['⚖️', 'put on weight', '/pʊt ɒn weɪt/', 'phrase', 'tăng cân', 'I ate a lot and **put on weight**.'],
        ['🏖️', 'spend time', '/spend taɪm/', 'phrase', 'dành thời gian', 'We **spent** a lot of **time** at the beach.'],
        ['🌃', 'go out at night', '/ɡəʊ aʊt ət naɪt/', 'phrase', 'đi chơi buổi tối', 'We **went out at night**.'],
        ['🎶', 'nightlife', '/ˈnaɪtlaɪf/', 'noun', 'cuộc sống về đêm', 'The **nightlife** there is really good.']] },
    { id: 'l2-det', stage: 'l2', type: 'listen', audio: 'trip', tag: 'Listening 2 · while listening', title: 'Complete the ==notes==', task: 'Listen twice. Write **one word** in each gap.', cols: true,
      items: [
        { q: 'The trip to Brazil was ___.', a: 'wonderful' },
        { q: 'She had such a great ___.', a: 'time' },
        { q: 'The food was all so ___.', a: 'good' },
        { q: 'She ___ so much food.', a: 'ate' },
        { q: 'She thinks she put on some ___.', a: 'weight' },
        { q: 'They spent a lot of time at the ___.', a: 'beach' },
        { q: 'They also went out at ___.', a: 'night' }] },
    { id: 'l2-say', stage: 'l2', type: 'talk', tag: 'Listening 2 · post-listening', title: 'Your ==last trip==', lead: 'Ask the man’s questions about your partner’s last trip.',
      items: [
        { q: 'How was your last trip?', frame: 'It was ___. I went to ___.', model: 'It was wonderful. I went to Nha Trang.' },
        { q: 'How was the food?', frame: 'It was ___. I ate ___.', model: 'It was great. I ate a lot of seafood.' },
        { q: 'What did you do there?', frame: 'We spent a lot of time ___. We also ___.', model: 'We spent a lot of time at the beach. We also went to the night market.' },
        { q: 'Did you put on weight?', frame: 'Yes, I did! / No, I didn’t, because ___.', model: 'No, I didn’t, because we walked everywhere.' }] },

    /* ---------- LISTENING 3: multiple choice ---------- */
    { id: 'l3-w', stage: 'l3', type: 'words', tag: 'Listening 3 · pre-listening', title: 'New words for ==A special weekend==',
      words: [
        ['🏝️', 'island', '/ˈaɪlənd/', 'noun', 'hòn đảo', 'We took a boat to the **island**.'],
        ['🦐', 'seafood', '/ˈsiːfuːd/', 'noun', 'hải sản', 'We ate lots of **seafood**.'],
        ['🥾', 'go on a hike', '/ɡəʊ ɒn ə haɪk/', 'phrase', 'đi bộ đường dài (leo núi)', 'We **went on** lots of **hikes**.'],
        ['🌲', 'forest', '/ˈfɒrɪst/', 'noun', 'khu rừng', 'We hiked through the **forest**.'],
        ['🍂', 'autumn', '/ˈɔːtəm/', 'noun', 'mùa thu', 'The leaves are red in **autumn**.'],
        ['💆', 'massage', '/ˈmæsɑːʒ/', 'noun', 'mát-xa', 'We had a **massage**.'],
        ['🍀', 'lucky', '/ˈlʌki/', 'adjective', 'may mắn', 'We were **lucky** with the weather.']] },
    { id: 'l3-det', stage: 'l3', type: 'listen', audio: 'weekend', tag: 'Listening 3 · while listening', title: 'Choose the ==correct answer==', task: 'Listen twice. Choose the answers.', cols: true,
      items: [
        { q: 'Who did Jill go away with?', o: ['her mum', 'her sister', 'her friends'], a: 'her mum' },
        { q: 'How did they get to the island?', o: ['by boat', 'by plane', 'by bus'], a: 'by boat' },
        { q: 'What food did they eat a lot of?', o: ['seafood', 'noodles', 'pizza'], a: 'seafood' },
        { q: 'Where did they hike?', o: ['through the forest', 'along the beach', 'around the city'], a: 'through the forest' },
        { q: 'Why were the colours beautiful?', o: ['It was autumn.', 'It was spring.', 'It was summer.'], a: 'It was autumn.' },
        { q: 'What did they drink a lot of?', o: ['coffee', 'tea', 'juice'], a: 'coffee' },
        { q: 'How was the weather?', o: ['really good', 'very cold', 'rainy'], a: 'really good' }] },
    { id: 'l3-say', stage: 'l3', type: 'talk', tag: 'Listening 3 · post-listening', title: 'A ==special== weekend', lead: 'Talk about a special weekend or holiday.',
      items: [
        { q: 'Where did you go? Who with?', frame: 'I went to ___ with ___.', model: 'I went to Sa Pa with my parents.' },
        { q: 'How did you get there?', frame: 'We went by ___. It took ___.', model: 'We went by bus. It took six hours.' },
        { q: 'What did you see and eat?', frame: 'We saw ___ and we ate ___.', model: 'We saw beautiful rice fields and we ate grilled corn.' },
        { q: 'Were you lucky with the weather?', frame: 'Yes, we were. It was ___. / No, we weren’t. It was ___.', model: 'No, we weren’t. It was cold and foggy!' }] },

    /* ---------- READING: two texts, easier → harder ---------- */
    { id: 'r-w1', stage: 'read', type: 'words', tag: 'Reading 1 · pre-reading', title: 'New words for ==Text 1==',
      words: [
        ['🏆', 'prize', '/praɪz/', 'noun', 'giải thưởng', 'Minh won a **prize** for his picture.'],
        ['🎨', 'draw', '/drɔː/', 'verb (drew)', 'vẽ', 'He **drew** his grandmother’s kitchen.'],
        ['😰', 'nervous', '/ˈnɜːvəs/', 'adjective', 'hồi hộp, lo lắng', 'Were you **nervous**?'],
        ['🏛️', 'hall', '/hɔːl/', 'noun', 'hội trường', 'There were 200 people in the **hall**.'],
        ['🖌️', 'paints', '/peɪnts/', 'noun', 'màu vẽ', 'He won a box of **paints**.'],
        ['⛺', 'art camp', '/ɑːt kæmp/', 'noun', 'trại hè mỹ thuật', 'He’s going to an **art camp**.']] },
    { id: 'r-t1', stage: 'read', type: 'read', tag: 'Reading 1 · while reading', title: 'Text 1: ==multiple choice==', lead: 'Read the interview from the school magazine. Choose the correct answer.', textTitle: 'Five minutes with Minh, Young Artist of the Year', textIcon: '🎨', style: 'chat',
      text: [
        '**Q:** Congratulations, Minh! When did you hear the news? **Minh:** Last Friday. I was at home with my parents when my art teacher phoned. I couldn’t believe it!',
        '**Q:** What did you draw? **Minh:** I drew my grandmother’s kitchen. I spent three weeks on it. I wanted to show all the small things I love: the old clock, the green cups and her cat, Mướp.',
        '**Q:** Were you nervous at the prize-giving? **Minh:** Yes, I was! There were about two hundred people in the hall. My legs were like jelly when I went on stage.',
        '**Q:** What did you win? **Minh:** I won a big box of paints and a trip to an art camp in Đà Lạt next summer.',
        '**Q:** How did your grandmother feel? **Minh:** She cried! Then she put the picture on her wall. She says it’s her favourite present.'],
      items: [
        { q: 'When did Minh hear the news?', o: ['last Friday', 'last Sunday', 'at the prize-giving'], a: 'last Friday', ev: 'Last Friday.' },
        { q: 'Who told Minh the news?', o: ['his art teacher', 'his parents', 'his grandmother'], a: 'his art teacher', ev: 'my art teacher phoned' },
        { q: 'What did Minh draw?', o: ['his grandmother’s kitchen', 'his school', 'his own bedroom'], a: 'his grandmother’s kitchen', ev: 'I drew my grandmother’s kitchen.' },
        { q: 'How long did he spend on the picture?', o: ['three weeks', 'three days', 'two months'], a: 'three weeks', ev: 'I spent three weeks on it.' },
        { q: 'How many people were in the hall?', o: ['about 200', 'about 20', 'about 2,000'], a: 'about 200', ev: 'There were about two hundred people in the hall.' },
        { q: 'What did he win?', o: ['paints and a trip', 'a cat and a clock', 'some money'], a: 'paints and a trip', ev: 'I won a big box of paints and a trip to an art camp in Đà Lạt next summer.' },
        { q: 'What did his grandmother do with the picture?', o: ['She put it on her wall.', 'She gave it to the school.', 'She took it to Đà Lạt.'], a: 'She put it on her wall.', ev: 'Then she put the picture on her wall.' }] },
    { id: 'r-w2', stage: 'read', type: 'words', tag: 'Reading 2 · pre-reading', title: 'New words for ==Text 2==',
      words: [
        ['😱', 'shock', '/ʃɒk/', 'noun', 'cú sốc', 'She had a terrible **shock**.'],
        ['🚌', 'get off (the bus)', '/ɡet ɒf/', 'phrasal verb (got off)', 'xuống (xe buýt)', 'She **got off** the bus near school.'],
        ['🤢', 'feel sick', '/fiːl sɪk/', 'phrase (felt)', 'cảm thấy buồn nôn, rất lo', 'I **felt sick** when I lost it.'],
        ['🏷️', 'sticker', '/ˈstɪkə/', 'noun', 'nhãn dán', 'There was a **sticker** on the laptop.'],
        ['💂', 'security guard', '/sɪˈkjʊərəti ɡɑːd/', 'noun', 'bảo vệ', 'He left the bag with the **security guard**.'],
        ['🛣️', 'route', '/ruːt/', 'noun', 'tuyến đường', 'at the end of his **route**'],
        ['💌', 'thank-you card', '/ˈθæŋk juː kɑːd/', 'noun', 'thiệp cảm ơn', 'She brought a **thank-you card**.']] },
    { id: 'r-t2', stage: 'read', type: 'read', tag: 'Reading 2 · while reading', title: 'Text 2: ==complete the summary==', lead: 'Read the news story. Complete the summary with **one word** from the text.', textTitle: 'The bag that came home', textIcon: '🎒',
      text: [
        'Last Tuesday afternoon, fourteen-year-old Thu Hà had a terrible shock. She got off the number 32 bus near her school, walked to the gate and suddenly realised that her bag wasn’t on her back. Inside it were her laptop, her school books and the notebook with all her notes for the next day’s history test.',
        '‘I felt sick,’ she told us. ‘I ran back to the bus stop, but the bus was already gone.’ Thu Hà’s friends helped her. They looked at the timetable and phoned the bus company, but nobody there knew anything about a bag.',
        'Meanwhile, the bus driver, Mr Tâm, found the bag under a seat at the end of his route. He saw the school’s name on a sticker on the laptop, so after work he drove across the city to the school. He left the bag with the security guard and went home without leaving his name.',
        'The next morning, the guard gave the bag back to Thu Hà just before the test began. She did well in the test, but she wasn’t happy until she found the kind driver. Last weekend, she and her parents went to the bus station with a thank-you card and a box of cakes. ‘He didn’t want anything,’ she said, ‘but he ate two cakes!’'],
      items: [
        { q: 'Thu Hà got off the bus and then realised she didn’t have her ___.', a: 'bag', ev: 'suddenly realised that her bag wasn’t on her back' },
        { q: 'Her friends ___ the bus company, but nobody knew anything.', a: 'phoned', ev: 'phoned the bus company, but nobody there knew anything about a bag' },
        { q: 'The driver found the bag under a ___.', a: 'seat', ev: 'found the bag under a seat at the end of his route' },
        { q: 'He saw the school’s name on a ___.', a: 'sticker', ev: 'He saw the school’s name on a sticker on the laptop' },
        { q: 'He drove to the school after ___.', a: 'work', ev: 'so after work he drove across the city to the school' },
        { q: 'He didn’t leave his ___.', a: 'name', ev: 'went home without leaving his name' },
        { q: 'The ___ gave the bag back to Thu Hà the next morning.', a: ['guard', 'security guard'], show: 'guard', ev: 'The next morning, the guard gave the bag back to Thu Hà' },
        { q: 'Later, the driver ate two ___.', a: 'cakes', ev: 'but he ate two cakes!' }] },

    /* ---------- SPEAKING ---------- */
    { id: 'sp-w', stage: 'speak', type: 'words', tag: 'Speaking · pre-speaking', title: 'Phrases for ==an interview==',
      words: [
        ['🗺️', 'Where did you go?', '', 'question', 'Bạn đã đi đâu?', '– I went to the zoo.'],
        ['🫂', 'Who did you go with?', '', 'question', 'Bạn đi với ai?', '– I went with my cousins.'],
        ['🤔', 'How was it?', '', 'question', 'Nó thế nào?', '– It was amazing!'],
        ['⭐', 'What was the best part?', '', 'question', 'Phần hay nhất là gì?', '– The best part was the dolphin show.'],
        ['😀', 'It was great / amazing.', '', 'answer', 'Rất tuyệt / tuyệt vời.', 'The food was amazing.'],
        ['😩', 'It was terrible / boring.', '', 'answer', 'Thật tệ / chán.', 'The film was boring.'],
        ['😮', 'Really? Why?', '', 'response', 'Thật à? Sao vậy?', '– We didn’t go. – Really? Why?'],
        ['👍', 'Sounds great!', '', 'response', 'Nghe tuyệt quá!', '– We saw elephants. – Sounds great!']] },
    { id: 'sp-wp', stage: 'speak', type: 'pairs', tag: 'Speaking · pre-speaking', title: 'Match the ==answers==', lead: 'Tap a question on the left, then tap the best answer on the right.',
      right: ['Yes, it was. I couldn’t sleep!', 'The best part was the concert.', 'To my uncle’s farm.', 'It was amazing, thanks!', 'With my best friend, Vy.', 'We left at six and got back at ten.', 'No, we weren’t. It was sunny all day.'],
      items: [
        { t: 'match', q: 'How was your weekend?', a: 'It was amazing, thanks!' },
        { t: 'match', q: 'Where did you go?', a: 'To my uncle’s farm.' },
        { t: 'match', q: 'Who did you go with?', a: 'With my best friend, Vy.' },
        { t: 'match', q: 'What was the best part?', a: 'The best part was the concert.' },
        { t: 'match', q: 'Was it noisy in the hotel?', a: 'Yes, it was. I couldn’t sleep!' },
        { t: 'match', q: 'Were you unlucky with the weather?', a: 'No, we weren’t. It was sunny all day.' },
        { t: 'match', q: 'When did you leave and come back?', a: 'We left at six and got back at ten.' }] },
    { id: 'sp-gap', stage: 'speak', type: 'gap', tag: 'Speaking · information gap', title: 'The ==missing cake==', lead: 'At Mai’s party on Saturday, the birthday cake disappeared! Each of you knows half of the story. Ask and answer, then decide **what happened**.',
      roles: [
        { name: 'Student A', who: 'Your information', icon: '🎂', info: ['6:00 – Mai’s mum put the cake in the kitchen.', '7:00 – The guests arrived.', '7:30 – Bin, the dog, was in the garden.', '8:15 – Nam went to the kitchen to get some juice.', '8:30 – The cake wasn’t there!'], ask: ['What happened at 6:30?', 'Who was in the kitchen at 7:15?', 'Was the cake there at 7:45?', 'What happened at 8:00?', 'What did Nam see at 8:20?'] },
        { name: 'Student B', who: 'Your information', icon: '🎂', info: ['6:30 – Mai’s dad took photos of the cake.', '7:15 – Lan sat in the kitchen and talked on the phone.', '7:45 – Lan left the kitchen. The cake was still there.', '8:00 – Somebody left the back door open. Bin came inside.', '8:20 – Nam saw chocolate on Bin’s nose!'], ask: ['Where did Mai’s mum put the cake?', 'When did the guests arrive?', 'Where was Bin at 7:30?', 'Why did Nam go to the kitchen?', 'When did they notice the cake was missing?'] }],
      useful: ['What happened at …?', 'Who was in …?', 'Was the cake …?', 'I think … ate it because …'],
      model: ['**A:** What happened at 6:30?', '**B:** Mai’s dad took photos of the cake. Where did Mai’s mum put it?', '**A:** In the kitchen. Who was in the kitchen at 7:15?', '**B:** Lan. She left at 7:45, and the cake was still there.', '**A:** Bin was in the garden at 7:30. What happened at 8:00?', '**B:** Somebody left the back door open and Bin came inside. At 8:20 Nam saw chocolate on Bin’s nose!', '**A:** So Bin ate the cake!'] },
    { id: 'sp-task', stage: 'speak', type: 'speak', tag: 'Speaking · interview', title: 'Interview ==a partner==', icon: '🎤',
      task: 'Interview your partner about **last weekend**. Ask **five questions** and make notes. Then change roles. At the end, tell another pair **one interesting thing** your partner did.',
      steps: ['Where did you go? Who did you go with?', 'What did you do there?', 'How was it? What was the best part?', 'Was there a problem? What happened?', 'Report: Last weekend, [name] went …'],
      useful: ['Where did you go?', 'Who did you go with?', 'How was it?', 'What was the best part?', 'Really? Why?', 'Last weekend, he / she …'],
      timer: 150, record: true,
      model: ['**A:** How was your weekend, Huy?', '**B:** It was great, thanks!', '**A:** Where did you go?', '**B:** I went to my uncle’s farm in Long An with my cousins.', '**A:** What did you do there?', '**B:** We fed the chickens and we caught fish in the river. I caught three!', '**A:** Sounds great! Was there a problem?', '**B:** Yes, I fell in the river! My phone got wet.', '**A:** Oh no! What was the best part?', '**B:** The barbecue in the evening. We ate the fish we caught.', '**A (to another pair):** Last weekend, Huy went to a farm. He caught three fish, but he fell in the river!'] },

    /* ---------- WRITING ---------- */
    { id: 'w-model', stage: 'write', type: 'read', tag: 'Writing · pre-writing', title: 'Look at ==a model summary==', lead: 'Read the summary. Answer the questions.', textTitle: 'Huy’s weekend', textIcon: '🎣', numbered: false,
      text: ['I interviewed my classmate Huy about his weekend. Last Saturday, he went to his uncle’s farm in Long An with his cousins. They fed the chickens and caught fish in the river. Huy caught three fish, but then he fell in the water and his phone got wet!', 'In the evening, they had a barbecue and ate the fish. Huy said the barbecue was the best part. He was tired but very happy when he got home on Sunday.'],
      items: [
        { q: 'Which verb is irregular?', o: ['caught', 'interviewed', 'happened'], a: 'caught', ev: 'They fed the chickens and caught fish in the river.' },
        { q: 'Which sentence uses the past of “to be”?', o: ['He was tired but very happy', 'They fed the chickens', 'Huy caught three fish'], a: 'He was tired but very happy', ev: 'He was tired but very happy when he got home on Sunday.' },
        { q: 'What was the problem?', o: ['He fell in the water.', 'It rained all day.', 'He lost his cousins.'], a: 'He fell in the water.', ev: 'he fell in the water and his phone got wet!' },
        { q: 'How does the writer report Huy’s opinion?', o: ['Huy said …', 'Huy asked …', 'Huy wrote …'], a: 'Huy said …', ev: 'Huy said the barbecue was the best part.' }] },
    { id: 'w-task', stage: 'write', type: 'write', tag: 'Writing · task', title: 'Write ==an interview summary==',
      task: 'Write a summary (**70–90 words**) of your interview with your partner about last weekend.',
      plan: ['Who did you interview? What about?', 'Where did he / she go? Who with?', 'What did they do? (three irregular verbs)', 'Was there a problem? What happened?', 'What was the best part? How did he / she feel?'],
      model: ['Huy’s weekend', 'I interviewed my classmate Huy about his weekend. Last Saturday, he went to his uncle’s farm in Long An with his cousins. They fed the chickens and caught fish in the river. Huy caught three fish, but then he fell in the water and his phone got wet!', 'In the evening, they had a barbecue and ate the fish. Huy said the barbecue was the best part. He was tired but very happy when he got home on Sunday.'],
      checklist: ['I use was / were correctly.', 'I use at least four irregular past forms.', 'I use the past simple for all finished actions.', 'I describe one problem and the best part.', 'I report my partner’s words: He / She said …', 'My summary has 70–90 words.'],
      min: 70, max: 90, draft: true },

    /* ---------- REVIEW ---------- */
    { id: 'u-check', stage: 'review', type: 'practice', tag: 'Review', title: 'Unit 5 ==check==', cols: true,
      items: [
        { q: 'We ___ at home last night.', o: ['were', 'was', 'did'], a: 'were' },
        { q: '___ the film good?', o: ['Was', 'Did', 'Were'], a: 'Was' },
        { q: '– Were they late? – No, they ___.', o: ['weren’t', 'didn’t', 'wasn’t'], a: 'weren’t' },
        { q: 'I ___ my keys yesterday.', o: ['lost', 'losed', 'lose'], a: 'lost' },
        { q: 'She ___ a letter to her aunt.', o: ['wrote', 'writed', 'written'], a: 'wrote' },
        { q: 'They didn’t ___ the bus.', o: ['catch', 'caught', 'catched'], a: 'catch' },
        { q: 'Did you ___ Peter at the party?', o: ['see', 'saw', 'seen'], a: 'see' },
        { q: 'He ___ the cake into eight pieces.', o: ['cut', 'cutted', 'cuts'], a: 'cut' },
        { q: 'We ___ a great time in Huế.', o: ['had', 'haved', 'have'], a: 'had' },
        { q: '– Where did you go? – ___', o: ['To the zoo.', 'Yes, I did.', 'It was great.'], a: 'To the zoo.' }] },
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Review', title: 'What can you ==do now==?',
      cando: ['I can use was / were in sentences, questions and short answers.', 'I can use common irregular past forms.', 'I can make negatives and questions with did + base verb.', 'I can understand real speakers talk about a day, a trip and a weekend.', 'I can read two news stories and find details.', 'I can interview a partner about last weekend and write a summary.'] }
  ]
};
