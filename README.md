# image-callouts
A simple gulp app that lets you easily add callouts to your wiki images.

## Installation
1. `git clone https://github.com/twg/image-callouts.git && cd image-callouts`
1. `npm install`
2. `gulp`

This code could easily be adapted to work with an existing wiki by modifying the folder locations in the gulpfile.  If you're building a wiki from scratch, you can use this repo as the foundation for it.

## Usage

Two types of callouts are supported and can be added inline in your Markdown (.md) files:
 * Numbers: \[//\]\: # ({"file": "\<filename.png\>", "x": "xPos", "y": "yPos", "text": "Number (1-9)"}) 
 * Image Title: \[//\]\: # ({"file": "\<filename.png\>", "text": "\<Image Title\>"})

Every time you add a callout, you'll need to run `gulp` again to re-generate your images. 
 
### Example
Using this source image:
![](https://github.com/twg/image-callouts/blob/master/source_img/twg_example.png)

The following comments produce the generated image shown below:
* \[//\]\: # ({"file": "twg_example.png", "x": "100", "y": "100", "text": "1"})
* \[//\]\: # ({"file": "twg_example.png", "x": "120", "y": "120", "text": "2"})
* \[//\]\: # ({"file": "twg_example.png", "x": "100", "y": "140", "text": "3"})
* \[//\]\: # ({"file": "twg_example.png", "x": "80", "y": "120", "text": "4"})
* \[//\]\: # ({"file": "twg_example.png", "text": "Figure 1 - TWG Generated Image"})

![](https://github.com/twg/image-callouts/blob/master/img/twg_example.png)
[//]: # ({"file": "twg_example.png", "x": "100", "y": "100", "text": "1"})
[//]: # ({"file": "twg_example.png", "x": "120", "y": "120", "text": "2"})
[//]: # ({"file": "twg_example.png", "x": "100", "y": "140", "text": "3"})
[//]: # ({"file": "twg_example.png", "x": "80", "y": "120", "text": "4"})
[//]: # ({"file": "twg_example.png", "text": "Figure 1 - TWG Generated Image"})

## Copyright

(C) 2015 David Connolly, The Working Group Inc. and other contributors.

Using the [MIT License](http://opensource.org/licenses/MIT) as described in
the [`LICENSE`](LICENSE) file.
