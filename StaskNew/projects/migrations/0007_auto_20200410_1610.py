# Generated by Django 3.0.5 on 2020-04-10 13:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0006_auto_20200410_1322'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 4, 10, 16, 10, 53, 331573), verbose_name='Начало выполнения задания'),
        ),
    ]