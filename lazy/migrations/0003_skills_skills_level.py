# Generated by Django 4.0.4 on 2022-05-16 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lazy', '0002_portfolio_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='skills',
            name='skills_level',
            field=models.CharField(default='Intermediate', max_length=20),
            preserve_default=False,
        ),
    ]
