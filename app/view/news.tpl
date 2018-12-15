<!-- app/view/news.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
    <div>
      {% for item in result %}
        <div>{{item.Tables_in_mysql}}</div>
      {% endfor %}
    </div>
  </body>
</html>