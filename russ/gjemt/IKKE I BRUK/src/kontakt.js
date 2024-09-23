// Fetch the form and message container elements
const contactForm = document.getElementById('contactForm');
const messageContainer = document.getElementById('messageContainer');

// Add event listener for form submission
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Submit the form data using Fetch API
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData
    });

    try {
        // Parse the JSON response
        messageContainer.innerHTML = ''; // Clear the message container
        const responseData = await response.json();
        const stringifiedData = responseData.message;
        console.log(stringifiedData);
        //add <p> element to the message container
        const p = document.createElement('p');
        messageContainer.appendChild(p);
        p.textContent = stringifiedData;

        // Clear the form fields if the submission was successful
        if (responseData.success) {
            contactForm.reset();
        }
    } catch (error) {
        console.error('Error parsing JSON response:', error);
    }
});
