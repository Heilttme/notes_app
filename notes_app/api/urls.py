from django.urls import path
from .views import getNote, getNotes, addNote

urlpatterns = [
    path('notes/', getNotes, name="getNotes"),
    path('notes/<str:id>/update/', addNote, name="updateNote"),
    path('notes/<str:id>/', getNote, name="getNote"),
]