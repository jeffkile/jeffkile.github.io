---
layout: post
stylesheets: [master, homepage, navigation, blog]
navLocation: top 
title:  "The Effective Engineer - Summary Part 1"
date:  2016-03-30 
categories: programming engineering software 
---


---
I recently read Edmon Lau's book _The Effective Engineer_. I thought it was a great book with a lot great practical
advice for modern sofware engineers. While reading I took some notes which I have paraphrased and elaborated on below.

Please [buy his book](http://www.amazon.com/The-Effective-Engineer-Engineering-Disproportionate/dp/0996128107) if you
are interested in learning more. 


## Limit work in progress
  - A juggler can keep 3 balls in the air no problem but must concentrate hard to keep 6 or 7, likewise the more things
  we have to keep in our head while solving a problem the harder it will be to solve. So try to break things into parts
  and focus on individual pieces whenever possible.

  - The mental overhead from context switching causes your brain stress and makes you less efficient so try to avoid
    multi-tasking.

  - When groups fragment across too many projects they stop sharing the same context. Just like multi tasking this
    creates extra overhead that causes inefficency and lack of focus when it comes to doing designs and code reviews.


## Fight procrastination with planning
  - We tend to procrastinate when we are unsure of what to do next.

  - Studies have shown that having a plan reduces procrastination.

  - When a plan is in place it is easy to switch from one task to the next without hesitation leaving no room for 
  distraction.

  - Take large projects and break it up into chunks then break those chunks up into tasks so that each morning you can
    create a task list for yourself to work on that day so you don't get stuck.

  - Save a list of short tasks that can be done anytime so that when you have a block of time that's too small to fill
    with the next task on you won't get distracted with sometime that wastes your time.
    - Examples: code reviews, responding to emails, small bugs, writing tests.

## Prioritize Regularly
  - Constantly re-prioritize. Being effective is all about leveraging the time you have to make the biggest impact
    possible.

  - Don't count on someone else determining what you should be working on on a day to day basis. Don't assume just
    because your boss has more experience than you he knows which of your tasks will provide the biggest impact. You
    probably have more domain knowledge on your specific problem. Take responsibility for determining the best path
    forward on your poject.

  - If you see something that needs to be done urgently or something important you can pitch in and help out with do
  it. Even if it is on a different team. Programming is a team sport. Helping other succeed will encourage others to
  help you succeed down the road.

## Invest in iteration speed
  - The faster we can identify risks and rewards the more we can learn about what choices to make. For example
  when choosing a new technology to use on a project or when deciding what features to build for our customers. By
  completing small tasks that test our hypothesises quickly we can identify risks and rewards of various choices before
  making large time investments into bringing those choices to completion.

  - Invest in tools that allow us to evaluate small experiments quickly
    - Parallize testing
    - Monitor servers with dashboards and alerts
    - Quick deployment
      - Create easy ways to roll back changes
      - Use continuous deployment
      - Put large features behind beta flags

## Invest in time saving tools
  - If you have to do something manually more than twice then write a tool for the third time.

  - Time saving tools:
    - Incremental compilation
    - Automatic reload
    - Fast test running
    - Easy deployment tools

  - Start small find an area where a tool could save time, build it and demonstrate its value. This way you'll earn
  credibility with the rest of the team to explore more ambitious projects.

## Shorten your debugging and validation loop
 - "Effective engineers have an obsessive ability to create tight feedback loops for what they're testing" - Mike
 Krieger co-found and CTO of Instagram

 - It's easy to get complacent and not expend the mental cycles on devising a shorter compilation/testing loop. Don't
 fall into this trap. The extra investment in setting up a minimal debugging workflow can help you fix an annoying bug
 sooner with less headache.

  - Be mindful of which of your common, everyday actions slow you down. If your in the middle of a project and think of
    somethig you could do to speed up your process, take note of it and come back to it later when you have empty time
    available between tasks and meetings.

 - Examples of tasks you should be able to automate or perform quickly:
    - Reloading a webpage
    - Testing out the behavior of an expression
    - Searching documentation
    - Jumping to a function definition
    - Reformatting code
    - Finding the callers of a function
    - Arranging desktop windows
    - Navigating in a file

  - Learn these tools well:
    - Your editor/IDE
      - Prefer the keyboard over the mouse for improved speed allowing easier flow of ideas from your mind to the
        screen
    - UNIX Shell commands like grep, sort, uniq, wc, awk, sed, xargs, find
    - REPL
    - Testing tools
      - Use testing tools that run a subset of tests affected by your code. Even better integrate tests and linting
      with your text editor.
      - The faster you can run your tests the more you'll use tests a normal part of your development and the more time
      you'll save by catching errors early

## Don't ignore non-engineering bottlenecks
  - In situations where are you depending on other people before your project can advance make sure those people know
  the items you have to do that depend on them getting something done first. This can be done using tools like a Gantt
  chart or Kanban board, or just by having regular standups to share everyones status. Projects often fail from
  under-communicating not over-communicating.

  - Don't wait until after investing huge amounts have passed of time before seeking approval. Build small prototypes
    or mocks and collect feedback early. This goes back to eliminating risk early by breaking a project up into small
    tasks that can be prioritized by their impact/risk. Additionally work on  building trust with decision makers so
    that in the future you won't have to wait for their approval as often.

  - Use Donald Knuth's mantra "premature optimization is the root of all evil" to decide which bottlenecks are worth
  fixing. There's a fine balance between over communicating for so people know about bottlenecks and having meetings
  just for the sake of having meetings. Collect feedback from project stakeholders about how things are going and be
  flexible, don't get stuck in one project-management dogma.

