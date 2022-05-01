from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase
from .views import AuthorView
from .models import Author
from django.contrib.auth.models import User
from mixer.backend.django import mixer


class TestAuthorView(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/authors/')
        view = AuthorView.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_detail_about_author(self):
        author = Author.objects.create(username='TestUser', first_name='Test',
                                       last_name='User', email='testuser@gmail.com')
        client = APIClient()
        response = client.get(f'/api/authors/{author.uid}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_login_user(self):
        user = User.objects.create_user('user', 'user@user.com', 'user123456')
        test = self.client.login(username='user', password='user123456')
        self.assertEqual(test, True)


class SecondAuthorView(APITestCase):
    def test_edit_authors(self):
        author = mixer.blend(Author)
        response = self.client.put(f'/api/authors/{author.uid}/', {'username': 'NormalUser', 'first_name': 'Normal',
                                                                   'last_name': 'User',
                                                                   'email': 'normaluser@gmail.com'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
