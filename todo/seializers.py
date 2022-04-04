from rest_framework import serializers
from .models import Project, ToDo
from authors.models import Author
from authors.serializers import AuthorModelsSerializer


class ProjectSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=32)
    link_GIT = serializers.CharField(max_length=64)
    users = AuthorModelsSerializer(many=True)


class ToDoSerializer(serializers.Serializer):
    project = ProjectSerializer(many=True)
    text = serializers.CharField(max_length=256)
    create_data = serializers.DateTimeField()
    update_data = serializers.DateTimeField()
    user = AuthorModelsSerializer(many=True)
    is_active = serializers.BooleanField(default=True)