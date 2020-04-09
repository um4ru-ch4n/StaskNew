from django.urls import path, include
from . import api

from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/projects', api.ProjectListView)

urlpatterns = [
    path('', include(router.urls)),
    path('api/create_project', api.CreateProjectAPI.as_view()),
    path('api/update_project/<int:id>', api.UpdateProjectAPI.as_view()),
    path('api/delete_project/<int:id>', api.DeleteProjectAPI.as_view()),
]