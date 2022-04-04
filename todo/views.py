from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Project, ToDo
from .seializers import ProjectSerializer, ToDoSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework import filters, status


class ProjectPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'


class ToDoPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    pagination_class = ToDoPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['project']

    def destroy(self, request, *args, **kwargs):
        todo = self.get_object()
        todo.is_active = False
        todo.save()
        return Response(status=status.HTTP_200_OK)



