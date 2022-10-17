from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=95, blank=False, null=False)
    content = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title