$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 3000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  $(document).scroll(function () {
    let scrollValue = Math.round(document.scrollingElement.scrollTop / 20);

    if (scrollValue < 333) {
      setVideoImage(scrollValue);
      $('#main-video').show();
    } else {
      $('#main-video').hide();
    }
  });

  $('#item-home').hover(() => $('#item-home').css('cursor', 'pointer'));
  $('#item-home').click(() => setScrollTop(1));

  $('#item-catalog').hover(() => $('#item-catalog').css('cursor', 'pointer'));
  $('#item-catalog').click(() => setScrollTop(7650));

  $('#item-technical').hover(() => $('#item-technical').css('cursor', 'pointer'));
  $('#item-technical').click(() => setScrollTop(8930));

  $('#item-packing').hover(() => $('#item-packing').css('cursor', 'pointer'));
  $('#item-packing').click(() => setScrollTop(10010));

  $('#item-about').hover(() => $('#item-about').css('cursor', 'pointer'));
  $('#item-about').click(() => setScrollTop(10770));

  $('#item-contact').hover(() => $('#item-contact').css('cursor', 'pointer'));
  $('#item-contact').click(() => setScrollTop(11500));
});

function setScrollTop(scrollTop) {
  document.scrollingElement.scrollTop = 100;
  document.scrollingElement.scrollTop = scrollTop;
}

function setVideoImage(value) {
  if (value <= 182) { // logo animation
    $('#main-video').attr('src', `image-sequences/logo-animation/Comp 2_00${normalizeValue(value)}.jpg`);
  } else if (value <= 332) { // bottle animation
    value = value - 183;
    $('#main-video').attr('src', `image-sequences/bottle-animation/SC_01_00${normalizeValue(value)}.jpg`);
  }
}

function normalizeValue(value) {
  value = value.toString();
  if (value.length == 1) {
    value = `00${value}`;
  } else if (value.length == 2) {
    value = `0${value}`;
  }
  return value;
}