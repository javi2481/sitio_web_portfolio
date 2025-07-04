// Form validation functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    // Form validation configuration
    const validationConfig = {
        name: {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: /^[a-zA-Z\s]*$/,
            errorMessages: {
                required: 'Please enter your name',
                minLength: 'Name must be at least 2 characters long',
                maxLength: 'Name cannot exceed 50 characters',
                pattern: 'Name can only contain letters and spaces'
            }
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessages: {
                required: 'Please enter your email address',
                pattern: 'Please enter a valid email address'
            }
        },
        subject: {
            required: true,
            minLength: 5,
            maxLength: 100,
            errorMessages: {
                required: 'Please enter a subject',
                minLength: 'Subject must be at least 5 characters long',
                maxLength: 'Subject cannot exceed 100 characters'
            }
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000,
            errorMessages: {
                required: 'Please enter your message',
                minLength: 'Message must be at least 10 characters long',
                maxLength: 'Message cannot exceed 1000 characters'
            }
        }
    };

    // Initialize form validation
    initFormValidation(contactForm, validationConfig);
});

function initFormValidation(form, config) {
    // Add input event listeners for real-time validation
    Object.keys(config).forEach(fieldName => {
        const input = form.querySelector(`#${fieldName}`);
        if (input) {
            input.addEventListener('input', () => validateField(input, config[fieldName]));
            input.addEventListener('blur', () => validateField(input, config[fieldName]));
        }
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm(form, config)) {
            handleFormSubmission(form);
        }
    });
}

function validateField(input, rules) {
    const value = input.value.trim();
    const errorElement = document.getElementById(`${input.id}Error`);
    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (rules.required && value === '') {
        isValid = false;
        errorMessage = rules.errorMessages.required;
    }
    // Minimum length validation
    else if (rules.minLength && value.length < rules.minLength) {
        isValid = false;
        errorMessage = rules.errorMessages.minLength;
    }
    // Maximum length validation
    else if (rules.maxLength && value.length > rules.maxLength) {
        isValid = false;
        errorMessage = rules.errorMessages.maxLength;
    }
    // Pattern validation
    else if (rules.pattern && !rules.pattern.test(value)) {
        isValid = false;
        errorMessage = rules.errorMessages.pattern;
    }

    // Update UI based on validation result
    updateValidationUI(input, errorElement, isValid, errorMessage);

    return isValid;
}

function validateForm(form, config) {
    let isValid = true;

    // Validate all fields
    Object.keys(config).forEach(fieldName => {
        const input = form.querySelector(`#${fieldName}`);
        if (input && !validateField(input, config[fieldName])) {
            isValid = false;
        }
    });

    // Validate CAPTCHA
    const captcha = form.querySelector('#captcha');
    if (captcha && !captcha.checked) {
        isValid = false;
        alert('Please verify that you are not a robot');
    }

    return isValid;
}

function updateValidationUI(input, errorElement, isValid, errorMessage) {
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = isValid ? 'none' : 'block';
    }

    // Update input styles
    input.classList.toggle('invalid', !isValid);
    input.classList.toggle('valid', isValid);
}

function handleFormSubmission(form) {
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form and show success message
        form.reset();
        showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
        
        // Reset button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }, 1500);
}

function showFormMessage(message, type) {
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;

    // Add message to form
    const form = document.getElementById('contactForm');
    form.insertAdjacentElement('beforebegin', messageElement);

    // Remove message after delay
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Add CSS for form validation
const formValidationStyles = document.createElement('style');
formValidationStyles.textContent = `
    .form-group input.valid,
    .form-group textarea.valid {
        border-color: #28a745;
    }

    .form-group input.invalid,
    .form-group textarea.invalid {
        border-color: #dc3545;
    }

    .error-message {
        color: #dc3545;
        font-size: 0.85rem;
        margin-top: 0.25rem;
    }

    .form-message {
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: var(--border-radius);
        font-weight: 500;
    }

    .form-message.success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }

    .form-message.error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }

    [data-theme="dark"] .form-message.success {
        background-color: #1e4731;
        color: #d4edda;
        border-color: #155724;
    }

    [data-theme="dark"] .form-message.error {
        background-color: #472025;
        color: #f8d7da;
        border-color: #721c24;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .fa-spinner {
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(formValidationStyles);
