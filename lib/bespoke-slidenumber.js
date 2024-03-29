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
