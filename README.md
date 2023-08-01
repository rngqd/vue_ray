# Тестовое задание Ray App
В результате выполнения проекта было реализовано две страницы мобильного приложения, на которых отображается прогресс по пройденным тестам, а так же список всех вопросов для теста.

Проект написан на **vue 3** + **TypeScript**. Использован синтаксис composition setup api. 

Препроцессоры для **CSS** не использовались. Именование стилей производилось по методологии БЭМ. Все стили прописаны в файлах компонентов.

В проекте подключен store (**VueX**) для хранения состояния о пройденных тестах. Так же список пройденных тестов сохраняется для сессии пользователя.


## Список страниц
 
* '/' - основная страница
* '/tests' - страница со списком вопросов по тесту.

## Для запуска проекта следует выполнить следующие команды
1. Клонировать репозиторий локально

>git clone https://github.com/rngqd/vue_ray
`
2. Зайти в папку с проектом
>cd vue__ray
3. Установить зависимости
> npm install
4. Запустить проект на локальном сервере. По умолчанию откроется на [localhost 8080](http://localhost:8080)
>npm run serve
