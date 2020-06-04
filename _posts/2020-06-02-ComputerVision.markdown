---
layout: post
title: "Computer Vision"
date: 2020-06-01 13:32:20 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: Main1_cv.png   
---

Here are a Few projects which use Open CV in python : 

## Ball Detection

This project uses the following approach to detect the ball :
* Convert to HSV image.
* Generate a Mask to separate the given color.
* The mask is then processed with Contour functions to Detect the Ball. 

__ process pic____

As it is visible in the above picture, The first step is to apply a Gaussian blur of kernel 9 on the image. After this, the blurred image is converted to HSV image. Now we create a mask to separate the red colour in the image. A colour picker code is used to determine the colour range of the ball in a given sample image. This range is later used in *inRange* function to create the mask.

The obtained image still has some noise after applying the mask. To eradicate this error, we first erode the image and then later dilate the image. This results in a well-defined mask for the ball. The contour on this image is detected and a circle is inscribed on the detected contour.

In this way, ball detection is carried out only with the help of Open CV.

## Document Scanner


['Video'][drive_link]

[drive_link] : https://drive.google.com/drive/folders/1mxxNVnvOsJUbSpevk44NEUiBcf3UB8PM 
