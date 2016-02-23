from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.exp_index, name='exp_index'),
    url(r'^ms/$', views.exp_minesweeper, name='exp_minesweeper'),
    url(r'^list/$', views.exp_list, name='exp_list'),

]