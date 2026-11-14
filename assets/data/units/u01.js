/* Unit 1 · Present simple, there is / there are, it's
   Book: Destination A2, Unit 1, pages 6–8.
   Order: grammar theory (page 6) → book exercises A–F, quoted exactly (pages 7–8) →
   skills, each with its own pre-stage for new words → review. One card = one slide. */
window.A2_UNITS[1] = {
  n: 1, type: 'Grammar', title: 'My day, my neighbourhood',
  focus: 'Present simple · there is / there are · it’s',
  book: 'Destination A2 · Unit 1 · pages 6–8',
  goals: ['Use the present simple, **there is / there are** and **it’s** correctly.', 'Understand two real conversations about a day and a hometown.', 'Read a message from a new neighbour.', 'Meet a neighbour, make a plan and write a welcome message.'],
  audio: {
    day: { title: 'My Day', speakers: 'Natalie and Todd', level: 'A2', length: '4:12', provider: 'ELLLO Views #1554', src: 'https://elllo.org/Audio/A1551/1554-Nat-Verbs-Schedule.mp3', page: 'https://elllo.org/english/1551/1554-Nat-Verbs-Schedule.htm' },
    town: { title: 'My Hometown', speakers: 'Sarah and John', level: 'A2', length: '2:34', provider: 'ELLLO Views #1571', src: 'https://www.elllo.org/Audio/A1551/1571-John-There-is-are-Hometowns.mp3', page: 'https://www.elllo.org/english/1551/1571-Sarah-There-is-are-Hometowns.htm' }
  },
  stages: [
    { id: 'start', skill: 'start', icon: '👋', name: 'Welcome', caption: 'Meet the Unit and talk about your life.' },
    { id: 'grammar', skill: 'grammar', icon: '🧩', name: 'Grammar', caption: 'Present simple, there is / there are, it’s: all the rules first, then the book exercises A–F.' },
    { id: 'l1', skill: 'listening', icon: '🎧', name: 'Listening 1: My Day', caption: 'Pre-listening words → main idea → details → speaking.' },
    { id: 'l2', skill: 'listening', icon: '🏞️', name: 'Listening 2: My Hometown', caption: 'Pre-listening words → main idea → details → speaking.' },
    { id: 'read', skill: 'reading', icon: '📖', name: 'Reading: Welcome to Green Street', caption: 'Pre-reading words → read for the main idea → read for details.' },
    { id: 'speak', skill: 'speaking', icon: '💬', name: 'Speaking: Meet a neighbour', caption: 'Useful phrases → information gap → role play.' },
    { id: 'write', skill: 'writing', icon: '✍️', name: 'Writing: A welcome message', caption: 'Model text → plan, write and check.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Review', caption: 'Unit check, can-do list and homework.' }
  ],
  cards: [
    /* ---------- WELCOME ---------- */
    { id: 'cover', stage: 'start', type: 'cover', title: 'My day, my ==neighbourhood==' },
    { id: 'warm', stage: 'start', type: 'talk', tag: 'Warm-up · speaking', title: 'A little about ==you==', lead: 'Ask and answer with a partner. Add one extra detail.',
      items: [
        { q: 'What time do you usually get up?', model: 'I usually get up at half past six. What about you?' },
        { q: 'What do you do at weekends?', model: 'I often meet my friends. We go to a café or the cinema.' },
        { q: 'What is there near your home?', model: 'There is a small park, and there are two cafés near my home.' },
        { q: 'What’s the weather like today?', model: 'It’s hot and sunny today.' }],
      useful: ['I usually…', 'There is / There are…', 'It’s…', 'What about you?'] },

    /* ---------- GRAMMAR: theory (book p. 6) ---------- */
    { id: 'g1', stage: 'grammar', type: 'grammar', tag: 'Grammar 1 · present simple', title: 'Present simple: ==form and use==',
      blocks: [
        { form: { cols: ['', 'Affirmative form', 'Negative form', 'Question form and short answer'], rows: [
          ['I / you / we / they', 'I / you / we / they **talk** …', 'I / you / we / they **don’t talk** …', '**Do** I / you / we / they **talk** …? – Yes, I / you / we / they **do**. / No, I / you / we / they **don’t**.'],
          ['he / she / it', 'He / she / it **talks** …', 'He / she / it **doesn’t talk** …', '**Does** he / she / it **talk** …? – Yes, he / she / it **does**. / No, he / she / it **doesn’t**.']] } },
        { uses: [
          ['repeated actions in the present', 'Adam **walks** to school every morning.', 'hành động lặp đi lặp lại'],
          ['typical situations', '**Do** the twins **live** in a large house?', 'tình huống thường thấy'],
          ['feelings, thoughts and states', 'Sandra **doesn’t look** like her cousin.', 'cảm xúc, suy nghĩ, trạng thái'],
          ['general facts', 'Birds **teach** their children how to fly.', 'sự thật hiển nhiên']] },
        { vi: 'I/you/we/they + động từ nguyên mẫu; he/she/it + động từ thêm **-s/-es**. Phủ định và câu hỏi dùng **do/does**; sau do/does/don’t/doesn’t động từ luôn ở dạng nguyên mẫu.' }] },
    { id: 'g2', stage: 'grammar', type: 'grammar', tag: 'Grammar 2 · present simple', title: 'Spelling, adverbs and ==time phrases==', layout: 'two',
      blocks: [
        { watch: { text: 'Spelling with he / she / it:', ex: ['I / you / we / they **go** – he / she / it **goes**', 'I / you / we / they **do** – he / she / it **does**', 'I / you / we / they **watch** – he / she / it **watches**', 'I / you / we / they **study** – he / she / it **studies**'] } },
        { hint: { title: 'Helpful hints', text: 'Present simple is usually used with adverbs: **always · regularly · sometimes · usually · often · never**. These adverbs usually go **before the main verb**, but **after to be**:', ex: ['Tessa **often visits** her grandma.', 'We**’re always** glad to see our aunt.'] } },
        { hint: { title: 'Phrases', text: '**every day / week / year** · **on Mondays** · **in the summer / autumn** · **at weekends / the weekend / 6 pm / two o’clock**. As a rule, these phrases are put at the **beginning** or at the **end** of the sentence:', ex: ['I go out with my friends **at weekends**.', '**At weekends**, I go out with my friends.'] } },
        { vi: 'Trạng từ tần suất đứng **trước động từ thường** nhưng **sau động từ to be**. Cụm từ chỉ thời gian thường đặt ở **đầu** hoặc **cuối** câu.' }] },
    { id: 'g3', stage: 'grammar', type: 'grammar', tag: 'Grammar 3 · there is / there are', title: 'There is / ==There are==',
      blocks: [
        { form: { cols: ['Affirmative form', 'Negative form', 'Question form'], rows: [
          ['**There is** …', '**There is not (isn’t)** …', '**Is there** …?'],
          ['**There are** …', '**There are not (aren’t)** …', '**Are there** …?']] } },
        { uses: [['the existence or location of someone or something in a particular place', '**There is** a bicycle in the street. **There are** two men in the photo.', 'nói về sự tồn tại hoặc vị trí của người/vật ở một nơi']] },
        { hint: { title: 'Helpful hints', text: '**There is / There are** introduces a person or thing for the first time. Later, we usually use **it** or **they**.', ex: ['✅ **There is** a bicycle in the street. **It is** my sister’s bicycle.', '✅ **There are** two men in the photo. **They’re** my uncles.'] } },
        { vi: 'There is + danh từ số ít / không đếm được; There are + danh từ số nhiều. Lần đầu nhắc đến dùng there is/are, những lần sau dùng **it** (số ít) hoặc **they** (số nhiều).' }] },
    { id: 'g4', stage: 'grammar', type: 'grammar', tag: 'Grammar 4 · it’s', title: '==It’s== …',
      blocks: [
        { uses: [
          ['the weather', '**It’s** so cold in Siberia in the winter.', 'thời tiết'],
          ['the time / day of the week', '**It isn’t** nine o’clock yet. / At last, **it’s** Friday!', 'giờ, thứ trong tuần'],
          ['distances', '**Is it** far from your home to the school?', 'khoảng cách'],
          ['familiar situations / states', '**It’s** great to see you again.', 'tình huống, trạng thái quen thuộc']] },
        { hint: { title: 'Helpful hints', text: '**It** is the subject of sentences that describe the weather, time, dates and distances. In **it’s + adjective + infinitive**, *it* refers to the situation or action expressed by the infinitive.' } },
        { vi: '“It” là chủ ngữ giả khi nói về thời tiết, thời gian, ngày tháng, khoảng cách. Trong It’s + tính từ + to V, “it” chỉ hành động ở phần to V (It’s great **to see** you again).' }] },

    /* ---------- GRAMMAR: book exercises A–F (pp. 7–8), quoted exactly ---------- */
    { id: 'exA', stage: 'grammar', type: 'practice', book: 'A', page: 7, tag: 'Grammar practice', title: 'Exercise ==A==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: 'Susie and Dan {doesn’t|don’t} have English lessons on Saturday.', a: 'don’t' },
        { q: '{Do|Does} you get up very early on school days?', a: 'Do' },
        { q: 'Barbara really {enjoy|enjoys} playing with her new friends.', a: 'enjoys' },
        { q: 'What {do you|you} do at weekends?', a: 'do you' },
        { q: 'How many text messages {do teenagers send|send teenagers} in Russia every day?', a: 'do teenagers send' },
        { q: 'Simon {don’t|doesn’t} ride his bike to school in the morning.', a: 'doesn’t' },
        { q: 'Our cousins {meet|meets} us at the weekend.', a: 'meet' },
        { q: 'Sam {doesn’t|don’t} go to bed very late on school nights.', a: 'doesn’t' }] },
    { id: 'exB', stage: 'grammar', type: 'practice', book: 'B', page: 7, tag: 'Grammar practice', title: 'Exercise ==B==', lead: 'Choose the correct answer.', cols: true, abc: true,
      items: [
        { q: 'How many times a day ___ online?', o: ['does Jerry go', 'goes Jerry', 'Jerry does go'], a: 'does Jerry go' },
        { q: 'Look! ___ some people ice-skating.', o: ['They are', 'It is', 'There are'], a: 'There are' },
        { q: '___ very late. Go to bed!', o: ['There’s', 'It’s', 'There'], a: 'It’s' },
        { q: 'Matilda ___ comedies on TV.', o: ['watches often', 'often watch', 'often watches'], a: 'often watches' },
        { q: 'Who ___ your free time with?', o: ['do you spend', 'do spend you', 'spend you'], a: 'do you spend' },
        { q: 'Daniel ___ a late breakfast on Saturday mornings.', o: ['often has', 'has often', 'often have'], a: 'often has' },
        { q: 'Natasha and Fred ___ home from school very late.', o: ['doesn’t come', 'don’t come', 'not coming'], a: 'don’t come' },
        { q: 'Does Vladimir like hip hop? No, he ___.', o: ['don’t', 'doesn’t', 'doesn’t like'], a: 'doesn’t' }] },
    { id: 'exC', stage: 'grammar', type: 'practice', book: 'C', page: 7, tag: 'Grammar practice', title: 'Exercise ==C==', lead: 'Complete the sentences with the verb in the correct form.', cols: true,
      items: [
        { q: 'My friends and I ___ **(be)** members of the chess club at school.', a: 'are' },
        { q: 'Nikolai ___ **(not / play)** football on Wednesday.', a: ['doesn’t play', 'does not play'] },
        { q: '___ **(your friends / go)** to school by bus?', a: 'Do your friends go' },
        { q: 'I ___ **(not / have)** a lot of free time during the week.', a: ['don’t have', 'do not have'] },
        { q: 'How ___ **(you / spend)** your free time?', a: 'do you spend' },
        { q: 'Sabina never ___ **(have)** lunch at school.', a: 'has' },
        { q: 'How many children ___ **(there / be)** in your class?', a: 'are there' },
        { q: 'How old ___ **(be)** your brother?', a: 'is' }] },
    { id: 'exD', stage: 'grammar', type: 'practice', book: 'D', page: 8, tag: 'Grammar practice', title: 'Exercise ==D==', lead: 'Complete the sentences using the adverb and the corresponding verb form.', cols: true,
      items: [
        { q: 'Gina ___ to the gym on Mondays. **(go / regularly)**', a: 'regularly goes' },
        { q: 'My grandparents ___ us at the weekend. **(visit / often)**', a: 'often visit' },
        { q: 'Our teacher ___ late for class. **(be / never)**', a: 'is never' },
        { q: 'People in my town ___ picnics in the park. **(have / sometimes)**', a: 'sometimes have' },
        { q: 'My little brother ___ happy to play with his toys! **(be / always)**', a: ['is always', '’s always'] },
        { q: 'Wendy ___ a uniform at school. **(wear / usually)**', a: 'usually wears' }] },
    { id: 'exE', stage: 'grammar', type: 'practice', book: 'E', page: 8, tag: 'Grammar practice', title: 'Exercise ==E==', lead: 'Write questions and short answers.', cols: true,
      items: [
        { t: 'write', q: 'Yuri plays tennis three times a week.', a: ['Does Yuri play tennis three times a week? Yes, he does.', 'Does Yuri play tennis? Yes, he does.'] },
        { t: 'write', q: 'Sonia has English lessons twice a week.', a: ['Does Sonia have English lessons twice a week? Yes, she does.', 'Does Sonia have English lessons? Yes, she does.'] },
        { t: 'write', q: 'There is a new student in our class.', a: ['Is there a new student in your class? Yes, there is.', 'Is there a new student in our class? Yes, there is.'] },
        { t: 'write', q: 'Nina doesn’t come home from school at four o’clock.', a: ['Does Nina come home from school at four o’clock? No, she doesn’t.', 'Does Nina come home from school at four? No, she doesn’t.'] },
        { t: 'write', q: 'There are five books in my school bag.', a: ['Are there five books in your school bag? Yes, there are.', 'Are there five books in my school bag? Yes, there are.'] },
        { t: 'write', q: 'We don’t get up early on Sunday.', a: ['Do you get up early on Sunday? No, we don’t.', 'Do you get up early on Sundays? No, we don’t.'] }] },
    { id: 'exF', stage: 'grammar', type: 'cloze', book: 'F', page: 8, tag: 'Grammar practice', title: 'Exercise ==F==', lead: 'Fill in the gaps using the appropriate form of the verbs given.',
      bank: ['be', 'be', 'enjoy', 'have', 'have', 'live', 'look', 'love', 'not have', 'not like', 'play', 'spend', 'swim', 'want'],
      textTitle: 'Hi Tamara,',
      text: 'Thank you for your email. It’s great to have a new pen friend! Here’s some information about me. I [1] in Greece with my brother and my parents. My brother is fourteen years old and I [2] twelve. I [3] sports! I [4] in the pool three times a week and I also [5] basketball and tennis every Tuesday and Friday.\n\nMy brother, Petros, is tall and good-looking. He [6] sports but he [7] reading books. He [8] to be a writer.\n\nI [9] two best friends, Maria and Eva. They [10] very friendly and easy-going. We [11] the same hobbies and interests, but we have a lot of fun together. Maria is short with brown hair and blue eyes, like me, and Eva is very tall with blond hair and brown eyes.\n\nWhat about you? What [12a] you [12b] like? [13a] you [13b] any brothers or sisters? How [14a] you [14b] your weekends?\n\nHope to hear from you soon,\nEleni',
      items: [{ a: 'live' }, { a: ['am', '’m'] }, { a: 'love' }, { a: 'swim' }, { a: 'play' }, { a: ['doesn’t like', 'does not like'] }, { a: 'enjoys' }, { a: 'wants' }, { a: 'have' }, { a: 'are' }, { a: ['don’t have', 'do not have'] }, { a: 'do' }, { a: 'look' }, { a: 'Do' }, { a: 'have' }, { a: 'do' }, { a: 'spend' }] },
    { id: 'g-say', stage: 'grammar', type: 'talk', tag: 'Grammar · speaking', title: 'Find someone ==who…==', lead: 'Ask your classmates. Then report: “Lan gets up before six.”',
      items: [
        { q: 'Find someone who **gets up** before six.', model: 'Do you get up before six? – Yes, I do. I get up at 5.30.' },
        { q: 'Find someone who **never** drinks coffee.', model: 'Do you drink coffee? – No, I never drink coffee.' },
        { q: 'Find someone who has **a park** near their home.', model: 'Is there a park near your home? – Yes, there is. It’s very quiet.' },
        { q: 'Find someone who lives **far** from school.', model: 'Is it far from your home to school? – Yes, it’s about ten kilometres.' }],
      useful: ['Do you…?', 'Is there…? / Are there…?', 'Is it far…?', 'He / She + verb-s'] },

    /* ---------- LISTENING 1: My Day ---------- */
    { id: 'l1-w', stage: 'l1', type: 'words', tag: 'Listening 1 · pre-listening', title: 'New words for ==My Day==',
      words: [
        ['🌅', 'a morning person', '/ə ˈmɔːnɪŋ ˈpɜːsn/', 'phrase', 'người thích dậy sớm', 'I’m **a morning person**.'],
        ['🛏️', 'get out of bed', '/ɡet aʊt əv bed/', 'phrase', 'ra khỏi giường', 'I **get out of bed** at 7.30.'],
        ['📧', 'check emails', '/tʃek ˈiːmeɪlz/', 'phrase', 'kiểm tra email', 'I **check my emails** on my phone.'],
        ['👩‍🏫', 'lesson', '/ˈlesn/', 'noun', 'tiết học', 'Our first **lesson** starts at nine.'],
        ['🕛', 'noon', '/nuːn/', 'noun', '12 giờ trưa', 'We have lunch at **noon**.'],
        ['🍽️', 'canteen', '/kænˈtiːn/', 'noun', 'căng tin', 'We eat in the school **canteen**.'],
        ['💲', 'cheap', '/tʃiːp/', 'adjective', 'rẻ', 'Lunch is **cheap**: only $3.'],
        ['😴', 'tired', '/ˈtaɪəd/', 'adjective', 'mệt', 'I’m **tired** after work.']] },
    { id: 'l1-wp', stage: 'l1', type: 'practice', tag: 'Listening 1 · pre-listening', title: 'Check the ==new words==', cols: true,
      items: [
        { q: 'Natalie loves early mornings. She’s a morning ___.', a: 'person' },
        { q: 'I wake up at seven, but I get out of ___ at 7.30.', a: 'bed' },
        { q: 'I check my ___ on my phone.', a: 'emails' },
        { q: 'At school, each ___ lasts one hour.', a: 'lesson' },
        { q: 'Twelve o’clock in the day is ___.', a: 'noon' },
        { q: 'Students buy lunch in the school ___.', a: 'canteen' },
        { q: 'It costs only $3. It’s very ___.', a: 'cheap' },
        { q: 'After a long day, I feel ___.', a: 'tired' }] },
    { id: 'l1-gist', stage: 'l1', type: 'listen', audio: 'day', tag: 'Listening 1 · while listening', title: 'Task 1: ==main idea==', task: 'Listen once. Choose the answers.',
      items: [
        { q: 'Natalie talks about…', o: ['her typical day', 'her last holiday', 'her new house'], a: 'her typical day' },
        { q: 'What is Natalie’s job?', o: ['She’s a teacher.', 'She’s a student.', 'She’s a cook.'], a: 'She’s a teacher.' }] },
    { id: 'l1-det', stage: 'l1', type: 'listen', audio: 'day', tag: 'Listening 1 · while listening', title: 'Task 2: ==details==', task: 'Listen again. Choose the answers.', cols: true,
      items: [
        { q: 'Natalie wakes up at about…', o: ['6.00', '7.00', '7.30'], a: '7.00' },
        { q: 'She gets out of bed at about…', o: ['7.00', '7.30', '8.00'], a: '7.30' },
        { q: 'In bed, she…', o: ['checks her emails', 'makes breakfast', 'goes running'], a: 'checks her emails' },
        { q: 'In the morning, she drinks…', o: ['coffee', 'tea', 'hot chocolate'], a: 'hot chocolate' },
        { q: 'Lessons start at about…', o: ['8.00', '9.00', '10.00'], a: '9.00' },
        { q: 'Lunch at school costs about…', o: ['$3', '$13', '$30'], a: '$3' },
        { q: 'After work, she watches TV for about…', o: ['one hour', 'two hours', 'three hours'], a: 'two hours' },
        { q: 'Most nights, she goes to bed at around…', o: ['10 p.m.', '11 p.m.', 'midnight'], a: '10 p.m.' }] },
    { id: 'l1-say', stage: 'l1', type: 'talk', tag: 'Listening 1 · post-listening', title: '==You== and Natalie', lead: 'Compare your day with Natalie’s day.',
      items: [
        { q: 'Are you a morning person?', model: 'No, I’m not. I wake up at seven, but I don’t get out of bed until 7.20!' },
        { q: 'What do you do before you get out of bed?', model: 'I check my messages and read the news.' },
        { q: 'What do you usually drink in the morning?', model: 'I usually drink milk. Natalie drinks hot chocolate.' },
        { q: 'What do you do in the evening when you are tired?', model: 'I listen to music or watch TV for an hour.' }],
      useful: ['Me too.', 'Natalie…, but I…', 'I usually…'] },

    /* ---------- LISTENING 2: My Hometown ---------- */
    { id: 'l2-w', stage: 'l2', type: 'words', tag: 'Listening 2 · pre-listening', title: 'New words for ==My Hometown==',
      words: [
        ['🏙️', 'hometown', '/ˈhəʊmtaʊn/', 'noun', 'quê nhà, nơi mình lớn lên', 'My **hometown** is a small city.'],
        ['🎬', 'movie theatre', '/ˈmuːvi ˌθɪətə/', 'noun (US)', 'rạp chiếu phim (= cinema)', 'There are three **movie theatres**.'],
        ['🛍️', 'mall', '/mɔːl/', 'noun', 'trung tâm mua sắm', 'There are a lot of **malls**.'],
        ['🍱', 'variety', '/vəˈraɪəti/', 'noun', 'sự đa dạng', 'There’s a big **variety** of restaurants.'],
        ['🏞️', 'lake', '/leɪk/', 'noun', 'hồ', 'We swim in the **lake**.'],
        ['🌲', 'forest', '/ˈfɒrɪst/', 'noun', 'rừng', 'There are lots of **forests**.'],
        ['🍂', 'season', '/ˈsiːzn/', 'noun', 'mùa', 'My hometown has four **seasons**.'],
        ['❄️', 'snow', '/snəʊ/', 'noun', 'tuyết', 'In winter, there is a lot of **snow**.']] },
    { id: 'l2-wp', stage: 'l2', type: 'practice', tag: 'Listening 2 · pre-listening', title: 'Check the ==new words==', cols: true,
      items: [
        { q: 'The town where you grew up is your ___.', a: 'hometown' },
        { q: 'In American English, a cinema is a movie ___.', a: ['theatre', 'theater'] },
        { q: 'A big building with many shops is a ___.', a: 'mall' },
        { q: 'Chinese, Korean, Italian: there’s a big ___ of food.', a: 'variety' },
        { q: 'You can swim or fish in a ___.', a: 'lake' },
        { q: 'A place with many trees is a ___.', a: 'forest' },
        { q: 'Spring, summer, autumn and winter are the four ___.', a: 'seasons' },
        { q: 'In winter it’s very cold and the ground is white with ___.', a: 'snow' }] },
    { id: 'l2-gist', stage: 'l2', type: 'listen', audio: 'town', tag: 'Listening 2 · while listening', title: 'Task 1: ==main idea==', task: 'Listen once. Choose the answers.',
      items: [
        { q: 'Sarah mainly talks about…', o: ['her hometown', 'her job', 'her holiday'], a: 'her hometown' },
        { q: 'What does she think of her hometown?', o: ['It’s a great city.', 'It’s boring.', 'It’s too big.'], a: 'It’s a great city.' }] },
    { id: 'l2-det', stage: 'l2', type: 'listen', audio: 'town', tag: 'Listening 2 · while listening', title: 'Task 2: ==details==', task: 'Listen again. Choose the answers.', cols: true,
      items: [
        { q: 'About how many people live there?', o: ['8,000', '18,000', '80,000'], a: '80,000' },
        { q: 'How many movie theatres are there?', o: ['two', 'three', 'four'], a: 'three' },
        { q: 'What food can you eat there?', o: ['only American food', 'many types of food', 'only Chinese food'], a: 'many types of food' },
        { q: 'Her hometown has ___ seasons.', o: ['two', 'three', 'four'], a: 'four' },
        { q: 'In summer, people can…', o: ['go skiing', 'swim in the lakes', 'go ice skating'], a: 'swim in the lakes' },
        { q: 'In winter, there is a lot of…', o: ['rain', 'snow', 'sun'], a: 'snow' },
        { q: 'What does she say about nightlife?', o: ['There are lots of nightclubs.', 'There aren’t any nightclubs.', 'There is one nightclub.'], a: 'There aren’t any nightclubs.' },
        { q: 'Why is it a good place for a family?', o: ['It’s safe, with good schools.', 'It’s cheap.', 'There are many jobs.'], a: 'It’s safe, with good schools.' }] },
    { id: 'l2-say', stage: 'l2', type: 'talk', tag: 'Listening 2 · post-listening', title: 'Describe ==your hometown==', lead: 'Use Sarah’s order: people → places → food → weather → good points.',
      items: [
        { q: 'Where is your hometown? Is it big or small?', model: 'My hometown is Cần Thơ. It’s a big city in the Mekong Delta.' },
        { q: 'What places are there?', model: 'There are lots of markets, and there’s a famous floating market. It’s very busy in the morning.' },
        { q: 'What’s the weather like?', model: 'It’s hot all year. There are two seasons: the dry season and the rainy season.' },
        { q: 'Is it a good place for families? Why?', model: 'Yes, it is. It’s safe and there are good schools.' }] },

    /* ---------- READING ---------- */
    { id: 'r-w', stage: 'read', type: 'words', tag: 'Reading · pre-reading', title: 'New words for ==the message==',
      words: [
        ['🏘️', 'neighbourhood', '/ˈneɪbəhʊd/', 'noun', 'khu phố', 'My **neighbourhood** is quiet.'],
        ['🙋', 'neighbour', '/ˈneɪbə/', 'noun', 'hàng xóm', 'Linh is my new **neighbour**.'],
        ['🏢', 'building', '/ˈbɪldɪŋ/', 'noun', 'tòa nhà', 'I live in the blue **building**.'],
        ['➡️', 'next to', '/ˈnekst tə/', 'preposition', 'bên cạnh', 'The café is **next to** the bank.'],
        ['🤫', 'quiet', '/ˈkwaɪət/', 'adjective', 'yên tĩnh', 'The park is **quiet** before eight.'],
        ['🚶', 'on foot', '/ɒn ˈfʊt/', 'phrase', 'đi bộ', 'I go to the library **on foot**.'],
        ['🆓', 'free', '/friː/', 'adjective', 'miễn phí', 'The club is **free**.'],
        ['🎓', 'college', '/ˈkɒlɪdʒ/', 'noun', 'trường cao đẳng / đại học', 'My brother studies at **college**.']] },
    { id: 'r-wp', stage: 'read', type: 'practice', tag: 'Reading · pre-reading', title: 'Check the ==new words==', cols: true,
      items: [
        { q: 'The area around your home is your ___.', a: ['neighbourhood', 'neighborhood'] },
        { q: 'A person who lives next door is your ___.', a: ['neighbour', 'neighbor'] },
        { q: 'A block of flats is a big ___.', a: 'building' },
        { q: 'The bank is ___ to the café.', a: 'next' },
        { q: 'There is no noise. It’s very ___.', a: 'quiet' },
        { q: 'I don’t take the bus. I go on ___.', a: 'foot' },
        { q: 'You don’t pay for it. It’s ___.', a: 'free' },
        { q: 'After school, my brother studies at ___.', a: 'college' }] },
    { id: 'r-text', stage: 'read', type: 'read', tag: 'Reading · while reading', title: 'Task 1: ==main idea==', lead: 'Read Linh’s message. Choose the answers.', textTitle: 'Hi Alex, welcome to Green Street!', textIcon: '💌',
      text: [
        'I’m Linh, your new neighbour. I live in the blue building next to the café. I work at a school, and I usually leave home at seven. My brother studies at college. He doesn’t get up early, but he always makes breakfast for us on Sundays.',
        'There is a small park near our building, and there are two cafés on our street. The park is quiet before eight, so I often walk there in the morning. There isn’t a cinema here, but there is a library. It opens at nine. I go there on foot on Saturdays.',
        'It’s easy to get to the library from our building. It’s about one kilometre away. The reading club meets there every Saturday at ten. It’s free, and the people are friendly. Do you like reading? What do you usually do at weekends? See you soon! Linh'],
      items: [
        { q: 'What is the message mainly about?', o: ['Linh’s new job', 'Life on Green Street and an invitation', 'A holiday'], a: 'Life on Green Street and an invitation' },
        { q: 'Which place is NOT on Green Street?', o: ['a library', 'a park', 'a cinema'], a: 'a cinema' },
        { q: 'When does Linh’s brother make breakfast?', o: ['every morning', 'on Sundays', 'on Saturdays'], a: 'on Sundays' }] },
    { id: 'r-det', stage: 'read', type: 'read', textRef: 'r-text', tag: 'Reading · while reading', title: 'Task 2: ==details==', lead: 'Write short answers.',
      items: [
        { q: 'What time does Linh usually leave home?', a: ['at seven', 'seven', '7', 'at 7', 'seven o’clock'], show: 'at seven' },
        { q: 'When is the park quiet?', a: ['before eight', 'before 8', 'before eight o’clock'], show: 'before eight' },
        { q: 'How does Linh go to the library?', a: ['on foot', 'she walks', 'she goes on foot', 'walking'], show: 'on foot' },
        { q: 'How far is the library from their building?', a: ['about one kilometre', 'one kilometre', '1 km', 'about 1 km', 'about one kilometer'], show: 'about one kilometre' },
        { q: 'How much does the reading club cost?', a: ['nothing', 'it’s free', 'free', 'it is free'], show: 'Nothing. It’s free.' }] },

    /* ---------- SPEAKING ---------- */
    { id: 'sp-w', stage: 'speak', type: 'words', tag: 'Speaking · pre-speaking', title: 'Phrases for ==meeting a neighbour==',
      words: [
        ['👋', 'Nice to meet you.', '', 'greeting', 'Rất vui được gặp bạn.', '– Nice to meet you, too.'],
        ['🏠', 'Do you live near here?', '', 'question', 'Bạn sống gần đây à?', '– Yes, in the blue building.'],
        ['💼', 'What do you do?', '', 'question', 'Bạn làm nghề gì?', '– I’m a nurse.'],
        ['🗺️', 'Is there a … near here?', '', 'question', 'Gần đây có … không?', '– Yes, there is.'],
        ['🚶', 'It’s about … minutes on foot.', '', 'answer', 'Đi bộ khoảng … phút.', 'It’s about five minutes on foot.'],
        ['☕', 'Would you like to…?', '', 'invitation', 'Bạn có muốn… không?', 'Would you like to have coffee?'],
        ['🕙', 'What time is good for you?', '', 'question', 'Mấy giờ thì tiện cho bạn?', '– Ten o’clock is fine.'],
        ['👍', 'See you then!', '', 'goodbye', 'Hẹn gặp lại nhé!', 'Great. See you then!']] },
    { id: 'sp-wp', stage: 'speak', type: 'practice', tag: 'Speaking · pre-speaking', title: 'Match the ==responses==', cols: true,
      matchOptions: ['I’d love to!', 'Nice to meet you, too.', 'No, it’s about five minutes on foot.', 'Ten o’clock is fine.', 'Yes, there is. It’s next to the bank.', 'Yes, I live in the blue building.', 'Bye! See you on Saturday.', 'I’m a nurse. I work at the hospital.'],
      items: [
        { t: 'match', q: 'Nice to meet you.', a: 'Nice to meet you, too.' },
        { t: 'match', q: 'Do you live near here?', a: 'Yes, I live in the blue building.' },
        { t: 'match', q: 'What do you do?', a: 'I’m a nurse. I work at the hospital.' },
        { t: 'match', q: 'Is there a supermarket near here?', a: 'Yes, there is. It’s next to the bank.' },
        { t: 'match', q: 'Is it far?', a: 'No, it’s about five minutes on foot.' },
        { t: 'match', q: 'Would you like to have coffee on Saturday?', a: 'I’d love to!' },
        { t: 'match', q: 'What time is good for you?', a: 'Ten o’clock is fine.' },
        { t: 'match', q: 'See you then!', a: 'Bye! See you on Saturday.' }] },
    { id: 'sp-gap', stage: 'speak', type: 'gap', tag: 'Speaking · information gap', title: 'Two streets, ==two lives==', lead: 'Read only your card. Ask questions to find the missing information.',
      roles: [
        { name: 'Student A', who: 'You live on Green Street', icon: '🅰️', info: ['There’s a big park. It opens at 6 a.m.', 'There are two cafés. They open at 7 a.m.', 'There isn’t a cinema.', 'The library is about 1 km away.', 'You go jogging in the park every morning.'], ask: ['Is there a supermarket near B’s home? How far is it?', 'Are there any cafés?', 'Is there a cinema? When is it cheap?', 'What does B usually do on Mondays?'] },
        { name: 'Student B', who: 'You live on Lotus Street', icon: '🅱️', info: ['There’s a supermarket. It’s 500 metres away.', 'There aren’t any cafés, but there’s a tea shop.', 'There’s a cinema. It’s cheap on Mondays.', 'There isn’t a park.', 'You usually go to the cinema on Mondays.'], ask: ['Is there a park near A’s home? What time does it open?', 'Are there any cafés? When do they open?', 'Is there a library? How far is it?', 'What does A do every morning?'] }],
      useful: ['Is there a … near your home?', 'Are there any…?', 'How far is it?', 'What time does it open?'],
      model: ['**A:** Is there a supermarket near your home?', '**B:** Yes, there is. It’s about 500 metres away. Is there a park near you?', '**A:** Yes, there’s a big park. It opens at 6 a.m. I go jogging there every morning.', '**B:** There isn’t a park on my street, but there’s a cinema. It’s cheap on Mondays, so I usually go then.'] },
    { id: 'sp-task', stage: 'speak', type: 'speak', tag: 'Speaking · role play', title: 'Meet your ==new neighbour==', icon: '🤝',
      task: 'Student A has just moved into Student B’s building. Introduce yourselves, ask about routines and local places, then **agree on a place and a time to meet** this weekend.',
      steps: ['Greet and introduce yourself.', 'Ask two questions about your partner’s routine.', 'Ask about places near the building.', 'Invite your partner and agree on a place and time.', 'Say goodbye.'],
      useful: ['Hi, I’m… I live at number…', 'What do you usually do at weekends?', 'Is there a … near here?', 'It’s about … minutes on foot.', 'Would you like to…?', 'See you then!'],
      timer: 180, record: true, rubric: true,
      model: ['**A:** Hi! I’m Nam. I live at number 12. I’m new here.', '**B:** Nice to meet you, Nam. I’m Thu. Welcome!', '**A:** Thanks. Is there a café near here?', '**B:** Yes, there are two. The Green Café is next to the bank. It’s about five minutes on foot.', '**A:** What do you usually do at weekends?', '**B:** I often go to the library on Saturday morning. It’s quiet and it’s free.', '**A:** I love reading too! Would you like to go together?', '**B:** Sure. Let’s meet outside the building at nine. See you then!'] },

    /* ---------- WRITING ---------- */
    { id: 'w-model', stage: 'write', type: 'read', tag: 'Writing · pre-writing', title: 'Look at ==a model message==', lead: 'Read Mai’s message. Answer the questions.', textTitle: 'Hi Sam,', textIcon: '✉️', numbered: false,
      text: ['Welcome to our neighbourhood! I’m Mai. I live near the park and I work at a small shop. I usually get up at six and walk to work. I don’t work on Sundays.', 'There is a library on our street, and there are two cafés near it. The library opens at nine. It’s quiet, and it’s easy to walk there. I often read there at weekends.', 'Do you like books? Let’s meet at the library at ten on Sunday. See you soon!', 'Mai'],
      items: [
        { q: 'Which sentence describes Mai’s routine?', o: ['I usually get up at six and walk to work.', 'There is a library on our street.', 'See you soon!'], a: 'I usually get up at six and walk to work.' },
        { q: 'Which places on her street does Mai describe?', o: ['a library and two cafés', 'a park and a cinema', 'a supermarket and a bank'], a: 'a library and two cafés' },
        { q: 'Which question does Mai ask?', o: ['Do you like books?', 'Where do you live?', 'What do you do?'], a: 'Do you like books?' },
        { q: 'What does Mai suggest?', o: ['meeting at the library on Sunday', 'going to a café on Saturday', 'walking in the park'], a: 'meeting at the library on Sunday' }] },
    { id: 'w-task', stage: 'write', type: 'write', tag: 'Writing · task', title: 'Write ==a welcome message==',
      task: 'A new neighbour has moved into your street. Write a message of **80–100 words** to welcome them.',
      plan: ['Greet and introduce yourself.', 'Describe your routine (present simple + one adverb).', 'Describe two or three places (there is / there are, it / they, it’s).', 'Ask a question and suggest a meeting.', 'Say goodbye.'],
      model: ['Hi Sam,', 'Welcome to our neighbourhood! I’m Mai. I live near the park and I work at a small shop. I usually get up at six and walk to work. I don’t work on Sundays.', 'There is a library on our street, and there are two cafés near it. The library opens at nine. It’s quiet, and it’s easy to walk there. I often read there at weekends.', 'Do you like books? Let’s meet at the library at ten on Sunday. See you soon!', 'Mai'],
      checklist: ['I use the present simple correctly (he/she/it + -s).', 'I use a frequency adverb in the right place.', 'I use there is / there are and then it / they.', 'I use it’s for weather, time, distance or a situation.', 'I ask a question and suggest a time and place.', 'My message has 80–100 words.'],
      min: 80, max: 100, draft: true },

    /* ---------- REVIEW ---------- */
    { id: 'u-check', stage: 'review', type: 'practice', tag: 'Review', title: 'Unit 1 ==check==', cols: true,
      items: [
        { q: 'My brother ___ at a hospital.', o: ['work', 'works', 'working'], a: 'works' },
        { q: 'We ___ coffee in the evening.', o: ['doesn’t drink', 'don’t drink', 'not drink'], a: 'don’t drink' },
        { q: '___ your sister have breakfast at home?', o: ['Is', 'Do', 'Does'], a: 'Does' },
        { q: 'She ___ late for class.', o: ['is never', 'never is', 'never be'], a: 'is never' },
        { q: 'I play football ___ Saturdays.', o: ['in', 'at', 'on'], a: 'on' },
        { q: '___ a bus stop near my home.', o: ['There is', 'There are', 'It is'], a: 'There is' },
        { q: '___ any shops on your street?', o: ['Is there', 'Are there', 'There are'], a: 'Are there' },
        { q: 'There’s a new café. ___ very cosy.', o: ['There’s', 'It’s', 'They’re'], a: 'It’s' },
        { q: '___ about two kilometres to the station.', o: ['It’s', 'There’s', 'There are'], a: 'It’s' },
        { q: 'Students eat lunch in the school…', o: ['canteen', 'lake', 'mall'], a: 'canteen' }] },
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Review', title: 'What can you ==do now==?',
      cando: ['I can use the present simple, there is / there are and it’s.', 'I can talk about my routine and say how often I do things.', 'I can understand the main idea and details of two real conversations.', 'I can read a message and find information.', 'I can meet a new neighbour and agree on a plan.', 'I can write a short welcome message.'] }
  ]
};
