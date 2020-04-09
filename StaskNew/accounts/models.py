from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

import sys
sys.path.append('../')
from projects.models import Task, ProjectUsersTypes, Project

class AccountManager(BaseUserManager):
    def create_user(self, username, email, first_name="", last_name="", patronymic="", tasks=[], password=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not username:
            raise ValueError("Users must have an username")
        
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            first_name=first_name,
            last_name=last_name,
            patronymic=patronymic,
            tasks=tasks,
            )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            password=password,
            )

        user.is_staff = True
        user.is_superuser = True
        user.is_admin = True
        user.save(using=self._db)
        return user

class Account(AbstractBaseUser):
    # Necessaruy fields
    id = models.AutoField(primary_key=True)
    email = models.EmailField('Email пользователя', max_length=100, unique=True)
    username = models.CharField('Никнейм пользователя', max_length=30, unique=True)
    date_joined = models.DateTimeField('Дата регистрации', auto_now_add=True)
    last_login = models.DateTimeField('Дата последней авторизации', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    # Custom fields
    first_name = models.CharField('Имя пользователя', max_length = 50)
    last_name = models.CharField('Фамилия пользователя', max_length = 50)
    patronymic = models.CharField('Отчество пользователя', max_length = 50)
    tasks = models.ManyToManyField(Task)
	
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = AccountManager()
    
    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class ProjectUsers(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user_type = models.ForeignKey(ProjectUsersTypes, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user) + " - " + str(self.project) + " - " + str(self.user_type)
    
    class Meta:
        verbose_name = 'Пользователь/Проект/Тип'
        verbose_name_plural = 'Пользователи/Проекты/Типы'