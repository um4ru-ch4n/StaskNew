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
            instance = Project.objects.get(id=kwargs['id'])
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
        project = Project.objects.get(id=kwargs['id'])
        project.delete()
        return Response(data={
            "The project was successfully deleted."
        }, status=status.HTTP_200_OK)


class ProjectListView(viewsets.ReadOnlyModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer