from rest_framework.serializers import HyperlinkedModelSerializer
from rest_framework import serializers
from .models import Author
from django.urls import reverse


class AuthorModelsSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('uid', 'username', 'first_name', 'last_name', 'email', 'url')
