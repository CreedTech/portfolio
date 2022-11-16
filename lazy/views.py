from django.conf import settings
from django.shortcuts import render, redirect,get_object_or_404

from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from .models import Home, About, Profile, Category, Skills, Portfolio, Testimonial

# Create your views here.
def index(request):

    # Home
    home = Home.objects.latest('updated')

    # About 
    about = About.objects.latest('updated')
    profiles =Profile.objects.filter(about=about)

    # Skills
    categories = Category.objects.all()

    # Portfolio
    portfolios = Portfolio.objects.all()

    # Testimonial
    testimonials = Testimonial.objects.all()

    # Contact
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            form.send()
            return redirect('index')
    else:
        form = ContactForm()


    context = {
        'home': home,
        'about': about,
        'profiles': profiles,
        'categories': categories,
        'portfolios': portfolios,
        'testimonials': testimonials,
        'form': form
    }

    
    return render(request, 'index.html', context)
