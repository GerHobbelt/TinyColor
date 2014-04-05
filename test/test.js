
test("TinyTinyColor initialization", function() {
  ok (typeof tinytinycolor != "undefined", "tinytinycolor is initialized on the page");
  ok (typeof tinytinycolor("#ff0000") == "object", "tinytinycolor is able to be instantiated.");
  var r = tinytinycolor("#ff0000");
  ok (tinytinycolor(r) === r, "when given a tinytinycolor instance, tinytinycolor() returns it.");
  ok (new tinytinycolor(r) === r, "when given a tinytinycolor instance, new tinytinycolor() returns it.");
  equal (tinytinycolor("rgb(255,0,0)", { format: "hex" }).toHexString(), "#ff0000", "tinytinycolor options are being parsed");
  equal (tinytinycolor.fromRatio({r: 1, g: 0, b: 0 }, { format: "hex" }).toHexString(), "#ff0000", "tinytinycolor options are being parsed");
});

// Taken from convertWikipediaColors.html
var conversions = [
  {"hex":"#FFFFFF","hex8":"#FFFFFFFF","rgb":{"r":"100.0%","g":"100.0%","b":"100.0%"},"hsv":{"h":"0","s":"0.000","v":"1.000"},"hsl":{"h":"0","s":"0.000","l":"1.000"}},
  {"hex":"#808080","hex8":"#FF808080","rgb":{"r":"050.0%","g":"050.0%","b":"050.0%"},"hsv":{"h":"0","s":"0.000","v":"0.500"},"hsl":{"h":"0","s":"0.000","l":"0.500"}},
  {"hex":"#000000","hex8":"#FF000000","rgb":{"r":"000.0%","g":"000.0%","b":"000.0%"},"hsv":{"h":"0","s":"0.000","v":"0.000"},"hsl":{"h":"0","s":"0.000","l":"0.000"}},
  {"hex":"#FF0000","hex8":"#FFFF0000","rgb":{"r":"100.0%","g":"000.0%","b":"000.0%"},"hsv":{"h":"0.0","s":"1.000","v":"1.000"},"hsl":{"h":"0.0","s":"1.000","l":"0.500"}},
  {"hex":"#BFBF00","hex8":"#FFBFBF00","rgb":{"r":"075.0%","g":"075.0%","b":"000.0%"},"hsv":{"h":"60.0","s":"1.000","v":"0.750"},"hsl":{"h":"60.0","s":"1.000","l":"0.375"}},
  {"hex":"#008000","hex8":"#FF008000","rgb":{"r":"000.0%","g":"050.0%","b":"000.0%"},"hsv":{"h":"120.0","s":"1.000","v":"0.500"},"hsl":{"h":"120.0","s":"1.000","l":"0.250"}},
  {"hex":"#80FFFF","hex8":"#FF80FFFF","rgb":{"r":"050.0%","g":"100.0%","b":"100.0%"},"hsv":{"h":"180.0","s":"0.500","v":"1.000"},"hsl":{"h":"180.0","s":"1.000","l":"0.750"}},
  {"hex":"#8080FF","hex8":"#FF8080FF","rgb":{"r":"050.0%","g":"050.0%","b":"100.0%"},"hsv":{"h":"240.0","s":"0.500","v":"1.000"},"hsl":{"h":"240.0","s":"1.000","l":"0.750"}},
  {"hex":"#BF40BF","hex8":"#FFBF40BF","rgb":{"r":"075.0%","g":"025.0%","b":"075.0%"},"hsv":{"h":"300.0","s":"0.667","v":"0.750"},"hsl":{"h":"300.0","s":"0.500","l":"0.500"}},
  {"hex":"#A0A424","hex8":"#FFA0A424","rgb":{"r":"062.8%","g":"064.3%","b":"014.2%"},"hsv":{"h":"61.8","s":"0.779","v":"0.643"},"hsl":{"h":"61.8","s":"0.638","l":"0.393"}},
  {"hex":"#1EAC41","hex8":"#FF1EAC41","rgb":{"r":"011.6%","g":"067.5%","b":"025.5%"},"hsv":{"h":"134.9","s":"0.828","v":"0.675"},"hsl":{"h":"134.9","s":"0.707","l":"0.396"}},
  {"hex":"#B430E5","hex8":"#FFB430E5","rgb":{"r":"070.4%","g":"018.7%","b":"089.7%"},"hsv":{"h":"283.7","s":"0.792","v":"0.897"},"hsl":{"h":"283.7","s":"0.775","l":"0.542"}},
  {"hex":"#FEF888","hex8":"#FFFEF888","rgb":{"r":"099.8%","g":"097.4%","b":"053.2%"},"hsv":{"h":"56.9","s":"0.467","v":"0.998"},"hsl":{"h":"56.9","s":"0.991","l":"0.765"}},
  {"hex":"#19CB97","hex8":"#FF19CB97","rgb":{"r":"009.9%","g":"079.5%","b":"059.1%"},"hsv":{"h":"162.4","s":"0.875","v":"0.795"},"hsl":{"h":"162.4","s":"0.779","l":"0.447"}},
  {"hex":"#362698","hex8":"#FF362698","rgb":{"r":"021.1%","g":"014.9%","b":"059.7%"},"hsv":{"h":"248.3","s":"0.750","v":"0.597"},"hsl":{"h":"248.3","s":"0.601","l":"0.373"}},
  {"hex":"#7E7EB8","hex8":"#FF7E7EB8","rgb":{"r":"049.5%","g":"049.3%","b":"072.1%"},"hsv":{"h":"240.5","s":"0.316","v":"0.721"},"hsl":{"h":"240.5","s":"0.290","l":"0.607"}}
];


module("Color translations");

test("Color Equality", function() {
  for (var i = 0; i < conversions.length; i++) {
    var c =  conversions[i];
    var tiny =  tinytinycolor(c.hex);

    ok (true,
      "Testing " + c.hex + ": " + tiny.toRgbString() + " " + tiny.toHsvString() + " " + tiny.toHslString() + " " + tiny.toHexString() +
      "Original: " + JSON.stringify(c.rgb) + " " + JSON.stringify(c.hsv) + " " + JSON.stringify(c.hsl)
    );
    ok (tinytinycolor.equals(c.rgb, c.hex), "RGB equals hex " + c.hex);
    ok (tinytinycolor.equals(c.rgb, c.hex8), "RGB equals hex " + c.hex);
    ok (tinytinycolor.equals(c.rgb, c.hsl), "RGB equals HSL " + c.hex);
    ok (tinytinycolor.equals(c.rgb, c.hsv), "RGB equals HSV " + c.hex);
    ok (tinytinycolor.equals(c.rgb, c.rgb), "RGB equals RGB " + c.hex);

    ok (tinytinycolor.equals(c.hex, c.hex), "hex equals hex " + c.hex);
    ok (tinytinycolor.equals(c.hex, c.hex8), "hex equals hex8 " + c.hex);
    ok (tinytinycolor.equals(c.hex, c.hsl), "hex equals HSL " + c.hex);
    ok (tinytinycolor.equals(c.hex, c.hsv), "hex equals HSV " + c.hex);

    ok (tinytinycolor.equals(c.hsl, c.hsv), "HSL equals HSV " + c.hex);

  }
});

module("Ratio Parsing");
test("With Ratio", function() {
  equal (tinytinycolor.fromRatio({r: 1, g: 1, b: 1}).toHexString(), "#ffffff", "white");
  equal (tinytinycolor.fromRatio({r: 1, g: 0, b: 0, a: .5 }).toRgbString(), "rgba(255, 0, 0, 0.5)", "alpha works when ratio is parsed");
  equal (tinytinycolor.fromRatio({r: 1, g: 0, b: 0, a: 1 }).toRgbString(), "rgb(255, 0, 0)", "alpha = 1 works when ratio is parsed");
  equal (tinytinycolor.fromRatio({r: 1, g: 0, b: 0, a: 10 }).toRgbString(), "rgb(255, 0, 0)", "alpha > 1 works when ratio is parsed");
  equal (tinytinycolor.fromRatio({r: 1, g: 0, b: 0, a: -1 }).toRgbString(), "rgb(255, 0, 0)", "alpha < 1 works when ratio is parsed");
});

test("Without Ratio", function() {
  equal (tinytinycolor({r: 1, g: 1, b: 1}).toHexString(), "#010101", "010101");
  equal (tinytinycolor({r: .1, g: .1, b: .1}).toHexString(), "#000000", "000000");
  equal (tinytinycolor("rgb .1 .1 .1").toHexString(), "#000000", "000000");

});

module("String Parsing");

test("RGB Text Parsing", function() {

  equal (tinytinycolor("rgb 255 0 0").toHexString(), "#ff0000", "spaced input");
  equal (tinytinycolor("rgb(255, 0, 0)").toHexString(), "#ff0000", "parenthesized input");
  equal (tinytinycolor("rgb (255, 0, 0)").toHexString(), "#ff0000", "parenthesized spaced input");
  equal (tinytinycolor({ r: 255, g: 0, b: 0 }).toHexString(), "#ff0000", "object input");
  deepEqual (tinytinycolor({ r: 255, g: 0, b: 0 }).toRgb(), { r: 255, g: 0, b: 0, a: 1 }, "object input and compare");


  ok (tinytinycolor.equals({r:200, g: 100, b: 0 }, "rgb(200, 100, 0)"));
  ok (tinytinycolor.equals({r:200, g: 100, b: 0 }, "rgb 200 100 0"));
  ok (tinytinycolor.equals({r:200, g: 100, b: 0 }, "rgb 200 100 0"));
  ok (tinytinycolor.equals({r:200, g: 100, b: 0, a: .4 }, "rgba 200 100 0 .4"));
  ok (!tinytinycolor.equals({r:199, g: 100, b: 0 }, "rgba 200 100 0 1"));

  ok (!tinytinycolor.equals({r:199, g: 100, b: 0 }, "rgb(200, 100, 0)"));
  ok (!tinytinycolor.equals({r:199, g: 100, b: 0 }, "rgb 200 100 0"));
  ok (!tinytinycolor.equals({r:199, g: 100, b: 0 }, "rgb 200 100 0"));


  ok (tinytinycolor.equals(tinytinycolor({r:200, g: 100, b: 0 }), "rgb(200, 100, 0)"));
  ok (tinytinycolor.equals(tinytinycolor({r:200, g: 100, b: 0 }), "rgb 200 100 0"));
  ok (tinytinycolor.equals(tinytinycolor({r:200, g: 100, b: 0 }), "rgb 200 100 0"));

});

test("Percentage RGB Text Parsing", function() {

  equal (tinytinycolor("rgb 100% 0% 0%").toHexString(), "#ff0000", "spaced input");
  equal (tinytinycolor("rgb(100%, 0%, 0%)").toHexString(), "#ff0000", "parenthesized input");
  equal (tinytinycolor("rgb (100%, 0%, 0%)").toHexString(), "#ff0000", "parenthesized spaced input");
  equal (tinytinycolor({ r: "100%", g: "0%", b: "0%" }).toHexString(), "#ff0000", "object input");
  deepEqual (tinytinycolor({ r: "100%", g: "0%", b: "0%" }).toRgb(), { r: 255, g: 0, b: 0, a: 1 }, "object input and compare");


  ok (tinytinycolor.equals({r:"90%", g: "45%", b: "0%" }, "rgb(90%, 45%, 0%)"));
  ok (tinytinycolor.equals({r:"90%", g: "45%", b: "0%" }, "rgb 90% 45% 0%"));
  ok (tinytinycolor.equals({r:"90%", g: "45%", b: "0%" }, "rgb 90% 45% 0%"));
  ok (tinytinycolor.equals({r:"90%", g: "45%", b: "0%", a: .4 }, "rgba 90% 45% 0% .4"));
  ok (!tinytinycolor.equals({r:"89%", g: "45%", b: "0%" }, "rgba 90% 45% 0% 1"));

  ok (!tinytinycolor.equals({r:"89%", g: "45%", b: "0%" }, "rgb(90%, 45%, 0%)"));
  ok (!tinytinycolor.equals({r:"89%", g: "45%", b: "0%" }, "rgb 90% 45% 0%"));
  ok (!tinytinycolor.equals({r:"89%", g: "45%", b: "0%" }, "rgb 90% 45% 0%"));


  ok (tinytinycolor.equals(tinytinycolor({r:"90%", g: "45%", b: "0%" }), "rgb(90%, 45%, 0%)"));
  ok (tinytinycolor.equals(tinytinycolor({r:"90%", g: "45%", b: "0%" }), "rgb 90% 45% 0%"));
  ok (tinytinycolor.equals(tinytinycolor({r:"90%", g: "45%", b: "0%" }), "rgb 90% 45% 0%"));

});

test("HSL parsing", function() {
  equal (tinytinycolor({ h: 251, s: 100, l: .38 }).toHexString(), "#2400c2", "to hex");
  equal (tinytinycolor({ h: 251, s: 100, l: .38 }).toRgbString(), "rgb(36, 0, 194)", "to rgb");
  equal (tinytinycolor({ h: 251, s: 100, l: .38 }).toHslString(), "hsl(251, 100%, 38%)", "to hsl");
  equal (tinytinycolor("hsl(251, 100, 38)").toHexString(), "#2400c2", "to hex");
  equal (tinytinycolor("hsl(251, 100%, 38%)").toRgbString(), "rgb(36, 0, 194)", "to rgb");
  equal (tinytinycolor("hsl(251, 100%, 38%)").toHslString(), "hsl(251, 100%, 38%)", "to hsl");
  equal (tinytinycolor("hsl 100 20 10").toHslString(), "hsl(100, 20%, 10%)", "problematic hsl");
});


test("Hex Parsing", function() {

  equal (tinytinycolor("rgb 255 0 0").toHexString(), "#ff0000");
  equal (tinytinycolor("rgb 255 0 0").toHexString(true), "#f00");
  equal (tinytinycolor("rgba 255 0 0 0.5").toHex8String(), "#80ff0000");


  equal (tinytinycolor("rgb 255 0 0").toHex(), "ff0000");
  equal (tinytinycolor("rgb 255 0 0").toHex(true), "f00");
  equal (tinytinycolor("rgba 255 0 0 0.5").toHex8(), "80ff0000");

});

test("HSV Parsing", function() {

  equal (tinytinycolor("hsv 251.1 0.887 .918").toHsvString(), "hsv(251, 89%, 92%)");
  equal (tinytinycolor("hsv 251.1 0.887 0.918").toHsvString(), "hsv(251, 89%, 92%)");

});

test("Invalid Parsing", function() {

  equal (tinytinycolor("this is not a color").toHexString(), "#000000");

});

module("Alpha handling");
test("Invalid alpha should normalize to 1", function() {
  equal (tinytinycolor({r:255,g:20,b:10,a: -1}).toRgbString(), "rgb(255, 20, 10)", "Negative value");
  equal (tinytinycolor({r:255,g:20,b:10,a: -0}).toRgbString(), "rgba(255, 20, 10, 0)", "Negative 0");
  equal (tinytinycolor({r:255,g:20,b:10,a: 0}).toRgbString(), "rgba(255, 20, 10, 0)", "0");
  equal (tinytinycolor({r:255,g:20,b:10,a: .5}).toRgbString(), "rgba(255, 20, 10, 0.5)", ".5");
  equal (tinytinycolor({r:255,g:20,b:10,a: 1}).toRgbString(), "rgb(255, 20, 10)", "1");
  equal (tinytinycolor({r:255,g:20,b:10,a: 100}).toRgbString(), "rgb(255, 20, 10)", "Greater than 1");
  equal (tinytinycolor({r:255,g:20,b:10,a: "asdfasd"}).toRgbString(), "rgb(255, 20, 10)",  "Non Numeric");

  equal (tinytinycolor("#fff").toRgbString(), "rgb(255, 255, 255)",  "Hex should be 1");
  equal (tinytinycolor("rgba 255 0 0 100").toRgbString(), "rgb(255, 0, 0)",  "Greater than 1 in string parsing");
});

test("setting alpha", function() {

  var hexSetter = tinytinycolor("rgba(255, 0, 0, 1)");
  equal (hexSetter.getAlpha(), 1, "Alpha should start as 1");
  hexSetter.setAlpha(.9);
  equal (hexSetter.getAlpha(), .9, "setAlpha should change alpha value");
  hexSetter.setAlpha(.5);
  equal (hexSetter.getAlpha(), .5, "setAlpha should change alpha value");
  hexSetter.setAlpha(0);
  equal (hexSetter.getAlpha(), 0, "setAlpha should change alpha value");
  hexSetter.setAlpha(-1);
  equal (hexSetter.getAlpha(), 1, "setAlpha with value < 0 should be bound to 1");
  hexSetter.setAlpha(2);
  equal (hexSetter.getAlpha(), 1, "setAlpha with value > 1 should be bound to 1");
  hexSetter.setAlpha();
  equal (hexSetter.getAlpha(), 1, "setAlpha with invalid value should be bound to 1");
  hexSetter.setAlpha(null);
  equal (hexSetter.getAlpha(), 1, "setAlpha with invalid value should be bound to 1");
  hexSetter.setAlpha("test");
  equal (hexSetter.getAlpha(), 1, "setAlpha with invalid value should be bound to 1");

});

module("Initialization from tinytinycolor output");
test("HSL Object", function() {
    for (var i = 0; i < conversions.length; i++) {
      var c =  conversions[i];
      var tiny =  tinytinycolor(c.hex);
      equal (tiny.toHexString(), tinytinycolor(tiny.toHsl()).toHexString(), "HSL Object");
    }
});

test("HSL String", function() {
    for (var i = 0; i < conversions.length; i++) {
      var c =  conversions[i];
      var tiny =  tinytinycolor(c.hex);
      var input = tiny.toRgb();
      var output = tinytinycolor(tiny.toHslString()).toRgb();
      var maxDiff = 2;

      equal (Math.abs(input.r - output.r) <= maxDiff, true, "toHslString red value difference <= " + maxDiff);
      equal (Math.abs(input.g - output.g) <= maxDiff, true, "toHslString green value difference <= " + maxDiff);
      equal (Math.abs(input.b - output.b) <= maxDiff, true, "toHslString blue value difference <= " + maxDiff);
    }
});
test("HSV String", function() {
    for (var i = 0; i < conversions.length; i++) {
      var c =  conversions[i];
      var tiny =  tinytinycolor(c.hex);
      var input = tiny.toRgb();
      var output = tinytinycolor(tiny.toHsvString()).toRgb();
      var maxDiff = 2;

      equal (Math.abs(input.r - output.r) <= maxDiff, true, "toHsvString red value difference <= " + maxDiff);
      equal (Math.abs(input.g - output.g) <= maxDiff, true, "toHsvString green value difference <= " + maxDiff);
      equal (Math.abs(input.b - output.b) <= maxDiff, true, "toHsvString blue value difference <= " + maxDiff);
    }
});

test("HSV Object", function() {
    for (var i = 0; i < conversions.length; i++) {
      var c =  conversions[i];
      var tiny =  tinytinycolor(c.hex);
      equal (tiny.toHexString(), tinytinycolor(tiny.toHsv()).toHexString(), "HSV Object");
    }
});
test("RGB Object", function() {
    for (var i = 0; i < conversions.length; i++) {
      var c =  conversions[i];
      var tiny =  tinytinycolor(c.hex);
      equal (tiny.toHexString(), tinytinycolor(tiny.toRgb()).toHexString(), "RGB Object");
    }
});
test("RGB String", function() {
    for (var i = 0; i < conversions.length; i++) {
      var c =  conversions[i];
      var tiny =  tinytinycolor(c.hex);
      equal (tiny.toHexString(), tinytinycolor(tiny.toRgbString()).toHexString(), "RGB String");
    }
});
test("Object", function() {
    for (var i = 0; i < conversions.length; i++) {
      var c =  conversions[i];
      var tiny =  tinytinycolor(c.hex);
      equal (tiny.toHexString(), tinytinycolor(tiny).toHexString(), "Object");
    }
});


module("Utilities");

test("Color equality", function() {
  ok (tinytinycolor.equals("#ff0000", "#ff0000"), "Same hex");
  ok (tinytinycolor.equals("#ff0000", "rgb(255, 0, 0)"), "Same alphas");
  ok (!tinytinycolor.equals("#ff0000", "rgba(255, 0, 0, .1)"), "Different alphas");
  ok (tinytinycolor.equals("ff0000", "#ff0000"), "Same hex");
  ok (tinytinycolor.equals("#f00", "#ff0000"), "Same hex");
  ok (tinytinycolor.equals("f00", "#ff0000"), "Same hex");
  equal (tinytinycolor("010101").toHexString(), "#010101");
  ok (!tinytinycolor.equals("#ff0000", "#00ff00"), "Different hex");
  ok (tinytinycolor.equals("#ff8000", "rgb(100%, 50%, 0%)"), "Percentage bounds checking");
});

test("Filters", function () {

  equal (tinytinycolor("#FF0000").toFilter(), "progid:DXImageTransform.Microsoft.gradient(startColorstr=#ffff0000,endColorstr=#ffff0000)");
  equal (tinytinycolor("#FF0000").toFilter("#0000FF"), "progid:DXImageTransform.Microsoft.gradient(startColorstr=#ffff0000,endColorstr=#ff0000ff)");

  equal (tinytinycolor("rgba(0,0,0,0)").toFilter(), "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#00000000)");
  equal (tinytinycolor("rgba(0,0,0,0)").toFilter("#ff0000"), "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#ffff0000)");

  equal (tinytinycolor("#ddf0f0f0").toFilter(), "progid:DXImageTransform.Microsoft.gradient(startColorstr=#ddf0f0f0,endColorstr=#ddf0f0f0)");
  equal (tinytinycolor("rgba(0, 0, 255, .5").toFilter(), "progid:DXImageTransform.Microsoft.gradient(startColorstr=#800000ff,endColorstr=#800000ff)");
});

/* Originally generated with:
var results = [];
for (var i = 0; i <= 100; i++) results.push( tinytinycolor.saturate("#FF0000", i).toHex() )
console.log(JSON.stringify(results))
*/
var DESATURATIONS = ["ff0000","fe0101","fc0303","fb0404","fa0505","f90606","f70808","f60909","f50a0a","f40b0b","f20d0d","f10e0e","f00f0f","ee1111","ed1212","ec1313","eb1414","e91616","e81717","e71818","e61919","e41b1b","e31c1c","e21d1d","e01f1f","df2020","de2121","dd2222","db2424","da2525","d92626","d72828","d62929","d52a2a","d42b2b","d22d2d","d12e2e","d02f2f","cf3030","cd3232","cc3333","cb3434","c93636","c83737","c73838","c63939","c43b3b","c33c3c","c23d3d","c13e3e","bf4040","be4141","bd4242","bb4444","ba4545","b94646","b84747","b64949","b54a4a","b44b4b","b34d4d","b14e4e","b04f4f","af5050","ad5252","ac5353","ab5454","aa5555","a85757","a75858","a65959","a45b5b","a35c5c","a25d5d","a15e5e","9f6060","9e6161","9d6262","9c6363","9a6565","996666","986767","966969","956a6a","946b6b","936c6c","916e6e","906f6f","8f7070","8e7171","8c7373","8b7474","8a7575","887777","877878","867979","857a7a","837c7c","827d7d","817e7e","808080"];
var SATURATIONS = ["ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000","ff0000"];
var LIGHTENS = ["ff0000","ff0505","ff0a0a","ff0f0f","ff1414","ff1a1a","ff1f1f","ff2424","ff2929","ff2e2e","ff3333","ff3838","ff3d3d","ff4242","ff4747","ff4d4d","ff5252","ff5757","ff5c5c","ff6161","ff6666","ff6b6b","ff7070","ff7575","ff7a7a","ff8080","ff8585","ff8a8a","ff8f8f","ff9494","ff9999","ff9e9e","ffa3a3","ffa8a8","ffadad","ffb3b3","ffb8b8","ffbdbd","ffc2c2","ffc7c7","ffcccc","ffd1d1","ffd6d6","ffdbdb","ffe0e0","ffe5e5","ffebeb","fff0f0","fff5f5","fffafa","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff","ffffff"];
var DARKENS = ["ff0000","fa0000","f50000","f00000","eb0000","e60000","e00000","db0000","d60000","d10000","cc0000","c70000","c20000","bd0000","b80000","b30000","ad0000","a80000","a30000","9e0000","990000","940000","8f0000","8a0000","850000","800000","7a0000","750000","700000","6b0000","660000","610000","5c0000","570000","520000","4d0000","470000","420000","3d0000","380000","330000","2e0000","290000","240000","1f0000","190000","140000","0f0000","0a0000","050000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"];

test("Combinations", function () {
  for (var i = 0; i <= 100; i++) {
    equal (tinytinycolor.desaturate("#FF0000", i).toHex(), DESATURATIONS[i], "Desaturation " + i + " works");
  }
  for (var i = 0; i <= 100; i++) {
    equal (tinytinycolor.saturate("#FF0000", i).toHex(), SATURATIONS[i], "Saturation " + i + " works");
  }
  for (var i = 0; i <= 100; i++) {
    equal (tinytinycolor.lighten("#FF0000", i).toHex(), LIGHTENS[i], "Lighten " + i + " works");
  }
  for (var i = 0; i <= 100; i++) {
    equal (tinytinycolor.darken("#FF0000", i).toHex(), DARKENS[i], "Darken " + i + " works");
  }


  equal (tinytinycolor.greyscale("#FF0000").toHex(), "808080", "Greyscale works")
  equal (tinytinycolor.complement("#FF0000").toHex(), "00ffff", "Complement works");
});


/* Too slow: 1677731 possibilities
asyncTest("Ajax load", function() {

  $.get("allhex.txt", function(d) {
    var hex = d.split('\n');
    for (var i = 0, l = hex.length; i < l; i++) {
      ok (tinytinycolor(hex[i]).toHex(), hex[i]);
    }
    console.log(hex.length);
      start();
  });
});
*/
