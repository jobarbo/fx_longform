//import threejs from node_modules
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
console.log(OrbitControls);
console.log(THREE);

// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require('three');

// Include any additional ThreeJS examples below
require('three/examples/js/controls/OrbitControls');
require('three/examples/js/geometries/RoundedBoxGeometry.js');
require('three/examples/js/loaders/RGBELoader.js');
require('three/examples/js/postprocessing/EffectComposer.js');
require('three/examples/js/postprocessing/RenderPass.js');
require('three/examples/js/postprocessing/ShaderPass.js');
require('three/examples/js/postprocessing/UnrealBloomPass.js');
require('three/examples/js/shaders/LuminosityHighPassShader.js');
require('three/examples/js/shaders/CopyShader.js');

// these are the variables you can use as inputs to your algorithms
// console.log(fxhash); // the 64 chars hex number fed to your algorithm
// deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }
//* COMPOSITION GENERATION *//

let composition_params;

composition_params = generate_composition_params();

var {center_piece_type} = composition_params; // unpacking parameters we need in main.js and turning them into globals

//* FXHASH FEATURES DEFINITION *//
window.$fxhashFeatures = {
	'Center piece type': center_piece_type,
};
generateConsoleLogs(window.$fxhashFeatures);
