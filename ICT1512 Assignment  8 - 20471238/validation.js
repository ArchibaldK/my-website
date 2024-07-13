document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const copyAddressCheckbox = document.getElementById('copyAddress');
    const homeAddress = document.getElementById('homeAddress');
    const postalAddress = document.getElementById('postalAddress');

    copyAddressCheckbox.addEventListener('change', () => {
        if (copyAddressCheckbox.checked) {
            postalAddress.value = homeAddress.value;
        } else {
            postalAddress.value = '';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Perform validation here

        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            localStorage.setItem(key, value);
        }

        form.submit();
    });
});
