# Hacker News Frontend

## Описание проекта

Next.js-фронтенд для Hacker News. Проект предоставляет SPA-интерфейс для просмотра историй c Hacker News
 
## Архитектура

Проект построен на основе **FSD (Feature-Sliced Design)**:

### Структура проекта

```
src/
├── app/                          # Next.js App Router: роутинг, провайдеры, глобальные стили
│   ├── (routes)/                 
│   │   ├── page.tsx              # Главная страница (/)
│   │   └── story/[id]/
│   │       └── page.tsx          # Страница истории (/story/:id)
│   ├── layout.tsx                # Корневой layout (HTML shell, шрифты, провайдеры)
│   ├── RootProvider.tsx          # Корневой провайдер, агрегирующий глобальные провайдеры на проекте. (ThemeProvider, QueryClientProvider, etc)
│   ├── theme.ts                  # MUI тема (palette, typography)
│   ├── globals.css               # Глобальные стили, Tailwind, CSS-переменные
│   ├── not-found.tsx             # 404 fallback
│   └── favicon.ico               # Иконка сайта
├── page/                         
│   ├── home/                     # Компонент домашней страницы
│   ├── notFound/                 # Компонент страницы 404
│   └── story/                    # Компонент страницы с историей (StoryItem)
├── widgets/                      
│   ├── commentsBlock/            # Блок комментариев
│   ├── header/                   # Шапка сайта
│   └── storyList/                # Список историй
├── entities/                     
│   ├── commentItem/              # Сущность комментария (CommentItem)
│   └── storyItem/                # Сущность истории (StoryItem)
└── shared/
    ├── api/                      # API Hacker News
    ├── lib/                      # Утилиты
    └── ui/                       # Переиспользуемые UI-компоненты

```

## Основной стек технологий

- Next.js 16
- React 19
- TypeScript 5
- Material UI 9
- Tailwind CSS 4
- TanStack React Query 5
- dayjs

## Переменные окружения

| Переменная | Описание | По умолчанию |
|-----------|----------|-------------|
| `NEXT_PUBLIC_API_URL` | URL бэкенда (для клиента) | — |
| `INTERNAL_API_URL` | URL бэкенда (для сервера) | — |

## Как запустить

```bash
# Установка зависимостей
npm install

# Development 
npm run dev

# Production
npm run build
npm run start

# localhost:3000 (по умолчанию)
```

## Запуск в Docker

```bash
docker build -t hacker-news-frontend --build-arg PUBLIC_API_URL=http://localhost:4000 --build-arg INTERNAL_API_URL=http://localhost:4000 .

## Или если бэкенд запущен в контейнере

docker build -t hacker-news-frontend --build-arg PUBLIC_API_URL=http://localhost:4000 --build-arg INTERNAL_API_URL=http://host.docker.internal:4000 .

docker run -d --name hacker-news-frontend -p 3000:3000 hacker-news-frontend
```
