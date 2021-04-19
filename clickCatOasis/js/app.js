

/*let cats = ["Freya", "Starlight", "Pumpkin","Midnight", "Sunshine", "Moonlight"]
//build the buttons
function createButton() 
{	
	let buttons = document.getElementById("buttons");
	for(let i=0; i<cats.length; i++)
	{
		cat = cats[i];
		let button = document.createElement("button");
		button.innerHTML=cats[i];
		buttons.appendChild(button);
		button.setAttribute("class", cats[i]);
		
	};
};

createButton();*/

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();

    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    const expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
const cookieBanner = document.querySelector('#cookie-banner');
const hasCookieConsent = getCookie('cookies-consent');

if (!hasCookieConsent) {
    cookieBanner.classList.remove('hidden');
} else {
    // They had previously consented, so log right away.
    acceptedLogVisit();
}

const consentCta = cookieBanner.querySelector('#consent-cookies');

consentCta.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
    setCookie('cookies-consent', 1, 365);
    // They consent now, so log this visit.
    acceptedLogVisit();
});

let cattery = {
    currentCat: null,
    cats: [
        {
            count : 0,
            name : "Freya",
            imgSrc : "images/Freya.jpg",
            
        },
        {
            count : 0,
            name : "Starlight",
            imgSrc : "images/Starlight.jpg",
           
        },
        {
            count : 0,
            name : "Pumpkin",
            imgSrc : "images/Pumpkin.jpg",
            
        },
        {
            count : 0,
            name : "Midnight",
            imgSrc : "images/Midnight.jpg",
            
        },
        {
            count : 0,
            name : "Sunshine",
            imgSrc : "images/Sunshine.jpg",
           
        },
        {
            count : 0,
            name : "Moonlight",
            imgSrc : "images/Moonlight.jpg",
           
        }
    ]
};


/* ======= catCall ======= */

var catCall = {

    init: function() {
        // set our current cat to the first one in the list
        cattery.currentCat = cattery.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCatNow: function() {
        return cattery.currentCat;
    },

    getCats: function() {
        return cattery.cats;
    },

    // set the currently-selected cat to the object passed in
    setCatNow: function(cat) {
        cattery.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    counterUp: function() {
        cattery.currentCat.count++;
        catView.render();
    }
};


var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('catName');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('catCount');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            catCall.counterUp();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = catCall.getCatNow();
        this.countElem.textContent = currentCat.count;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('catList');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the catCall
        var cats = catCall.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCatNow and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    catCall.setCatNow(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
catCall.init();

//const cats = ["Freya", "Starlight", "Pumpkin","Midnight", "Sunshine", "Moonlight"]
//build the buttons
/*function createButton() 
{	
	let buttons = document.getElementById("buttons");
	for(let i=0; i<cats.length; i++)
	{
		cat = cats[i];
		let button = document.createElement("button");
		button.innerHTML=cats[i];
		buttons.appendChild(button);
		button.setAttribute("class", cats[i]);
		
	};
};

createButton();*/

	






