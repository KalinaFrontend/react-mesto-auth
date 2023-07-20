# Проект: Место-React.
------

Учебный проект для [Яндекс.Практикум](https://practicum.yandex.ru/ "Сайт Яндекс.Практикум")

<h1 align="center">Учебный frontend-проект: "Место"</h1>

<div align="center">
![Mesto React - Opera 2023-07-20 20-15-59](https://github.com/KalinaFrontend/react-mesto-auth/assets/111464624/e4a385b0-4aab-410a-8524-3d53a439f3ba)
</div>


<div align="center">
  <a href="https://mesto-react-kalina.nomoredomains.monster/">
    <img src="https://github.com/KalinaFrontend/react-mesto-auth/assets/111464624/e4a385b0-4aab-410a-8524-3d53a439f3ba.gif" width="550" alt="Гиф с демонстрацией функционала приложения">
  </a>
</div>


<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории, эксплуатация</a></li>
      <li><a href="#establishing">Процесс создания</a></li>
      <ul>
        <li><a href="#tasks-and-problems">Основные задачи, проблемы и их решение</a></li>
      </ul>
      <li><a href="#functionality">Функционал</a></li>
      <li><a href="#enhancement">Планы по улучшению</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Данная проектная работа выполнена в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой <a href="">продолжение</a> портирования на "React" адаптивного приложения (SPA) с профилем пользователя и фотокарточками, <a href="https://github.com/KalinaFrontend/Mesto">изначально написанного</a> на нативных технологиях: HTML5, CSS3 и JavaScript. В сравнении с предыдущей работой в данном проекте добавлен функционал регистрации и авторизации пользователей на сайте в своем личном кабинете, а также исправлены некоторые ошибки, пропущенные ревьюером

<h4>Ссылка на макеты:
<br>
https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1
https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1
https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1
https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1
https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1
<br>
<br>

Ссылка на проект: https://github.com/KalinaFrontend/react-mesto-auth/</h4>

<i>* - проект прошел код-ревью</i>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка React">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка React Router">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории, эксплуатация (пп. 4-5 актуальны также при работе на Github Pages)</h2></a>
1. `git clone https://github.com/KalinaFrontend/react-mesto-auth.git` - клонировать репозиторий (с использованием HTTPS) на свое устройство
2. `npm i` - установить зависимости
3. `npm run start` - запустить приложение в режиме разработчика (в браузере ввести ссылку `http://localhost:3000/react-mesto-auth/sign-in`, если приложение не открылось там автоматически)
4. При использовании приложения для входа в личный кабинет пользователю требуется <b>зарегистрироваться</b> (`https://mesto-react-kalina.nomoredomains.monster/signup`) и пройти <b>авторизацию</b> (`https://mesto-react-kalina.nomoredomains.monster/signin`). 
5. При авторизации в локальном хранилище сохраняется токен пользователя, который при закрытии вкладки с приложением и возвращении позволяет оставаться авторизованным на сайте. Он удаляется после нажатия на кнопку выхода из личного кабинета
<a name="problem-routes">
  <p>
    <b>NB!</b> В связи <a href="https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing">с особенностями совместимости</a> Github Pages с модулем маршрутизации (React Router DOM) в удаленном репозитории <b>не рекомендуется</b> обновление страниц приложения, имеющих добавочные эндпоинты к корневой ссылке <b>/react-mesto-auth</b>
  </p>
</a>
<p>
  <b>NB!!</b> На данном этапе не настроена отрисовка ошибок при попытке регистрации пользователя с ранее зарегистрированным электронным адресом, неправильном вводе электронного адреса и/или пароля и т.п. Эти ошибки можно проверить самостоятельно в <b>консоли разработчика</b> во вкладке <b>&laquo;Network&raquo;</b> (ответ с сервера будет выделен красным цветом)
</p>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="establishing"><h2>4. Процесс создания</h2></a>
Работа выполнена в <b>1 этап</b>:
<br>
Верстка дополнительных компонентов (стартовых окон с формами регистрации и авторизации пользователей) и элементов (гамбургер-меню, кнопка выхода из личного кабинета), написание функционала

<div align="right">(<a href="#summary">к оглавлению</a>)</div>


<a name="functionality"><h2>5. Функционал</h2></a>

### Стек технологий:
* Адаптивный интерфейс <b><i>(в т. ч. новых компонентов и элементов)</i>
* Регистрация и авторизация пользователей
* Редактирование данных пользователя
* Обновление аватара
* Добавление новой карточки
* Добавление и снятие лайка (включая счетчик лайков)
* Удаление карточки <b><i>с модальным окном подтверждения действия</i>
* Модальное окно успешной/неудачной регистрации на сайте
* Модальное окно с увеличенной фотографией карточки
* Открытие и закрытие модальных окон (по кнопке, <b><i>оверлею</i></b> и <b><i>клавише "Escape"</i></b>)
* Спиннеры загрузки
* Валидация форм
* <b><i><b><i>Окно предварительной загрузки страницы</i></b></i></b>
* <b><i>Страница 404</i></b> (<a href="#problem-routes"><b>не будет видна</b></a> на  Github Pages)
* Спиннеры загрузки
* Спиннеры загрузки

<b><i>* - жирным курсивом выделен дополнительный функционал, не входящий в обязательный перечень требований для получения зачета по проектной работе</i></b>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="enhancement"><h2>6. Планы по улучшению</h2></a>
- Оптимизация лишних ререндеров
- Вывод в модальном окне после неудачной попытки регистрации/авторизации текста ошибок ("Пользователь с таким электронным адресом уже зарегистрирован", "Неправильный электронный адрес/пароль" и проч.)
- Исправление зависания анимации при открытии/закрытии бургерного меню на iPhone
- Оптимизация приложения для людей с ограниченными возможностями (напр., <b>label</b> для инпутов форм)
- Добавление автоматического обновления галереи карточек
- Добавление функции сабмита форм нажатием на клавишу "Enter" (в настоящий момент работает только в случае клика пользоватем по полю формы)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>


