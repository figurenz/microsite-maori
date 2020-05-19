(function() {
    'use strict'

    // https://inclusive-components.design/collapsible-sections/
    const headings = document.querySelectorAll('h2');
  
    Array.prototype.forEach.call(headings, function(heading) {
      let open = heading.querySelector('button');

      if (!open) {
          return;
      }

      let target = heading.nextElementSibling;
      let close = target.querySelector('button.close-button');

      let onclick = function() {
        let expanded = open.getAttribute('aria-expanded') === 'true' || false;

        open.setAttribute('aria-expanded', !expanded);
        target.setAttribute('aria-hidden', expanded);
        target.hidden = expanded;
      };

      open.onclick = onclick;

      close.onclick = function() {
        onclick();
        heading.scrollIntoView({ behavior: "smooth" });
      };

    })
  })();