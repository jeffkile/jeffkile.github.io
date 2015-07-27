---
layout: post
title: Streaming you DAW over Google Hangouts using Soundflower and Ladiocast
date: 2015-07-20
categories: music OSX Logic
---

---

Sharing the audio from a DAW like Logic Pro over an internet chat application like Google Hangouts
is extremely useful when collaborating with someone remotely.

Our goal is to be able to start a Google Hangout and have the audio from our DAW and the sound from
our microphone shared simultaneously over the chat.

To accomplish this were going to route the audio from Logic through Soundflower into Ladiocast out
to Google Hangouts.

Setting this up is pretty straight forward but it is easy to make mistakes and
get confused with all different connections.


Note: this guide is for Mac OSX.

# Download Soundflower
Soundflower is a sound routing application that provides virtual audio interfaces. It also contains
some mixing capabilities so you may at first think this is all we need to accomplish
our goal, however, you'll soon discover there is really no way to mix down to a single channel
which is what we need inorder to pipe our audio to Google Hangouts.

Soundflower was created by [Cycling 74](https://cycling74.com/), the same people who made MaxMSP,
but now it's maintained by Rouge Amoeba so go to their website to download it:

[https://rogueamoeba.com/freebies/soundflower/](https://rogueamoeba.com/freebies/soundflower/)

So once you download and install Soundflower you can forget about it for the sake of this project.
We're only interested in using the default virtual audio interfaces it provides out of the box. 


# Setup your Digital Audio Workstation (DAW)

Next we want to setup our DAW to output to Soundflower 2ch. I'm going to use Logic Pro in this
example but any DAW should work.

In Logic chose Audio from the Preferences menu:

![Audio setup under logic pro preferences](https://s3.amazonaws.com/JKPortfolio/img/blog/stream-logic-to-gchat/logic_preferences_menu.png)


Next select Soundflower 2ch as the output device:

![Soundflower 2ch Output device](https://s3.amazonaws.com/JKPortfolio/img/blog/stream-logic-to-gchat/logic_devices.png)

This is telling Logic to output to the virtual audio interface that Soundflower has created instead
of outputing to our speakers or sound card.


# Download Ladiocast

Ladiocast is pretty powerful software that can be used for streaming audio to servers. We however
are only going to use its most basic feature, the mixer. All we want to do is route our Microphone
and Logic to our Speakers and Aux Out.

To do this open Ladiocast and chose your microphone as Input 1 and Soundflower 2ch as Input 2. Then
click the Aux 1 button below Input 1 to route Input 1 to Aux 1 and likewise select Main and Aux 1
from Input 2. Make sure you don't route Input 1 to Main because that will cause feedback if your
microphone is able to pickup the sound coming from your speakers.

Next use the drop downs on the right to set your speakers as the output for Main and select
Soundflower 64ch as the output for Aux 1.

![Ladiocast Mixer](https://s3.amazonaws.com/JKPortfolio/img/blog/stream-logic-to-gchat/ladiocast_mixer.png)


# Setup Google Hangout

Next we need to route Soundflower 64ch (where Ladiocast Aux 1 out is being sent) into the input of
our Google hangout.

To do this simply start a Hangout then click the setting gear at the top of your Hangout screen.

![Hangout Settings Gear](https://s3.amazonaws.com/JKPortfolio/img/blog/stream-logic-to-gchat/hangout_settings_gear.png)

Next just select Soundflower 64ch as the input source.

![Hangout Input Selection](https://s3.amazonaws.com/JKPortfolio/img/blog/stream-logic-to-gchat/hangout_input_selection.png)

# System Preferences

To accomplish our goal you don't need to change anything in System Preferences.

All the other guides I've seen out there that use Soundflower and Ladiocast to share audio require
you to change your sound settings in System Preferences. Part of the reason I wanted to write this
post is because there's really no need to do that so long as the program outputing sound (Logic)
is able to choose where it sends sound to (Soundflower).

There may be some use cases where you want to change the output to Soundflower 2ch so that all your
system sound gets routed to Soundflower 2ch . Or perhaps you want to change the Input to Soundflower
2ch so that everything being sent to Soundflower 2ch is able to be recorded. However, for our
purposes, we don't need to modify System Preferences.


# Conclusion

So with that you should be good to go.

Have fun making music in a way that [The Postal Service could  have only dreamed of](https://en.wikipedia.org/wiki/The_Postal_Service#Formation_.282001-2003.29).
