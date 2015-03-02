# image-callouts
A simple gulp app that lets you easily add callouts to your wiki images.

\[\/\/\]\: # ({"file": "<filename.png>", "x": "xPos", "y": "yPos", "text": "Number (1-9)"})
\[\/\/\]\: # ({"file": "<filename.png>", "text": "<Image Title>"})

* filename is the full name of the file relative to ./img/
* If text is a number, it is placed at the given x/y POS (top left is 0,0)
* If text is not a number, it is centered at the bottom of the image

EXAMPLE
\[\/\/\]: # ({"file": "creative-artists-show.png", "x": "100", "y": "100", "text": "1"})
\[\/\/\]: # ({"file": "creative-artists-show.png", "text": "Figure 1 - User Flow"})

1. `npm install`
