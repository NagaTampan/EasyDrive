// Initialize GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navigation scroll behavior
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.classList.remove('shadow-md');
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
});

// Hero section animations
const heroTimeline = gsap.timeline();

heroTimeline
    .from('.hero .gradient-text', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.hero .text-gray-800', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.hero p', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.hero button', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=10')
    .from('.hero .grid-cols-3', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.3')
    .from('.hero img', {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.hero .absolute', {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('.hero .mt-16', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.3');

// Floating animation for the car image
gsap.to('.floating-element', {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Hover effects for buttons
document.querySelectorAll('.hero button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Stats counter animation
const countElements = document.querySelectorAll('.counter');

countElements.forEach(element => {
    const target = parseFloat(element.innerText);
    const decimal = element.innerText.includes('.');

    ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
            gsap.to(element, {
                duration: 2,
                innerText: target,
                snap: { innerText: decimal ? 0.1 : 1 },
                ease: 'power2.out'
            });
        }
    });
});

// Benefits section animations with hover effects
const benefitCards = document.querySelectorAll('.benefit-card');

benefitCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('i'), {
            duration: 0.3,
            scale: 1.2,
            rotation: 360,
            ease: 'back.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('i'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Vehicle cards stagger animation
gsap.from('.car-card', {
    scrollTrigger: {
        trigger: '#vehicles',
        start: 'top center',
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Process steps animation with connecting lines
gsap.from('.process-step', {
    scrollTrigger: {
        trigger: '#how-it-works',
        start: 'top center',
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.3,
    ease: 'back.out(1.7)'
});

// Testimonial cards reveal animation
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '#testimonials',
        start: 'top center',
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Special offers animation
gsap.from('.offer-card', {
    scrollTrigger: {
        trigger: '.offer-card',
        start: 'top 80%',
    },
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
});

// Features animation
gsap.from('.feature-card', {
    scrollTrigger: {
        trigger: '.feature-card',
        start: 'top 80%',
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

// Newsletter section animation
gsap.from('.newsletter-section', {
    scrollTrigger: {
        trigger: '.newsletter-section',
        start: 'top 80%',
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});
 // Vehicle Data
const vehicles = [
    {
        name: 'Mercedes C-Class',
        category: 'Luxury',
        rating: 4.9,
        seats: 4,
        transmission: 'Automatic',
        fuel: 'Hybrid',
        speed: '250 km/h',
        price: 89,
        isNew: true,
        image: 'https://picsum.photos/400/250?vehicle=1'  // Gambar mobil
    },
    {
        name: 'BMW X5',
        category: 'SUV',
        rating: 4.8,
        seats: 7,
        transmission: 'Automatic',
        fuel: 'Diesel',
        speed: '220 km/h',
        price: 99,
        isNew: false,
        image: 'https://picsum.photos/400/250?vehicle=2'  // Gambar mobil
    },
    {
        name: 'Toyota Corolla',
        category: 'Economy',
        rating: 4.7,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Hybrid',
        speed: '180 km/h',
        price: 45,
        isNew: false,
        image: 'https://picsum.photos/400/250?vehicle=3'  // Gambar mobil
    }
];


const filters = ['All', 'Economy', 'Luxury', 'SUV'];
let activeFilter = 'All';

// Create Filter Buttons
const filterContainer = document.getElementById('vehicle-filters');
filters.forEach(filter => {
    const button = document.createElement('button');
    button.className = `px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${activeFilter === filter ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 hover:bg-blue-50'}`;
    button.textContent = filter;
    button.onclick = () => filterVehicles(filter);
    filterContainer.appendChild(button);
});

// Filter Vehicles based on category
function filterVehicles(category) {
    activeFilter = category;
    document.querySelectorAll('#vehicle-filters button').forEach(button => {
        button.classList.toggle('bg-blue-600', button.textContent === category);
        button.classList.toggle('text-white', button.textContent === category);
    });
    displayVehicles();
}

// Display Vehicle Cards
function displayVehicles() {
    const vehicleCardsContainer = document.getElementById('vehicle-cards');
    vehicleCardsContainer.innerHTML = ''; // Clear existing cards

    vehicles
        .filter(vehicle => activeFilter === 'All' || vehicle.category === activeFilter)
        .forEach(vehicle => {
            const card = document.createElement('div');
            card.className = 'car-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl';

            const imageContainer = document.createElement('div');
            imageContainer.className = 'relative';
            const img = document.createElement('img');
            img.src = vehicle.image;
            img.alt = vehicle.name;
            img.className = 'w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300';
            imageContainer.appendChild(img);
            
            if (vehicle.isNew) {
                const newTag = document.createElement('div');
                newTag.className = 'absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm';
                newTag.textContent = 'New';
                imageContainer.appendChild(newTag);
            }
            card.appendChild(imageContainer);

            const content = document.createElement('div');
            content.className = 'p-6';

            const header = document.createElement('div');
            header.className = 'flex justify-between items-center mb-4';
            const title = document.createElement('h3');
            title.className = 'text-xl font-semibold';
            title.textContent = vehicle.name;
            header.appendChild(title);

            const rating = document.createElement('div');
            rating.className = 'flex items-center text-yellow-400';
            const starIcon = document.createElement('i');
            starIcon.className = 'fas fa-star';
            const ratingText = document.createElement('span');
            ratingText.className = 'ml-1 text-gray-600';
            ratingText.textContent = vehicle.rating;
            rating.appendChild(starIcon);
            rating.appendChild(ratingText);
            header.appendChild(rating);

            content.appendChild(header);

            const detailsGrid = document.createElement('div');
            detailsGrid.className = 'grid grid-cols-2 gap-4 mb-4';

            const details = [
                { icon: 'fas fa-user-group', label: `${vehicle.seats} Seats` },
                { icon: 'fas fa-gear', label: vehicle.transmission },
                { icon: 'fas fa-gas-pump', label: vehicle.fuel },
                { icon: 'fas fa-gauge', label: vehicle.speed }
            ];

            details.forEach(detail => {
                const detailDiv = document.createElement('div');
                detailDiv.className = 'flex items-center text-gray-600';
                const icon = document.createElement('i');
                icon.className = detail.icon + ' mr-2';
                const label = document.createElement('span');
                label.textContent = detail.label;
                detailDiv.appendChild(icon);
                detailDiv.appendChild(label);
                detailsGrid.appendChild(detailDiv);
            });

            content.appendChild(detailsGrid);

            const footer = document.createElement('div');
            footer.className = 'flex justify-between items-center';

            const price = document.createElement('div');
            const priceAmount = document.createElement('span');
            priceAmount.className = 'text-2xl font-bold text-blue-600';
            priceAmount.textContent = `$${vehicle.price}`;
            const priceLabel = document.createElement('span');
            priceLabel.className = 'text-gray-600';
            priceLabel.textContent = '/day';
            price.appendChild(priceAmount);
            price.appendChild(priceLabel);

            footer.appendChild(price);

            const rentButton = document.createElement('a');
            rentButton.className = 'bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 hover:shadow-lg';
            rentButton.textContent = 'Rent Now';
            // WhatsApp URL with vehicle info
            rentButton.href = `https://wa.me/1234567890?text=Hi, I am interested in renting the ${vehicle.name} for $${vehicle.price}/day.`;
            rentButton.target = "_blank";
            footer.appendChild(rentButton);

            content.appendChild(footer);
            card.appendChild(content);
            vehicleCardsContainer.appendChild(card);
        });
}

// Initial call to display vehicles
displayVehicles();

// How It Works Animation
const processSteps = gsap.utils.toArray('.process-step');
processSteps.forEach((step, index) => {
    gsap.from(step, {
        scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.2
    });
});

// Testimonials Animation
const testimonials = gsap.utils.toArray('.testimonial-card');
testimonials.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse"
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        rotationY: 45,
        duration: 1.5,
        ease: "power2.out",
        delay: index * 0.3
    });
});

// Floating animation for icons
gsap.to('.icon-wrapper', {
    y: -10,
    duration: 1.5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    stagger: {
        amount: 1,
        from: "random"
    }
});

// Star rating animation
gsap.utils.toArray('.fa-star').forEach((star, index) => {
    gsap.from(star, {
        scrollTrigger: {
            trigger: star,
            start: "top 80%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: "back.out(1.7)"
    });
});

// Continuous subtle pulse animation for cards
testimonials.forEach(card => {
    gsap.to(card, {
        scale: 1.02,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});
   // Get elements
   const emailInput = document.getElementById('emailInput');
   const subscribeButton = document.getElementById('subscribeButton');
   const message = document.getElementById('message');
   const successMessage = document.getElementById('successMessage');

   // Subscribe button click event
   subscribeButton.addEventListener('click', function(event) {
       event.preventDefault(); // Prevent form submission

       // Validate email
       const email = emailInput.value;
       const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

       if (emailPattern.test(email)) {
           // Simulate successful subscription
           successMessage.classList.remove('hidden');
           message.classList.add('hidden');
           emailInput.value = ''; // Clear the input field
       } else {
           // Show error message
           message.classList.remove('hidden');
           successMessage.classList.add('hidden');
       }
   });