from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, UsersListView
from knox import views as knox_views

from rest_framework import routers
from . import api

router = routers.DefaultRouter()
router.register('api/users', api.UsersListView)

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('', include(router.urls)),
]