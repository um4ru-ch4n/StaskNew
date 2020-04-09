from django.contrib import admin

from .models import Account, ProjectUsers

admin.site.register(Account)
admin.site.register(ProjectUsers)
