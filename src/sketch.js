/*two part interactive project visualising a mathematical and scientific concept*/

//planetary facts from https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html

//THE SOLAR SYSTEM

//variables for the orbits of the planets
let angle = 0;
let centre_x = 500; //x xoordinate midpoint of canvas
let centre_y = 500; //y coordinate midpoint of canvas

//orbits - determined by distance from centerpoint, so would also be radius of the orbit
let mer_orbit = 115; //orbit of mercury around centre has a radius of 115
let ven_orbit = 155;
let ear_orbit = 195;
let mar_orbit = 235;
let jup_orbit = 305;
let sat_orbit = 380;
let ura_orbit = 435;
let nep_orbit = 475;

//loading in sound effects
function preload() {
  sound = loadSound(
    "assets/zapsplat_science_fiction_deep_space_spinning_planet_ambience_drone_airy_movement_slow_whooshes_001_70168.mp3"
  );
}

function setup() {
  console.log("Click for part 2, press keys 1-8 for planet names.")
  sound.play();
  createCanvas(1000, 1000);
  angleMode(DEGREES); //changing angle mode to degrees
}

function draw() {
  //this if statement handles the toggle functioning - if the mouse is pressed, it calls the light() function and executes the contents of it; else, it is in dark mode
  if (mouseIsPressed) {
    light();
  } else {
    dark();
  }
  //calling the functions of each individual solar system component
  mercury();
  venus();
  earth();
  mars();
  jupiter();
  saturn();
  uranus();
  neptune();
  angle++; //incrementing the angle of orbit in order to create an animation
  sun();
}

//default theme
function dark() {
  fill(36, 34, 46);
  square(0, 0, 1000);
}

//if mouse is pressed, a different theme occurs
function light() {
  fill(255);
  square(0, 0, 1000);
  for (var x = 0; x < width; x += width / 50) {
    for (var y = 0; y < height; y += height / 50) {
      stroke(240, 240, 240);
      strokeWeight(0.2);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function sun() {
  fill(217, 215, 161);
  circle(500, 500, 150);
}

function mercury() {
  //creating the orbit path so it is more visible
  strokeWeight(0.1);
  noFill();
  stroke(255);
  circle(500, 500, 230);
  //creating the planet
  noStroke();
  fill(97, 57, 67); //planet colour
  //creating the planet
  let a = centre_x + mer_orbit * cos(angle * 1.59);
  let b = centre_y + mer_orbit * sin(angle * 1.59);

//displaying planetary facts on mouse click
  if (mouseIsPressed === true) {
    if (light) {
      stroke(255);
      line(500, 500, a, b);
      text("4,879.4 km", a + 20, b - 20);
      text("3.285 × 10^23 kg", a + 20, b + 20);
      text("5.43 g/cm³", a - 70, b - 20);
      text("0 moons", a - 70, b + 20)

    }
  }
  
  //line from sun to planet
  if (light) {
    stroke(20);
    line(500, 500, a, b);
  }
  
  //drawing planet
  circle(a, b, 10);
  
  //making planet bigger according to gravitational pull on key down, and displaying planet name
  if (keyIsDown) {
    if (key === "1") {
      circle(a, b, 30 + 0.378);
      fill(255);
      textSize(10);
      text("Mercury", a - 18, b - 30, 201);
    }
  }

  //the angle is multiplied by different numbers in order to make them go at speeds proportional to ral life. If earth orbited at a speed of 1, each planet will have a velocity relative to that. In mercury's case, it is 1.59.
}

function venus() {
  //creating the orbit path so it is more visible
  noFill();
  stroke(255);
  circle(500, 500, 310);
  //creating the planet
  noStroke();
  fill(132, 67, 68);
  let c = centre_x + ven_orbit * cos(angle * 1.18);
  let d = centre_y + ven_orbit * sin(angle * 1.18);
  
//displaying planetary facts on mouse click
  if (mouseIsPressed === true) {
    if (light) {
      stroke(255);
      line(500, 500, c, d);
      text("12,104 km across", c + 20, d - 20);
      text("4.867 × 10^24 kg", c + 20, d + 20);
      text("5.24 g/cm³", c - 70, d - 20);
      text("0 moons", c - 70, d + 20)
    }
  }

  //line from sun to planet
  if (light) {
    stroke(20);
    line(500, 500, c, d);
  }
  
  //drawing planet
  circle(c, d, 25);

  //making planet bigger according to gravitational pull on key down, and displaying planet name
  if (keyIsDown) {
    if (key === "2") {
      circle(c, d, 45 + 0.907);
      fill(255);
      text("Venus", c - 15, d - 40, 201);
    }
  }
}

function earth() {
  //creating the orbit path so it is more visible
  noFill();
  stroke(255);
  circle(500, 500, 390);
  //creating the planet
  noStroke();
  fill(46, 72, 97);
  let e = centre_x + ear_orbit * cos(angle);
  let f = centre_y + ear_orbit * sin(angle);

//displaying planetary facts on mouse click
  if (mouseIsPressed === true) {
    if (light) {
      stroke(255);
      line(500, 500, e, f);
      text("12,742 km across", e + 20, f - 20);
      text("5.972 × 10^24 kg", e + 20, f + 20);
      text("5.51 g/cm³", e - 70, f - 20);
      text("1 moon", e - 70, f + 20);

    }
  }

  //line from sun to planet
  if (light) {
    stroke(20);
    line(500, 500, e, f);
  }
  
  //drawing planet
  circle(e, f, 30);

  //making planet bigger according to gravitational pull on key down, and displaying planet name
  if (keyIsDown) {
    if (key === "3") {
      circle(e, f, 50 + 1);
      fill(255);
      text("Earth", e - 15, f - 40, 201);
    }
  }
}

function mars() {
  //creating the orbit path so it is more visible
  noFill();
  stroke(255);
  circle(500, 500, 470);
  //creating the planet
  noStroke();
  fill(132, 67, 68);
  let g = centre_x + mar_orbit * cos(angle * 0.808);
  let h = centre_y + mar_orbit * sin(angle * 0.808);
  
//displaying planetary facts on mouse click
  if (mouseIsPressed === true) {
    if (light) {
      stroke(255);
      line(500, 500, g, h);
      text("6,779 km across", g + 20, h - 20);
      text("6.39 × 10^23 kg", g + 20, h + 20);
      text("3.93 g/cm³", g - 70, h - 20)
      text("2 moons", g - 70, h + 20)

    }
  }

  //line from sun to planet
  if (light) {
    stroke(20);
    line(500, 500, g, h);
  }
  
  //drawing planet
  circle(g, h, 20);

//making planet bigger according to gravitational pull on key down, and displaying planet name
  if (keyIsDown) {
    if (key === "4") {
      circle(g, h, 40 + 0.377);
      fill(255);
      text("Mars", g - 12, h - 40, 201);
    }
  }
}

function jupiter() {
  //creating the orbit path so it is more visible
  noFill();
  stroke(255);
  circle(500, 500, 610);
  //creating the planet
  noStroke();
  fill(204, 187, 152);
  let i = centre_x + jup_orbit * cos(angle * 0.439);
  let j = centre_y + jup_orbit * sin(angle * 0.439);

//displaying planetary facts on mouse click
  if (mouseIsPressed === true) {
    if (light) {
      stroke(255);
      line(500, 500, i, j);
      text("139,820 km across", i + 40, j - 40);
      text("1.898 × 10^27 kg", i + 40, j + 40);
      text("1.33 g/cm³", i - 90, j - 40);
      text("79 moons", i - 90, j + 40)
    }
  }

  //line from sun to planet
  if (light) {
    stroke(20);
    line(500, 500, i, j);
  }
  
  //drawing planet
  circle(i, j, 80);

  //making planet bigger according to gravitational pull on key down, and displaying planet name
  if (keyIsDown) {
    if (key === "5") {
      circle(i, j, 100 + 2.36);
      fill(255);
      text("Jupiter", i - 17, j - 70, 201);
    }
  }
}

function saturn() {
  //creating the orbit path so it is more visible
  noFill();
  stroke(255);
  circle(500, 500, 760);
  //creating the planet
  noStroke();
  fill(176, 145, 125);
  let k = centre_x + sat_orbit * cos(angle * 0.325);
  let l = centre_y + sat_orbit * sin(angle * 0.325);

//displaying planetary facts on mouse click
  if (mouseIsPressed === true) {
    if (light) {
      stroke(255);
      line(500, 500, k, l);
      text("116,460 km across", k + 30, l - 30);
      text("5.683 × 10^26 kg", k + 30, l + 30);
      text("687 kg/m³", k-70, l - 30);
      text ("82 moons", k - 70, l+30);

    }
  }

  //line from sun to planet
  if (light) {
    stroke(20);
    line(500, 500, k, l);
  }
  
 //drawing planet
  circle(k, l, 60);

  //making planet bigger according to gravitational pull on key down, and displaying planet name
  if (keyIsDown) {
    if (key === "6") {
      circle(k, l, 80 + 0.916);
      fill(255);
      text("Saturn", k - 18, l - 60, 201);
    }
  }
}

function uranus() {
  //creating the orbit path so it is more visible
  noFill();
  stroke(255);
  circle(500, 500, 870);
  //creating the planet
  noStroke();
  fill(56, 84, 80);
  let m = centre_x + ura_orbit * cos(angle * 0.228);
  let n = centre_y + ura_orbit * sin(angle * 0.228);
  
  //displaying planetary facts on mouse click
  if (mouseIsPressed === true) {
    if (light) {
      stroke(255);
      line(500, 500, m, n);
      text("50,724 km across", m + 20, n - 20);
      text("8.681 × 10^25 kg", m + 20, n + 20);
      text("1.27 g/cm³", m-70, n - 20)
      text("27 moons", m-70, n+20);


    }
  }
  
  //line form sun to planet
  if (light) {
    stroke(20);
    line(500, 500, m, n);
  }
  
//drawing planet
  circle(m, n, 40);

//making planet bigger according to gravitational pull on key down, and displaying planet name
  if (keyIsDown) {
    if (key === "7") {
      if (dark) {
        circle(m, n, 60 + 0.889);
        fill(255);
        text("Uranus", m - 18, n - 50, 201);
      }
    }
  }
}

function neptune() {
  //creating the orbit path so it is more visible
  noFill();
  stroke(255);
  circle(500, 500, 950);
  
  //creating the planet
  noStroke();
  fill(39, 46, 69);
  let o = centre_x + nep_orbit * cos(angle * 0.182);
  let p = centre_y + nep_orbit * sin(angle * 0.182);
  
  //displaying planetary facts on mouse click
  if (mouseIsPressed === true) {
    if (light) {
      stroke(255);
      line(500, 500, o, p);
      text("49,244 km across", o + 20, p - 20);
      text("1.024 × 10^26 kg", o + 20, p + 20)
      text("1.64 g/cm³", o-70, p - 20);
      text("14 moons", o - 70, p + 20);
    }
  }

  //line from sun to planet
  if (light) {
    stroke(20);
    line(500, 500, o, p);
  }
  
  //drawing planet
  circle(o, p, 30);

  //making planet bigger according to gravitational pull on key down, and displaying planet name
  if (keyIsDown) {
    if (key === "8") {
      circle(o, p, 50 + 1.12);
      fill(255);
      text("Neptune", o - 20, p - 45, 201);
    }
  }
}
