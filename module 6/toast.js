const successBtn = document.getElementById('success-btn');
const errorBtn = document.getElementById('error-btn');
const toastContainer = document.getElementById('toast-container');

/**
 * Displays a toast notification.
 * @param {string} message The message to display.
 * @param {string} type The type of toast ('success' or 'error').
 */
function showToast(message, type) {
    const toastElement = document.createElement('div');
    toastElement.classList.add('toast', type); // Use the type parameter
    toastElement.textContent = message;
    toastContainer.appendChild(toastElement);

    setTimeout(() => {
        toastElement.remove();
    }, 2000);
}

// Add event listeners to the buttons
successBtn.addEventListener('click', () => {
    showToast('Your changes were saved successfully!', 'success');
});

errorBtn.addEventListener('click', () => {
    showToast('Error: Could not connect to the server.', 'error');
});