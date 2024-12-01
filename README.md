# Odin Project - Etch-a-Sketch

## Project Overview

This project is part of the Odin Project course, a challenge to create a interactive etch-a-sketch application. It consists of a 16 x 16 grid where each square changes to a randomly generated background colour as the mouse hovers over it. Users can adjust the grid dimensions to a maximum of 100 x 100. The container's overall dimensions remain consistent, regardless of the number of cells within it.

### Features
* Interactive drawing on a customisable grid.
* Adjustable grid size for either detailed or simplified artwork.
* Dynamic background colour changes upon mouse hover.

## Learnings

This project primarily focused on enhancing my JavaScript skills. While I had a good understanding of the key concepts involved, this challenge provided an opportunity to refine and experiment with them in a practical context. A significant challenge was maintaining perfectly square grid cells when the user adjusted grid dimensions. This was resolved using a JavaScript function that dynamically calculated the size of each cell to maintain uniformity.

### Key Concepts and Techniques
* Randomised colour generation function.
* JavaScript DOM manipulation for dynamically creating and appending elements.
* Utilising event listeners such as `mouseover`, `click`, and `load` to enhance user interactivity.
* Efficient use of CSS for layout consistency and responsiveness.

## Demo

[View the Demo](#)

## Technologies Used

* **HTML**
* **CSS**
* **JavaScript**

## How to Use

1. Open the application in your web browser.
2. By default, the grid is set to 16 x 16.
3. Adjust the grid dimensions using the reset button to create a smaller or larger canvas / grid.
4. Draw by moving your mouse over the grid, simulating a paintbrush effect.
5. Use the reset button to clear the canvas and start a new drawing.

## Screenshots

_(Add screenshots showcasing the application in use)_

## Future Enhancements

### Potential Improvements
* Add a colour selector to allow users to choose specific colours instead of relying on randomised colours.
* Implement additional drawing tools, such as pre-set shapes or patterns, to expand creative possibilities.
* Introduce an eraser tool for more precise corrections.
* Add a save feature so users can export their creations as an image file.
* Improve the user interface with a more modern design and responsive layout.