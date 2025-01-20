document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const listItem = document.getElementById('ul');
    const close = document.getElementById('close');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const click = document.getElementById('click');

   

    var data = [
        {
            'img': './images/illustration-features-tab-1.svg',
            'title': 'Bookmark in one click',
            'text': 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
            'button': 'More Info'
        },
        {
            'img': './images/illustration-features-tab-2.svg',
            'title': 'Intelligent search',
            'text': 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
            'button': 'More Info'
        },
        {
            'img': './images/illustration-features-tab-3.svg',
            'title': 'Share your bookmarks',
            'text':'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
            'button': 'More Info'
        }
    ];
    console.log(data)

    text1.onclick = function () {
        click.innerHTML = `<img src="${data[0].img}" alt="${data[0].title}">` +
            `<h2>${data[0].title}</h2>` +
            `<p>${data[0].text}</p>` +  `<button>${data[0].button}</button>`;
    };

    text2.onclick = function () {
        click.innerHTML = `<img src="${data[1].img}" alt="${data[1].title}">` +
            `<h2>${data[1].title}</h2>` +
            `<p>${data[1].text}</p>` +
            `<button>${data[1].button}</button>`;
    };

    text3.onclick = function () {
        click.innerHTML = `<img src="${data[2].img}" alt="${data[2].title}">` +
            `<h2>${data[2].title}</h2>` +
            `<p>${data[2].text}</p>` +
            `<button>${data[2].button}</button>`;
    };

    hamburger.onclick = function() {
        close.style.display = 'flex';
        hamburger.style.display = 'none';
        listItem.style.backgroundColor = 'hsl(229, 31%, 21%)';
        listItem.style.display = 'flex';

    }

    close.onclick = function() {
        close.style.display = 'none';
        hamburger.style.display = 'inline-block';
        listItem.style.display = 'none';
    }

    
})