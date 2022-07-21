from django.shortcuts import render
from .models import Note
from rest_framework.decorators import api_view
from .serializers import NoteSerializer
from rest_framework.response import Response
from datetime import datetime

@api_view(["GET"])
def getNotes(request):
    notes = Note.objects.all()
    notes = list(notes)
    notes.sort(key=lambda x: x.updated)
    notes.reverse()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getNote(request, id):
    note = Note.objects.get(id=id)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

@api_view(["PUT"])
def updateNote(request, id):
    note = Note.objects.get(id=id)
    serializer = NoteSerializer(instance=note, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(["POST"])
def addNote(request):
    notes = Note.objects.all()
    note = Note()
    serializer = NoteSerializer(instance=note, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(["DELETE"])
def deleteNote(request, id):
    note = Note.objects.get(id=id)
    note.delete()
    return Response("Note was deleted")