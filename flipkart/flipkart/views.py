from django.http import HttpResponse

def home_view(request):
    return HttpResponse("Welcome to the Home Page ")

def about_view(request):
    return HttpResponse("About us Page!")

def contact_view(request):
    return HttpResponse("Contact us Page!")

def sales_view(reqest):
    return HttpResponse("Sales Page!")
