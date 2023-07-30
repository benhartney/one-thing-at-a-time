window.data = [
  {
    category_title: 'Fulfilling creation OR Flow',
    things: ['Surf', 'Make music'],
  },
  {
    category_title: 'Fulfilling consumption STARTED',
    things: [
      'Book: WEIRDest people in the world',
      'Audio: Rome',
      'Physics book',
    ],
  },
  {
    category_title: 'Fulfilling consumption',
    things: ['Best mag', 'wind. waves.', 'brightness', 'humidity'],
  },
  {
    category_title: 'Relaxing consumption STARTED',
    things: [
      'TV: Historia Civilis',
      'TV: Mrs Davis',
      'Book-F: Pompeii',
      'TV: Hijack',
      'TV: Quarterback',
    ],
  },
  {
    category_title: 'Relaxing consumption',
    things: ['YT Watch Later'],
  },
];
window.current_thing = window.data.shift();
console.log(window.current_thing);

const randomItem = (arr) => arr.splice((Math.random() * arr.length) | 0, 1);

function main_function() {
  console.log(window.current_thing);
  console.log(window.current_thing['things']);
  if (window.current_thing['things'].length == 0) {
    window.current_thing = window.data.shift();
  }
  $('#contentDiv').html(
    window.current_thing['category_title'] +
      ':<br>' +
      randomItem(window.current_thing['things'])
  );
}
$(document).ready(function () {
  $('#button').on('click', function () {
    main_function();
  });
  main_function();
});
