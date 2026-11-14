/* Original teaching activities aligned to the supplied Destination A2, Unit 1. */
window.UNIT1 = {
  id: 'unit-1', number: 1, title: 'My day, my neighbourhood',
  subtitle: "Present simple · there is / there are · it’s",
  book: 'Destination A2, Unit 1, printed pages 6–8',
  goals: ['Talk about routines and ask follow-up questions.', 'Describe places with there is and there are.', 'Use it for weather, time, distance and situations.', 'Understand two real conversations and write a friendly message.'],
  stages: [
    {id:'start',icon:'👋',name:'Welcome',caption:'A real reason to speak'},
    {id:'routines',icon:'☀️',name:'Everyday language',caption:'Words, chunks and practice'},
    {id:'simple',icon:'🧩',name:'Present simple',caption:'Learn it. Use it. Say it.'},
    {id:'listen1',icon:'🎧',name:'Listening: My Day',caption:'Natalie and Todd'},
    {id:'places',icon:'🏡',name:'Places around me',caption:'There is / there are'},
    {id:'listen2',icon:'🎧',name:'Listening: My Hometown',caption:'Sarah and John'},
    {id:'read',icon:'📖',name:'It’s… and reading',caption:'A message from Linh'},
    {id:'speak',icon:'💬',name:'Speaking workshop',caption:'A new neighbour'},
    {id:'write',icon:'✍️',name:'Writing and review',caption:'Your final message'}
  ],
  audio: {
    day:{title:'My Day',speakers:'Natalie and Todd',track:'492104013',level:'A2',source:'https://elllo.org/english/1551/1554-Nat-Verbs-Schedule.htm',src:'https://elllo.org/Audio/A1551/1554-Nat-Verbs-Schedule.mp3',brief:'Listen to Natalie describe an ordinary day. First listen for the main idea. Then listen again for details.',notes:'The opening covers waking and getting up. The next part covers breakfast. Then Natalie describes school. The ending covers evening habits.',warning:'You may hear unfamiliar food and entertainment words. You only need the details in the questions.'},
    town:{title:'My Hometown',speakers:'Sarah and John',track:'501477024',level:'A2',source:'https://www.elllo.org/english/1551/1571-Sarah-There-is-are-Hometowns.htm',src:'https://www.elllo.org/Audio/A1551/1571-John-There-is-are-Hometowns.mp3',brief:'Listen to Sarah describe her hometown. Identify the main idea, then listen for places and seasons.',notes:'Sarah describes entertainment and food first. She then talks about outdoor activities, the seasons and family life.',warning:'In casual speech, speakers sometimes use there’s before a plural noun. In our practice, use there are with plurals.'}
  },
  slides: [
    {id:'welcome',stage:'start',kind:'cover',tag:'UNIT 01',title:'My day, my neighbourhood',lead:'Meet someone new. Find out about their life. Make a plan together.',image:'assets/neighbourhood.webp',goals:true},
    {id:'warm-up',stage:'start',kind:'talk',tag:'SPEAKING · WARM-UP',title:'A little about you',lead:'Look at the illustration. Work with a partner. Give one extra detail in every answer.',prompts:[
      ['What do you do every morning?','I have breakfast at home. I usually have bread and eggs.'],
      ['What places are near your home?','There is a park near my home. I walk there in the evening.'],
      ['What do you like about your neighbourhood?','I like the cafés. There are two small cafés near my flat.']
    ],note:'These are possible answers. Your answers can be different.'},

    {id:'daily-words',stage:'routines',kind:'vocab',tag:'SUPPORT VOCABULARY · WORDS',title:'Words for everyday life',lead:'Read each word. Say it aloud. Make a short sentence. Practise these words on the next card.',words:[
      ['☕','breakfast','/ˈbrekfəst/','bữa sáng','Breakfast is at seven.'],['🏫','school','/skuːl/','trường học','My school is near home.'],['💼','work','/wɜːk/','làm việc','I work in a shop.'],['📚','study','/ˈstʌdi/','học','I study English.'],['🏠','live','/lɪv/','sống','I live in a flat.'],['🌙','evening','/ˈiːvnɪŋ/','buổi tối','I read in the evening.']
    ],note:'These support words prepare you for the new skills tasks. Unit 1 in the book focuses on grammar.'},
    {id:'daily-practice',stage:'routines',kind:'quiz',tag:'PRACTICE · WORDS',title:'Use the words now',lead:'Complete each sentence with one word from the previous card.',questions:[
      {id:'v1',text:'The first meal of the day is ___.',answer:'breakfast'},
      {id:'v2',text:'I ___ in a flat near the park.',answer:'live'},
      {id:'v3',text:'I ___ English with my teacher.',answer:'study'},
      {id:'v4',text:'After dinner, I read in the ___.',answer:'evening'}
    ]},
    {id:'daily-chunks',stage:'routines',kind:'vocab',tag:'SUPPORT VOCABULARY · CHUNKS',title:'Useful everyday chunks',lead:'Learn the whole chunk. Say one true sentence about yourself.',words:[
      ['⏰','wake up','/weɪk ʌp/','tỉnh giấc','I wake up at six.'],['🛏️','get up','/ɡet ʌp/','ra khỏi giường','I get up at six thirty.'],['🍳','have breakfast','/hæv ˈbrekfəst/','ăn sáng','I have breakfast at home.'],['📱','check my emails','/tʃek maɪ ˈiːmeɪlz/','kiểm tra email','I check my emails after breakfast.'],['📰','read the news','/riːd ðə njuːz/','đọc tin tức','I read the news on my phone.'],['🌜','go to bed','/ɡəʊ tə bed/','đi ngủ','I go to bed at ten.']
    ],note:'Wake up means stop sleeping. Get up means leave your bed.'},
    {id:'chunk-practice',stage:'routines',kind:'quiz',tag:'PRACTICE · CHUNKS',title:'One chunk at a time',lead:'Complete each chunk with one word.',questions:[
      {id:'c1',text:'I wake ___ at six, but I stay in bed until six thirty.',answer:'up'},
      {id:'c2',text:'I ___ breakfast before I leave home.',answer:'have'},
      {id:'c3',text:'I ___ my emails on my phone.',answer:'check'},
      {id:'c4',text:'At ten at night, I go to ___.',answer:'bed'}
    ],transfer:'Tell your partner about your morning. Use at least three chunks.'},

    {id:'simple-positive',stage:'simple',kind:'grammar',tag:'GRAMMAR 01 · PRESENT SIMPLE',title:'Every day, every week',lead:'Use the present simple for routines, usual situations, states and general facts.',rules:[
      ['I / you / we / they + verb','I live near the park. We study English.','Với I/you/we/they, dùng động từ nguyên mẫu.'],
      ['He / she / it + verb-s / -es','She works at a school. He watches TV.','Ngôi thứ ba số ít: thêm -s hoặc -es.'],
      ['Some useful spelling changes','study → studies · go → goes · have → has','Phụ âm + y: đổi y thành -ies. Have đổi thành has.']
    ],examples:['Routine: She walks to school every day.','Usual situation: My brother lives in a flat.','State: I like this neighbourhood.','General fact: The sun rises in the east.']},
    {id:'simple-positive-practice',stage:'simple',kind:'quiz',tag:'PRACTICE · PRESENT SIMPLE',title:'The right verb form',lead:'Use the verb in brackets. Write only the missing word.',questions:[
      {id:'g1',text:'My sister ___ English every evening. (study)',answer:'studies',why:'She/he/it + studies. A consonant + y changes to -ies.'},
      {id:'g2',text:'We ___ near a small café. (live)',answer:'live',why:'We takes the base verb.'},
      {id:'g3',text:'Minh ___ to work by bus. (go)',answer:'goes',why:'Minh is one person. Use goes.'},
      {id:'g4',text:'My dad ___ breakfast at seven. (have)',answer:'has',why:'He/she/it takes has.'}
    ],transfer:'Say one sentence about yourself. Your partner reports it with he or she.'},
    {id:'simple-questions',stage:'simple',kind:'grammar',tag:'GRAMMAR 02 · NEGATIVES AND QUESTIONS',title:'Ask about someone’s life',rules:[
      ['I / you / we / they + don’t + base verb',"I don’t drink coffee.",'Dùng don’t + động từ nguyên mẫu.'],
      ['He / she / it + doesn’t + base verb',"She doesn’t work on Sunday.",'Sau doesn’t, động từ không thêm -s.'],
      ['Do / Does + subject + base verb?', 'Do you study here? Does she live nearby?','Dùng Do với I/you/we/they, Does với he/she/it.'],
      ['Question word + do / does + subject + base verb?', 'What time do you get up? Where does he work?','Từ để hỏi đứng trước do/does.']
    ],examples:["Do you work here? Yes, I do. / No, I don’t.","Does Mai study here? Yes, she does. / No, she doesn’t."]},
    {id:'simple-question-practice',stage:'simple',kind:'quiz',tag:'PRACTICE · QUESTIONS',title:'A good question gets you talking',lead:'Choose the correct form or complete the short answer.',questions:[
      {id:'g5',text:'___ your brother work in a café?',options:['Do','Does','Is'],answer:'Does'},
      {id:'g6',text:'Where ___ you live?',options:['do','does','are'],answer:'do'},
      {id:'g7',text:'Mai doesn’t ___ coffee.',options:['drinks','drink','drinking'],answer:'drink'},
      {id:'g8',text:'Does Ben live here? No, he ___.',answer:["doesn't",'does not']}
    ],transfer:'Ask a partner two real questions. Ask What about you? to keep talking.'},
    {id:'frequency',stage:'simple',kind:'grammar',tag:'GRAMMAR 03 · FREQUENCY',title:'How often?',rules:[
      ['always · usually · often · sometimes · rarely · never','I usually have breakfast at home.','Trạng từ tần suất thường đứng trước động từ chính.'],
      ['Subject + be + frequency adverb','She is often tired in the evening.','Với động từ be, trạng từ tần suất thường đứng sau be.'],
      ['at seven · on Mondays · every day · at weekends','We study on Mondays.','Cụm thời gian thường ở đầu hoặc cuối câu. Never đã mang nghĩa phủ định.']
    ],examples:['always ≈ every time','sometimes ≈ on some occasions','never ≈ at no time'],note:'Frequency words describe habits. They do not give exact percentages.'},
    {id:'frequency-practice',stage:'simple',kind:'quiz',tag:'PRACTICE · FREQUENCY',title:'Put the words in order',lead:'Write a complete sentence. Start with the capital letter.',questions:[
      {id:'f1',text:'I / usually / check / my emails / after breakfast',answer:'I usually check my emails after breakfast.'},
      {id:'f2',text:'She / is / often / tired / in the evening',answer:'She is often tired in the evening.'},
      {id:'f3',text:'My brother / never / drinks / coffee',answer:'My brother never drinks coffee.'}
    ],transfer:'Say two true habits and one false habit. Your partner guesses the false one.'},
    {id:'be-do',stage:'simple',kind:'grammar',tag:'GRAMMAR 04 · BE AND OTHER VERBS',title:'Are you…? or Do you…?',rules:[
      ['be: am / is / are','I am a student. She is friendly. They are at home.','Be dùng với danh từ, tính từ hoặc thông tin vị trí.'],
      ['be questions: move be before the subject','Are you a student? Is she tired?','Câu hỏi với be không dùng do/does.'],
      ['other verbs: use do / does for questions','Do you work here? Does he have a bike?','Với động từ thường, dùng do/does. Have: I have, she has, does she have?']
    ]},
    {id:'be-do-practice',stage:'simple',kind:'quiz',tag:'PRACTICE · BE OR DO',title:'Keep the pattern clear',questions:[
      {id:'b1',text:'___ you a teacher?',options:['Are','Do','Does'],answer:'Are'},
      {id:'b2',text:'___ your friend have a bike?',options:['Is','Do','Does'],answer:'Does'},
      {id:'b3',text:'My classmates ___ very friendly.',options:['is','are','do'],answer:'are'},
      {id:'b4',text:'She ___ tired after work.',options:['is','does','be'],answer:'is'}
    ]},
    {id:'sounds',stage:'simple',kind:'grammar',tag:'SPEAKING · PRONUNCIATION',title:'The little ending matters',lead:'Say the words aloud. Touch your throat to feel a voiced sound. Listen to your teacher, then repeat.',rules:[
      ['/s/ after sounds such as /p/, /t/, /k/','works · gets · likes','Sau âm vô thanh như /p, t, k/, đuôi -s đọc là /s/.'],
      ['/z/ after vowels and most voiced sounds','lives · reads · goes','Sau nguyên âm và đa số âm hữu thanh, đuôi -s đọc là /z/.'],
      ['/ɪz/ after /s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/','watches · finishes · changes','Sau các âm này, thêm một âm tiết /ɪz/.']
    ],examples:['She works here.','He lives near me.','She watches TV.']},
    {id:'sound-practice',stage:'simple',kind:'quiz',tag:'PRACTICE · PRONUNCIATION',title:'Say it, then choose',questions:[
      {id:'p1',text:'The ending in works sounds like…',options:['/s/','/z/','/ɪz/'],answer:'/s/'},
      {id:'p2',text:'The ending in goes sounds like…',options:['/s/','/z/','/ɪz/'],answer:'/z/'},
      {id:'p3',text:'The ending in watches sounds like…',options:['/s/','/z/','/ɪz/'],answer:'/ɪz/'}
    ]},

    {id:'listen-day-words',stage:'listen1',kind:'vocab',tag:'BEFORE LISTENING · NEW LANGUAGE',title:'Ready for Natalie’s day',lead:'Learn the key words before you listen. The other new words are optional for understanding the main idea.',words:[
      ['🌄','a morning person','/ə ˈmɔːnɪŋ ˈpɜːsn/','người thích dậy sớm','I am a morning person.'],['👩‍🏫','lesson','/ˈlesn/','tiết học, bài học','Our lesson starts at nine.'],['🕛','noon','/nuːn/','12 giờ trưa','We have lunch at noon.'],['🍽️','canteen','/kænˈtiːn/','căng tin','We eat in the school canteen.'],['😴','tired','/ˈtaɪəd/','mệt','I am tired after work.'],['🍫','hot chocolate','/hɒt ˈtʃɒklət/','sô cô la nóng','I have hot chocolate at breakfast.']
    ]},
    {id:'listen-day-word-practice',stage:'listen1',kind:'quiz',tag:'PRACTICE · BEFORE LISTENING',title:'Check the key language',questions:[
      {id:'ldv1',text:'Twelve o’clock in the middle of the day is ___.',answer:'noon'},
      {id:'ldv2',text:'Students can eat lunch in the school ___.',answer:'canteen'},
      {id:'ldv3',text:'Someone who likes early mornings is a morning ___.',answer:'person'}
    ]},
    {id:'listen-day-gist',stage:'listen1',kind:'quiz',tag:'LISTENING 01 · MAIN IDEA',title:'A real conversation: My Day',audio:'day',lead:'Listen once without reading the transcript. Choose the main topic.',questions:[
      {id:'ld1',text:'Natalie mainly describes her…',options:['ordinary daily life','holiday plans','new neighbourhood'],answer:'ordinary daily life',why:'She moves through the parts of her day.'}
    ]},
    {id:'listen-day-detail',stage:'listen1',kind:'quiz',tag:'LISTENING 01 · DETAILS 1',title:'Listen for the details',audio:'day',lead:'Listen again. Choose the answer. The questions follow the recording.',questions:[
      {id:'ld2',text:'Natalie wakes at about…',options:['6 a.m.','7 a.m.','8 a.m.'],answer:'7 a.m.',why:'Opening: she wakes at seven, but stays in bed longer.'},
      {id:'ld3',text:'Her morning drink is…',options:['tea','coffee','hot chocolate'],answer:'hot chocolate',why:'Breakfast section: she prefers a chocolate drink.'}
    ]},
    {id:'listen-day-detail-b',stage:'listen1',kind:'quiz',tag:'LISTENING 01 · DETAILS 2',title:'School and evenings',audio:'day',lead:'Continue listening. Choose the best answer.',questions:[
      {id:'ld4',text:'School lessons begin at about…',options:['8 a.m.','9 a.m.','10 a.m.'],answer:'9 a.m.',why:'School section: classes begin at nine.'},
      {id:'ld5',text:'Most nights, she goes to bed at around…',options:['9 p.m.','10 p.m.','midnight'],answer:'10 p.m.',why:'Ending: the later bedtime is for some weekends.'}
    ],note:'Use the source transcript after your second attempt to check what you hear.'},
    {id:'listen-to-speaking',stage:'listen1',kind:'talk',tag:'LISTENING TO SPEAKING',title:'Your day and her day',lead:'Ask and answer. Use a full answer, one extra detail and one follow-up question.',prompts:[
      ['Are you a morning person? Why?','Yes, I am. I usually get up at six. What time do you get up?'],
      ['What do you usually drink at breakfast?','I usually drink milk. I don’t drink coffee. What about you?'],
      ['What is different about your day?','Natalie starts work at nine. I start at eight.']
    ]},

    {id:'place-words',stage:'places',kind:'vocab',tag:'SUPPORT VOCABULARY · PLACES',title:'Places near home',words:[
      ['🌳','park','/pɑːk/','công viên','There is a park near my home.'],['☕','café','/ˈkæfeɪ/','quán cà phê','There are two cafés on my street.'],['📚','library','/ˈlaɪbrəri/','thư viện','I study at the library.'],['🎬','cinema','/ˈsɪnəmə/','rạp chiếu phim','The cinema opens at ten.'],['🛒','supermarket','/ˈsuːpəmɑːkɪt/','siêu thị','We shop at the supermarket.'],['🚌','bus stop','/ˈbʌs stɒp/','trạm xe buýt','The bus stop is near the café.']
    ]},
    {id:'place-word-practice',stage:'places',kind:'quiz',tag:'PRACTICE · PLACES',title:'Where do you go?',questions:[
      {id:'pv1',text:'You borrow books from a ___.',options:['library','cinema','bus stop'],answer:'library'},
      {id:'pv2',text:'You watch a film at a ___.',options:['park','cinema','supermarket'],answer:'cinema'},
      {id:'pv3',text:'You wait for a bus at a ___.',answer:'bus stop'},
      {id:'pv4',text:'You buy food for home at a ___.',options:['cinema','library','supermarket'],answer:'supermarket'}
    ]},
    {id:'there',stage:'places',kind:'grammar',tag:'GRAMMAR 05 · THERE IS / THERE ARE',title:'What is near your home?',rules:[
      ['There is + a / an + singular noun','There is a park near my home.','Dùng there is với danh từ đếm được số ít.'],
      ['There are + plural noun','There are two cafés on my street.','Dùng there are với danh từ số nhiều.'],
      ['There isn’t… / There aren’t…',"There isn’t a cinema. There aren’t any parks.",'Phủ định: there isn’t / there aren’t. Any thường dùng trong câu hỏi và phủ định với danh từ số nhiều.'],
      ['Is there…? / Are there…?', 'Is there a library? Are there any cafés?','Đảo is/are lên trước there. Trả lời: Yes, there is/are. No, there isn’t/aren’t.']
    ]},
    {id:'there-practice',stage:'places',kind:'quiz',tag:'PRACTICE · THERE IS / THERE ARE',title:'Describe the neighbourhood',questions:[
      {id:'t1',text:'There ___ a bus stop near my home.',options:['is','are','do'],answer:'is'},
      {id:'t2',text:'There ___ two cafés on my street.',options:['is','are','does'],answer:'are'},
      {id:'t3',text:'___ there a cinema near your school?',options:['Is','Are','Does'],answer:'Is'},
      {id:'t4',text:'Are there any parks? No, there ___.',answer:["aren't",'are not']}
    ],transfer:'Tell your partner about one place you have and one place you do not have near home.'},
    {id:'there-it-they',stage:'places',kind:'grammar',tag:'GRAMMAR 06 · KEEP TALKING',title:'Introduce it. Say more about it.',rules:[
      ['First mention: there is / there are','There is a café near my home.','There is/are giới thiệu sự tồn tại của người hoặc vật.'],
      ['Next mention: it / they','It is small. It opens at seven.','Khi nói tiếp về danh từ số ít vừa nhắc, dùng it.'],
      ['Plural: they','There are two parks. They are quiet.','Khi nói tiếp về danh từ số nhiều vừa nhắc, dùng they.']
    ]},
    {id:'there-reference-practice',stage:'places',kind:'quiz',tag:'PRACTICE · IT AND THEY',title:'Connect your ideas',questions:[
      {id:'ref1',text:'There is a library near my flat. ___ is quiet.',options:['It','They','There'],answer:'It'},
      {id:'ref2',text:'There are two cafés. ___ open at seven.',options:['It','They','There'],answer:'They'},
      {id:'ref3',text:'___ a new supermarket on our street.',options:["There’s","It’s","They’re"],answer:'There’s'}
    ]},

    {id:'hometown-words',stage:'listen2',kind:'vocab',tag:'BEFORE LISTENING · NEW LANGUAGE',title:'Ready for Sarah’s hometown',lead:'Learn these words before the second conversation. Cinema and movie theatre mean the same thing.',words:[
      ['🏙️','hometown','/ˈhəʊmtaʊn/','quê nhà, thành phố quê hương','My hometown is a small city.'],['🛍️','mall','/mɔːl/','trung tâm mua sắm','There is a mall in the city.'],['🏞️','lake','/leɪk/','hồ','There are two lakes near here.'],['🌲','forest','/ˈfɒrɪst/','rừng','The forest is near the lake.'],['🍂','season','/ˈsiːzn/','mùa','My hometown has four seasons.'],['🛡️','safe','/seɪf/','an toàn','It is a safe place for families.']
    ],glossary:'Also useful: river = sông; hill = đồi; snow = tuyết; ice skating = trượt băng; skiing = trượt tuyết; nightlife = hoạt động giải trí về đêm; variety = sự đa dạng.'},
    {id:'hometown-word-practice',stage:'listen2',kind:'quiz',tag:'PRACTICE · BEFORE LISTENING',title:'Check the new words',questions:[
      {id:'htv1',text:'A large building with many shops is a ___.',answer:'mall'},
      {id:'htv2',text:'A place with many trees is a ___.',options:['forest','lake','cinema'],answer:'forest'},
      {id:'htv3',text:'Summer is a ___.',answer:'season'},
      {id:'htv4',text:'A place with little danger is ___.',answer:'safe'}
    ]},
    {id:'listen-town-gist',stage:'listen2',kind:'quiz',tag:'LISTENING 02 · MAIN IDEA',title:'A real conversation: My Hometown',audio:'town',lead:'Listen once. What is Sarah’s main purpose?',questions:[
      {id:'lt1',text:'She mainly…',options:['describes her hometown','explains her job','books a holiday'],answer:'describes her hometown',why:'The conversation covers local places and life there.'}
    ]},
    {id:'listen-town-detail',stage:'listen2',kind:'quiz',tag:'LISTENING 02 · DETAILS 1',title:'Places and food',audio:'town',lead:'Listen again. The questions follow Sarah’s description.',questions:[
      {id:'lt2',text:'How many cinemas does Sarah mention?',options:['Two','Three','Four'],answer:'Three',why:'Opening: her city has three cinemas.'},
      {id:'lt3',text:'What is true about the restaurants?',options:['There is little choice.','There are different cuisines.','There are no restaurants.'],answer:'There are different cuisines.',why:'Food section: she describes several kinds of cuisine.'}
    ]},
    {id:'listen-town-detail-b',stage:'listen2',kind:'quiz',tag:'LISTENING 02 · DETAILS 2',title:'Seasons and local life',audio:'town',lead:'Listen to the next part of Sarah’s description.',questions:[
      {id:'lt4',text:'Her hometown has ___ seasons.',options:['two','three','four'],answer:'four',why:'Nature section: she describes four seasons.'},
      {id:'lt5',text:'Does she describe it as a safe place?',options:['Yes','No','She does not say.'],answer:'Yes',why:'Later: she says it is safe for families.'}
    ],note:'The source describes one speaker’s experience. These are listening answers, not current travel facts about the city.'},
    {id:'town-to-speaking',stage:'listen2',kind:'talk',tag:'LISTENING TO SPEAKING',title:'A place you know',lead:'Describe your own neighbourhood. Use the audio as a model for the order of ideas.',prompts:[
      ['What places are there near your home?','There are two cafés and a park near my home.'],
      ['What do you usually do there?','I usually meet my friends at a café.'],
      ['Is it a good place to live? Give a reason.','Yes, it is. It is quiet, and the people are friendly.']
    ]},

    {id:'impersonal-it',stage:'read',kind:'grammar',tag:'GRAMMAR 07 · IT’S…',title:'Weather, time and distance',rules:[
      ['Weather: it + be + adjective','It is sunny today. Is it cold in winter?','Dùng it làm chủ ngữ khi nói về thời tiết.'],
      ['Time and day: it + be + time / day','It is seven o’clock. It is Friday.','Dùng it để nói giờ, ngày hoặc ngày tháng.'],
      ['Distance: it + be + distance','It is two kilometres from my home to school.','Dùng it để nói khoảng cách.'],
      ['Situation: it + be + adjective + to + verb','It is nice to meet you. It is easy to walk there.','It là chủ ngữ hình thức. Hành động được nêu trong cụm to + động từ.']
    ],note:'It’s = it is. There’s introduces something. It’s can describe the weather or refer back to one thing.'},
    {id:'it-practice',stage:'read',kind:'quiz',tag:'PRACTICE · IT’S…',title:'A small word with many uses',questions:[
      {id:'it1',text:'___ sunny today.',options:["It’s","There’s","They’re"],answer:'It’s'},
      {id:'it2',text:'___ a café near my school.',options:["It’s","There’s","They’re"],answer:'There’s'},
      {id:'it3',text:'It is easy ___ to the park.',options:['walk','to walk','walking'],answer:'to walk'},
      {id:'it4',text:'___ two kilometres from here to school.',options:["It’s","There’s","There are"],answer:'It’s'}
    ]},
    {id:'reading-words',stage:'read',kind:'vocab',tag:'BEFORE READING · NEW LANGUAGE',title:'A message from a new neighbour',lead:'These words also help with your speaking and writing tasks later.',words:[
      ['🏘️','neighbourhood','/ˈneɪbəhʊd/','khu phố','My neighbourhood is quiet.'],['🤫','quiet','/ˈkwaɪət/','yên tĩnh','The park is quiet in the morning.'],['💳','free','/friː/','miễn phí','The reading club is free.'],['🚶','on foot','/ɒn fʊt/','đi bộ','I go to the library on foot.'],['🏢','building','/ˈbɪldɪŋ/','tòa nhà','I live in the blue building.'],['🎓','college','/ˈkɒlɪdʒ/','trường cao đẳng, đại học','My brother studies at college.']
    ],glossary:'Also useful: flat = căn hộ; next to = bên cạnh; leave home = rời nhà; away = cách xa; friendly = thân thiện; after = sau; about one kilometre = khoảng một ki-lô-mét.'},
    {id:'reading-word-practice',stage:'read',kind:'quiz',tag:'PRACTICE · BEFORE READING',title:'Ready to read',questions:[
      {id:'rv1',text:'You pay nothing for a ___ activity.',answer:'free'},
      {id:'rv2',text:'If you walk to school, you go on ___.',answer:'foot'},
      {id:'rv3',text:'A place with little noise is ___.',answer:'quiet'}
    ]},
    {id:'reading-text',stage:'read',kind:'reading',tag:'READING · MAIN IDEA AND DETAILS',title:'Welcome to Green Street',lead:'Read Linh’s message. Choose the best answer. Find the sentence that helps you.',paragraphs:[
      ['1','Hi Alex, welcome to Green Street! I’m Linh, your new neighbour. I live in the blue building next to the café. I work at a school, and I usually leave home at seven. My brother studies at college. He doesn’t get up early, but he always makes breakfast for us on Sundays.'],
      ['2','There is a small park near our building, and there are two cafés on our street. The park is quiet before eight, so I often walk there in the morning. There isn’t a cinema here, but there is a library. It opens at nine. I go there on foot on Saturdays.'],
      ['3','It’s easy to get to the library from our building. It’s about one kilometre away. The reading club meets there every Saturday at ten. It’s free, and the people are friendly. I usually have coffee after the club. Do you like reading? What do you usually do at weekends? See you soon!']
    ],questions:[
      {id:'r1',text:'What is the message mainly about?',options:['A new job','Local life and an invitation','A long holiday'],answer:'Local life and an invitation',why:'All paragraphs: Linh introduces local life and suggests a shared activity.'},
      {id:'r2',text:'When does her brother make breakfast?',options:['Every morning','On Sundays','On Saturdays'],answer:'On Sundays',why:'Paragraph 1: his breakfast routine is on Sundays.'},
      {id:'r3',text:'Which place is missing from Green Street?',options:['A library','A park','A cinema'],answer:'A cinema',why:'Paragraph 2: Linh says there is no cinema.'}
    ]},
    {id:'reading-detail',stage:'read',kind:'quiz',tag:'READING · FIND THE EVIDENCE',title:'Use the message',lead:'Return to Linh’s message if you need to. Write a short answer.',textRef:'reading-text',questions:[
      {id:'r4',text:'What time does the library open?',answer:['nine','9','9 a.m.',"nine o'clock",'at nine'],why:'Paragraph 2: it opens at nine.'},
      {id:'r5',text:'How does Linh go to the library?',answer:['on foot','she walks','walk','walks'],why:'Paragraph 2: she goes on foot.'},
      {id:'r6',text:'How far is the library from their building?',answer:['one kilometre','1 kilometre','one kilometer','1 kilometer','1 km','about one kilometre','about 1 km'],why:'Paragraph 3: it is about one kilometre away.'},
      {id:'r7',text:'Does the reading club cost money?',answer:['no',"no it doesn't",'it is free',"it's free"],why:'Paragraph 3: the club is free.'}
    ],transfer:'Ask a partner: Would you like to meet Linh at the reading club? Why? Use I like… and It’s….'},

    {id:'conversation-tools',stage:'speak',kind:'vocab',tag:'BEFORE SPEAKING · CONVERSATION TOOLS',title:'Keep the conversation going',lead:'Practise the phrase and an answer immediately. Use them in the next task.',words:[
      ['💬','What about you?','/wɒt əˈbaʊt juː/','Còn bạn thì sao?','I work near here. What about you?'],['👂','Sorry, can you say that again?','/ˈsɒri kən juː seɪ ðæt əˈɡen/','Bạn nói lại được không?','Sorry, can you say that again?'],['✨','That sounds nice.','/ðæt saʊndz naɪs/','Nghe hay đấy.','A park near home? That sounds nice.'],['🤝','Let’s meet at…','/lets miːt æt/','Hãy gặp nhau lúc/tại…','Let’s meet at ten at the café.'],['🗓️','free (available)','/friː/','rảnh, có thời gian','I am free on Saturday.']
    ]},
    {id:'conversation-tools-practice',stage:'speak',kind:'quiz',tag:'PRACTICE · CONVERSATION TOOLS',title:'What do you say next?',questions:[
      {id:'ct1',text:'Your partner speaks too quietly. Say…',options:['Sorry, can you say that again?','Let’s meet at ten.','That sounds nice.'],answer:'Sorry, can you say that again?'},
      {id:'ct2',text:'You answer a question and want to ask your partner the same thing. Say…',options:['It is Friday.','What about you?','There is a café.'],answer:'What about you?'}
    ]},
    {id:'guided-speaking',stage:'speak',kind:'talk',tag:'SPEAKING 01 · GUIDED PRACTICE',title:'A real answer needs a little more',lead:'Student A asks. Student B answers and adds one detail. Swap roles.',prompts:[
      ['What time do you usually get up?','I usually get up at six. I have breakfast at home. What about you?'],
      ['Does anyone in your family work near home?','Yes, my sister does. She works at a supermarket.'],
      ['Is there a park near your home?','Yes, there is. It is small, and I often walk there.'],
      ['How far is it from your home to school or work?','It is about two kilometres. I usually go by bus.']
    ]},
    {id:'information-gap',stage:'speak',kind:'roleplay',tag:'SPEAKING 02 · INFORMATION GAP',title:'Find a place to meet',lead:'Choose your role. Keep the other card hidden. Ask questions to complete your missing information.',roles:{
      A:{name:'Student A · Alex',facts:['You are free on Saturdays after 9 a.m.','You like quiet places and reading.','The park is 2 km from your home. It opens at 6 a.m.','You do not know the library opening time or the distance.'],ask:['What time does the library open?','How far is it from my home?','Is there a café near the library?']},
      B:{name:'Student B · Linh',facts:['You are free on Saturdays after 10 a.m.','You like reading and coffee.','The library opens at 9 a.m. It is 1 km from Alex’s home.','There is a café next to the library.','You do not know the park opening time or the distance.'],ask:['What time does the park open?','How far is the park from your home?','What do you like doing at weekends?']}
    },questions:[],note:'Ask about the missing information. Keep your partner’s card hidden. Use the next card to record the facts and agree on a plan.'},
    {id:'information-gap-notes',stage:'speak',kind:'quiz',tag:'SPEAKING 02 · YOUR SHARED PLAN',title:'Compare your information',lead:'After asking your partner, complete the facts. Then agree on a place and time.',textRef:'information-gap',questions:[
      {id:'ig1',text:'The library opens at…',answer:['9 a.m.','nine','9',"nine o'clock"]},
      {id:'ig2',text:'The park opens at…',answer:['6 a.m.','six','6',"six o'clock"]},
      {id:'ig3',text:'A possible plan: where and when can both people meet?',answer:'At the library on Saturday at ten or later. The café is another possible place.',open:true}
    ],note:'Complete the missing facts first. Then agree on a place and time. There can be more than one good plan.'},
    {id:'free-speaking',stage:'speak',kind:'talk',tag:'SPEAKING 03 · COMMUNICATION TASK',title:'Meet your new neighbour',lead:'Use your own information. Keep the conversation going for two minutes. Then change partners and try again with fewer notes.',prompts:[
      ['Introduce yourself and describe your daily life.','Hi, I’m Mai. I work at a shop. I usually start at eight.'],
      ['Ask about routines and local places. Ask at least two follow-up questions.','What time do you start? Is there a café near your work? How often do you go there?'],
      ['Agree on a place and time to meet. Explain why.','Let’s meet at the park at nine on Sunday. It’s quiet in the morning.']
    ],checklist:['Use present simple statements and questions.','Use there is / there are and one it sentence.','React to your partner and ask for clarification when needed.','Agree on one clear plan.'],record:true},
    {id:'speaking-feedback',stage:'speak',kind:'rubric',tag:'SPEAKING · FEEDBACK',title:'What went well?',lead:'Listen to your partner. Give one specific compliment and one useful next step.',criteria:[
      ['Message and task', '0: no clear message · 1: some ideas · 2: clear routine, place and plan'],
      ['Interaction','0: no exchange · 1: answers questions · 2: asks follow-ups and responds'],
      ['Unit 1 language','0: rarely clear · 1: some correct forms · 2: mostly clear present simple, there and it'],
      ['Pronunciation','0: often unclear · 1: understandable with help · 2: easy to follow, including verb endings']
    ],note:'Maximum 8 points. This is a classroom rubric, not an official CEFR score.',prompts:[['Feedback language','I understood your plan clearly. Next time, remember the -s in she works.']]},

    {id:'writing-plan',stage:'write',kind:'writing',tag:'WRITING · PLAN AND DRAFT',title:'A friendly message to a new neighbour',lead:'Write 80–100 words. Introduce your routine, describe your neighbourhood and suggest a meeting. Use your own ideas.',frame:[
      ['Greeting','Hi…, welcome to…!'],['Your routine','I live… I usually… I don’t…'],['Local places','There is… There are… It / They…'],['A meeting','It’s… Let’s meet… Do you…?'],['Ending','See you soon!']
    ],checklist:['Use at least two present simple statements and one question.','Use there is / there are at least once.','Use it for weather, time, distance or a situation.','Add one frequency adverb and a clear place and time.'],model:"Hi Sam, welcome to our neighbourhood! I’m Mai. I live near the park and work at a small shop. I usually get up at six and walk to work. I don’t work on Sundays. There is a library on our street, and there are two cafés near it. The library opens at nine. It’s quiet, and it’s easy to walk there. I often read there at weekends. Do you like books? Let’s meet at the library at ten on Sunday and have coffee afterwards. See you soon!",note:'The model is one possible answer. Your message can be different.'},
    {id:'editing',stage:'write',kind:'quiz',tag:'WRITING · EDITING',title:'Spot it. Fix it.',lead:'Rewrite each sentence correctly. Use the pattern from this Unit.',questions:[
      {id:'ed1',text:'She go to work at eight.',answer:'She goes to work at eight.',why:'He/she/it takes the -s form.'},
      {id:'ed2',text:'Does he lives near here?',answer:'Does he live near here?',why:'Does is followed by the base verb.'},
      {id:'ed3',text:'There is two parks near my home.',answer:'There are two parks near my home.',why:'Two parks is plural.'},
      {id:'ed4',text:'Is sunny today.',answer:["It is sunny today.","It's sunny today."],why:'English needs the subject it in this weather sentence.'}
    ]},
    {id:'review-a',stage:'write',kind:'quiz',tag:'UNIT CHECK · 1 OF 2',title:'Your Unit 1 checkpoint',lead:'Answer independently. Then check your work and explain one answer to a partner.',questions:[
      {id:'q1',text:'My brother ___ at a school.',options:['work','works','working'],answer:'works'},
      {id:'q2',text:'We ___ coffee in the evening.',options:["doesn’t drink","don’t drink","not drink"],answer:'don’t drink'},
      {id:'q3',text:'___ your sister have breakfast at home?',options:['Is','Do','Does'],answer:'Does'},
      {id:'q4',text:'Choose the usual word order.',options:['She often is tired.','She is often tired.','Often she tired is.'],answer:'She is often tired.'},
      {id:'q5',text:'___ there any cafés on your street?',options:['Are','Is','Do'],answer:'Are'}
    ]},
    {id:'review-b',stage:'write',kind:'quiz',tag:'UNIT CHECK · 2 OF 2',title:'Connect the language',questions:[
      {id:'q6',text:'There is a library. ___ opens at nine.',options:['It','They','There'],answer:'It'},
      {id:'q7',text:'___ about two kilometres from here to the park.',options:["There’s","It’s","There are"],answer:'It’s'},
      {id:'q8',text:'It is nice ___ you.',options:['meet','meeting','to meet'],answer:'to meet'},
      {id:'q9',text:'Do they live near here? Yes, they ___.',answer:'do'},
      {id:'q10',text:'The ending of watches sounds like…',options:['/s/','/z/','/ɪz/'],answer:'/ɪz/'}
    ]},
    {id:'exit',stage:'write',kind:'exit',tag:'UNIT COMPLETE',title:'Take the language into your life',lead:'Say it without reading. Then write it in your own words.',checklist:['I can ask and answer questions about daily routines.','I can describe local places and add a detail with it or they.','I can understand the key details in both recordings.','I can agree on a place and time with another person.','I can write and edit my own friendly message.'],prompts:[['One final challenge','Tell someone about your day and your neighbourhood in 60 seconds. Ask them two questions.']],note:'Return to any section you need. Unit 2 is planned, but its lesson has not been built yet.'}
  ]
};
