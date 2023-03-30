from django.conf import settings
from django.db import models
class Tester(models.Model):
    'Generated Model'
    test = models.BigIntegerField()
    testnam = models.BigIntegerField(null=True,blank=True,)

# Create your models here.
