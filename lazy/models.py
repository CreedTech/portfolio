from django.db import models

# Home Section

class Home(models.Model):
    name = models.CharField(max_length=20)
    greetings_1 = models.CharField(max_length=30)
    greetings_2 = models.CharField(max_length=200)
    picture = models.ImageField(upload_to='picture/')
    # save time when modified
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


# ABOUT SECTION

class About(models.Model):
    heading = models.CharField(max_length=300)
    description = models.TextField(blank=False,max_length=500)
    profile_img = models.ImageField(upload_to='profile/')

    updated = models.DateTimeField(auto_now=True)


class Profile(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE)
    social_name = models.CharField(max_length=10)
    link = models.URLField(max_length=200)


# SKILLS SECTION

class Category(models.Model):
    name = models.CharField(max_length=20)

    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Skill'
        verbose_name_plural = 'Skills'

    def __str__(self):
        return self.name

class Skills(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    skill_name = models.CharField(max_length=50)

# PORTFOLIO SECTION

class Portfolio(models.Model):
    category = models.CharField(max_length=20)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='portfolio/')
    link = models.URLField(max_length=200)

    def __str__(self):
        return f'{self.name}'


# ABOUT SECTION

class Testimonial(models.Model):
    heading = models.CharField(max_length=50)
    description = models.TextField(blank=False)
    profile_img = models.ImageField(upload_to='profile/')

    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Testimonial {self.id}'


class ContactForm(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    inquiry = models.CharField(max_length=70)
    message = models.CharField(max_length=2000)

    def __str__(self):
        return self.email