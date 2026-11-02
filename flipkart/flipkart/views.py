from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

def home_view(request):
    return render(request, 'home.html')

def about_view(request):
    return render(request, 'about.html')

def contact_view(request):
    return render(request, 'contact.html')

def login_view(request):
    form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def signup_view(request):
    form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})


