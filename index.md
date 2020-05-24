---
layout: default
data: patakarauranga
title:  Pātaka Raraunga
subtitle: A place to find data for and about Māori
isHome: true
---

{% include patakarauranga.html %}

## Topics

<ol class="post-card-box clearfix">
     {% for topic in site.topics %}
        <li>
            <div class="post-card">
                <a href="{{ topic.link }}" class="post-card-image" style="background-image: url( '{{site.baseurl}}/assets/img/list/{{ topic.data }}.png' )"></a>
                <div class="post-card-body">
                     <a href="{{ topic.link }}" class="post-card-link"><h3 class="post-card-title">{{ topic.title }}</h3></a>
                </div>
            </div>
        </li>
    {% endfor %} 
</ol>

## Tools

<a href="{{site.baseurl}}/tools">Link to tools page</a>

## Reports

<a href="{{site.baseurl}}/reports">Link to reports page</a>
