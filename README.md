# Our Love Diary

## Overview

Our Love Diary is a fun single-page application (SPA) that allows users, specifically partners, log their daily feelings, affirmations, and goals along with a randomized 'Would You Rather' question to answer. The application was built with HTML, SCSS, JavaScript, Parcel, and uses `localStorage` for data persistence.

### Version Control

This project uses Git and GitHub for tracking commits and managing project development. Please see the GitHub repository for the full development of the application: https://github.com/lilynhuynh/lhuy0594-tracker

## Features

- **Message Form**: A message form for users to log their name, feeling, affirmation, goal, and answer choice to the generated 'Would You Rather' question. After a message is submitted, the form is reset and a new question and stamp image is generated.
    - **Send Stamp Animation**: For every message a user sends, a send stamp animation occurs to notify that the message has been received, and is available in the message container below.
- **Message Container**: A dynamic grid that displays all messages saved to `localStorage`.
    - **Card Hover**: A swing animation is displayed when a user hovers over any of the cards.
    - **Remove Card**: If a user would like to remove a specific message, a user can hover over the thumbtack icon and it will display a 'Remove Message?' confirmation. If the user wishes to continue, they can click the thumbtack to remove the message and `localStorage` is updated.
    - **Message Preview**: If a user would like to preview their logged message, they can click on the card and the saved message log is displayed as an overlay.

## Setup

> [!IMPORTANT]
> Please install npm, express, parcel, and sass to access the full features of this application.

## Usage

This application can be accessed by cloning the repository from the provided GitHub link above or running `npm run start` in your terminal.

Once the server is running, you are able to log your messages and access them in the message container below.

## Limitations

Ideally, the application would allow for both parties to share a single storage together, but since it uses `localStorage`, the application only allows for tracking of message logs to a specific browser or singular device. Thus, if the user wanted to access their messages on a different browser or device, they would not be able to.

## Development
- [Web App Design Brief](https://drive.google.com/file/d/1KRDJaOgG9gotvGhO32_7Xl4rYT6NVlZH/view?usp=sharing)
- [Figma Board](https://www.figma.com/design/8RlP6Fz3EuWtWGDum0o9zI/A3-DECO2014?node-id=0-1&t=MFnNJjLuBltcH5Xx-1)

## Acknowledgements

### Sources

**Would You Rather Questions:** Sourced from _[Paired Magazine](https://www.paired.com/articles/would-you-rather-questions)_ by Zoe O'Conner
<br><br>

**Postcard Stamps:** Images were sourced from _Unsplash_

| Author | Image Name (+Link) |
| ---| --- |
| Fadi Xd | [Close-up photography of heart shaped fairy lite on brown sand](https://unsplash.com/photos/close-up-photography-of-heart-shaped-fairy-lite-on-brown-sand-I4dR572y7l0) |
| Tyler Nix | [Person forming heart with their hands](https://unsplash.com/photos/person-forming-heart-with-their-hands-sitjgGsVIAs)<br><br>[Selective photo of read and white hearts graffiti](https://unsplash.com/photos/selective-photo-of-red-and-white-hearts-graffiti-HuneWvWYh-Y) |
| Freestocks | [Heart bokeh light](https://unsplash.com/photos/heart-bokeh-light-Y9mWkERHYCU) |
| Christopher Beloch | [Red and white heart balloons](https://unsplash.com/photos/red-and-white-heart-balloons-P2fBIamIbQk) |
| Jamie Street | [Heart shaped pink sparklers photography](https://unsplash.com/photos/heart-shaped-pink-sparklers-photography-hBzrr6m6-pc) |
| Micheile Henderson | [Pink heart shaped paper on white and pink floral textile](https://unsplash.com/photos/pink-heart-shaped-paper-on-white-and-pink-floral-textile-Tle_uYHXRwI) |
| Rinck Content Studio | [Pink and white hearts illustration](https://unsplash.com/photos/pink-and-white-hearts-illustration-O8PjuNKatJ0) |
| Pablo Merchan Montes | [Green cup on saucer](https://unsplash.com/photos/green-cup-on-saucer-_Tw4vCs9C-8) |
<br><br>

**Card Displays:** Images were sources from _Freepik_ and _Pixabay_

| Author | Link |
| --- | --- |
| Rawpixel | [Pastel pink pastel abstract textured background](https://www.freepik.com/free-vector/pastel-pink-pastel-abstract-textured-background_16338138.htm#fromView=search&page=1&position=1&uuid=4b976170-0a36-48a7-8159-4a67f0a456d7) |
| Freepik | [Abstract hand drawn background](https://www.freepik.com/free-vector/abstract-hand-drawn-background_18039141.htm#fromView=image_search_similar&page=1&position=0&uuid=97ea71cc-472d-4b94-945a-142b0f9fbf93)<br><br>[Flat abstract doodle background](https://www.freepik.com/free-vector/flat-abstract-doodle-background_24236173.htm#fromView=image_search_similar&page=1&position=25&uuid=520c5744-746b-4c75-88e5-7a4dead6c286) |
| Hardae | [Pastels Art Wallpaper](https://pixabay.com/illustrations/pastels-art-wallpaper-aesthetic-7118442/)<br><br>[Background Pattern Pastel Colors](https://pixabay.com/illustrations/background-pattern-pastel-colors-7071134/) |
| Bianca Van Dijk | [Forms Art Pattern](https://pixabay.com/illustrations/forms-art-pattern-design-colors-7742947/) |
<br><br>

**JavaScript, HTML, SCSS:** Inspiration and coding resources were sourced from _Stack Overflow_ and _W3Schools_. More specific examples will be linked below:

- [**Buffer Screen**](https://blog.hubspot.com/website/css-loading-animation): I used this source for the buffer load animation.




### AI Usage

This project does not use any AI generated content and most of the inspiration/coding resources were sourced online.