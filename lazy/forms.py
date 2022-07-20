from django import forms
from django.conf import settings
from django.core.mail import send_mail
from .models import ContactForm

class ContactForm(forms.ModelForm):
    name = forms.CharField(max_length=120,
        widget=forms.TextInput(
                attrs={
                    "placeholder": "Insert your name",
                    "class": "contact__form-input"
                }
            )
        )
    email = forms.EmailField(
        widget=forms.TextInput(
                attrs={
                    "placeholder": "Insert your email",
                    "class": "contact__form-input"
                }
            )
        )
    inquiry = forms.CharField(
        widget=forms.TextInput(
                attrs={
                    "placeholder": "Place your inquiry",
                    "class": "contact__form-input"
                }
            )
    )
    message = forms.CharField(
        widget=forms.TextInput(
                attrs={
                    "placeholder": "Write your project!",
                    "class": "contact__form-input contact__form-area",
                    "type": "textarea",
                    "row": 20,
                    "col": 20
                }
            )
    )

    class Meta:
        model = ContactForm
        fields = '__all__'

    def get_info(self):
        """
        Method that returns formatted information
        :return: subject, msg
        """
        # Cleaned data
        cl_data = super().clean()

        name = cl_data.get('name').strip()
        from_email = cl_data.get('email')
        subject = cl_data.get('inquiry')

        msg = f'{name} with email {from_email} said:'
        msg += f'\n"{subject}"\n\n'
        msg += cl_data.get('message')

        return subject, msg

    def send(self):

        subject, msg = self.get_info()

        send_mail(
            subject=subject,
            message=msg,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.RECIPIENT_ADDRESS]
        )

