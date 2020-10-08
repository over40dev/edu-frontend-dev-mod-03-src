/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// loops and arrays part 2 Challenge: you are working at a very fancy new
// nightclub and in charge of letting people in based on their age. If they are
// not 21 years of age, you cannot let them in. Please send them a nice
// personalised message letting them know. Dont forget to share your code on the
// #share-your-code channel on discord.

var nightClubRegister = [{
    name: 'Ahmed',
    lastname: 'Abdool',
    age: 25,
    gender: 'male'
}, {
    name: 'Sally',
    lastname: 'Morgan',
    age: 18,
    gender: 'female'
}, {
    name: 'Dionne',
    lastname: 'Brown',
    age: 29,
    gender: 'female'
}, {
    name: 'Max',
    lastname: 'Forrester',
    age: 20,
    gender: 'male'
}];

for (var i = 0; i < nightClubRegister.length; i++) {
    var _nightClubRegister$i = nightClubRegister[i],
        name = _nightClubRegister$i.name,
        lastname = _nightClubRegister$i.lastname,
        age = _nightClubRegister$i.age,
        gender = _nightClubRegister$i.gender;

    if (age < 21) {
        console.log('Sorry ' + (gender.toLowerCase() === 'male' ? 'Mr.' : 'Ms.') + ' ' + name + ' ' + lastname + ', you have been denied access to the club because you do not meet the age requirement of 21.');
    }
}

/***/ })
/******/ ]);