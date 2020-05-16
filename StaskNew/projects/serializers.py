from rest_framework import serializers
from .models import Project, ProjectUsersTypes, Task, Todo

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
    
    def create(self, validated_data):
        project = Project.objects.create(**validated_data)
        return project

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.theme = validated_data.get('theme', instance.theme)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance

class  ProjectUsersTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectUsersTypes
        fields = '__all__'

    def create(self, validated_data):
        projectUserType = ProjectUsersTypes.objects.create(**validated_data)
        return projectUserType

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class  TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        extra_kwargs = {'project': {'required': False}}

    def create(self, validated_data):
        task = Task.objects.create(**validated_data)
        return task

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.start_date = validated_data.get('start_date', instance.start_date)
        instance.end_date = validated_data.get('end_date', instance.end_date)
        instance.done = validated_data.get('done', instance.done)
        instance.is_public = validated_data.get('is_public', instance.is_public)
        instance.save()
        return instance


class  TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
        extra_kwargs = {'task': {'required': False}}

    def create(self, validated_data):
        todo = Todo.objects.create(**validated_data)
        return todo

    def update(self, instance, validated_data):
        instance.text = validated_data.get('text', instance.text)
        instance.done = validated_data.get('done', instance.done)
        instance.save()
        return instance
