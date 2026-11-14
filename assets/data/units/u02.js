/* Unit 2 · Present continuous, stative verbs
   Book: Destination A2, Unit 2, pages 9–11.
   Order: grammar theory (page 9) → book exercises A–F, quoted exactly (pages 10–11) →
   skills, each with its own pre-stage for new words → review. One card = one slide. */
window.A2_UNITS[2] = {
  n: 2, type: 'Grammar', title: 'Life at home right now',
  focus: 'Present continuous · stative verbs',
  book: 'Destination A2 · Unit 2 · pages 9–11',
  goals: ['Use the present continuous for actions now and for a limited time.', 'Choose between the present simple, the present continuous and stative verbs.', 'Understand three short real recordings about home life.', 'Describe your home in a video call and write a live update.'],
  audio: {
    fam: { title: 'Where’s Mom?', speakers: 'A brother and a sister', level: 'A2', length: '0:38', provider: 'ELLLO Sound Grammar A2-03 · Conversation 2', src: 'https://elllo.org/Audio/SoundGrammar/A2-Audio4x/A2-03-2-Present-Continuous-Family.mp3', page: 'https://elllo.org/book/A2/A2-03-Present-Continuous.html' },
    now: { title: 'What are you doing right now?', speakers: 'Elizabeth, USA', level: 'A2', length: '1:01', provider: 'ELLLO One Minute English A2-042', src: 'https://elllo.org/Audio/1ME-A2BEG/A2-042-ELISABETH-WHAT-DOING-RIGHT-NOW.mp3', page: 'https://elllo.org/video/A2BEG/A2-042-ELISABETH-WHAT-DOING-RIGHT-NOW.htm' },
    smell: { title: 'It smells great!', speakers: 'A man and a woman', level: 'A2', length: '0:22', provider: 'ELLLO Sound Grammar A2-21 · Conversation 1', src: 'https://elllo.org/Audio/SoundGrammar/A2-Audio4x/A2-21-1-Stative-Verbs-Smells-Good.mp3', page: 'https://elllo.org/book/A2/A2-21-Stative-Verbs.html' }
  },
  stages: [
    { id: 'start', skill: 'start', icon: '🏠', name: 'Welcome', caption: 'What is happening at home right now?' },
    { id: 'grammar', skill: 'grammar', icon: '🧩', name: 'Grammar', caption: 'Present continuous and stative verbs: all the rules first, then the book exercises A–F.' },
    { id: 'l1', skill: 'listening', icon: '🎧', name: 'Listening 1: Where’s Mom?', caption: 'Pre-listening words → complete the notes → speaking.' },
    { id: 'l2', skill: 'listening', icon: '💻', name: 'Listening 2: Right now', caption: 'Pre-listening words → true or false → speaking.' },
    { id: 'l3', skill: 'listening', icon: '🍲', name: 'Listening 3: It smells great!', caption: 'Pre-listening words → multiple choice → speaking.' },
    { id: 'read', skill: 'reading', icon: '📱', name: 'Reading: At home this week', caption: 'Two texts, from easier to harder. Pre-reading words, then read for details.' },
    { id: 'speak', skill: 'speaking', icon: '📞', name: 'Speaking: A video call', caption: 'Useful phrases → spot the difference → role play.' },
    { id: 'write', skill: 'writing', icon: '✍️', name: 'Writing: A live update', caption: 'Model text → plan, write and check.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Review', caption: 'Unit check, can-do list and homework.' }
  ],
  cards: [
    /* ---------- WELCOME ---------- */
    { id: 'cover', stage: 'start', type: 'cover', title: 'Life at home ==right now==' },
    { id: 'warm', stage: 'start', type: 'talk', tag: 'Warm-up · speaking', title: 'What’s happening ==now==?', lead: 'Ask and answer with a partner.',
      items: [
        { q: 'Where are you right now? What are you doing?', frame: 'I’m in ___. I’m ___ing.', model: 'I’m in my classroom. I’m learning English.' },
        { q: 'Who is at home now? What are they doing?', frame: 'My ___ is at home. I think he’s / she’s ___ing.', model: 'My grandma is at home. I think she’s cooking lunch.' },
        { q: 'What do you usually do on Saturday mornings?', frame: 'On Saturday mornings, I usually ___.', model: 'On Saturday mornings, I usually tidy my room.' },
        { q: 'What are you learning this month?', frame: 'This month I’m learning ___.', model: 'This month I’m learning to swim.' }] },

    /* ---------- GRAMMAR: theory (book p. 9) ---------- */
    { id: 'g1', stage: 'grammar', type: 'grammar', tag: 'Grammar 1 · present continuous', title: 'Present continuous: ==form==',
      blocks: [
        { formulas: [
          ['✅ Affirmative', 'S + **am / is / are** + **V-ing**', 'I **am (’m) talking** now. · He / she / it **is (’s) talking** now. · You / we / they **are (’re) talking** now.'],
          ['❌ Negative', 'S + **am / is / are + not** + **V-ing**', 'I **am not (’m not) talking** now. · He / she / it **is not (isn’t, ’s not) talking** now. · You / we / they **are not (aren’t, ’re not) talking** now.'],
          ['❓ Question', '**Am / Is / Are** + S + **V-ing** …?', '**Am** I **talking** now? · **Is** he / she / it **talking** now? · **Are** you / we / they **talking** now?'],
          ['💬 Short answer', 'Yes, S + **am / is / are**.   ·   No, S + **’m not / isn’t / aren’t**.', 'Yes, I **am**. / No, I**’m not**. · Yes, he **is**. / No, he **isn’t**. · Yes, they **are**. / No, they **aren’t**.']] },
        { vi: 'Hiện tại tiếp diễn: **S + am / is / are + V-ing**. Câu hỏi: đưa am / is / are lên trước chủ ngữ.' }] },
    { id: 'g2', stage: 'grammar', type: 'grammar', tag: 'Grammar 2 · present continuous', title: 'Present continuous: ==use==', layout: 'two',
      blocks: [
        { uses: [
          ['actions happening now', 'I**’m writing** to my pen-friend at the moment.', 'hành động đang diễn ra lúc nói'],
          ['actions happening for a limited time', 'Frank**’s staying** at his aunt’s house because his parents are away this week.', 'hành động tạm thời'],
          ['actions shown in pictures and photographs', 'In the photo, Diane**’s wearing** a blue dress.', 'hành động trong tranh, ảnh']] },
        { chips: { title: 'Helpful hints: present continuous is usually used with', list: ['at the moment', 'now', 'right now', 'today', 'this week / month'] } },
        { watch: { text: 'Present simple or present continuous?', ex: ['He often **reads** stories to his younger brother.', 'At the moment, he**’s reading** a magazine.'] } }] },
    { id: 'g3', stage: 'grammar', type: 'grammar', tag: 'Grammar 3 · stative verbs', title: '==Stative verbs==',
      blocks: [
        { formulas: [
          ['State', 'S + **stative verb** (present simple)', '✅ I **want** to speak to Dad now. ❌ I ~~’m wanting~~ to speak to Dad now.', 'Động từ trạng thái (cảm xúc, suy nghĩ, trạng thái) thường không dùng ở thì tiếp diễn.'],
          ['have / think = state', 'S + **has / have** · S + **think(s)**', 'Ken **has** dark hair. · I **think** she’s my best friend.'],
          ['have / think = action', 'S + **am / is / are having / thinking** …', 'Jan **is having** a party. · I**’m thinking** about my family.', 'Have, think dùng tiếp diễn khi diễn tả một hành động đang diễn ra.']] },
        { chips: { title: 'The most common stative verbs', list: ['belong to', 'feel', 'hate', 'hear', 'have', 'know', 'like', 'look', 'love', 'need', 'prefer', 'remember', 'see', 'seem', 'smell', 'taste', 'think', 'understand', 'want'] } }] },

    /* ---------- GRAMMAR: book exercises A–F (pp. 10–11), quoted exactly ---------- */
    { id: 'exA', stage: 'grammar', type: 'practice', book: 'A', page: 10, tag: 'Grammar practice', title: 'Exercise ==A==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: 'It {is raining|rains} so I won’t go out today.', a: 'is raining' },
        { q: 'My brother {is liking|likes} eating ice cream.', a: 'likes' },
        { q: 'I {am being|am} tired because I have been riding my bicycle all day.', a: 'am' },
        { q: 'The children {stay|are staying} with their aunt while their parents are away.', a: 'are staying' },
        { q: 'Quickly! The bus {is coming|comes}!', a: 'is coming' },
        { q: '{Are you going|Do you go} to school on the bus this morning?', a: 'Are you going' },
        { q: 'The weather {gets|is getting} better and soon it will be summer.', a: 'is getting' },
        { q: 'Your teacher says you {are speaking|speak} English very well.', a: 'speak' }] },
    { id: 'exB', stage: 'grammar', type: 'cloze', book: 'B', page: 10, tag: 'Grammar practice', title: 'Exercise ==B==', lead: 'Fill in the blanks with the words given in the box.', style: 'dialogue',
      bank: ['are getting', 'are … doing', 'am trying', 'is cooking', 'is listening', 'is … making', 'is sleeping', '’s playing'],
      text: '**Jack:** Hi, how are you?\n**Diane:** Hi, I’m fine. What [1a] you [1b] right now?\n**Jack:** I [2] to do my homework, but it’s really noisy in my house.\n**Diane:** Oh, why?\n**Jack:** Dad [3] to the radio and Mum [4] in the kitchen.\n**Diane:** What about your sister? [5a] she [5b] any noise?\n**Jack:** Yes, she [6] some music in her room.\n**Diane:** That sounds really bad. It’s so quiet in my house.\n**Jack:** You’re lucky.\n**Diane:** Yes. My parents [7] ready to go out tonight and my baby brother [8] .\n**Jack:** That’s great! Can I come over to your house to do my homework in peace?',
      items: [{ a: 'are' }, { a: 'doing' }, { a: 'am trying' }, { a: 'is listening' }, { a: 'is cooking' }, { a: 'Is' }, { a: 'making' }, { a: ['’s playing', 'is playing'] }, { a: 'are getting' }, { a: 'is sleeping' }] },
    { id: 'exC', stage: 'grammar', type: 'practice', book: 'C', page: 10, tag: 'Grammar practice', title: 'Exercise ==C==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: '{Today|Every day} he is wearing blue jeans and a black shirt.', a: 'Today' },
        { q: 'I am having dinner at my grandmother’s house {often|this evening}.', a: 'this evening' },
        { q: 'Clark {these days|never} remembers his own telephone number.', a: 'never' },
        { q: 'Are you reading a good book {at the moment|always}?', a: 'at the moment' },
        { q: 'He is {often|now} late for school.', a: 'often' },
        { q: 'Dave is driving to his uncle’s house {this afternoon|sometimes}.', a: 'this afternoon' },
        { q: '{This month|Usually} my relatives are all going to a family wedding.', a: 'This month' },
        { q: '{Every day|Right now} I’m writing a message on my mobile phone.', a: 'Right now' }] },
    { id: 'exD', stage: 'grammar', type: 'cloze', book: 'D', page: 11, tag: 'Grammar practice', title: 'Exercise ==D==', lead: 'Complete the sentences with the verbs in present continuous.',
      textTitle: 'Hi Albert,',
      text: 'How are you? I hope you are well. I [1] to you to tell you my news.\n\nRight now, I [2] hard and my big sister [3] me with my homework. We have important exams at school and I hope to get really good marks. So I [4] any games on the computer, and I [5] TV until after the exams.\n\nWhat about you? [6] anything special these days? Maybe we can meet in the summer? My parents [7] our holidays and they [8] about taking us to your country. That will be great!\n\nI [9] forward to seeing you!\nBrian',
      items: [
        { a: ['am writing', '’m writing'], hint: 'write' }, { a: ['am studying', '’m studying'], hint: 'study' }, { a: ['is helping', '’s helping'], hint: 'help' },
        { a: ['am not playing', '’m not playing'], hint: 'not play' }, { a: ['am not watching', '’m not watching'], hint: 'not watch' }, { a: 'Are you doing', hint: 'you / do' },
        { a: ['are planning', '’re planning'], hint: 'plan' }, { a: ['are thinking', '’re thinking'], hint: 'think' }, { a: ['am looking', '’m looking'], hint: 'look' }] },
    { id: 'exE', stage: 'grammar', type: 'practice', book: 'E', page: 11, tag: 'Grammar practice', title: 'Exercise ==E==', lead: 'Each sentence has an error. Underline it and write the correct form.', cols: true,
      items: [
        { t: 'error', q: 'Do you talk to me? Sorry, I didn’t hear what you said.', a: ['Are you talking', 'Are you talking to me?'], show: '**Are you talking** to me?' },
        { t: 'error', q: 'My cousin is very rich and she is always wearing nice clothes.', a: ['always wears', 'she always wears', 'she always wears nice clothes'], show: 'she **always wears** nice clothes' },
        { t: 'error', q: 'Diane does her homework now so she can’t come and play.', a: ['is doing', 'Diane is doing her homework now'], show: 'Diane **is doing** her homework now' },
        { t: 'error', q: 'We thinking of going to a restaurant this evening. What do you think?', a: ['are thinking', 'We are thinking', 'We’re thinking'], show: 'We **are thinking** of going…' },
        { t: 'error', q: 'What do you do right now?', a: ['are you doing', 'What are you doing right now?', 'What are you doing'], show: 'What **are you doing** right now?' },
        { t: 'error', q: 'This month, we are paint our bathroom.', a: ['are painting', 'we are painting', 'we are painting our bathroom'], show: 'we **are painting** our bathroom' },
        { t: 'error', q: 'Is your brother having brown hair and blue eyes?', a: ['Does your brother have', 'Does your brother have brown hair and blue eyes?'], show: '**Does** your brother **have** brown hair and blue eyes?' },
        { t: 'error', q: 'At the moment, my best friend does feeling a bit unhappy.', a: ['is feeling', 'feels', 'my best friend is feeling a bit unhappy', 'my best friend feels a bit unhappy'], show: 'my best friend **is feeling / feels** a bit unhappy' }] },
    { id: 'exF', stage: 'grammar', type: 'practice', book: 'F', page: 11, tag: 'Grammar practice', title: 'Exercise ==F==', lead: 'Make sentences using verbs in the appropriate form.', cols: true,
      items: [
        { t: 'write', q: 'Carlos / study / history at university.', a: ['Carlos studies history at university.', 'Carlos is studying history at university.'] },
        { t: 'write', q: 'This week he / learn / about ancient history.', a: ['This week he is learning about ancient history.'] },
        { t: 'write', q: 'At the moment he / read / a book about ancient Rome.', a: ['At the moment he is reading a book about ancient Rome.'] },
        { t: 'write', q: 'He / not enjoy / the book because he / think / it not be / very interesting.', a: ['He is not enjoying the book because he thinks it is not very interesting.', 'He does not enjoy the book because he thinks it is not very interesting.', 'He isn’t enjoying the book because he thinks it isn’t very interesting.', 'He doesn’t enjoy the book because he thinks it isn’t very interesting.'] },
        { t: 'write', q: 'Today his grandparents / visit / him at university.', a: ['Today his grandparents are visiting him at university.'] },
        { t: 'write', q: 'His grandmother / know / he be / always hungry.', a: ['His grandmother knows he is always hungry.', 'His grandmother knows that he is always hungry.'] },
        { t: 'write', q: 'She / remember / that Carlos / love / pizza.', a: ['She remembers that Carlos loves pizza.'] },
        { t: 'write', q: 'Carlos / smile / now because of all the lovely food.', a: ['Carlos is smiling now because of all the lovely food.'] },
        { t: 'write', q: 'He / plan / to have a dinner party tonight.', a: ['He is planning to have a dinner party tonight.'] },
        { t: 'write', q: 'It / be / party time now and Carlos and his friends / eat / everything.', a: ['It is party time now and Carlos and his friends are eating everything.'] }] },

    /* ---------- LISTENING 1: complete the notes ---------- */
    { id: 'l1-w', stage: 'l1', type: 'words', tag: 'Listening 1 · pre-listening', title: 'New words for ==Where’s Mom?==',
      words: [
        ['🏡', 'porch', '/pɔːtʃ/', 'noun', 'hiên nhà (trước cửa)', 'Dad is sitting on the **porch**.'],
        ['🌤️', 'outside', '/ˌaʊtˈsaɪd/', 'adverb', 'bên ngoài', 'It’s nice to sit **outside**.'],
        ['⏳', 'wait for', '/weɪt fə/', 'verb', 'chờ, đợi', 'He’s **waiting for** dinner.'],
        ['📻', 'radio', '/ˈreɪdiəʊ/', 'noun', 'đài, ra-đi-ô', 'He’s listening to the **radio**.'],
        ['📰', 'the news', '/ðə njuːz/', 'noun', 'tin tức, thời sự', 'I watch **the news** at seven.'],
        ['🔧', 'not working', '/nɒt ˈwɜːkɪŋ/', 'phrase', 'bị hỏng, không hoạt động', 'The TV **isn’t working**.']] },
    { id: 'l1-det', stage: 'l1', type: 'listen', audio: 'fam', tag: 'Listening 1 · while listening', title: 'Complete the ==notes==', task: 'Listen twice. Write **one word** in each gap.', cols: true,
      items: [
        { q: 'Mom is in the ___.', a: 'kitchen' },
        { q: 'She is cooking ___.', a: 'dinner' },
        { q: 'Dad is sitting on the ___.', a: 'porch' },
        { q: 'He is waiting for ___.', a: 'dinner' },
        { q: 'He is listening to the news on the ___.', a: 'radio' },
        { q: 'He isn’t watching TV because the TV isn’t ___.', a: 'working' }] },
    { id: 'l1-say', stage: 'l1', type: 'talk', tag: 'Listening 1 · post-listening', title: 'Where is everyone ==in your home==?', lead: 'Imagine your home right now.',
      items: [
        { q: 'Where is your mum or dad right now?', frame: 'My ___ is at / in ___. I think he’s / she’s ___ing.', model: 'My mum is at work. I think she’s having a meeting.' },
        { q: 'Who usually cooks dinner in your family?', frame: '___ usually cooks dinner. Tonight, ___ is cooking.', model: 'My dad usually cooks dinner. Tonight, my grandma is cooking.' },
        { q: 'What is your pet or your neighbour doing?', frame: 'I think my ___ is ___ing.', model: 'I think my cat is sleeping on the sofa.' },
        { q: 'What is happening outside your home?', frame: 'Outside, people are ___ing.', model: 'Outside, people are riding motorbikes and children are playing.' }] },

    /* ---------- LISTENING 2: true or false ---------- */
    { id: 'l2-w', stage: 'l2', type: 'words', tag: 'Listening 2 · pre-listening', title: 'New words for ==Right now==',
      words: [
        ['💻', 'work from home', '/wɜːk frəm həʊm/', 'phrase', 'làm việc tại nhà', 'I **work from home** on Fridays.'],
        ['🏠', 'home office', '/həʊm ˈɒfɪs/', 'noun', 'phòng làm việc ở nhà', 'My **home office** is upstairs.'],
        ['☀️', 'natural light', '/ˈnætʃrəl laɪt/', 'noun', 'ánh sáng tự nhiên', 'The room has a lot of **natural light**.'],
        ['🪴', 'plants', '/plɑːnts/', 'noun', 'cây trồng (trong nhà)', 'I have **plants** around the room.'],
        ['🐕', 'walk the dog', '/wɔːk ðə dɒɡ/', 'phrase', 'dắt chó đi dạo', 'I **walk the dog** every morning.'],
        ['🍵', 'brew a cup of tea', '/bruː ə kʌp əv tiː/', 'phrase', 'pha một tách trà', 'I **brew a cup of tea** at three.'],
        ['✅', 'finish up', '/ˈfɪnɪʃ ʌp/', 'phrasal verb', 'làm xong, kết thúc', 'I’m **finishing up** work for the day.']] },
    { id: 'l2-det', stage: 'l2', type: 'listen', audio: 'now', tag: 'Listening 2 · while listening', title: 'True or ==False?==', task: 'Listen twice. Are the sentences true or false?', cols: true,
      items: [
        { q: 'Elizabeth is working in an office in the city.', o: ['True', 'False'], a: 'False', why: 'She is working in her home office.' },
        { q: 'There is a lot of natural light in her room.', o: ['True', 'False'], a: 'True' },
        { q: 'Her dog is playing in the garden.', o: ['True', 'False'], a: 'False', why: 'Her dog is sleeping.' },
        { q: 'She walked the dog about two miles.', o: ['True', 'False'], a: 'True' },
        { q: 'She is drinking a cup of coffee.', o: ['True', 'False'], a: 'False', why: 'She is drinking blackberry tea.' },
        { q: 'She added some milk to her drink.', o: ['True', 'False'], a: 'True' },
        { q: 'Right now, she is going for another walk.', o: ['True', 'False'], a: 'False', why: 'Right now she is finishing work; she may walk later.' }] },
    { id: 'l2-say', stage: 'l2', type: 'talk', tag: 'Listening 2 · post-listening', title: 'What are ==you== doing right now?', lead: 'Answer like Elizabeth.',
      items: [
        { q: 'Where are you right now? What can you see?', frame: 'Right now I’m ___ing in ___. I can see ___.', model: 'Right now I’m sitting in my classroom. I can see my friends and the board.' },
        { q: 'What do you always like to do when you study?', frame: 'When I study, I always like to ___.', model: 'When I study, I always like to listen to music.' },
        { q: 'What is your family doing at the moment?', frame: 'At the moment, my ___ is ___ing.', model: 'At the moment, my brother is playing football.' },
        { q: 'What are you doing after this lesson?', frame: 'After this lesson, I’m ___ing.', model: 'After this lesson, I’m going home.' }] },

    /* ---------- LISTENING 3: multiple choice ---------- */
    { id: 'l3-w', stage: 'l3', type: 'words', tag: 'Listening 3 · pre-listening', title: 'New words for ==It smells great!==',
      words: [
        ['🍲', 'stew', '/stjuː/', 'noun', 'món hầm', 'She’s making chicken **stew**.'],
        ['😋', 'have a taste', '/hæv ə teɪst/', 'phrase', 'nếm thử', 'Here, **have a taste**!'],
        ['🤩', 'fantastic', '/fænˈtæstɪk/', 'adjective', 'tuyệt vời', 'This tastes **fantastic**!'],
        ['😊', 'glad', '/ɡlæd/', 'adjective', 'vui mừng', 'I’m **glad** you like it.']] },
    { id: 'l3-det', stage: 'l3', type: 'listen', audio: 'smell', tag: 'Listening 3 · while listening', title: 'Choose the ==correct answer==', task: 'Listen twice. Choose the answers.', cols: true,
      items: [
        { q: 'What is the woman making?', o: ['chicken stew', 'chicken soup', 'fried chicken'], a: 'chicken stew' },
        { q: 'The man says the food ___ great.', o: ['smells', 'sounds', 'feels'], a: 'smells' },
        { q: 'He says the stew looks…', o: ['so good', 'too hot', 'strange'], a: 'so good' },
        { q: 'What does the woman say?', o: ['Here, have a taste.', 'It isn’t ready yet.', 'Please wait for dinner.'], a: 'Here, have a taste.' },
        { q: 'How does it taste?', o: ['fantastic', 'salty', 'boring'], a: 'fantastic' },
        { q: 'How does the woman feel at the end?', o: ['glad', 'tired', 'angry'], a: 'glad' }] },
    { id: 'l3-say', stage: 'l3', type: 'talk', tag: 'Listening 3 · post-listening', title: 'Describe ==your favourite dish==', lead: 'Use sense verbs + adjectives.',
      items: [
        { q: 'What’s your favourite dish? Who cooks it?', frame: 'My favourite dish is ___. My ___ cooks it.', model: 'My favourite dish is phở. My dad cooks it on Sundays.' },
        { q: 'How does it look?', frame: 'It looks ___.', model: 'It looks beautiful.' },
        { q: 'How does it smell?', frame: 'It smells ___.', model: 'It smells wonderful.' },
        { q: 'How does it taste?', frame: 'It tastes ___. I love / like it.', model: 'It tastes fantastic. I love it!' }] },

    /* ---------- READING: two texts, easier → harder ---------- */
    { id: 'r-w1', stage: 'read', type: 'words', tag: 'Reading 1 · pre-reading', title: 'New words for ==Text 1==',
      words: [
        ['🧹', 'tidy your room', '/ˈtaɪdi jɔː ruːm/', 'phrase', 'dọn dẹp phòng', 'I’m **tidying my room**.'],
        ['🪴', 'water the plants', '/ˈwɔːtə ðə plɑːnts/', 'phrase', 'tưới cây', 'Grandma is **watering the plants**.'],
        ['🗑️', 'take out the rubbish', '/teɪk aʊt ðə ˈrʌbɪʃ/', 'phrase', 'đổ rác', 'Please **take out the rubbish**.'],
        ['🧊', 'fridge', '/frɪdʒ/', 'noun', 'tủ lạnh', 'There isn’t any milk in the **fridge**.'],
        ['🥐', 'bakery', '/ˈbeɪkəri/', 'noun', 'tiệm bánh', 'I know a great **bakery**.'],
        ['🪟', 'balcony', '/ˈbælkəni/', 'noun', 'ban công', 'Grandma is on the **balcony**.']] },
    { id: 'r-t1', stage: 'read', type: 'read', tag: 'Reading 1 · while reading', title: 'Text 1: ==Who…?==', lead: 'Read the family chat. Who is doing what?', textTitle: 'Family 💬 · Saturday', textIcon: '📱', style: 'chat', numbered: false,
      text: [
        '**Mum (10:15):** Hi everyone! I’m at the supermarket. I’m buying food for Grandma’s birthday dinner tonight. Do we need anything else?',
        '**Huy (10:17):** Hi Mum. I’m tidying my room, like you asked. We need milk. There isn’t any in the fridge.',
        '**Dad (10:20):** I’m working at the office today, but I’m leaving at four. I’m thinking about the cake. Does Grandma prefer chocolate or fruit?',
        '**Mai (10:22):** She loves fruit cake! I know a great bakery near the market. I’m doing my homework now, but I can go at two.',
        '**Grandma (10:30):** You are all very kind! I’m sitting on the balcony and watering my plants. The flowers smell wonderful today.',
        '**Mum (10:31):** Perfect! Huy, please take out the rubbish when you finish. Thanks!'],
      items: [
        { q: 'Who is buying food for a birthday dinner?', o: ['Mum', 'Mai', 'Grandma'], a: 'Mum', ev: 'I’m buying food for Grandma’s birthday dinner tonight' },
        { q: 'Who is tidying a room?', o: ['Huy', 'Dad', 'Mai'], a: 'Huy', ev: 'I’m tidying my room' },
        { q: 'Who is working today?', o: ['Dad', 'Huy', 'Grandma'], a: 'Dad', ev: 'I’m working at the office today' },
        { q: 'Who knows a good bakery?', o: ['Mai', 'Mum', 'Dad'], a: 'Mai', ev: 'I know a great bakery near the market' },
        { q: 'Who is doing homework?', o: ['Mai', 'Huy', 'Mum'], a: 'Mai', ev: 'I’m doing my homework now' },
        { q: 'Who is watering plants?', o: ['Grandma', 'Mai', 'Dad'], a: 'Grandma', ev: 'watering my plants' },
        { q: 'Who must take out the rubbish?', o: ['Huy', 'Dad', 'Mai'], a: 'Huy', ev: 'Huy, please take out the rubbish when you finish.' }] },
    { id: 'r-w2', stage: 'read', type: 'words', tag: 'Reading 2 · pre-reading', title: 'New words for ==Text 2==',
      words: [
        ['✈️', 'abroad', '/əˈbrɔːd/', 'adverb', 'ở nước ngoài', 'My parents are working **abroad**.'],
        ['🚜', 'farm', '/fɑːm/', 'noun', 'trang trại', 'My grandparents live on a **farm**.'],
        ['🐄', 'cow', '/kaʊ/', 'noun', 'con bò', 'The **cows** need milking at five.'],
        ['🥕', 'vegetable garden', '/ˈvedʒtəbl ˈɡɑːdn/', 'noun', 'vườn rau', 'We work in the **vegetable garden**.'],
        ['🌱', 'grow', '/ɡrəʊ/', 'verb', 'trồng', 'We’re **growing** tomatoes.'],
        ['🍓', 'jam', '/dʒæm/', 'noun', 'mứt', 'Grandma is making strawberry **jam**.'],
        ['📶', 'Wi-Fi', '/ˈwaɪ faɪ/', 'noun', 'mạng không dây', 'The **Wi-Fi** is very slow here.'],
        ['🙋', 'over my shoulder', '/ˈəʊvə maɪ ˈʃəʊldə/', 'phrase', 'qua vai mình (nhìn trộm)', 'He’s reading this **over my shoulder**!']] },
    { id: 'r-t2', stage: 'read', type: 'read', tag: 'Reading 2 · while reading', title: 'Text 2: ==True, False or Not given?==', lead: 'Read the blog post. Choose **True**, **False** or **Not given** (the text doesn’t say).', textTitle: 'A month on the farm', textIcon: '🚜',
      text: [
        'Hi everyone! It’s Day 12 of my summer at my grandparents’ farm near Đà Lạt, and I’m writing this post on my grandad’s old laptop. Normally I live in a flat in Hà Nội with my parents, but this month they are working abroad, so I’m staying here.',
        'Life here is completely different. In the city, I usually get up at nine during the holidays. Here, everyone gets up at five because the cows need milking. This week I’m helping my grandad in the vegetable garden. We’re growing tomatoes, carrots and strawberries, and I’m learning a lot.',
        'At the moment it’s raining quite hard, so we aren’t working outside. Grandma is making jam in the kitchen, and the whole house smells of sugar and fruit. My cousin Tú is visiting for the weekend. He’s sitting next to me and he’s trying to read this over my shoulder!',
        'I miss my friends and my fast internet, of course. The Wi-Fi here only works in one corner of the living room. But I love the quiet evenings. After dinner we sit on the porch, and Grandad tells stories about when he was young. I think I understand my family much better now.'],
      items: [
        { q: 'The writer usually lives on the farm.', o: ['True', 'False', 'Not given'], a: 'False', ev: 'Normally I live in a flat in Hà Nội with my parents' },
        { q: 'The writer’s parents are working in another country this month.', o: ['True', 'False', 'Not given'], a: 'True', ev: 'this month they are working abroad' },
        { q: 'On the farm, everyone gets up at nine.', o: ['True', 'False', 'Not given'], a: 'False', ev: 'Here, everyone gets up at five' },
        { q: 'This week the writer is helping in the vegetable garden.', o: ['True', 'False', 'Not given'], a: 'True', ev: 'This week I’m helping my grandad in the vegetable garden' },
        { q: 'The grandparents sell their strawberries at the market.', o: ['True', 'False', 'Not given'], a: 'Not given', why: 'The text doesn’t say what they do with the strawberries.' },
        { q: 'At the moment they are working outside.', o: ['True', 'False', 'Not given'], a: 'False', ev: 'so we aren’t working outside' },
        { q: 'Tú is staying on the farm for the whole summer.', o: ['True', 'False', 'Not given'], a: 'False', ev: 'My cousin Tú is visiting for the weekend.' },
        { q: 'The writer enjoys the evenings on the farm.', o: ['True', 'False', 'Not given'], a: 'True', ev: 'But I love the quiet evenings.' }] },

    /* ---------- SPEAKING ---------- */
    { id: 'sp-w', stage: 'speak', type: 'words', tag: 'Speaking · pre-speaking', title: 'Phrases for ==a video call==',
      words: [
        ['👋', 'What are you up to?', '', 'question', 'Bạn đang làm gì đấy?', '– Not much. I’m just relaxing.'],
        ['🙂', 'I’m just…', '', 'answer', 'Mình chỉ đang…', 'I’m just watching TV.'],
        ['⏰', 'Are you busy right now?', '', 'question', 'Bây giờ bạn có bận không?', '– No, I’m free.'],
        ['🔊', 'Can you hear me?', '', 'question', 'Bạn nghe rõ mình không?', '– Yes, loud and clear.'],
        ['📶', 'Sorry, you’re breaking up.', '', 'phrase', 'Xin lỗi, tiếng bị ngắt quãng.', 'Can you say that again?'],
        ['👀', 'You look… / It sounds…', '', 'phrase', 'Trông bạn… / Nghe có vẻ…', 'You look happy! That sounds fun!'],
        ['📲', 'Can I call you back later?', '', 'question', 'Mình gọi lại sau nhé?', 'I’m cooking. Can I call you back later?'],
        ['💬', 'Talk to you soon!', '', 'goodbye', 'Nói chuyện sau nhé!', 'OK, bye! Talk to you soon!']] },
    { id: 'sp-wp', stage: 'speak', type: 'pairs', tag: 'Speaking · pre-speaking', title: 'Match the ==responses==', lead: 'Tap a line on the left, then tap the best response on the right.',
      right: ['Sorry! Is that better?', 'Bye! Talk to you soon!', 'Not much. I’m just reading.', 'Thanks! I’m on holiday.', 'Yes, loud and clear!', 'Sure. Talk to you later!', 'Yes, I’m doing my homework.'],
      items: [
        { t: 'match', q: 'What are you up to?', a: 'Not much. I’m just reading.' },
        { t: 'match', q: 'Are you busy right now?', a: 'Yes, I’m doing my homework.' },
        { t: 'match', q: 'Can you hear me?', a: 'Yes, loud and clear!' },
        { t: 'match', q: 'You’re breaking up.', a: 'Sorry! Is that better?' },
        { t: 'match', q: 'You look really happy!', a: 'Thanks! I’m on holiday.' },
        { t: 'match', q: 'Can I call you back later?', a: 'Sure. Talk to you later!' },
        { t: 'match', q: 'OK, I have to go now.', a: 'Bye! Talk to you soon!' }] },
    { id: 'sp-gap', stage: 'speak', type: 'gap', tag: 'Speaking · spot the difference', title: 'Saturday morning: find ==6 differences==', lead: 'You have two different pictures of the same living room. Ask and answer. Don’t show your card!',
      roles: [
        { name: 'Student A', who: 'Your picture', icon: '🖼️', info: ['Dad is reading a newspaper on the sofa.', 'The cat is sleeping under the table.', 'Lan is playing the piano.', 'Grandma is drinking tea.', 'It’s raining outside.', 'Bình is doing his homework.'], ask: ['What is Dad doing in your picture?', 'Where is the cat?', 'What is Lan playing?'] },
        { name: 'Student B', who: 'Your picture', icon: '🖼️', info: ['Dad is watching TV on the sofa.', 'The cat is sleeping on the sofa.', 'Lan is playing the guitar.', 'Grandma is watering the plants.', 'It’s sunny outside.', 'Bình is eating a sandwich.'], ask: ['What is Grandma doing in your picture?', 'What’s the weather like?', 'What is Bình doing?'] }],
      useful: ['In my picture, Dad is…', 'What is … doing?', 'Is the cat sleeping…?', 'That’s a difference!'],
      model: ['**A:** In my picture, Dad is reading a newspaper. What is he doing in your picture?', '**B:** He’s watching TV. That’s a difference! Where is the cat?', '**A:** It’s sleeping under the table.', '**B:** In my picture, it’s sleeping on the sofa. Two differences!'] },
    { id: 'sp-task', stage: 'speak', type: 'speak', tag: 'Speaking · role play', title: 'A Saturday ==video call==', icon: '📱',
      task: 'It’s Saturday afternoon. Call your partner. Say **what you and your family are doing**, ask what your partner is doing, describe how something **looks, smells or tastes**, and **agree to meet later**.',
      steps: ['Greet your partner: “What are you up to?”', 'Say where you are and what you are doing.', 'Say what two family members are doing.', 'Use one sense verb: It smells… / It looks…', 'Agree on a time to meet. Say goodbye.'],
      useful: ['What are you up to?', 'I’m just…', 'My mum is…', 'It smells / looks…', 'Are you free at…?', 'Talk to you soon!'],
      timer: 150, record: true,
      model: ['**A:** Hi Lan! What are you up to?', '**B:** Hi! I’m just doing my homework. My brother is playing the guitar, so it’s really noisy!', '**A:** Oh no! I’m in the kitchen. My dad is making pizza. It smells fantastic.', '**B:** Lucky you! What’s your sister doing?', '**A:** She’s sleeping. Are you free at five? Let’s go to the park.', '**B:** Good idea. See you at five. Talk to you soon!'] },

    /* ---------- WRITING ---------- */
    { id: 'w-model', stage: 'write', type: 'read', tag: 'Writing · pre-writing', title: 'Look at ==a model update==', lead: 'Read Mai’s message. Answer the questions.', textTitle: 'Hi Lan!', textIcon: '💬', numbered: false,
      text: ['I’m sitting on the balcony with a cup of tea. It’s a lovely afternoon. My mum is cooking dinner in the kitchen, and it smells wonderful. My brother is playing the guitar in his room. He isn’t very good, but he loves it! My dad is watering the plants.', 'I’m doing my English homework right now, but I want to go out later. Are you free at six?', 'Love, Mai'],
      items: [
        { q: 'Where is Mai?', o: ['on the balcony', 'in the kitchen', 'in her room'], a: 'on the balcony', ev: 'I’m sitting on the balcony with a cup of tea.' },
        { q: 'Which verb is a stative verb?', o: ['loves', 'cooking', 'playing'], a: 'loves', ev: 'he loves it!' },
        { q: 'Which phrase uses a sense verb?', o: ['it smells wonderful', 'He isn’t very good', 'Are you free at six?'], a: 'it smells wonderful', ev: 'it smells wonderful' },
        { q: 'What does Mai want to do?', o: ['go out later', 'cook dinner', 'play the guitar'], a: 'go out later', ev: 'I want to go out later' }] },
    { id: 'w-task', stage: 'write', type: 'write', tag: 'Writing · task', title: 'Write ==a live update==',
      task: 'Write a message (**60–80 words**) to a friend. Tell them what is happening at your home **right now**.',
      plan: ['Say where you are and what you are doing.', 'Say what two or three family members (or pets) are doing.', 'Use at least two stative verbs (like, love, want, think…).', 'Use one sense verb + adjective (It smells / looks…).', 'Ask a question or suggest a plan.'],
      model: ['Hi Lan!', 'I’m sitting on the balcony with a cup of tea. It’s a lovely afternoon. My mum is cooking dinner in the kitchen, and it smells wonderful. My brother is playing the guitar in his room. He isn’t very good, but he loves it! My dad is watering the plants.', 'I’m doing my English homework right now, but I want to go out later. Are you free at six?', 'Love, Mai'],
      checklist: ['I use the present continuous for actions now.', 'I spell the -ing forms correctly.', 'I use at least two stative verbs in the present simple.', 'I use one sense verb + adjective.', 'I ask a question or suggest a plan.', 'My message has 60–80 words.'],
      min: 60, max: 80, draft: true },

    /* ---------- REVIEW ---------- */
    { id: 'u-check', stage: 'review', type: 'practice', tag: 'Review', title: 'Unit 2 ==check==', cols: true,
      items: [
        { q: 'Shh! The baby ___.', o: ['sleeps', 'is sleeping', 'sleep'], a: 'is sleeping' },
        { q: 'What ___ right now?', o: ['do you do', 'are you doing', 'you are doing'], a: 'are you doing' },
        { q: 'She ___ to school every day.', o: ['walks', 'is walking', 'walking'], a: 'walks' },
        { q: 'They ___ TV at the moment.', o: ['aren’t watching', 'don’t watch', 'not watching'], a: 'aren’t watching' },
        { q: 'I ___ the answer.', o: ['know', 'am knowing', 'knowing'], a: 'know' },
        { q: 'This pizza ___ great!', o: ['tastes', 'is tasting', 'taste'], a: 'tastes' },
        { q: 'Ken ___ dark hair.', o: ['has', 'is having', 'have'], a: 'has' },
        { q: 'Be quiet! I ___ about my answer.', o: ['think', 'am thinking', 'thinks'], a: 'am thinking' },
        { q: 'Grandma is watering her plants on the…', o: ['balcony', 'fridge', 'radio'], a: 'balcony' },
        { q: 'Please take ___ the rubbish.', o: ['out', 'up', 'off'], a: 'out' }] },
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Review', title: 'What can you ==do now==?',
      cando: ['I can use the present continuous for actions now and for a limited time.', 'I can choose between the present simple and the present continuous.', 'I can use stative verbs correctly.', 'I can understand short real recordings about home life.', 'I can read two texts and find details.', 'I can describe my home in a video call and write a live update.'] }
  ]
};
