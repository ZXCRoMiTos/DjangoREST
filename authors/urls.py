from django.urls import path
from .views import AuthorView


app_name = 'authors'
urlpatterns = [
    path('', AuthorView.as_view({'get': 'list'})),
]