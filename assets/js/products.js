document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.brand-tab');
    const productContainers = document.querySelectorAll('.brand-products');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and product containers
            tabs.forEach(t => t.classList.remove('active'));
            productContainers.forEach(container => container.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Show corresponding products
            const brand = this.getAttribute('data-brand');
            document.getElementById(`${brand}-products`).classList.add('active');
        });
    });

    // You can add more interactive features here
    // For example, product modal popups, filtering, etc.

    // Sample product button click handler
    const productButtons = document.querySelectorAll('.product-btn');
    productButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would show more product details
            alert('Product details would be shown here or in a modal');
        });
    });

    // CTA button click handler
    const ctaButton = document.querySelector('.cta-btn');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // This would typically link to a contact page
            alert('Redirecting to contact page or opening contact form');
        });
    }
});