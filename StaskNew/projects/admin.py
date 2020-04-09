from django.contrib import admin

from .models import Project, ProjectUsersTypes, Task, Todo

admin.site.register(Project)
admin.site.register(ProjectUsersTypes)
admin.site.register(Task)
admin.site.register(Todo)