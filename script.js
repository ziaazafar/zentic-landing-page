// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('nav-scrolled');
        navbar.classList.remove('py-5', 'bg-transparent');
    } else {
        navbar.classList.remove('nav-scrolled');
        navbar.classList.add('py-5', 'bg-transparent');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    }
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

// Growth Simulator Logic
const spendSlider = document.getElementById('spend-slider');
const leadsSlider = document.getElementById('leads-slider');
const spendDisplay = document.getElementById('spend-display');
const leadsDisplay = document.getElementById('leads-display');
const wasteResult = document.getElementById('waste-result');
const upsideResult = document.getElementById('upside-result');

function updateCalculator() {
    const spend = parseInt(spendSlider.value);
    const leads = parseInt(leadsSlider.value);

    // Format inputs for display
    spendDisplay.textContent = '$' + spend.toLocaleString();
    leadsDisplay.textContent = leads.toLocaleString();

    // Calculate Logic
    // Assume 22% waste
    const waste = Math.floor(spend * 0.22);
    // Assume 35% uplift in leads
    const potential = Math.floor(leads * 1.35);

    // Update Results
    wasteResult.textContent = '-$' + waste.toLocaleString();
    upsideResult.textContent = potential.toLocaleString();
}

// Add event listeners
spendSlider.addEventListener('input', updateCalculator);
leadsSlider.addEventListener('input', updateCalculator);

// Initialize
updateCalculator();
