⚠️ **Disclaimer:** PlanetTechJS is currently in its alpha version and is being developed by a single developer. Consequently, it's important to keep in mind that there may be bugs, spelling errors, lack of tests, and occasional inconsistencies in the library. While every effort is being made to provide a stable and enjoyable experience, please approach the library with the understanding that it's a work in progress. Your feedback, bug reports, and contributions are highly appreciated as they play a crucial role in improving the library and ensuring its quality.


# PlanetTechJS (ALPHA V0.8) 
<p align="center">
  <img src="./assets/Astron.png" />
</p>

## Goal

This video served as the motivation for the project. I would like to design a system/toolkit that gets as close as possible to what is demoed.

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ksMQ4hYhfSA/0.jpg)](https://www.youtube.com/watch?v=ksMQ4hYhfSA)

**About:**
PlanetTechJS is an open-source JavaScript library built using vanilla THREE.js, accompanied by a React UI for editing planets. Its primary purpose is to generate procedural planets and terrains using a quadtree LOD approach. The aim of this project is not to replicate titles like Star Citizen or No Man's Sky, but rather to provide a toolkit that emulates the tools they might employ for planet creation. The sole focus is on crafting planets, offering a straightforward and adaptable approach to designing realistic and visually captivating 3D planets on a grand scale. The key to the success of this project lies in its ability to handle **scale**, allowing for seamless transitions from the sky to the ground with high resolution. PlanetTechJS will include customizable features such as terrain textures, ground physics, atmospheric effects, and more. Thus, it does not encompass spaceships, weapons, player dynamics, etc.; its sole focus is planet generation.

What sets this library apart is its utilization of the GPU for all tasks. This includes generating textures for each facet, performing displacement, and shaping PlaneGeometries into spherical forms; the entire process occurs on the GPU. Consequently, there is no need for WebWorkers at this stage.

## Getting Started
To run the basic example:
```
$ git clone https://github.com/miguelmyers8/PlanetTechJS.git
$ cd PlanetTechJS/exmaples
$ python3 -m http.server
```
Past `http://localhost:8000/` into the browser.

## Build From Source
If would like to work on this, install it locally first thing you need to do is. Copy the coi-serviceworker.js file and paste it
in the root of where your index.html file is located and link to it. Then run the following commands.
```
$ cd ./to/your/projects/root
$ git clone https://github.com/miguelmyers8/PlanetTechJS.git
$ cd PlanetTechJS
$ npm install && npm link
$ cd ..
$ npm link planettech
```


https://github.com/miguelmyers8/PlanetTechJS/assets/18605314/f4621d3a-85ff-4224-be1f-8ae059b7efcc

