     Что входит в проект:
* Приложение accounts:
	o RegisterAPI – api для регистрации
	o LoginAPI – api для авторизации
	o UserAPI – api для получения данных пользователя (доступно только, если авторизован)
* Приложение frontend:
	Здесь лежит фронтенд (как не странно), написанный на react redux.

Как потестить:
	1. Ставим docker https://hub.docker.com/editions/community/docker-ce-desktop-windows/
	2. Качаем репу  https://github.com/00MRX00/StaskNew.git
	3. Запускаем консоль, переходим в скачанный репозиторий
	4. Выполняем команды:
		1) docker-compose up
		2) в новом окне терминала: npm run start (если надо изменять фронтенд)(приложение фронта запустится на localhost:3000) Для сохранения фронта: npm run build
	5. Сайт запустится по адресу http://localhost:8000/
     
     Для проверки API:
     Качаем postman  https://www.postman.com/downloads/
	 
     Проверка RegisterAPI:
	1) Создаем POST запрос на адрес http://localhost:8000/api/auth/register
	2) Во вкладке Headers указываем KEY – Content-Type. VALUE – application/json
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
 	"email": "zxcv@zxcv.ru",        	// email пользователя
 	"username": "zcxv",                 // никнейм пользователя
 	"first_name": "Ivan",               // Имя
 	"last_name": "Ivanov",            	// Фамилия
 	"patronymic": "Ivanovich",     		// Отчество
 	"password": "123456"             	// Пароль
	}
	5) Отправляем запрос

     Проверка LoginAPI:
	1) Создаем POST запрос на адрес http://localhost:8000/api/auth/login
	2) Во вкладке Headers указываем KEY – Content-Type. VALUE – application/json
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
	"email": "zxcv@zxcv.ru",
	"password": "123456"
	}
	5) Отправляем запрос
     
     Проверка UserAPI:
	1) Создаем GET запрос на адрес http://localhost:8000/api/auth/user
	2) Во вкладке Headers указываем KEY – Authorization. VALUE – Token [токен, который вернулся при авторизации]
	3) Отправляем запрос
	4) Если токен верный, вернется информация о запрошенном пользователе

     Проверка Logout:
	1) Создаем POST запрос на адрес http://localhost:8000/api/auth/logout
	2) Во вкладке Headers указываем KEY – Authorization. VALUE – Token [токен, пользователя, которого хотим деаунтифицировать]
	3) Отправляем запрос
	4) Если токен верный, ничего не вернется. По данному токену больше нельзя будет получить информацию и пользователю придется заново авторизоваться
     
	Проверка CreateProjectAPI:
	1) Создаем POST запрос на адрес http://localhost:8000/api/create_project
	2) Во вкладке Headers указываем KEY – Content-Type, Authorization. VALUE – "application/json", "Token [токен авторизованного пользователя]"
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
	"title": "Test2 Project",									// Название проекта
	"description": "the description of the Test2 Project"		// Описание проекта
	}
	5) Отправляем запрос

	Проверка UpdateProjectAPI:
	1) Создаем POST запрос на адрес http://localhost:8000/api/update_project
	2) Во вкладке Headers указываем KEY – Content-Type, Authorization. VALUE – "application/json", "Token [токен авторизованного пользователя]"
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
	"id": 3,													// id проекта, который хотим изменить
	"title": "Test2 Project",									// новое название проекта
	"description": "the description of the Test2 Project"		// Описание проекта
	}
	5) Отправляем запрос

	Проверка DeleteProjectAPI:
	1) Создаем DELETE запрос на адрес http://localhost:8000/api/delete_project
	2) Во вкладке Headers указываем KEY – Content-Type, Authorization. VALUE – "application/json", "Token [токен авторизованного пользователя]"
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
	"id": 3,													// id проекта, который хотим удалить
	}
	5) Отправляем запрос

	Проверка CreateProjectUsersTypesAPI: (таблица типов пользователей относительно проекта. Просто список всех существующих типов)
	1) Создаем POST запрос на адрес http://localhost:8000/api/create_projectusertype
	2) Во вкладке Headers указываем KEY – Content-Type, Authorization. VALUE – "application/json", "Token [токен авторизованного пользователя]"
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
	"name": "Супер Менеджер"			// Название роли
	}
	5) Отправляем запрос

	Проверка UpdateProjectUsersTypesAPI:
	1) Создаем POST запрос на адрес http://localhost:8000/api/update_projectusertype
	2) Во вкладке Headers указываем KEY – Content-Type, Authorization. VALUE – "application/json", "Token [токен авторизованного пользователя]"
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
	"id": 5,													// id роли, которую хотим изменить
	"name": "Супер Менеджер"									// Новое название роли
	}
	5) Отправляем запрос

	Проверка DeleteProjectUsersTypestAPI:
	1) Создаем DELETE запрос на адрес http://localhost:8000/api/delete_projectusertype
	2) Во вкладке Headers указываем KEY – Content-Type, Authorization. VALUE – "application/json", "Token [токен авторизованного пользователя]"
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
	"id": 2,													// id роли, которую хотим удалить
	}
	5) Отправляем запрос

	Проверка CreateTaskAPI:
	Идентично CreateProjectAPI
	URL: http://localhost:8000/api/create_task
	Поля:
	{
	"project": 1,												// Проект, в котором создаем таск
	"title": "My 1 task",										// Название таска
	"description": "The description of my 1 task",				// Описание таска
	"start_date": "2020-04-10T12:43:00",						// Дата начала выполнения таска (если не хотим добавлять, не передаем это поле)
	"end_date": "2020-04-10T13:43:00",							// Дата оканчания выполнения таска (если не хотим добавлять, не передаем это поле)
	"users": [16, 20]											// Пользователи, которые будут выполнять таск
	}

	Проверка UpdateTaskAPI:
	Идентично UpdateProjectAPI
	URL: http://localhost:8000/api/update_task
	Поля:
	{
	"title": "My 1 task",
	"description": "The description of my 1 task",
	"start_date": "2020-05-10T12:43:00",
	"end_date": "2020-06-10T13:43:00",
	"id": 19													// id таска, который изменяем
	}

	Проверка DeleteTaskAPI:
	Идентично DeleteProjectAPI
	URL: http://localhost:8000/api/delete_task

	Проверка CreateTodoAPI:
	Идентично CreateProjectAPI
	URL: http://localhost:8000/api/create_todo
	Поля:
	{
    "text": "asherwjhwe5",										// Текст todo
    "done": false,												// Сделана или нет
    "task": 1													// id таска, для которого создаем todo
	}

	Проверка UpdateTodoAPI:
	Идентично UpdateProjectAPI
	URL: http://localhost:8000/api/update_todo
	Поля:
	{
	"id": 1,
	"text": "new text"
	}

	Проверка DeleteTodoAPI:
	Идентично DeleteProjectAPI
	URL: http://localhost:8000/api/delete_todo

	Проверка ProjectView:
	Запрос: GET
	URL: http://localhost:8000/api/projects - список всех проектов
	URL: http://localhost:8000/api/projects/2 - информация о 2 проекте

	Проверка ProjectUsersTypesView:
	Запрос: GET
	URL: http://localhost:8000/api/projectuserstypes - список всех ролей
	URL: http://localhost:8000/api/projectuserstypes/2 - информация о 2 роли

	Проверка TaskView:
	Запрос: GET
	URL: http://localhost:8000/api/tasks - список всех тасках
	URL: http://localhost:8000/api/tasks/2 - информация о 2 таске

	Проверка TodoView:
	Запрос: GET
	URL: http://localhost:8000/api/todos - список всех todo
	URL: http://localhost:8000/api/todos/2 - информация о 2 todo

	Проверка ProjectUsersView:
	Запрос: GET
	URL: http://localhost:8000/api/projectusers - список всех проект - пользователь - роль
	URL: http://localhost:8000/api/projectusers/2 - информация о записи с id 2
