from django.shortcuts import render

# Create your views here.
def exp_index(request):
    return render(request, 'exp/index.html')
