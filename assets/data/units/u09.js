/* Unit 9 · Vocabulary: Sport
   Book: Destination A2, Unit 9, pages 36–39.
   Order: each book category (nouns, verbs, phrases, adjectives and adverbs, word formation)
   is taught with flip cards and followed at once by its book exercises, quoted exactly (A–I) →
   skills, each with its own pre-stage → review. One card = one slide. */
window.A2_UNITS[9] = {
  n: 9, type: 'Vocabulary', title: 'A club for everyone',
  focus: 'Sport',
  book: 'Destination A2 · Unit 9 · pages 36–39',
  goals: ['Name sports, people, places and equipment.', 'Use sport verbs and phrases: score, catch, take part in, win a match.', 'Build word families (excite → excitement → exciting / excited).', 'Understand real speakers, recommend a club and write an invitation.'],
  audio: {
    hazal: { title: 'Do you watch sports on TV?', speakers: 'Hazal, Türkiye', level: 'A2', length: '0:58', provider: 'ELLLO One Minute English A2-034', src: 'https://elllo.org/Audio/1ME-A2BEG/A2-034-HAZAL-DO-YOU-WATCH-SPORTS-ON-TV.mp3', page: 'https://elllo.org/video/A2BEG/A2-034-HAZAL-DO-YOU-WATCH-SPORTS-ON-TV.htm' },
    netball: { title: 'Netball', speakers: 'Naomi and Dai', level: 'A2', length: '2:00', provider: 'ELLLO Views #927', src: 'https://elllo.org/Audio/A0901/927-Naomi-Netball.mp3', page: 'https://elllo.org/english/0901/T927-Naomi-Netball.htm' }
  },
  stages: [
    { id: 'start', skill: 'start', icon: '🏅', name: 'Welcome', caption: 'Which sports do you play or watch?' },
    { id: 'nouns', skill: 'vocab', icon: '⚽', name: 'Nouns', caption: 'Flip cards → book exercises A and B.' },
    { id: 'verbs', skill: 'vocab', icon: '🤾', name: 'Verbs', caption: 'Flip cards → book exercises C and D.' },
    { id: 'phrases', skill: 'vocab', icon: '🥋', name: 'Phrases', caption: 'Flip cards → book exercise E.' },
    { id: 'adj', skill: 'vocab', icon: '⚡', name: 'Adjectives and adverbs', caption: 'Flip cards → book exercises F and G.' },
    { id: 'wf', skill: 'vocab', icon: '🧬', name: 'Word formation', caption: 'Word families → book exercises H and I.' },
    { id: 'l1', skill: 'listening', icon: '📺', name: 'Listening 1: Sports on TV', caption: 'Pre-listening words → multiple choice → speaking.' },
    { id: 'l2', skill: 'listening', icon: '🏐', name: 'Listening 2: Netball', caption: 'Pre-listening words → complete the notes → speaking.' },
    { id: 'read', skill: 'reading', icon: '📰', name: 'Reading: Clubs and champions', caption: 'Two texts, from easier to harder. Pre-reading words, then read for details.' },
    { id: 'speak', skill: 'speaking', icon: '🗣️', name: 'Speaking: Find a club', caption: 'Recommending phrases → club-finder information gap → recommend a club.' },
    { id: 'write', skill: 'writing', icon: '✍️', name: 'Writing: A club invitation', caption: 'Model text → plan, write and check.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Review', caption: 'Unit check, can-do list and homework.' }
  ],
  cards: [
    /* ---------- WELCOME ---------- */
    { id: 'cover', stage: 'start', type: 'cover', title: 'A club for ==everyone==' },
    { id: 'warm', stage: 'start', type: 'talk', tag: 'Warm-up · speaking', title: 'You and ==sport==', lead: 'Ask and answer with a partner.',
      items: [
        { q: 'What sports do you play?', frame: 'I play ___ / I go ___ing / I do ___.', model: 'I play badminton and I go swimming in summer.' },
        { q: 'Which sport do you like watching?', frame: 'I like watching ___ because ___.', model: 'I like watching football because it’s exciting.' },
        { q: 'Who is your favourite player or team?', frame: 'My favourite ___ is ___. He / She / They ___.', model: 'My favourite player is Quang Hải. He scores amazing goals.' },
        { q: 'Did you ever win a prize or a medal?', frame: 'Yes, I won ___ in ___. / No, but I took part in ___.', model: 'No, but I took part in a running race last year.' }] },

    /* ---------- NOUNS → book A, B ---------- */
    { id: 'n1', stage: 'nouns', type: 'words', tag: 'Nouns · 1', title: 'Sports',
      words: [
        ['🏀', 'basketball', '/ˈbɑːskɪtbɔːl/', 'noun', 'bóng rổ', 'We play **basketball** after school.'],
        ['⚽', 'football', '/ˈfʊtbɔːl/', 'noun', 'bóng đá', '**Football** is very popular in Việt Nam.'],
        ['🏑', 'hockey', '/ˈhɒki/', 'noun', 'khúc côn cầu', 'They play ice **hockey** in Canada.'],
        ['⛸️', 'ice skating', '/ˈaɪs skeɪtɪŋ/', 'noun', 'trượt băng', 'Let’s go **ice skating** at the mall.'],
        ['⛷️', 'skiing', '/ˈskiːɪŋ/', 'noun', 'trượt tuyết (bằng ván đôi)', '**Skiing** is a winter sport.'],
        ['🏂', 'snowboarding', '/ˈsnəʊbɔːdɪŋ/', 'noun', 'trượt ván tuyết', '**Snowboarding** looks fun.'],
        ['🏊', 'swimming', '/ˈswɪmɪŋ/', 'noun', 'bơi lội', 'I go **swimming** every Sunday.'],
        ['🏓', 'table tennis', '/ˈteɪbl tenɪs/', 'noun', 'bóng bàn', 'My grandad plays **table tennis**.']] },
    { id: 'n2', stage: 'nouns', type: 'words', tag: 'Nouns · 2', title: 'People in ==sport==',
      words: [
        ['🧑‍✈️', 'captain', '/ˈkæptɪn/', 'noun', 'đội trưởng', 'Jack is the **captain** of the team.'],
        ['🧑‍🏫', 'coach', '/kəʊtʃ/', 'noun', 'huấn luyện viên', 'Our **coach** is very strict.'],
        ['📣', 'fan', '/fæn/', 'noun', 'người hâm mộ', 'The **fans** were cheering.'],
        ['🏃', 'player', '/ˈpleɪə/', 'noun', 'cầu thủ, người chơi', 'He’s a great **player**.'],
        ['👥', 'team', '/tiːm/', 'noun', 'đội', 'Which **team** do you support?'],
        ['🎾', 'tennis player', '/ˈtenɪs pleɪə/', 'noun', 'vận động viên quần vợt', 'She’s a famous **tennis player**.']] },
    { id: 'n3', stage: 'nouns', type: 'words', tag: 'Nouns · 3', title: 'Places and ==things==',
      words: [
        ['🏋️', 'gym', '/dʒɪm/', 'noun', 'phòng tập thể dục', 'I go to the **gym** twice a week.'],
        ['🏢', 'sports centre', '/ˈspɔːts sentə/', 'noun', 'trung tâm thể thao', 'There’s a pool at the **sports centre**.'],
        ['🏟️', 'stadium', '/ˈsteɪdiəm/', 'noun', 'sân vận động', 'The **stadium** was full.'],
        ['🎟️', 'ticket', '/ˈtɪkɪt/', 'noun', 'vé', 'I got two **tickets** for the match.'],
        ['🏸', 'racket', '/ˈrækɪt/', 'noun', 'cái vợt', 'My tennis **racket** broke.']] },
    { id: 'n4', stage: 'nouns', type: 'words', tag: 'Nouns · 4', title: 'Events and ==results==',
      words: [
        ['🏆', 'competition', '/ˌkɒmpəˈtɪʃn/', 'noun', 'cuộc thi', 'She won a swimming **competition**.'],
        ['🥅', 'goal', '/ɡəʊl/', 'noun', 'bàn thắng; khung thành', 'What an amazing **goal**!'],
        ['🔁', 'practice', '/ˈpræktɪs/', 'noun', 'buổi tập', 'Football **practice** is at 5 pm.'],
        ['🎁', 'prize', '/praɪz/', 'noun', 'giải thưởng', 'The first **prize** is a new bike.'],
        ['🏁', 'race', '/reɪs/', 'noun', 'cuộc đua', 'He came first in the **race**.']] },
    { id: 'exA', stage: 'nouns', type: 'practice', book: 'A', page: 37, tag: 'Nouns practice', title: 'Exercise ==A==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: 'The basketball {coach|fan} was really excited about getting tickets for the match.', a: 'fan' },
        { q: 'Come to hockey {practice|competition} with us at 8 pm.', a: 'practice' },
        { q: 'The football player scored an amazing {prize|goal}.', a: 'goal' },
        { q: 'The fans in the {stadium|gym} were cheering loudly when the match ended.', a: 'stadium' },
        { q: 'Jack is the {captain|player} of his school football team.', a: 'captain' },
        { q: 'I like playing {snowboarding|table tennis} in my free time.', a: 'table tennis' }] },
    { id: 'exB', stage: 'nouns', type: 'practice', book: 'B', page: 37, tag: 'Nouns practice', title: 'Exercise ==B==', lead: 'Fill in the blanks with the words given in the box.', cols: true,
      bank: ['race', 'racket', 'skiing', 'sports centre', 'swimming', 'team'],
      items: [
        { q: 'The tennis player’s ___ broke while he was hitting the ball.', a: 'racket' },
        { q: 'Let’s go ___ at the open-air pool.', a: 'swimming' },
        { q: '___ is my favourite winter sport.', a: 'Skiing' },
        { q: 'He came first in the ___ because he’s a fast runner.', a: 'race' },
        { q: 'Which ___ do you want to win the competition?', a: 'team' },
        { q: 'We hope to go ice skating at the new ___ today.', a: 'sports centre' }] },

    /* ---------- VERBS → book C, D ---------- */
    { id: 'v1', stage: 'verbs', type: 'words', tag: 'Verbs · 1', title: 'The ==ball==',
      words: [
        ['🤲', 'catch', '/kætʃ/', 'verb (caught)', 'bắt (bóng)', '**Catch** the ball!'],
        ['🫳', 'drop', '/drɒp/', 'verb', 'đánh rơi', 'The goalkeeper **dropped** the ball.'],
        ['🤾', 'throw', '/θrəʊ/', 'verb (threw)', 'ném', '**Throw** it to me!'],
        ['🎳', 'roll', '/rəʊl/', 'verb', 'lăn', 'The ball **rolled** into the net.'],
        ['🥅', 'score', '/skɔː/', 'verb', 'ghi (bàn, điểm)', 'He **scored** two goals.'],
        ['☝️', 'touch', '/tʌtʃ/', 'verb', 'chạm', 'Don’t **touch** the ball with your hands.'],
        ['👐', 'push', '/pʊʃ/', 'verb', 'đẩy', 'Don’t **push** the other players.'],
        ['💥', 'shove', '/ʃʌv/', 'verb', 'xô, đẩy mạnh', 'They were pushing and **shoving**.']] },
    { id: 'v2', stage: 'verbs', type: 'words', tag: 'Verbs · 2', title: 'Moving and ==watching==',
      words: [
        ['🚴', 'cycle', '/ˈsaɪkl/', 'verb', 'đạp xe', 'We **cycle** around the lake.'],
        ['🏇', 'ride', '/raɪd/', 'verb (rode)', 'cưỡi, đi (ngựa, xe)', 'I **ride** my bike to school.'],
        ['⛸️', 'skate', '/skeɪt/', 'verb', 'trượt (băng, patin)', 'Can you **skate**?'],
        ['🏔️', 'reach', '/riːtʃ/', 'verb', 'đến, đạt tới', 'They **reached** the final.'],
        ['📝', 'enter (a competition / race)', '/ˈentə/', 'verb', 'tham gia, đăng ký dự thi', 'I **entered** a running race.'],
        ['📺', 'watch (a game / match)', '/wɒtʃ/', 'verb', 'xem (trận đấu)', 'Let’s **watch** the match tonight.']] },
    { id: 'v3', stage: 'verbs', type: 'words', tag: 'Verbs · 3', title: 'Decisions and ==feelings==',
      words: [
        ['❌', 'cancel', '/ˈkænsl/', 'verb', 'hủy', 'They **cancelled** the match because of the rain.'],
        ['🏅', 'deserve', '/dɪˈzɜːv/', 'verb', 'xứng đáng', 'They **deserved** to win.'],
        ['📣', 'encourage', '/ɪnˈkʌrɪdʒ/', 'verb', 'khuyến khích, động viên', 'My coach **encourages** me.'],
        ['🔚', 'end', '/end/', 'verb', 'kết thúc', 'The match **ended** 2–1.'],
        ['✅', 'select', '/sɪˈlekt/', 'verb', 'chọn, tuyển chọn', 'He was **selected** for the team.']] },
    { id: 'exC', stage: 'verbs', type: 'practice', book: 'C', page: 37, tag: 'Verbs practice', title: 'Exercise ==C==', lead: 'Choose the correct answer.', cols: true, abc: true,
      items: [
        { q: 'They ___ down the road on their bikes when it started to rain.', o: ['were rolling', 'were skating', 'were cycling'], a: 'were cycling' },
        { q: 'Let’s ___ the match at the café tonight.', o: ['watch', 'catch', 'select'], a: 'watch' },
        { q: 'We were hoping ___ more people to join the club.', o: ['to deserve', 'to encourage', 'to reach'], a: 'to encourage' },
        { q: 'I love ___ goals for my team when we play.', o: ['pushing', 'throwing', 'scoring'], a: 'scoring' },
        { q: 'They decided to ___ the match at the last minute.', o: ['to drop', 'to cancel', 'to touch'], a: 'to cancel' },
        { q: 'I want you to ___ the ball and then throw it back to me.', o: ['ride', 'enter', 'catch'], a: 'catch' }] },
    { id: 'exD', stage: 'verbs', type: 'pairs', book: 'D', page: 38, tag: 'Verbs practice', title: 'Exercise ==D==', lead: 'Match the two halves of each sentence.',
      right: ['each other all through the game.', 'you go riding this afternoon.', 'deserved to win the match.', 'and watched it roll into the back of the net.', 'before the competition ends.', 'if he could score at least two goals.'],
      items: [
        { t: 'match', q: 'Everyone agreed that they played well and', a: 'deserved to win the match.' },
        { t: 'match', q: 'The goal keeper dropped the ball', a: 'and watched it roll into the back of the net.' },
        { t: 'match', q: 'The coach promised to select him for the team', a: 'if he could score at least two goals.' },
        { t: 'match', q: 'It’s bad luck for players to touch the winner’s cup', a: 'before the competition ends.' },
        { t: 'match', q: 'Wear a good hat and leather boots when', a: 'you go riding this afternoon.' },
        { t: 'match', q: 'The players were pushing and shoving', a: 'each other all through the game.' }] },

    /* ---------- PHRASES → book E ---------- */
    { id: 'ph1', stage: 'phrases', type: 'words', tag: 'Phrases · 1', title: 'Sport ==phrases== 1',
      words: [
        ['🎉', 'congratulate someone on (something)', '', 'phrase', 'chúc mừng ai về (điều gì)', 'We **congratulated** her **on** her win.'],
        ['🥋', 'do judo / tae kwon do / karate / etc', '', 'phrase', 'tập judo / taekwondo / karate…', 'I **do** karate on Saturdays.'],
        ['👟', 'football boots', '', 'phrase', 'giày đá bóng', 'Don’t forget your **football boots**.'],
        ['🏄', 'go skiing / snowboarding / surfing / etc', '', 'phrase', 'đi trượt tuyết / lướt ván…', 'We **went surfing** in Đà Nẵng.'],
        ['🏁', 'in the end', '', 'phrase', 'cuối cùng', '**In the end**, we won 3–2.']] },
    { id: 'ph2', stage: 'phrases', type: 'words', tag: 'Phrases · 2', title: 'Sport ==phrases== 2',
      words: [
        ['😞', 'lose a match / game / competition', '', 'phrase', 'thua trận / cuộc thi', 'We **lost the match** 0–1.'],
        ['📺', 'on TV', '', 'phrase', 'trên ti vi', 'The final is **on TV** tonight.'],
        ['⛳', 'play golf / football / baseball / etc', '', 'phrase', 'chơi golf / bóng đá / bóng chày…', 'My uncle **plays golf**.'],
        ['🙋', 'take part in (something)', '', 'phrase', 'tham gia (cái gì)', 'I **took part in** a race.'],
        ['🏆', 'win a match / game / competition', '', 'phrase', 'thắng trận / cuộc thi', 'Our team **won the competition**.']] },
    { id: 'exE', stage: 'phrases', type: 'practice', book: 'E', page: 38, tag: 'Phrases practice', title: 'Exercise ==E==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: 'Anyone taking part **on / in** the match needs to wear football **boots / shoes**.', o: ['in · boots', 'on · boots', 'in · shoes', 'on · shoes'], a: 'in · boots' },
        { q: 'We were watching the game {to|on} TV when the electricity went off.', a: 'on' },
        { q: '**On / In** the end, we decided to **do / go** snowboarding.', o: ['In · go', 'On · go', 'In · do', 'On · do'], a: 'In · go' },
        { q: 'They don’t like {losing|taking} a match at all.', a: 'losing' },
        { q: 'Go on. Congratulate him {on|in} winning the race!', a: 'on' },
        { q: 'Were you {doing|playing} judo when you hurt your leg?', a: 'doing' },
        { q: 'First, you need to {win|take} part the competition and then you can say you’re the best!', a: 'take' },
        { q: 'We were planning to {play|go} golf this weekend.', a: 'play' }] },

    /* ---------- ADJECTIVES AND ADVERBS → book F, G ---------- */
    { id: 'a1', stage: 'adj', type: 'words', tag: 'Adjectives', title: 'Describing ==sport==',
      words: [
        ['🤩', 'exciting', '/ɪkˈsaɪtɪŋ/', 'adjective', 'thú vị, gây hồi hộp', 'It was an **exciting** match.'],
        ['🌟', 'fantastic', '/fænˈtæstɪk/', 'adjective', 'tuyệt vời', 'The atmosphere was **fantastic**.'],
        ['💨', 'fast', '/fɑːst/', 'adjective', 'nhanh', 'He’s a very **fast** runner.'],
        ['🏠', 'indoor', '/ˈɪndɔː/', 'adjective', 'trong nhà', 'Table tennis is an **indoor** sport.'],
        ['🌳', 'outdoor', '/ˈaʊtdɔː/', 'adjective', 'ngoài trời', 'I prefer **outdoor** games.'],
        ['❤️', 'popular', '/ˈpɒpjələ/', 'adjective', 'phổ biến, được ưa chuộng', 'Football is very **popular**.'],
        ['💪', 'strong', '/strɒŋ/', 'adjective', 'khỏe, mạnh', 'You need to be **strong** to lift weights.']] },
    { id: 'adv', stage: 'adj', type: 'words', tag: 'Adverbs', title: 'How did they ==play==?',
      words: [
        ['🏎️', 'fast', '/fɑːst/', 'adverb', 'nhanh', 'She runs really **fast**.'],
        ['🐢', 'last', '/lɑːst/', 'adverb', 'cuối cùng, về chót', 'I came **last** in the race.'],
        ['👍', 'well', '/wel/', 'adverb', 'tốt, giỏi', 'Our team played **well**.']] },
    { id: 'exF', stage: 'adj', type: 'practice', book: 'F', page: 38, tag: 'Adjectives practice', title: 'Exercise ==F==', lead: 'Swap the words in bold to make the sentences correct.', cols: true,
      items: [
        { t: 'short', q: 'I prefer playing **last** games to indoor ones.', a: 'outdoor' },
        { t: 'short', q: 'The match was **well** and the atmosphere was fantastic.', a: 'exciting' },
        { t: 'short', q: 'He can’t run fast and he came **strong**.', a: 'last' },
        { t: 'short', q: 'Cricket is a very **outdoor** sport in India.', a: 'popular' },
        { t: 'short', q: 'How **popular** do you have to be to lift those weights?', a: 'strong' },
        { t: 'short', q: 'The team played **exciting** but still lost.', a: 'well' }] },
    { id: 'exG', stage: 'adj', type: 'practice', book: 'G', page: 39, tag: 'Adjectives practice', title: 'Exercise ==G==', lead: 'Fill in the missing words. The first letters are given.', cols: true,
      items: [
        { q: 'Ice skating is just **f**___ ! I go every week and I love it.', a: ['fantastic', 'antastic'], show: 'fantastic' },
        { q: 'Table tennis is my favourite **i**___ sport.', a: ['indoor', 'ndoor'], show: 'indoor' },
        { q: 'Basketball is very **p**___ in my country – everybody plays it.', a: ['popular', 'opular'], show: 'popular' },
        { q: 'You need to be **s**___ to play tennis.', a: ['strong', 'trong'], show: 'strong' },
        { q: 'Our team played really **w**___ on Saturday.', a: ['well', 'ell'], show: 'well' },
        { q: 'I came **l**___ in the race today. I must train harder if I want to do better.', a: ['last', 'ast'], show: 'last' }] },

    /* ---------- WORD FORMATION → book H, I ---------- */
    { id: 'wf1', stage: 'wf', type: 'grammar', tag: 'Word formation · 1', title: 'Word families ==1==',
      blocks: [
        { form: { cols: ['Noun', 'Verb', 'Adjective'], rows: [
          ['congratulations', '**congratulate**', ''],
          ['**danger**', '', 'dangerous'],
          ['entrance', '**enter**', ''],
          ['excitement', '**excite**', 'exciting · excited'],
          ['**fame**', '', 'famous']] } },
        { vi: '**exciting** = thú vị (sự việc gây hồi hộp) · **excited** = háo hức (người cảm thấy). **entrance** = lối vào · **fame** = danh tiếng · **Congratulations (on…)!** = Chúc mừng!' }] },
    { id: 'wf2', stage: 'wf', type: 'grammar', tag: 'Word formation · 2', title: 'Word families ==2==',
      blocks: [
        { form: { cols: ['Noun', 'Verb'], rows: [
          ['loser', '**lose**'],
          ['player', '**play**'],
          ['**practice**', 'practise'],
          ['skiing', '**ski**'],
          ['training · trainer', '**train**'],
          ['winner', '**win**']] } },
        { vi: 'Danh từ chỉ người: thêm **-er** (player, trainer); **win → winner** (gấp đôi n), **lose → loser**. Anh-Anh: **practice** (danh từ) – **practise** (động từ).' }] },
    { id: 'exH', stage: 'wf', type: 'cloze', book: 'H', page: 39, tag: 'Word formation practice', title: 'Exercise ==H==', lead: 'Fill the gaps with the correct forms of the words in bold.',
      text: 'From a very young age I wanted to be a football [1] . So, last year I started training every night after school and I tried to [2] in the park with my friends at weekends too. Imagine my [3] when a coach from the local youth team came to watch me play in a school match. I soon started to dream about becoming as [4] as all my favourite stars. But I know it’s [5] to think you can succeed before you are really ready. You need to work hard to be a [6] and that means trying to play as well as you can. One day I hope I’ll make it to the top.',
      items: [{ a: 'player', hint: 'PLAY' }, { a: ['practise', 'practice'], show: 'practise', hint: 'PRACTICE' }, { a: 'excitement', hint: 'EXCITE' }, { a: 'famous', hint: 'FAME' }, { a: 'dangerous', hint: 'DANGER' }, { a: 'winner', hint: 'WIN' }] },
    { id: 'exI', stage: 'wf', type: 'practice', book: 'I', page: 39, tag: 'Word formation practice', title: 'Exercise ==I==', lead: 'Fill in the gaps by converting the highlighted words to make them lexical and in meaning.', cols: true,
      items: [
        { q: 'The ___ looked very angry when they left the field.', a: ['losers', 'loser'], show: 'losers', hint: '**LOSE**' },
        { q: 'I was bored because the game wasn’t very ___ .', a: 'exciting', hint: '**EXCITE**' },
        { q: '___ on winning the school sports cup!', a: 'Congratulations', hint: '**CONGRATULATE**' },
        { q: 'The fans cheered when the players ___ the stadium.', a: 'entered', hint: '**ENTER**' },
        { q: 'He is the ___ of the youth team at the local sports centre.', a: 'trainer', hint: '**TRAIN**' },
        { q: 'I really want to go ___ next winter.', a: 'skiing', hint: '**SKI**' },
        { q: 'He injured his knee badly in ___ .', a: 'training', hint: '**TRAIN**' },
        { q: 'I was so ___ I couldn’t sleep.', a: 'excited', hint: '**EXCITE**' }] },

    /* ---------- LISTENING 1: multiple choice ---------- */
    { id: 'l1-w', stage: 'l1', type: 'words', tag: 'Listening 1 · pre-listening', title: 'New words for ==Sports on TV==',
      words: [
        ['🎾', 'hit the ball', '/hɪt ðə bɔːl/', 'phrase', 'đánh bóng', 'I like how the players **hit the ball**.'],
        ['💨', 'move quickly', '/muːv ˈkwɪkli/', 'phrase', 'di chuyển nhanh', 'Tennis players **move quickly**.'],
        ['🏐', 'volleyball', '/ˈvɒlibɔːl/', 'noun', 'bóng chuyền', 'I like watching **volleyball**.'],
        ['🤝', 'teamwork', '/ˈtiːmwɜːk/', 'noun', 'tinh thần đồng đội', 'Volleyball is about **teamwork**.'],
        ['📜', 'rules', '/ruːlz/', 'noun', 'luật chơi', 'The **rules** are interesting.'],
        ['😴', 'boring', '/ˈbɔːrɪŋ/', 'adjective', 'nhàm chán', 'I find football **boring**.'],
        ['😌', 'relax', '/rɪˈlæks/', 'verb', 'thư giãn', 'It’s a great way to **relax**.']] },
    { id: 'l1-det', stage: 'l1', type: 'listen', audio: 'hazal', tag: 'Listening 1 · while listening', title: 'Choose the ==correct answer==', task: 'Listen twice. Choose the answers.', cols: true,
      items: [
        { q: 'Which sport does Hazal like watching most?', o: ['tennis', 'volleyball', 'football'], a: 'tennis' },
        { q: 'What does she like about it?', o: ['how the players hit the ball and move quickly', 'the big stadiums', 'the famous players'], a: 'how the players hit the ball and move quickly' },
        { q: 'Which other sport does she like watching?', o: ['volleyball', 'basketball', 'swimming'], a: 'volleyball' },
        { q: 'Why does she like it?', o: ['She likes teamwork.', 'Her friends play it.', 'It’s fast.'], a: 'She likes teamwork.' },
        { q: 'Which sport doesn’t she like watching?', o: ['football', 'tennis', 'volleyball'], a: 'football' },
        { q: 'Who loves that sport?', o: ['her father', 'her brother', 'her mother'], a: 'her father' },
        { q: 'Why does she think watching sport on TV is great?', o: ['It’s a way to enjoy and relax with family and friends.', 'It helps her play better.', 'It’s cheaper than tickets.'], a: 'It’s a way to enjoy and relax with family and friends.' }] },
    { id: 'l1-say', stage: 'l1', type: 'talk', tag: 'Listening 1 · post-listening', title: 'Sport ==on TV==', lead: 'Answer Hazal’s question.',
      items: [
        { q: 'Do you watch sports on TV?', frame: 'Yes, I do. I like watching ___ the most because ___.', model: 'Yes, I do. I like watching badminton the most because the players are so fast.' },
        { q: 'Which sport do you find boring?', frame: 'I find ___ boring because ___.', model: 'I find golf boring because nothing happens!' },
        { q: 'Who do you watch sport with?', frame: 'I usually watch with my ___.', model: 'I usually watch with my dad and my uncle.' },
        { q: 'Is it better to watch at home or in a stadium?', frame: 'I think it’s better ___ because ___.', model: 'I think it’s better in a stadium because the atmosphere is fantastic.' }] },

    /* ---------- LISTENING 2: complete the notes ---------- */
    { id: 'l2-w', stage: 'l2', type: 'words', tag: 'Listening 2 · pre-listening', title: 'New words for ==Netball==',
      words: [
        ['🏐', 'netball', '/ˈnetbɔːl/', 'noun', 'bóng lưới (giống bóng rổ)', '**Netball** is like basketball.'],
        ['🔢', 'mostly', '/ˈməʊstli/', 'adverb', 'chủ yếu', '**Mostly** girls play it.'],
        ['🔁', 'each other', '/iːtʃ ˈʌðə/', 'pronoun', 'lẫn nhau', 'Get the ball in **each other’s** nets.'],
        ['⬇️', 'bounce', '/baʊns/', 'verb', 'nảy, đập bóng xuống đất', 'You can only **bounce** it once.'],
        ['🤾', 'pass', '/pɑːs/', 'noun / verb', 'đường chuyền; chuyền bóng', 'There are three **passes**.'],
        ['🫁', 'chest', '/tʃest/', 'noun', 'ngực', 'A **chest** pass goes straight.'],
        ['💯', 'point', '/pɔɪnt/', 'noun', 'điểm', 'One **point** for every net.']] },
    { id: 'l2-det', stage: 'l2', type: 'listen', audio: 'netball', tag: 'Listening 2 · while listening', title: 'Complete the ==fact file==', task: 'Listen twice. Write **one word or a number** in each gap.', cols: true,
      items: [
        { q: 'Naomi is from ___ .', a: 'Wales' },
        { q: 'Netball is a bit like ___ .', a: 'basketball' },
        { q: 'Mostly ___ play it.', a: 'girls' },
        { q: 'You can only bounce the ball ___ .', a: 'once' },
        { q: 'They play it mostly ___ .', a: 'indoors' },
        { q: 'There are ___ different passes.', a: ['three', '3'] },
        { q: 'You get one ___ for every net.', a: 'point' },
        { q: 'There are ___ people on a team.', a: ['seven', '7'] }] },
    { id: 'l2-say', stage: 'l2', type: 'talk', tag: 'Listening 2 · post-listening', title: 'Explain ==a sport==', lead: 'Explain a sport you know to your partner.',
      items: [
        { q: 'What sport is it? What is it like?', frame: 'It’s called ___. It’s a bit like ___.', model: 'It’s called đá cầu. It’s a bit like football with a shuttlecock.' },
        { q: 'How many players are there on a team?', frame: 'There are ___ players on a team.', model: 'There are three players on a team.' },
        { q: 'Where do you play it?', frame: 'You play it indoors / outdoors, mostly ___.', model: 'You play it outdoors, mostly in the park.' },
        { q: 'How do you score points?', frame: 'You get a point when ___.', model: 'You get a point when the shuttlecock touches the ground on the other side.' }] },

    /* ---------- READING: two texts, easier → harder ---------- */
    { id: 'r-w1', stage: 'read', type: 'words', tag: 'Reading 1 · pre-reading', title: 'New words for ==Text 1==',
      words: [
        ['📄', 'leaflet', '/ˈliːflət/', 'noun', 'tờ rơi', 'Read the club **leaflet**.'],
        ['🔰', 'beginner', '/bɪˈɡɪnə/', 'noun', 'người mới bắt đầu', 'Open to **beginners**.'],
        ['💳', 'membership', '/ˈmembəʃɪp/', 'noun', 'phí thành viên, tư cách hội viên', '**Membership** is 100,000 VND a month.'],
        ['🎒', 'equipment', '/ɪˈkwɪpmənt/', 'noun', 'dụng cụ, trang thiết bị', 'We lend you all the **equipment**.'],
        ['🆓', 'free trial', '/friː ˈtraɪəl/', 'noun', 'buổi học thử miễn phí', 'Your first session is a **free trial**.'],
        ['🥇', 'tournament', '/ˈtʊənəmənt/', 'noun', 'giải đấu', 'We enter a city **tournament**.']] },
    { id: 'r-t1', stage: 'read', type: 'read', tag: 'Reading 1 · while reading', title: 'Text 1: ==true or false==', lead: 'Read the leaflet. Are the sentences true or false?', textTitle: 'Riverside Sports Centre · Clubs for teens', textIcon: '🏢', numbered: false,
      text: [
        '**🏓 Table Tennis Club** – Monday and Wednesday, 5–7 pm, indoor hall. Beginners welcome. We lend you a racket. Membership: 80,000 VND a month.',
        '**🏊 Swimming Squad** – Tuesday, Thursday and Saturday, 6–7 am. For swimmers who can already swim 200 metres. We enter two city competitions every year. Membership: 150,000 VND a month.',
        '**⚽ Girls’ Football** – Saturday, 3–5 pm, outdoor pitch. All levels. Bring football boots and water. The first session is a free trial. Membership: 100,000 VND a month.',
        '**🥋 Karate for Beginners** – Friday, 6–7:30 pm. Ages 12–16. You need to buy a white uniform after the first month. Membership: 120,000 VND a month.'],
      items: [
        { q: 'You need your own racket for the Table Tennis Club.', o: ['True', 'False'], a: 'False', ev: 'We lend you a racket.' },
        { q: 'The Swimming Squad meets three times a week.', o: ['True', 'False'], a: 'True', ev: 'Tuesday, Thursday and Saturday, 6–7 am.' },
        { q: 'A beginner who can’t swim can join the Swimming Squad.', o: ['True', 'False'], a: 'False', ev: 'For swimmers who can already swim 200 metres.' },
        { q: 'Girls’ Football is played outdoors.', o: ['True', 'False'], a: 'True', ev: 'Saturday, 3–5 pm, outdoor pitch.' },
        { q: 'Your first football session costs 100,000 VND.', o: ['True', 'False'], a: 'False', ev: 'The first session is a free trial.' },
        { q: 'Karate is for people of all ages.', o: ['True', 'False'], a: 'False', ev: 'Ages 12–16.' },
        { q: 'The cheapest club is table tennis.', o: ['True', 'False'], a: 'True', ev: 'Membership: 80,000 VND a month.' }] },
    { id: 'r-w2', stage: 'read', type: 'words', tag: 'Reading 2 · pre-reading', title: 'New words for ==Text 2==',
      words: [
        ['🏸', 'shuttlecock', '/ˈʃʌtlkɒk/', 'noun', 'quả cầu (cầu lông, đá cầu)', 'He kicked the **shuttlecock**.'],
        ['🌅', 'dawn', '/dɔːn/', 'noun', 'bình minh', 'They practised at **dawn**.'],
        ['📹', 'record (a video)', '/rɪˈkɔːd/', 'verb', 'quay (video)', 'His sister **recorded** a video.'],
        ['🔥', 'go viral', '/ɡəʊ ˈvaɪrəl/', 'phrase', 'lan truyền mạnh trên mạng', 'The video **went viral**.'],
        ['🏫', 'national', '/ˈnæʃnəl/', 'adjective', 'quốc gia', 'the **national** youth team'],
        ['🤕', 'injury', '/ˈɪndʒəri/', 'noun', 'chấn thương', 'He had a knee **injury**.'],
        ['🧘', 'patience', '/ˈpeɪʃns/', 'noun', 'sự kiên nhẫn', 'Sport teaches **patience**.']] },
    { id: 'r-t2', stage: 'read', type: 'read', tag: 'Reading 2 · while reading', title: 'Text 2: ==complete the sentences==', lead: 'Read the article. Complete each sentence with **one or two words** from the text.', textTitle: 'From the park to the national team', textIcon: '🏆',
      text: [
        'Five years ago, Trần Gia Bảo was just a boy who loved kicking a shuttlecock with his grandfather in a small park in Huế. Every morning at dawn, before school, they practised đá cầu for an hour. “My grandfather was my first coach,” Bảo says. “He never shouted. He just encouraged me to try again.”',
        'When Bảo was twelve, his sister recorded a video of him doing an amazing back-kick and posted it online. It went viral, and a coach from the city sports centre invited him to train with the youth team. At first Bảo was nervous – the other players were older and stronger – but he trained hard and was soon selected for the team.',
        'Two years later, everything almost ended. Bảo hurt his knee badly in training, and the doctor told him to stop playing for six months. “I felt terrible,” he remembers. “I watched every match on TV and thought I would never play again.” His grandfather visited him every day and taught him to play chess, which helped him to stay calm and patient.',
        'Last month, Bảo took part in his first national competition, and his team won the silver medal. He is now one of the youngest players in the national youth team. When journalists asked him for advice, he smiled: “Be patient, don’t give up, and always listen to your grandfather!”'],
      items: [
        { q: 'Bảo first played đá cầu with his ___ .', a: 'grandfather', ev: 'loved kicking a shuttlecock with his grandfather' },
        { q: 'They practised every morning at ___ .', a: 'dawn', ev: 'Every morning at dawn, before school, they practised' },
        { q: 'His ___ recorded the video that went viral.', a: 'sister', ev: 'his sister recorded a video of him doing an amazing back-kick' },
        { q: 'At first he was nervous because the other players were older and ___ .', a: 'stronger', ev: 'the other players were older and stronger' },
        { q: 'He hurt his ___ in training.', a: 'knee', ev: 'Bảo hurt his knee badly in training' },
        { q: 'He couldn’t play for six ___ .', a: 'months', ev: 'stop playing for six months' },
        { q: 'His grandfather taught him to play ___ .', a: 'chess', ev: 'taught him to play chess' },
        { q: 'At the national competition, his team won the ___ .', a: ['silver medal', 'silver'], show: 'silver medal', ev: 'his team won the silver medal' }] },

    /* ---------- SPEAKING ---------- */
    { id: 'sp-w', stage: 'speak', type: 'words', tag: 'Speaking · pre-speaking', title: 'Phrases for ==recommending==',
      words: [
        ['🤔', 'What kind of sport do you like?', '', 'question', 'Bạn thích loại thể thao nào?', '– I like team sports.'],
        ['🗓️', 'When are you free?', '', 'question', 'Khi nào bạn rảnh?', '– On weekday evenings.'],
        ['👉', 'I think you should try …', '', 'recommending', 'Mình nghĩ bạn nên thử …', '**I think you should try** the karate club.'],
        ['💡', 'Why don’t you join …?', '', 'recommending', 'Sao bạn không tham gia …?', '**Why don’t you join** the swimming squad?'],
        ['✅', 'It’s perfect for you because …', '', 'reason', 'Nó rất hợp với bạn vì …', '**It’s perfect for you because** it’s for beginners.'],
        ['⚠️', 'The only problem is …', '', 'reason', 'Vấn đề duy nhất là …', '**The only problem is** it starts at 6 am.'],
        ['😀', 'That sounds great!', '', 'response', 'Nghe tuyệt đấy!', '– It’s free the first time. – **That sounds great!**'],
        ['🙅', 'I’m not sure. I’m not very good at …', '', 'response', 'Mình không chắc. Mình không giỏi …', '**I’m not sure. I’m not very good at** running.']] },
    { id: 'sp-wp', stage: 'speak', type: 'pairs', tag: 'Speaking · pre-speaking', title: 'Match the ==responses==', lead: 'Tap a line on the left, then tap the best response on the right.',
      right: ['I like team sports, like football.', 'On Saturday afternoons.', 'That sounds great! I’ll try it.', 'No, they lend you one.', 'I’m not sure. I can’t swim very well.', 'Yes, it’s 100,000 VND a month.', 'Congratulations! Well done!'],
      items: [
        { t: 'match', q: 'What kind of sport do you like?', a: 'I like team sports, like football.' },
        { t: 'match', q: 'When are you free?', a: 'On Saturday afternoons.' },
        { t: 'match', q: 'Why don’t you join Girls’ Football? The first session is free.', a: 'That sounds great! I’ll try it.' },
        { t: 'match', q: 'Do I need my own racket?', a: 'No, they lend you one.' },
        { t: 'match', q: 'I think you should try the Swimming Squad.', a: 'I’m not sure. I can’t swim very well.' },
        { t: 'match', q: 'Do I have to pay?', a: 'Yes, it’s 100,000 VND a month.' },
        { t: 'match', q: 'We won the match 3–0!', a: 'Congratulations! Well done!' }] },
    { id: 'sp-gap', stage: 'speak', type: 'gap', tag: 'Speaking · information gap', title: 'Club ==finder==', lead: 'Student A works at the sports centre and knows the clubs (Text 1). Student B has three friends who want a club. Ask and answer, then choose **the best club for each friend**.',
      roles: [
        { name: 'Student A', who: 'Sports centre: you know the four clubs in Text 1', icon: '🏢', info: ['Table Tennis: Mon & Wed 5–7 pm, indoor, racket lent, 80,000 VND.', 'Swimming Squad: Tue, Thu & Sat 6–7 am, must swim 200 m, 150,000 VND.', 'Girls’ Football: Sat 3–5 pm, outdoor, free first session, 100,000 VND.', 'Karate: Fri 6–7:30 pm, ages 12–16, uniform needed, 120,000 VND.'], ask: ['What does your first friend like?', 'When is he / she free?', 'How much can he / she pay?', 'Is he / she a beginner?'] },
        { name: 'Student B', who: 'Your three friends', icon: '🫂', info: ['Lan, 13: loves team sports, free on Saturdays, has 100,000 VND a month.', 'Minh, 15: complete beginner, free on Monday evenings, doesn’t have any equipment.', 'Huy, 14: swims very well, wants to enter competitions, can get up early.'], ask: ['Which club is good for team sports?', 'Which clubs meet on Monday?', 'Do I need any equipment?', 'Which club enters competitions?'] }],
      useful: ['What does … like?', 'When is … free?', 'I think … should try …', 'It’s perfect because …'],
      model: ['**A:** What does your first friend like?', '**B:** Lan loves team sports and she’s free on Saturdays. Which club is good for her?', '**A:** I think she should try Girls’ Football. It’s on Saturday afternoon and the first session is free.', '**B:** Perfect – it’s 100,000 VND and she has exactly that. Now Minh: he’s a beginner and he’s free on Monday evenings.', '**A:** Why doesn’t he join the Table Tennis Club? Beginners are welcome and we lend you a racket.', '**B:** Great! And Huy swims very well and wants to enter competitions.', '**A:** Then the Swimming Squad is perfect for him – but it starts at 6 am!'] },
    { id: 'sp-task', stage: 'speak', type: 'speak', tag: 'Speaking · role play', title: 'Recommend ==a club==', icon: '🏅',
      task: 'Student B is a **new student** at your school. Student A recommends **a sports club** (real or invented). Ask about B’s likes, free time and level, recommend **one club** with **two reasons**, and mention **one problem**. B decides. Then change roles.',
      steps: ['Ask what sports B likes and is good at.', 'Ask when B is free.', 'Recommend a club: I think you should try …', 'Give two reasons and one problem.', 'B decides and asks one more question.'],
      useful: ['What kind of sport do you like?', 'Are you good at …?', 'I think you should try …', 'It’s perfect for you because …', 'The only problem is …', 'That sounds great!'],
      timer: 150, record: true,
      model: ['**A:** Welcome to our school! Do you like sport?', '**B:** Yes, I love basketball, but I’m not very good at it.', '**A:** When are you free?', '**B:** On Tuesday and Thursday after school.', '**A:** I think you should try the basketball club. It’s perfect for you because it meets on Tuesdays and the coach is very encouraging.', '**B:** That sounds great! Is it expensive?', '**A:** No, it’s free for students. The only problem is the court is outdoor, so practice is cancelled when it rains.', '**B:** That’s OK. How do I join?'] },

    /* ---------- WRITING ---------- */
    { id: 'w-model', stage: 'write', type: 'read', tag: 'Writing · pre-writing', title: 'Look at ==a model invitation==', lead: 'Read the message. Answer the questions.', textTitle: 'Come and play table tennis!', textIcon: '🏓', numbered: false,
      text: ['Hi Minh, do you want to try something new? Why don’t you join our table tennis club at Riverside Sports Centre? We meet on Mondays and Wednesdays from 5 to 7 pm in the indoor hall. Don’t worry if you’re a beginner – our coach is really patient and they lend you a racket.', 'Last month our team took part in a school competition and we came second! It was so exciting. Membership is only 80,000 VND a month. Come with me next Monday and see!'],
      items: [
        { q: 'Which sentence invites Minh?', o: ['Why don’t you join our table tennis club', 'We meet on Mondays and Wednesdays', 'It was so exciting.'], a: 'Why don’t you join our table tennis club', ev: 'Why don’t you join our table tennis club at Riverside Sports Centre?' },
        { q: 'Which phrase from the Unit is used?', o: ['took part in', 'played well', 'scored a goal'], a: 'took part in', ev: 'Last month our team took part in a school competition' },
        { q: 'Which word-formation adjective is used?', o: ['exciting', 'famous', 'dangerous'], a: 'exciting', ev: 'It was so exciting.' },
        { q: 'Why shouldn’t Minh worry?', o: ['The coach is patient and they lend you a racket.', 'It is free.', 'There are no matches.'], a: 'The coach is patient and they lend you a racket.', ev: 'our coach is really patient and they lend you a racket' }] },
    { id: 'w-task', stage: 'write', type: 'write', tag: 'Writing · task', title: 'Write ==a club invitation==',
      task: 'Write a message (**70–90 words**) inviting a friend to join a sports club with you.',
      plan: ['Start with a question: Do you want to try …? / Why don’t you join …?', 'Say when and where the club meets.', 'Give two reasons why your friend will enjoy it.', 'Say something your team did (took part in, won, scored…).', 'Give the price and suggest a day to come.'],
      model: ['Come and play table tennis!', 'Hi Minh, do you want to try something new? Why don’t you join our table tennis club at Riverside Sports Centre? We meet on Mondays and Wednesdays from 5 to 7 pm in the indoor hall. Don’t worry if you’re a beginner – our coach is really patient and they lend you a racket.', 'Last month our team took part in a school competition and we came second! It was so exciting. Membership is only 80,000 VND a month. Come with me next Monday and see!'],
      checklist: ['I use at least five sport words from the Unit.', 'I use one sport phrase (take part in, win a match, go …-ing).', 'I use one word-formation word (exciting, winner, training…).', 'I give the day, time, place and price.', 'I invite my friend clearly.', 'My message has 70–90 words.'],
      min: 70, max: 90, draft: true },

    /* ---------- REVIEW ---------- */
    { id: 'u-check', stage: 'review', type: 'practice', tag: 'Review', title: 'Unit 9 ==check==', cols: true,
      items: [
        { q: 'The ___ told the players to train harder.', o: ['coach', 'fan', 'ticket'], a: 'coach' },
        { q: 'Thousands of fans were in the ___ .', o: ['stadium', 'racket', 'prize'], a: 'stadium' },
        { q: 'He ___ two goals in the final.', o: ['scored', 'won', 'threw'], a: 'scored' },
        { q: 'They ___ the match because of the storm.', o: ['cancelled', 'deserved', 'reached'], a: 'cancelled' },
        { q: 'I want to take part ___ the race.', o: ['in', 'on', 'at'], a: 'in' },
        { q: 'We ___ judo on Fridays.', o: ['do', 'play', 'go'], a: 'do' },
        { q: 'Let’s ___ skiing in Japan!', o: ['go', 'do', 'play'], a: 'go' },
        { q: 'She runs very ___ .', o: ['fast', 'strong', 'popular'], a: 'fast' },
        { q: 'I was so ___ before the final!', o: ['excited', 'exciting', 'excitement'], a: 'excited' },
        { q: 'The ___ gets a gold medal.', o: ['winner', 'win', 'loser'], a: 'winner' }] },
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Review', title: 'What can you ==do now==?',
      cando: ['I can name sports, people, places and equipment.', 'I can use sport verbs and phrases (score, catch, take part in, win a match).', 'I can describe sport with adjectives and adverbs.', 'I can build word families (excite → excitement → exciting / excited).', 'I can understand real speakers talk about sport.', 'I can recommend a sports club and write an invitation.'] }
  ]
};
