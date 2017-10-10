from django.shortcuts import render
from .logic.login import login_logic
from django.shortcuts import HttpResponse
# Create your views here.
login=login_logic()

def index(request):
    if request.method=='POST':
        username=request.POST.get('username',None)
        password=request.POST.get('password',None)
        print(username,password)
    return render(request,'index.html')


def check_login(request):
    if request.method=='POST':
        tel=request.POST.get('tel',None)
        in_pwd=request.POST.get('in_pwd',None)
    result=login.check_login(tel,in_pwd)
