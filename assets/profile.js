function copyContactNumber() {
    const contactNumber = "7896431526"; // Replace with your actual contact number

    // Create a temporary textarea element
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = contactNumber;
    document.body.appendChild(tempTextarea);

    // Select the content of the textarea element
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the selected content
    document.execCommand("copy");

    // Remove the temporary textarea element
    document.body.removeChild(tempTextarea);

    // Optional: Show a message or change the link text to indicate success
    alert("Contact number copied: " + contactNumber);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
