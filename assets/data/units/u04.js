/* Unit 4 · Past simple 1 (regular verbs)
   Book: Destination A2, Unit 4, pages 18–20.
   Order: grammar theory (page 18) → book exercises A–F, quoted exactly (pages 19–20) →
   skills, each with its own pre-stage for new words → review. One card = one slide. */
window.A2_UNITS[4] = {
  n: 4, type: 'Grammar', title: 'A memorable day',
  focus: 'Past simple 1 · regular verbs',
  book: 'Destination A2 · Unit 4 · pages 18–20',
  goals: ['Make past simple sentences, negatives, questions and short answers with regular verbs.', 'Spell and say -ed endings correctly and use past time expressions.', 'Understand three real speakers talk about what they did.', 'Tell the story of a day in order and write a diary entry.'],
  audio: {
    chores: { title: 'Weekend chores', speakers: 'A man and a woman', level: 'A2', length: '0:36', provider: 'ELLLO Sound Grammar A2-06 · Conversation 1', src: 'https://elllo.org/Audio/SoundGrammar/A2-Audio4x/A2-06-1-Past-Tense-Regular.mp3', page: 'https://elllo.org/book/A2/A2-06-Past-Tense-Ed.html' },
    night: { title: 'What did you do last night?', speakers: 'Jill, Australia', level: 'A2', length: '1:07', provider: 'ELLLO One Minute English A2-023', src: 'https://elllo.org/Audio/1ME-A2BEG/A2-023-JILL-LAST-NIGHT.mp3', page: 'https://elllo.org/video/A2BEG/A2-023-JILL-LAST-NIGHT.htm' },
    friends: { title: 'Old friends on Zoom', speakers: 'A man and a woman', level: 'A2', length: '0:34', provider: 'ELLLO Sound Grammar A2-06 · Conversation 4', src: 'https://elllo.org/Audio/SoundGrammar/A2-Audio4x/A2-06-4-Past-Tense-Regular.mp3', page: 'https://elllo.org/book/A2/A2-06-Past-Tense-Ed.html' }
  },
  stages: [
    { id: 'start', skill: 'start', icon: '📅', name: 'Welcome', caption: 'What did you do yesterday?' },
    { id: 'grammar', skill: 'grammar', icon: '🧩', name: 'Grammar', caption: 'Past simple with regular verbs: all the rules first, then the book exercises A–F.' },
    { id: 'l1', skill: 'listening', icon: '🧹', name: 'Listening 1: Weekend chores', caption: 'Pre-listening words → who did it? → speaking.' },
    { id: 'l2', skill: 'listening', icon: '🧋', name: 'Listening 2: Last night', caption: 'Pre-listening words → complete the notes → speaking.' },
    { id: 'l3', skill: 'listening', icon: '💻', name: 'Listening 3: Old friends', caption: 'Pre-listening words → true or false → speaking.' },
    { id: 'read', skill: 'reading', icon: '📔', name: 'Reading: Days to remember', caption: 'Two texts, from easier to harder. Pre-reading words, then read for details.' },
    { id: 'speak', skill: 'speaking', icon: '🗣️', name: 'Speaking: Tell the story', caption: 'Story phrases → two Saturdays information gap → tell a memorable day.' },
    { id: 'write', skill: 'writing', icon: '✍️', name: 'Writing: A diary entry', caption: 'Model text → plan, write and check.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Review', caption: 'Unit check, can-do list and homework.' }
  ],
  cards: [
    /* ---------- WELCOME ---------- */
    { id: 'cover', stage: 'start', type: 'cover', title: 'A memorable ==day==' },
    { id: 'warm', stage: 'start', type: 'talk', tag: 'Warm-up · speaking', title: 'What did you do ==yesterday==?', lead: 'Ask and answer with a partner.',
      items: [
        { q: 'What time did you wake up yesterday?', frame: 'I woke up at ___. / I got up at ___.', model: 'I got up at half past six.' },
        { q: 'Who did you talk to yesterday evening?', frame: 'I talked to ___ about ___.', model: 'I talked to my sister about her new school.' },
        { q: 'What did you watch or listen to last weekend?', frame: 'I watched ___. / I listened to ___.', model: 'I watched a football match with my dad.' },
        { q: 'What is a day you will always remember?', frame: 'I remember the day I ___. It was ___.', model: 'I remember the day I travelled to Đà Lạt. It was amazing.' }] },

    /* ---------- GRAMMAR: theory (book p. 18) ---------- */
    { id: 'g1', stage: 'grammar', type: 'grammar', tag: 'Grammar 1 · past simple', title: 'Past simple: ==form==',
      blocks: [
        { formulas: [
          ['✅ Affirmative', 'S + **V-ed**', 'I / you / he / she / it / we / they **walked** to the park.'],
          ['❌ Negative', 'S + **did not (didn’t)** + **V**', 'I / you / he / she / it / we / they **did not (didn’t) walk** to the park.'],
          ['❓ Question', '**Did** + S + **V** …?', '**Did** I / you / he / she / it / we / they **walk** to the park?'],
          ['💬 Short answer', 'Yes, S + **did**.   ·   No, S + **didn’t**.', 'Yes, I / you / he / she / it / we / they **did**. · No, I / you / he / she / it / we / they **didn’t**.']] },
        { vi: 'Quá khứ đơn (động từ có quy tắc): **S + V-ed**. Phủ định và câu hỏi dùng **did / didn’t + động từ nguyên mẫu**; hình thức giống nhau với mọi chủ ngữ.' }] },
    { id: 'g2', stage: 'grammar', type: 'grammar', tag: 'Grammar 2 · past simple', title: 'Past simple: ==use==', layout: 'two',
      blocks: [
        { uses: [
          ['completed actions', 'Phoebe **played** a lovely song on her guitar last night.', 'hành động đã hoàn tất trong quá khứ'],
          ['successive actions in the past', 'Alan **picked** up his violin, **played** for five minutes and then **decided** to stop.', 'các hành động nối tiếp nhau'],
          ['repetitive actions in the past', 'My mum **acted** and **danced** in the school play every year when she was a teenager.', 'hành động lặp lại trong quá khứ']] },
        { chips: { title: 'Helpful hints: past simple is usually used with', list: ['yesterday', 'yesterday morning / evening', 'last night / week', 'a year / two months ago', 'this morning / afternoon', 'on Monday', 'at six o’clock', 'in 2014 / January'] } },
        { watch: { text: 'In negative sentences and questions, use the base form of the main verb.', ex: ['✅ We **didn’t visit** our friend last week.', '❌ We ~~didn’t visited~~ our friend last week.'] } }] },
    { id: 'g3', stage: 'grammar', type: 'grammar', tag: 'Grammar 3 · spelling', title: 'Spelling: ==-ed== endings',
      blocks: [
        { form: { cols: ['Rule', 'Examples'], rows: [
          ['Add **-ed** to most verbs.', 'finish → finish**ed** · walk → walk**ed**'],
          ['Verbs ending in **-e**: add **-d**.', 'live → live**d** · taste → taste**d**'],
          ['Verbs ending in **-ie**: add **-d**.', 'die → die**d** · lie → lie**d**'],
          ['Consonant + **-y**: change -y to **-i** and add **-ed**.', 'cry → cr**ied** · marry → marr**ied**'],
          ['Vowel + **-y**: add **-ed**.', 'enjoy → enjoy**ed**'],
          ['One vowel + one consonant: **double** the final consonant and add -ed.', 'stop → sto**pped** · plan → pla**nned**'],
          ['Longer verbs ending in a **stressed** vowel + one consonant: **double** the consonant and add -ed.', 'prefer → prefe**rred** · permit → permi**tted**'],
          ['Verbs ending in **-l**: add -ed and **double -l**.', 'travel → trave**lled** · cancel → cance**lled**']] } },
        { vi: '**study → studied** (phụ âm + y) nhưng **play → played** (nguyên âm + y). Gấp đôi phụ âm cuối khi động từ kết thúc bằng 1 nguyên âm + 1 phụ âm (stop → stopped).' }] },
    { id: 'g4', stage: 'grammar', type: 'grammar', tag: 'Grammar 4 · pronunciation', title: 'How to say ==-ed==',
      blocks: [
        { formulas: [
          ['/t/', 'after **p, k, s, sh, ch, f**', 'stopped · walked · danced · washed · watched · laughed'],
          ['/d/', 'after **vowels** and **b, g, l, m, n, v, z**', 'played · cleaned · lived · enjoyed · travelled · tidied'],
          ['/ɪd/', 'after **t** and **d**', 'wanted · visited · decided · needed · painted · invited']] },
        { vi: '-ed đọc là **/ɪd/** chỉ khi động từ tận cùng bằng âm **t** hoặc **d** (wanted, decided). Các trường hợp khác -ed không thêm âm tiết: walked /wɔːkt/, played /pleɪd/.' }] },

    /* ---------- GRAMMAR: book exercises A–F (pp. 19–20), quoted exactly ---------- */
    { id: 'exA', stage: 'grammar', type: 'practice', book: 'A', page: 19, tag: 'Grammar practice', title: 'Exercise ==A==', lead: 'Fill in the gaps in the sentences by putting the verbs in past simple.', cols: true,
      bank: ['carry', 'collect', 'help', 'invite', 'love', 'stay', 'tidy', 'travel'],
      items: [
        { q: 'My dad ___ coins and stamps when he was little.', a: 'collected' },
        { q: 'We ___ the boxes of CDs and put them on the stage for the DJ.', a: 'carried' },
        { q: 'David ___ us to his house for dinner.', a: 'invited' },
        { q: 'They ___ up late playing a computer game.', a: 'stayed' },
        { q: 'She ___ the room before the guests arrived.', a: 'tidied' },
        { q: 'I ___ to Rome on a school trip last summer.', a: ['travelled', 'traveled'] },
        { q: 'The drama group ___ to make the scenery for the play.', a: 'helped' },
        { q: 'Tanya ___ the clothes in the fashion show.', a: 'loved' }] },
    { id: 'exB', stage: 'grammar', type: 'practice', book: 'B', page: 19, tag: 'Grammar practice', title: 'Exercise ==B==', lead: 'Fill in the gaps in sentences by putting the verbs in negative form past simple.', cols: true,
      bank: ['cook', 'enjoy', 'invite', 'like', 'open', 'perform', 'want', 'watch'],
      items: [
        { q: 'Lucy ___ any TV last night.', a: ['didn’t watch', 'did not watch'] },
        { q: 'Paul ___ me to go to his party.', a: ['didn’t invite', 'did not invite'] },
        { q: 'We ___ ourselves at the concert on Saturday.', a: ['didn’t enjoy', 'did not enjoy'] },
        { q: 'I ___ the horror film we watched.', a: ['didn’t like', 'did not like'] },
        { q: 'They ___ to go to the art gallery.', a: ['didn’t want', 'did not want'] },
        { q: 'The band ___ my favourite song.', a: ['didn’t perform', 'did not perform'] },
        { q: 'Paul ___ any of his presents!', a: ['didn’t open', 'did not open'] },
        { q: 'I ___ dinner for my parents.', a: ['didn’t cook', 'did not cook'] }] },
    { id: 'exC', stage: 'grammar', type: 'practice', book: 'C', page: 19, tag: 'Grammar practice', title: 'Exercise ==C==', lead: 'Write questions and short answers.', cols: true,
      items: [
        { t: 'write', q: 'Suzy / listen / to your new song? → **Yes, …**', a: ['Did Suzy listen to your new song? Yes, she did.'], show: 'Did Suzy listen to your new song? Yes, she did.' },
        { t: 'write', q: 'you / order / pizza for lunch? → **Yes, …**', a: ['Did you order pizza for lunch? Yes, I did.', 'Did you order pizza for lunch? Yes, we did.'], show: 'Did you order pizza for lunch? Yes, I did.' },
        { t: 'write', q: 'Simon / ask / you to come out with us? → **No, …**', a: ['Did Simon ask you to come out with us? No, he didn’t.'], show: 'Did Simon ask you to come out with us? No, he didn’t.' },
        { t: 'write', q: 'they / visit / the new shopping centre in town? → **Yes, …**', a: ['Did they visit the new shopping centre in town? Yes, they did.', 'Did they visit the new shopping center in town? Yes, they did.'], show: 'Did they visit the new shopping centre in town? Yes, they did.' },
        { t: 'write', q: 'your mum / bake / this cake for your birthday? → **No, …**', a: ['Did your mum bake this cake for your birthday? No, she didn’t.'], show: 'Did your mum bake this cake for your birthday? No, she didn’t.' },
        { t: 'write', q: 'he / dance / at the rock festival? → **No, …**', a: ['Did he dance at the rock festival? No, he didn’t.'], show: 'Did he dance at the rock festival? No, he didn’t.' },
        { t: 'write', q: 'Rachel / paint / that picture of you? → **Yes, …**', a: ['Did Rachel paint that picture of you? Yes, she did.'], show: 'Did Rachel paint that picture of you? Yes, she did.' },
        { t: 'write', q: 'the school / organise / the trip to the adventure park? → **No, …**', a: ['Did the school organise the trip to the adventure park? No, it didn’t.', 'Did the school organize the trip to the adventure park? No, it didn’t.', 'Did the school organise the trip to the adventure park? No, they didn’t.'], show: 'Did the school organise the trip to the adventure park? No, it didn’t.' }] },
    { id: 'exD', stage: 'grammar', type: 'practice', book: 'D', page: 20, tag: 'Grammar practice', title: 'Exercise ==D==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: 'Did Jessie help you make the costumes {Monday|yesterday}?', a: 'yesterday' },
        { q: 'I didn’t act in the school play this {night|year}, unfortunately.', a: 'year' },
        { q: 'My cousins arrived from London a week {last|ago}.', a: 'ago' },
        { q: 'The new burger bar opened {in|on} January.', a: 'in' },
        { q: 'Did the concert start {on|at} 8 pm yesterday?', a: 'at' },
        { q: 'He first started learning to play the guitar {in|at} 2012.', a: 'in' },
        { q: 'Michael didn’t want to come to the cinema yesterday {night|evening}.', a: 'evening' },
        { q: 'I go to photography classes {on|at} Fridays.', a: 'on' }] },
    { id: 'exE', stage: 'grammar', type: 'cloze', book: 'E', page: 20, tag: 'Grammar practice', title: 'Exercise ==E==', lead: 'Complete the sentences with the verbs in past simple.',
      textTitle: 'The best gig in town!',
      text: 'I [1] it was going to be a great night as soon as I [2] . The club owners [3] the club with lots of balloons and bright lights, which really [4] a good atmosphere. It [5] some of us when the band, Joy Tent, [6] on stage an hour late but no one really [7] because they’re a wonderful band and they [8] such great music. When they [9] up their guitars, everyone in the club [10] dancing and, I’m glad to say, they [11] all night. At the end of the evening the lead singer [12] , ‘[13] yourselves?’ and everybody [14] with a loud ‘Yes!’ What a fantastic night!',
      items: [
        { a: ['realised', 'realized'], hint: 'realise' }, { a: 'arrived', hint: 'arrive' }, { a: 'decorated', hint: 'decorate' }, { a: 'created', hint: 'create' },
        { a: ['didn’t surprise', 'did not surprise'], hint: 'not surprise' }, { a: 'appeared', hint: 'appear' }, { a: 'cared', hint: 'care' }, { a: 'played', hint: 'play' },
        { a: 'picked', hint: 'pick' }, { a: 'started', hint: 'start' }, { a: ['didn’t stop', 'did not stop'], hint: 'not stop' }, { a: 'shouted', hint: 'shout' },
        { a: 'Did you enjoy', hint: 'you / enjoy' }, { a: 'answered', hint: 'answer' }] },
    { id: 'exF', stage: 'grammar', type: 'practice', book: 'F', page: 20, tag: 'Grammar practice', title: 'Exercise ==F==', lead: 'Make sentences using the verb in past simple.', cols: true,
      items: [
        { t: 'write', q: 'Bella / cook dinner / and wash up / every day / last week', a: ['Bella cooked dinner and washed up every day last week.', 'Last week Bella cooked dinner and washed up every day.'] },
        { t: 'write', q: 'you / stay / at home / last night?', a: ['Did you stay at home last night?'] },
        { t: 'write', q: 'I / post / a letter / and then / I / walk / to the shops / after lunch', a: ['I posted a letter and then I walked to the shops after lunch.', 'After lunch I posted a letter and then I walked to the shops.'] },
        { t: 'write', q: 'the band / not play / at the concert because / they / not want / to perform', a: ['The band didn’t play at the concert because they didn’t want to perform.'] },
        { t: 'write', q: 'we / talk / about the evening / and / we / laugh / about it', a: ['We talked about the evening and we laughed about it.'] },
        { t: 'write', q: 'Andy / not fix / my bike / yesterday', a: ['Andy didn’t fix my bike yesterday.', 'Yesterday Andy didn’t fix my bike.'] },
        { t: 'write', q: 'Paul / wash / the car / after / he / finish / work?', a: ['Did Paul wash the car after he finished work?'] },
        { t: 'write', q: 'last month / they / play / video games / and watch / films / every weekend', a: ['Last month they played video games and watched films every weekend.', 'They played video games and watched films every weekend last month.'] }] },

    /* ---------- LISTENING 1: who did it? ---------- */
    { id: 'l1-w', stage: 'l1', type: 'words', tag: 'Listening 1 · pre-listening', title: 'New words for ==Weekend chores==',
      words: [
        ['🧺', 'chores', '/tʃɔːz/', 'noun', 'việc nhà', 'I did my **chores** on Sunday.'],
        ['🍽️', 'wash the dishes', '/wɒʃ ðə ˈdɪʃɪz/', 'phrase', 'rửa bát', 'I **washed the dishes** after dinner.'],
        ['🧹', 'vacuum', '/ˈvækjuːm/', 'verb', 'hút bụi', 'She **vacuumed** the living room.'],
        ['🪣', 'mop the floor', '/mɒp ðə flɔː/', 'phrase', 'lau sàn nhà', 'Dad **mopped the floor**.'],
        ['🧽', 'clean freak', '/ˈkliːn friːk/', 'noun', 'người “nghiện” dọn dẹp', 'My mum is a **clean freak**.'],
        ['👕', 'pick up (clothes)', '/pɪk ʌp/', 'phrasal verb', 'nhặt (quần áo) lên', 'I **picked up** my dirty clothes.'],
        ['🗑️', 'empty the rubbish', '/ˈempti ðə ˈrʌbɪʃ/', 'phrase', 'đổ rác', 'He **emptied the rubbish**.'],
        ['✨', 'respectable', '/rɪˈspektəbl/', 'adjective', 'tươm tất, coi được', 'Now my room looks **respectable**.']] },
    { id: 'l1-det', stage: 'l1', type: 'listen', audio: 'chores', tag: 'Listening 1 · while listening', title: 'Who ==did== it?', task: 'Listen twice. Choose **the woman**, **the man** or **both**.', cols: true,
      items: [
        { q: 'Who washed the dishes?', o: ['the woman', 'the man', 'both'], a: 'the woman' },
        { q: 'Who vacuumed?', o: ['the woman', 'the man', 'both'], a: 'the woman' },
        { q: 'Who mopped the floors?', o: ['the woman', 'the man', 'both'], a: 'the woman' },
        { q: 'Who did chores yesterday?', o: ['both', 'the woman', 'the man'], a: 'both' },
        { q: 'Whose place was pretty dirty?', o: ['the man', 'the woman', 'both'], a: 'the man' },
        { q: 'Who cleaned the bathroom?', o: ['the man', 'the woman', 'both'], a: 'the man' },
        { q: 'Who picked up dirty clothes and washed them?', o: ['the man', 'the woman', 'both'], a: 'the man' },
        { q: 'Who emptied the rubbish?', o: ['the man', 'the woman', 'both'], a: 'the man' }] },
    { id: 'l1-say', stage: 'l1', type: 'talk', tag: 'Listening 1 · post-listening', title: 'Your ==chores==', lead: 'Ask and answer. Use regular past forms.',
      items: [
        { q: 'What chores did you do last weekend?', frame: 'Last weekend I ___ed and I ___ed.', model: 'Last weekend I tidied my room and I washed the dishes.' },
        { q: 'Did you help anyone at home yesterday?', frame: 'Yes, I did. I helped my ___ to ___. / No, I didn’t.', model: 'Yes, I did. I helped my grandma to clean the kitchen.' },
        { q: 'What chore did you not do?', frame: 'I didn’t ___ because ___.', model: 'I didn’t vacuum because the vacuum cleaner was broken.' },
        { q: 'Are you a clean freak?', frame: 'Yes, I am. / Not really. Last week I ___.', model: 'Not really. Last week I only tidied my desk!' }] },

    /* ---------- LISTENING 2: complete the notes ---------- */
    { id: 'l2-w', stage: 'l2', type: 'words', tag: 'Listening 2 · pre-listening', title: 'New words for ==Last night==',
      words: [
        ['🍳', 'cook dinner', '/kʊk ˈdɪnə/', 'phrase', 'nấu bữa tối', 'My friend **cooked dinner** for us.'],
        ['🏠', 'her place', '/hɜː pleɪs/', 'phrase', 'nhà của cô ấy', 'We went to **her place**.'],
        ['🍄', 'mushroom', '/ˈmʌʃrʊm/', 'noun', 'nấm', 'She made **mushroom** rice.'],
        ['🥔', 'potato', '/pəˈteɪtəʊ/', 'noun', 'khoai tây', 'We ate chicken and **potatoes**.'],
        ['🍰', 'dessert', '/dɪˈzɜːt/', 'noun', 'món tráng miệng', 'We **wanted** some **dessert**.'],
        ['🧋', 'bubble tea shop', '/ˈbʌbl tiː ʃɒp/', 'noun', 'quán trà sữa', 'We **walked** to a **bubble tea shop**.'],
        ['🚪', 'get kicked out', '/ɡet kɪkt aʊt/', 'phrase', 'bị đuổi ra ngoài', 'We were scared we would **get kicked out**.']] },
    { id: 'l2-det', stage: 'l2', type: 'listen', audio: 'night', tag: 'Listening 2 · while listening', title: 'Complete ==Jill’s night==', task: 'Listen twice. Write **one word** in each gap.', cols: true,
      items: [
        { q: 'Jill’s friend ___ dinner for them.', a: 'cooked' },
        { q: 'They ate, talked, laughed and ___ a little.', a: 'danced' },
        { q: 'The dish had mushroom rice, chicken and ___.', a: ['potatoes', 'potato'] },
        { q: 'After dinner, they ___ the living room.', a: 'vacuumed' },
        { q: 'They ___ the dishes.', a: 'cleaned' },
        { q: 'Then they ___ that they wanted some dessert.', a: 'decided' },
        { q: 'They ___ to the nearest bubble tea shop.', a: 'walked' }] },
    { id: 'l2-say', stage: 'l2', type: 'talk', tag: 'Listening 2 · post-listening', title: 'What did ==you== do last night?', lead: 'Answer like Jill. Put your actions in order.',
      items: [
        { q: 'What did you do last night?', frame: 'First, I ___ed. Then I ___ed.', model: 'First, I finished my homework. Then I watched a film.' },
        { q: 'Who cooked dinner?', frame: 'My ___ cooked dinner. We had ___.', model: 'My dad cooked dinner. We had fish and rice.' },
        { q: 'Did you help after dinner?', frame: 'Yes, I did. I ___ed. / No, I didn’t.', model: 'Yes, I did. I cleaned the table.' },
        { q: 'Did you do anything fun?', frame: 'Yes! I ___ed with ___. / Not really.', model: 'Yes! I played a game with my brother.' }] },

    /* ---------- LISTENING 3: true or false ---------- */
    { id: 'l3-w', stage: 'l3', type: 'words', tag: 'Listening 3 · pre-listening', title: 'New words for ==Old friends==',
      words: [
        ['💻', 'talk on Zoom', '/tɔːk ɒn zuːm/', 'phrase', 'nói chuyện qua Zoom', 'I **talked** with my friends **on Zoom**.'],
        ['🎓', 'college', '/ˈkɒlɪdʒ/', 'noun', 'trường đại học, cao đẳng', 'We **studied** together in **college**.'],
        ['🔕', 'lose touch (with)', '/luːz tʌtʃ/', 'phrase', 'mất liên lạc (với)', 'We **lost touch** after school.'],
        ['🤝', 'reunite', '/ˌriːjuːˈnaɪt/', 'verb', 'gặp lại, đoàn tụ', 'We **reunited** on Facebook.'],
        ['🪖', 'army buddies', '/ˈɑːmi ˈbʌdiz/', 'noun', 'bạn trong quân đội', 'He misses his **army buddies**.'],
        ['🎉', 'a lot of fun', '/ə lɒt əv fʌn/', 'phrase', 'rất vui', 'It’s **a lot of fun**.']] },
    { id: 'l3-det', stage: 'l3', type: 'listen', audio: 'friends', tag: 'Listening 3 · while listening', title: 'True or ==False==?', task: 'Listen twice. Are the sentences true or false?', cols: true,
      items: [
        { q: 'The woman went out last night.', o: ['True', 'False'], a: 'False' },
        { q: 'She talked with her friends on Zoom.', o: ['True', 'False'], a: 'True' },
        { q: 'They are her friends from work.', o: ['True', 'False'], a: 'False' },
        { q: 'She studied with them in college.', o: ['True', 'False'], a: 'True' },
        { q: 'They never lost touch with each other.', o: ['True', 'False'], a: 'False' },
        { q: 'They reunited on Facebook.', o: ['True', 'False'], a: 'True' },
        { q: 'The man wants to contact his old army buddies.', o: ['True', 'False'], a: 'True' },
        { q: 'The friends didn’t enjoy seeing each other again.', o: ['True', 'False'], a: 'False' }] },
    { id: 'l3-say', stage: 'l3', type: 'talk', tag: 'Listening 3 · post-listening', title: 'Old ==friends==', lead: 'Talk about friends and staying in touch.',
      items: [
        { q: 'Who did you study with in primary school?', frame: 'I studied with ___. We ___ed a lot.', model: 'I studied with Hà and Nam. We played together every day.' },
        { q: 'Did you lose touch with anyone?', frame: 'Yes, I lost touch with ___ when ___. / No, I didn’t.', model: 'Yes, I lost touch with Nam when he moved to Đà Nẵng.' },
        { q: 'How did you contact a friend last week?', frame: 'I ___ed him / her on ___.', model: 'I messaged her on Zalo and we talked for an hour.' },
        { q: 'Who do you want to contact again?', frame: 'I want to contact ___ because ___.', model: 'I want to contact my old neighbour because I miss her.' }] },

    /* ---------- READING: two texts, easier → harder ---------- */
    { id: 'r-w1', stage: 'read', type: 'words', tag: 'Reading 1 · pre-reading', title: 'New words for ==Text 1==',
      words: [
        ['📔', 'diary', '/ˈdaɪəri/', 'noun', 'nhật ký', 'I write in my **diary** every night.'],
        ['📞', 'phone (someone)', '/fəʊn/', 'verb', 'gọi điện cho (ai)', 'My cousin **phoned** me.'],
        ['✉️', 'invite', '/ɪnˈvaɪt/', 'verb', 'mời', 'He **invited** me to the cinema.'],
        ['🤖', 'robot', '/ˈrəʊbɒt/', 'noun', 'người máy', 'It was a film about a **robot**.'],
        ['🌙', 'stay up late', '/steɪ ʌp leɪt/', 'phrase', 'thức khuya', 'I didn’t **stay up late**.'],
        ['💡', 'turn off', '/tɜːn ɒf/', 'phrasal verb', 'tắt', 'I **turned off** the light at ten.']] },
    { id: 'r-t1', stage: 'read', type: 'read', tag: 'Reading 1 · while reading', title: 'Text 1: ==correct the mistake==', lead: 'Each sentence has **one wrong word** (in bold). Write the correct word.', textTitle: 'Linh’s diary · Saturday', textIcon: '📔',
      text: [
        'Dear Diary, today was a busy but happy day. In the morning I tidied my room and helped Mum in the kitchen. We cooked fish and rice for lunch because Grandma visited us.',
        'After lunch, my cousin Duy phoned me and invited me to the cinema. We walked there together, but the film started late, at four o’clock. I enjoyed it a lot – it was a funny film about a robot.',
        'In the evening, I wanted to finish my English homework, but I was too tired. I played the guitar for half an hour and then I watched TV with my dad. We laughed a lot at a cooking show! I didn’t stay up late. I turned off the light at ten o’clock.'],
      items: [
        { q: 'In the morning Linh tidied the **kitchen**.', a: 'room', ev: 'In the morning I tidied my room' },
        { q: 'They cooked **chicken** and rice for lunch.', a: 'fish', ev: 'We cooked fish and rice for lunch' },
        { q: 'Linh’s **aunt** visited them.', a: ['Grandma', 'grandmother', 'grandma'], show: 'Grandma', ev: 'because Grandma visited us' },
        { q: 'Duy invited Linh to the **park**.', a: 'cinema', ev: 'invited me to the cinema' },
        { q: 'They **drove** to the cinema.', a: 'walked', ev: 'We walked there together' },
        { q: 'The film started at **three** o’clock.', a: ['four', '4'], show: 'four', ev: 'the film started late, at four o’clock' },
        { q: 'Linh played the **piano** for half an hour.', a: 'guitar', ev: 'I played the guitar for half an hour' },
        { q: 'She turned off the light at **eleven** o’clock.', a: ['ten', '10'], show: 'ten', ev: 'I turned off the light at ten o’clock' }] },
    { id: 'r-w2', stage: 'read', type: 'words', tag: 'Reading 2 · pre-reading', title: 'New words for ==Text 2==',
      words: [
        ['🗓️', 'timetable', '/ˈtaɪmteɪbl/', 'noun', 'thời gian biểu, lịch trình', 'He printed a **timetable** for us.'],
        ['🏯', 'citadel', '/ˈsɪtədəl/', 'noun', 'kinh thành, thành cổ', 'We visited the **Citadel** in Huế.'],
        ['🧑‍🏫', 'guide', '/ɡaɪd/', 'noun', 'hướng dẫn viên', 'The **guide** explained the history.'],
        ['❌', 'cancel', '/ˈkænsl/', 'verb', 'hủy', 'The teacher **cancelled** the boat trip.'],
        ['😒', 'complain', '/kəmˈpleɪn/', 'verb', 'phàn nàn', 'Everyone **complained** about the rain.'],
        ['💡', 'suggest', '/səˈdʒest/', 'verb', 'đề xuất, gợi ý', 'Bảo **suggested** a quiz.'],
        ['👥', 'divide into teams', '/dɪˈvaɪd ˈɪntə tiːmz/', 'phrase', 'chia thành các đội', 'We **divided into teams**.'],
        ['🤔', 'realise', '/ˈrɪəlaɪz/', 'verb', 'nhận ra', 'I **realised** it was my favourite day.']] },
    { id: 'r-t2', stage: 'read', type: 'read', tag: 'Reading 2 · while reading', title: 'Text 2: ==which paragraph==?', lead: 'Read the blog post. Which paragraph (**1–4**) gives this information? Tap the number.', textTitle: 'The trip I’ll never forget', textIcon: '🏯',
      text: [
        'Last October, our class travelled to Huế for a three-day history trip. Before the trip, our teacher, Mr Quang, planned every minute. He printed a timetable for each student and asked us to arrive at the station at six o’clock in the morning. Of course, my friend Bảo arrived at twenty past six and we nearly missed the train!',
        'The first day was perfect. We visited the Citadel and listened to a guide who explained the history of every gate and wall. In the afternoon, we tried bánh khoái in a small restaurant near the river. Some students didn’t like the spicy sauce, but I loved it and asked for more.',
        'On the second day, everything changed. It rained from morning to night, so Mr Quang cancelled the boat trip on the Perfume River. We stayed in the hotel, and at first everyone complained. Then Bảo suggested a quiz about the things we learned the day before. We divided into teams and played for three hours. My team didn’t win, but we laughed so much that nobody noticed the rain.',
        'On the last morning, the sun appeared again and we finally travelled down the river by boat. When I arrived home, I realised that the rainy day was my favourite part of the trip. I learned a lot about Huế, but I learned even more about my classmates.'],
      items: [
        { q: 'why the class nearly missed the train', o: ['1', '2', '3', '4'], a: '1', fixed: true, ev: 'my friend Bảo arrived at twenty past six and we nearly missed the train' },
        { q: 'some food the writer enjoyed', o: ['1', '2', '3', '4'], a: '2', fixed: true, ev: 'I loved it and asked for more' },
        { q: 'why a plan changed', o: ['1', '2', '3', '4'], a: '3', fixed: true, ev: 'It rained from morning to night, so Mr Quang cancelled the boat trip on the Perfume River' },
        { q: 'what the students did on their final day', o: ['1', '2', '3', '4'], a: '4', fixed: true, ev: 'On the last morning, the sun appeared again and we finally travelled down the river by boat' },
        { q: 'something the teacher prepared before the trip', o: ['1', '2', '3', '4'], a: '1', fixed: true, ev: 'He printed a timetable for each student' },
        { q: 'a game the class played', o: ['1', '2', '3', '4'], a: '3', fixed: true, ev: 'We divided into teams and played for three hours' },
        { q: 'someone who explained the history of a place', o: ['1', '2', '3', '4'], a: '2', fixed: true, ev: 'listened to a guide who explained the history of every gate and wall' },
        { q: 'the writer’s favourite part of the trip', o: ['1', '2', '3', '4'], a: '4', fixed: true, ev: 'I realised that the rainy day was my favourite part of the trip' }] },

    /* ---------- SPEAKING ---------- */
    { id: 'sp-w', stage: 'speak', type: 'words', tag: 'Speaking · pre-speaking', title: 'Phrases for ==telling a story==',
      words: [
        ['1️⃣', 'First, …', '', 'sequencer', 'Đầu tiên, …', '**First,** we walked to the station.'],
        ['➡️', 'Then … / Next, …', '', 'sequencer', 'Sau đó, … / Tiếp theo, …', '**Then** we visited the museum.'],
        ['⏭️', 'After that, …', '', 'sequencer', 'Sau đó nữa, …', '**After that,** we cooked dinner.'],
        ['🏁', 'In the end, …', '', 'sequencer', 'Cuối cùng, …', '**In the end,** we stayed at home.'],
        ['❓', 'What did you do …?', '', 'question', 'Bạn đã làm gì …?', 'What did you do last Sunday?'],
        ['👀', 'What happened next?', '', 'question', 'Rồi chuyện gì xảy ra tiếp theo?', 'Really? What happened next?'],
        ['😄', 'That sounds fun!', '', 'response', 'Nghe vui quá!', '– We danced all night. – That sounds fun!'],
        ['😮', 'Oh no! / Lucky you!', '', 'response', 'Ôi không! / Bạn may thật!', '– It rained all day. – Oh no!']] },
    { id: 'sp-wp', stage: 'speak', type: 'pairs', tag: 'Speaking · pre-speaking', title: 'Match the ==responses==', lead: 'Tap a line on the left, then tap the best response on the right.',
      right: ['That sounds fun! Did you dance?', 'No, I didn’t. I stayed at home.', 'Oh no! What happened?', 'First, we visited my grandparents.', 'Yes, I did. It was great.', 'We walked to a café.', 'Lucky you! Who won?'],
      items: [
        { t: 'match', q: 'What did you do on Sunday?', a: 'First, we visited my grandparents.' },
        { t: 'match', q: 'Did you enjoy the concert?', a: 'Yes, I did. It was great.' },
        { t: 'match', q: 'Did you go out last night?', a: 'No, I didn’t. I stayed at home.' },
        { t: 'match', q: 'I missed the bus this morning.', a: 'Oh no! What happened?' },
        { t: 'match', q: 'We played music at the party.', a: 'That sounds fun! Did you dance?' },
        { t: 'match', q: 'What happened next?', a: 'We walked to a café.' },
        { t: 'match', q: 'I watched the final with my dad.', a: 'Lucky you! Who won?' }] },
    { id: 'sp-gap', stage: 'speak', type: 'gap', tag: 'Speaking · information gap', title: 'Two ==Saturdays==', lead: 'Student A knows Lan’s Saturday. Student B knows Tom’s Saturday. Ask and answer, then find **two things they both did**.',
      roles: [
        { name: 'Student A', who: 'Lan’s Saturday', icon: '👧', info: ['8:00 – cleaned her room', '10:00 – played badminton with her dad', '12:30 – cooked noodles for lunch', '3:00 – visited her grandparents', '7:00 – watched a film at home'], ask: ['What did Tom do at 8:30?', 'Did he play any sport?', 'What did he do at 1:00?', 'What did he do in the evening?'] },
        { name: 'Student B', who: 'Tom’s Saturday', icon: '👦', info: ['8:30 – walked his dog', '10:00 – played badminton at the sports centre', '1:00 – tidied the kitchen', '3:00 – listened to music in his room', '7:00 – watched a film at the cinema'], ask: ['What did Lan do in the morning?', 'Who did she play badminton with?', 'What did she cook?', 'What did she do at 3:00?'] }],
      useful: ['What did … do at …?', 'Did he / she …?', 'Yes, he / she did. / No, he / she didn’t.', 'They both …'],
      model: ['**A:** What did Tom do at 8:30?', '**B:** He walked his dog. What did Lan do at 10:00?', '**A:** She played badminton with her dad.', '**B:** Tom played badminton too, at the sports centre!', '**A:** So they both played badminton. And in the evening, Lan watched a film at home.', '**B:** Tom watched a film at the cinema. They both watched a film!'] },
    { id: 'sp-task', stage: 'speak', type: 'speak', tag: 'Speaking · storytelling', title: 'Tell ==a memorable day==', icon: '🎬',
      task: 'Tell your partner about **a day you remember** (a birthday, a trip, a festival, a match…). Tell the story **in order**. Your partner listens, reacts and asks **two questions**.',
      steps: ['Say when it was and where you were.', 'First … Then … After that …: tell three or four actions.', 'Say one thing that didn’t happen as planned.', 'In the end …: say how you felt.', 'Swap roles. React and ask: What happened next?'],
      useful: ['It was last … / … ago.', 'First, … Then … After that, …', 'We didn’t … because …', 'In the end, …', 'That sounds fun! What happened next?'],
      timer: 150, record: true,
      model: ['**A:** Two years ago, my family travelled to Phú Quốc for my birthday.', '**B:** Lucky you! What did you do?', '**A:** First, we checked in at the hotel. Then we walked to the beach and played in the sea. After that, we tried grilled seafood.', '**B:** That sounds fun! Did anything go wrong?', '**A:** Yes! On the second day it rained, so we didn’t visit the island. We stayed in and played cards.', '**B:** Oh no! What happened next?', '**A:** In the end, the sun appeared in the evening and we watched the sunset. It was my best birthday!'] },

    /* ---------- WRITING ---------- */
    { id: 'w-model', stage: 'write', type: 'read', tag: 'Writing · pre-writing', title: 'Look at ==a model diary entry==', lead: 'Read the diary entry. Answer the questions.', textTitle: 'Sunday 8 March', textIcon: '📔', numbered: false,
      text: ['Today I visited the flower market with my mum. First, we walked around and looked at the flowers. Then Mum chose some yellow ones for our living room and I carried them to the car. After that, we stopped at a small café and I tried egg coffee for the first time.', 'In the afternoon, I wanted to practise the piano, but my little brother cried all the time! In the end, I helped him with his puzzle and we laughed a lot. It was a lovely, simple day.'],
      items: [
        { q: 'Which word shows the order of actions?', o: ['Then', 'Today', 'lovely'], a: 'Then', ev: 'Then Mum chose some yellow ones for our living room' },
        { q: 'Which past form follows the -y → -ied rule?', o: ['carried', 'stopped', 'walked'], a: 'carried', ev: 'I carried them to the car' },
        { q: 'Which past form doubles the final consonant?', o: ['stopped', 'visited', 'helped'], a: 'stopped', ev: 'we stopped at a small café' },
        { q: 'What problem does the writer describe?', o: ['Her brother cried all the time.', 'The café was closed.', 'The flowers were expensive.'], a: 'Her brother cried all the time.', ev: 'my little brother cried all the time!' }] },
    { id: 'w-task', stage: 'write', type: 'write', tag: 'Writing · task', title: 'Write ==a diary entry==',
      task: 'Write a diary entry (**70–90 words**) about a day last week or last month.',
      plan: ['Write the day and date as the title.', 'Morning: where did you go, who were you with?', 'Use First, Then, After that to tell three or four actions.', 'Say one thing you didn’t do or a small problem.', 'In the end: how did you feel?'],
      model: ['Sunday 8 March', 'Today I visited the flower market with my mum. First, we walked around and looked at the flowers. Then Mum chose some yellow ones for our living room and I carried them to the car. After that, we stopped at a small café and I tried egg coffee for the first time.', 'In the afternoon, I wanted to practise the piano, but my little brother cried all the time! In the end, I helped him with his puzzle and we laughed a lot. It was a lovely, simple day.'],
      checklist: ['I use the past simple for every finished action.', 'I spell -ed forms correctly (tried, stopped, travelled).', 'I use at least one negative: didn’t + base verb.', 'I use First, Then, After that, In the end.', 'I use one past time expression (yesterday, last…, … ago).', 'My diary entry has 70–90 words.'],
      min: 70, max: 90, draft: true },

    /* ---------- REVIEW ---------- */
    { id: 'u-check', stage: 'review', type: 'practice', tag: 'Review', title: 'Unit 4 ==check==', cols: true,
      items: [
        { q: 'We ___ to Đà Lạt last summer.', o: ['travelled', 'travel', 'did travelled'], a: 'travelled' },
        { q: 'She ___ the film. It was boring.', o: ['didn’t enjoy', 'didn’t enjoyed', 'not enjoyed'], a: 'didn’t enjoy' },
        { q: '___ you watch the match yesterday?', o: ['Did', 'Do', 'Were'], a: 'Did' },
        { q: '– Did they win? – No, they ___.', o: ['didn’t', 'don’t', 'weren’t'], a: 'didn’t' },
        { q: 'The baby ___ all night.', o: ['cried', 'cryed', 'cries'], a: 'cried' },
        { q: 'The bus ___ outside the school.', o: ['stopped', 'stoped', 'stopping'], a: 'stopped' },
        { q: 'I visited my aunt two days ___.', o: ['ago', 'last', 'before'], a: 'ago' },
        { q: 'The shop opened ___ 2019.', o: ['in', 'on', 'at'], a: 'in' },
        { q: 'In which word is -ed said /ɪd/?', o: ['wanted', 'played', 'washed'], a: 'wanted' },
        { q: 'First we had lunch. ___, we walked to the park.', o: ['After that', 'Before', 'Last'], a: 'After that' }] },
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Review', title: 'What can you ==do now==?',
      cando: ['I can make past simple sentences, negatives, questions and short answers with regular verbs.', 'I can spell -ed forms and say -ed as /t/, /d/ or /ɪd/.', 'I can use past time expressions: yesterday, last week, two days ago, in 2014.', 'I can understand real speakers talk about what they did.', 'I can read two texts and find details.', 'I can tell the story of a day in order and write a diary entry.'] }
  ]
};
