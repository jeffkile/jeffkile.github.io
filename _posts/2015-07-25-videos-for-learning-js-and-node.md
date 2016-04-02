---
layout: post
stylesheets: [master, homepage, navigation, blog]
title:  "Videos for an introduction to modern full stack JavaScript web development"
date:  2015-07-25 
categories: programming javascript node 
---

---

# JS WAT

This is a great first video to watch because its both funny and gives you an insight into why so
many people get tripped up on JavaScript once they start seriously programming in it.

The thing with JavaScript is that it looks a lot like other languages, namely Java, and so lots of
people who have experience with other languages think they know more about it than they do. Scoping,
objects and functions are examples of things that have very different behavior than
in Java but look very similar and so many people incorrectly assume they work in a certain way.

The typing system is another example of a JS language feature that works very differently than one
might naively expect, which this video does a great job highlighting.

<iframe width="480" height="360" src="https://www.youtube.com/embed/FqhZZNUyVFM" frameborder="0" allowfullscreen></iframe>

The answers to why this behavior occurs can be found over on [Stack Overflow](http://stackoverflow.com/questions/9032856/what-is-the-explanation-for-these-bizarre-javascript-behaviours-mentioned-in-the)


# Ryan Dahl's original Node.js presentation

This is where it all started. If you're going to be writing Node.js you should watch this video
before you do anything else.

Ryan's thesis that traditional web frameworks do I/O wrong is the core concept behind why people
use Node.js. It is essential you understand the Ah-Hah moment this represented to the web
development community back in 2009.

<iframe width="640" height="360" src="https://www.youtube.com/embed/ztspvPYybIY" frameborder="0" allowfullscreen></iframe>

# Douglas Crockford Yahoo UI talks

Douglas Crockford is the creator of [JSLint](https://en.wikipedia.org/wiki/JSLint) and a prominent 
voice in the JavaScript community. All of his talks are excellent and [his book is a must
have](http://www.amazon.com/gp/product/0596517742/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0596517742&linkCode=as2&tag=jefkilsperweb-20&linkId=MHINUPZJY5BSZEP2)
for any serious JavaScript developer.

One of the things I find most interesting in this talk is the history of the language and how it
was created and named. The way he describes prototypical object inheritance as differential
inheritance (just inheriting the differences) is something I think is helpful in understanding
JavaScripts inheritance pattern. Lastly I find this video especially enjoyable because 
he also shares a dislike of the `new` keyword which is one of my most hated parts of the language 
as well, precisely because I've been bitten badly by the bug he discusses.

<iframe width="640" height="360" src="https://www.youtube.com/embed/RO1Wnu-xKoY" frameborder="0" allowfullscreen></iframe>

In the next video he talks about functions which he describes as "the best part" of JavaScript,
watch to find out why. Also pay attention to his definition and description of closure. I think its
one of the harder parts of the language to articulate and he does it very succinctly. One last thing
to note is where he talks about returning the keyword `this`, which is a very powerful trick of the
language and can help you to understand how JS libraries like D3 and JQuery are able to do things
like function chaining.

<iframe width="640" height="360" src="https://www.youtube.com/embed/ya4UHuXNygM" frameborder="0" allowfullscreen></iframe>

# Flux and React

These next videos are designed to demonstrate some of the exciting new things going on with the UI
element of web development. I chose to highlight React and Flux over other great frameworks
like Angular or Backbone because I think the React/Flux paradigm feels closest aligned to the
functional and event driven worlds that Douglas and Ryan talked about in the previous videos. I
think they also have less under the hood magic going on when compared to something like Meteor.js,
which makes it easier to understand.

<iframe width="640" height="360" src="https://www.youtube.com/embed/XxVg_s8xAms" frameborder="0" allowfullscreen></iframe>

<iframe width="640" height="360" src="https://www.youtube.com/embed/i__969noyAM" frameborder="0" allowfullscreen></iframe>

# Conclusion

Hopefully by now you are stoked about modern JavaScript development. The event loop, functional
programming and one way data binding are all extremely powerful and interesting features that make
this style of web development more fun and simpler than traditional web development.

As a bonus video I highly recommend watching Simple Made Easy which isn't a talk about JavaScript
but is instead about minimizing complexity in software development. In my opinion the concepts I've
presented here are applications of the underlying theory presented in this talk.

[Simple Made Easy](http://www.infoq.com/presentations/Simple-Made-Easy)

---
