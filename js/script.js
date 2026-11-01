/* ==========================================================================
   ЛИЧНЫЙ САЙТ — СКРИПТ

   Файл состоит из двух частей:

   ЧАСТЬ 1. ДАННЫЕ (редактируйте только её)
     1.1 SOCIAL_LINKS   — ссылки на соцсети
     1.2 TIMELINE_DATA  — карточки летописи (19 штук)
     1.3 HOBBIES_DATA   — увлечения

   ЧАСТЬ 2. ЛОГИКА (трогать не нужно)
     Отрисовка карточек, карусель, свайпы, просмотр фото,
     плавная прокрутка, появление блоков при прокрутке.
   ========================================================================== */

"use strict";


/* ##########################################################################
   ЧАСТЬ 1. ДАННЫЕ
   ########################################################################## */


/* --------------------------------------------------------------------------
   1.1 СОЦИАЛЬНЫЕ СЕТИ
   Здесь меняются ВСЕ ссылки сайта. Замените url на адрес вашего профиля.
   icon: telegram | vk | github (иконки лежат ниже, в части 2)
   -------------------------------------------------------------------------- */
const SOCIAL_LINKS = [
  {
    name: "Telegram",
    icon: "telegram",
    text: "лучше сюда писать",
    url: "https://t.me/mileetoci"          // ← замените на свою ссылку
  },
  {
    name: "ВКонтакте",
    icon: "vk",
    text: "редко отвечаю",
    url: "https://vk.com/mileetoci"              // ← замените на свою ссылку
  },
  {
    name: "GitHub",
    icon: "github",
    text: "так сказать портфолио",
    url: "https://github.com/mileetoci"    // ← замените на свою ссылку
  }
];


/* --------------------------------------------------------------------------
   1.2 ЛЕТОПИСЬ ЖИЗНИ
   Порядок карточек = порядок на сайте: первая — самый ранний год,
   последняя — самый поздний. Кнопка «Год раньше» идёт к началу списка,
   «Год позже» — к концу.

   Одна карточка:
   {
     year:  "год или возраст, например 2008 или «5 лет»",
     title: "название события или периода",
     text:  "история, воспоминание",
     photos: [
       { src: "путь к файлу", caption: "подпись при увеличении", alt: "описание (необязательно)" }
     ]
   }

   КАК ДОБАВИТЬ ГОД: скопируйте любую карточку целиком (от { до },),
   вставьте на нужное место и поменяйте данные. Счётчик, точки и полоса
   прогресса подстроятся сами.

   КАК УБРАТЬ ГОД: удалите карточку целиком.

   ФОТО: положите файл в assets/images/timeline/ и впишите имя в src.
   Фотографий в карточке может быть сколько угодно (рекомендуем 1–3).
   Если файла пока нет, на сайте будет рамка «сюда ваше фото».
   -------------------------------------------------------------------------- */
const TIMELINE_DATA = [
  {
    year: "0-1",
    title: "Исекай",
    text: "Родился 19.09.07 03:54 в Краевой поликлинике №1 г.Хабаровск. В полной и любящей семье",
    photos: [
      { src: "assets/images/timeline/01-1.jpg", caption: "к сожалению или к счастью нет фото с роддома" },
      { src: "assets/images/timeline/01-2.jpg", caption: "к сожалению или к счастью нет фото с роддома" }
    ]
  },
  {
    year: "1-2",
    title: "Первые шаги в этом неизведанном мире",
    text: "Как говорил отец, пошел я через пару дней как мне стукнул год",
    photos: [
      { src: "assets/images/timeline/02-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/02-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "2-3",
    title: "Ребенок векторианской эпохи",
    text: "В этом возрасте узналось что я собрал все дебафы в этой жизни, а конкретно косоглазие, дальнозоркость и близорукость одновременно, астма, аллергия, и куча других проблем) В этом же году остался воспитываться только отцом",
    photos: [
      { src: "assets/images/timeline/03-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/03-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "3-4",
    title: "СОЦИАЛИЗАЦИЯ",
    text: "В этом возрасте я пошел в муниципальный детский сад №9 г.Хабаровск, там я существовал ближайшие несколько лет, потому что воспитывался только отцом, работающим сутки через сутки",
    photos: [
      { src: "assets/images/timeline/04-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/04-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "4-5",
    title: "Первые признаки увлечений",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/05-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/05-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/06-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/06-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/07-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/07-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/08-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/08-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/09-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/09-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/10-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/10-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/11-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/11-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/12-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/12-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/13-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/13-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/14-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/14-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/15-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/15-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/16-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/16-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/17-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/17-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/18-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/18-2.jpg", caption: "ваш текст" }
    ]
  },
  {
    year: "ваш год",
    title: "ваше название",
    text: "ваш текст",
    photos: [
      { src: "assets/images/timeline/19-1.jpg", caption: "ваш текст" },
      { src: "assets/images/timeline/19-2.jpg", caption: "ваш текст" }
    ]
  }
];


/* --------------------------------------------------------------------------
   1.3 УВЛЕЧЕНИЯ
   Каждое увлечение — это одна «страница» горизонтальной карусели,
   на странице есть место под 3 фотографии.

   Одна страница:
   {
     title: "название",
     text:  "краткое описание",
     extra: "дополнительная информация (можно оставить пустой строкой)",
     photos: [
       { src: "путь к файлу", caption: "подпись при увеличении" },
       { src: "путь к файлу", caption: "подпись при увеличении" },
       { src: "путь к файлу", caption: "подпись при увеличении" }
     ]
   }

   КАК ДОБАВИТЬ СТРАНИЦУ: скопируйте блок целиком (от { до },) и вставьте в список.
   Точки и кнопки подстроятся сами.
   ФОТО: положите файлы в assets/images/hobbies/ и впишите имена в src.
   На странице показываются первые 3 фото. Если файла пока нет, на сайте
   будет рамка «сюда ваше фото».
   -------------------------------------------------------------------------- */
const HOBBIES_DATA = [
  {
    title: "Страйкбол",
    text: "Группа студентов ДВФУ пару раз в месяц выбираются в самую рань в дикую срань, чем то похожи на фурри, также есть сходки, особые игры, свои расы и виды, а также само собой костюмы и аксессуары за бешенные деньги)  Позывной мой Буржуй, нахожусь в объединении с 2025 года, до этого несколько лет блуждал от одной команды к другой",
    extra: "",
    photos: [
      { src: "assets/images/hobbies/hobby-1-1.jpg", caption: "Закрытие сезона 2026" },
      { src: "assets/images/hobbies/hobby-1-2.jpg", caption: "Дали потрогать 230 тысяч рублей в виде куска метала" },
      { src: "assets/images/hobbies/hobby-1-3.jpg", caption: "Мой нынешний привод, собранный потом и кровью, состоит частично из деталей от огнестрельного оружия" }
    ]
  },
  {
    title: "Компьютерные игры",
    text: "В свободное время люблю играть в милсимы, СБЭУ* и другие проекты посвещенные боевым действиям со сложными механиками, приближенными к реальным. Вот тройка моих любимых: Escape From Tarkov, Squad, Ready or Not. В общей сумме в них проведено больше 5000 часов моей жизни",
    extra: "*Симулятор Боя в Экстримальных условиях",
    photos: [
      { src: "assets/images/hobbies/hobby-2-1.jpeg", caption: "эшкерк фром краков" },
      { src: "assets/images/hobbies/hobby-2-2.jpg", caption: "Squad" },
      { src: "assets/images/hobbies/hobby-2-3.png", caption: "RoN" }
    ]
  },
  {
    title: "Программирование",
    text: "Тяжело назвать это прямо хобби, скорее это интересный вид будущей работы, которой можно творить так как хочешь сам. С уверенностью владею Python, чуть более углубленно чем база в C++, JS вообще только начал, но в целом все понятно. На данный момент мое портфолио состоит из: Рогалик на PyGame, приложение для 1C:Предприятие, выполняющее функцию автоматической загрузки фотографий для сайта, сайт для бара* моей мамы, устройство на ESP32, простенькая нейронка отличающая тигров и львов и по мелочи",
    extra: "*Бар В Брюгге г.Хабаровск",
    photos: [
      { src: "assets/images/hobbies/hobby-3-1.jpg", caption: "устройство, которое показывает в реальном времени курс валют" },
      { src: "assets/images/hobbies/hobby-3-2.jpg", caption: "победил, круто" },
      { src: "assets/images/hobbies/hobby-3-3.jpg", caption: "просто кусочек кода из рогалика" }
    ]
  }
];



/* ##########################################################################
   ЧАСТЬ 2. ЛОГИКА (ниже менять ничего не нужно)
   ########################################################################## */


/* --------------------------------------------------------------------------
   Иконки соцсетей (встроенный SVG, цвет берётся из CSS)
   -------------------------------------------------------------------------- */
const ICONS = {
  telegram:
    '<svg viewBox="0 0 24 24" focusable="false"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',

  vk:
    '<svg viewBox="0 0 24 24" focusable="false"><rect x="1.5" y="4.5" width="21" height="15" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="12" y="15.4" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="8.6" font-weight="700" fill="currentColor">VK</text></svg>',

  github:
    '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
};


/* --------------------------------------------------------------------------
   Вспомогательные функции
   -------------------------------------------------------------------------- */

/** Копия шаблона <template id="..."> */
function cloneTemplate(id) {
  const template = document.getElementById(id);
  return template.content.firstElementChild.cloneNode(true);
}

/** Пользователь просил уменьшить анимацию? */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Ограничить число диапазоном */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}


/* --------------------------------------------------------------------------
   Отрисовка: летопись
   -------------------------------------------------------------------------- */
function buildMemoryCard(item, index, total) {
  const card = cloneTemplate("tpl-memory");
  card.dataset.index = String(index);
  card.setAttribute("aria-label", `${index + 1} из ${total}`);

  card.querySelector("[data-year-label]").textContent = item.year;
  card.querySelector("[data-title]").textContent = item.title;
  card.querySelector("[data-text]").textContent = item.text;

  const photosBox = card.querySelector("[data-photos]");
  const photos = item.photos || [];

  photos.forEach((photo, photoIndex) => {
    const button = cloneTemplate("tpl-photo");
    const img = button.querySelector("img");

    button.dataset.photo = String(photoIndex);
    button.setAttribute(
      "aria-label",
      `Открыть фото ${photoIndex + 1} из ${photos.length}: ${item.title}`
    );

    if (photo.src) {
      img.src = photo.src;
      img.alt = "";            // описание есть у кнопки (aria-label)
    } else {
      img.remove();
    }

    photosBox.appendChild(button);
  });

  // Карточка без фотографий: прячем пустой блок, текст занимает всё место
  if (photos.length === 0) {
    photosBox.remove();
    card.style.gridTemplateColumns = "1fr";
  }

  return card;
}


/* --------------------------------------------------------------------------
   Карусель «Мои увлечения»: страницы листаются по горизонтали
   -------------------------------------------------------------------------- */
function initHobbies(lightbox) {
  const root = document.querySelector("[data-hobbies]");
  if (!root) return;

  const viewport = root.querySelector(".hobbies__viewport");
  const track = root.querySelector("[data-hobbies-track]");
  const controls = root.querySelector(".hobbies__controls");
  const prevBtn = root.querySelector("[data-hobbies-prev]");
  const nextBtn = root.querySelector("[data-hobbies-next]");
  const dotsBox = root.querySelector("[data-hobbies-dots]");

  const total = HOBBIES_DATA.length;
  if (total === 0) return;

  /* ----- Создаём страницы и точки ----- */
  track.innerHTML = "";
  dotsBox.innerHTML = "";

  const pages = HOBBIES_DATA.map((hobby, i) => {
    const page = cloneTemplate("tpl-hobby");
    page.dataset.index = String(i);
    page.setAttribute("aria-label", `${i + 1} из ${total}`);

    page.querySelector("[data-title]").textContent = hobby.title;
    page.querySelector("[data-text]").textContent = hobby.text;
    page.querySelector("[data-extra]").textContent = hobby.extra || "";

    const photosBox = page.querySelector("[data-photos]");
    const photos = hobby.photos || [];

    photos.forEach((photo, photoIndex) => {
      const button = cloneTemplate("tpl-hobby-photo");
      const img = button.querySelector("img");

      button.dataset.photo = String(photoIndex);
      button.setAttribute(
        "aria-label",
        `Открыть фото ${photoIndex + 1} из ${photos.length}: ${hobby.title}`
      );

      if (photo.src) {
        img.src = photo.src;
        img.alt = "";          // описание есть у кнопки (aria-label)
      } else {
        img.remove();
      }

      photosBox.appendChild(button);
    });

    // Страница без фотографий: текст занимает всё место
    if (photos.length === 0) {
      photosBox.remove();
      page.style.gridTemplateColumns = "1fr";
    }

    track.appendChild(page);
    return page;
  });

  const dots = HOBBIES_DATA.map((hobby, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "timeline__dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `${i + 1}: ${hobby.title}`);
    dot.title = hobby.title;
    dot.addEventListener("click", () => goTo(i));
    dotsBox.appendChild(dot);
    return dot;
  });



  /* ----- Состояние ----- */
  let index = 0;       // номер текущей страницы
  let baseOffset = 0;  // сдвиг ленты для текущей страницы, px

  function offsetFor(i) {
    const page = pages[i];
    // Лента может сама быть «родителем» для offsetLeft (из-за will-change), учитываем оба случая
    return page.offsetLeft - (page.offsetParent === track ? 0 : track.offsetLeft);
  }

  function applyOffset(instant) {
    baseOffset = offsetFor(index);

    if (instant) track.style.transition = "none";
    track.style.transform = `translateX(${-baseOffset}px)`;

    if (instant) {
      void track.offsetWidth;
      track.style.transition = "";
    }
  }

  function updateUI() {
    pages.forEach((page, i) => {
      const active = i === index;
      page.classList.toggle("is-active", active);
      page.setAttribute("aria-current", active ? "true" : "false");
      page.inert = !active; // скрытые страницы недоступны для клавиатуры и экранных дикторов
    });

    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", active ? "true" : "false");
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;
  }

  function goTo(i, instant = false) {
    index = clamp(i, 0, total - 1);
    updateUI();
    applyOffset(instant || prefersReducedMotion());
  }

  /* ----- Кнопки ----- */
  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  /* ----- Клавиатура (когда карусель в фокусе) ----- */
  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1);
    }
  });

  /* ----- Клик по фото: увеличенный просмотр ----- */
  track.addEventListener("click", (event) => {
    const photoBtn = event.target.closest(".hobby-page__photo");
    if (!photoBtn) return;

    const page = photoBtn.closest(".hobby-page");
    const hobby = HOBBIES_DATA[Number(page.dataset.index)];
    lightbox.open(hobby.photos, Number(photoBtn.dataset.photo), hobby.title);
  });

  /* ----- Свайпы и перетаскивание ----- */
  let tracking = false;
  let dragging = false;
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let deltaX = 0;
  let suppressClick = false;

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    tracking = true;
    dragging = false;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    deltaX = 0;
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!tracking || event.pointerId !== pointerId) return;

    const moveX = event.clientX - startX;
    const moveY = event.clientY - startY;

    if (!dragging) {
      // Начинаем перетаскивание, только если движение явно горизонтальное
      const horizontal = Math.abs(moveX) > 8 && Math.abs(moveX) > Math.abs(moveY);
      if (!horizontal) return;

      dragging = true;
      viewport.setPointerCapture(pointerId);
      viewport.style.userSelect = "none";
      track.style.transition = "none";
    }

    deltaX = moveX;

    // На краях ленты тянется туго
    const atStart = index === 0 && deltaX > 0;
    const atEnd = index === total - 1 && deltaX < 0;
    const shift = atStart || atEnd ? deltaX * 0.3 : deltaX;

    track.style.transform = `translateX(${-baseOffset + shift}px)`;
  });

  function endDrag(event) {
    if (!tracking || event.pointerId !== pointerId) return;

    const wasDragging = dragging;
    tracking = false;
    dragging = false;
    viewport.style.userSelect = "";

    if (!wasDragging) return;

    track.style.transition = "";

    // После перетаскивания не считаем это кликом по фото
    suppressClick = true;
    setTimeout(() => { suppressClick = false; }, 60);

    const threshold = Math.min(80, viewport.clientWidth * 0.15);

    if (deltaX < -threshold) {
      goTo(index + 1);
    } else if (deltaX > threshold) {
      goTo(index - 1);
    } else {
      applyOffset(false); // не дотянули — возвращаем на место
    }
  }

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);

  viewport.addEventListener("click", (event) => {
    if (suppressClick) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, true);

  viewport.addEventListener("dragstart", (event) => event.preventDefault());

  /* ----- Пересчёт при изменении размера окна ----- */
  let resizeFrame = null;
  window.addEventListener("resize", () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => applyOffset(true));
  });

  window.addEventListener("load", () => applyOffset(true));

  /* ----- Старт ----- */
  goTo(0, true);
}


/* --------------------------------------------------------------------------
   Отрисовка: соцсети
   -------------------------------------------------------------------------- */
function renderSocials() {
  const box = document.querySelector("[data-socials]");
  if (!box) return;

  box.innerHTML = "";

  SOCIAL_LINKS.forEach((link) => {
    const item = cloneTemplate("tpl-social");
    const anchor = item.querySelector("a");

    anchor.href = link.url;
    item.querySelector("[data-name]").textContent = link.name;
    item.querySelector("[data-text]").textContent = link.text;
    item.querySelector("[data-icon]").innerHTML = ICONS[link.icon] || "";

    box.appendChild(item);
  });
}


/* --------------------------------------------------------------------------
   Полноэкранный просмотр фото
   -------------------------------------------------------------------------- */
function createLightbox() {
  const dialog = document.querySelector("[data-lightbox]");
  if (!dialog) return { open() {} };

  const img = dialog.querySelector("[data-lightbox-img]");
  const placeholder = dialog.querySelector("[data-lightbox-placeholder]");
  const caption = dialog.querySelector("[data-lightbox-caption]");
  const closeBtn = dialog.querySelector("[data-lightbox-close]");
  const prevBtn = dialog.querySelector("[data-lightbox-prev]");
  const nextBtn = dialog.querySelector("[data-lightbox-next]");

  let photos = [];
  let current = 0;
  let title = "";

  function showPlaceholder() {
    img.hidden = true;
    img.removeAttribute("src");
    placeholder.hidden = false;
  }

  function show(index) {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];

    caption.textContent = photo.caption || "";

    // Стрелки скрываем (но место под них сохраняем), если фото одно
    const single = photos.length < 2;
    prevBtn.style.visibility = single ? "hidden" : "visible";
    nextBtn.style.visibility = single ? "hidden" : "visible";

    if (!photo.src) {
      showPlaceholder();
      return;
    }

    placeholder.hidden = true;
    img.hidden = false;
    img.alt = photo.alt || photo.caption || `${title}, фото ${current + 1}`;
    img.src = photo.src;
  }

  // Файла нет — показываем рамку-заглушку вместо сломанной картинки
  img.addEventListener("error", () => {
    if (img.getAttribute("src")) showPlaceholder();
  });

  function open(itemPhotos, startIndex, itemTitle) {
    photos = itemPhotos;
    title = itemTitle || "";
    if (photos.length === 0) return;

    show(startIndex);
    if (!dialog.open) dialog.showModal();
  }

  function close() {
    if (dialog.open) dialog.close();
  }

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => show(current - 1));
  nextBtn.addEventListener("click", () => show(current + 1));

  // Клик по тёмному фону закрывает просмотр
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  // Клавиатура: стрелки листают, Esc закрывает (встроено в <dialog>)
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(current - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(current + 1);
    }
  });

  // Свайпы на телефоне
  let touchStartX = 0;
  let touchStartY = 0;

  dialog.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  }, { passive: true });

  dialog.addEventListener("touchend", (event) => {
    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;

    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      show(dx < 0 ? current + 1 : current - 1);
    }
  }, { passive: true });

  return { open };
}


/* --------------------------------------------------------------------------
   Карусель «Летопись жизни»
   -------------------------------------------------------------------------- */
function initTimeline(lightbox) {
  const root = document.querySelector("[data-timeline]");
  if (!root) return;

  const viewport = root.querySelector(".timeline__viewport");
  const track = root.querySelector("[data-timeline-track]");
  const prevBtn = root.querySelector("[data-timeline-prev]");
  const nextBtn = root.querySelector("[data-timeline-next]");
  const currentEl = root.querySelector("[data-timeline-current]");
  const totalEl = root.querySelector("[data-timeline-total]");
  const progressEl = root.querySelector("[data-timeline-progress]");
  const dotsBox = root.querySelector("[data-timeline-dots]");

  const total = TIMELINE_DATA.length;
  if (total === 0) return;

  /* ----- Создаём карточки и точки ----- */
  track.innerHTML = "";
  dotsBox.innerHTML = "";
  totalEl.textContent = String(total);

  const cards = TIMELINE_DATA.map((item, i) => {
    const card = buildMemoryCard(item, i, total);
    track.appendChild(card);
    return card;
  });

  const dots = TIMELINE_DATA.map((item, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "timeline__dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `${i + 1}: ${item.year}`);
    dot.title = `${item.year}`;
    dot.addEventListener("click", () => goTo(i));
    dotsBox.appendChild(dot);
    return dot;
  });

  /* ----- Состояние ----- */
  let index = 0;       // номер текущей карточки
  let baseOffset = 0;  // сдвиг ленты для текущей карточки, px

  /** Насколько нужно сдвинуть ленту, чтобы карточка встала по центру */
  function offsetFor(i) {
    const card = cards[i];
    const left = card.offsetLeft - (card.offsetParent === track ? 0 : track.offsetLeft);
    return left - (viewport.clientWidth - card.offsetWidth) / 2;
  }

  /** Применить сдвиг (instant = без анимации) */
  function applyOffset(instant) {
    baseOffset = offsetFor(index);

    if (instant) track.style.transition = "none";
    track.style.transform = `translateX(${-baseOffset}px)`;

    if (instant) {
      void track.offsetWidth; // принудительно применяем стиль без анимации
      track.style.transition = "";
    }
  }

  /** Обновить подсветку, счётчик, кнопки, индикаторы */
  function updateUI() {
    cards.forEach((card, i) => {
      const active = i === index;
      card.classList.toggle("is-active", active);
      card.setAttribute("aria-current", active ? "true" : "false");

      // Фото в неактивных карточках не должны ловить фокус клавиатуры
      card.querySelectorAll(".photo-slot--button").forEach((btn) => {
        btn.tabIndex = active ? 0 : -1;
      });
    });

    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", active ? "true" : "false");
    });

    currentEl.textContent = String(index + 1);
    progressEl.style.width = `${((index + 1) / total) * 100}%`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;
  }

  /** Перейти к карточке номер i */
  function goTo(i, instant = false) {
    index = clamp(i, 0, total - 1);
    updateUI();
    applyOffset(instant || prefersReducedMotion());
  }

  /* ----- Кнопки ----- */
  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  /* ----- Клавиатура (когда карусель в фокусе) ----- */
  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1);
    }
  });

  /* ----- Клик по карточке ----- */
  track.addEventListener("click", (event) => {
    const card = event.target.closest(".memory");
    if (!card) return;

    const cardIndex = Number(card.dataset.index);

    // Клик по соседней карточке — переходим к ней
    if (cardIndex !== index) {
      goTo(cardIndex);
      return;
    }

    // Клик по фото в текущей карточке — открываем увеличенный просмотр
    const photoBtn = event.target.closest(".photo-slot--button");
    if (photoBtn) {
      const item = TIMELINE_DATA[cardIndex];
      lightbox.open(item.photos, Number(photoBtn.dataset.photo), item.title);
    }
  });

  /* ----- Свайпы и перетаскивание ----- */
  let tracking = false;
  let dragging = false;
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let deltaX = 0;
  let suppressClick = false;

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    tracking = true;
    dragging = false;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    deltaX = 0;
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!tracking || event.pointerId !== pointerId) return;

    const moveX = event.clientX - startX;
    const moveY = event.clientY - startY;

    if (!dragging) {
      // Начинаем перетаскивание, только если движение явно горизонтальное
      const horizontal = Math.abs(moveX) > 8 && Math.abs(moveX) > Math.abs(moveY);
      if (!horizontal) return;

      dragging = true;
      viewport.setPointerCapture(pointerId);
      viewport.style.userSelect = "none";
      track.style.transition = "none";
    }

    deltaX = moveX;

    // На краях ленты тянется туго
    const atStart = index === 0 && deltaX > 0;
    const atEnd = index === total - 1 && deltaX < 0;
    const shift = atStart || atEnd ? deltaX * 0.3 : deltaX;

    track.style.transform = `translateX(${-baseOffset + shift}px)`;
  });

  function endDrag(event) {
    if (!tracking || event.pointerId !== pointerId) return;

    const wasDragging = dragging;
    tracking = false;
    dragging = false;
    viewport.style.userSelect = "";

    if (!wasDragging) return;

    track.style.transition = "";

    // После перетаскивания не считаем это кликом по фото
    suppressClick = true;
    setTimeout(() => { suppressClick = false; }, 60);

    const threshold = Math.min(80, viewport.clientWidth * 0.15);

    if (deltaX < -threshold) {
      goTo(index + 1);
    } else if (deltaX > threshold) {
      goTo(index - 1);
    } else {
      applyOffset(false); // не дотянули — возвращаем на место
    }
  }

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);

  viewport.addEventListener("click", (event) => {
    if (suppressClick) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, true);

  // Браузерное перетаскивание картинок мешает свайпу мышью
  viewport.addEventListener("dragstart", (event) => event.preventDefault());

  /* ----- Пересчёт при изменении размера окна ----- */
  let resizeFrame = null;
  window.addEventListener("resize", () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => applyOffset(true));
  });

  window.addEventListener("load", () => applyOffset(true));

  /* ----- Старт ----- */
  goTo(0, true);
}


/* --------------------------------------------------------------------------
   Плавная прокрутка по якорным ссылкам (#about, #timeline, #top ...)
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
            // Шапка (#top) приклеена к верху экрана, поэтому scrollIntoView почти не двигает страницу.
      // Для «Наверх» просто прокручиваем к самому началу.
      if (hash === "#top") {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth"
        });
        history.replaceState(null, "", hash);
        return;
      }

      target.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start"
      });

      history.replaceState(null, "", hash);

      // Переносим фокус на раздел, чтобы клавиатура продолжила с него
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });
}


/* --------------------------------------------------------------------------
   Плавное появление блоков при прокрутке
   Класс .reveal задаёт начальное «скрытое» состояние, .is-visible — конечное.
   После показа классы снимаются, чтобы не мешать эффектам при наведении.
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".section__head, .timeline, .hobbies, .social"
  );

  // Задержка между соседними карточками одной сетки
  const stagger = new Map();
  document.querySelectorAll(".socials").forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      const card = child.querySelector(".social") || child;
      stagger.set(card, Math.min(i, 6) * 90);
    });
  });

  if (!("IntersectionObserver" in window) || prefersReducedMotion()) return;

  targets.forEach((el) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${stagger.get(el) || 0}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      el.classList.add("is-visible");
      observer.unobserve(el);

      const delay = stagger.get(el) || 0;
      setTimeout(() => {
        el.classList.remove("reveal", "is-visible");
        el.style.transitionDelay = "";
      }, 900 + delay);
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => observer.observe(el));
}


/* --------------------------------------------------------------------------
   Прочее
   -------------------------------------------------------------------------- */
function setFooterYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}


/* --------------------------------------------------------------------------
   ЗАПУСК
   -------------------------------------------------------------------------- */
document.documentElement.classList.add("js");

renderSocials();

const lightbox = createLightbox();
initTimeline(lightbox);
initHobbies(lightbox);

initSmoothScroll();
initScrollReveal();
setFooterYear();
