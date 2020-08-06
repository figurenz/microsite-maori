---
layout: default
data: patakarauranga
title:  Find data for and about Māori.
subtitle: Improve Māori wellbeing through better, data-informed decisions.
isHome: true
---

{% include patakarauranga.html %}

## Topics
<a name="topics"></a>
<ol class="post-card-box clearfix">
     {% for topic in site.topics %}
        <li>
            <div class="post-card">
                <a href="{{ topic.link }}" class="post-card-image" style="background-image: url( '{{site.baseurl}}/assets/img/list/{{ topic.data }}.jpg' )"></a>
                <div class="post-card-body">
                     <a href="{{ topic.link }}" class="post-card-link"><h3 class="post-card-title">{{ topic.title }}</h3></a>
                </div>
            </div>
        </li>
    {% endfor %} 
</ol>
