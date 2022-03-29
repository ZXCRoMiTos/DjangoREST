from django.db import models
from authors.models import Author


class Project(models.Model):
    name = models.CharField(max_length=32)
    link_GIT = models.CharField(max_length=64)
    users = models.ManyToManyField(Author)


class ToDo(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    text = models.CharField(max_length=256)
    create_data = models.DateTimeField(auto_now_add=True)
    update_data = models.DateTimeField(auto_now=True)
    user = models.OneToOneField(Author, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)