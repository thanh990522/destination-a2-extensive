/* Review 1 · Units 1, 2 and 3
   Book: Destination A2, Review 1, pages 16–17.
   Order: book Review exercises quoted exactly — vocabulary (A–C) → extra vocabulary challenge;
   grammar (D–F) → extra grammar challenge. Book numbering 1–50 is kept. One card = one slide. */
window.A2_UNITS[101] = {
  n: 101, type: 'Review', title: 'Units 1, 2 and 3',
  focus: 'Vocabulary and grammar review',
  book: 'Destination A2 · Review 1 · pages 16–17',
  goals: ['Check the vocabulary of Unit 3: family, people, phrases and word families.', 'Check the grammar of Units 1–2: present simple, present continuous, stative verbs, there is / there are, it’s.', 'Go further with extra challenge exercises after the book review.'],
  audio: {},
  stages: [
    { id: 'start', skill: 'start', icon: '🔁', name: 'Review 1', caption: 'Units 1, 2 and 3.' },
    { id: 'vocab', skill: 'vocab', icon: '📚', name: 'Vocabulary', caption: 'Book exercises A–C → extra vocabulary challenge.' },
    { id: 'grammar', skill: 'grammar', icon: '🧩', name: 'Grammar', caption: 'Book exercises D–F → extra grammar challenge.' },
    { id: 'review', skill: 'review', icon: '🏁', name: 'Finish', caption: 'Can-do list and homework.' }
  ],
  cards: [
    { id: 'cover', stage: 'start', type: 'cover', title: 'Review ==1==' },

    /* ---------- VOCABULARY: book A–C (p. 16), quoted exactly ---------- */
    { id: 'exA', stage: 'vocab', type: 'practice', book: 'A', page: 16, numStart: 1, tag: 'Vocabulary · book', title: 'Exercise ==A==', lead: 'Read the text below. Use the words in capitals at the ends of the lines to form words that fit the gaps grammatically and in meaning.', cols: true,
      items: [
        { q: 'Nikolai is fun to be with. He’s very ___ and clever.', a: 'friendly', hint: '**FRIEND**' },
        { q: 'He likes smiling and he’s never ___ .', a: 'unhappy', hint: '**HAPPY**' },
        { q: 'He enjoys sports, but he ___ dancing. He hates it!', a: 'dislikes', hint: '**LIKE**' },
        { q: 'He ___ plays tennis and basketball with his friends.', a: 'regularly', hint: '**REGULAR**' },
        { q: 'He’s also very ___ when his friends have problems with their homework.', a: 'helpful', hint: '**HELP**' },
        { q: 'I think he has a great ___ and he’s a true friend.', a: 'personality', hint: '**PERSON**' },
        { q: 'But sometimes his parents are angry about his room. His bedroom is always ___ .', a: 'messy', hint: '**MESS**' },
        { q: 'He realises that and he is ___ trying to change.', a: 'really', hint: '**REAL**' }] },
    { id: 'exB', stage: 'vocab', type: 'practice', book: 'B', page: 16, numStart: 9, tag: 'Vocabulary · book', title: 'Exercise ==B==', lead: 'Write one word in each gap.', cols: true,
      items: [
        { q: 'My sister really looks ___ our mother! She has the same eyes and hair!', a: 'like' },
        { q: 'Who does this tablet belong ___ ?', a: 'to' },
        { q: 'I’m thinking ___ learning another language. What do you think?', a: ['about', 'of'], show: 'about (or: of)' },
        { q: 'Joanna is right! I agree ___ her.', a: 'with' },
        { q: 'When I’m with my group ___ friends, I have a great time!', a: 'of' },
        { q: 'Ian is looking ___ Jo’s cat because she’s on holiday.', a: 'after' },
        { q: 'What job do you want to do when you grow ___ ?', a: 'up' },
        { q: 'I don’t get ___ well with my little brother.', a: 'on' },
        { q: 'Julia’s away on business ___ present.', a: 'at' },
        { q: 'What’s Ben talking ___ ? I don’t understand.', a: 'about' }] },
    { id: 'exC', stage: 'vocab', type: 'practice', book: 'C', page: 16, numStart: 19, tag: 'Vocabulary · book', title: 'Exercise ==C==', lead: 'Circle the correct answer.', cols: true,
      items: [
        { q: 'Our next door {neighbours|husbands} are very nice people. We like them a lot.', a: 'neighbours' },
        { q: 'Can I tell you a {surname|secret}? But please don’t tell anybody.', a: 'secret' },
        { q: 'My sister and I {annoy|share} the same bedroom.', a: 'share' },
        { q: 'I really {admire|realise} Sergei Bubka. He was a fantastic athlete!', a: 'admire' },
        { q: 'Kate and her sister {prefer|argue} all the time about clothes.', a: 'argue' },
        { q: 'My mother’s brother is my favourite {aunt|uncle}.', a: 'uncle' },
        { q: 'My best friend and I have {similar|alike} hobbies.', a: 'similar' },
        { q: 'Bob is very {clever|lazy}! He doesn’t like working at all!', a: 'lazy' }] },

    /* ---------- VOCABULARY: extra challenge ---------- */
    { id: 'xv1', stage: 'vocab', type: 'cloze', tag: 'Extra · vocabulary challenge', title: 'Extra 1: ==word families== in a text', lead: 'Change the word in brackets so that it fits the gap. Some answers need a prefix (un-, dis-) or a suffix (-ship, -ment, -tion, -ness, -ly, -ful).',
      textTitle: 'My best friend, Mai',
      text: 'Mai and I have a very strong [1] . We met in Year 1, and we’re still best friends. Mai is a very [2] person – she always says hello to everyone, even people she doesn’t know. She’s also very [3] . When I can’t do my maths homework, she explains it to me [4] .\n\nOf course, we aren’t the same. Mai’s desk is always tidy, but mine is very [5] ! We sometimes have a [6] about music, because I love K-pop and she [7] it. But we never stay angry for long. In fact, it’s hard to give a good [8] of her, because there’s so much to say. [9] , I think her [10] is the best thing about her: she smiles all the time.',
      items: [{ a: 'friendship', hint: 'FRIEND' }, { a: 'friendly', hint: 'FRIEND' }, { a: 'helpful', hint: 'HELP' }, { a: 'patiently', hint: 'PATIENT' }, { a: ['untidy', 'messy'], show: 'untidy', hint: 'TIDY' }, { a: ['disagreement', 'discussion'], show: 'disagreement', hint: 'AGREE' }, { a: 'dislikes', hint: 'LIKE' }, { a: 'description', hint: 'DESCRIBE' }, { a: 'Personally', hint: 'PERSON' }, { a: 'happiness', hint: 'HAPPY' }] },
    { id: 'xv2', stage: 'vocab', type: 'practice', tag: 'Extra · vocabulary challenge', title: 'Extra 2: ==tricky words==', lead: 'Choose the correct answer. Be careful: the options are close in meaning.', cols: true,
      items: [
        { q: 'Tom and his brother look so ___ that people can’t tell them apart.', o: ['alike', 'like', 'similar', 'same'], a: 'alike' },
        { q: 'My aunt ___ three children on her own after my uncle died.', o: ['brought up', 'grew up', 'looked like', 'got on'], a: 'brought up' },
        { q: 'I ___ my best friend a lot since she moved to Canada.', o: ['miss', 'lose', 'wave', 'wonder'], a: 'miss' },
        { q: 'We ___ go to the cinema – maybe twice a year.', o: ['rarely', 'regularly', 'often', 'usually'], a: 'rarely' },
        { q: 'Mr Lâm is ___ to a doctor. Her name is Hạnh.', o: ['married', 'similar', 'special', 'related'], a: 'married' },
        { q: 'What’s going ___? Why is everyone shouting?', o: ['on', 'up', 'after', 'with'], a: 'on' },
        { q: 'After the holiday, she looked very ___ and healthy.', o: ['tanned', 'pale', 'skinny', 'overweight'], a: 'tanned' },
        { q: 'I ___ that I left my phone at home when I got to school.', o: ['realised', 'admired', 'believed', 'shared'], a: 'realised' },
        { q: 'Please don’t ___ your brother while he’s studying.', o: ['annoy', 'argue', 'fight', 'chat'], a: 'annoy' },
        { q: 'Ben is very ___: he finished the puzzle in two minutes!', o: ['clever', 'lazy', 'married', 'slim'], a: 'clever' }] },
    { id: 'xv3', stage: 'vocab', type: 'practice', tag: 'Extra · vocabulary challenge', title: 'Extra 3: ==say it another way==', lead: 'Complete the second sentence so that it means the same as the first. Use the word in capitals. Write **two to four words**.', cols: true,
      items: [
        { q: 'My cousin and I have a good relationship. → My cousin and I ___ well.', hint: '**ON**', a: ['get on', 'get on very', 'get on really'], show: 'get on' },
        { q: 'Lisa and her mother have the same face. → Lisa ___ her mother.', hint: '**LIKE**', a: ['looks like', 'looks just like', 'looks exactly like'], show: 'looks like' },
        { q: 'My grandparents raised me. → My grandparents ___ me.', hint: '**UP**', a: ['brought up', 'brought me up'], show: 'brought up' },
        { q: 'I don’t have any brothers or sisters. → I’m ___ child.', hint: '**ONLY**', a: ['an only'], show: 'an only' },
        { q: 'This phone is Tom’s. → This phone ___ Tom.', hint: '**BELONGS**', a: ['belongs to'], show: 'belongs to' },
        { q: 'Right now, my sister is living in Đà Nẵng. → ___ , my sister is living in Đà Nẵng.', hint: '**PRESENT**', a: ['At present'], show: 'At present' },
        { q: 'I have the same opinion as you. → I ___ you.', hint: '**AGREE**', a: ['agree with'], show: 'agree with' },
        { q: 'Grandma takes care of my baby sister. → Grandma ___ my baby sister.', hint: '**AFTER**', a: ['looks after'], show: 'looks after' },
        { q: 'I don’t like doing housework. → I ___ doing housework.', hint: '**DISLIKE**', a: ['dislike'], show: 'dislike' },
        { q: 'We enjoyed the party a lot. → We ___ at the party.', hint: '**TIME**', a: ['had a great time', 'had a good time', 'had a really good time', 'had a really great time', 'had a fantastic time'], show: 'had a great time' }] },

    /* ---------- GRAMMAR: book D–F (p. 17), quoted exactly ---------- */
    { id: 'exD', stage: 'grammar', type: 'practice', book: 'D', page: 17, numStart: 27, tag: 'Grammar · book', title: 'Exercise ==D==', lead: 'Read the text below. Use the words in capitals at the ends of the lines to form words that fit the text grammatically. Fill the gaps with these words.', cols: true,
      items: [
        { q: 'The painting *At the Dressing-Table* is by Zinaida Serebriakova. The woman in the picture ___ long, dark hair.', a: 'has', hint: '**HAVE**' },
        { q: 'In the painting, she ___ in the mirror.', a: ['is looking', '’s looking'], hint: '**LOOK**' },
        { q: 'She looks happy and she ___ .', a: ['is smiling', '’s smiling'], hint: '**SMILE**' },
        { q: 'There ___ some things on the table in front of her.', a: 'are', hint: '**BE**' },
        { q: 'She ___ a beautiful white dress.', a: ['is wearing', '’s wearing'], hint: '**WEAR**' },
        { q: 'She ___ her long, dark hair.', a: ['is brushing', '’s brushing'], hint: '**BRUSH**' },
        { q: 'There ___ any other people in the room with her.', a: ['aren’t', 'are not'], hint: '**NOT BE**' },
        { q: 'My sister ___ this painting.', a: 'loves', hint: '**LOVE**' }] },
    { id: 'exE', stage: 'grammar', type: 'practice', book: 'E', page: 17, numStart: 35, tag: 'Grammar · book', title: 'Exercise ==E==', lead: 'Choose the correct answer.', cols: true, abc: true,
      items: [
        { q: 'Piotr ___ to his best friend today because he’s angry with him.', o: ['doesn’t talk', 'isn’t talk', 'isn’t talking'], a: 'isn’t talking' },
        { q: 'Natasha ___ late for school.', o: ['often is', 'is often', 'often is being'], a: 'is often' },
        { q: 'My cousins ___ near our flat.', o: ['don’t live', 'doesn’t live', 'aren’t living'], a: 'don’t live' },
        { q: 'Nick and his friend ___ playing football after school.', o: ['are preferring', 'prefers', 'prefer'], a: 'prefer' },
        { q: 'Danny ___ blue eyes and light hair.', o: ['is having', 'has', 'have'], a: 'has' },
        { q: '___ some cake for all of us.', o: ['It is', 'Is', 'There is'], a: 'There is' },
        { q: 'Ron ___ horror films.', o: ['never watches', 'watch never', 'never watch'], a: 'never watches' },
        { q: 'There are some books on the table. ___ my brother’s.', o: ['There are', 'They are', 'These are'], a: 'They are' }] },
    { id: 'exF', stage: 'grammar', type: 'practice', book: 'F', page: 17, numStart: 43, tag: 'Grammar · book', title: 'Exercise ==F==', lead: 'Complete the sentences with the verb in the appropriate form.', cols: true,
      items: [
        { q: 'Rachel can’t talk to you now. She ___ a shower.', a: ['is having', '’s having'], hint: '**(have)**' },
        { q: 'Mmmm! This soup ___ fantastic!', a: 'smells', hint: '**(smell)**' },
        { q: 'I ___ that’s a good idea.', a: ['don’t think', 'do not think'], hint: '**(not / think)**' },
        { q: 'Don’t speak so fast. Yuri ___ you.', a: ['doesn’t understand', 'does not understand'], hint: '**(not / understand)**' },
        { q: 'Where ___ ? Can I go with them?', a: ['are my brothers going'], hint: '**(my brothers / go)**' },
        { q: 'Liam ___ in ghosts.', a: 'believes', hint: '**(believe)**' },
        { q: 'What languages ___ ?', a: 'do you speak', hint: '**(you / speak)**' },
        { q: 'Janina and Kim ___ their homework right now.', a: ['aren’t doing', 'are not doing'], hint: '**(not / do)**' }] },

    /* ---------- GRAMMAR: extra challenge ---------- */
    { id: 'xg1', stage: 'grammar', type: 'cloze', tag: 'Extra · grammar challenge', title: 'Extra 1: ==simple or continuous?==', lead: 'Put the verbs in the present simple or the present continuous. Some verbs are stative.',
      textTitle: 'Hi Lan,',
      text: 'I [1] to you from my grandparents’ farm! I usually [2] my summers in the city, but this year my parents [3] abroad, so I [4] here for a month. There [5] three cows, two dogs and lots of chickens.\n\nEvery morning, Grandpa [6] at five o’clock. Right now he [7] the chickens and I [8] breakfast on the porch. The bread here [9] delicious! To be honest, I [10] the city at all. [11] your holiday?\n\nLove,\nHà',
      items: [
        { a: ['am writing', '’m writing'], hint: 'write' }, { a: 'spend', hint: 'spend' }, { a: ['are working', '’re working'], hint: 'work' }, { a: ['am staying', '’m staying'], hint: 'stay' },
        { a: 'are', hint: 'be' }, { a: 'gets up', hint: 'get up' }, { a: ['is feeding', '’s feeding'], hint: 'feed' }, { a: ['am having', '’m having'], hint: 'have' },
        { a: 'tastes', hint: 'taste' }, { a: ['don’t miss', 'do not miss'], hint: 'not miss' }, { a: 'Are you enjoying', hint: 'you / enjoy' }] },
    { id: 'xg2', stage: 'grammar', type: 'practice', tag: 'Extra · grammar challenge', title: 'Extra 2: ==find the mistake==', lead: 'Each sentence has **one** mistake. Write the correct words.', cols: true,
      items: [
        { t: 'error', q: 'My sister don’t like coffee.', a: ['doesn’t like', 'does not like', 'My sister doesn’t like coffee.'], show: 'My sister **doesn’t like** coffee.' },
        { t: 'error', q: 'I’m not understanding this question.', a: ['don’t understand', 'do not understand', 'I don’t understand this question.'], show: 'I **don’t understand** this question.' },
        { t: 'error', q: 'Where you are going now?', a: ['are you going', 'Where are you going now?'], show: 'Where **are you going** now?' },
        { t: 'error', q: 'It’s a cat under the table.', a: ['There’s', 'There is', 'There’s a cat under the table.', 'There is a cat under the table.'], show: '**There’s** a cat under the table.' },
        { t: 'error', q: 'He watchs TV every evening.', a: ['watches', 'He watches TV every evening.'], show: 'He **watches** TV every evening.' },
        { t: 'error', q: 'Look! The baby sleeps on the sofa.', a: ['is sleeping', '’s sleeping', 'The baby is sleeping on the sofa.'], show: 'Look! The baby **is sleeping** on the sofa.' },
        { t: 'error', q: 'There is two banks in my street.', a: ['There are', 'are', 'There are two banks in my street.'], show: '**There are** two banks in my street.' },
        { t: 'error', q: 'My brother is having a new bike.', a: ['has', 'My brother has a new bike.'], show: 'My brother **has** a new bike.' },
        { t: 'error', q: 'Mai studys English on Mondays.', a: ['studies', 'Mai studies English on Mondays.'], show: 'Mai **studies** English on Mondays.' },
        { t: 'error', q: 'We go always to the beach in July.', a: ['always go', 'We always go to the beach in July.'], show: 'We **always go** to the beach in July.' }] },
    { id: 'xg3', stage: 'grammar', type: 'practice', tag: 'Extra · grammar challenge', title: 'Extra 3: ==ask the question==', lead: 'Write the question for the answer in **bold**.', cols: true,
      items: [
        { t: 'write', q: 'Tom lives **in London**.', a: ['Where does Tom live?'] },
        { t: 'write', q: 'They’re watching **a horror film** now.', a: ['What are they watching now?', 'What are they watching?'], show: 'What are they watching (now)?' },
        { t: 'write', q: 'She gets up **at six o’clock**.', a: ['What time does she get up?', 'When does she get up?'], show: 'What time does she get up?' },
        { t: 'write', q: '**My dad** usually cooks dinner.', a: ['Who usually cooks dinner?', 'Who cooks dinner?'], show: 'Who usually cooks dinner?' },
        { t: 'write', q: 'There are **thirty** students in my class.', a: ['How many students are there in your class?', 'How many students are in your class?'], show: 'How many students are there in your class?' },
        { t: 'write', q: 'I’m wearing a jacket **because it’s cold**.', a: ['Why are you wearing a jacket?'] },
        { t: 'write', q: 'He visits his grandparents **every Sunday**.', a: ['How often does he visit his grandparents?', 'When does he visit his grandparents?'], show: 'How often / When does he visit his grandparents?' },
        { t: 'write', q: 'This bike belongs **to my cousin**.', a: ['Who does this bike belong to?', 'Who does the bike belong to?', 'Whose bike is this?'], show: 'Who does this bike belong to?' },
        { t: 'write', q: 'She speaks **three** languages.', a: ['How many languages does she speak?'] },
        { t: 'write', q: '**Yes, he does.** He plays the guitar every day.', a: ['Does he play the guitar?', 'Does he play the guitar every day?'], show: 'Does he play the guitar (every day)?' }] },

    /* ---------- FINISH ---------- */
    { id: 'u-wrap', stage: 'review', type: 'wrap', tag: 'Finish', title: 'How did you ==do==?',
      cando: ['I can use family and people words, phrases and phrasal verbs from Unit 3.', 'I can build word families with prefixes and suffixes.', 'I can choose between the present simple and the present continuous.', 'I can use stative verbs, there is / there are and it’s correctly.', 'I can ask questions in the present simple and the present continuous.'],
      extra: 'Book score: count your correct answers in A–F (**/50**). The homework has **50 vocabulary** and **50 grammar** questions.' }
  ]
};
