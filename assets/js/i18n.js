/* ===================================================================
   Kochick — i18n
   Trilingual: Slovak (default) / English / Ukrainian.
   Every translatable element carries data-i18n="key". To add copy,
   add the key to all three dictionaries below.
=================================================================== */
(function () {
  "use strict";

  var DEFAULT_LANG = "sk";
  var LANGS = ["sk", "en", "uk"];

  var T = {
    sk: {
      "meta.description": "Kochick je hravá appka pre rodičov s kočíkom. Prechádzaj sa, plň denné raidy, objavuj mesto a nájdi svoju kochick — parťáčku na prechádzky.",

      "nav.features": "Funkcie",
      "nav.how": "Ako to funguje",
      "nav.who": "Pre koho",
      "nav.contact": "Kontakt",
      "nav.download": "Stiahnuť",

      "hero.pill": "🍼 Pre rodičov v Bratislave",
      "hero.title": "Objavuj svoje mesto pešo. Nájdi svoju <span class=\"accent\">kochick</span>.",
      "hero.sub": "Premeň každodennú prechádzku s kočíkom na dobrodružstvo. Plň denné raidy, zbieraj body, objavuj ulice a spoznaj rodičov, ktorí sa prechádzajú tak ako ty.",
      "hero.badgePoints": "bodov dnes",
      "hero.badgeStreets": "18 navštívených ulíc",

      "store.iosSmall": "Stiahni na",
      "store.androidSmall": "Získaj na",

      "stats.raids": "denné raidy",
      "stats.map": "mesta na objavenie",
      "stats.friends": "nových priateľstiev",
      "stats.rank": "rebríček susedstva",

      "features.eyebrow": "Funkcie",
      "features.title": "Prechádzka, ktorá sa oplatí",
      "features.sub": "Všetko, čo z bežnej prechádzky s kočíkom spraví hru — a zo susedstva komunitu.",
      "feat.strolls.t": "Sleduj svoje strolls",
      "feat.strolls.d": "Zapni sledovanie a appka zaznamená tvoju trasu, vzdialenosť aj ulice, ktorými si prešla.",
      "feat.raids.t": "Denné raidy",
      "feat.raids.d": "Každý deň dostaneš tri raidy — ulice alebo miesta v okolí. Splň ich, získaj body a objav viac zo štvrte.",
      "feat.meetups.t": "Nájdi svoju kochick",
      "feat.meetups.d": "Nechceš sa prechádzať sama? Vytvor stretnutie alebo sa pridaj k inému rodičovi a spoznaj nových priateľov.",
      "feat.map.t": "Objavuj mapu mesta",
      "feat.map.d": "Každá prejdená ulica sa vyfarbí. Sleduj, koľko percent svojho okolia už máš objavených.",
      "feat.walk.t": "Nahlás bariéry",
      "feat.walk.d": "Zlý priechod alebo nedostupný chodník? Nahlás walkability a pomôž ostatným rodičom s kočíkom.",
      "feat.rank.t": "Rebríček",
      "feat.rank.d": "Zbieraj body, stúpaj v rebríčku svojho susedstva a súťaž o titul najaktívnejšieho rodiča.",

      "how.eyebrow": "Ako to funguje",
      "how.title": "Začni za tri kroky",
      "how.s1.t": "Stiahni appku",
      "how.s1.d": "Zaregistruj sa a vyber si svoju domácu štvrť. Tam sa sústredia tvoje raidy a pokrok.",
      "how.s2.t": "Prechádzaj sa a plň raidy",
      "how.s2.d": "Vyraz von s kočíkom, splň denné raidy, objavuj ulice a zbieraj body.",
      "how.s3.t": "Nájdi svoju kochick",
      "how.s3.d": "Pridaj sa k stretnutiu alebo si vytvor vlastné a spoznaj rodičov vo svojom okolí.",

      "who.eyebrow": "Pre koho je Kochick",
      "who.title": "Pre každého rodiča, ktorý nechce chodiť sám",
      "who.sub": "Materská alebo rodičovská dovolenka nemusí znamenať samotu. Kochick premení tvoje prechádzky na čas, na ktorý sa tešíš — plný objavovania, malých výziev a nových priateľstiev.",
      "who.p1": "Motivácia hýbať sa každý deň",
      "who.p2": "Spoznaj rodičov s deťmi v podobnom veku",
      "who.p3": "Lepšie spoznaj svoje mesto a okolie",
      "who.p4": "Prispej k lepšej dostupnosti pre kočíky",

      "cta.title": "Pripravená na prvú prechádzku?",
      "cta.sub": "Stiahni si Kochick a začni objavovať svoje mesto — a nových priateľov.",
      "cta.soon": "Máš otázku? Napíš nám na <a href=\"mailto:info@kochick.sk\">info@kochick.sk</a>.",

      "footer.tagline": "Objavuj mesto pešo. Nájdi svoju kochick.",
      "footer.linksTitle": "Odkazy",
      "footer.companyTitle": "Prevádzkovateľ",
      "footer.rights": "Všetky práva vyhradené."
    },

    en: {
      "meta.description": "Kochick is a playful app for parents with a stroller. Walk, complete daily raids, discover your city and find your kochick — your walking buddy.",

      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.who": "Who it's for",
      "nav.contact": "Contact",
      "nav.download": "Download",

      "hero.pill": "🍼 For parents in Bratislava",
      "hero.title": "Explore your city on foot. Find your <span class=\"accent\">kochick</span>.",
      "hero.sub": "Turn your everyday stroller walk into an adventure. Complete daily raids, earn points, discover streets and meet parents who walk just like you.",
      "hero.badgePoints": "points today",
      "hero.badgeStreets": "18 visited streets",

      "store.iosSmall": "Download on the",
      "store.androidSmall": "Get it on",

      "stats.raids": "daily raids",
      "stats.map": "of the city to discover",
      "stats.friends": "new friendships",
      "stats.rank": "neighbourhood ranking",

      "features.eyebrow": "Features",
      "features.title": "A walk that's worth it",
      "features.sub": "Everything that turns an ordinary stroller walk into a game — and your neighbourhood into a community.",
      "feat.strolls.t": "Track your strolls",
      "feat.strolls.d": "Start tracking and the app records your route, distance and every street you've walked.",
      "feat.raids.t": "Daily raids",
      "feat.raids.d": "Each day you get three raids — nearby streets or spots. Complete them, earn points and discover more of your area.",
      "feat.meetups.t": "Find your kochick",
      "feat.meetups.d": "Don't want to walk alone? Create a meetup or join another parent and make new friends.",
      "feat.map.t": "Discover the city map",
      "feat.map.d": "Every street you walk lights up. See how much of your neighbourhood you've already discovered.",
      "feat.walk.t": "Report barriers",
      "feat.walk.d": "Bad crossing or inaccessible pavement? Report walkability and help other parents with strollers.",
      "feat.rank.t": "Leaderboard",
      "feat.rank.d": "Earn points, climb your neighbourhood leaderboard and compete for the most active parent.",

      "how.eyebrow": "How it works",
      "how.title": "Get started in three steps",
      "how.s1.t": "Download the app",
      "how.s1.d": "Sign up and pick your home district. That's where your raids and progress will focus.",
      "how.s2.t": "Walk and complete raids",
      "how.s2.d": "Head out with your stroller, complete daily raids, discover streets and earn points.",
      "how.s3.t": "Find your kochick",
      "how.s3.d": "Join a meetup or create your own and meet parents in your area.",

      "who.eyebrow": "Who Kochick is for",
      "who.title": "For every parent who'd rather not walk alone",
      "who.sub": "Parental leave doesn't have to mean loneliness. Kochick turns your walks into time you look forward to — full of discovery, small challenges and new friendships.",
      "who.p1": "Motivation to move every day",
      "who.p2": "Meet parents with kids of a similar age",
      "who.p3": "Get to know your city and surroundings",
      "who.p4": "Help make the city more stroller-friendly",

      "cta.title": "Ready for your first walk?",
      "cta.sub": "Download Kochick and start discovering your city — and new friends.",
      "cta.soon": "Got a question? Write to us at <a href=\"mailto:info@kochick.sk\">info@kochick.sk</a>.",

      "footer.tagline": "Explore the city on foot. Find your kochick.",
      "footer.linksTitle": "Links",
      "footer.companyTitle": "Operator",
      "footer.rights": "All rights reserved."
    },

    uk: {
      "meta.description": "Kochick — це весела застосунок для батьків з візочком. Гуляй, виконуй щоденні рейди, досліджуй місто та знайди свою kochick — компаньйонку для прогулянок.",

      "nav.features": "Функції",
      "nav.how": "Як це працює",
      "nav.who": "Для кого",
      "nav.contact": "Контакти",
      "nav.download": "Завантажити",

      "hero.pill": "🍼 Для батьків у Братиславі",
      "hero.title": "Досліджуй своє місто пішки. Знайди свою <span class=\"accent\">kochick</span>.",
      "hero.sub": "Перетвори щоденну прогулянку з візочком на пригоду. Виконуй щоденні рейди, збирай бали, відкривай вулиці та знайомся з батьками, які гуляють так само, як ти.",
      "hero.badgePoints": "балів сьогодні",
      "hero.badgeStreets": "18 відвіданих вулиць",

      "store.iosSmall": "Завантажити в",
      "store.androidSmall": "Доступно в",

      "stats.raids": "щоденні рейди",
      "stats.map": "міста для відкриття",
      "stats.friends": "нових знайомств",
      "stats.rank": "рейтинг району",

      "features.eyebrow": "Функції",
      "features.title": "Прогулянка, що варта того",
      "features.sub": "Усе, що перетворює звичайну прогулянку з візочком на гру — а район на спільноту.",
      "feat.strolls.t": "Відстежуй свої прогулянки",
      "feat.strolls.d": "Увімкни відстеження, і застосунок запише твій маршрут, відстань і всі вулиці, якими ти пройшла.",
      "feat.raids.t": "Щоденні рейди",
      "feat.raids.d": "Щодня ти отримуєш три рейди — вулиці або місця поруч. Виконай їх, отримай бали та відкрий більше свого району.",
      "feat.meetups.t": "Знайди свою kochick",
      "feat.meetups.d": "Не хочеш гуляти сама? Створи зустріч або приєднайся до іншого з батьків і знайди нових друзів.",
      "feat.map.t": "Відкривай карту міста",
      "feat.map.d": "Кожна пройдена вулиця підсвічується. Дивись, скільки відсотків району ти вже відкрила.",
      "feat.walk.t": "Повідомляй про перешкоди",
      "feat.walk.d": "Поганий перехід чи недоступний тротуар? Повідом про доступність і допоможи іншим батькам з візочками.",
      "feat.rank.t": "Рейтинг",
      "feat.rank.d": "Збирай бали, піднімайся в рейтингу свого району та змагайся за звання найактивнішого з батьків.",

      "how.eyebrow": "Як це працює",
      "how.title": "Почни за три кроки",
      "how.s1.t": "Завантаж застосунок",
      "how.s1.d": "Зареєструйся та обери свій домашній район. Саме там зосередяться твої рейди та прогрес.",
      "how.s2.t": "Гуляй і виконуй рейди",
      "how.s2.d": "Вирушай на прогулянку з візочком, виконуй щоденні рейди, відкривай вулиці та збирай бали.",
      "how.s3.t": "Знайди свою kochick",
      "how.s3.d": "Приєднайся до зустрічі або створи власну і знайомся з батьками у своєму районі.",

      "who.eyebrow": "Для кого Kochick",
      "who.title": "Для кожного з батьків, хто не хоче гуляти сам",
      "who.sub": "Декретна відпустка не має означати самотність. Kochick перетворює твої прогулянки на час, якого чекаєш — сповнений відкриттів, маленьких викликів і нових знайомств.",
      "who.p1": "Мотивація рухатися щодня",
      "who.p2": "Знайомся з батьками дітей схожого віку",
      "who.p3": "Краще пізнай своє місто та околиці",
      "who.p4": "Зроби місто зручнішим для візочків",

      "cta.title": "Готова до першої прогулянки?",
      "cta.sub": "Завантаж Kochick і починай відкривати своє місто — і нових друзів.",
      "cta.soon": "Маєш запитання? Напиши нам на <a href=\"mailto:info@kochick.sk\">info@kochick.sk</a>.",

      "footer.tagline": "Досліджуй місто пішки. Знайди свою kochick.",
      "footer.linksTitle": "Посилання",
      "footer.companyTitle": "Оператор",
      "footer.rights": "Усі права захищені."
    }
  };

  // Keys whose values contain intentional HTML markup.
  var HTML_KEYS = { "hero.title": 1, "cta.soon": 1 };

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;
    var dict = T[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = dict[key];
      if (val == null) return;
      if (HTML_KEYS[key]) {
        el.innerHTML = val;
      } else if (el.tagName === "META") {
        el.setAttribute("content", val);
      } else {
        el.textContent = val;
      }
    });

    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("kochick_lang", lang); } catch (e) {}
  }

  function init() {
    var saved;
    try { saved = localStorage.getItem("kochick_lang"); } catch (e) {}
    apply(saved || DEFAULT_LANG);

    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        apply(b.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
