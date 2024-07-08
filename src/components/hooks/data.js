export const events = [
    {
        title:"Wedding - Custom Made Table",
        subTitle:"Event Management",
        src:"./assets/event/event1.webp"
    },
    {
        title:"Wedding - Rustic Theme Setup",
        subTitle:"Event Management",
        src:"./assets/event/event2.webp"
    },
    {
        title:"Wedding - Chandeliers",
        subTitle:"Event Management",
        src:"./assets/event/event3.webp"
    },
    {
        title:"Wedding - Rustic Theme",
        subTitle:"Event Management",
        src:"./assets/event/event4.webp"
    },
    {
        title:"Wedding - Custom Flooring",
        subTitle:"Event Management",
        src:"./assets/event/event5.webp"
    },
    {
        title:"Wedding - Entertainment",
        subTitle:"Event Management",
        src:"./assets/event/event6.webp"
    },
    {
        title:"Custom Made Arch",
        subTitle:"Event Management",
        src:"./assets/event/event7.webp"
    },
    {
        title:"Decorative Chair",
        subTitle:"Event Management",
        src:"./assets/event/event8.webp"
    },
    {
        title:"Outdoor Private Event Setup",
        subTitle:"Event Management",
        src:"./assets/event/event9.webp"
    },
    {
        title:"Party - Custom Bar/Dj Booth",
        subTitle:"Event Management",
        src:"./assets/event/event10.webp"
    },
    {
        title:"Music Studio Production Setup",
        subTitle:"Event Management",
        src:"./assets/event/event11.webp"
    }
]

export const arts = [
    {
        title:"Cable Back Style",
        subTitle:"Art department",
        src:"./assets/art/art1.webp"
    },
    {
        title:"Arabic Tent",
        subTitle:"Art department",
        src:"./assets/art/art2.webp"
    },
    {
        title:"Living Room",
        subTitle:"Art department",
        src:"./assets/art/art3.webp"
    },
    {
        title:"Old Souk - Clay Pots",
        subTitle:"Art department",
        src:"./assets/art/art4.webp"
    },
    {
        title:"Tuttuk",
        subTitle:"Art department",
        src:"./assets/art/art5.webp"
    },
    {
        title:"Bedouin Resting Shade",
        subTitle:"Art department",
        src:"./assets/art/art6.webp"
    },
    {
        title:"Nescafe Purple Set",
        subTitle:"Art department",
        src:"./assets/art/art7.webp"
    },
    {
        title:"Living Room Setup",
        subTitle:"Art department",
        src:"./assets/art/art8.webp"
    },
    {
        title:"Aesthetic Work of Art",
        subTitle:"Art department",
        src:"./assets/art/art9.webp"
    },
    {
        title:"Children Room Setup",
        subTitle:"Art department",
        src:"./assets/art/art10.webp"
    },
    {
        title:"Modern Dining Room Setup",
        subTitle:"Art department",
        src:"./assets/art/art11.webp"
    },
    {
        title:"Gaming Room Setup",
        subTitle:"Art department",
        src:"./assets/art/art12.webp"
    },
    {
        title:"Stylish Modern dining Setup",
        subTitle:"Art department",
        src:"./assets/art/art13.webp"
    },
    {
        title:"Human Billiard Table Fabrication",
        subTitle:"Art department",
        src:"./assets/art/art14.webp"
    },
    {
        title:"Custom Car - Upside down",
        subTitle:"Art department",
        src:"./assets/art/art15.webp"
    },
    {
        title:"Skater Ramp - Fabrication",
        subTitle:"Art department",
        src:"./assets/art/art16.webp"
    },
    {
        title:"Old Souk Table",
        subTitle:"Art department",
        src:"./assets/art/art17.webp"
    },
    {
        title:"Hospital Bed Set",
        subTitle:"Art department",
        src:"./assets/art/art18.webp"
    },
    {
        title:"Old Souk - Pots, Baskets",
        subTitle:"Art department",
        src:"./assets/art/art19.webp"
    },
    {
        title:"Old Souk - Arabic Carpets",
        subTitle:"Art department",
        src:"./assets/art/art20.webp"
    },
]

export const ads = [
    {
        title:"Ice Cream & Coffee Cart",
        subTitle:"Advertisement",
        src:"./assets/ad/ad2.webp"
    },
    {
        title:"Coke Studio Setup",
        subTitle:"Advertisement",
        src:"./assets/ad/ad1.webp"
    },
    {
        title:"Popcorn Booth",
        subTitle:"Advertisement",
        src:"./assets/ad/ad3.webp"
    },
    {
        title:"Sports Studio",
        subTitle:"Advertisment",
        src:"./assets/ad/ad4.webp"
    },
]

export const Gallerys = [ events, arts, ads ]

export const findGallery = ["event-management","art-department","advertisement"]

export const combinedArray = [...events, ...arts, ...ads];

export const className = "text-[5vw] mob:text-[8vw] font-[mon] uppercase leading-[1.1em] mob:leading-[1.2em] tracking=[0px]"

export const texts = [ <h1 className={className}>Crafting Spectacular Events</h1>, <h2 className={className}>Art Department Showcase</h2>, <h2 className={className}>Explore Our Advertising Creations</h2> ]

// Function to shuffle the combined array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the combined array
export const shuffledArray = shuffleArray(combinedArray);

