// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
    'use strict';

    function generatePeople(limit, counter=1){
        if (counter <= limit){
            console.log(counter);
            fetch('https://randomuser.me/api')
                .then(response => response.json())
                .then(data => {
                    console.log(data.results[0]);
                    createElement(data.results[0]);
                });
            generatePeople(limit, ++counter);
        }
    }

    function createElement(data){
        let contactWrapper = document.createElement("div");
        contactWrapper.classList.add("contactWrapper");

        let contactImageWrapper = document.createElement("div");
        contactImageWrapper.classList.add("contactImageWrapper");
        contactWrapper.appendChild(contactImageWrapper);
        
        let contactHeader = document.createElement("h3");
        contactWrapper.appendChild(contactHeader);
        contactHeader.classList.add("contactHeader");
        let contactEmail = document.createElement("p");
        contactWrapper.appendChild(contactEmail);
        contactEmail.classList.add("contactEmail");


        let contactAddress = document.createElement("div");
        contactAddress.classList.add("contactAddress");

        let contactStreet = document.createElement("p");
        contactAddress.appendChild(contactStreet);
        let contactCityStateZip = document.createElement("p");
        contactAddress.appendChild(contactCityStateZip);
        let contactPhone = document.createElement("p");
        contactAddress.appendChild(contactPhone);

        
        contactWrapper.appendChild(contactAddress);

        contactHeader.textContent = data.name.first + " " + data.name.last;
        contactEmail.textContent = data.email;
        contactStreet.textContent = data.location.street;
        contactCityStateZip.textContent = data.location.city + ", " + data.location.state + " " + data.location.postcode;
        contactPhone.textContent = data.phone;


        contactImageWrapper.style.background = "url(" + data.picture.large + ") no-repeat center center";
        contactImageWrapper.style.backgroundSize = 'cover';
        document.querySelector(".customers").appendChild(contactWrapper);
        
    }
    generatePeople(12);

})();
