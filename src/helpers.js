// helpers.js

// Example function to validate the query form
export function validateForm(name, email, subject, query) {
    if (!name || !email || !subject || !query) {
        alert("All fields are required!");
        return false;
    }
    if (!email.includes("@")) {
        alert("Please enter a valid email address!");
        return false;
    }
    return true;
}

// Example function to handle form submission
export function submitQuery(data) {
    console.log("Form Submitted with Data:", data);
    alert("Your query has been submitted successfully!");
}



