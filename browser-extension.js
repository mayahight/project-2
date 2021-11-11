// var elements = document.getElementsByClassName('css-qos6i6');

var elements = document.getElementsByTagName('div');

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];

  element.style.setProperty('display', 'block');
  // element.style.setProperty('border','solid 3px purple');
}

var images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++) {
   var img = images[i];

  img.style.height = '300px';
  img.style.width = 'auto';
  img.style.setProperty('display', 'inline');
}

// const box = document.createElement('div');
// const note = document.createTextNode('slow your scroll');
// box.appendChild(note);
//
// const div = document.getElementByTagName('div');
// const child = document.getElementByClassName('NYTAppHideMasthead css-1r6wvpq e1m0pzr40');
// div.insertBefore(box, child);
