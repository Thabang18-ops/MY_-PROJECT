// ENQUIRY FORM VALIDATION

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (service === "") {
            alert("Please select a cleaning service.");
            return;
        }

        if (date === "") {
            alert("Please select a preferred date.");
            return;
        }

        alert("Thank you, " + name + "! Your enquiry has been submitted successfully.");

        enquiryForm.reset();

    });

}

// VITAQUOTE ESTIMATOR

const quoteButton = document.getElementById("quoteButton");
const quoteResult = document.getElementById("quoteResult");

if (quoteButton) {

    quoteButton.addEventListener("click", function() {

        const service = document.getElementById("service").value;

        let price = 0;

        if (service === "") {

            quoteResult.textContent =
                "Please select a cleaning service first.";

            return;
        }

        if (service === "home-cleaning") {
            price = 450;
        }

        else if (service === "office-cleaning") {
            price = 600;
        }

        else if (service === "deep-cleaning") {
            price = 800;
        }

        else if (service === "regular-cleaning") {
            price = 350;
        }

        quoteResult.textContent =
            "Estimated VitaQuote: R" + price +
            ". Final pricing may vary depending on your requirements.";

    });

    // CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent successfully.");

        contactForm.reset();

    });

}

}