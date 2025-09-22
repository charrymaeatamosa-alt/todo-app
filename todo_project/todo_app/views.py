from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Task
from .forms import TaskForm

def home(request):
    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid():
            task = form.save()
            messages.success(request, f"Task '{task.title}' added successfully ✅")
            return redirect("home")
    else:
        form = TaskForm()

    return render(request, "todo_app/home.html", {
        "tasks": Task.objects.all(),
        "form": form
    })

def delete_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    task_title = task.title
    task.delete()
    messages.error(request, f"Task '{task_title}' deleted ❌")
    return redirect("home")

def toggle_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    task.completed = not task.completed
    task.save()
    if task.completed:
        messages.success(request, f"Task '{task.title}' marked as completed 🎉")
    else:
        messages.info(request, f"Task '{task.title}' marked as not completed ↩️")
    return redirect("home")
