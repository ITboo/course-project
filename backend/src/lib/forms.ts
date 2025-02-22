export const forms = [
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Опрос об удовлетворенности работой",
    "description": "Помогите нам улучшить условия труда, ответив на несколько вопросов.",
    "author_id": "user1",
    "created_at": "2023-10-01T12:00:00Z",
    "status": "active",
    "img": "https://example.com/work_satisfaction.jpg",
    "likes": 23,
    "filled_times": 45,
    "is_private": false,
    "theme": "Работа",
    "fields": [
      {
        "id": "field1",
        "type": "radio",
        "label": "Насколько вы удовлетворены своей текущей работой?",
        "options": ["Полностью удовлетворен", "Частично удовлетворен", "Не удовлетворен"]
      },
      {
        "id": "field2",
        "type": "textarea",
        "label": "Что бы вы хотели улучшить в своей работе?",
        "placeholder": "Напишите ваши предложения..."
      }
    ],
    "comments": [
      {
        "id": "comment1",
        "author_id": "user2",
        "text": "Отличный опрос, спасибо за возможность высказаться!",
        "created_at": "2023-10-01T14:00:00Z",
        "formId": "550e8400-e29b-41d4-a716-446655440000"
      },
      {
        "id": "comment2",
        "author_id": "user3",
        "text": "Интересные вопросы, надеюсь, мои ответы помогут.",
        "created_at": "2023-10-01T15:00:00Z",
        "formId": "550e8400-e29b-41d4-a716-446655440000"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "title": "Анкета для новых клиентов",
    "description": "Расскажите о себе, чтобы мы могли предложить вам лучшие условия.",
    "author_id": "user2",
    "created_at": "2023-10-02T12:00:00Z",
    "status": "active",
    "img": "https://example.com/new_clients.jpg",
    "likes": 15,
    "filled_times": 30,
    "is_private": false,
    "theme": "Финансы",
    "fields": [
      {
        "id": "field3",
        "type": "text",
        "label": "Ваше имя",
        "placeholder": "Иван Иванов"
      },
      {
        "id": "field4",
        "type": "checkbox",
        "label": "Какие услуги вас интересуют?",
        "options": ["Кредит", "Вклад", "Инвестиции", "Страхование"]
      }
    ],
    "comments": [
      {
        "id": "comment3",
        "author_id": "user1",
        "text": "Полезная анкета, спасибо!",
        "created_at": "2023-10-02T13:00:00Z",
        "formId": "550e8400-e29b-41d4-a716-446655440001"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440010",
    "title": "Опрос о предпочтениях в кино",
    "description": "Поделитесь своими предпочтениями в фильмах и сериалах.",
    "author_id": "user11",
    "created_at": "2023-10-11T12:00:00Z",
    "status": "active",
    "img": "https://example.com/movie_preferences.jpg",
    "likes": 42,
    "filled_times": 85,
    "is_private": false,
    "theme": "Кино",
    "fields": [
      {
        "id": "field21",
        "type": "checkbox",
        "label": "Какие жанры фильмов вы предпочитаете?",
        "options": ["Комедия", "Драма", "Боевик", "Фантастика", "Ужасы"]
      },
      {
        "id": "field22",
        "type": "textarea",
        "label": "Какой ваш любимый фильм или сериал?",
        "placeholder": "Напишите название..."
      }
    ],
    "comments": [
      {
        "id": "comment4",
        "author_id": "user12",
        "text": "Обожаю фантастику, спасибо за опрос!",
        "created_at": "2023-10-11T14:00:00Z",
        "formId": "550e8400-e29b-41d4-a716-446655440010"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440011",
    "title": "Анкета для участников книжного клуба",
    "description": "Соберите информацию о предпочтениях участников книжного клуба.",
    "author_id": "user13",
    "created_at": "2023-10-12T12:00:00Z",
    "status": "active",
    "img": "https://example.com/book_club.jpg",
    "likes": 33,
    "filled_times": 65,
    "is_private": false,
    "theme": "Литература",
    "fields": [
      {
        "id": "field23",
        "type": "text",
        "label": "Ваше имя",
        "placeholder": "Анна Петрова"
      },
      {
        "id": "field24",
        "type": "checkbox",
        "label": "Какие жанры книг вы предпочитаете?",
        "options": ["Фантастика", "Детектив", "Роман", "Научная литература", "Поэзия"]
      }
    ],
    "comments": [
      {
        "id": "comment5",
        "author_id": "user14",
        "text": "Отличная анкета, спасибо за возможность поделиться!",
        "created_at": "2023-10-12T13:00:00Z",
        "formId": "550e8400-e29b-41d4-a716-446655440011"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440012",
    "title": "Опрос о музыкальных предпочтениях",
    "description": "Расскажите о своих любимых музыкальных жанрах и исполнителях.",
    "author_id": "user15",
    "created_at": "2023-10-13T12:00:00Z",
    "status": "active",
    "img": "https://example.com/music_preferences.jpg",
    "likes": 47,
    "filled_times": 90,
    "is_private": false,
    "theme": "Музыка",
    "fields": [
      {
        "id": "field25",
        "type": "checkbox",
        "label": "Какие музыкальные жанры вам нравятся?",
        "options": ["Рок", "Поп", "Классика", "Джаз", "Электронная музыка"]
      },
      {
        "id": "field26",
        "type": "textarea",
        "label": "Кто ваш любимый исполнитель или группа?",
        "placeholder": "Напишите название..."
      }
    ],
    "comments": [
      {
        "id": "comment6",
        "author_id": "user16",
        "text": "Обожаю рок-музыку, спасибо за опрос!",
        "created_at": "2023-10-13T14:00:00Z",
        "formId": "550e8400-e29b-41d4-a716-446655440012"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440013",
    "title": "Анкета для участников IT-конференции",
    "description": "Соберите информацию о участниках IT-конференции для организации мероприятия.",
    "author_id": "user17",
    "created_at": "2023-10-14T12:00:00Z",
    "status": "active",
    "img": "https://example.com/it_conference.jpg",
    "likes": 25,
    "filled_times": 50,
    "is_private": false,
    "theme": "Технологии",
    "fields": [
      {
        "id": "field27",
        "type": "text",
        "label": "Ваше имя и фамилия",
        "placeholder": "Иван Сидоров"
      },
      {
        "id": "field28",
        "type": "checkbox",
        "label": "Какие темы вас интересуют?",
        "options": ["Искусственный интеллект", "Кибербезопасность", "Веб-разработка", "Мобильные приложения"]
      }
    ],
    "comments": [
      {
        "id": "comment7",
        "author_id": "user18",
        "text": "Очень интересная конференция, спасибо за анкету!",
        "created_at": "2023-10-14T13:00:00Z",
        "formId": "550e8400-e29b-41d4-a716-446655440013"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440014",
    "title": "Опрос о предпочтениях в играх",
    "description": "Расскажите о своих любимых играх и платформах.",
    "author_id": "user19",
    "created_at": "2023-10-15T12:00:00Z",
    "status": "active",
    "img": "https://example.com/gaming_preferences.jpg",
    "likes": 38,
    "filled_times": 75,
    "is_private": false,
    "theme": "Игры",
    "fields": [
      {
        "id": "field29",
        "type": "checkbox",
        "label": "Какие платформы вы используете для игр?",
        "options": ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Мобильные устройства"]
      },
      {
        "id": "field30",
        "type": "textarea",
        "label": "Какая ваша любимая игра?",
        "placeholder": "Напишите название..."
      }
    ],
    "comments": [
      {
        "id": "comment8",
        "author_id": "user20",
        "text": "Обожаю игры на PC, спасибо за опрос!",
        "created_at": "2023-10-15T14:00:00Z",
        "formId": "550e8400-e29b-41d4-a716-446655440014"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440010",
    "title": "Опрос о кино",
    "description": "Поделитесь вашими предпочтениями в кино.",
    "author_id": "user11",
    "created_at": "2023-10-11T12:00:00Z",
    "status": "active",
    "img": "https://example.com/movies.jpg",
    "likes": 25,
    "filled_times": 60,
    "is_private": false,
    "theme": "Кино",
    "fields": [
      {
        "id": "field21",
        "type": "radio",
        "label": "Какой жанр фильмов вы предпочитаете?",
        "options": ["Комедия", "Драма", "Боевик", "Фантастика"]
      },
      {
        "id": "field22",
        "type": "textarea",
        "label": "Какой ваш любимый фильм и почему?",
        "placeholder": "Напишите ваш ответ..."
      }
    ],
    "comments": [
      {
        "id": "comment1",
        "author_id": "user12",
        "text": "Обожаю комедии! Они поднимают настроение.",
        "created_at": "2023-10-11T13:00:00Z"
      },
      {
        "id": "comment2",
        "author_id": "user13",
        "text": "Фантастика — это мое! Особенно космические оперы.",
        "created_at": "2023-10-11T14:00:00Z"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440011",
    "title": "Анкета для книголюбов",
    "description": "Расскажите о ваших любимых книгах.",
    "author_id": "user14",
    "created_at": "2023-10-12T12:00:00Z",
    "status": "active",
    "img": "https://example.com/books.jpg",
    "likes": 18,
    "filled_times": 40,
    "is_private": false,
    "theme": "Литература",
    "fields": [
      {
        "id": "field23",
        "type": "text",
        "label": "Ваша любимая книга",
        "placeholder": "Например, 'Мастер и Маргарита'"
      },
      {
        "id": "field24",
        "type": "checkbox",
        "label": "Какие жанры вы предпочитаете?",
        "options": ["Фантастика", "Детектив", "Роман", "Поэзия"]
      }
    ],
    "comments": [
      {
        "id": "comment3",
        "author_id": "user15",
        "text": "Обожаю классику! Толстой и Достоевский — мои фавориты.",
        "created_at": "2023-10-12T13:00:00Z"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440012",
    "title": "Опрос о технологиях",
    "description": "Поделитесь вашим мнением о современных технологиях.",
    "author_id": "user16",
    "created_at": "2023-10-13T12:00:00Z",
    "status": "active",
    "img": "https://example.com/tech.jpg",
    "likes": 30,
    "filled_times": 70,
    "is_private": false,
    "theme": "Технологии",
    "fields": [
      {
        "id": "field25",
        "type": "radio",
        "label": "Как часто вы обновляете свои гаджеты?",
        "options": ["Каждый год", "Раз в 2-3 года", "Редко", "Только при поломке"]
      },
      {
        "id": "field26",
        "type": "textarea",
        "label": "Какие технологии вас больше всего впечатляют?",
        "placeholder": "Напишите ваш ответ..."
      }
    ],
    "comments": [
      {
        "id": "comment4",
        "author_id": "user17",
        "text": "Искусственный интеллект — это будущее!",
        "created_at": "2023-10-13T13:00:00Z"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440013",
    "title": "Анкета для любителей кофе",
    "description": "Расскажите о ваших предпочтениях в кофе.",
    "author_id": "user18",
    "created_at": "2023-10-14T12:00:00Z",
    "status": "active",
    "img": "https://example.com/coffee.jpg",
    "likes": 22,
    "filled_times": 50,
    "is_private": false,
    "theme": "Напитки",
    "fields": [
      {
        "id": "field27",
        "type": "radio",
        "label": "Какой кофе вы предпочитаете?",
        "options": ["Эспрессо", "Латте", "Капучино", "Американо"]
      },
      {
        "id": "field28",
        "type": "textarea",
        "label": "Почему вы любите кофе?",
        "placeholder": "Напишите ваш ответ..."
      }
    ],
    "comments": [
      {
        "id": "comment5",
        "author_id": "user19",
        "text": "Латте с корицей — это мой любимый напиток!",
        "created_at": "2023-10-14T13:00:00Z"
      }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440014",
    "title": "Опрос о путешествиях на автомобиле",
    "description": "Поделитесь вашим опытом путешествий на автомобиле.",
    "author_id": "user20",
    "created_at": "2023-10-15T12:00:00Z",
    "status": "active",
    "img": "https://example.com/car_travel.jpg",
    "likes": 15,
    "filled_times": 35,
    "is_private": false,
    "theme": "Путешествия",
    "fields": [
      {
        "id": "field29",
        "type": "radio",
        "label": "Как часто вы путешествуете на автомобиле?",
        "options": ["Раз в месяц", "Раз в год", "Редко", "Никогда"]
      },
      {
        "id": "field30",
        "type": "textarea",
        "label": "Какие места вы посетили на автомобиле?",
        "placeholder": "Напишите ваш ответ..."
      }
    ],
    "comments": [
      {
        "id": "comment6",
        "author_id": "user21",
        "text": "Обожаю ездить на машине по горным дорогам!",
        "created_at": "2023-10-15T13:00:00Z"
      }
    ]
  }
];