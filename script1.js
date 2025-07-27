// Trek data
const treks = [
    {
        id: 'everest-base-camp',
        title: 'Everest Base Camp Trek',
        description: 'The ultimate Himalayan adventure to the base of the world\'s highest peak.',
        region: 'everest',
        difficulty: 'challenging',
        duration: 14,
        durationLabel: '14 days',
        price: '$1,299',
        altitude: '5,364m',
        distance: '130km',
        fitness: 'Good fitness required',
        season: 'Mar-May, Sep-Dec',
        itinerary: [
            { day: 1, title: 'Fly to Lukla, trek to Phakding', description: 'Scenic mountain flight and gentle trek along Dudh Koshi river.' },
            { day: 2, title: 'Phakding to Namche Bazaar', description: 'Cross suspension bridges and climb to the Sherpa capital.' },
            { day: 3, title: 'Acclimatization day in Namche', description: 'Rest day with optional hike to Everest View Hotel.' },
            { day: 4, title: 'Namche to Tengboche', description: 'Visit famous monastery with stunning Everest views.' },
            { day: 5, title: 'Tengboche to Dingboche', description: 'Trek through rhododendron forests to alpine meadows.' },
            { day: 6, title: 'Acclimatization in Dingboche', description: 'Rest day with optional hike to Nangkartshang Peak.' },
            { day: 7, title: 'Dingboche to Lobuche', description: 'Trek past memorials to Everest climbers.' },
            { day: 8, title: 'Lobuche to Gorak Shep, visit EBC', description: 'Reach Everest Base Camp - the highlight of the trek!' },
            { day: 9, title: 'Climb Kala Patthar, return to Pheriche', description: 'Sunrise views from famous viewpoint.' },
            { day: 10, title: 'Pheriche to Namche Bazaar', description: 'Descend through familiar villages.' }
        ],
        reviews: [
            { name: 'John Smith', rating: 5, comment: 'Incredible experience! Our guide Pemba was knowledgeable and kept us safe throughout.' },
            { name: 'Lisa Chen', rating: 5, comment: 'Dream come true! The views were breathtaking and the team was fantastic.' },
            { name: 'Mike Johnson', rating: 4, comment: 'Challenging but rewarding. Great organization and support from the team.' }
        ]
    },
    {
        id: 'annapurna-circuit',
        title: 'Annapurna Circuit Trek',
        description: 'Classic trek through diverse landscapes and cultures around Annapurna massif.',
        region: 'annapurna',
        difficulty: 'moderate',
        duration: 12,
        durationLabel: '12 days',
        price: '$899',
        altitude: '5,416m',
        distance: '165km',
        fitness: 'Moderate fitness required',
        season: 'Mar-May, Sep-Dec',
        itinerary: [
            { day: 1, title: 'Drive to Besisahar, trek to Bhulbhule', description: 'Start the classic circuit trek.' },
            { day: 2, title: 'Bhulbhule to Jagat', description: 'Trek through terraced fields and villages.' },
            { day: 3, title: 'Jagat to Dharapani', description: 'Enter the restricted area with permits.' },
            { day: 4, title: 'Dharapani to Chame', description: 'Experience changing landscapes and culture.' },
            { day: 5, title: 'Chame to Pisang', description: 'First views of Annapurna massif.' },
            { day: 6, title: 'Pisang to Manang', description: 'Trek through pine forests to Manang valley.' },
            { day: 7, title: 'Acclimatization day in Manang', description: 'Rest day with optional hikes.' },
            { day: 8, title: 'Manang to Yak Kharka', description: 'Gradual ascent to higher altitude.' },
            { day: 9, title: 'Yak Kharka to Thorong Phedi', description: 'Prepare for the high pass crossing.' },
            { day: 10, title: 'Cross Thorong La Pass to Muktinath', description: 'Cross the challenging 5,416m pass!' }
        ],
        reviews: [
            { name: 'Sarah Williams', rating: 5, comment: 'Diverse and beautiful trek with amazing cultural experiences.' },
            { name: 'Tom Brown', rating: 4, comment: 'Great circuit trek, well organized with comfortable lodges.' }
        ]
    },
    {
        id: 'langtang-valley',
        title: 'Langtang Valley Trek',
        description: 'Beautiful valley trek close to Kathmandu with stunning mountain views.',
        region: 'langtang',
        difficulty: 'moderate',
        duration: 7,
        durationLabel: '7 days',
        price: '$649',
        altitude: '4,984m',
        distance: '65km',
        fitness: 'Moderate fitness required',
        season: 'Mar-May, Sep-Dec',
        itinerary: [
            { day: 1, title: 'Drive to Syabrubesi', description: 'Scenic drive from Kathmandu to trek starting point.' },
            { day: 2, title: 'Syabrubesi to Lama Hotel', description: 'Trek through lush forests following Langtang river.' },
            { day: 3, title: 'Lama Hotel to Langtang Village', description: 'Enter Langtang valley with mountain views.' },
            { day: 4, title: 'Langtang Village to Kyanjin Gompa', description: 'Reach the beautiful monastery and cheese factory.' },
            { day: 5, title: 'Explore Kyanjin area', description: 'Optional hikes to Kyanjin Ri or Tserko Ri.' },
            { day: 6, title: 'Kyanjin Gompa to Lama Hotel', description: 'Begin descent through the valley.' },
            { day: 7, title: 'Lama Hotel to Syabrubesi', description: 'Return to starting point and drive to Kathmandu.' }
        ],
        reviews: [
            { name: 'Emma Davis', rating: 5, comment: 'Perfect trek for limited time. Beautiful scenery and friendly locals.' },
            { name: 'Alex Kumar', rating: 4, comment: 'Great introduction to Himalayan trekking. Highly recommended!' }
        ]
    },
    {
        id: 'manaslu-circuit',
        title: 'Manaslu Circuit Trek',
        description: 'Off-the-beaten-path trek around the eighth highest mountain in the world.',
        region: 'manaslu',
        difficulty: 'challenging',
        duration: 14,
        durationLabel: '14 days',
        price: '$1,199',
        altitude: '5,106m',
        distance: '177km',
        fitness: 'Good fitness required',
        season: 'Mar-May, Sep-Nov',
        itinerary: [
            { day: 1, title: 'Drive to Soti Khola', description: 'Drive from Kathmandu to trek starting point.' },
            { day: 2, title: 'Soti Khola to Machha Khola', description: 'Trek along Budhi Gandaki river.' },
            { day: 3, title: 'Machha Khola to Jagat', description: 'Continue along the river through gorges.' },
            { day: 4, title: 'Jagat to Deng', description: 'Enter restricted area with special permits.' },
            { day: 5, title: 'Deng to Namrung', description: 'First views of Manaslu peak.' },
            { day: 6, title: 'Namrung to Samagaon', description: 'Tibetan culture and stunning mountain views.' },
            { day: 7, title: 'Acclimatization day in Samagaon', description: 'Rest day with optional monastery visit.' },
            { day: 8, title: 'Samagaon to Samdo', description: 'Continue through Tibetan-influenced villages.' },
            { day: 9, title: 'Samdo to Dharmasala', description: 'Prepare for high pass crossing.' },
            { day: 10, title: 'Cross Larkya La Pass', description: 'Challenge yourself with this spectacular pass!' }
        ],
        reviews: [
            { name: 'David Wilson', rating: 5, comment: 'Incredible trek with fewer crowds. Manaslu is stunning!' },
            { name: 'Sophie Martinez', rating: 4, comment: 'Challenging but rewarding. Great cultural experience.' }
        ]
    },
    {
        id: 'gokyo-lakes',
        title: 'Gokyo Lakes Trek',
        description: 'Alternative to EBC with stunning turquoise lakes and Everest views.',
        region: 'everest',
        difficulty: 'moderate',
        duration: 12,
        durationLabel: '12 days',
        price: '$1,099',
        altitude: '5,357m',
        distance: '95km',
        fitness: 'Moderate to good fitness',
        season: 'Mar-May, Sep-Dec',
        itinerary: [
            { day: 1, title: 'Fly to Lukla, trek to Phakding', description: 'Begin the journey to Gokyo valley.' },
            { day: 2, title: 'Phakding to Namche Bazaar', description: 'Ascend to the Sherpa capital.' },
            { day: 3, title: 'Acclimatization in Namche', description: 'Rest and explore Namche bazaar.' },
            { day: 4, title: 'Namche to Dole', description: 'Take the western route towards Gokyo.' },
            { day: 5, title: 'Dole to Machhermo', description: 'Continue through rhododendron forests.' },
            { day: 6, title: 'Machhermo to Gokyo', description: 'Reach the beautiful Gokyo lakes.' },
            { day: 7, title: 'Climb Gokyo Ri', description: 'Summit for panoramic Everest views.' },
            { day: 8, title: 'Explore Gokyo valley', description: 'Visit all six sacred lakes.' },
            { day: 9, title: 'Gokyo to Dole', description: 'Begin descent back through valley.' },
            { day: 10, title: 'Dole to Namche Bazaar', description: 'Return to familiar territory.' }
        ],
        reviews: [
            { name: 'Rachel Green', rating: 5, comment: 'The lakes are absolutely breathtaking! Less crowded than EBC.' },
            { name: 'Mark Thompson', rating: 5, comment: 'Perfect alternative to EBC with amazing views from Gokyo Ri.' }
        ]
    },
    {
        id: 'upper-mustang',
        title: 'Upper Mustang Trek',
        description: 'Journey to the forbidden kingdom with unique Tibetan culture and landscapes.',
        region: 'annapurna',
        difficulty: 'moderate',
        duration: 10,
        durationLabel: '10 days',
        price: '$1,499',
        altitude: '4,000m',
        distance: '85km',
        fitness: 'Moderate fitness required',
        season: 'Mar-Nov',
        itinerary: [
            { day: 1, title: 'Fly to Jomsom', description: 'Scenic flight to the gateway of Mustang.' },
            { day: 2, title: 'Jomsom to Charang', description: 'Trek through the arid landscape.' },
            { day: 3, title: 'Charang to Lo Manthang', description: 'Reach the walled capital city.' },
            { day: 4, title: 'Explore Lo Manthang', description: 'Visit monasteries and royal palace.' },
            { day: 5, title: 'Day trip to Choser', description: 'Explore ancient caves and gompas.' },
            { day: 6, title: 'Lo Manthang to Ghami', description: 'Trek through typical Mustang landscape.' },
            { day: 7, title: 'Ghami to Samar', description: 'Continue through traditional villages.' },
            { day: 8, title: 'Samar to Jomsom', description: 'Return to Jomsom via different route.' },
            { day: 9, title: 'Explore Jomsom and Muktinath', description: 'Visit sacred temple.' },
            { day: 10, title: 'Fly back to Pokhara', description: 'End the unique cultural journey.' }
        ],
        reviews: [
            { name: 'Jennifer Lee', rating: 5, comment: 'Unique cultural experience! Like stepping back in time.' },
            { name: 'Robert Kim', rating: 4, comment: 'Fascinating trek with incredible Tibetan culture and art.' }
        ]
    }
];

// Blog posts data
const blogPosts = {
    'altitude-sickness': {
        title: 'Complete Guide to Altitude Sickness',
        content: `
                    <h2>Understanding Altitude Sickness</h2>
                    <p>Altitude sickness, also known as Acute Mountain Sickness (AMS), is a condition that can affect anyone traveling to high altitudes above 2,500 meters. Understanding its symptoms, prevention, and treatment is crucial for a safe trekking experience in the Himalayas.</p>
                    
                    <h3>Symptoms to Watch For</h3>
                    <p><strong>Mild AMS symptoms include:</strong></p>
                    <ul>
                        <li>Headache (most common symptom)</li>
                        <li>Nausea and loss of appetite</li>
                        <li>Fatigue and weakness</li>
                        <li>Dizziness or lightheadedness</li>
                        <li>Difficulty sleeping</li>
                    </ul>
                    
                    <p><strong>Severe AMS symptoms (require immediate descent):</strong></p>
                    <ul>
                        <li>Severe headache that doesn't respond to painkillers</li>
                        <li>Vomiting</li>
                        <li>Confusion or altered mental state</li>
                        <li>Loss of coordination (ataxia)</li>
                        <li>Shortness of breath at rest</li>
                    </ul>
                    
                    <h3>Prevention Strategies</h3>
                    <p><strong>Gradual Ascent:</strong> The golden rule is "climb high, sleep low." Don't ascend more than 300-500m per day above 3,000m.</p>
                    
                    <p><strong>Stay Hydrated:</strong> Drink 3-4 liters of water daily. Dehydration increases AMS risk.</p>
                    
                    <p><strong>Avoid Alcohol and Sedatives:</strong> These can worsen symptoms and mask early warning signs.</p>
                    
                    <p><strong>Eat Well:</strong> Maintain a diet high in carbohydrates (70% of calories from carbs).</p>
                    
                    <h3>Treatment</h3>
                    <p>The only cure for altitude sickness is descent. However, mild symptoms can be managed:</p>
                    <ul>
                        <li>Rest and avoid further ascent until symptoms resolve</li>
                        <li>Stay hydrated</li>
                        <li>Use pain relievers for headaches (avoid sedating medications)</li>
                        <li>If symptoms worsen, descend immediately</li>
                    </ul>
                    
                    <h3>When to Descend</h3>
                    <p>Descend immediately if you experience:</p>
                    <ul>
                        <li>Symptoms of severe AMS</li>
                        <li>Symptoms that worsen despite rest</li>
                        <li>Any signs of High Altitude Pulmonary Edema (HAPE) or High Altitude Cerebral Edema (HACE)</li>
                    </ul>
                    
                    <p><em>Remember: It's always better to be safe than sorry. Listen to your body and don't hesitate to descend if needed.</em></p>
                `
    },
    'packing-list': {
        title: 'Ultimate Trekking Packing List',
        content: `
                    <h2>Essential Gear for Nepal Trekking</h2>
                    <p>Proper gear can make the difference between an enjoyable trek and a miserable experience. Here's our comprehensive packing list based on 15+ years of guiding experience.</p>
                    
                    <h3>🥾 Footwear</h3>
                    <ul>
                        <li><strong>Hiking boots:</strong> Broken-in, waterproof, ankle support</li>
                        <li><strong>Camp shoes:</strong> Lightweight sandals or slip-ons</li>
                        <li><strong>Socks:</strong> Merino wool hiking socks (4-5 pairs)</li>
                        <li><strong>Gaiters:</strong> For snow and debris protection</li>
                    </ul>
                    
                    <h3>👕 Clothing (Layering System)</h3>
                    <p><strong>Base Layer:</strong></p>
                    <ul>
                        <li>Merino wool or synthetic long-sleeve shirts (2-3)</li>
                        <li>Thermal underwear (top and bottom)</li>
                        <li>Hiking underwear (3-4 pairs)</li>
                    </ul>
                    
                    <p><strong>Insulation Layer:</strong></p>
                    <ul>
                        <li>Fleece or down jacket</li>
                        <li>Insulated pants (for high altitude)</li>
                    </ul>
                    
                    <p><strong>Shell Layer:</strong></p>
                    <ul>
                        <li>Waterproof/breathable jacket</li>
                        <li>Waterproof pants</li>
                    </ul>
                    
                    <p><strong>Other Clothing:</strong></p>
                    <ul>
                        <li>Hiking pants (2 pairs)</li>
                        <li>Hiking shorts</li>
                        <li>Warm hat and sun hat</li>
                        <li>Gloves (liner and insulated)</li>
                        <li>Neck gaiter or balaclava</li>
                    </ul>
                    
                    <h3>🎒 Gear & Equipment</h3>
                    <p><strong>Can Rent in Kathmandu:</strong></p>
                    <ul>
                        <li>Sleeping bag (-10°C rating)</li>
                        <li>Down jacket</li>
                        <li>Trekking poles</li>
                        <li>Duffle bag (for porter)</li>
                    </ul>
                    
                    <p><strong>Must Bring:</strong></p>
                    <ul>
                        <li>Daypack (30-40L)</li>
                        <li>Headlamp + extra batteries</li>
                        <li>Sunglasses (glacier glasses for high altitude)</li>
                        <li>Water bottles or hydration system</li>
                        <li>Water purification tablets</li>
                        <li>Personal first aid kit</li>
                    </ul>
                    
                    <h3>🧴 Personal Items</h3>
                    <ul>
                        <li>Sunscreen (SPF 50+)</li>
                        <li>Lip balm with SPF</li>
                        <li>Toiletries (biodegradable soap)</li>
                        <li>Quick-dry towel</li>
                        <li>Wet wipes</li>
                        <li>Hand sanitizer</li>
                        <li>Personal medications</li>
                    </ul>
                    
                    <h3>📱 Electronics</h3>
                    <ul>
                        <li>Camera + extra batteries/memory cards</li>
                        <li>Portable charger/power bank</li>
                        <li>Universal adapter</li>
                        <li>Phone (works in most trekking areas)</li>
                    </ul>
                    
                    <h3>💡 Pro Tips</h3>
                    <ul>
                        <li>Pack light - aim for 10-12kg total weight</li>
                        <li>Bring cash (Nepali rupees) for the trek</li>
                        <li>Leave cotton clothes at home - they don't dry</li>
                        <li>Test all gear before your trip</li>
                        <li>Pack important items in your daypack</li>
                    </ul>
                    
                    <p><em>Remember: You can buy or rent most gear in Kathmandu at competitive prices. Focus on bringing personal items and well-fitting boots.</em></p>
                `
    },
    'best-seasons': {
        title: 'Best Seasons for Trekking in Nepal',
        content: `
                    <h2>When to Trek in Nepal: A Seasonal Guide</h2>
                    <p>Nepal offers excellent trekking opportunities year-round, but timing your visit right can make all the difference. Here's our detailed breakdown of each season.</p>
                    
                    <h3>🌸 Spring (March - May)</h3>
                    <p><strong>Weather:</strong> Warm days, cool nights, occasional afternoon clouds</p>
                    <p><strong>Temperature:</strong> 10-20°C at moderate altitudes</p>
                    
                    <p><strong>Pros:</strong></p>
                    <ul>
                        <li>Rhododendron blooms (Nepal's national flower)</li>
                        <li>Clear mountain views</li>
                        <li>Stable weather patterns</li>
                        <li>Great for photography</li>
                    </ul>
                    
                    <p><strong>Cons:</strong></p>
                    <ul>
                        <li>Busier trails</li>
                        <li>Higher accommodation prices</li>
                        <li>Some haze in lower elevations</li>
                    </ul>
                    
                    <p><strong>Best for:</strong> Everest Base Camp, Annapurna Circuit, Langtang Valley</p>
                    
                    <h3>☀️ Summer/Monsoon (June - August)</h3>
                    <p><strong>Weather:</strong> Hot, humid, heavy rainfall</p>
                    <p><strong>Temperature:</strong> 15-25°C, very humid</p>
                    
                    <p><strong>Pros:</strong></p>
                    <ul>
                        <li>Lush green landscapes</li>
                        <li>Fewer trekkers</li>
                        <li>Lower prices</li>
                        <li>Cultural festivals</li>
                    </ul>
                    
                    <p><strong>Cons:</strong></p>
                    <ul>
                        <li>Heavy rain and muddy trails</li>
                        <li>Cloud cover obscures mountain views</li>
                        <li>Risk of landslides</li>
                        <li>Leeches in lower altitudes</li>
                    </ul>
                    
                    <p><strong>Best for:</strong> Upper Mustang (rain shadow area), cultural tours</p>
                    
                    <h3>🍂 Autumn (September - November)</h3>
                    <p><strong>Weather:</strong> Clear skies, stable weather, cool nights</p>
                    <p><strong>Temperature:</strong> 5-20°C depending on altitude</p>
                    
                    <p><strong>Pros:</strong></p>
                    <ul>
                        <li>Crystal clear mountain views</li>
                        <li>Perfect weather conditions</li>
                        <li>Excellent visibility for photography</li>
                        <li>Comfortable temperatures</li>
                        <li>Major festivals (Dashain, Tihar)</li>
                    </ul>
                    
                    <p><strong>Cons:</strong></p>
                    <ul>
                        <li>Peak season crowds</li>
                        <li>Higher accommodation costs</li>
                        <li>Need to book in advance</li>
                    </ul>
                    
                    <p><strong>Best for:</strong> All major treks - this is peak season!</p>
                    
                    <h3>❄️ Winter (December - February)</h3>
                    <p><strong>Weather:</strong> Cold, dry, clear skies</p>
                    <p><strong>Temperature:</strong> -10 to 10°C depending on altitude</p>
                    
                    <p><strong>Pros:</strong></p>
                    <ul>
                        <li>Incredible mountain clarity</li>
                        <li>Fewer crowds</li>
                        <li>Lower prices</li>
                        <li>Cultural immersion opportunities</li>
                    </ul>
                    
                    <p><strong>Cons:</strong></p>
                    <ul>
                        <li>Very cold at high altitudes</li>
                        <li>Some high passes may be closed</li>
                        <li>Shorter daylight hours</li>
                        <li>Some lodges closed in remote areas</li>
                    </ul>
                    
                    <p><strong>Best for:</strong> Lower altitude treks, Gokyo Lakes, Langtang Valley</p>
                    
                    <h3>🎯 Our Recommendations</h3>
                    <p><strong>First-time trekkers:</strong> October-November or March-April</p>
                    <p><strong>Photography enthusiasts:</strong> October-November for crystal clear views</p>
                    <p><strong>Budget travelers:</strong> December-February or June-August</p>
                    <p><strong>Crowd avoiders:</strong> December-February or late May</p>
                    <p><strong>Rhododendron lovers:</strong> March-May (peak bloom in April)</p>
                    
                    <h3>📅 Trek-Specific Timing</h3>
                    <p><strong>Everest Base Camp:</strong> Best in Oct-Nov and Mar-May</p>
                    <p><strong>Annapurna Circuit:</strong> Year-round, but avoid heavy monsoon</p>
                    <p><strong>Upper Mustang:</strong> Mar-Nov (best during monsoon elsewhere)</p>
                    <p><strong>Manaslu Circuit:</strong> Sep-Nov and Mar-May only</p>
                    
                    <p><em>Remember: Weather patterns are changing due to climate change. Always check current conditions and be prepared for unexpected weather!</em></p>
                `
    }
};

// Animation and utility functions
const animationUtils = {
    // Smooth scroll animation
    smoothScroll: (targetY, duration = 800) => {
        const startY = window.pageYOffset;
        const difference = targetY - startY;
        const startTime = performance.now();

        function step(currentTime) {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const ease = animationUtils.easeInOutCubic(progress);
            window.scrollTo(0, startY + difference * ease);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    },

    // Easing function for smooth animations
    easeInOutCubic: (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },

    // Stagger animation for multiple elements
    staggerAnimation: (elements, delay = 100) => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

                requestAnimationFrame(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                });
            }, index * delay);
        });
    },

    // Fade in animation
    fadeIn: (element, duration = 600) => {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease-in-out`;

        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
    },

    // Scale in animation
    scaleIn: (element, duration = 400) => {
        element.style.transform = 'scale(0.8)';
        element.style.opacity = '0';
        element.style.transition = `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;

        requestAnimationFrame(() => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        });
    },

    // Slide animations
    slideInFromLeft: (element, duration = 600) => {
        element.style.transform = 'translateX(-50px)';
        element.style.opacity = '0';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;

        requestAnimationFrame(() => {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
        });
    },

    slideInFromRight: (element, duration = 600) => {
        element.style.transform = 'translateX(50px)';
        element.style.opacity = '0';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;

        requestAnimationFrame(() => {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
        });
    },

    // Loading animation
    showLoadingSpinner: (element) => {
        element.innerHTML = `
                    <div style="display: flex; justify-content: center; align-items: center; padding: 2rem;">
                        <div style="width: 40px; height: 40px; border: 3px solid #f3f3f3; border-top: 3px solid #2C5530; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    </div>
                `;
    },

    // Parallax effect
    parallax: (element, speed = 0.5) => {
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    },

    // Intersection Observer for scroll animations
    createScrollObserver: (callback, options = {}) => {
        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        return new IntersectionObserver(callback, { ...defaultOptions, ...options });
    }
};

// Current section state
let currentSection = 'home';
let currentTrek = null;
let scrollObserver = null;

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    renderTreks();
    setupEventListeners();
    setupScrollAnimations();
    showLoadingAnimation();
});

// Show loading animation on page load
function showLoadingAnimation() {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #2C5530 0%, #4A7C59 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                opacity: 1;
                transition: opacity 0.5s ease;
            `;

    loadingOverlay.innerHTML = `
                <div style="text-align: center; color: white;">
                    <div style="width: 60px; height: 60px; border: 4px solid rgba(255,255,255,0.3); border-top: 4px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1rem;"></div>
                    <h3 style="margin: 0; font-size: 1.2rem; opacity: 0.9;">Loading Adventure...</h3>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;

    document.body.appendChild(loadingOverlay);

    // Remove loading screen after 2 seconds
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loadingOverlay);
        }, 500);
    }, 2000);
}

// Initialize animations
function initializeAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
                .fade-in-up {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .fade-in-up.animate {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .fade-in-left {
                    opacity: 0;
                    transform: translateX(-50px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .fade-in-left.animate {
                    opacity: 1;
                    transform: translateX(0);
                }
                
                .fade-in-right {
                    opacity: 0;
                    transform: translateX(50px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .fade-in-right.animate {
                    opacity: 1;
                    transform: translateX(0);
                }
                
                .scale-in {
                    opacity: 0;
                    transform: scale(0.8);
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                
                .scale-in.animate {
                    opacity: 1;
                    transform: scale(1);
                }
                
                .trek-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }
                
                .trek-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                
                .trek-card:active {
                    transform: translateY(-4px) scale(1.01);
                }
                
                .btn {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }
                
                .btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }
                
                .btn:hover::before {
                    left: 100%;
                }
                
                .btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                }
                
                .section-transition {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .section-transition.active {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .navbar {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .nav-link {
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -5px;
                    left: 50%;
                    background: #FF6B35;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: translateX(-50%);
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .review-item {
                    transition: all 0.3s ease;
                }
                
                .review-item:hover {
                    transform: translateX(10px);
                    background: rgba(244, 247, 250, 0.8);
                }
                
                .day-item {
                    transition: all 0.3s ease;
                    border-left: 3px solid transparent;
                    padding-left: 1rem;
                }
                
                .day-item:hover {
                    border-left-color: #FF6B35;
                    background: rgba(255, 107, 53, 0.05);
                    transform: translateX(5px);
                }
                
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }
                
                .pulse-animation {
                    animation: pulse 2s infinite;
                }
                
                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% {
                        transform: translate3d(0,0,0);
                    }
                    40%, 43% {
                        transform: translate3d(0,-8px,0);
                    }
                    70% {
                        transform: translate3d(0,-4px,0);
                    }
                    90% {
                        transform: translate3d(0,-2px,0);
                    }
                }
                
                .bounce-animation {
                    animation: bounce 1s infinite;
                }
            `;
    document.head.appendChild(style);
}

// Setup event listeners
function setupEventListeners() {
    // Navbar scroll effect with smooth transition
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Setup filters with animation
    const regionFilter = document.getElementById('regionFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const durationFilter = document.getElementById('durationFilter');

    if (regionFilter) regionFilter.addEventListener('change', animatedFilterTreks);
    if (difficultyFilter) difficultyFilter.addEventListener('change', animatedFilterTreks);
    if (durationFilter) durationFilter.addEventListener('change', animatedFilterTreks);

    // Setup forms
    const contactForm = document.getElementById('contactForm');
    const bookingForm = document.getElementById('bookingForm');

    if (contactForm) contactForm.addEventListener('submit', handleContactForm);
    if (bookingForm) bookingForm.addEventListener('submit', handleBookingForm);

    // Add smooth scrolling to all internal links
    document.addEventListener('click', function (e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                animationUtils.smoothScroll(target.offsetTop - 80);
            }
        }
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    scrollObserver = animationUtils.createScrollObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    // Observe elements for scroll animations
    const observeElements = () => {
        const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
        elements.forEach(el => scrollObserver.observe(el));
    };

    // Initial observation
    setTimeout(observeElements, 100);
}

// Section navigation with smooth transitions
function showSection(sectionId) {
    // Add exit animation to current section
    const currentSectionEl = document.getElementById(currentSection);
    if (currentSectionEl) {
        currentSectionEl.style.opacity = '0';
        currentSectionEl.style.transform = 'translateY(-20px)';
    }

    setTimeout(() => {
        // Hide all sections
        const sections = document.querySelectorAll('section, .hero');
        sections.forEach(section => {
            if (section.id === 'home') {
                section.style.display = section.id === sectionId ? 'flex' : 'none';
            } else {
                section.classList.toggle('section-hidden', section.id !== sectionId);
            }
        });

        currentSection = sectionId;

        // Add entrance animation to new section
        const newSectionEl = document.getElementById(sectionId);
        if (newSectionEl) {
            newSectionEl.style.opacity = '0';
            newSectionEl.style.transform = 'translateY(20px)';

            requestAnimationFrame(() => {
                newSectionEl.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                newSectionEl.style.opacity = '1';
                newSectionEl.style.transform = 'translateY(0)';
            });
        }

        // Smooth scroll to top
        animationUtils.smoothScroll(0);

        // Re-observe elements for animations
        setTimeout(() => {
            const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
            elements.forEach(el => {
                el.classList.remove('animate');
                scrollObserver.observe(el);
            });
        }, 100);
    }, 200);
}

// Render trek cards with stagger animation
function renderTreks(filteredTreks = treks) {
    const trekGrid = document.getElementById('trekGrid');
    if (!trekGrid) return;

    // Fade out existing cards
    const existingCards = trekGrid.querySelectorAll('.trek-card');
    existingCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(-20px)';
        }, index * 50);
    });

    setTimeout(() => {
        trekGrid.innerHTML = '';

        filteredTreks.forEach((trek, index) => {
            const trekCard = document.createElement('div');
            trekCard.className = 'trek-card fade-in-up';
            trekCard.onclick = () => showTrekDetail(trek.id);

            trekCard.innerHTML = `
                        <div class="trek-image"></div>
                        <div class="trek-info">
                            <div class="trek-title">${trek.title}</div>
                            <div class="trek-description">${trek.description}</div>
                            <div class="trek-details">
                                <div class="trek-meta">
                                    <span class="meta-item">${trek.durationLabel}</span>
                                    <span class="meta-item">${trek.difficulty}</span>
                                    <span class="meta-item">${trek.altitude}</span>
                                </div>
                                <div class="trek-price">${trek.price}</div>
                            </div>
                        </div>
                    `;

            // Add stagger animation
            trekCard.style.animationDelay = `${index * 0.1}s`;

            trekGrid.appendChild(trekCard);
        });

        // Animate in new cards
        setTimeout(() => {
            const newCards = trekGrid.querySelectorAll('.trek-card');
            animationUtils.staggerAnimation(newCards, 100);
        }, 100);
    }, existingCards.length * 50 + 200);
}

// Animated filter treks
function animatedFilterTreks() {
    const regionFilter = document.getElementById('regionFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const durationFilter = document.getElementById('durationFilter');

    if (!regionFilter || !difficultyFilter || !durationFilter) return;

    const region = regionFilter.value;
    const difficulty = difficultyFilter.value;
    const duration = durationFilter.value;

    let filteredTreks = treks.filter(trek => {
        const regionMatch = !region || trek.region === region;
        const difficultyMatch = !difficulty || trek.difficulty === difficulty;

        let durationMatch = true;
        if (duration === 'short') durationMatch = trek.duration <= 7;
        else if (duration === 'medium') durationMatch = trek.duration >= 8 && trek.duration <= 14;
        else if (duration === 'long') durationMatch = trek.duration >= 15;

        return regionMatch && difficultyMatch && durationMatch;
    });

    renderTreks(filteredTreks);
}

// Filter treks (keeping original for compatibility)
function filterTreks() {
    animatedFilterTreks();
}

// Show trek detail with enhanced animations
function showTrekDetail(trekId) {
    const trek = treks.find(t => t.id === trekId);
    if (!trek) return;

    currentTrek = trek;

    // Populate trek detail page with animations
    const detailTitle = document.getElementById('detailTitle');
    const detailSubtitle = document.getElementById('detailSubtitle');

    if (detailTitle) {
        detailTitle.textContent = trek.title;
        detailTitle.className = 'fade-in-up';
    }

    if (detailSubtitle) {
        detailSubtitle.textContent = trek.description;
        detailSubtitle.className = 'fade-in-up';
    }

    const detailDescription = document.getElementById('detailDescription');
    if (detailDescription) {
        detailDescription.innerHTML = `
                    <h3 class="fade-in-left">About This Trek</h3>
                    <p class="fade-in-left">${trek.description} This ${trek.durationLabel} adventure takes you through some of Nepal's most spectacular mountain scenery, reaching a maximum altitude of ${trek.altitude}.</p>
                    <p class="fade-in-left">This trek requires ${trek.fitness.toLowerCase()} and covers approximately ${trek.distance} of mountain trails. The best seasons to undertake this journey are ${trek.season}.</p>
                `;
    }

    // Populate itinerary with stagger animation
    const itineraryContent = document.getElementById('itineraryContent');
    if (itineraryContent) {
        itineraryContent.innerHTML = '';
        trek.itinerary.forEach((day, index) => {
            const dayItem = document.createElement('div');
            dayItem.className = 'day-item fade-in-right';
            dayItem.style.animationDelay = `${index * 0.1}s`;
            dayItem.innerHTML = `
                        <h4>Day ${day.day}: ${day.title}</h4>
                        <p>${day.description}</p>
                    `;
            itineraryContent.appendChild(dayItem);
        });
    }

    // Populate meta information
    const trekMeta = document.getElementById('trekMeta');
    if (trekMeta) {
        trekMeta.innerHTML = `
                    <li class="scale-in"><strong>Duration:</strong> ${trek.durationLabel}</li>
                    <li class="scale-in"><strong>Difficulty:</strong> ${trek.difficulty}</li>
                    <li class="scale-in"><strong>Max Altitude:</strong> ${trek.altitude}</li>
                    <li class="scale-in"><strong>Distance:</strong> ${trek.distance}</li>
                    <li class="scale-in"><strong>Fitness Level:</strong> ${trek.fitness}</li>
                    <li class="scale-in"><strong>Best Season:</strong> ${trek.season}</li>
                    <li class="scale-in"><strong>Price:</strong> ${trek.price}</li>
                `;
    }

    // Populate reviews with animation
    const reviewsContent = document.getElementById('reviewsContent');
    if (reviewsContent) {
        reviewsContent.innerHTML = '';
        trek.reviews.forEach((review, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item fade-in-up';
            reviewItem.style.animationDelay = `${index * 0.2}s`;
            reviewItem.innerHTML = `
                        <div class="review-header">
                            <strong>${review.name}</strong>
                            <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                        </div>
                        <p>${review.comment}</p>
                    `;
            reviewsContent.appendChild(reviewItem);
        });
    }

    showSection('trek-detail');
}

// Show blog post with animation
function showBlogPost(postId) {
    const post = blogPosts[postId];
    if (!post) return;

    const blogPostContent = document.getElementById('blogPostContent');
    if (blogPostContent) {
        blogPostContent.innerHTML = `
                    <h1 class="fade-in-up">${post.title}</h1>
                    <div class="fade-in-up">${post.content}</div>
                `;
    }

    showSection('blog-post');
}

// Toggle FAQ with smooth animation
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const isActive = answer.classList.contains('active');

    // Close all FAQ answers with animation
    document.querySelectorAll('.faq-answer').forEach(ans => {
        if (ans !== answer) {
            ans.style.maxHeight = '0';
            ans.style.opacity = '0';
            ans.classList.remove('active');
        }
    });

    // Toggle current answer with smooth animation
    if (!isActive) {
        answer.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';

        // Add bounce effect to button
        button.classList.add('bounce-animation');
        setTimeout(() => button.classList.remove('bounce-animation'), 1000);
    } else {
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        answer.classList.remove('active');
    }
}

// Enhanced form handling with animations
// function handleContactForm(e) {
//     e.preventDefault();

//     const submitButton = e.target.querySelector('button[type="submit"]');
//     const originalText = submitButton.textContent;

//     // Show loading state
//     submitButton.textContent = 'Sending...';
//     submitButton.disabled = true;
//     submitButton.classList.add('pulse-animation');

//     // Get form data
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);

//     // Simulate form submission
//     console.log('Contact form submitted:', data);

//     setTimeout(() => {
//         // Show success message with animation
//         const successMessage = document.getElementById('contactSuccess');
//         if (successMessage) {
//             successMessage.style.display = 'block';
//             animationUtils.scaleIn(successMessage);
//         }

//         // Reset form and button
//         e.target.reset();
//         submitButton.textContent = originalText;
//         submitButton.disabled = false;
//         submitButton.classList.remove('pulse-animation');

//         // Hide success message after 5 seconds
//         setTimeout(() => {
//             if (successMessage) {
//                 successMessage.style.opacity = '0';
//                 setTimeout(() => {
//                     successMessage.style.display = 'none';
//                     successMessage.style.opacity = '1';
//                 }, 300);
//             }
//         }, 5000);
//     }, 1500);
// }


        function handleContactForm(e) {
            e.preventDefault();
            
            const submitButton = e.target.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.style.opacity = '0.7';
            
            // Get form data
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            // Log form data
            console.log('Contact form submitted:', data);
            
            setTimeout(() => {
                // Create email content
                const subject = `Trek Inquiry from ${data.name}`;
                const body = `New Trek Inquiry Details:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Interested Trek: ${data['trek-interest'] || 'Not specified'}  
Preferred Travel Date: ${data['travel-date'] || 'Not specified'}

Message:
${data.message || 'No message provided'}

---
This inquiry was sent from Himalaya Adventures website.
Submitted on: ${new Date().toLocaleString()}`;

                // Create mailto link
                const mailtoLink = `mailto:vishubisht701@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message
                const successMessage = document.getElementById('contactSuccess');
                if (successMessage) {
                    successMessage.style.display = 'block';
                    successMessage.style.transform = 'scale(0.8)';
                    successMessage.style.opacity = '0';
                    
                    // Animate success message
                    setTimeout(() => {
                        successMessage.style.transition = 'all 0.3s ease';
                        successMessage.style.transform = 'scale(1)';
                        successMessage.style.opacity = '1';
                    }, 50);
                }
                
                // Reset form and button
                e.target.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (successMessage) {
                        successMessage.style.opacity = '0';
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                            successMessage.style.opacity = '1';
                        }, 300);
                    }
                }, 5000);
            }, 1500);
        }
    

// Make sure the form uses this handler
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// Enhanced booking form handling
function handleBookingForm(e) {
    e.preventDefault();

    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    // Show loading state
    submitButton.textContent = 'Processing...';
    submitButton.disabled = true;
    submitButton.classList.add('pulse-animation');

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    console.log('Booking form submitted:', data);

    setTimeout(() => {
        // Show success message with animation
        const successMessage = document.getElementById('bookingSuccess');
        if (successMessage) {
            successMessage.style.display = 'block';
            animationUtils.scaleIn(successMessage);
        }

        // Reset form and button
        e.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('pulse-animation');

        // Hide success message after 5 seconds
        setTimeout(() => {
            if (successMessage) {
                successMessage.style.opacity = '0';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    successMessage.style.opacity = '1';
                }, 300);
            }
        }, 5000);
    }, 2000);
}

// Enhanced mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            const isVisible = navLinks.style.display === 'flex';

            if (isVisible) {
                navLinks.style.opacity = '0';
                navLinks.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    navLinks.style.display = 'none';
                }, 300);
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.opacity = '0';
                navLinks.style.transform = 'translateY(-20px)';

                requestAnimationFrame(() => {
                    navLinks.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    navLinks.style.opacity = '1';
                    navLinks.style.transform = 'translateY(0)';
                });
            }
        }
    });
}

// Add parallax effect to hero section (if exists)
window.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    if (hero) {
        animationUtils.parallax(hero, 0.3);
    }
});

// Add typing effect for dynamic text (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Expose functions to global scope for compatibility
window.showSection = showSection;
window.showTrekDetail = showTrekDetail;
window.showBlogPost = showBlogPost;
window.toggleFAQ = toggleFAQ;
window.filterTreks = filterTreks;