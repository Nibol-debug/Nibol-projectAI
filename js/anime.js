/* ===== ANIME DATA ===== */
const animeData = [{"id": 1, "title": "One Piece", "titleJp": "ワンピース", "genre": ["Action", "Adventure", "Comedy"], "rating": 9.1, "episodes": 1100, "status": "Ongoing", "year": 1999, "description": "Monkey D. Luffy sets out on a grand adventure to find the legendary treasure One Piece.", "image": "https://cdn.myanimelist.net/images/anime/6/73245.jpg"}, {"id": 2, "title": "Attack on Titan", "titleJp": "進撃の巨人", "genre": ["Action", "Drama", "Fantasy"], "rating": 9.0, "episodes": 87, "status": "Completed", "year": 2013, "description": "Humanity fights for survival against giant humanoid Titans.", "image": "https://cdn.myanimelist.net/images/anime/10/47347.jpg"}, {"id": 3, "title": "Demon Slayer", "titleJp": "鬼滅の刃", "genre": ["Action", "Fantasy", "Supernatural"], "rating": 8.9, "episodes": 55, "status": "Ongoing", "year": 2019, "description": "Tanjiro joins the Demon Slayer Corps to avenge his family.", "image": "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"}, {"id": 4, "title": "Jujutsu Kaisen", "titleJp": "呪術廻戦", "genre": ["Action", "Fantasy", "School"], "rating": 8.8, "episodes": 47, "status": "Ongoing", "year": 2020, "description": "Yuji Itadori enters the world of Jujutsu Sorcery to fight deadly curses.", "image": "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"}, {"id": 5, "title": "Fullmetal Alchemist: Brotherhood", "titleJp": "鋼の錬金術師", "genre": ["Action", "Adventure", "Drama"], "rating": 9.2, "episodes": 64, "status": "Completed", "year": 2009, "description": "Two brothers use alchemy to search for the Philosopher's Stone.", "image": "https://cdn.myanimelist.net/images/anime/1223/96541.jpg"}, {"id": 6, "title": "Spy x Family", "titleJp": "スパイファミリー", "genre": ["Action", "Comedy", "Slice of Life"], "rating": 8.6, "episodes": 37, "status": "Ongoing", "year": 2022, "description": "A spy, assassin, and telepath form a fake family.", "image": "https://cdn.myanimelist.net/images/anime/1441/122795.jpg"}, {"id": 7, "title": "Naruto Shippuden", "titleJp": "ナルト 疾風伝", "genre": ["Action", "Adventure"], "rating": 8.7, "episodes": 500, "status": "Completed", "year": 2007, "description": "Naruto continues his journey to become Hokage.", "image": "https://cdn.myanimelist.net/images/anime/5/17407.jpg"}, {"id": 8, "title": "Death Note", "titleJp": "デスノート", "genre": ["Mystery", "Thriller"], "rating": 9.0, "episodes": 37, "status": "Completed", "year": 2006, "description": "A student discovers a notebook that can kill anyone whose name is written in it.", "image": "https://cdn.myanimelist.net/images/anime/9/9453.jpg"}, {"id": 9, "title": "Chainsaw Man", "titleJp": "チェンソーマン", "genre": ["Action", "Fantasy", "Horror"], "rating": 8.5, "episodes": 12, "status": "Ongoing", "year": 2022, "description": "Denji merges with his chainsaw devil and hunts devils.", "image": "https://cdn.myanimelist.net/images/anime/1806/126216.jpg"}, {"id": 10, "title": "My Hero Academia", "titleJp": "僕のヒーローアカデミア", "genre": ["Action", "School"], "rating": 8.4, "episodes": 138, "status": "Ongoing", "year": 2016, "description": "A quirkless boy dreams of becoming the greatest hero.", "image": "https://cdn.myanimelist.net/images/anime/10/78745.jpg"}, {"id": 11, "title": "Hunter x Hunter", "titleJp": "ハンター×ハンター", "genre": ["Action", "Adventure", "Fantasy"], "rating": 9.1, "episodes": 148, "status": "Completed", "year": 2011, "description": "Gon embarks on a journey to become a Hunter and find his father.", "image": "https://cdn.myanimelist.net/images/anime/1337/99013.jpg"}, {"id": 12, "title": "Steins;Gate", "titleJp": "シュタインズ・ゲート", "genre": ["Sci-Fi", "Thriller"], "rating": 9.1, "episodes": 24, "status": "Completed", "year": 2011, "description": "A mad scientist accidentally discovers time travel.", "image": "https://cdn.myanimelist.net/images/anime/5/73199.jpg"}, {"id": 13, "title": "Cowboy Bebop", "titleJp": "カウボーイビバップ", "genre": ["Action", "Sci-Fi"], "rating": 8.8, "episodes": 26, "status": "Completed", "year": 1998, "description": "Bounty hunters chase criminals across the solar system.", "image": "https://cdn.myanimelist.net/images/anime/4/19644.jpg"}, {"id": 14, "title": "Code Geass", "titleJp": "コードギアス", "genre": ["Action", "Drama", "Sci-Fi"], "rating": 8.7, "episodes": 50, "status": "Completed", "year": 2006, "description": "An exiled prince gains the power of absolute obedience.", "image": "https://cdn.myanimelist.net/images/anime/5/50331.jpg"}, {"id": 15, "title": "Vinland Saga", "titleJp": "ヴィンランド・サガ", "genre": ["Action", "Adventure", "Drama"], "rating": 8.8, "episodes": 48, "status": "Completed", "year": 2019, "description": "Young Thorfinn seeks revenge while caught up in Viking wars.", "image": "https://cdn.myanimelist.net/images/anime/1500/103005.jpg"}, {"id": 16, "title": "Mob Psycho 100", "titleJp": "モブサイコ100", "genre": ["Action", "Comedy", "Supernatural"], "rating": 8.6, "episodes": 37, "status": "Completed", "year": 2016, "description": "A powerful psychic middle schooler tries to live a normal life.", "image": "https://cdn.myanimelist.net/images/anime/8/80356.jpg"}, {"id": 17, "title": "One Punch Man", "titleJp": "ワンパンマン", "genre": ["Action", "Comedy"], "rating": 8.7, "episodes": 24, "status": "Ongoing", "year": 2015, "description": "A hero who can defeat any opponent with a single punch.", "image": "https://cdn.myanimelist.net/images/anime/12/76049.jpg"}, {"id": 18, "title": "Tokyo Revengers", "titleJp": "東京リベンジャーズ", "genre": ["Action", "Drama"], "rating": 8.0, "episodes": 49, "status": "Completed", "year": 2021, "description": "Takemichi travels back in time to save his ex-girlfriend.", "image": "https://cdn.myanimelist.net/images/anime/1839/122012.jpg"}, {"id": 19, "title": "Dragon Ball Z", "titleJp": "ドラゴンボールZ", "genre": ["Action", "Adventure", "Comedy"], "rating": 8.8, "episodes": 291, "status": "Completed", "year": 1989, "description": "Goku and friends defend Earth against powerful threats.", "image": "https://myanimelist.net/images/anime/1277/142022.jpg"}, {"id": 20, "title": "Neon Genesis Evangelion", "titleJp": "新世紀エヴァンゲリオン", "genre": ["Action", "Drama", "Sci-Fi"], "rating": 8.5, "episodes": 26, "status": "Completed", "year": 1995, "description": "Teenagers pilot giant mechs to fight mysterious Angels.", "image": "https://cdn.myanimelist.net/images/anime/1314/108941.jpg"}, {"id": 21, "title": "Haikyuu!!", "titleJp": "ハイキュー!!", "genre": ["School", "Comedy"], "rating": 8.7, "episodes": 85, "status": "Completed", "year": 2014, "description": "A short volleyball player joins his high school team aiming for nationals.", "image": "https://cdn.myanimelist.net/images/anime/7/76014.jpg"}, {"id": 22, "title": "Your Lie in April", "titleJp": "四月は君の嘘", "genre": ["Drama", "Romance"], "rating": 8.7, "episodes": 22, "status": "Completed", "year": 2014, "description": "A piano prodigy meets a free-spirited violinist who changes his life.", "image": "https://cdn.myanimelist.net/images/anime/3/67177.jpg"}, {"id": 23, "title": "Violet Evergarden", "titleJp": "ヴァイオレット・エヴァーガーデン", "genre": ["Drama", "Fantasy", "Slice of Life"], "rating": 8.7, "episodes": 13, "status": "Completed", "year": 2018, "description": "A former soldier becomes a ghostwriter to understand love.", "image": "https://cdn.myanimelist.net/images/anime/1795/95088.jpg"}, {"id": 24, "title": "Re:Zero", "titleJp": "Re:ゼロから始める異世界生活", "genre": ["Drama", "Fantasy", "Thriller"], "rating": 8.3, "episodes": 50, "status": "Ongoing", "year": 2016, "description": "Subaru discovers he can return from death in a fantasy world.", "image": "https://cdn.myanimelist.net/images/anime/1522/128039.jpg"}, {"id": 25, "title": "Sword Art Online", "titleJp": "ソードアート・オンライン", "genre": ["Action", "Adventure", "Fantasy"], "rating": 7.5, "episodes": 96, "status": "Completed", "year": 2012, "description": "Players trapped in a VR MMORPG must clear the game to escape.", "image": "https://cdn.myanimelist.net/images/anime/11/39717.jpg"}, {"id": 26, "title": "Tokyo Ghoul", "titleJp": "東京喰種", "genre": ["Action", "Drama", "Horror"], "rating": 7.8, "episodes": 48, "status": "Completed", "year": 2014, "description": "A student becomes a half-ghoul and struggles with his identity.", "image": "https://cdn.myanimelist.net/images/anime/5/64449.jpg"}, {"id": 27, "title": "Black Clover", "titleJp": "ブラッククローバー", "genre": ["Action", "Fantasy"], "rating": 8.1, "episodes": 170, "status": "Ongoing", "year": 2017, "description": "A boy without magic aims to become the Wizard King.", "image": "https://cdn.myanimelist.net/images/anime/2/88336.jpg"}, {"id": 28, "title": "Dr. Stone", "titleJp": "ドクターストーン", "genre": ["Adventure", "Comedy", "Sci-Fi"], "rating": 8.3, "episodes": 59, "status": "Completed", "year": 2019, "description": "A science genius rebuilds civilization after humanity is petrified.", "image": "https://cdn.myanimelist.net/images/anime/1613/102576.jpg"}, {"id": 29, "title": "Bleach: TYBW", "titleJp": "ブリーチ 千年血戦篇", "genre": ["Action", "Adventure", "Supernatural"], "rating": 9.0, "episodes": 52, "status": "Ongoing", "year": 2022, "description": "Ichigo faces the Quincy army in the final arc.", "image": "https://cdn.myanimelist.net/images/anime/1908/135431.jpg"}, {"id": 30, "title": "Mushoku Tensei", "titleJp": "無職転生", "genre": ["Adventure", "Drama", "Fantasy"], "rating": 8.4, "episodes": 34, "status": "Ongoing", "year": 2021, "description": "A man reincarnated in a magical world lives without regrets.", "image": "https://cdn.myanimelist.net/images/anime/1530/117776.jpg"}, {"id": 31, "title": "Erased", "titleJp": "僕だけがいない街", "genre": ["Mystery", "Thriller"], "rating": 8.5, "episodes": 12, "status": "Completed", "year": 2016, "description": "A man travels back in time to prevent a childhood kidnapping.", "image": "https://cdn.myanimelist.net/images/anime/10/77957.jpg"}, {"id": 32, "title": "Parasyte", "titleJp": "寄生獣", "genre": ["Action", "Horror", "Sci-Fi"], "rating": 8.4, "episodes": 24, "status": "Completed", "year": 2014, "description": "A teenager's hand is taken over by an alien parasite.", "image": "https://cdn.myanimelist.net/images/anime/3/73178.jpg"}, {"id": 33, "title": "Made in Abyss", "titleJp": "メイドインアビス", "genre": ["Adventure", "Drama", "Fantasy"], "rating": 8.7, "episodes": 25, "status": "Ongoing", "year": 2017, "description": "A girl descends into a mysterious chasm filled with dangers.", "image": "https://cdn.myanimelist.net/images/anime/6/86733.jpg"}, {"id": 34, "title": "Toradora!", "titleJp": "とらドラ!", "genre": ["Comedy", "Romance", "Slice of Life"], "rating": 8.1, "episodes": 25, "status": "Completed", "year": 2008, "description": "Two unlikely students help each other confess to their crushes.", "image": "https://cdn.myanimelist.net/images/anime/5/22125.jpg"}, {"id": 35, "title": "The Promised Neverland", "titleJp": "約束のネバーランド", "genre": ["Mystery", "Thriller", "Horror"], "rating": 8.5, "episodes": 23, "status": "Completed", "year": 2019, "description": "Orphans discover a dark secret and plan a daring escape.", "image": "https://cdn.myanimelist.net/images/anime/1830/118780.jpg"}, {"id": 36, "title": "Assassination Classroom", "titleJp": "暗殺教室", "genre": ["Action", "Comedy", "School"], "rating": 8.3, "episodes": 47, "status": "Completed", "year": 2015, "description": "Students must assassinate their alien teacher before he destroys Earth.", "image": "https://cdn.myanimelist.net/images/anime/5/75639.jpg"}, {"id": 37, "title": "Frieren", "titleJp": "葬送のフリーレン", "genre": ["Adventure", "Drama", "Fantasy"], "rating": 9.3, "episodes": 28, "status": "Ongoing", "year": 2023, "description": "An elf mage reflects on her journey after defeating the Demon King.", "image": "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"}, {"id": 38, "title": "Oshi no Ko", "titleJp": "【推しの子】", "genre": ["Drama", "Mystery", "Supernatural"], "rating": 8.8, "episodes": 23, "status": "Ongoing", "year": 2023, "description": "A doctor reborn as an idol's child uncovers entertainment industry secrets.", "image": "https://cdn.myanimelist.net/images/anime/1812/134736.jpg"}, {"id": 39, "title": "Solo Leveling", "titleJp": "俺だけレベルアップな件", "genre": ["Action", "Adventure", "Fantasy"], "rating": 8.5, "episodes": 25, "status": "Ongoing", "year": 2024, "description": "The weakest hunter gains a system to level up without limits.", "image": "https://myanimelist.net/images/anime/1448/147351.jpg"}, {"id": 40, "title": "Bocchi the Rock!", "titleJp": "ぼっち・ざ・ろっく！", "genre": ["Comedy", "Slice of Life"], "rating": 8.8, "episodes": 12, "status": "Completed", "year": 2022, "description": "A socially anxious guitar prodigy joins a band.", "image": "https://cdn.myanimelist.net/images/anime/1448/127956.jpg"}, {"id": 41, "title": "Kaguya-sama: Love Is War", "titleJp": "かぐや様は告らせたい", "genre": ["Comedy", "Romance", "School"], "rating": 8.7, "episodes": 37, "status": "Completed", "year": 2019, "description": "Two geniuses play mind games to make the other confess love first.", "image": "https://cdn.myanimelist.net/images/anime/1295/106551.jpg"}, {"id": 42, "title": "Cyberpunk: Edgerunners", "titleJp": "サイバーパンク エッジランナーズ", "genre": ["Action", "Drama", "Sci-Fi"], "rating": 8.6, "episodes": 10, "status": "Completed", "year": 2022, "description": "A street kid becomes a cyberpunk mercenary in Night City.", "image": "https://cdn.myanimelist.net/images/anime/1818/126435.jpg"}, {"id": 43, "title": "Fate/Zero", "titleJp": "フェイト/ゼロ", "genre": ["Action", "Fantasy", "Supernatural"], "rating": 8.3, "episodes": 25, "status": "Completed", "year": 2011, "description": "Seven mages battle in the Fourth Holy Grail War.", "image": "https://cdn.myanimelist.net/images/anime/2/73249.jpg"}, {"id": 44, "title": "Gintama", "titleJp": "銀魂", "genre": ["Action", "Comedy"], "rating": 8.9, "episodes": 367, "status": "Completed", "year": 2006, "description": "A samurai in alien-invaded Edo takes odd jobs with humor.", "image": "https://myanimelist.net/images/anime/1370/135212.jpg"}, {"id": 45, "title": "Psycho-Pass", "titleJp": "サイコパス", "genre": ["Action", "Sci-Fi", "Thriller"], "rating": 8.4, "episodes": 41, "status": "Completed", "year": 2012, "description": "Enforcers use a system measuring citizens' criminal intent.", "image": "https://cdn.myanimelist.net/images/anime/5/43399.jpg"}, {"id": 46, "title": "Dororo", "titleJp": "どろろ", "genre": ["Action", "Adventure", "Supernatural"], "rating": 8.2, "episodes": 24, "status": "Completed", "year": 2019, "description": "A ronin travels to reclaim body parts stolen by demons.", "image": "https://cdn.myanimelist.net/images/anime/1879/100467.jpg"}, {"id": 47, "title": "86: Eighty-Six", "titleJp": "86-エイティシックス-", "genre": ["Action", "Drama", "Sci-Fi"], "rating": 8.3, "episodes": 23, "status": "Completed", "year": 2021, "description": "Soldiers fight a war while facing discrimination.", "image": "https://cdn.myanimelist.net/images/anime/1987/117507.jpg"}, {"id": 48, "title": "Noragami", "titleJp": "ノラガミ", "genre": ["Action", "Comedy", "Supernatural"], "rating": 8.1, "episodes": 25, "status": "Completed", "year": 2014, "description": "A minor god takes odd jobs dreaming of having worshippers.", "image": "https://myanimelist.net/images/anime/1886/128266.jpg"}, {"id": 49, "title": "Fire Force", "titleJp": "炎炎ノ消防隊", "genre": ["Action", "Fantasy", "Supernatural"], "rating": 7.8, "episodes": 48, "status": "Completed", "year": 2019, "description": "Special firefighters battle supernatural infernals.", "image": "https://myanimelist.net/images/anime/1664/103275.jpg"}, {"id": 50, "title": "Samurai Champloo", "titleJp": "サムライチャンプルー", "genre": ["Action", "Adventure", "Comedy"], "rating": 8.5, "episodes": 26, "status": "Completed", "year": 2004, "description": "Two samurai and a girl search for a mysterious sunflower samurai.", "image": "https://myanimelist.net/images/anime/1370/135212.jpg"}, {"id": 51, "title": "Slime Isekai", "titleJp": "転スラ", "genre": ["Adventure", "Comedy", "Fantasy"], "rating": 8.2, "episodes": 72, "status": "Ongoing", "year": 2018, "description": "A man reincarnated as a slime builds a nation for monsters.", "image": "https://cdn.myanimelist.net/images/anime/1694/93337.jpg"}, {"id": 52, "title": "Overlord", "titleJp": "オーバーロード", "genre": ["Action", "Adventure", "Fantasy"], "rating": 7.9, "episodes": 52, "status": "Completed", "year": 2015, "description": "An undead overlord aims to conquer a new world.", "image": "https://cdn.myanimelist.net/images/anime/7/88019.jpg"}, {"id": 53, "title": "Shield Hero", "titleJp": "盾の勇者の成り上がり", "genre": ["Action", "Adventure", "Fantasy"], "rating": 7.8, "episodes": 50, "status": "Ongoing", "year": 2019, "description": "A betrayed hero fights his way back with only a shield.", "image": "https://cdn.myanimelist.net/images/anime/1490/101365.jpg"}, {"id": 54, "title": "No Game No Life", "titleJp": "ノーゲーム・ノーライフ", "genre": ["Adventure", "Comedy", "Fantasy"], "rating": 8.2, "episodes": 12, "status": "Completed", "year": 2014, "description": "Gaming siblings in a world where everything is decided by games.", "image": "https://cdn.myanimelist.net/images/anime/1074/111944.jpg"}, {"id": 55, "title": "Classroom of the Elite", "titleJp": "ようじつ", "genre": ["Drama", "School", "Thriller"], "rating": 8.0, "episodes": 39, "status": "Completed", "year": 2017, "description": "Students compete to reach the top class by any means.", "image": "https://myanimelist.net/images/anime/1010/124180.jpg"}, {"id": 56, "title": "Bungo Stray Dogs", "titleJp": "文豪ストレイドッグス", "genre": ["Action", "Mystery", "Supernatural"], "rating": 8.1, "episodes": 61, "status": "Ongoing", "year": 2016, "description": "A detective agency with supernatural abilities solves cases.", "image": "https://myanimelist.net/images/anime/3/79409.jpg"}, {"id": 57, "title": "Blue Lock", "titleJp": "ブルーロック", "genre": ["Action", "School"], "rating": 8.2, "episodes": 24, "status": "Ongoing", "year": 2022, "description": "300 strikers compete to become Japan's best soccer player.", "image": "https://cdn.myanimelist.net/images/anime/1258/126929.jpg"}, {"id": 58, "title": "Dandadan", "titleJp": "ダンダダン", "genre": ["Action", "Comedy", "Supernatural"], "rating": 8.6, "episodes": 12, "status": "Ongoing", "year": 2024, "description": "A girl and boy team up against ghosts and aliens.", "image": "https://myanimelist.net/images/anime/1584/143719.jpg"}, {"id": 59, "title": "Trigun Stampede", "titleJp": "トライガン", "genre": ["Action", "Adventure", "Sci-Fi"], "rating": 7.9, "episodes": 24, "status": "Completed", "year": 2023, "description": "Vash wanders a desert planet avoiding conflict.", "image": "https://myanimelist.net/images/anime/1219/154541.jpg"}, {"id": 60, "title": "Spy Classroom", "titleJp": "スパイ教室", "genre": ["Action", "Comedy", "Mystery"], "rating": 7.1, "episodes": 24, "status": "Completed", "year": 2023, "description": "A spy trains misfit girls for impossible missions.", "image": "https://myanimelist.net/images/anime/1491/132864.jpg"}, {"id": 61, "title": "Mashle", "titleJp": "マッシュル", "genre": ["Action", "Comedy", "Fantasy"], "rating": 7.9, "episodes": 24, "status": "Completed", "year": 2023, "description": "A magicless boy uses pure strength in a magic world.", "image": "https://myanimelist.net/images/anime/1218/135107.jpg"}, {"id": 62, "title": "Hell's Paradise", "titleJp": "地獄楽", "genre": ["Action", "Adventure", "Supernatural"], "rating": 7.8, "episodes": 13, "status": "Ongoing", "year": 2023, "description": "A ninja seeks the elixir of life on a mysterious island.", "image": "https://myanimelist.net/images/anime/1772/154456.jpg"}, {"id": 63, "title": "Ranking of Kings", "titleJp": "王様ランキング", "genre": ["Adventure", "Drama", "Fantasy"], "rating": 8.6, "episodes": 23, "status": "Completed", "year": 2021, "description": "A deaf prince proves his worth to become the greatest king.", "image": "https://cdn.myanimelist.net/images/anime/1347/117616.jpg"}, {"id": 64, "title": "Land of the Lustrous", "titleJp": "宝石の国", "genre": ["Action", "Drama", "Fantasy"], "rating": 8.4, "episodes": 12, "status": "Completed", "year": 2017, "description": "Gem beings fight moon invaders who shatter them.", "image": "https://myanimelist.net/images/anime/3/88293.jpg"}, {"id": 65, "title": "Akame ga Kill!", "titleJp": "アカメが斬る!", "genre": ["Action", "Drama", "Fantasy"], "rating": 7.8, "episodes": 24, "status": "Completed", "year": 2014, "description": "A warrior joins assassins to overthrow a corrupt empire.", "image": "https://cdn.myanimelist.net/images/anime/1429/95946.jpg"}, {"id": 66, "title": "Magi", "titleJp": "マギ", "genre": ["Action", "Adventure", "Fantasy"], "rating": 8.1, "episodes": 50, "status": "Completed", "year": 2012, "description": "A young mage explores dungeons filled with djinn.", "image": "https://myanimelist.net/images/manga/3/282487.jpg"}, {"id": 67, "title": "Angel Beats!", "titleJp": "エンジェルビーツ!", "genre": ["Action", "Comedy", "Drama"], "rating": 8.1, "episodes": 13, "status": "Completed", "year": 2010, "description": "Students in the afterlife rebel against their fate.", "image": "https://cdn.myanimelist.net/images/anime/10/22061.jpg"}, {"id": 68, "title": "Durarara!!", "titleJp": "デュラララ!!", "genre": ["Action", "Mystery", "Supernatural"], "rating": 8.2, "episodes": 60, "status": "Completed", "year": 2010, "description": "Interconnected stories of gangs and supernatural beings.", "image": "https://myanimelist.net/images/anime/10/71772.jpg"}, {"id": 69, "title": "Log Horizon", "titleJp": "ログ・ホライズン", "genre": ["Action", "Adventure", "Fantasy"], "rating": 8.0, "episodes": 62, "status": "Completed", "year": 2013, "description": "Players trapped in an MMORPG build a new society.", "image": "https://myanimelist.net/images/anime/5/84004.jpg"}, {"id": 70, "title": "The Devil is a Part-Timer!", "titleJp": "はたらく魔王さま!", "genre": ["Comedy", "Fantasy", "Slice of Life"], "rating": 7.9, "episodes": 37, "status": "Completed", "year": 2013, "description": "The Demon Lord works at a fast-food restaurant in Tokyo.", "image": "https://cdn.myanimelist.net/images/anime/3/50177.jpg"}, {"id": 71, "title": "Katanagatari", "titleJp": "刀語", "genre": ["Action", "Adventure"], "rating": 8.3, "episodes": 12, "status": "Completed", "year": 2010, "description": "A swordsman collects twelve legendary swords across Japan.", "image": "https://myanimelist.net/images/anime/1112/119225.jpg"}, {"id": 72, "title": "March Comes in Like a Lion", "titleJp": "3月のライオン", "genre": ["Drama", "Slice of Life"], "rating": 8.8, "episodes": 44, "status": "Completed", "year": 2016, "description": "A shogi player deals with depression while finding family warmth.", "image": "https://cdn.myanimelist.net/images/anime/6/82898.jpg"}, {"id": 73, "title": "Odd Taxi", "titleJp": "オッドタクシー", "genre": ["Mystery", "Drama"], "rating": 8.8, "episodes": 13, "status": "Completed", "year": 2021, "description": "A taxi driver gets caught up in a missing girl case.", "image": "https://myanimelist.net/images/anime/1981/113348.jpg"}, {"id": 74, "title": "Vivy: Fluorite Eye's Song", "titleJp": "Vivy", "genre": ["Action", "Drama", "Sci-Fi"], "rating": 8.4, "episodes": 13, "status": "Completed", "year": 2021, "description": "An AI songstress travels through time to prevent a war.", "image": "https://myanimelist.net/images/anime/1551/128960.jpg"}, {"id": 75, "title": "Golden Kamuy", "titleJp": "ゴールデンカムイ", "genre": ["Action", "Adventure", "Comedy"], "rating": 8.3, "episodes": 53, "status": "Completed", "year": 2018, "description": "A veteran and an Ainu girl race to find hidden gold.", "image": "https://myanimelist.net/images/anime/1180/95018.jpg"}, {"id": 76, "title": "To Your Eternity", "titleJp": "不滅のあなたへ", "genre": ["Adventure", "Drama", "Supernatural"], "rating": 8.4, "episodes": 40, "status": "Ongoing", "year": 2021, "description": "An immortal being learns what it means to be human.", "image": "https://cdn.myanimelist.net/images/anime/1271/109841.jpg"}, {"id": 77, "title": "Dorohedoro", "titleJp": "ドロヘドロ", "genre": ["Action", "Comedy", "Horror"], "rating": 8.1, "episodes": 12, "status": "Completed", "year": 2020, "description": "A man with a reptile head searches for the sorcerer who cursed him.", "image": "https://myanimelist.net/images/anime/1230/119278.jpg"}, {"id": 78, "title": "Great Pretender", "titleJp": "グレートプリテンダー", "genre": ["Action", "Comedy", "Mystery"], "rating": 8.2, "episodes": 23, "status": "Completed", "year": 2020, "description": "A con man gets entangled with international confidence artists.", "image": "https://myanimelist.net/images/anime/1418/107954.jpg"}, {"id": 79, "title": "Summertime Rendering", "titleJp": "サマータイムレンダ", "genre": ["Mystery", "Supernatural", "Thriller"], "rating": 8.5, "episodes": 25, "status": "Completed", "year": 2022, "description": "A boy uncovers a deadly shadow conspiracy on his island.", "image": "https://myanimelist.net/images/anime/1120/120796.jpg"}, {"id": 80, "title": "Wonder Egg Priority", "titleJp": "ワンダーエッグ", "genre": ["Action", "Drama", "Fantasy"], "rating": 7.6, "episodes": 13, "status": "Completed", "year": 2021, "description": "A girl buys eggs that transport her to save troubled souls.", "image": "https://cdn.myanimelist.net/images/anime/1079/110751.jpg"}, {"id": 81, "title": "Sonny Boy", "titleJp": "サニーボーイ", "genre": ["Drama", "Sci-Fi", "Supernatural"], "rating": 7.7, "episodes": 12, "status": "Completed", "year": 2021, "description": "Students transported to a dimension develop supernatural powers.", "image": "https://myanimelist.net/images/anime/1509/117149.jpg"}, {"id": 82, "title": "Eureka Seven", "titleJp": "エウレカセブン", "genre": ["Action", "Adventure", "Romance"], "rating": 8.1, "episodes": 50, "status": "Completed", "year": 2005, "description": "A boy joins rebels surfing the skies on mecha boards.", "image": "https://myanimelist.net/images/anime/1964/150161.jpg"}, {"id": 83, "title": "Gurren Lagann", "titleJp": "天元突破グレンラガン", "genre": ["Action", "Adventure", "Comedy"], "rating": 8.7, "episodes": 27, "status": "Completed", "year": 2007, "description": "Underground dwellers pilot mechs to fight for humanity's freedom.", "image": "https://cdn.myanimelist.net/images/anime/4/5123.jpg"}, {"id": 84, "title": "Kill la Kill", "titleJp": "キルラキル", "genre": ["Action", "Comedy"], "rating": 8.1, "episodes": 24, "status": "Completed", "year": 2013, "description": "A girl with a scissor blade battles at a school of powerful uniforms.", "image": "https://cdn.myanimelist.net/images/anime/8/75514.jpg"}, {"id": 85, "title": "Monogatari Series", "titleJp": "物語シリーズ", "genre": ["Comedy", "Mystery", "Supernatural"], "rating": 8.6, "episodes": 100, "status": "Completed", "year": 2009, "description": "A student encounters girls afflicted by supernatural oddities.", "image": "https://cdn.myanimelist.net/images/anime/11/75274.jpg"}, {"id": 86, "title": "Fruits Basket", "titleJp": "フルーツバスケット", "genre": ["Comedy", "Drama", "Romance"], "rating": 8.6, "episodes": 63, "status": "Completed", "year": 2019, "description": "A girl lives with a family cursed to become zodiac animals.", "image": "https://cdn.myanimelist.net/images/anime/1447/99827.jpg"}, {"id": 87, "title": "Skip and Loafer", "titleJp": "スキップとローファー", "genre": ["Comedy", "Romance", "Slice of Life"], "rating": 8.1, "episodes": 12, "status": "Ongoing", "year": 2023, "description": "A country girl navigates life at a Tokyo high school.", "image": "https://myanimelist.net/images/anime/1518/138730.jpg"}, {"id": 88, "title": "Horimiya", "titleJp": "ホリミヤ", "genre": ["Comedy", "Romance", "Slice of Life"], "rating": 8.2, "episodes": 13, "status": "Completed", "year": 2021, "description": "A popular girl and quiet boy discover each other's hidden sides.", "image": "https://cdn.myanimelist.net/images/anime/1695/111486.jpg"}, {"id": 89, "title": "Anohana", "titleJp": "あの花", "genre": ["Drama", "Slice of Life", "Supernatural"], "rating": 8.3, "episodes": 11, "status": "Completed", "year": 2011, "description": "Childhood friends reunite when a deceased friend's ghost appears.", "image": "https://myanimelist.net/images/anime/5/79697.jpg"}, {"id": 90, "title": "A Place Further Than the Universe", "titleJp": "宇宙よりも遠い場所", "genre": ["Adventure", "Comedy", "Drama"], "rating": 8.6, "episodes": 13, "status": "Completed", "year": 2018, "description": "Four girls journey to Antarctica searching for meaning.", "image": "https://cdn.myanimelist.net/images/anime/6/89879.jpg"}, {"id": 91, "title": "Kaiju No. 8", "titleJp": "怪獣8号", "genre": ["Action", "Sci-Fi"], "rating": 8.0, "episodes": 12, "status": "Ongoing", "year": 2024, "description": "A man transforms into a kaiju while joining the Defense Force.", "image": "https://myanimelist.net/images/anime/1370/140362.jpg"}, {"id": 92, "title": "Wind Breaker", "titleJp": "ウィンドブレイカー", "genre": ["Action", "School"], "rating": 7.8, "episodes": 13, "status": "Ongoing", "year": 2024, "description": "A loner learns to protect a town at a school of fighters.", "image": "https://myanimelist.net/images/anime/1526/148873.jpg"}, {"id": 93, "title": "Laid-Back Camp", "titleJp": "ゆるキャン△", "genre": ["Comedy", "Slice of Life"], "rating": 8.3, "episodes": 37, "status": "Completed", "year": 2018, "description": "Girls enjoy outdoor camping during winter.", "image": "https://cdn.myanimelist.net/images/anime/4/89877.jpg"}, {"id": 94, "title": "K-On!", "titleJp": "けいおん!", "genre": ["Comedy", "Slice of Life"], "rating": 8.0, "episodes": 39, "status": "Completed", "year": 2009, "description": "Four girls form a light music club and enjoy school days.", "image": "https://cdn.myanimelist.net/images/anime/10/76120.jpg"}, {"id": 95, "title": "Monster", "titleJp": "モンスター", "genre": ["Drama", "Mystery", "Thriller"], "rating": 8.9, "episodes": 74, "status": "Completed", "year": 2004, "description": "A doctor hunts a former patient turned serial killer.", "image": "https://cdn.myanimelist.net/images/anime/10/18793.jpg"}, {"id": 96, "title": "Legend of the Galactic Heroes", "titleJp": "銀河英雄伝説", "genre": ["Drama", "Sci-Fi"], "rating": 9.0, "episodes": 110, "status": "Completed", "year": 1988, "description": "Two geniuses shape civilization in an interstellar war.", "image": "https://cdn.myanimelist.net/images/anime/13/13225.jpg"}, {"id": 97, "title": "Zom 100", "titleJp": "ゾン100", "genre": ["Action", "Comedy", "Horror"], "rating": 7.9, "episodes": 12, "status": "Ongoing", "year": 2023, "description": "A worker finds freedom in a zombie apocalypse with a bucket list.", "image": "https://myanimelist.net/images/anime/1384/136408.jpg"}, {"id": 98, "title": "World Trigger", "titleJp": "ワールドトリガー", "genre": ["Action", "Sci-Fi", "Supernatural"], "rating": 7.6, "episodes": 73, "status": "Completed", "year": 2014, "description": "An agency defends Earth from invaders using Triggers.", "image": "https://myanimelist.net/images/anime/1783/106843.jpg"}, {"id": 99, "title": "Undead Unluck", "titleJp": "アンデッドアンラック", "genre": ["Action", "Comedy", "Supernatural"], "rating": 7.5, "episodes": 24, "status": "Ongoing", "year": 2023, "description": "A girl of misfortune teams up with an immortal man.", "image": "https://cdn.myanimelist.net/images/anime/1506/138982.jpg"}, {"id": 100, "title": "Ranking of Kings S2", "titleJp": "王様ランキング S2", "genre": ["Adventure", "Drama", "Fantasy"], "rating": 8.2, "episodes": 23, "status": "Completed", "year": 2023, "description": "Prince Bojji continues his journey to become the greatest king.", "image": "https://cdn.myanimelist.net/images/anime/1347/117616.jpg"}];

/* ===== CUSTOM CURSOR ===== */
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
const supportsHover = window.matchMedia('(hover: hover)').matches;
const cursorEnabled = !isTouchDevice && supportsHover;

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let animFrameId;

function hideCustomCursor() {
  cursorDot.style.display = 'none';
  cursorRing.style.display = 'none';
}

if (!cursorEnabled) {
  hideCustomCursor();
} else {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  // Smooth trailing ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    animFrameId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover & click states
  const hoverTargets = 'a, button, .anime-card, .filter-tag, input';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) {
      cursorDot.classList.add('hovering');
      cursorRing.classList.add('hovering');
    }
  });

document.addEventListener('mouseout', e => {
  if (e.target.closest(hoverTargets)) {
    cursorDot.classList.remove('hovering');
    cursorRing.classList.remove('hovering');
  }
});

document.addEventListener('mousedown', () => {
  cursorDot.classList.add('clicking');
  cursorRing.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
  cursorDot.classList.remove('clicking');
  cursorRing.classList.remove('clicking');
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
  cursorDot.style.opacity = '0';
  cursorRing.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursorDot.style.opacity = '1';
  cursorRing.style.opacity = '1';
});
}

/* ===== FILTER STATE ===== */
const GENRES = ["All","Action","Adventure","Comedy","Drama","Fantasy","Mystery","Supernatural","Thriller","School","Horror","Sci-Fi","Romance","Slice of Life"];
const STATUSES = ["All","Completed","Ongoing"];
const SORTS = ["rating","year","title"];

let selectedGenre = "All";
let selectedStatus = "All";
let sortBy = "rating";

/* ===== STATS BAR ===== */
function renderStats() {
  const total = animeData.length;
  const completed = animeData.filter(a => a.status === 'Completed').length;
  const ongoing = animeData.filter(a => a.status === 'Ongoing').length;

  document.getElementById('statsBar').innerHTML = `
    <div class="stat-pill"><span class="dot dot-total"></span> ${total} Total Anime</div>
    <div class="stat-pill"><span class="dot dot-completed"></span> ${completed} Completed</div>
    <div class="stat-pill"><span class="dot dot-ongoing"></span> ${ongoing} Ongoing</div>
  `;
}

/* ===== FILTER BUTTONS ===== */
function createFilterButtons(containerId, items, activeValue, activeClass, onClick) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item => {
    const isActive = item === activeValue;
    const label = item.charAt(0).toUpperCase() + item.slice(1);
    const cls = isActive ? `filter-tag ${activeClass}` : 'filter-tag';
    return `<button class="${cls}" data-value="${item}">${label}</button>`;
  }).join('');

  el.querySelectorAll('.filter-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      onClick(btn.dataset.value);
      render();
    });
  });
}

function renderFilters() {
  createFilterButtons('genreFilters', GENRES, selectedGenre, 'active', v => { selectedGenre = v; });
  createFilterButtons('statusFilters', STATUSES, selectedStatus, 'active-status', v => { selectedStatus = v; });
  createFilterButtons('sortFilters', SORTS, sortBy, 'active-sort', v => { sortBy = v; });
}

/* ===== RANK BADGE ===== */
function getRankClass(rank) {
  if (rank === 1) return 'rank-badge rank-gold';
  if (rank === 2) return 'rank-badge rank-silver';
  if (rank === 3) return 'rank-badge rank-bronze';
  return 'rank-badge';
}

/* ===== CARD TEMPLATE ===== */
function cardHTML(a, rank) {
  const ratingPct = ((a.rating - 7) / 3 * 100).toFixed(0);
  return `
    <div class="anime-card">
      <div class="anime-img-wrap">
        <span class="${getRankClass(rank)}">${rank}</span>
        <img class="anime-img" src="${a.image || 'https://via.placeholder.com/420x260/111827/ffffff?text=No+Image'}" alt="${a.title}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/420x260/111827/ffffff?text=No+Image';">
      </div>
      <div class="anime-body">
        <div class="anime-header">
          <div>
            <div class="anime-title">${a.title}</div>
            <div class="anime-title-jp">${a.titleJp}</div>
          </div>
          <span class="status-badge status-${a.status}">${a.status}</span>
        </div>
        <p class="anime-desc">${a.description}</p>
        <div class="anime-genres">
          ${a.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
        </div>
        <div class="anime-stats">
          <span class="stat stat-rating">★ ${a.rating}</span>
          <span class="stat stat-eps">▶ ${a.episodes} eps</span>
          <span class="stat stat-year">${a.year}</span>
          <div class="rating-bar-wrap">
            <div class="rating-bar-fill" style="width: ${ratingPct}%"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ===== MAIN RENDER ===== */
function render() {
  const search = document.getElementById('searchInput').value.toLowerCase().trim();

  let list = animeData.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(search) || a.titleJp.includes(search);
    const matchGenre = selectedGenre === 'All' || a.genre.includes(selectedGenre);
    const matchStatus = selectedStatus === 'All' || a.status === selectedStatus;
    return matchSearch && matchGenre && matchStatus;
  });

  list.sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'year') return b.year - a.year;
    return a.title.localeCompare(b.title);
  });

  const countEl = document.getElementById('resultCount');
  countEl.innerHTML = `<strong>${list.length}</strong> anime ditemukan <div class="result-line"></div>`;

  const container = document.getElementById('animeList');

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🔍</span>
        <p>Anime tidak ditemukan</p>
        <small>Coba kata kunci atau filter lain</small>
      </div>`;
  } else {
    container.innerHTML = list.map((a, i) => cardHTML(a, i + 1)).join('');
    // Staggered card animation
    container.querySelectorAll('.anime-card').forEach((card, i) => {
      card.style.animationDelay = `${i * 30}ms`;
    });
  }

  renderFilters();
}

/* ===== INIT ===== */
document.getElementById('searchInput').addEventListener('input', render);
renderStats();
render();
