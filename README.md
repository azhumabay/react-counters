# Приложение Счетчик

В данном проекте я реализовал приложение-счетчик, состоящее из 15 счетчиков с разными типами управления состоянием. Приложение поддерживает переключение тем (светлая и темная).

## Стек

- **JavaScript**
- **CSS**
- **React**
- **Vite**
- **UI**: react-bootstrap

## Основные функции

- **Переключение темы**: Приложение поддерживает смену темы (светлая и темная).
- **15 счетчиков**:
  - 3 счетчика без связи: реализованы с использованием `useState`, пользовательского хука и `useReducer`.
  - 2 счетчика со связью через `props` с реализацией через `useState`.
  - 2 счетчика со связью через `props` с реализацией через пользовательский хук.
  - 2 счетчика со связью через `props` с реализацией через `useReducer`.
  - 2 счетчика со связью через контекст с реализацией через `useState`.
  - 2 счетчика со связью через контекст с реализацией через пользовательский хук.
  - 2 счетчика со связью через контекст с реализацией через `useReducer`.

## Структура приложения

- **components**: компоненты
- **context**: контексты для управления глобальным состоянием
- **hooks**: пользовательские хуки для управления счетчиками
- **reducer**: редьюсеры для управления состоянием счетчиков

## Интерфейс

- Кнопка для переключения темы (светлая/темная).
- Счетчики с кнопками для увеличения и уменьшения значений.
- Счетчики, связанные через `props` и контексты, с возможностью управления состоянием.

## Дизайн

Интерфейс разработан с использованием библиотеки `react-bootstrap`.

## Деплой

Приложение развернуто на https://react-counters-two.vercel.app/
