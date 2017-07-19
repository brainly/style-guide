/*eslint-disable */
// highlighting holes
var showHolesCheckbox = document.getElementById('js-highlight-holes');
var active = -1;

function toggleHoles() {
  document.body.classList.toggle('show-holes');
  localStorage.showHoles = showHolesCheckbox.checked;
}

showHolesCheckbox.addEventListener('change', toggleHoles);

if (localStorage.showHoles === 'true') {
  showHolesCheckbox.checked = true;
  toggleHoles();
}

// search
var $searchBox = document.querySelector('#js-search-box');
var $searchResults = document.querySelector('#js-search-results');
var searchResults = $searchResults;

function removeClassActive(index) {
  if (index >= 0) {
    searchResults.children[index].classList.remove('active');
  }
}

function addClassActive(index) {
  if (index >= 0) {
    searchResults.children[index].classList.add('active');
  }
}

function searchElements(query) {
  query = query.toLowerCase();

  return Array.from(document.querySelectorAll('a.js-searchable')).filter(function (link) {
    return link.innerText.trim().toLowerCase().indexOf(query) !== -1;
  }).map(function (link) {
    return {
      text: link.innerText,
      link: link.href
    }
  });
}

$searchBox.addEventListener('input', function () {
  if ($searchBox.value.length < 2) {
    return;
  }

  var results = searchElements($searchBox.value);

  $searchResults.innerHTML = '';
  results.forEach(function (item) {
    var $li = document.createElement('li');
    var $a = document.createElement('a');

    $a.innerText = item.text;
    $a.href = item.link;

    $li.appendChild($a);
    $searchResults.appendChild($li);
  });
});

$searchBox.addEventListener('keydown', function (e) {
  var children = $searchResults.childNodes;
  var arrowdown = e.keyCode === 40;
  var arrowup = e.keyCode === 38;
  var enter = e.keyCode === 13;

  if (arrowdown) {
    e.preventDefault();
    var previousActive = active;
    active++;

    if (active === children.length) {
      removeClassActive(previousActive);
      active = -1;
      return;
    }

    if (active > 0) {
      removeClassActive(previousActive);
    }

    if (active !== -1) {
      addClassActive(active);
    }
  }

  if (arrowup) {   //arrowup
    e.preventDefault();
    previousActive = active;
    active--;

    if (active === -2) {
      active = children.length - 1;
      addClassActive(active);
    } else if (active === -1) {
      removeClassActive(previousActive);
    } else {
      removeClassActive(previousActive);
      addClassActive(active);
    }
  }

  if (enter && active >= 0) {
    var href = $searchResults.childNodes[active].querySelector('a').href;
    location.assign(href);
  }
});

$searchResults.addEventListener('mouseenter', function (e) {
  var children = $searchResults.childNodes;

  for (var i = 0; i < children.length; i++) {
    removeClassActive(i);
  }
  active = -1;
});
/*eslint-enable */
