from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import mixins
from rest_framework import viewsets
from .models import Author
from .serializers import AuthorModelsSerializer


class StandardPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class AuthorView(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelsSerializer
    pagination_class = StandardPagination
