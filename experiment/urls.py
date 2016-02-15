from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.exp_index, name='exp_index'),

]