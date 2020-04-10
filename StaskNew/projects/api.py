from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from .serializers import ProjectSerializer, ProjectUsersTypesSerializer, TaskSerializer, TodoSerializer
from .models import Project, ProjectUsersTypes, Task, Todo

import sys
sys.path.append('../')
from accounts.models import Account, ProjectUsers

class CreateProjectAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = ProjectSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        project = serializer.save()

        projectUser = ProjectUsers(user=request.user, project=project, user_type=ProjectUsersTypes.objects.get(name="Создатель"))
        projectUser.save()

        return Response({
            "project": ProjectSerializer(project, context = self.get_serializer_context()).data,
            "projectUser": str(projectUser),
        })

class UpdateProjectAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = ProjectSerializer

    def post(self, request, *args, **kwargs):
        try:
            instance = Project.objects.get(id=request.data["id"])
        except Exception as e:
            return Response(e.args)
        
        project = self.get_serializer(instance = instance, data = request.data)
        project.is_valid(raise_exception = True)
        project.save()

        return Response({
            "project": project.data,
        })


class DeleteProjectAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = ProjectSerializer
    
    def delete(self, request, *args, **kwargs):
        try:
            project = Project.objects.get(id=request.data["id"])
        except Exception as e:
            return Response(e.args)
        
        project.delete()
        return Response(data={
            "The project was successfully deleted."
        }, status=status.HTTP_200_OK)


class CreateProjectUsersTypesAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = ProjectUsersTypesSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        projectUserType = serializer.save()

        return Response({
            "projectUserType": ProjectUsersTypesSerializer(projectUserType, context = self.get_serializer_context()).data,
        })


class UpdateProjectUsersTypesAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = ProjectUsersTypesSerializer

    def post(self, request, *args, **kwargs):
        try:
            instance = ProjectUsersTypes.objects.get(id=request.data["id"])
        except Exception as e:
            return Response(e.args)
        
        projectUserType = self.get_serializer(instance = instance, data = request.data)
        projectUserType.is_valid(raise_exception = True)
        projectUserType.save()

        return Response({
            "projectUserType": projectUserType.data,
        })


class DeleteProjectUsersTypestAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = ProjectUsersTypesSerializer
    
    def delete(self, request, *args, **kwargs):
        try:
            projectUserType = ProjectUsersTypes.objects.get(id=request.data["id"])
        except Exception as e:
            return Response(e.args)
        
        projectUserType.delete()
        return Response(data={
            "The projectUserType was successfully deleted."
        }, status=status.HTTP_200_OK)


class CreateTaskAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = TaskSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        task = serializer.save()

        for user in request.data["users"]:
            us = Account.objects.get(id=user)
            us.tasks.add(task)
            us.save()

        return Response({
            "task": TaskSerializer(task, context = self.get_serializer_context()).data,
        })


class UpdateTaskAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = TaskSerializer

    def post(self, request, *args, **kwargs):
        try:
            instance = Task.objects.get(id=request.data["id"])
        except Exception as e:
            return Response(e.args)
        
        task = self.get_serializer(instance = instance, data = request.data)
        task.is_valid(raise_exception = True)
        task.save()

        return Response({
            "task": task.data,
        })


class DeleteTaskAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = TaskSerializer
    
    def delete(self, request, *args, **kwargs):
        try:
            task = Task.objects.get(id=request.data["id"])
        except Exception as e:
            return Response(e.args)
        
        task.delete()
        return Response(data={
            "The task was successfully deleted."
        }, status=status.HTTP_200_OK)


class CreateTodoAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = TodoSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        todo = serializer.save()

        return Response({
            "todo": TodoSerializer(todo, context = self.get_serializer_context()).data,
        })


class UpdateTodoAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = TodoSerializer

    def post(self, request, *args, **kwargs):
        try:
            instance = Todo.objects.get(id=request.data["id"])
        except Exception as e:
            return Response(e.args)
        
        todo = self.get_serializer(instance = instance, data = request.data)
        todo.is_valid(raise_exception = True)
        todo.save()

        return Response({
            "todo": todo.data,
        })


class DeleteTodoAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = TodoSerializer
    
    def delete(self, request, *args, **kwargs):
        try:
            todo = Todo.objects.get(id=request.data["id"])
        except Exception as e:
            return Response(e.args)
        
        todo.delete()
        return Response(data={
            "The todo was successfully deleted."
        }, status=status.HTTP_200_OK)


class ProjectView(viewsets.ReadOnlyModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = ProjectSerializer
    
    queryset = Project.objects.all()


class ProjectUsersTypesView(viewsets.ReadOnlyModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = ProjectUsersTypesSerializer

    queryset = ProjectUsersTypes.objects.all()


class TaskView(viewsets.ReadOnlyModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = TaskSerializer

    queryset = Task.objects.all()


class TodoView(viewsets.ReadOnlyModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = TodoSerializer

    queryset = Todo.objects.all()