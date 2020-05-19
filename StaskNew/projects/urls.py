from django.urls import path, include
from . import api

from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/projects', api.ProjectView)
router.register('api/projectuserstypes', api.ProjectUsersTypesView)
router.register('api/tasks', api.TaskView)
router.register('api/todos', api.TodoView)

urlpatterns = [
    path('', include(router.urls)),
    path('api/create_project', api.CreateProjectAPI.as_view()),
    path('api/update_project', api.UpdateProjectAPI.as_view()),
    path('api/delete_project', api.DeleteProjectAPI.as_view()),
    path('api/create_task', api.CreateTaskAPI.as_view()),
    path('api/update_task', api.UpdateTaskAPI.as_view()),
    path('api/delete_task', api.DeleteTaskAPI.as_view()),
    path('api/create_todo', api.CreateTodoAPI.as_view()),
    path('api/update_todo', api.UpdateTodoAPI.as_view()),
    path('api/delete_todo', api.DeleteTodoAPI.as_view()),
    path('api/create_projectusertype', api.CreateProjectUsersTypesAPI.as_view()),
    path('api/update_projectusertype', api.UpdateProjectUsersTypesAPI.as_view()),
    path('api/delete_projectusertype', api.DeleteProjectUsersTypestAPI.as_view()),
    path('api/user_projects', api.GetUserProjectsAPI.as_view()),
    path('api/project_tasks', api.GetTasksAPI.as_view()),
    path('api/project_users', api.GetProjectUsersAPI.as_view()),
]