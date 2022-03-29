from rest_framework.viewsets import ModelViewSet
from .models import Author
from .serializers import AuthorModelsSerializer
from rest_framework.pagination import PageNumberPagination


class StandardPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelsSerializer
    pagination_class = StandardPagination