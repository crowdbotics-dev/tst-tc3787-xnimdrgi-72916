from rest_framework import authentication
from testname.models import Tester
from .serializers import TesterSerializer
from rest_framework import viewsets

class TesterViewSet(viewsets.ModelViewSet):
    serializer_class = TesterSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Tester.objects.all()