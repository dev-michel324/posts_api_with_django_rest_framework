from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import PostSerializer
from .models import Post

@api_view(['GET'])
def post_list(request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(
            {'posts': serializer.data},
            safe=False
        )

@api_view(['POST'])
def post_create(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)