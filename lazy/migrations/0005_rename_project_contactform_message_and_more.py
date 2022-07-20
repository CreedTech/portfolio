# Generated by Django 4.0.4 on 2022-05-17 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lazy', '0004_contactform'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contactform',
            old_name='project',
            new_name='message',
        ),
        migrations.AddField(
            model_name='contactform',
            name='inquiry',
            field=models.CharField(default='I have a Project', max_length=70),
            preserve_default=False,
        ),
    ]
