from django.db import models

class Meal(models.Model):
    name = models.CharField(max_length=100)
    value = models.BigIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
