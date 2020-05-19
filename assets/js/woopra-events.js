(function() {
    'use strict'

    const sources = document.querySelectorAll('[data-event]');

    if (sources)
    {
        Array.prototype.forEach.call(sources, function(source) {

            source.addEventListener("click", function() {
                woopra.track(source.dataset.event, { source: source.dataset.eventsource, target: source.dataset.eventtarget })
            });
        });
    }

    const inputs = document.querySelectorAll('[data-eventinput]');

    if (inputs){

        Array.prototype.forEach.call(inputs, function(input) {

            input.addEventListener("input", debounce(750, function(e) {
                woopra.track(input.dataset.eventinput, { value: input.value });
            }));
        });
    }

    const containers = document.querySelectorAll('[data-eventcontainer]');

    if (containers) {

        Array.prototype.forEach.call(containers, function(container) {

            container.addEventListener("click", function(e) {
                woopra.track(container.dataset.eventcontainer, { target: e.target.text.toLowerCase() })
            });
        });
    }

    function debounce(delay, fn) {
        var timer = null;
        return function () {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            fn.apply(context, args);
          }, delay);
        };
      }
})();