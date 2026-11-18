/* Unit 8 · Imperative, infinitive, -ing form
   Book: Destination A2, Unit 8, pages 33–35.
   Order: grammar theory (pages 33) → book exercises A–F, quoted exactly (pages 34–35) →
   skills, each with its own pre-stage for new words → review. One card = one slide. */
window.A2_UNITS[8] = {
  n: 8, type: 'Grammar', title: 'Trying something new',
  focus: 'Imperative · infinitive · -ing form',
  book: 'Destination A2 · Unit 8 · pages 33–35',
  goals: ['Give orders, requests and advice with the imperative.', 'Choose the to-infinitive or the -ing form after common verbs.', 'Use see / hear / watch + object + bare infinitive or -ing.', 'Understand real instructions and explain a task clearly.'],
  audio: {
    dinner: { title: 'Can you help me cook dinner?', speakers: 'A man and a woman', level: 'A2', length: '0:46', provider: 'ELLLO Sound Grammar A2-17 · Conversation 1', src: 'https://elllo.org/Audio/SoundGrammar/A2-Audio4x/A2-17-1-Imperatives-Dinner.mp3', page: 'https://elllo.org/book/A2/A2-17-Imperatives.html' },
    tips: { title: 'Any tips?', speakers: 'A man and a woman', level: 'A2', length: '0:48', provider: 'ELLLO Sound Grammar A2-17 · Conversation 4', src: 'https://elllo.org/Audio/SoundGrammar/A2-Audio4x/A2-17-4-Imperatives.mp3', page: 'https://elllo.org/book/A2/A2-17-Imperatives.html' },
    free: { type: 'soundcloud', track: '507739239', title: 'What do you like doing?', speakers: 'Meg and Todd', level: 'A2', provider: 'ELLLO Views #1504', page: 'https://elllo.org/english/1501/1504-MegTodd-FreeTime-Gerunds.htm' }
  },
  stages: [
    { id: 'start', skill: 'start', icon: '🆕', name: 'Welcome', caption: 'What would you like to try?' },
    { id: 'grammar', skill: 'grammar', icon: '🧩', name: 'Grammar', caption: 'Imperative, infinitive and -ing form: all the rules first, then the book exercises A–F.' },
    { id: 'l1', skill: 'listening', icon: '🥗', name: 'Listening 1: Cook dinner', caption: 'Pre-listening words → complete the notes → speaking.' },
    { id: 'l2', skill: 'listening', icon: '🥦', name: 'Listening 2: Any tips?', caption: 'Pre-listening words → do or don’t? → speaking.' },
    { id: 'l3', skill: 'listening', icon: '🧹', name: 'Listening 3: Likes and dislikes', caption: 'Pre-listening words → who? → speaking.' },
    { id: 'read', skill: 'reading', icon: '🧗', name: 'Reading: New challenges', caption: 'Two texts, from easier to harder. Pre-reading words, then read for details.' },
    { id: 'speak', skill: 'speaking', icon: '🗣️', name: 'Speaking: Teach me!', caption: 'Instruction phrases → teach-and-check information gap → explain a skill.' },
    { id: 'write', skill: 'writing', icon: '✍️', name: 'Writing: A how-to guide', caption: 'Model text → plan, write and check.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Review', caption: 'Unit check, can-do list and homework.' }
  ],
  cards: [
    /* ---------- WELCOME ---------- */
    { id: 'cover', stage: 'start', type: 'cover', title: 'Trying something ==new==' },
    { id: 'warm', stage: 'start', type: 'talk', tag: 'Warm-up · speaking', title: 'Something ==new==', lead: 'Ask and answer with a partner.',
      items: [
        { q: 'What do you enjoy doing at the weekend?', frame: 'I enjoy ___ing.', model: 'I enjoy playing badminton with my dad.' },
        { q: 'What new activity do you want to try?', frame: 'I want to try ___ / I’d like to learn to ___.', model: 'I want to try rock climbing.' },
        { q: 'What do you hate doing at home?', frame: 'I hate ___ing because ___.', model: 'I hate washing the dishes because it takes forever.' },
        { q: 'Give your partner one piece of advice for a test.', frame: '___! / Don’t ___!', model: 'Sleep well the night before! Don’t study until midnight!' }] },

    /* ---------- GRAMMAR: theory (book p. 33) ---------- */
    { id: 'g1', stage: 'grammar', type: 'grammar', tag: 'Grammar 1 · imperative', title: 'The ==imperative==',
      blocks: [
        { formulas: [
          ['✅ Affirmative', '**V** (bare infinitive) …!', '**Hit** the ball to me!'],
          ['❌ Negative', '**Don’t** + **V** …!', '**Don’t hit** the ball to me – hit it to Ivana!']] },
        { uses: [['an order', '**Sit** down! · **Don’t touch** that!', 'mệnh lệnh'], ['a request', 'Please **close** the window.', 'lời đề nghị, yêu cầu'], ['advice', '**Drink** lots of water. **Don’t stay** up late.', 'lời khuyên']] },
        { vi: 'Câu mệnh lệnh: dùng **động từ nguyên mẫu** ở đầu câu, không có chủ ngữ. Phủ định: **Don’t + V**. Thêm **please** để lịch sự hơn.' }] },
    { id: 'g2', stage: 'grammar', type: 'grammar', tag: 'Grammar 2 · verb patterns', title: 'to-infinitive or ==-ing form==?',
      blocks: [
        { formulas: [
          ['+ to-infinitive', 'agree · ask · choose · decide · forget · hope · offer · plan · promise · refuse · seem · want **+ to + V**', 'He decided **to do** judo.', 'Các động từ này đi với **to + V**.'],
          ['+ -ing form', 'enjoy · finish · hate · like · love · miss · remember · stop · suggest **+ V-ing**', 'I like **playing** football.', 'Các động từ này đi với **V-ing**.'],
          ['+ either', 'begin · continue · start **+ to V / V-ing**', 'It began **to rain**. = It began **raining**.']] },
        { watch: { text: 'In continuous tenses, begin, continue and start are followed by the infinitive with to.', ex: ['✅ It’s starting **to rain**.', '❌ It’s starting ~~raining~~.'] } }] },
    { id: 'g3', stage: 'grammar', type: 'grammar', tag: 'Grammar 3 · verbs of perception', title: 'see / hear + object + ==V or V-ing==',
      blocks: [
        { formulas: [
          ['Completed action', '**hear · listen to · notice · see · watch** + object + **V**', 'I saw the man **fall off** his horse. (the whole action, from start to finish)', 'Thấy toàn bộ hành động, từ đầu đến cuối.'],
          ['Unfinished action', '**hear · listen to · notice · see · watch** + object + **V-ing**', 'In this photo, you can see the man **falling off** his horse. (the action in progress)', 'Thấy hành động đang diễn ra.']] },
        { watch: { text: 'Compare:', ex: ['We saw her **walk** down the street. (We saw her complete the walk.)', '✅ We saw her **walking** down the street. (We saw her while she was walking.)'] } }] },

    /* ---------- GRAMMAR: book exercises A–F (pp. 34–35), quoted exactly ---------- */
    { id: 'exA', stage: 'grammar', type: 'practice', book: 'A', page: 34, tag: 'Grammar practice', title: 'Exercise ==A==', lead: 'Fill in the blanks with the words given in the box.', cols: true,
      bank: ['be', 'catch', 'don’t do', 'don’t forget', 'play', 'run', 'throw', 'try'],
      items: [
        { q: '___ faster! You can win the race if you try!', a: 'Run' },
        { q: '___ the ball as hard as you can!', a: 'Throw' },
        { q: '___ as well as you can and we have a good chance.', a: 'Play' },
        { q: '___ that – it’s against the rules!', a: ['Don’t do', 'Do not do'], show: 'Don’t do' },
        { q: '___ to bring your running shoes tomorrow.', a: ['Don’t forget', 'Do not forget'], show: 'Don’t forget' },
        { q: '___ careful! You might fall off your bicycle!', a: 'Be' },
        { q: 'Always ___ your best when you enter a race.', a: 'try' },
        { q: '___ the ball by holding your hands.', a: 'Catch' }] },
    { id: 'exB', stage: 'grammar', type: 'cloze', book: 'B', page: 34, tag: 'Grammar practice', title: 'Exercise ==B==', lead: 'Open brackets using verbs in the form of an infinitive or the -ing form of the verbs.',
      text: 'The two schools planned [1] the match on a Saturday night. But some girls were unhappy about the time for different reasons. One player wanted [2] out with her friends, one player had promised [3] a meal with her aunt, and another said she hated [4] in the dark.\n\nOne coach suggested [5] the game on the Friday, but the other coach refused [6] it because she had another game to go to. One player, who didn’t like [7] , said they should stop [8] . She said they should decide [9] the game, but nobody seemed [10] happy about that.\n\nFinally, the two teams agreed [11] on the Saturday because they all loved [12] basketball.',
      items: [
        { a: 'to play', hint: 'play' }, { a: 'to go', hint: 'go' }, { a: 'to have', hint: 'have' }, { a: ['playing', 'to play'], show: 'playing', hint: 'play' },
        { a: 'arranging', hint: 'arrange' }, { a: 'to do', hint: 'do' }, { a: 'arguing', hint: 'argue' }, { a: 'disagreeing', hint: 'disagree' },
        { a: 'to cancel', hint: 'cancel' }, { a: 'to be', hint: 'be' }, { a: 'to meet', hint: 'meet' }, { a: ['playing', 'to play'], show: 'playing', hint: 'play' }] },
    { id: 'exC', stage: 'grammar', type: 'practice', book: 'C', page: 34, tag: 'Grammar practice', title: 'Exercise ==C==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: '‘The rules are very simple, you all know that. But Chris, please don’t {pick|to pick} up the ball – only the goalkeeper does that.', a: 'pick' },
        { q: 'So remember {kick|to kick} the ball!', a: 'to kick' },
        { q: 'I know everyone likes {score|scoring} goals, but sometimes it’s better to pass the ball to someone else.', a: 'scoring' },
        { q: 'So, {looking|look} for your team-mates!', a: 'look' },
        { q: 'Everyone wants {being|to be} a winner, and', a: 'to be' },
        { q: 'nobody enjoys {losing|to lose}, so', a: 'losing' },
        { q: 'please {be taking|take} my advice.', a: 'take' },
        { q: '{Doing|Do} your best and you might win.', a: 'Do' },
        { q: 'I’m asking you {to get|getting} out there and', a: 'to get' },
        { q: '{winning|win}!’', a: 'win' }] },
    { id: 'exD', stage: 'grammar', type: 'practice', book: 'D', page: 35, tag: 'Grammar practice', title: 'Exercise ==D==', lead: 'Choose the correct answer.', cols: true, abc: true,
      items: [
        { q: 'What sport do you enjoy ___ the most?', o: ['watch', 'to watch', 'watching'], a: 'watching' },
        { q: 'He was listening to the teacher ___ , but he didn’t understand anything.', o: ['talking', 'to talk', 'to talking'], a: 'talking' },
        { q: 'I saw the car ___ and jumped out of the way at the last minute.', o: ['to come', 'coming', 'come'], a: 'coming' },
        { q: 'When did you begin ___ the piano?', o: ['to play', 'to playing', 'play'], a: 'to play' },
        { q: 'The noise from my neighbour’s party is starting ___ me.', o: ['annoying', 'annoy', 'to annoy'], a: 'to annoy' },
        { q: 'When you get to the theatre, just ___ for me outside.', o: ['be wait', 'waiting', 'wait'], a: 'wait' },
        { q: 'Oh, I forgot ___ you – I won the chess match on Friday.', o: ['tell', 'telling', 'to tell'], a: 'to tell' },
        { q: 'I can hear my brother ___ his drums upstairs! I’m trying to watch a film!', o: ['to play', 'playing', 'play'], a: 'playing' }] },
    { id: 'exE', stage: 'grammar', type: 'practice', book: 'E', page: 35, tag: 'Grammar practice', title: 'Exercise ==E==', lead: 'Fill in the gaps with the form of a verb with the ending of -ing or infinitive.', cols: true,
      bank: ['eat', 'find', 'go', 'rain', 'say', 'see'],
      items: [
        { q: 'When it started ___ , the tennis players went indoors.', a: ['to rain', 'raining'], show: 'to rain (or: raining)' },
        { q: 'Did you notice the man trying ___ his golf ball in the long grass?', a: 'to find' },
        { q: 'I remember ___ to the cinema to see that film last year.', a: 'going' },
        { q: 'I hope ___ you when you get back from your trip.', a: 'to see' },
        { q: 'Don’t ___ that! The coach is listening.', a: 'say' },
        { q: 'After we have finished ___ lunch, let’s go.', a: 'eating' }] },
    { id: 'exF', stage: 'grammar', type: 'practice', book: 'F', page: 35, tag: 'Grammar practice', title: 'Exercise ==F==', lead: 'Each sentence has an error. Underline it and write the correct form.', cols: true,
      items: [
        { t: 'error', q: 'I heard my dad to shout and I ran downstairs to see what was happening.', a: ['shout', 'shouting', 'heard my dad shout', 'heard my dad shouting', 'I heard my dad shout and I ran downstairs to see what was happening.', 'I heard my dad shouting and I ran downstairs to see what was happening.'], show: 'I heard my dad **shout** (or **shouting**)…' },
        { t: 'error', q: 'In the summer, I miss to go to skiing lessons.', a: ['going', 'miss going', 'In the summer, I miss going to skiing lessons.'], show: 'I miss **going** to skiing lessons.' },
        { t: 'error', q: 'The team manager offered give our class free tickets for the match.', a: ['to give', 'offered to give', 'The team manager offered to give our class free tickets for the match.'], show: 'offered **to give**' },
        { t: 'error', q: 'The coach asked the players play harder.', a: ['to play', 'asked the players to play', 'The coach asked the players to play harder.'], show: 'asked the players **to play** harder' },
        { t: 'error', q: 'The World Cup continues being a popular sporting event.', a: ['to be', 'continues to be', 'The World Cup continues to be a popular sporting event.'], show: 'continues **to be**' },
        { t: 'error', q: 'I watched the whole race, so I saw the swimmer wins his medal.', a: ['win', 'saw the swimmer win', 'I watched the whole race, so I saw the swimmer win his medal.'], show: 'I saw the swimmer **win** his medal.' }] },

    /* ---------- LISTENING 1: complete the notes ---------- */
    { id: 'l1-w', stage: 'l1', type: 'words', tag: 'Listening 1 · pre-listening', title: 'New words for ==Cook dinner==',
      words: [
        ['🥗', 'fruit salad', '/fruːt ˈsæləd/', 'noun', 'món salad trái cây', 'Please make a **fruit salad**.'],
        ['🥝', 'kiwi', '/ˈkiːwiː/', 'noun', 'quả kiwi', 'Bananas, strawberries and **kiwis**.'],
        ['🔪', 'cut up', '/kʌt ʌp/', 'phrasal verb', 'cắt nhỏ', '**Cut** them **up** and put them in a bowl.'],
        ['🥣', 'bowl', '/bəʊl/', 'noun', 'cái tô, bát lớn', 'Put the fruit in a **bowl**.'],
        ['🥛', 'yogurt', '/ˈjɒɡət/', 'noun', 'sữa chua', 'Add **yogurt** on top.'],
        ['🍽️', 'set the table', '/set ðə ˈteɪbl/', 'phrase', 'dọn bàn (bày bát đũa)', 'Please **set the table** for five.'],
        ['📱', 'text (someone)', '/tekst/', 'verb', 'nhắn tin cho ai', '**Text** the kids.']] },
    { id: 'l1-det', stage: 'l1', type: 'listen', audio: 'dinner', tag: 'Listening 1 · while listening', title: 'Complete the ==to-do list==', task: 'Listen twice. Write **one word** in each gap.', cols: true,
      items: [
        { q: 'Make a fruit ___ .', a: 'salad' },
        { q: 'Use bananas, strawberries and ___ .', a: ['kiwis', 'kiwi'] },
        { q: 'Cut them up and put them in a ___ .', a: 'bowl' },
        { q: 'Wash them and add ___ on top.', a: ['yogurt', 'yoghurt'] },
        { q: 'Set the table for ___ people.', a: ['five', '5'] },
        { q: 'Text the ___ .', a: 'kids' },
        { q: 'Tell them to be home by ___ .', a: ['six', '6'] }] },
    { id: 'l1-say', stage: 'l1', type: 'talk', tag: 'Listening 1 · post-listening', title: 'Help ==at home==', lead: 'Give instructions with the imperative.',
      items: [
        { q: 'Tell your partner how to make your favourite drink.', frame: 'First, ___. Then ___. Don’t ___.', model: 'First, cut a lemon. Then add sugar and ice. Don’t add too much water.' },
        { q: 'Ask your partner to help you get ready for a party.', frame: 'Please ___ and ___.', model: 'Please set the table and text our friends.' },
        { q: 'What do your parents often tell you to do?', frame: 'They often say: “___!”', model: 'They often say: “Tidy your room!”' },
        { q: 'What do they tell you not to do?', frame: 'They say: “Don’t ___!”', model: 'They say: “Don’t play games after ten!”' }] },

    /* ---------- LISTENING 2: do or don't ---------- */
    { id: 'l2-w', stage: 'l2', type: 'words', tag: 'Listening 2 · pre-listening', title: 'New words for ==Any tips?==',
      words: [
        ['😴', 'sleepy', '/ˈsliːpi/', 'adjective', 'buồn ngủ', 'I feel **sleepy** and tired.'],
        ['🔋', 'low energy', '/ləʊ ˈenədʒi/', 'phrase', 'thiếu năng lượng, uể oải', 'I have **low energy**.'],
        ['💡', 'tip', '/tɪp/', 'noun', 'mẹo, lời khuyên', 'Do you have any **tips**?'],
        ['🍞', 'carbs', '/kɑːbz/', 'noun', 'tinh bột (cơm, bánh mì, mì)', 'Don’t eat **carbs** like bread and rice.'],
        ['🍗', 'fast food', '/fɑːst fuːd/', 'noun', 'đồ ăn nhanh', 'Don’t eat **fast food**.'],
        ['🥤', 'beverage', '/ˈbevərɪdʒ/', 'noun', 'đồ uống', '**Beverages** with sugar are bad for you.'],
        ['🏃', 'exercise', '/ˈeksəsaɪz/', 'verb', 'tập thể dục', '**Exercise** every day.']] },
    { id: 'l2-det', stage: 'l2', type: 'listen', audio: 'tips', tag: 'Listening 2 · while listening', title: 'Do it or ==don’t do it==?', task: 'Listen twice. What does the woman say?', cols: true,
      items: [
        { q: 'eat lots of vegetables', o: ['Do it.', 'Don’t do it.'], a: 'Do it.' },
        { q: 'eat bread, rice and pasta', o: ['Do it.', 'Don’t do it.'], a: 'Don’t do it.' },
        { q: 'eat fried chicken', o: ['Do it.', 'Don’t do it.'], a: 'Don’t do it.' },
        { q: 'drink tea or water', o: ['Do it.', 'Don’t do it.'], a: 'Do it.' },
        { q: 'drink beverages with sugar', o: ['Do it.', 'Don’t do it.'], a: 'Don’t do it.' },
        { q: 'exercise every day', o: ['Do it.', 'Don’t do it.'], a: 'Do it.' },
        { q: 'exercise too much', o: ['Do it.', 'Don’t do it.'], a: 'Don’t do it.' },
        { q: 'sleep 8 hours a day', o: ['Do it.', 'Don’t do it.'], a: 'Do it.' }] },
    { id: 'l2-say', stage: 'l2', type: 'talk', tag: 'Listening 2 · post-listening', title: 'Give ==advice==', lead: 'Your partner has a problem. Give two tips: one **Do**, one **Don’t**.',
      items: [
        { q: 'I can’t sleep at night.', frame: '___ before bed. Don’t ___.', model: 'Read a book before bed. Don’t use your phone.' },
        { q: 'I always forget my homework.', frame: '___. Don’t ___.', model: 'Write it in a notebook. Don’t leave it until the morning.' },
        { q: 'I want to get fit.', frame: 'Try ___ing. Don’t ___.', model: 'Try cycling to school. Don’t take the bus.' },
        { q: 'I’m nervous about my English test.', frame: '___. Don’t ___.', model: 'Practise with a friend. Don’t stay up late.' }] },

    /* ---------- LISTENING 3: who? ---------- */
    { id: 'l3-w', stage: 'l3', type: 'words', tag: 'Listening 3 · pre-listening', title: 'New words for ==Likes and dislikes==',
      words: [
        ['🧁', 'baking', '/ˈbeɪkɪŋ/', 'noun', 'làm bánh (nướng)', 'I love **baking** cakes.'],
        ['😌', 'relaxing', '/rɪˈlæksɪŋ/', 'adjective', 'thư giãn', 'Cleaning is **relaxing** for me.'],
        ['🎧', 'audio book', '/ˈɔːdiəʊ bʊk/', 'noun', 'sách nói', 'I listen to **audio books**.'],
        ['🔀', 'multitasking', '/ˌmʌltiˈtɑːskɪŋ/', 'noun', 'làm nhiều việc cùng lúc', 'I love **multitasking**.'],
        ['🛶', 'kayaking', '/ˈkaɪækɪŋ/', 'noun', 'chèo thuyền kayak', 'Meg loves **kayaking**.'],
        ['😳', 'embarrassing', '/ɪmˈbærəsɪŋ/', 'adjective', 'ngại ngùng, xấu hổ', 'Dancing is **embarrassing** for me.'],
        ['🙂', 'don’t mind …-ing', '/dəʊnt maɪnd/', 'phrase', 'không ngại làm gì', 'I **don’t mind typing**.'],
        ['👕', 'do laundry', '/duː ˈlɔːndri/', 'phrase', 'giặt quần áo', 'I don’t like **doing laundry**.']] },
    { id: 'l3-det', stage: 'l3', type: 'listen', audio: 'free', tag: 'Listening 3 · while listening', title: 'Meg, Todd or ==both==?', task: 'Listen. Choose **Meg**, **Todd** or **both**.', cols: true,
      items: [
        { q: 'Who loves cooking and baking?', o: ['Meg', 'Todd', 'both'], a: 'Meg' },
        { q: 'Who hates cooking?', o: ['Meg', 'Todd', 'both'], a: 'Todd' },
        { q: 'Who thinks cleaning is relaxing?', o: ['Meg', 'Todd', 'both'], a: 'Todd' },
        { q: 'Who listens to audio books while jogging?', o: ['Meg', 'Todd', 'both'], a: 'Todd' },
        { q: 'Who loves hiking?', o: ['Meg', 'Todd', 'both'], a: 'both' },
        { q: 'Who loves kayaking?', o: ['Meg', 'Todd', 'both'], a: 'Meg' },
        { q: 'Who isn’t good at dancing?', o: ['Meg', 'Todd', 'both'], a: 'both' },
        { q: 'Who hates writing with a pen or a pencil?', o: ['Meg', 'Todd', 'both'], a: 'Todd' }] },
    { id: 'l3-say', stage: 'l3', type: 'talk', tag: 'Listening 3 · post-listening', title: 'What do ==you== like doing?', lead: 'Use **love / like / enjoy / don’t mind / hate + -ing**.',
      items: [
        { q: 'What do you love doing in your free time?', frame: 'I love ___ing because ___.', model: 'I love drawing because it’s relaxing.' },
        { q: 'What housework don’t you mind doing?', frame: 'I don’t mind ___ing.', model: 'I don’t mind washing the dishes.' },
        { q: 'What do you hate doing?', frame: 'I hate ___ing. It’s (so) ___.', model: 'I hate singing in front of people. It’s so embarrassing.' },
        { q: 'What do you want to try next year?', frame: 'I want to try ___ / I’d like to learn to ___.', model: 'I’d like to learn to swim.' }] },

    /* ---------- READING: two texts, easier → harder ---------- */
    { id: 'r-w1', stage: 'read', type: 'words', tag: 'Reading 1 · pre-reading', title: 'New words for ==Text 1==',
      words: [
        ['🧗', 'climbing wall', '/ˈklaɪmɪŋ wɔːl/', 'noun', 'tường leo núi', 'Our school has a **climbing wall**.'],
        ['🦺', 'harness', '/ˈhɑːnɪs/', 'noun', 'dây đai an toàn', 'Always wear a **harness**.'],
        ['⛑️', 'helmet', '/ˈhelmɪt/', 'noun', 'mũ bảo hiểm', 'Put on a **helmet**.'],
        ['🙋', 'instructor', '/ɪnˈstrʌktə/', 'noun', 'người hướng dẫn', 'Wait for the **instructor**.'],
        ['🍬', 'chewing gum', '/ˈtʃuːɪŋ ɡʌm/', 'noun', 'kẹo cao su', 'No **chewing gum** on the wall.'],
        ['💍', 'jewellery', '/ˈdʒuːəlri/', 'noun', 'trang sức', 'Take off your **jewellery**.']] },
    { id: 'r-t1', stage: 'read', type: 'read', tag: 'Reading 1 · while reading', title: 'Text 1: ==can you…?==', lead: 'Read the rules. Choose **Yes** or **No**.', textTitle: 'Climbing Wall · Rules for students', textIcon: '🧗', numbered: false,
      text: [
        '**1** Book your session at the sports office. Sessions are for students aged 11 and over.',
        '**2** Wear sports clothes and trainers. Don’t climb in jeans or sandals.',
        '**3** Take off your watch and jewellery and leave your bag in the locker.',
        '**4** Always wear a harness and a helmet. The instructor will check them before you start.',
        '**5** Don’t start climbing until the instructor says “Go”. Listen carefully and follow every instruction.',
        '**6** Don’t eat, drink or chew gum on the wall. Water bottles are fine on the benches.',
        '**7** Enjoy yourself, and remember to help the next climber!'],
      items: [
        { q: 'Can a ten-year-old student book a session?', o: ['Yes', 'No'], a: 'No', fixed: true, ev: 'Sessions are for students aged 11 and over.' },
        { q: 'Can you climb in jeans?', o: ['Yes', 'No'], a: 'No', fixed: true, ev: 'Don’t climb in jeans or sandals.' },
        { q: 'Can you keep your watch on?', o: ['Yes', 'No'], a: 'No', fixed: true, ev: 'Take off your watch and jewellery' },
        { q: 'Does someone check your harness and helmet?', o: ['Yes', 'No'], a: 'Yes', fixed: true, ev: 'The instructor will check them before you start.' },
        { q: 'Can you start climbing when you are ready?', o: ['Yes', 'No'], a: 'No', fixed: true, ev: 'Don’t start climbing until the instructor says “Go”.' },
        { q: 'Can you chew gum on the wall?', o: ['Yes', 'No'], a: 'No', fixed: true, ev: 'Don’t eat, drink or chew gum on the wall.' },
        { q: 'Can you put your water bottle on a bench?', o: ['Yes', 'No'], a: 'Yes', fixed: true, ev: 'Water bottles are fine on the benches.' }] },
    { id: 'r-w2', stage: 'read', type: 'words', tag: 'Reading 2 · pre-reading', title: 'New words for ==Text 2==',
      words: [
        ['🎯', 'challenge', '/ˈtʃælɪndʒ/', 'noun', 'thử thách', 'I gave myself a **challenge**.'],
        ['😨', 'be afraid of', '/bi əˈfreɪd əv/', 'phrase', 'sợ', 'I **was afraid of** deep water.'],
        ['🏊', 'lifeguard', '/ˈlaɪfɡɑːd/', 'noun', 'nhân viên cứu hộ', 'The **lifeguard** helped me.'],
        ['🫁', 'breathe', '/briːð/', 'verb', 'thở', 'Learn to **breathe** slowly.'],
        ['🤏', 'give up', '/ɡɪv ʌp/', 'phrasal verb', 'bỏ cuộc', 'I wanted to **give up**.'],
        ['📈', 'progress', '/ˈprəʊɡres/', 'noun', 'sự tiến bộ', 'I made slow **progress**.'],
        ['🏅', 'proud', '/praʊd/', 'adjective', 'tự hào', 'I felt so **proud**.'],
        ['🌊', 'length', '/leŋθ/', 'noun', 'một chiều dài bể bơi', 'I swam ten **lengths**.']] },
    { id: 'r-t2', stage: 'read', type: 'read', tag: 'Reading 2 · while reading', title: 'Text 2: ==multiple choice==', lead: 'Read the blog post. Choose the correct answer.', textTitle: 'My 30-day challenge: learning to swim at 14', textIcon: '🏊',
      text: [
        'Last summer my cousins invited me to go to the beach with them. I refused to go, and I told them I was busy. The truth was simple: I couldn’t swim, and I was afraid of the water. When I saw photos of them playing in the sea, I decided to change. I promised myself to learn in thirty days.',
        'On the first day I asked the lifeguard at our local pool for help. He suggested starting in the shallow end and practising floating before anything else. “Don’t try to swim yet,” he said. “First, learn to breathe slowly and relax.” It sounds easy, but I hated putting my face in the water!',
        'For the first two weeks, I made very slow progress. I often wanted to give up. But my mum offered to come with me every evening, and she watched me practise and cheered every small step. On day 18, I finally swam across the pool without stopping. I remember laughing and shouting at the same time.',
        'By day 30, I could swim ten lengths. I haven’t become a champion, but I’ve stopped feeling scared, and I’ve started enjoying something I avoided for years. My advice? Choose one thing you’re afraid of and give yourself thirty days. Don’t expect to be perfect – just keep going.'],
      items: [
        { q: 'Why did the writer refuse to go to the beach?', o: ['She couldn’t swim.', 'She was busy.', 'She was ill.'], a: 'She couldn’t swim.', ev: 'I couldn’t swim, and I was afraid of the water' },
        { q: 'What made her decide to change?', o: ['photos of her cousins in the sea', 'a school swimming test', 'a film about the sea'], a: 'photos of her cousins in the sea', ev: 'When I saw photos of them playing in the sea, I decided to change.' },
        { q: 'What did the lifeguard suggest first?', o: ['starting in the shallow end', 'swimming one length', 'buying new goggles'], a: 'starting in the shallow end', ev: 'He suggested starting in the shallow end' },
        { q: 'What did she hate at the beginning?', o: ['putting her face in the water', 'getting up early', 'the cold water'], a: 'putting her face in the water', ev: 'I hated putting my face in the water!' },
        { q: 'How did her mum help?', o: ['She came with her every evening.', 'She paid for lessons.', 'She taught her to swim.'], a: 'She came with her every evening.', ev: 'my mum offered to come with me every evening' },
        { q: 'What happened on day 18?', o: ['She swam across the pool without stopping.', 'She swam ten lengths.', 'She wanted to give up.'], a: 'She swam across the pool without stopping.', ev: 'On day 18, I finally swam across the pool without stopping.' },
        { q: 'What is her advice?', o: ['Give yourself thirty days.', 'Try to be perfect.', 'Find a good lifeguard.'], a: 'Give yourself thirty days.', ev: 'Choose one thing you’re afraid of and give yourself thirty days.' }] },

    /* ---------- SPEAKING ---------- */
    { id: 'sp-w', stage: 'speak', type: 'words', tag: 'Speaking · pre-speaking', title: 'Phrases for ==explaining a task==',
      words: [
        ['1️⃣', 'First, …', '', 'sequencer', 'Đầu tiên, …', '**First,** cut the lemon.'],
        ['➡️', 'Next, … / After that, …', '', 'sequencer', 'Tiếp theo, … / Sau đó, …', '**Next,** add some ice.'],
        ['🏁', 'Finally, …', '', 'sequencer', 'Cuối cùng, …', '**Finally,** stir it well.'],
        ['⚠️', 'Be careful! / Don’t forget to …', '', 'warning', 'Cẩn thận! / Đừng quên …', '**Don’t forget to** wash your hands.'],
        ['❓', 'Sorry, can you say that again?', '', 'checking', 'Xin lỗi, bạn nói lại được không?', 'Sorry, can you say that again?'],
        ['🔁', 'So, first I …, then I …?', '', 'checking', 'Vậy đầu tiên mình …, sau đó …?', '**So, first I** fold the paper, **then I**…?'],
        ['👍', 'Exactly! / That’s right.', '', 'response', 'Chính xác! / Đúng rồi.', '– So I add the sugar now? – **Exactly!**'],
        ['🤔', 'Not quite. Try to …', '', 'response', 'Chưa đúng lắm. Thử …', '**Not quite. Try to** fold it in half first.']] },
    { id: 'sp-wp', stage: 'speak', type: 'pairs', tag: 'Speaking · pre-speaking', title: 'Match the ==responses==', lead: 'Tap a line on the left, then tap the best response on the right.',
      right: ['Exactly! You’ve got it.', 'Sure. Fold the paper in half.', 'OK, I’ll be careful.', 'You need a lemon, sugar and ice.', 'Not quite. Add the sugar first.', 'After that, stir it for a minute.', 'I love drawing. It’s relaxing.'],
      items: [
        { t: 'match', q: 'Sorry, can you say that again?', a: 'Sure. Fold the paper in half.' },
        { t: 'match', q: 'So, first I cut the lemon, then I add the sugar?', a: 'Exactly! You’ve got it.' },
        { t: 'match', q: 'So I add the water now?', a: 'Not quite. Add the sugar first.' },
        { t: 'match', q: 'What do I need?', a: 'You need a lemon, sugar and ice.' },
        { t: 'match', q: 'Don’t touch the hot pan!', a: 'OK, I’ll be careful.' },
        { t: 'match', q: 'And then what do I do?', a: 'After that, stir it for a minute.' },
        { t: 'match', q: 'What do you enjoy doing?', a: 'I love drawing. It’s relaxing.' }] },
    { id: 'sp-gap', stage: 'speak', type: 'gap', tag: 'Speaking · information gap', title: 'Teach ==and check==', lead: 'Each of you knows how to do one task. Explain it step by step. Your partner repeats the steps to check: **So, first I …?**',
      roles: [
        { name: 'Student A', who: 'You know: how to make iced lemon tea', icon: '🍋', info: ['First, make a cup of tea and let it cool.', 'Next, cut a lemon in half.', 'Squeeze the lemon into a tall glass.', 'Add two spoons of sugar and stir.', 'Pour in the tea and add lots of ice.', 'Don’t forget to taste it!'], ask: ['What do I need to take a good photo?', 'What should I do first?', 'Where should the light be?', 'What shouldn’t I do?'] },
        { name: 'Student B', who: 'You know: how to take a good photo with a phone', icon: '📸', info: ['First, clean the camera lens.', 'Next, stand with the light behind you.', 'Hold the phone with two hands.', 'Tap the screen on your subject to focus.', 'Don’t use the zoom – walk closer instead.', 'Take three photos and choose the best one.'], ask: ['What do I need to make iced lemon tea?', 'What should I do first?', 'How much sugar do I add?', 'What do I add at the end?'] }],
      useful: ['First, … Next, … Finally, …', 'Don’t forget to …', 'So, first I …, then I …?', 'Exactly! / Not quite.'],
      model: ['**A:** First, make a cup of tea and let it cool. Next, cut a lemon in half.', '**B:** So, first I make tea, then I cut a lemon?', '**A:** Exactly! Then squeeze the lemon into a tall glass and add two spoons of sugar.', '**B:** Sorry, can you say that again? How many spoons?', '**A:** Two. Stir it, pour in the tea and add lots of ice. Don’t forget to taste it!', '**B:** Got it. Now my task: first, clean the camera lens…'] },
    { id: 'sp-task', stage: 'speak', type: 'speak', tag: 'Speaking · role play', title: 'Explain ==a skill==', icon: '🎓',
      task: 'Teach your partner something you are good at (a game, a recipe, a dance move, a phone trick…). Use **at least five instructions** and **one Don’t**. Your partner checks understanding and asks **two questions**. Then change roles.',
      steps: ['Say what you are going to teach and why you enjoy doing it.', 'Say what your partner needs.', 'Give the steps: First, Next, After that, Finally.', 'Give a warning: Don’t … / Be careful …', 'Your partner repeats the steps to check.'],
      useful: ['I enjoy …-ing, so I want to teach you to …', 'First, … Next, … Finally, …', 'Don’t forget to …', 'So, first I …?', 'Exactly! / Not quite. Try to …'],
      timer: 150, record: true,
      model: ['**A:** I enjoy making origami, so I want to teach you to make a paper boat. You need one piece of paper.', '**B:** OK!', '**A:** First, fold the paper in half. Next, fold the top corners down to the middle. After that, fold the bottom up on both sides.', '**B:** So, first I fold it in half, then I fold the corners down?', '**A:** Exactly! Finally, open it and push it flat. Don’t press too hard, or the paper will tear.', '**B:** Can I make it bigger?', '**A:** Yes, just use a bigger piece of paper.'] },

    /* ---------- WRITING ---------- */
    { id: 'w-model', stage: 'write', type: 'read', tag: 'Writing · pre-writing', title: 'Look at ==a model guide==', lead: 'Read the guide. Answer the questions.', textTitle: 'How to grow herbs on your balcony', textIcon: '🌿', numbered: false,
      text: ['Do you enjoy cooking? Why not try growing your own herbs? It’s easy and cheap. You need a small pot, some soil and a packet of basil seeds.', 'First, fill the pot with soil. Next, put five or six seeds on top and cover them with a little soil. After that, water them gently and put the pot in a sunny place. Remember to water your plant every two days, but don’t give it too much water. In about three weeks, you can start picking the leaves. Enjoy!'],
      items: [
        { q: 'Which phrase uses verb + -ing?', o: ['Do you enjoy cooking?', 'fill the pot with soil', 'Enjoy!'], a: 'Do you enjoy cooking?', ev: 'Do you enjoy cooking?' },
        { q: 'Which phrase uses verb + to-infinitive?', o: ['Remember to water your plant', 'water them gently', 'Why not try growing'], a: 'Remember to water your plant', ev: 'Remember to water your plant every two days' },
        { q: 'Which is a negative imperative?', o: ['don’t give it too much water', 'put the pot in a sunny place', 'First, fill the pot'], a: 'don’t give it too much water', ev: 'but don’t give it too much water' },
        { q: 'What do you need?', o: ['a pot, soil and seeds', 'a garden and a spade', 'a big plant'], a: 'a pot, soil and seeds', ev: 'You need a small pot, some soil and a packet of basil seeds.' }] },
    { id: 'w-task', stage: 'write', type: 'write', tag: 'Writing · task', title: 'Write ==a how-to guide==',
      task: 'Write a short guide (**70–90 words**) that teaches a classmate how to do something new.',
      plan: ['Start with a question: Do you enjoy …? / Why not try …?', 'Say what you need.', 'Give four or five steps with First, Next, After that, Finally.', 'Give one warning: Don’t … / Remember to …', 'Finish with a short sentence: Enjoy! / Good luck!'],
      model: ['How to grow herbs on your balcony', 'Do you enjoy cooking? Why not try growing your own herbs? It’s easy and cheap. You need a small pot, some soil and a packet of basil seeds.', 'First, fill the pot with soil. Next, put five or six seeds on top and cover them with a little soil. After that, water them gently and put the pot in a sunny place. Remember to water your plant every two days, but don’t give it too much water. In about three weeks, you can start picking the leaves. Enjoy!'],
      checklist: ['I use at least five imperatives.', 'I use one negative imperative (Don’t …).', 'I use one verb + -ing (enjoy, try, start…).', 'I use one verb + to-infinitive (remember, want, decide…).', 'I use First, Next, After that, Finally.', 'My guide has 70–90 words.'],
      min: 70, max: 90, draft: true },

    /* ---------- REVIEW ---------- */
    { id: 'u-check', stage: 'review', type: 'practice', tag: 'Review', title: 'Unit 8 ==check==', cols: true,
      items: [
        { q: '___ quiet, please! The baby is sleeping.', o: ['Be', 'Being', 'To be'], a: 'Be' },
        { q: '___ forget your homework.', o: ['Don’t', 'Not', 'No'], a: 'Don’t' },
        { q: 'I enjoy ___ to music.', o: ['listening', 'to listen', 'listen'], a: 'listening' },
        { q: 'We decided ___ the bus.', o: ['to take', 'taking', 'take'], a: 'to take' },
        { q: 'She promised ___ me.', o: ['to help', 'helping', 'help'], a: 'to help' },
        { q: 'Have you finished ___ your room?', o: ['tidying', 'to tidy', 'tidy'], a: 'tidying' },
        { q: 'It’s starting ___ .', o: ['to rain', 'raining', 'rain'], a: 'to rain' },
        { q: 'I saw him ___ the ball into the net. (the whole action)', o: ['kick', 'to kick', 'kicks'], a: 'kick' },
        { q: 'Listen! I can hear someone ___ the piano.', o: ['playing', 'to play', 'plays'], a: 'playing' },
        { q: 'He suggested ___ to the cinema.', o: ['going', 'to go', 'go'], a: 'going' }] },
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Review', title: 'What can you ==do now==?',
      cando: ['I can give orders, requests and advice with the imperative.', 'I can use the to-infinitive after verbs like decide, want, promise.', 'I can use the -ing form after verbs like enjoy, finish, hate.', 'I can use see / hear + object + bare infinitive or -ing.', 'I can understand real instructions and advice.', 'I can explain a task, check understanding and write a how-to guide.'] }
  ]
};
