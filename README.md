# image-callouts
A simple gulp app that lets you easily add callouts to your wiki images.

## Installation
1. `git clone && cd`
1. `npm install`
2. `gulp`

## Usage

Two types of callouts are supported and can be added inline in your Markdown (.md) files:
 * Numbers: \[//\]\: # ({"file": "\<filename.png\>", "x": "xPos", "y": "yPos", "text": "Number (1-9)"}) 
 * Image Title: \[//\]\: # ({"file": "\<filename.png\>", "text": "\<Image Title\>"})

### Example
The following lines produce the image shown below:
* \[//\]\: # ({"file": "twg_example.png", "x": "100", "y": "100", "text": "1"})
* \[//\]\: # ({"file": "twg_example.png", "text": "Figure 1 - TWG"})

![](http://img/twg_example.png)
