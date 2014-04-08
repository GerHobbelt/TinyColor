# TinyTinyColor

## JavaScript color parsing

Fast, small color manipulation and conversion for JavaScript.  TinyTinyColor is allows many forms of input, while providing color conversions and other color utility functions.  It has no dependancies.

[![Build Status](https://travis-ci.org/autopulated/TinyTinyColor.png?branch=master)](https://travis-ci.org/autopulated/TinyTinyColor)

## Supported Color Types

### Hex, 8-digit (ARGB) Hex

    tinytinycolor("#000");
    tinytinycolor("000");
    tinytinycolor("#f0f0f6");
    tinytinycolor("f0f0f6");
    tinytinycolor("#88f0f0f6");
    tinytinycolor("88f0f0f6");

### RGB, RGBA

    tinytinycolor("rgb (255, 0, 0)");
    tinytinycolor("rgb 255 0 0");
    tinytinycolor("rgba (255, 0, 0, .5)");
    tinytinycolor({ r: 255, g: 0, b: 0 });
    tinytinycolor.fromRatio({ r: 1, g: 0, b: 0 });
    tinytinycolor.fromRatio({ r: .5, g: .5, b: .5 });

### HSL, HSLA

    tinytinycolor("hsl(0, 100%, 50%)");
    tinytinycolor("hsla(0, 100%, 50%, .5)");
    tinytinycolor("hsl(0, 100%, 50%)");
    tinytinycolor("hsl 0 1.0 0.5");
    tinytinycolor({ h: 0, s: 1, l: .5 });

### HSV, HSVA

    tinytinycolor("hsv(0, 100%, 100%)");
    tinytinycolor("hsva(0, 100%, 100%, .5)");
    tinytinycolor("hsv (0 100% 100%)");
    tinytinycolor("hsv 0 1 1");
    tinytinycolor({ h: 0, s: 100, v: 100 });

## Using in a browser

    <script type='text/javascript' src='tinytinycolor.js'></script>
    <script type='text/javascript'>
    var t = tinytinycolor("#ff0000");

    t.toHex() // "ff0000"
    t.toHexString() // "#ff0000"
    t.toHex8() // "ffff0000"
    t.toHex8String() // "#ffff0000"
    t.toRgb() // {"r":255,"g":0,"b":0} or {"r":255,"g":0,"b":0,"a":0.5}
    t.toRgbString() // "rgb(255, 0, 0)" or "rgba(255, 0, 0, 0.5)"
    t.toPercentageRgb() // {"r":100,"g":0,"b":0} or {"r":100,"g":0,"b":0,"a":0.5}
    t.toPercentageRgbString() // "rgb(100%, 0%, 0%)" or "rgba(100%, 0%, 0%, 0.5)"
    t.toHsv() // {"h":0,"s":1,"v":1}
    t.toHsvString() // "hsv(0, 100%, 100%)"
    t.toHsl() // {"h":0,"s":1,"l":0.5}
    t.toHslString() // "hsl(0, 100%, 50%)"
    t.toName() // "red"
    t.toString(/* format */) // "red"
    t.toFilter()
    </script>

## Using in node

`tinytinycolor` may also be included as a [node](http://nodejs.org/) module like so:

```
npm install tinytinycolor
```

Then it can be used:

```js
var tinytinycolor = require("./tinytinycolor");
```

### Accepted String Input

The string parsing is very permissive.  It is meant to make typing a color as input as easy as possible.  All commas, percentages, parenthesis are optional, and most input allow either 0-1, 0%-100%, or 0-n (where n is either 100, 255, or 360 depending on the value).

HSL and HSV both require either 0%-100% or 0-1.

RGB input requires either 0-255 or 0%-100%.

If you call `tinycolor.fromRatio`, RGB input can also accept 0-1
Here are some examples of string input:

```
#fff
fff
#ffffff
ffffff
#ffffffff
ffffffff
rgb(255, 0, 0)
rgb 255 0 0
hsl(0, 100, 50)
hsl 0 100 50
hsv(0, 100%, 100%)
hsv(0, 100, 100)
hsv 0 100 100
```

### Accepted Object Input

If you are calling this from code, you may want to use object input.  Here are examples of the different types of accepted object inputs:

```js
{ r: 255, g: 0, b: 0 }
{ r: 255, g: 0, b: 0, a: .5 }
{ h: 0, s: 100, l: 50 }
{ h: 0, s: 100, v: 100 }
// etc...
```

## Color Utilities

    tinycolor.equals(color1, color2)

### Color Modification

Modification functions may take an `amount` variable from 0 - 100, indicating how much the effect should be applied.

    tinycolor.lighten(color, amount = 10)
    tinycolor.darken(color, amount = 10)
    tinycolor.desaturate(color, amount = 10)
    tinycolor.saturate(color, amount = 10)
    tinycolor.greyscale(color)

### Color Combinations

Combination functions return an Array of TinyTinyColor objects.

    tinycolor.analogous(color, results = 6, slices = 30)
    tinycolor.complement(color)
    tinycolor.monochromatic(color, results = 6)
    tinycolor.splitcomplements(color)
    tinycolor.triad(color)
    tinycolor.tetrad(color)

