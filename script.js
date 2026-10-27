// 1. JavaScript Feature — DOM Ready 
document.addEventListener("DOMContentLoaded", () => {
    // 2. Focus/Blur UX on Inputs
    const inputs = document.querySelectorAll("#username, #email, #password");

    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.style.backgroundColor = "#fffae0";
        });

    input.addEventListener("blur", () => {
        input.style.backgroundColor = "white";
        });
    });

    // 3. Form Validation on Submit
    const form = document.querySelector("#signup-form");
    const usernameInput = document.querySelector("#username");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const termsCheckbox = document.querySelector("#terms");

    const errorUsername = document.querySelector("#error-username");
    const errorEmail = document.querySelector("#error-email");
    const errorPassword = document.querySelector("#error-password");
    const errorTerms = document.querySelector("#error-terms");

    // Displays error
    function showError(inputElement, errorSpan, message) {
        errorSpan.textContent = message;
        errorSpan.style.display = "inline";
        inputElement.classList.add("error-border");
    }

    // Clears error
    function clearError(inputElement, errorSpan) {
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
        inputElement.classList.remove("error-border");
    }

    form.addEventListener("submit", (event) => {
        // Prevent form submission
        event.preventDefault();

        let isValid = true;

        // Validate Username
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === "") {
            showError(usernameInput, errorUsername, "Username is required");
            isValid = false;
        } else {
            clearError(usernameInput, errorUsername);
        }

        // Validate Email
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            showError(emailInput, errorEmail, "Enter a valid email address");
            isValid = false;
        } else {
            clearError(emailInput, errorEmail);
        }

        // Validate Password
        const passwordValue = passwordInput.value;
        if (passwordValue.length < 8) {
            showError(passwordInput, errorPassword, "Password must be at least 8 characters");
            isValid = false;
        } else {
            clearError(passwordInput, errorPassword);
        }

        // Validate Terms Checkbox
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, errorTerms, "You must accept the terms");
            isValid = false;
        } else {
            clearError(termsCheckbox, errorTerms);
        }

        if (isValid) {
            alert("Registration successful!");
            form.reset();
        }
    });

    // 4. Gallery Interaction
    const thumbnails = document.querySelectorAll(".thumb");
    const captionEl = document.querySelector("#image-caption");

    // Event listener for each thumbnail
    function handleTileSelect(tile) {
        thumbnails.forEach((t) => t.classList.remove("expanded"));

        tile.classList.add("expanded");

        const cityName = tile.dataset.city;
        if (captionEl && cityName) {
            captionEl.textContent = `This shot is from ${cityName}`;
        }
    }

    // Click and keyboard event listeners for thumbnails
    thumbnails.forEach((tile) => {
        tile.addEventListener("click", () => {handleTileSelect(tile);
            });
        tile.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                handleTileSelect(tile);
            }
        });
    });
});