/*!
 * bespoke-slidenumber v0.1.0
 *
 * Copyright 2016, 
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var o=n;o=o.bespoke||(o.bespoke={}),o=o.plugins||(o.plugins={}),o.slidenumber=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = function(options) {

  return function(deck) {
    // create elements
    var snContainer = document.createElement('div');
    var currentSn = document.createElement('div');
    var divider = document.createElement('div');
    var overallSn = document.createElement('div');
    overallSn.innerHTML = deck.slides.length;
    divider.innerHTML = typeof options !== 'string' ? '' : options;
    // add CSS classes
    snContainer.classList.add('bespoke-slidenumber');
    currentSn.classList.add('bespoke-slidenumber-current', 'bespoke-slidenumber-no');
    divider.classList.add('bespoke-slidenumber-divider');
    overallSn.classList.add('bespoke-slidenumber-overall', 'bespoke-slidenumber-no');
    // append to deck
    snContainer.appendChild(currentSn);
    snContainer.appendChild(divider);
    snContainer.appendChild(overallSn);
    deck.parent.appendChild(snContainer);
    // update current slide number
    deck.on('activate', function(ev) {
      currentSn.innerHTML = ev.index + 1;
    });
  };
};

},{}]},{},[1])
(1)
});