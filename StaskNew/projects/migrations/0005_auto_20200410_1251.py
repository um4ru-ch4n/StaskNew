# Generated by Django 3.0.5 on 2020-04-10 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_auto_20200410_1249'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='start_date',
            field=models.DateTimeField(verbose_name='Начало выполнения задания'),
        ),
    ]
