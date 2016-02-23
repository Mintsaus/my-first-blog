from django.shortcuts import render

# Create your views here.
def exp_index(request):
    return render(request, 'exp/index.html')

def exp_minesweeper(request):
    return render(request, 'exp/minesweeper.html')

def exp_list(request):
    return render(request, 'exp/list.html')