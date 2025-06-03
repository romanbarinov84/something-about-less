# React + Vite + Redux/toolkit
## 📚 Проект: Список постов
Этот проект выводит список постов, загружаемых с сайта (JSONPlaceholder).
Реализован с использованием React, Redux Toolkit и createAsyncThunk.

# 🚀 Технологии
React

Redux Toolkit

createAsyncThunk

fetch с abort()

condition — для предотвращения повторной загрузки

rejectWithValue — для обработки ошибок

# ⚙️ Функционал
📥 Загрузка постов по кнопке

⏳ Отображение состояния загрузки

❌ Обработка ошибок при запросе

🚫 Запрос не отправляется повторно, если:

пользователь не авторизован

данные уже загружены

происходит текущая загрузка

🛑 Отмена запроса через abort() при необходимости

# 🧠 Как работает
Асинхронный thunk fetchData:

получает URL

делает fetch с возможностью отмены

при ошибке вызывает rejectWithValue

В extraReducers обрабатываются состояния:

pending: включается isLoading

fulfilled: сохраняются данные в posts

rejected: сохраняется ошибка

В condition мы проверяем:

если user не активен

или posts уже есть

или идёт загрузка
→ запрос не выполняется

# (https://romanbarinov84.github.io/something-about-less/)

![Снимок экрана (4)](https://github.com/user-attachments/assets/b21b349c-f29a-420f-a817-45387cc7a30e)


![Снимок экрана (3)](https://github.com/user-attachments/assets/0e3b5eb9-56db-401a-8371-9a4b5d15ce2d)
