/* Unit 7 · Past continuous
   Book: Destination A2, Unit 7, pages 30–32.
   Order: grammar theory (page 30) → book exercises A–F, quoted exactly (pages 31–32) →
   skills, each with its own pre-stage for new words → review. One card = one slide. */
window.A2_UNITS[7] = {
  n: 7, type: 'Grammar', title: 'An unexpected interruption',
  focus: 'Past continuous',
  book: 'Destination A2 · Unit 7 · pages 30–32',
  goals: ['Make past continuous sentences, negatives, questions and short answers.', 'Use the past continuous with the past simple and when, while, as.', 'Understand three real conversations about what people were doing.', 'Describe an incident as a witness and write a short account.'],
  audio: {
    movie: { title: 'Movie night', speakers: 'A man and a woman (Laura)', level: 'B2 Sound Grammar · simple language', length: '0:54', provider: 'ELLLO Sound Grammar B2-11 · Conversation 1', src: 'https://elllo.org/Audio/SoundGrammar/B2-Audio4x/B2-11-1-Past-Continous-Last-Night.mp3', page: 'https://elllo.org/book/B2/B2-11-Past-Continuous.html' },
    hike: { title: 'A terrible holiday', speakers: 'A man and a woman', level: 'B2 Sound Grammar · simple language', length: '1:01', provider: 'ELLLO Sound Grammar B2-11 · Conversation 4', src: 'https://elllo.org/Audio/SoundGrammar/B2-Audio4x/B2-11-4-Past-Continous-Vacation.mp3', page: 'https://elllo.org/book/B2/B2-11-Past-Continuous.html' },
    msg: { title: 'Why didn’t you text back?', speakers: 'A man and a woman', level: 'B2 Sound Grammar · simple language', length: '0:51', provider: 'ELLLO Sound Grammar B2-11 · Conversation 2', src: 'https://elllo.org/Audio/SoundGrammar/B2-Audio4x/B2-11-2-Past-Continous-Message.mp3', page: 'https://elllo.org/book/B2/B2-11-Past-Continuous.html' }
  },
  stages: [
    { id: 'start', skill: 'start', icon: '⚡', name: 'Welcome', caption: 'What were you doing when…?' },
    { id: 'grammar', skill: 'grammar', icon: '🧩', name: 'Grammar', caption: 'Past continuous: all the rules first, then the book exercises A–F.' },
    { id: 'l1', skill: 'listening', icon: '🎬', name: 'Listening 1: Movie night', caption: 'Pre-listening words → complete the notes → speaking.' },
    { id: 'l2', skill: 'listening', icon: '🥾', name: 'Listening 2: A terrible holiday', caption: 'Pre-listening words → true or false → speaking.' },
    { id: 'l3', skill: 'listening', icon: '📱', name: 'Listening 3: Why didn’t you text back?', caption: 'Pre-listening words → multiple choice → speaking.' },
    { id: 'read', skill: 'reading', icon: '🌩️', name: 'Reading: When it happened', caption: 'Two texts, from easier to harder. Pre-reading words, then read for details.' },
    { id: 'speak', skill: 'speaking', icon: '🕵️', name: 'Speaking: The witness', caption: 'Witness phrases → the missing phone information gap → police interview.' },
    { id: 'write', skill: 'writing', icon: '✍️', name: 'Writing: An incident account', caption: 'Model text → plan, write and check.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Review', caption: 'Unit check, can-do list and homework.' }
  ],
  cards: [
    /* ---------- WELCOME ---------- */
    { id: 'cover', stage: 'start', type: 'cover', title: 'An unexpected ==interruption==' },
    { id: 'warm', stage: 'start', type: 'talk', tag: 'Warm-up · speaking', title: 'What were you ==doing==?', lead: 'Ask and answer with a partner.',
      items: [
        { q: 'What were you doing at 8 o’clock last night?', frame: 'At 8 o’clock last night, I was ___ing.', model: 'At 8 o’clock last night, I was doing my homework.' },
        { q: 'What was your family doing at that time?', frame: 'My ___ was ___ing and my ___ was ___ing.', model: 'My mum was cooking and my brother was playing a game.' },
        { q: 'What were you doing when your alarm rang this morning?', frame: 'I was ___ing when my alarm rang.', model: 'I was dreaming about a football match when my alarm rang!' },
        { q: 'What was happening outside when you came to class?', frame: 'When I came to class, it was ___ing and people were ___ing.', model: 'When I came to class, it was raining and people were waiting for the bus.' }] },

    /* ---------- GRAMMAR: theory (book p. 30) ---------- */
    { id: 'g1', stage: 'grammar', type: 'grammar', tag: 'Grammar 1 · past continuous', title: 'Past continuous: ==form==',
      blocks: [
        { formulas: [
          ['✅ Affirmative', 'S + **was / were** + **V-ing**', 'I / he / she / it **was playing**. · You / we / they **were playing**.'],
          ['❌ Negative', 'S + **was not (wasn’t) / were not (weren’t)** + **V-ing**', 'I / he / she / it **was not (wasn’t) playing**. · You / we / they **were not (weren’t) playing**.'],
          ['❓ Question', '**Was / Were** + S + **V-ing** …?', '**Was** I / he / she / it **playing**? · **Were** you / we / they **playing**?'],
          ['💬 Short answer', 'Yes, S + **was / were**.   ·   No, S + **wasn’t / weren’t**.', 'Yes, I / he / she / it **was**. / No, I / he / she / it **wasn’t**. · Yes, you / we / they **were**. / No, you / we / they **weren’t**.']] },
        { vi: 'Quá khứ tiếp diễn: **S + was / were + V-ing**. **was** đi với I / he / she / it; **were** đi với you / we / they. Câu hỏi: đưa was / were lên trước chủ ngữ.' }] },
    { id: 'g2', stage: 'grammar', type: 'grammar', tag: 'Grammar 2 · past continuous', title: 'Past continuous: ==use==', layout: 'two',
      blocks: [
        { uses: [
          ['actions in progress at a particular time or during a period in the past', 'What **were** you **doing** at four o’clock? · He **was playing** basketball at four o’clock.', 'hành động đang diễn ra tại một thời điểm trong quá khứ'],
          ['actions happening at the same time in the past', 'Some children **were swimming**, but the others **were sunbathing**. · While the music **was playing**, they **were dancing**.', 'hai hành động cùng diễn ra song song'],
          ['actions in progress in the past that were interrupted by another past action', 'Teresa **was kicking** the ball when she fell over. · The players **were training** when it began to rain.', 'hành động đang diễn ra thì bị hành động khác cắt ngang']] },
        { chips: { title: 'Helpful hints: past continuous is usually used with', list: ['at that moment', 'at one / two o’clock', 'at this time yesterday', 'all morning / all day'] } }] },
    { id: 'g3', stage: 'grammar', type: 'grammar', tag: 'Grammar 3 · with the past simple', title: 'Past continuous + ==past simple==',
      blocks: [
        { formulas: [
          ['when', 'S + **was / were V-ing** + **when** + S + **V2**', 'Teresa **was playing** football **when** she **broke** her leg.', 'Hành động dài (tiếp diễn) bị hành động ngắn (quá khứ đơn) cắt ngang.'],
          ['while', '**While** + S + **was / were V-ing**, S + **V2**', '**While** the players **were training**, it **began** to rain.', 'while / as đi với hành động đang diễn ra (tiếp diễn).'],
          ['as', '**As** + S + **was / were V-ing**, S + **V2**', '**As** Joe **was swimming**, his coach **shouted** to him.']] },
        { watch: { text: 'Past simple and past continuous are often used together to show that one action happened while another action was in progress.', ex: ['✅ Our pizza **arrived** while we **were watching** the game on TV.'] } },
        { hint: { title: 'Helpful hint', text: 'Past continuous is never used to describe completed or repeated actions in the past. To describe these actions, use past simple.', ex: ['❌ Peter ~~was falling~~ off his bicycle three times last month.', '✅ Peter **fell** off his bicycle three times last month.'] } }] },

    /* ---------- GRAMMAR: book exercises A–F (pp. 31–32), quoted exactly ---------- */
    { id: 'exA', stage: 'grammar', type: 'practice', book: 'A', page: 31, tag: 'Grammar practice', title: 'Exercise ==A==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: 'I was {playing|play} tennis yesterday when it started to rain.', a: 'playing' },
        { q: '{Was training Ivan|Was Ivan training} every day last month?', a: 'Was Ivan training' },
        { q: '{Were you swimming|You were swimming} when you saw the shark?', a: 'Were you swimming' },
        { q: 'Katrina and George {were riding|was riding} their bikes when they found the lost puppy.', a: 'were riding' },
        { q: 'Diane {wasn’t|didn’t} watching the basketball match at three o’clock.', a: 'wasn’t' },
        { q: 'Wendy {was listen|was listening} to the coach very carefully, but the other players weren’t.', a: 'was listening' },
        { q: 'What {you were|were you} doing when you heard the news?', a: 'were you' },
        { q: 'While Darren and I {was|were} playing a chess match, the lights went off.', a: 'were' }] },
    { id: 'exB', stage: 'grammar', type: 'practice', book: 'B', page: 31, tag: 'Grammar practice', title: 'Exercise ==B==', lead: 'Choose the correct answer.', cols: true, abc: true,
      items: [
        { q: 'Where ___ when I saw you yesterday morning?', o: ['you going', 'were you go', 'were you going'], a: 'were you going' },
        { q: 'The children ___ a game online when their parents came back.', o: ['were playing', 'was playing', 'playing'], a: 'were playing' },
        { q: 'Some players ___ to the coach, but others were playing with a ball.', o: ['listen', 'were listening', 'was listening'], a: 'were listening' },
        { q: 'Who was that woman you ___ to?', o: ['was talking', 'talks', 'were talking'], a: 'were talking' },
        { q: 'Why ___ last night?', o: ['was the baby crying', 'the baby was crying', 'was crying the baby'], a: 'was the baby crying' },
        { q: 'While David ___ attention, someone took his tablet.', o: ['didn’t pay', 'wasn’t paying', 'not paying'], a: 'wasn’t paying' },
        { q: 'The team scored the goal while I ___ at the TV.', o: ['wasn’t looking', 'not looking', 'weren’t looking'], a: 'wasn’t looking' },
        { q: 'The footballers ___ after the ball when the referee stopped the match.', o: ['was running', 'were run', 'were running'], a: 'were running' }] },
    { id: 'exC', stage: 'grammar', type: 'practice', book: 'C', page: 31, tag: 'Grammar practice', title: 'Exercise ==C==', lead: 'Complete the sentences with the verbs in *past continuous*.', cols: true,
      items: [
        { q: 'Marina ___ to her friend when the teacher came into the class.', a: 'was talking', hint: '**(talk)**' },
        { q: 'Jerry and Ben ___ around the track while the rest of the class were playing volleyball.', a: 'were running', hint: '**(run)**' },
        { q: 'Jill and I ___ attention to the coach and she got angry with us.', a: ['weren’t paying', 'were not paying'], hint: '**(not / pay)**' },
        { q: 'Why ___ your trainers when I saw you yesterday evening?', a: 'were you wearing', hint: '**(you / wear)**' },
        { q: 'Some children ___ books, while others were doing their homework.', a: 'were reading', hint: '**(read)**' },
        { q: 'Which match ___ on TV when his parents got back home?', a: 'was Nick watching', hint: '**(Nick / watch)**' },
        { q: 'William and Mary ___ their ice-skating figures when their coach arrived.', a: ['weren’t practising', 'were not practising', 'weren’t practicing', 'were not practicing'], hint: '**(not / practise)**' },
        { q: 'I ___ to my favourite song when the teacher saw me.', a: 'was listening', hint: '**(listen)**' }] },
    { id: 'exD', stage: 'grammar', type: 'practice', book: 'D', page: 32, tag: 'Grammar practice', title: 'Exercise ==D==', lead: 'Fill in the blanks using when, while or as. In some cases, two correct answers are possible.', cols: true,
      items: [
        { q: '___ Danny was jogging, he saw a kitten in the park.', a: ['While', 'As'], show: 'While / As' },
        { q: 'Marek and Vladimir were training for the match ___ their coach asked them a question.', a: 'when' },
        { q: 'What was your brother doing ___ you asked him to help you?', a: 'when' },
        { q: 'The children were playing basketball in the garden ___ their parents were making lunch.', a: ['while', 'as'], show: 'while / as' },
        { q: '___ I was coming home from the gym, I found a wallet in the street.', a: ['While', 'As'], show: 'While / As' },
        { q: 'Daniela was riding her bike ___ she met an old friend.', a: 'when' },
        { q: 'Kevin and Jim were watching a match on TV ___ their dog started barking.', a: 'when' },
        { q: 'Where were you going ___ I met you?', a: 'when' }] },
    { id: 'exE', stage: 'grammar', type: 'practice', book: 'E', page: 32, tag: 'Grammar practice', title: 'Exercise ==E==', lead: 'Make sentences using verbs in the appropriate form.', cols: true,
      items: [
        { t: 'write', q: 'Ron / sleep / when / he / hear / a loud noise.', a: ['Ron was sleeping when he heard a loud noise.'] },
        { t: 'write', q: 'What / you / do / when / I / phone / you?', a: ['What were you doing when I phoned you?'] },
        { t: 'write', q: 'Jenny / not do / her homework / when / Nick / arrive.', a: ['Jenny wasn’t doing her homework when Nick arrived.', 'Jenny was not doing her homework when Nick arrived.'] },
        { t: 'write', q: 'Maria and Paul / play chess / when / their parents / come home.', a: ['Maria and Paul were playing chess when their parents came home.'] },
        { t: 'write', q: 'Sam and Kevin / visit / Barcelona’s stadium / when they / see/Messi.', a: ['Sam and Kevin were visiting Barcelona’s stadium when they saw Messi.'] },
        { t: 'write', q: 'While I / cook / dinner / for my parents, / my friend phone / me.', a: ['While I was cooking dinner for my parents, my friend phoned me.'] },
        { t: 'write', q: 'While I / look / out of the window, / my cat / steal / my food from the plate.', a: ['While I was looking out of the window, my cat stole my food from the plate.'] },
        { t: 'write', q: 'Where / the athletes / run / when / you / see / them?', a: ['Where were the athletes running when you saw them?'] }] },
    { id: 'exF', stage: 'grammar', type: 'cloze', book: 'F', page: 32, tag: 'Grammar practice', title: 'Exercise ==F==', lead: 'Open brackets by putting verbs in past simple or *past continuous*.',
      text: 'Something fantastic [1] last week! While I [2] home from volleyball practice last Monday, I [3] something very strange. My friends, Dana and Ben and I [4] down the street and we [5] about our volleyball game, when we [6] a small noise. We [7] looking to see where it [8] from but we couldn’t see anything. As we [9] , Dana noticed a small, white cat. It [10] and it looked hungry. I [11] to take it home with me and give it some food. When I [12] home, my mother [13] lunch. So I took the kitten to my room without telling her anything. Later, when she saw the kitten, she [14] happy at first, but finally she let me keep her. Now, we call her Snowy and she sleeps in my room!',
      items: [
        { a: 'happened', hint: 'happen' }, { a: 'was coming', hint: 'come' }, { a: 'saw', hint: 'see' }, { a: 'were walking', hint: 'walk' },
        { a: 'were talking', hint: 'talk' }, { a: 'heard', hint: 'hear' }, { a: 'started', hint: 'start' }, { a: ['was coming', 'came'], show: 'was coming', hint: 'come' },
        { a: 'were looking', hint: 'look' }, { a: 'was crying', hint: 'cry' }, { a: 'decided', hint: 'decide' }, { a: 'arrived', hint: 'arrive' },
        { a: 'was cooking', hint: 'cook' }, { a: ['wasn’t', 'was not'], hint: 'not / be' }] },

    /* ---------- LISTENING 1: complete the notes ---------- */
    { id: 'l1-w', stage: 'l1', type: 'words', tag: 'Listening 1 · pre-listening', title: 'New words for ==Movie night==',
      words: [
        ['🎬', 'movie night', '/ˈmuːvi naɪt/', 'noun', 'buổi tối xem phim (cùng bạn bè)', 'I forgot it was **movie night**.'],
        ['📝', 'study for an exam', '/ˈstʌdi fər ən ɪɡˈzæm/', 'phrase', 'ôn thi', 'I was **studying for my exam**.'],
        ['😱', 'scary', '/ˈskeəri/', 'adjective', 'đáng sợ', 'Is it a **scary** film?'],
        ['🦸', 'main character', '/meɪn ˈkærəktə/', 'noun', 'nhân vật chính', 'The **main character** saves the city.'],
        ['✈️', 'crash', '/kræʃ/', 'verb', 'rơi, đâm (máy bay, xe)', 'He stopped the plane from **crashing**.'],
        ['😫', 'scream', '/skriːm/', 'verb', 'hét lên', 'Everyone was **screaming**.'],
        ['🤐', 'spoil (a film)', '/spɔɪl/', 'verb', 'kể trước nội dung (làm mất hay)', 'Don’t **spoil** it for me!'],
        ['🔚', 'give away the ending', '/ɡɪv əˈweɪ ðə ˈendɪŋ/', 'phrase', 'tiết lộ cái kết', 'Please don’t **give away the ending**.']] },
    { id: 'l1-det', stage: 'l1', type: 'listen', audio: 'movie', tag: 'Listening 1 · while listening', title: 'Complete the ==notes==', task: 'Listen twice. Write **one word** in each gap.', cols: true,
      items: [
        { q: 'Last night Laura was ___ for her exam.', a: 'studying' },
        { q: 'She forgot it was movie ___ .', a: 'night' },
        { q: 'The man and his friends saw *Sky ___* .', a: 'Drop' },
        { q: 'The main character had to stop a ___ from crashing.', a: 'plane' },
        { q: 'Everyone was ___ when that happened.', a: 'screaming' },
        { q: 'The man was thinking of ___ the film again.', a: 'seeing' },
        { q: 'Laura doesn’t want him to give away the ___ .', a: 'ending' }] },
    { id: 'l1-say', stage: 'l1', type: 'talk', tag: 'Listening 1 · post-listening', title: 'Where ==were you==?', lead: 'Ask and answer about last night.',
      items: [
        { q: 'Where were you at 7 pm last night?', frame: 'I was at / in ___. I was ___ing.', model: 'I was at home. I was studying for a test.' },
        { q: 'What were your friends doing?', frame: 'I think they were ___ing.', model: 'I think they were playing games online.' },
        { q: 'What was the last film you watched? Was it scary?', frame: 'I watched ___. It was (really) scary / funny / boring.', model: 'I watched a horror film. It was really scary.' },
        { q: 'What were you doing at the best part of the film?', frame: 'At the best part, I was ___ing!', model: 'At the best part, I was hiding behind a cushion!' }] },

    /* ---------- LISTENING 2: true or false ---------- */
    { id: 'l2-w', stage: 'l2', type: 'words', tag: 'Listening 2 · pre-listening', title: 'New words for ==A terrible holiday==',
      words: [
        ['🏖️', 'vacation', '/vəˈkeɪʃn/', 'noun (US)', 'kỳ nghỉ (= holiday)', 'How was your **vacation**?'],
        ['🥾', 'hike', '/haɪk/', 'verb', 'đi bộ đường dài, leo núi', 'He fell while we were **hiking**.'],
        ['🤕', 'hurt (your leg)', '/hɜːt/', 'verb (hurt)', 'làm đau, bị thương', 'He **hurt** his leg.'],
        ['🪨', 'climb a rock', '/klaɪm ə rɒk/', 'phrase', 'leo lên tảng đá', 'He was **climbing a big rock**.'],
        ['🛤️', 'trail', '/treɪl/', 'noun', 'đường mòn', 'Stay on the **trail**.'],
        ['🧊', 'slippery', '/ˈslɪpəri/', 'adjective', 'trơn trượt', 'The trail was **slippery**.'],
        ['🧑‍🦯', 'guide', '/ɡaɪd/', 'noun', 'hướng dẫn viên', 'The **guide** warned us.'],
        ['⚠️', 'warn', '/wɔːn/', 'verb', 'cảnh báo', 'She **warned** us not to climb the rocks.']] },
    { id: 'l2-det', stage: 'l2', type: 'listen', audio: 'hike', tag: 'Listening 2 · while listening', title: 'True or ==False==?', task: 'Listen twice. Are the sentences true or false?', cols: true,
      items: [
        { q: 'The woman had a great holiday.', o: ['True', 'False'], a: 'False' },
        { q: 'Her husband hurt his leg while they were hiking.', o: ['True', 'False'], a: 'True' },
        { q: 'He fell while he was climbing a big rock.', o: ['True', 'False'], a: 'True' },
        { q: 'It was sunny that day.', o: ['True', 'False'], a: 'False' },
        { q: 'The trail was slippery.', o: ['True', 'False'], a: 'True' },
        { q: 'They were hiking alone.', o: ['True', 'False'], a: 'False' },
        { q: 'The guide told them to stay on the trail.', o: ['True', 'False'], a: 'True' },
        { q: 'Her husband was trying to take a photo.', o: ['True', 'False'], a: 'True' }] },
    { id: 'l2-say', stage: 'l2', type: 'talk', tag: 'Listening 2 · post-listening', title: 'Small ==accidents==', lead: 'Tell your partner about a small accident.',
      items: [
        { q: 'Did you ever hurt yourself? What were you doing?', frame: 'I hurt my ___ while I was ___ing.', model: 'I hurt my arm while I was playing basketball.' },
        { q: 'What was the weather like?', frame: 'It was ___ing and the ___ was ___.', model: 'It was raining and the court was slippery.' },
        { q: 'Who was with you? What did they do?', frame: 'I was with ___. He / She ___ed.', model: 'I was with my cousin. He called my mum.' },
        { q: 'What lesson did you learn?', frame: 'Now I always ___ / never ___.', model: 'Now I never play on a wet court.' }] },

    /* ---------- LISTENING 3: multiple choice ---------- */
    { id: 'l3-w', stage: 'l3', type: 'words', tag: 'Listening 3 · pre-listening', title: 'New words for ==Why didn’t you text back?==',
      words: [
        ['💬', 'text (someone) back', '/tekst bæk/', 'phrasal verb', 'nhắn tin trả lời', 'You never **texted** me **back**.'],
        ['🍝', 'from scratch', '/frəm skrætʃ/', 'phrase', 'tự làm từ đầu (từ nguyên liệu)', 'We made pasta **from scratch**.'],
        ['🚗', 'drive (someone) to', '/draɪv tə/', 'phrase', 'chở ai đến', 'I was **driving her to** the doctor.'],
        ['🩺', 'the doctor', '/ðə ˈdɒktə/', 'noun', 'phòng khám, bác sĩ', 'She went to **the doctor**.'],
        ['💊', 'prescription', '/prɪˈskrɪpʃn/', 'noun', 'đơn thuốc', 'She was getting her **prescriptions**.'],
        ['⏱️', 'right away', '/raɪt əˈweɪ/', 'phrase', 'ngay lập tức', 'I didn’t see it **right away**.'],
        ['🍽️', 'invite (someone) for dinner', '/ɪnˈvaɪt fə ˈdɪnə/', 'phrase', 'mời ai ăn tối', 'I’d love to **invite you for dinner**.']] },
    { id: 'l3-det', stage: 'l3', type: 'listen', audio: 'msg', tag: 'Listening 3 · while listening', title: 'Choose the ==correct answer==', task: 'Listen twice. Choose the answers.', cols: true,
      items: [
        { q: 'What kind of class did the man go to?', o: ['a cooking class', 'a dance class', 'a driving class'], a: 'a cooking class' },
        { q: 'What did they learn to make?', o: ['pasta', 'pizza', 'cake'], a: 'pasta' },
        { q: 'Who was the woman helping?', o: ['her grandmother', 'her mother', 'her friend'], a: 'her grandmother' },
        { q: 'What was she doing when he texted her?', o: ['driving to the doctor', 'cooking dinner', 'studying'], a: 'driving to the doctor' },
        { q: 'Why didn’t she text back?', o: ['She didn’t see the message right away.', 'Her phone was broken.', 'She was angry.'], a: 'She didn’t see the message right away.' },
        { q: 'Is her grandmother OK?', o: ['Yes, she is fine.', 'No, she is in hospital.', 'We don’t know.'], a: 'Yes, she is fine.' },
        { q: 'What does the man want to do?', o: ['invite her for dinner', 'teach her to drive', 'visit her grandmother'], a: 'invite her for dinner' }] },
    { id: 'l3-say', stage: 'l3', type: 'talk', tag: 'Listening 3 · post-listening', title: 'Sorry, I ==was busy==!', lead: 'Explain why you didn’t answer. Use **I was …-ing when …**.',
      items: [
        { q: 'Why didn’t you answer my call last night?', frame: 'Sorry! I was ___ing when you called.', model: 'Sorry! I was having a shower when you called.' },
        { q: 'Why were you late for class?', frame: 'I was ___ing when ___.', model: 'I was waiting for the bus when it started to rain.' },
        { q: 'Why didn’t you see my message?', frame: 'I was ___ing, so I didn’t see it right away.', model: 'I was helping my dad, so I didn’t see it right away.' },
        { q: 'What were you doing when your parents came home?', frame: 'When they came home, I was ___ing.', model: 'When they came home, I was watching a cooking show.' }] },

    /* ---------- READING: two texts, easier → harder ---------- */
    { id: 'r-w1', stage: 'read', type: 'words', tag: 'Reading 1 · pre-reading', title: 'New words for ==Text 1==',
      words: [
        ['⛈️', 'storm', '/stɔːm/', 'noun', 'cơn bão, dông', 'The **storm** started at four.'],
        ['🌳', 'branch', '/brɑːntʃ/', 'noun', 'cành cây', 'A big **branch** fell.'],
        ['💥', 'thunder', '/ˈθʌndə/', 'noun', 'sấm', 'We heard loud **thunder**.'],
        ['🪟', 'shut (the window)', '/ʃʌt/', 'verb (shut)', 'đóng (cửa sổ)', 'I **shut** all the windows.'],
        ['💧', 'soaked', '/səʊkt/', 'adjective', 'ướt sũng', 'I was **soaked**.'],
        ['🧺', 'bring in (washing)', '/brɪŋ ɪn/', 'phrasal verb', 'mang (quần áo phơi) vào nhà', 'I **brought in** the washing.']] },
    { id: 'r-t1', stage: 'read', type: 'read', tag: 'Reading 1 · while reading', title: 'Text 1: ==who was it==?', lead: 'Read the four posts. Who…? Choose the person.', textTitle: 'Where were you when the storm started?', textIcon: '⛈️', numbered: false,
      text: [
        '**Ngân:** I was riding my bike home from school when the sky went black. I wasn’t wearing a raincoat, so I was soaked in two minutes!',
        '**Phúc:** I was at home. My mum and I were bringing in the washing when we heard the thunder. Then a big branch fell on our neighbour’s car.',
        '**Thảo:** I was having a piano lesson. My teacher was playing a difficult piece when the lights went off. We finished the lesson in the dark!',
        '**Kiên:** I was sleeping on the sofa. While I was dreaming, the wind opened the window and the rain woke me up. I shut all the windows and then I couldn’t sleep again.'],
      items: [
        { q: 'Who was outside on a bike?', o: ['Ngân', 'Phúc', 'Thảo', 'Kiên'], a: 'Ngân', fixed: true, ev: 'I was riding my bike home from school when the sky went black.' },
        { q: 'Who got very wet?', o: ['Ngân', 'Phúc', 'Thảo', 'Kiên'], a: 'Ngân', fixed: true, ev: 'I was soaked in two minutes!' },
        { q: 'Who was helping a parent?', o: ['Ngân', 'Phúc', 'Thảo', 'Kiên'], a: 'Phúc', fixed: true, ev: 'My mum and I were bringing in the washing when we heard the thunder.' },
        { q: 'Who saw a tree damage a car?', o: ['Ngân', 'Phúc', 'Thảo', 'Kiên'], a: 'Phúc', fixed: true, ev: 'Then a big branch fell on our neighbour’s car.' },
        { q: 'Who was learning something?', o: ['Ngân', 'Phúc', 'Thảo', 'Kiên'], a: 'Thảo', fixed: true, ev: 'I was having a piano lesson.' },
        { q: 'Who lost the electricity?', o: ['Ngân', 'Phúc', 'Thảo', 'Kiên'], a: 'Thảo', fixed: true, ev: 'My teacher was playing a difficult piece when the lights went off.' },
        { q: 'Who was asleep when the storm started?', o: ['Ngân', 'Phúc', 'Thảo', 'Kiên'], a: 'Kiên', fixed: true, ev: 'I was sleeping on the sofa.' },
        { q: 'Who closed the windows?', o: ['Ngân', 'Phúc', 'Thảo', 'Kiên'], a: 'Kiên', fixed: true, ev: 'I shut all the windows' }] },
    { id: 'r-w2', stage: 'read', type: 'words', tag: 'Reading 2 · pre-reading', title: 'New words for ==Text 2==',
      words: [
        ['🏅', 'sports day', '/ˈspɔːts deɪ/', 'noun', 'ngày hội thể thao', 'It was our school **sports day**.'],
        ['🐐', 'goat', '/ɡəʊt/', 'noun', 'con dê', 'A **goat** ran onto the field.'],
        ['🏃', 'race', '/reɪs/', 'noun', 'cuộc đua', 'We were running the 400-metre **race**.'],
        ['🏟️', 'track', '/træk/', 'noun', 'đường chạy', 'The goat ran around the **track**.'],
        ['📣', 'cheer', '/tʃɪə/', 'verb', 'cổ vũ', 'Parents were **cheering**.'],
        ['🔓', 'escape', '/ɪˈskeɪp/', 'verb', 'trốn thoát', 'It **escaped** from a farm.'],
        ['🪢', 'rope', '/rəʊp/', 'noun', 'sợi dây thừng', 'He caught it with a **rope**.'],
        ['🏆', 'finish line', '/ˈfɪnɪʃ laɪn/', 'noun', 'vạch đích', 'The goat crossed the **finish line** first!']] },
    { id: 'r-t2', stage: 'read', type: 'read', tag: 'Reading 2 · while reading', title: 'Text 2: ==short answers==', lead: 'Read the eyewitness report. Answer with **no more than three words**.', textTitle: 'The fastest runner at sports day', textIcon: '🐐',
      text: [
        'Our school sports day last Saturday was going perfectly. The sun was shining, the younger children were sitting on the grass with their teachers, and hundreds of parents were cheering from the stands. At about ten o’clock, my class was getting ready for the 400-metre race.',
        'We were standing on the starting line when I heard people laughing behind me. I turned around and saw a small brown goat. It was running across the football field, and two of the PE teachers were chasing it. Nobody knew where it came from.',
        'While the teachers were trying to catch it, the goat ran onto the track. The starter, Mr Hưng, thought it was time to begin, so he blew his whistle! We all started running – and so did the goat. It ran the whole race next to us, and it crossed the finish line first. The parents were cheering even louder than before.',
        'Later, a farmer arrived in a small truck. He explained that the goat escaped from his farm while he was fixing a fence. He caught it with a rope and thanked everyone for being so kind. The school newspaper’s headline the next day was: “New school record – by a goat!”'],
      items: [
        { q: 'What was the weather like?', a: ['sunny', 'the sun was shining', 'it was sunny', 'sun was shining'], show: 'sunny', ev: 'The sun was shining' },
        { q: 'Where were the younger children sitting?', a: ['on the grass'], show: 'on the grass', ev: 'the younger children were sitting on the grass with their teachers' },
        { q: 'Which race was the writer’s class getting ready for?', a: ['the 400-metre race', '400-metre race', '400 metre race', 'the 400 metre race', '400m race', 'the 400m race', '400-metre'], show: 'the 400-metre race', ev: 'my class was getting ready for the 400-metre race' },
        { q: 'What did the writer hear before turning around?', a: ['people laughing', 'laughing', 'laughter'], show: 'people laughing', ev: 'I heard people laughing behind me' },
        { q: 'Who was chasing the goat at first?', a: ['two PE teachers', 'PE teachers', 'two of the PE teachers', 'the PE teachers', 'two teachers', 'teachers'], show: 'two PE teachers', ev: 'two of the PE teachers were chasing it' },
        { q: 'What did Mr Hưng blow?', a: ['his whistle', 'a whistle', 'whistle'], show: 'his whistle', ev: 'he blew his whistle' },
        { q: 'What was the farmer doing when the goat escaped?', a: ['fixing a fence', 'he was fixing a fence', 'fixing the fence'], show: 'fixing a fence', ev: 'while he was fixing a fence' },
        { q: 'How did the farmer catch the goat?', a: ['with a rope', 'a rope', 'rope'], show: 'with a rope', ev: 'He caught it with a rope' }] },

    /* ---------- SPEAKING ---------- */
    { id: 'sp-w', stage: 'speak', type: 'words', tag: 'Speaking · pre-speaking', title: 'Phrases for ==a witness==',
      words: [
        ['🕵️', 'What were you doing at …?', '', 'question', 'Lúc … bạn đang làm gì?', 'What were you doing at 3:15?'],
        ['📍', 'Where were you when …?', '', 'question', 'Bạn ở đâu khi …?', 'Where were you when it happened?'],
        ['👀', 'Did you see anything strange?', '', 'question', 'Bạn có thấy gì lạ không?', '– Yes, I saw a man in a red cap.'],
        ['🧢', 'He / She was wearing …', '', 'answer', 'Anh ấy / Cô ấy đang mặc …', 'She **was wearing** a blue jacket.'],
        ['🤔', 'I’m not sure, but I think …', '', 'answer', 'Mình không chắc, nhưng mình nghĩ …', '**I’m not sure, but I think** he was talking on the phone.'],
        ['⏰', 'At that moment, …', '', 'answer', 'Đúng lúc đó, …', '**At that moment,** the lights went off.'],
        ['➡️', 'And then what happened?', '', 'response', 'Rồi chuyện gì xảy ra?', 'Really? **And then what happened?**'],
        ['🙏', 'Thank you. That’s very helpful.', '', 'response', 'Cảm ơn. Thông tin rất hữu ích.', 'Thank you. That’s very helpful.']] },
    { id: 'sp-wp', stage: 'speak', type: 'pairs', tag: 'Speaking · pre-speaking', title: 'Match the ==answers==', lead: 'Tap a question on the left, then tap the best answer on the right.',
      right: ['I was waiting for the bus.', 'Yes, I saw a boy running away.', 'He was wearing a red cap.', 'At about half past three.', 'No, I wasn’t. I was with my sister.', 'It started to rain, so I went inside.', 'In the café next to the bank.'],
      items: [
        { t: 'match', q: 'What were you doing at 3:30?', a: 'I was waiting for the bus.' },
        { t: 'match', q: 'Where were you when it happened?', a: 'In the café next to the bank.' },
        { t: 'match', q: 'Did you see anything strange?', a: 'Yes, I saw a boy running away.' },
        { t: 'match', q: 'What was he wearing?', a: 'He was wearing a red cap.' },
        { t: 'match', q: 'What time did it happen?', a: 'At about half past three.' },
        { t: 'match', q: 'Were you alone?', a: 'No, I wasn’t. I was with my sister.' },
        { t: 'match', q: 'And then what happened?', a: 'It started to rain, so I went inside.' }] },
    { id: 'sp-gap', stage: 'speak', type: 'gap', tag: 'Speaking · information gap', title: 'The ==missing phone==', lead: 'At 3:15 yesterday, Ms Lan’s phone disappeared from the café table. Each of you saw half of the café. Ask and answer, then decide **who took it**.',
      roles: [
        { name: 'Student A', who: 'You saw the left side of the café', icon: '☕', info: ['A waiter was carrying a tray of drinks.', 'Two students were doing their homework.', 'An old man was reading a newspaper.', 'A boy in a red cap was standing near Ms Lan’s table.'], ask: ['What was the woman in the green dress doing?', 'Was anyone talking on the phone?', 'What was the man with the dog doing?', 'Did anyone leave the café at 3:15?'] },
        { name: 'Student B', who: 'You saw the right side of the café', icon: '☕', info: ['A woman in a green dress was ordering a cake.', 'A man with a dog was sitting by the door.', 'A teenager was talking loudly on the phone.', 'At 3:15, the boy in the red cap ran out of the café.'], ask: ['What was the waiter doing?', 'What were the students doing?', 'Was anyone reading?', 'Who was standing near Ms Lan’s table?'] }],
      useful: ['What was … doing at 3:15?', 'Was anyone …-ing?', 'He / She was wearing …', 'I think … took it because …'],
      model: ['**A:** What was the woman in the green dress doing?', '**B:** She was ordering a cake. What was the waiter doing?', '**A:** He was carrying a tray of drinks. Who was standing near Ms Lan’s table?', '**B:** Hmm… was he wearing a red cap?', '**A:** Yes! A boy in a red cap was standing near her table.', '**B:** At 3:15 that boy ran out of the café!', '**A:** So I think the boy in the red cap took the phone.'] },
    { id: 'sp-task', stage: 'speak', type: 'speak', tag: 'Speaking · role play', title: 'A ==police interview==', icon: '👮',
      task: 'Student A is a **police officer**. Student B is a **witness** who saw something strange near the school yesterday (a broken window, a lost dog, a car accident… you choose). A asks **six questions**; B answers with the **past continuous** and the **past simple**. Then change roles.',
      steps: ['Where were you and what were you doing?', 'What was the weather like? Who else was there?', 'What happened? When exactly?', 'What was the person wearing / doing?', 'And then what happened?'],
      useful: ['What were you doing at …?', 'I was …-ing when …', 'While I was …, …', 'He / She was wearing …', 'And then what happened?'],
      timer: 150, record: true,
      model: ['**A:** Where were you at about five o’clock yesterday?', '**B:** I was walking home from school with my friend.', '**A:** What was the weather like?', '**B:** It was raining a little, so we were walking fast.', '**A:** What happened?', '**B:** While we were crossing the street, a motorbike hit a small car.', '**A:** Was anyone hurt?', '**B:** No. The driver was talking on the phone, but he was OK.', '**A:** And then what happened?', '**B:** A police officer arrived and asked everyone to wait. Then we went home.', '**A:** Thank you. That’s very helpful.'] },

    /* ---------- WRITING ---------- */
    { id: 'w-model', stage: 'write', type: 'read', tag: 'Writing · pre-writing', title: 'Look at ==a model account==', lead: 'Read the account. Answer the questions.', textTitle: 'What happened at the bus stop', textIcon: '🚌', numbered: false,
      text: ['Yesterday at about half past four, I was waiting for the bus outside the library. It was raining, and lots of people were standing under the roof. A woman was talking on her phone, and two children were eating ice cream.', 'Suddenly, a little dog ran into the street. While everyone was shouting, a young man jumped out and picked it up just before a car arrived. The dog’s owner was crying and thanked him again and again. When my bus came, people were still talking about the brave young man.'],
      items: [
        { q: 'Which sentence sets the scene (what was happening)?', o: ['It was raining, and lots of people were standing under the roof.', 'Suddenly, a little dog ran into the street.', 'When my bus came, people were still talking.'], a: 'It was raining, and lots of people were standing under the roof.', ev: 'It was raining, and lots of people were standing under the roof.' },
        { q: 'Which word introduces the main event?', o: ['Suddenly', 'Yesterday', 'While'], a: 'Suddenly', ev: 'Suddenly, a little dog ran into the street.' },
        { q: 'Which part uses while + past continuous?', o: ['While everyone was shouting', 'When my bus came', 'at about half past four'], a: 'While everyone was shouting', ev: 'While everyone was shouting' },
        { q: 'What did the young man do?', o: ['He picked up the dog.', 'He called the police.', 'He stopped the car.'], a: 'He picked up the dog.', ev: 'a young man jumped out and picked it up' }] },
    { id: 'w-task', stage: 'write', type: 'write', tag: 'Writing · task', title: 'Write ==an incident account==',
      task: 'Write a short account (**70–90 words**) of something unexpected that you saw.',
      plan: ['When and where were you? What were you doing?', 'Set the scene: what was happening around you? (two or three past continuous sentences)', 'Suddenly…: what happened? (past simple)', 'While / As / When…: what did people do?', 'How did it end?'],
      model: ['What happened at the bus stop', 'Yesterday at about half past four, I was waiting for the bus outside the library. It was raining, and lots of people were standing under the roof. A woman was talking on her phone, and two children were eating ice cream.', 'Suddenly, a little dog ran into the street. While everyone was shouting, a young man jumped out and picked it up just before a car arrived. The dog’s owner was crying and thanked him again and again. When my bus came, people were still talking about the brave young man.'],
      checklist: ['I set the scene with at least three past continuous verbs.', 'I use the past simple for the main events.', 'I use when, while or as correctly.', 'I use a time expression (yesterday at …, last …).', 'I use Suddenly to introduce the main event.', 'My account has 70–90 words.'],
      min: 70, max: 90, draft: true },

    /* ---------- REVIEW ---------- */
    { id: 'u-check', stage: 'review', type: 'practice', tag: 'Review', title: 'Unit 7 ==check==', cols: true,
      items: [
        { q: 'At 8 pm last night, I ___ TV.', o: ['was watching', 'watched', 'were watching'], a: 'was watching' },
        { q: 'They ___ football when it started to rain.', o: ['were playing', 'was playing', 'played'], a: 'were playing' },
        { q: '___ you sleeping when I called?', o: ['Were', 'Was', 'Did'], a: 'Were' },
        { q: '– Was she studying? – No, she ___.', o: ['wasn’t', 'didn’t', 'weren’t'], a: 'wasn’t' },
        { q: 'I ___ my phone while I was walking home.', o: ['lost', 'was losing', 'were losing'], a: 'lost' },
        { q: '___ we were having dinner, the lights went off.', o: ['While', 'When', 'During'], a: 'While' },
        { q: 'She was cooking ___ the doorbell rang.', o: ['when', 'while', 'as'], a: 'when' },
        { q: 'Peter ___ off his bike three times last month.', o: ['fell', 'was falling', 'were falling'], a: 'fell' },
        { q: 'What ___ when you heard the news?', o: ['were you doing', 'did you doing', 'you were doing'], a: 'were you doing' },
        { q: 'The children ___ attention, so they didn’t hear the teacher.', o: ['weren’t paying', 'didn’t paying', 'wasn’t paying'], a: 'weren’t paying' }] },
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Review', title: 'What can you ==do now==?',
      cando: ['I can make past continuous sentences, negatives, questions and short answers.', 'I can say what I was doing at a particular time in the past.', 'I can use the past continuous with the past simple and when, while, as.', 'I can understand real conversations about what people were doing.', 'I can read accounts of an event and find details.', 'I can describe an incident as a witness and write a short account.'] }
  ]
};
