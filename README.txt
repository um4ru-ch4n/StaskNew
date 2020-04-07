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
		1) docker-compose run web python StaskNew/manage.py migrate
		2) docker-compose up
	5. Сайт запустится по адресу http://localhost:8000/
     
     Для проверки API:
     Качаем postman  https://www.postman.com/downloads/
	 
     Проверка RegisterAPI:
	1) Создаем POST запрос на адрес http://localhost:8000/api/auth/register
	2) Во вкладке Headers указываем KEY – Content-Type. VALUE – application/json
	3) Во вкладке Body ставим флажок raw.
	4) Создаем json объект:
	{
 	"email": "zxcv@zxcv.ru",        // email пользователя
 	"username": "zcxv",                 // никнейм пользователя
 	"first_name": "Ivan",               // Имя
 	"last_name": "Ivanov",            // Фамилия
 	"patronymic": "Ivanovich",     // Отчество
 	"password": "123456"             // Пароль
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
     
