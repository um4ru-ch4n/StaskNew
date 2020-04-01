from django.db import models

class User(models.Model):
	id = models.AutoField(primary_key=True)
	email = models.EmailField('Email пользователя', max_length = 100, unique = True)
	name = models.CharField('Имя пользователя', max_length = 50)
	surname = models.CharField('Фамилия пользователя', max_length = 50)
	patronymic = models.CharField('Отчество пользователя', max_length = 50)
	birthdate = models.DateField('Дата рождения')
	reg_date = models.DateTimeField('Дата регистрации', auto_now_add=True)
	user_type = models.CharField('Тип пользователя', max_length = 50, default = "user")
    
	def __str__(self):
		if self.patronymic:
			string = self.surname + " " + str(self.name)[0] + "." +  str(self.patronymic)[0] + "."
		else:
			string = self.surname + " " + str(self.name)[0] + "."
		return string

	class Meta:
		verbose_name = 'Пользователь'
		verbose_name_plural = 'Пользователи'







