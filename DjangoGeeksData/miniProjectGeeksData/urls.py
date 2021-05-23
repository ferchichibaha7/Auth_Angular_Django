from django import urls
from django.conf.urls import url
from django.urls import path
from .views import AllUsersView, DeleteUserView, RegisterView, LoginView, UserView, LogoutView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('users', AllUsersView.as_view()),
    url(r'^user/(?P<pk>[0-9]+)$',DeleteUserView.as_view()),
]
