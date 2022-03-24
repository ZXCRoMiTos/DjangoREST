from rest_framework.viewsets import ModelViewSet
from .models import Author
from .serializers import AuthorModelsSerializer


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelsSerializer