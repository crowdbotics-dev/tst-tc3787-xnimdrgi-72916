
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import TesterViewSet
router = DefaultRouter()
router.register('tester', TesterViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
