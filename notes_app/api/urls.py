from django.urls import path
from .views import getNote, getNotes, addNote, updateNote

urlpatterns = [
    path('notes/', getNotes, name="getNotes"),
    path('notes/<str:id>/update/', updateNote, name="updateNote"),
    path('notes/add/', addNote, name="addNote"),
    path('notes/<str:id>/', getNote, name="getNote"),
]