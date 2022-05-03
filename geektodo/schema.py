from graphene_django import DjangoObjectType
from authors.models import Author
from todo.models import Project, ToDo
import graphene


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class AuthorType(DjangoObjectType):
    class Meta:
        model = Author
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todo = graphene.List(ToDoType)

    def resolve_all_todo(root, info):
        return ToDo.objects.all()


schema = graphene.Schema(query=Query)
