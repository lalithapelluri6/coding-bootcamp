# Django

## About

Django is made up of separate `apps`. The idea is that one project brings many apps together. Therefore, you can reuse apps you've already made in other projects, making Django development very scalable.

It follows an MTV (Model Template View) model that is opinionated! It's high-level and requires you to follow a certain structure and set of rules - the Django way. 

### Benefits

It is:
- highly scalable
- secure
- full featured (has user auth, site maps, etc.)
- created for rapid development

### Used by:
- Disqus
- Instagram
- Pinterest
- NASA


## Resources
https://www.youtube.com/watch?v=D6esTdOLXh4

https://simpleisbetterthancomplex.com/series/beginners-guide/1.11/


## Installation 

https://www.anaconda.com/download/#macos


## Instructions 

### Starting Our First Server

1. `conda install virtualenv` (prepend with `sudo` if you get a permissions error)

- https://simpleisbetterthancomplex.com/series/beginners-guide/1.11/


2. `mkdir app`

3. `conda create -n venv` (where we can choose another word instead of `venv`)

4. `source activate venv` (to deactivate: `source deactivate`. to delete: `conda remove -n venv -all`)
  - or just `activate venv`

5. `conda install -n venv <package>`

6. `conda install django`

7. `django-admin startproject app`

8. `conda install mysqlclient`

9. Django will come with a SQLite db by default.

10. From app (at the same level as venv) `python manage.py runserver`  

### Database Connection to MySQL

11. Open `settings.py` in our `/app` folder and comment out the existing entry for DATABASES. 

12. We want to use something more robust than SQLite, so we'll replace it with MySQL.

13. Create a new DATABASE entry dictionary in the following format, and then create a new database in your MySQL Workbench.

```python

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': YOUR_APP_NAME,
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': ''
    }
}


```

14. Run this command in your Anaconda shell (or Terminal) in your /app directory,

`python manage.py migrate`

15. Start the server again and head to the `/admin` route. 

### Establishing a Super User

16. To create a super user: `python manage.py createsuperuser --username=<username> --email=<name@email.com>`
- create a password that you will remember. 

17. checkout `http://127.0.0.1:8000/admin`. Log in.

### Creating an App

18. run `python manage.py startapp <name>`

19. add your app in apps in `settings.py`:

```python
INSTALLED_APPS = [
    "<name>",
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

```

20. In `urls.py`, add a path to your new app with the style of 

`path('<name>/', include('<name>.urls')),`

21. Make sure to import the include() function: `from django.urls import include, path`. 

22. Create a `urls.py` folder in your new app and import the same libraries, as well as your views: `from . import views`. Set up the urlpatterns list and send the index view.

```python
urlpatterns = [
    path('', views.index, name='index'),
]
# this path defines the root <app_name> route - /app_name

```

### Create Views

23. Navigate to your `views.py` file in your new app's folder. We want to define an index route as a function that takes in a request.

```py
def index(request):
    return ''
```

24. Import HttpReponse with `from django.http import HttpResponse` and edit your return statement accordingly.
    `return HttpResponse("Hello World")`

### Templates

25. However, we really want to create a template and send it to the frontend. Let's replace our return with this line:
`    return render(request, "app_name/index.html")` and create folder structure of templates/*app_name*/index.html in your app. Insert any html elements in there, but don't include the head tags just yet.

26. Create a `layout.html` in the same folder and include all of the required head tags, as well as CSS Frameworks or other JS import scripts you may need.

27. In your `layout.html`, add the following snippet in the body, and additionally add it around your content in `index.html`:
```
    {% block content %}
    {% endblock %}
```
The "content" can be renamed to anything, as long as it is consistent in both documents. This way, we can name different blocks of information to show on different areas of the page.

28. Add this line at the top of your `index.html`: `{% extends '<app_name>/layout.html' %}`. This ensures that our HTML in `index.html` gets sent to the layout in `layout.html`.

29. Back in our `views.py`, we can add a third argument to our render function: a dictionary. Add a dictionary with one key-value pair as the third argument, and in your `index.html`, render that key-value pair somewhere on the page with `{{ key }}`.

### Busting Out Some Models

30. Open `models.py` in your `app_name` directory.

31. Instatiate a new class of your `app_name` and begin to generate the model rules. For Posts, here is an example:

```python
    class Posts(models.Model):
        title = models.Charfield(max_length=200)
        body = models.TextField()
        created_at = models.DateTimeField(default = datetime.now)

```

32. We will have to create migrations based on this new model to create a table in our database. In the command line, 

`python manage.py makemigrations <app_name>`

33. To run it and create the database table, run `python manage.py migrate`. Check the database to confirm that the table was created.

34. Run the server and head to the `/admin` route and log in. Before the model will show up, you must import and register your models in your `admin.py` file in your /*app_name* folder. Here's an example following the Post model:

```python
    from .models import Posts
    admin.site.register(Posts)
```

You should now be able to see your models in the admin page and can add Posts from the admin page itself.

