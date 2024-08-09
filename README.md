# Созвездие мебели

### Getting Started

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `npm run preview`

Runs the app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser..

#### `npm run lint`

Runs the EsLint

#### `npm run lint:fix`

Runs the EsLint with automatical fixes

#### `npm run format`

Runs the Prettier

#### `npm run api`

Запустить генерацию API

#### `npm run comp`

Создать компоненты
Опции:

- hooks - создаёт хук к этому компоненту
  Пример: npm run comp shared MyComponentName -- --hooks

## Technology stack

TypeScript + React + Redux + RTK Query + MUI + RRD + ESLint + Prettier

Use framework React.js – [Link on react documentation](https://react.dev/learn).\
This project was bootstrapped with [vite-mui-ts boilerplate](https://github.com/emre-cil/vite-mui-ts).\
Use Node.js version **18.17.0**.

## Architecture

```
└── src/
    ├── app/                    # Инициализирующая логика приложения
    |   ├── api/                #     Настройка RTK Query и эндпоинтов
    |   ├── store/              #     Настройка redux стора и слайсов
    |   ├── lib/                #     Настройка плагинов и библиотек (MUI и тд)
    |   └── styles/             #     Глобальные стили
    |   └── routes/             #     Настройка react-router-dom
    |                           #
    ├── assets/                 # Папка для внутренних импортов (иконки и тд)
    |                           #
    ├── layouts/                # Слой: Шаблоны приложения
    |   ├── {some-page}/        #     Слайс: (пример: Dashboard лейаут)
    |   |   ├── utils/          #         Сегмент: Инфраструктурная-логика (helpers)
    |   |   ├── hooks/          #         Сегмент: Хуки
    |   |   ├── ui/             #         Сегмент: Логика UI
    |   |   ├── index.ts/       #         Сегмент: Публичный API
    |   ...                     #
    |                           #
    ├── pages/                  # Слой: Страницы приложения
    |   ├── {some-page}/        #     Слайс: (пример: Main страница)
    |   |   ├── utils/          #         Сегмент: Инфраструктурная-логика (helpers)
    |   |   ├── hooks/          #         Сегмент: Хуки
    |   |   ├── ui/             #         Сегмент: Логика UI
    |   |   ├── index.ts/       #         Сегмент: Публичный API
    |   ...                     #
    |                           #
    ├── widgets/                # Слой: Самостоятельные и полноценные блоки для страниц
    |   ├── {some-widget}/      #     Слайс: (пример: Header widget)
    |   |   ├── utils/          #         Сегмент: Инфраструктурная-логика (helpers)
    |   |   ├── types/          #         Сегмент: Типы .d.ts
    |   |   ├── hooks/          #         Сегмент: Хуки
    |   |   └── ui/             #         Сегмент: Логика UI
    |   |   └── index.ts/       #         Сегмент: Публичный API
    |   ...
    |
    ├── features/               # Слой: Обрабатываемые пользовательские сценарии
    |   ├── {some-feature}/     #     Слайс: (пример: Filter feature)
    |   |   ├── utils/          #         Сегмент: Инфраструктурная-логика (helpers)
    |   |   ├── types/          #         Сегмент: Типы .d.ts
    |   |   ├── hooks/          #         Сегмент: Хуки
    |   |   └── ui/             #         Сегмент: Логика UI
    |   |   └── index.ts/       #         Сегмент: Публичный API
    |   ...                     #
    |                           #
    ├── entities/               # Слой: Бизнес-сущности, которыми оперирует предметная область
    |   ├── {some-entity}/      #     Слайс: (например: сущность Product)
    |   |   ├── utils/          #         Сегмент: Инфраструктурная-логика (helpers)
    |   |   ├── types/          #         Сегмент: Типы .d.ts
    |   |   ├── hooks/          #         Сегмент: Хуки
    |   |   └── ui/             #         Сегмент: Логика UI
    |   |   └── index.ts/       #         Сегмент: Публичный API
    |   ...                     #
    |                           #
    ├── shared/                 # Слой: Переиспользуемые модули, без привязки к бизнес-логике
    |   ├── types/              #         Сегмент: Типы .d.ts
    |   ├── consts/             #         Сегмент: Константы
    |   ├── hooks/              #         Сегмент: Хуки
    |   ├── utils/              #         Сегмент: Инфраструктурная логика приложения (helpers)
    |   └── ui/                 #         Сегмент: UIKit приложения
```
