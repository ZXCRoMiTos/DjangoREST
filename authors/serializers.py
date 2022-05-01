from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Author


class AuthorModelsSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('uid', 'username', 'first_name', 'last_name', 'email')


class ExtendedAuthorModelsSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('uid', 'username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_stuff')
