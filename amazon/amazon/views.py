from django.http import HttpResponse

def home_view(request):
    return HttpResponse("Welcome to the Home Page ")

def about_view(request):
    return HttpResponse("About us Page!")

def contact_view(request):
    return HttpResponse("Contact us Page!")

def login_view(request):
    return HttpResponse("Login successfully done!")

def signup_view(request):
    return HttpResponse("Sign up successfully done!")

def logout_view(request):
    return HttpResponse("Logout successfully done!")

def career_view(request):
    return HttpResponse(" looking for job!")