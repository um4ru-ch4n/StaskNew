from django.db import models

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField('Название проекта', max_length=100)
    description = models.TextField('Описание проекта')
    creation_date = models.DateTimeField('Дата создания проекта', auto_now_add=True)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    
class ProjectUsersTypes(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField('Тип пользователя', max_length=50)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Тип пользователя'
        verbose_name_plural = 'Типы пользователей'


class Task(models.Model):
    id = models.AutoField(primary_key=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    title = models.CharField('Название задания', max_length=100)
    description = models.TextField('Описание задания')
    creation_date = models.DateTimeField('Дата создания задания', auto_now_add=True)
    start_date = models.DateTimeField('Начало выполнения задания')
    end_date = models.DateTimeField('Конец выполнения задания')
    done = models.BooleanField('Выполнено', default=False)
    is_public = models.BooleanField('Публичное задание', default=False)

    def __str__(self):
        return str(self.project) + " - " + str(self.title)
    
    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Задания'


class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    text = models.TextField('TODO')
    done = models.BooleanField('Выполнено', default=False)

    def __str__(self):
        if len(str(self.text)) > 30:
            string = str(self.task) + " - " + str(self.text)[:30] + "..."
        else:
            string = str(self.task) + " - " + str(self.text)
        return string
    
    class Meta:
        verbose_name = 'TODO'
        verbose_name_plural = 'TODOs'
