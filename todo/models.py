from django.db import models
from authors.models import Author
from uuid import uuid4


class Project(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(max_length=32)
    link_GIT = models.CharField(max_length=64)
    users = models.ManyToManyField(Author)


class ToDo(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    project = models.ManyToManyField(Project)
    text = models.CharField(max_length=256)
    create_data = models.DateTimeField(auto_now_add=True)
    update_data = models.DateTimeField(auto_now=True)
    user = models.ManyToManyField(Author)
    is_active = models.BooleanField(default=True)