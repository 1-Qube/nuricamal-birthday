/**
 * ==============================================================================
 * NURICAMAL — THE WORLD IN HER COLORS / ТҮСТЕР ӘЛЕМІ / МИР В ЕЁ КРАСКАХ
 * Digital Art Exhibition & 12th Birthday Retrospective
 * Trilingual Engine: Kazakh (KZ) · English (EN) · Russian (RU)
 * Pure Vanilla JavaScript (No frameworks, No external dependencies)
 * ==============================================================================
 */

// Global Translations Dictionary
const i18nData = {
  kz: {
    page_title: "НУРИКАМАЛ — Түстер Әлемі // 12 Жас",
    colophon_tag: "КӨРМЕ КАТАЛОГЫ",
    colophon_meta: "XII ТОМ — № 24.11",
    nav_colors: "<span>I.</span> Түстер",
    nav_studio: "<span>II.</span> Шеберхана",
    nav_gallery: "<span>III.</span> Галерея",
    nav_dedication: "<span>✦</span> 12 Жасы",
    hero_meta_1: "[ МОНОГРАФИЯ ЖӘНЕ РЕТРОСПЕКТИВА ]",
    hero_meta_2: "АЛМАТЫ // 2012 — 2024",
    hero_meta_3: "[ № 12 КӨРМЕ КАТАЛОГЫ ]",
    hero_name: "НУРИКАМАЛ",
    hero_statement: "ШЫҒАРМАШЫЛЫҚПЕН ӨТКЕН ОН ЕКІ ЖЫЛ.",
    hero_caption: "24 ҚАРАША — ҚИЯЛ МЕН ШАБЫТ МЕРЕКЕСІ.",
    hero_quote: "«Ақ қағаз бос емес. Ол тек батылдықты күтіп тұрған әлем.»",
    hero_quote_label: "КУРАТОР ЖАЗБАСЫ // 01 БӨЛМЕ",
    hero_enter_btn: "КӨРМЕГЕ КІРУ",
    ch1_badge_num: "01 БӨЛІМ",
    ch1_badge_label: "ТҮСТЕР ӘЛЕМІ",
    ch1_title_line1: "ӘР ТҮСТІҢ",
    ch1_title_line2: "өз хикаясы бар.",
    ch1_manifesto: "Кейбіреулер әлемді жай ғана көреді. Ал басқалары оны жаңаша бояудың жолын табады.",
    ch1_stamp_1: "БОЯУ ТЕГІ: ҚИЯЛ МЕН СЕЗІМ",
    ch1_stamp_2: "ТҰРАҚТЫЛЫҒЫ: МӘҢГІЛІК",
    study1_num: "01 ЗЕРТТЕУ",
    study1_formula: "ТЕРЕҢ КОБАЛЬТ // 474 нм",
    study1_name: "Кобальт Аспаны",
    study1_desc: "Кешкі ымырттың шексіз тыныштығы. Аспан кәдімгі шеңберге сыймаған кезде Нурикамал таңдайтын терең түс.",
    study1_tag: "[ ТЕРЕҢДІК ЖӘНЕ КӨКЖИЕК ]",
    study2_num: "02 ЗЕРТТЕУ",
    study2_formula: "КИЗАК ҚЫЗЫЛЫ // 640 нм",
    study2_name: "Қызыл Киноварь Жалыны",
    study2_desc: "Ақ қағазға түскен алғашқы сызықтың батылдығы. Шынайы жылулық, шаттық пен жасампаздық еркіндігі.",
    study2_tag: "[ ЖҮРЕК ПЕН БАТЫЛДЫҚ ]",
    study3_num: "03 ЗЕРТТЕУ",
    study3_formula: "САРЫ ОХРА // 580 нм",
    study3_name: "Сары Алтын Сәуле",
    study3_desc: "Ашық дәптерге түскен таңғы нұр. Мөлдір қызығушылық, қуанышты күлкі және таза шабыт.",
    study3_tag: "[ СӘУЛЕ МЕН ОЙЫН ]",
    study4_num: "04 ЗЕРТТЕУ",
    study4_formula: "ВИРИДИАН ЖАСЫЛЫ // 520 нм",
    study4_name: "Жасыл Виридиан",
    study4_desc: "Тастар арасынан жарып шыққан тіршілік. Жайқалған жапырақтар мен нәзік, бірақ мықты өмір сыры.",
    study4_tag: "[ ЕРКІН ӨСУ ]",
    study5_num: "05 ЗЕРТТЕУ",
    study5_formula: "СҮМЕ ҚАРА СИЯСЫ // 0.05 ALBEDO",
    study5_name: "Сүме Сиясы",
    study5_desc: "Шындықтың салмағы мен негізі. Әр түске айқындық беріп, армандардың сұлбасын сызатын терең қалам.",
    study5_tag: "[ СҰЛБА МЕН АЙҚЫНДЫҚ ]",
    ch1_quote: "«Он екі жаста болу — барлық түстерді қолыңа алып, бұл әлемнің шегі жоқ екенін білу.»",
    ch1_signature: "— КУРАТОР ЖАЗБАСЫ, XII ТОМ",
    ch2_badge_num: "02 БӨЛІМ",
    ch2_badge_label: "ИНТЕРАКТИВТІ КЕНЕП",
    ch2_title_line1: "СЕНІҢ ҚОЛЫҢ.",
    ch2_title_line2: "Сенің бояуың.",
    ch2_subtext: "Шексіз цифрлық кенеп. Қаламмен немесе саусақпен сал. Әрбір сызық — шынайы өнер.",
    ch2_instruction: "Сурет салу үшін басып жүргіз · Төменнен бояу мен қылқаламды таңда · [U] қайтару",
    ch2_watermark_title: "АТАУСЫЗ КЕНЕП // СЕНІҢ ҚОЛТАҢБАҢДЫ КҮТУДЕ",
    ch2_watermark_sub: "Алғашқы бояу ізін қалдыру үшін кез келген жерді басыңыз",
    dock_texture: "ФАКТУРА",
    tool_water: "Акварель",
    tool_gouache: "Гуашь",
    tool_charcoal: "Көмір",
    tool_splatter: "Шашырату",
    tool_eraser: "Өшіргіш",
    dock_pigments: "БОЯУЛАР",
    dock_stroke: "ҚАЛЫҢДЫҚ:",
    act_undo: "Қайтару",
    act_clear: "Тазалау",
    act_save: "Сақтау",
    ch3_badge_num: "03 БӨЛІМ",
    ch3_badge_label: "РЕТРОСПЕКТИВА ЖӘНЕ МҰРАҒАТ",
    ch3_title_line1: "АЯҚТАЛМАҒАН",
    ch3_title_line2: "жинақ.",
    ch3_manifesto: "Бұл суреттер емес — Нурикамалдың өзі. Тәтті қорап, раушандар, раушан бақ және бұкіл бөлмені толтыратын күлкі.",
    ch3_stamp: "СЕРИЯ: ФОТОСУРЕТТЕР // НУРИКАМАЛ",
    hero_portrait_idx: "ПОРТРЕТТІК ЗЕРТТЕУ",
    hero_portrait_cap: "Көрмені ашатын күлкі.",
    placard_zoom: "ҮЛКЕЙТУ ҮШІН БАСЫҢЫЗ",
    placard1_idx: "№ 01 ФОТОСУРЕТ",
    placard1_title: "Ең тәтті қорап",
    placard1_medium: "Фото — шоколадты құлпынай, қызғылт бау, мұқият ұстау",
    placard1_year: "НУРИКАМАЛ",
    placard1_dim: "АЛМАТЫ",
    placard2_idx: "№ 02 ФОТОСУРЕТ",
    placard2_title: "Екеуге арналған раушандар",
    placard2_medium: "Фото — дос, қызғылт раушан, күміс перде",
    placard2_year: "НУРИКАМАЛ",
    placard2_dim: "БІРГЕ",
    placard3_idx: "№ 03 ФОТОСУРЕТ",
    placard3_title: "Күлкі сағаты",
    placard3_medium: "Фото — үш тәтті және бөлмені толтыратын күлкі",
    placard3_year: "НУРИКАМАЛ",
    placard3_dim: "КАФЕ",
    placard4_idx: "№ 04 ФОТОСУРЕТ",
    placard4_title: "Раушандар арасында",
    placard4_medium: "Фото — қызыл раушан бағы және соның ішінде тұрған ол",
    placard4_year: "НУРИКАМАЛ",
    placard4_dim: "БАҚ",
    placard5_idx: "№ 05 ЭКСПОНАТ",
    placard5_title: "Атаусыз (Он екі жас)",
    placard5_medium: "Таза бельгиялық зығыр, басталмаған кеңістік",
    placard5_date: "МЕРЗІМІ: 24 ҚАРАША 2024 →",
    placard5_status: "КҮЙІ: БАСТАЛУДА",
    future_headline: "АЛДАҒЫ ЖЫЛҒА АРНАЛҒАН КЕНЕП",
    future_caption: "Он екі жастың жаңа әсерлері мен бояуларын күтіп тұрған ақ бет.",
    rev_eyebrow: "[ АРНАЙЫ ТУЫНДЫ — 04 БӨЛМЕ ]",
    rev_trigger_small: "ЕҢ МАҢЫЗДЫ ЖАЗБА",
    rev_trigger_large: "ТАҒЫ БІР НӘРСЕ БАР...",
    rev_trigger_sub: "[ ТІЛЕКТІ АШУ ҮШІН БАСЫҢЫЗ ✦ ]",
    rev_close_btn: "ЖАБУ ✕",
    rev_badge_age: "ОН ЕКІ ЖАС",
    rev_badge_date: "24 ҚАРАША",
    rev_headline_prefix: "ТУҒАН КҮНІҢМЕН,",
    rev_name: "НУРИКАМАЛ!",
    rev_message: "Әрдайым жаңа түстерді, тың армандарды және шабытқа толы сәттерді таба бер. Әлемді өз қиялың арқылы танудан ешқашан жалықпа. Бұл өмір — сенің шексіз кенебің.",
    rev_interactive_note: "✦ Кенептің кез келген жерін басып, мерекелік бояу шашуын қосыңыз ✦",
    end_annotation: "[ ЭПИЛОГ // ЖАЛҒАСЫ ]",
    end_title: "БҮКІЛ ӘЛЕМ — СЕНІҢ КЕНЕБІҢ.",
    end_subtitle: "Өнер жолыңнан тайма, Нурикамал.",
    end_signature: "Шын жүректен және зор сүйіспеншілікпен.",
    end_return_btn: "БАСЫНА ОРАЛУ",
    footer_title: "НУРИКАМАЛ — ШЫҒАРМАШЫЛЫҚҚА ТОЛЫ 12 ЖЫЛ",
    footer_copy: "Он екінші туған күніне арналған көрме · 24 қараша",
    footer_tagline: "КІШКЕНТАЙ ҚЫЗ. ШЕКСІЗ КЕНЕП. ТҮСТЕР ӘЛЕМІ.",
    footer_rights: "ҚИЯЛ ҚҰҚЫҒЫ МӘҢГІ САҚТАЛАДЫ."
  },

  en: {
    page_title: "NURICAMAL — The World in Her Colors | 12 Years",
    colophon_tag: "CATALOGUE D'EXPOSITION",
    colophon_meta: "VOL. XII — NO. 24.11",
    nav_colors: "<span>I.</span> Colors",
    nav_studio: "<span>II.</span> Studio",
    nav_gallery: "<span>III.</span> Gallery",
    nav_dedication: "<span>✦</span> 12th Year",
    hero_meta_1: "[ MONOGRAPH & RETROSPECTIVE ]",
    hero_meta_2: "ALMATY // 2012 — 2024",
    hero_meta_3: "[ EXHIBITION CATALOGUE NO. 12 ]",
    hero_name: "NURICAMAL",
    hero_statement: "TWELVE YEARS OF CREATING.",
    hero_caption: "24 NOVEMBER — A CELEBRATION OF IMAGINATION.",
    hero_quote: "“A blank page is not empty. It is simply waiting for courage.”",
    hero_quote_label: "CURATION NOTE // ROOM 01",
    hero_enter_btn: "ENTER THE EXHIBITION",
    ch1_badge_num: "CHAPTER 01",
    ch1_badge_label: "A WORLD OF COLORS",
    ch1_title_line1: "EVERY COLOR",
    ch1_title_line2: "has a story.",
    ch1_manifesto: "Some people see the world. Others find new ways to color it.",
    ch1_stamp_1: "PIGMENT ORIGIN: IMAGINATION",
    ch1_stamp_2: "LIGHTFASTNESS: ETERNAL",
    study1_num: "STUDY 01",
    study1_formula: "COBALT DEEP // 474 nm",
    study1_name: "Cobalt Sky",
    study1_desc: "The infinite calm of late dusk. The shade Nuricamal reaches for when the sky is too vast to fit inside ordinary lines.",
    study1_tag: "[ DEPTH & HORIZONS ]",
    study2_num: "STUDY 02",
    study2_formula: "VERMILION CADMIUM // 640 nm",
    study2_name: "Vermilion Spark",
    study2_desc: "The courage of the first mark on paper. Unapologetic warmth, celebration, and the burning urge to invent.",
    study2_tag: "[ AUDACITY & HEART ]",
    study3_num: "STUDY 03",
    study3_formula: "BUTTER OCHRE // 580 nm",
    study3_name: "Butter Sunlight",
    study3_desc: "Morning light spilling across an open sketchbook. Pure curiosity, spontaneous laughter, and unexpected joy.",
    study3_tag: "[ RADIANCE & PLAY ]",
    study4_num: "STUDY 04",
    study4_formula: "VIRIDIAN SAGE // 520 nm",
    study4_name: "Viridian Bloom",
    study4_desc: "Living wild things that sprout between stone slabs. Wild stems, gentle leaves, and quiet resilience.",
    study4_tag: "[ WILD GROWTH ]",
    study5_num: "STUDY 05",
    study5_formula: "SUMI BONE INK // 0.05 ALBEDO",
    study5_name: "Sumi Bone Ink",
    study5_desc: "The grounding weight of truth. The contour line that embraces every color and gives dreams their shape.",
    study5_tag: "[ CONTOUR & CLARITY ]",
    ch1_quote: "“To be twelve is to hold every color in both hands and know the canvas has no edges.”",
    ch1_signature: "— CURATOR'S MONOGRAPH, VOL. XII",
    ch2_badge_num: "CHAPTER 02",
    ch2_badge_label: "THE INTERACTIVE CANVAS",
    ch2_title_line1: "YOUR HAND.",
    ch2_title_line2: "Your pigment.",
    ch2_subtext: "An infinite digital artboard. Paint with your cursor or finger. Every stroke is real.",
    ch2_instruction: "Drag or click to paint · Select pigments & textures below · Press [U] to undo",
    ch2_watermark_title: "UNTITLED CANVAS // AWAITING GESTURE",
    ch2_watermark_sub: "Click anywhere or touch to lay down your first brushstroke",
    dock_texture: "TEXTURE",
    tool_water: "Water",
    tool_gouache: "Gouache",
    tool_charcoal: "Charcoal",
    tool_splatter: "Splatter",
    tool_eraser: "Eraser",
    dock_pigments: "PIGMENTS",
    dock_stroke: "STROKE:",
    act_undo: "Undo",
    act_clear: "Clear",
    act_save: "Export",
    ch3_badge_num: "CHAPTER 03",
    ch3_badge_label: "RETROSPECTIVE & ARCHIVE",
    ch3_title_line1: "AN UNFINISHED",
    ch3_title_line2: "collection.",
    ch3_manifesto: "These are not paintings. They are Nuricamal herself — a box of sweets, roses for two, a garden in bloom, and a laugh that fills the table.",
    ch3_stamp: "SERIES: PHOTOGRAPHS // NURICAMAL",
    hero_portrait_idx: "PORTRAIT STUDY",
    hero_portrait_cap: "The laugh that opens the exhibition.",
    placard_zoom: "CLICK TO ENLARGE",
    placard1_idx: "PHOTOGRAPH NO. 01",
    placard1_title: "A Box of Sweetness",
    placard1_medium: "Photograph — chocolate strawberries, a pink ribbon, a careful hold",
    placard1_year: "NURICAMAL",
    placard1_dim: "ALMATY",
    placard2_idx: "PHOTOGRAPH NO. 02",
    placard2_title: "Roses for Two",
    placard2_medium: "Photograph — a friend, pink roses, silver curtains",
    placard2_year: "NURICAMAL",
    placard2_dim: "TOGETHER",
    placard3_idx: "PHOTOGRAPH NO. 03",
    placard3_title: "The Laughing Hour",
    placard3_medium: "Photograph — three sweets and a smile that fills the room",
    placard3_year: "NURICAMAL",
    placard3_dim: "CAFÉ",
    placard4_idx: "PHOTOGRAPH NO. 04",
    placard4_title: "Among the Roses",
    placard4_medium: "Photograph — a garden in full bloom, and her standing in it",
    placard4_year: "NURICAMAL",
    placard4_dim: "THE GARDEN",
    placard5_idx: "EXHIBIT NO. 05",
    placard5_title: "Untitled (Age Twelve)",
    placard5_medium: "Pure Belgian linen, gesso, uncommitted space",
    placard5_date: "DATE: 24 NOVEMBER 2024 →",
    placard5_status: "STATUS: COMMENCING",
    future_headline: "RESERVED FOR THE YEAR AHEAD",
    future_caption: "An unwritten surface waiting for the brushstrokes of age twelve.",
    rev_eyebrow: "[ SPECIAL COMMISSION — ROOM 04 ]",
    rev_trigger_small: "AN UNFINISHED NOTE",
    rev_trigger_large: "ONE MORE THING...",
    rev_trigger_sub: "[ CLICK TO UNVEIL THE DEDICATION ✦ ]",
    rev_close_btn: "CLOSE ✕",
    rev_badge_age: "TWELVE YEARS OLD",
    rev_badge_date: "24 NOVEMBER",
    rev_headline_prefix: "HAPPY 12TH BIRTHDAY,",
    rev_name: "NURICAMAL!",
    rev_message: "May you always find new colors, new dreams, and new reasons to create. Never stop exploring the world through your imagination. This is your canvas.",
    rev_interactive_note: "✦ Click anywhere to release more color blooms into her celebration ✦",
    end_annotation: "[ EPILOGUE // CONTINUUM ]",
    end_title: "THE WORLD IS YOUR CANVAS.",
    end_subtitle: "Keep creating, Nuricamal.",
    end_signature: "Made with love.",
    end_return_btn: "RETURN TO BEGINNING",
    footer_title: "NURICAMAL — 12 YEARS OF CREATING",
    footer_copy: "Curated on the occasion of her twelfth birthday · 24 November",
    footer_tagline: "A LITTLE GIRL. AN INFINITE CANVAS. A WORLD OF COLORS.",
    footer_rights: "ALL RIGHTS TO IMAGINATION RESERVED."
  },

  ru: {
    page_title: "НУРИКАМАЛ — Мир в Её Красках // 12 Лет",
    colophon_tag: "КАТАЛОГ ВЫСТАВКИ",
    colophon_meta: "ТОМ XII — № 24.11",
    nav_colors: "<span>I.</span> Цвета",
    nav_studio: "<span>II.</span> Студия",
    nav_gallery: "<span>III.</span> Галерея",
    nav_dedication: "<span>✦</span> 12 Лет",
    hero_meta_1: "[ МОНОГРАФИЯ И РЕТРОСПЕКТИВА ]",
    hero_meta_2: "АЛМАТЫ // 2012 — 2024",
    hero_meta_3: "[ КАТАЛОГ ВЫСТАВКИ № 12 ]",
    hero_name: "НУРИКАМАЛ",
    hero_statement: "ДВЕНАДЦАТЬ ЛЕТ ТВОРЧЕСТВА.",
    hero_caption: "24 НОЯБРЯ — ПРАЗДНИК ВООБРАЖЕНИЯ.",
    hero_quote: "«Чистый лист не пуст. Он просто ждёт смелости.»",
    hero_quote_label: "ЗАМЕТКА КУРАТОРА // ЗАЛ 01",
    hero_enter_btn: "ВОЙТИ НА ВЫСТАВКУ",
    ch1_badge_num: "ГЛАВА 01",
    ch1_badge_label: "МИР ЦВЕТОВ",
    ch1_title_line1: "У КАЖДОГО ЦВЕТА",
    ch1_title_line2: "есть своя история.",
    ch1_manifesto: "Одни люди просто смотрят на мир. Другие находят новые способы его раскрасить.",
    ch1_stamp_1: "ИСТОЧНИК ПИГМЕНТА: ВООБРАЖЕНИЕ",
    ch1_stamp_2: "СВЕТОСТОЙКОСТЬ: ВЕЧНАЯ",
    study1_num: "ЭТЮД 01",
    study1_formula: "ГЛУБОКИЙ КОБАЛЬТ // 474 нм",
    study1_name: "Небесный кобальт",
    study1_desc: "Бесконечное спокойствие поздних сумерек. Оттенок, к которому Нурикамал тянется, когда небо слишком велико для обычных рамок.",
    study1_tag: "[ ГЛУБИНА И ГОРИЗОНТЫ ]",
    study2_num: "ЭТЮД 02",
    study2_formula: "КАДМИЙ КИНОВАРЬ // 640 нм",
    study2_name: "Искрящийся киноварь",
    study2_desc: "Смелость первого штриха на бумаге. Теплота, праздник и непреодолимое желание изобретать.",
    study2_tag: "[ СМЕЛОСТЬ И СЕРДЦЕ ]",
    study3_num: "ЭТЮД 03",
    study3_formula: "СЛИВОЧНАЯ ОХРА // 580 нм",
    study3_name: "Сливочное солнце",
    study3_desc: "Утренний свет, льющийся на раскрытый альбом. Чистое любопытство, искренний смех и неожиданная радость.",
    study3_tag: "[ СИЯНИЕ И ИГРА ]",
    study4_num: "ЭТЮД 04",
    study4_formula: "ИЗУМРУДНЫЙ ВИРИДИАН // 520 нм",
    study4_name: "Соцветие виридиана",
    study4_desc: "Живые побеги, пробивающиеся сквозь камни. Дикие стебли, нежные листья и стойкая жажда жизни.",
    study4_tag: "[ СВОБОДНЫЙ РОСТ ]",
    study5_num: "ЭТЮД 05",
    study5_formula: "ТУШЬ СУМИ // 0.05 ALBEDO",
    study5_name: "Чернила суми",
    study5_desc: "Основа и вес реальности. Контурная линия, которая обнимает каждый цвет и придает мечтам форму.",
    study5_tag: "[ КОНТУР И ЯСНОСТЬ ]",
    ch1_quote: "«Быть двенадцатилетней — значит держать в руках все краски мира и знать, что у холста нет границ.»",
    ch1_signature: "— МОНОГРАФИЯ КУРАТОРА, ТОМ XII",
    ch2_badge_num: "ГЛАВА 02",
    ch2_badge_label: "ИНТЕРАКТИВНЫЙ ХОЛСТ",
    ch2_title_line1: "ТВОЯ РУКА.",
    ch2_title_line2: "Твоя краска.",
    ch2_subtext: "Бесконечный цифровой мольберт. Рисуйте курсором или пальцем. Каждый мазок настоящий.",
    ch2_instruction: "Зажмите и ведите для рисования · Выберите фактуру и пигмент ниже · [U] отменить",
    ch2_watermark_title: "ХОЛСТ БЕЗ НАЗВАНИЯ // В ОЖИДАНИИ ЖЕСТА",
    ch2_watermark_sub: "Нажмите в любом месте, чтобы нанести первый мазок",
    dock_texture: "ФАКТУРА",
    tool_water: "Вода",
    tool_gouache: "Гуашь",
    tool_charcoal: "Уголь",
    tool_splatter: "Брызги",
    tool_eraser: "Ластик",
    dock_pigments: "ПИГМЕНТЫ",
    dock_stroke: "ТОЛЩИНА:",
    act_undo: "Отмена",
    act_clear: "Очистить",
    act_save: "Экспорт",
    ch3_badge_num: "ГЛАВА 03",
    ch3_badge_label: "РЕТРОСПЕКТИВА И АРХИВ",
    ch3_title_line1: "НЕОКОНЧЕННАЯ",
    ch3_title_line2: "коллекция.",
    ch3_manifesto: "Это не картины. Это сама Нурикамал — коробка сладостей, розы на двоих, сад в цвету и смех, который заполняет стол.",
    ch3_stamp: "СЕРИЯ: ФОТОГРАФИИ // НУРИКАМАЛ",
    hero_portrait_idx: "ПОРТРЕТНЫЙ ЭТЮД",
    hero_portrait_cap: "Смех, которым открывается выставка.",
    placard_zoom: "НАЖМИТЕ, ЧТОБЫ УВЕЛИЧИТЬ",
    placard1_idx: "ФОТОГРАФИЯ № 01",
    placard1_title: "Самая сладкая коробка",
    placard1_medium: "Фото — клубника в шоколаде, розовая лента, бережные руки",
    placard1_year: "НУРИКАМАЛ",
    placard1_dim: "АЛМАТЫ",
    placard2_idx: "ФОТОГРАФИЯ № 02",
    placard2_title: "Розы на двоих",
    placard2_medium: "Фото — подруга, розовые розы, серебряные шторы",
    placard2_year: "НУРИКАМАЛ",
    placard2_dim: "ВДВОЁМ",
    placard3_idx: "ФОТОГРАФИЯ № 03",
    placard3_title: "Час смеха",
    placard3_medium: "Фото — три сладости и улыбка, которая заполняет комнату",
    placard3_year: "НУРИКАМАЛ",
    placard3_dim: "КАФЕ",
    placard4_idx: "ФОТОГРАФИЯ № 04",
    placard4_title: "Среди роз",
    placard4_medium: "Фото — сад в полном цвету и она в самой середине",
    placard4_year: "НУРИКАМАЛ",
    placard4_dim: "САД",
    placard5_idx: "ЭКСПОНАТ № 05",
    placard5_title: "Без названия (Двенадцать лет)",
    placard5_medium: "Бельгийский лён, левкас, нетронутое пространство",
    placard5_date: "ДАТА: 24 НОЯБРЯ 2024 →",
    placard5_status: "СТАТУС: НАЧАЛО",
    future_headline: "ХОЛСТ ДЛЯ ПРЕДСТОЯЩЕГО ГОДА",
    future_caption: "Чистая поверхность, ожидающая мазков и открытий двенадцатого года.",
    rev_eyebrow: "[ ОСОБАЯ КОМИССИЯ — ЗАЛ 04 ]",
    rev_trigger_small: "НЕОКОНЧЕННАЯ ЗАМЕТКА",
    rev_trigger_large: "ЕЩЁ КОЕ-ЧТО...",
    rev_trigger_sub: "[ НАЖМИТЕ, ЧТОБЫ ОТКРЫТЬ ПОСВЯЩЕНИЕ ✦ ]",
    rev_close_btn: "ЗАКРЫТЬ ✕",
    rev_badge_age: "ДВЕНАДЦАТЬ ЛЕТ",
    rev_badge_date: "24 НОЯБРЯ",
    rev_headline_prefix: "С 12-М ДНЁМ РОЖДЕНИЯ,",
    rev_name: "НУРИКАМАЛ!",
    rev_message: "Пусть в твоей жизни всегда находятся новые краски, смелые мечты и вдохновение творить. Никогда не переставай исследовать этот мир силой своего воображения. Этот мир — твой холст.",
    rev_interactive_note: "✦ Нажмите в любом месте, чтобы запустить праздничные всплески красок ✦",
    end_annotation: "[ ЭПИЛОГ // ПРОДОЛЖЕНИЕ ]",
    end_title: "ВЕСЬ ЭТОТ МИР — ТВОЙ ХОЛСТ.",
    end_subtitle: "Продолжай творить, Нурикамал.",
    end_signature: "Создано с любовью.",
    end_return_btn: "ВЕРНУТЬСЯ В НАЧАЛО",
    footer_title: "НУРИКАМАЛ — 12 ЛЕТ ТВОРЧЕСТВА",
    footer_copy: "Выставка к двенадцатому дню рождения · 24 ноября",
    footer_tagline: "МАЛЕНЬКАЯ ДЕВОЧКА. БЕСКОНЕЧНЫЙ ХОЛСТ. МИР КРАСОК.",
    footer_rights: "ВСЕ ПРАВА НА ВООБРАЖЕНИЕ ЗАЩИЩЕНЫ."
  }
};

let currentLanguage = "kz"; // Default active language

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initCursorPaintTrail();
  initDrawingStudio();
  initBirthdayReveal();
  initNavigationAndScroll();
  initPhotoLightbox();
});

/* ==============================================================================
 * 00. TRILINGUAL LANGUAGE ENGINE (KZ · EN · RU)
 * Instant, smooth switching across all chapters, annotations, and UI elements
 * ============================================================================== */
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-btn");
  
  // Retrieve saved preference or default to Kazakh
  const savedLang = localStorage.getItem("nuricamal_lang") || "kz";
  applyLanguage(savedLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      if (selected && selected !== currentLanguage) {
        applyLanguage(selected);
      }
    });
  });
}

function applyLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang === "kz" ? "kk" : lang;
  try {
    localStorage.setItem("nuricamal_lang", lang);
  } catch (e) {
    // Graceful fallback for privacy/sandbox modes
  }

  // Update switcher buttons state
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update Page Title
  if (i18nData[lang].page_title) {
    document.title = i18nData[lang].page_title;
  }

  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll("[data-i18n]");
  const dict = i18nData[lang];

  elements.forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      if (dict[key].includes("<span")) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}


/* ==============================================================================
 * 01. INTERACTIVE CURSOR PAINT TRAIL (DESKTOP)
 * Leaves subtle watercolor droplets that fade gently as the visitor moves
 * ============================================================================== */
function initCursorPaintTrail() {
  const canvas = document.getElementById("cursor-trail-canvas");
  if (!canvas) return;

  // Disable on touch devices to conserve battery & performance
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const palette = [
    "rgba(20, 52, 203, 0.45)",  // Cobalt
    "rgba(227, 55, 30, 0.4)",   // Vermilion
    "rgba(245, 206, 66, 0.45)", // Butter Yellow
    "rgba(26, 99, 71, 0.35)",   // Viridian
    "rgba(18, 17, 16, 0.25)"    // Ink
  ];

  let lastX = null;
  let lastY = null;

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (lastX === null) {
      lastX = x;
      lastY = y;
      return;
    }

    const dist = Math.hypot(x - lastX, y - lastY);
    // Spawn subtle droplets only if cursor has moved noticeably
    if (dist > 8) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      particles.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        radius: Math.random() * 4 + 2,
        maxRadius: Math.random() * 9 + 4,
        alpha: 0.65,
        decay: Math.random() * 0.015 + 0.012,
        color: color
      });
      lastX = x;
      lastY = y;
    }
  });

  function renderTrail() {
    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.alpha -= p.decay;
      if (p.radius < p.maxRadius) {
        p.radius += 0.25;
      }

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(renderTrail);
  }

  renderTrail();
}


/* ==============================================================================
 * 02. CHAPTER TWO — THE INTERACTIVE DRAWING STUDIO
 * Full-featured art studio canvas with 5 brush textures, undo, export, & touch
 * ============================================================================== */
function initDrawingStudio() {
  const canvas = document.getElementById("paint-canvas");
  const stage = document.getElementById("studio-stage");
  const emptyState = document.getElementById("canvas-empty-state");
  if (!canvas || !stage) return;

  const ctx = canvas.getContext("2d");

  // State
  let isDrawing = false;
  let currentColor = "#121110";
  let currentBrush = "watercolor"; // 'watercolor' | 'oil' | 'charcoal' | 'splatter' | 'eraser'
  let currentSize = 16;
  let lastX = 0;
  let lastY = 0;
  let points = [];
  let undoStack = [];
  const MAX_UNDO = 20;

  // Resize canvas for sharp Retina display while preserving content
  let lastRectWidth = 0;
  let lastRectHeight = 0;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    
    // Skip minor resize triggers caused by mobile scroll address bar toggle
    if (Math.abs(rect.width - lastRectWidth) < 3 && Math.abs(rect.height - lastRectHeight) < 3) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;

    let temp = null;
    if (canvas.width > 0 && canvas.height > 0) {
      temp = document.createElement("canvas");
      temp.width = canvas.width;
      temp.height = canvas.height;
      temp.getContext("2d").drawImage(canvas, 0, 0);
    }

    lastRectWidth = rect.width;
    lastRectHeight = rect.height;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    if (temp) {
      ctx.drawImage(temp, 0, 0, canvas.width / dpr, canvas.height / dpr);
    }
  }

  window.addEventListener("resize", resizeCanvas);
  setTimeout(resizeCanvas, 50);

  // Save state for undo
  function pushUndo() {
    if (undoStack.length >= MAX_UNDO) {
      undoStack.shift();
    }
    const dpr = window.devicePixelRatio || 1;
    const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
    undoStack.push(snap);
  }

  // Restore undo
  function handleUndo() {
    if (undoStack.length === 0) return;
    const previous = undoStack.pop();
    ctx.putImageData(previous, 0, 0);
  }

  // Keyboard shortcut: U or Ctrl+Z for undo
  window.addEventListener("keydown", (e) => {
    if ((e.key === "u" || e.key === "U") && !e.ctrlKey && !e.metaKey) {
      handleUndo();
    } else if ((e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleUndo();
    }
  });

  // Get pointer coordinates relative to canvas
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  // Drawing event handlers
  function startDrawing(e) {
    if (e.touches && e.touches.length > 1) return;
    e.preventDefault();
    isDrawing = true;
    pushUndo();

    if (emptyState) {
      emptyState.style.opacity = "0";
      setTimeout(() => {
        emptyState.style.display = "none";
      }, 500);
    }

    const pos = getPos(e);
    lastX = pos.x;
    lastY = pos.y;
    points = [pos];

    if (currentBrush === "splatter") {
      drawSplatter(pos.x, pos.y);
    } else {
      drawStroke(pos.x, pos.y, true);
    }
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);

    points.push(pos);

    if (currentBrush === "splatter") {
      drawSplatter(pos.x, pos.y);
    } else {
      drawSmoothStroke();
    }

    lastX = pos.x;
    lastY = pos.y;
  }

  function stopDrawing(e) {
    if (!isDrawing) return;
    isDrawing = false;
    points = [];
  }

  // Smooth quadratic curve stroke engine
  function drawSmoothStroke() {
    if (points.length < 2) return;

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (currentBrush === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = currentSize * 1.5;
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else if (currentBrush === "watercolor") {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.22;
      ctx.lineWidth = currentSize;
      ctx.strokeStyle = currentColor;
    } else if (currentBrush === "oil") {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.95;
      ctx.lineWidth = currentSize;
      ctx.strokeStyle = currentColor;
    } else if (currentBrush === "charcoal") {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.65;
      ctx.lineWidth = Math.max(2, currentSize * 0.45);
      ctx.strokeStyle = currentColor;
    }

    ctx.beginPath();
    const p1 = points[points.length - 2];
    const p2 = points[points.length - 1];
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;

    ctx.moveTo(p1.x, p1.y);
    ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
    ctx.stroke();

    // Charcoal grainy jitter marks
    if (currentBrush === "charcoal") {
      for (let i = 0; i < 4; i++) {
        const jx = midX + (Math.random() - 0.5) * currentSize * 0.8;
        const jy = midY + (Math.random() - 0.5) * currentSize * 0.8;
        ctx.fillStyle = currentColor;
        ctx.fillRect(jx, jy, 1.5, 1.5);
      }
    }

    ctx.restore();
  }

  function drawStroke(x, y, isFirst) {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (currentBrush === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = currentSize * 1.5;
      ctx.beginPath();
      ctx.arc(x, y, currentSize * 0.75, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = currentColor;
      ctx.globalAlpha = currentBrush === "watercolor" ? 0.35 : 0.9;
      ctx.beginPath();
      ctx.arc(x, y, currentSize / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // Splatter brush effect
  function drawSplatter(cx, cy) {
    ctx.save();
    ctx.fillStyle = currentColor;
    const dropCount = Math.floor(Math.random() * 8) + 5;
    const spread = currentSize * 2.2;

    for (let i = 0; i < dropCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * spread;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      const dropRadius = Math.random() * (currentSize / 4) + 1;

      ctx.globalAlpha = Math.random() * 0.5 + 0.4;
      ctx.beginPath();
      ctx.arc(x, y, dropRadius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // Attach Pointer Events
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  window.addEventListener("mouseup", stopDrawing);

  canvas.addEventListener("touchstart", startDrawing, { passive: false });
  canvas.addEventListener("touchmove", draw, { passive: false });
  window.addEventListener("touchend", stopDrawing);

  // Palette Controls
  const toolButtons = document.querySelectorAll(".dock-tool-btn");
  toolButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      toolButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentBrush = btn.dataset.brush;
    });
  });

  const colorWells = document.querySelectorAll(".color-well");
  colorWells.forEach((well) => {
    well.addEventListener("click", () => {
      colorWells.forEach((w) => w.classList.remove("active"));
      well.classList.add("active");
      currentColor = well.dataset.color;
      if (currentBrush === "eraser") {
        const waterBtn = document.querySelector('[data-brush="watercolor"]');
        if (waterBtn) waterBtn.click();
      }
    });
  });

  const customColorInput = document.getElementById("custom-color-input");
  const customColorPreview = document.getElementById("custom-color-preview");
  if (customColorInput) {
    customColorInput.addEventListener("input", (e) => {
      currentColor = e.target.value;
      if (customColorPreview) {
        customColorPreview.style.backgroundColor = currentColor;
      }
      colorWells.forEach((w) => w.classList.remove("active"));
      if (currentBrush === "eraser") {
        const waterBtn = document.querySelector('[data-brush="watercolor"]');
        if (waterBtn) waterBtn.click();
      }
    });
  }

  // Size Slider & Preview Dot
  const sizeSlider = document.getElementById("brush-size-slider");
  const sizeNum = document.getElementById("brush-size-num");
  const previewDot = document.getElementById("brush-preview-dot");
  if (sizeSlider) {
    sizeSlider.addEventListener("input", (e) => {
      currentSize = parseInt(e.target.value, 10);
      if (sizeNum) sizeNum.textContent = currentSize;
      if (previewDot) {
        previewDot.style.width = `${Math.min(32, Math.max(6, currentSize))}px`;
        previewDot.style.height = `${Math.min(32, Math.max(6, currentSize))}px`;
      }
    });
  }

  // Undo Button
  const undoBtn = document.getElementById("canvas-undo-btn");
  if (undoBtn) {
    undoBtn.addEventListener("click", handleUndo);
  }

  // Clear Canvas Button
  const clearBtn = document.getElementById("canvas-clear-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      pushUndo();
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    });
  }

  // Save / Export Artwork
  const saveBtn = document.getElementById("canvas-save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const exportCanvas = document.createElement("canvas");
      exportCanvas.width = canvas.width;
      exportCanvas.height = canvas.height;
      const expCtx = exportCanvas.getContext("2d");

      expCtx.fillStyle = "#FAF8F5";
      expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
      expCtx.drawImage(canvas, 0, 0);

      const link = document.createElement("a");
      link.download = `nuricamal-masterpiece-12-${Date.now()}.png`;
      link.href = exportCanvas.toDataURL("image/png");
      link.click();
    });
  }
}




/* ==============================================================================
 * 04. CHAPTER FOUR — THE BIRTHDAY REVEAL & CONFETTI ENGINE
 * Full-screen celebratory canvas explosion with painterly confetti & bursts
 * ============================================================================== */
function initBirthdayReveal() {
  const triggerBtn = document.getElementById("reveal-trigger-btn");
  const stage = document.getElementById("celebration-stage");
  const closeBtn = document.getElementById("close-celebration-btn");
  const burstCanvas = document.getElementById("celebration-burst-canvas");

  if (!triggerBtn || !stage || !burstCanvas) return;

  const ctx = burstCanvas.getContext("2d");
  let width = (burstCanvas.width = window.innerWidth);
  let height = (burstCanvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = burstCanvas.width = window.innerWidth;
    height = burstCanvas.height = window.innerHeight;
  });

  let confettiParticles = [];
  let isCelebrationActive = false;
  let animationId = null;

  const confettiPalette = [
    "#1434CB", // Cobalt
    "#E3371E", // Vermilion
    "#F5CE42", // Butter Yellow
    "#1A6347", // Viridian
    "#D48B38", // Ochre
    "#FFFFFF", // Titanium White
    "#FF70A6"  // Coral Rose
  ];

  function spawnConfetti(count = 120, originX = width / 2, originY = height / 2) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 3;
      const color = confettiPalette[Math.floor(Math.random() * confettiPalette.length)];

      confettiParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 5,
        gravity: 0.18,
        drag: 0.982,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        width: Math.random() * 10 + 6,
        height: Math.random() * 16 + 8,
        color: color,
        alpha: 1,
        decay: Math.random() * 0.006 + 0.003
      });
    }
  }

  function renderConfetti() {
    ctx.clearRect(0, 0, width, height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];

      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += p.gravity;

      p.x += p.vx;
      p.y += p.vy;

      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > height + 50) {
        confettiParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;

      ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
      ctx.restore();
    }

    if (isCelebrationActive) {
      if (Math.random() < 0.28 && confettiParticles.length < 240) {
        spawnConfetti(2, Math.random() * width, -20);
      }
      animationId = requestAnimationFrame(renderConfetti);
    }
  }

  // Open Celebration
  triggerBtn.addEventListener("click", () => {
    isCelebrationActive = true;
    stage.classList.add("active");
    stage.setAttribute("aria-hidden", "false");

    spawnConfetti(160, width / 2, height / 2);
    spawnConfetti(80, width * 0.25, height * 0.4);
    spawnConfetti(80, width * 0.75, height * 0.4);

    if (!animationId) {
      renderConfetti();
    }
  });

  // Close Celebration
  closeBtn.addEventListener("click", () => {
    isCelebrationActive = false;
    stage.classList.remove("active");
    stage.setAttribute("aria-hidden", "true");
    cancelAnimationFrame(animationId);
    animationId = null;
    ctx.clearRect(0, 0, width, height);
    confettiParticles = [];
  });

  // Interactive Bursts when visitor clicks anywhere inside the celebration overlay
  stage.addEventListener("click", (e) => {
    if (e.target === closeBtn || closeBtn.contains(e.target)) return;
    spawnConfetti(45, e.clientX, e.clientY);
  });
}


/* ==============================================================================
 * 05. NAVIGATION & SMOOTH SCROLLING CONTROLS
 * ============================================================================== */
function initPhotoLightbox() {
  const box = document.getElementById("photo-lightbox");
  const img = document.getElementById("lightbox-img");
  const cap = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  if (!box || !img) return;

  function openPhoto(src, alt, key) {
    if (!src) return;
    img.src = src;
    img.alt = alt || "";
    const dict = i18nData[currentLanguage] || {};
    cap.textContent = (key && dict[key]) || alt || "";
    box.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closePhoto() {
    box.hidden = true;
    img.removeAttribute("src");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".exhibit-photo").forEach((photo) => {
    photo.addEventListener("click", () => {
      openPhoto(photo.getAttribute("src"), photo.alt, photo.dataset.captionKey);
    });
  });

  document.querySelectorAll(".hero-portrait-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const inner = btn.querySelector("img");
      openPhoto(btn.dataset.photo, inner ? inner.alt : "", btn.dataset.captionKey);
    });
  });

  closeBtn.addEventListener("click", closePhoto);
  box.addEventListener("click", (e) => {
    if (e.target === box) closePhoto();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !box.hidden) closePhoto();
  });
}

function initNavigationAndScroll() {
  const enterBtn = document.getElementById("enter-btn");
  if (enterBtn) {
    enterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById("chapter-one");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const returnTopBtn = document.getElementById("return-top-btn");
  if (returnTopBtn) {
    returnTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  let lastScrollY = window.scrollY;
  const header = document.querySelector(".exhibition-header");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (header) {
      if (currentScrollY > 160 && currentScrollY > lastScrollY) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
    }
    lastScrollY = currentScrollY;
  }, { passive: true });
}
