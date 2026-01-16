const communityData = [
    {
        title: "Field Survey",
        event: "Bachelor-Level Academic Field Work",
        date: "July 2023",
        description: "Completed the Survey Camp 2080 as part of hands-on training in Engineering Surveying with the Department of Geomatics Engineering, IOE Paschimanchal Campus. Conducted fieldwork along Kali-khola and around Paschimanchal Campus, applying theoretical knowledge to real-world surveying tasks. This experience strengthened our skills, accuracy, and professionalism in surveying practice.",
        image: "image/Poster.jpg"
    },
   
    {
        title: "Data collection for Landuse Planning",
        event: "Municipal Land Use Project",
        date: "August 2024",
        description: "Participated in municipal land use planning under the Ministry of Land Management guidelines. Conducted data collection in ChauriDeurali, KavrePalanchowk, and Khaptadchanna, Bajhang using ArcGIS and satellite imagery. Collaborated with local stakeholders to map land cover and identify key ecological areas, supporting sustainable development and informed decision-making.",
        image: "image/community/design-lead.jpg"
    },
    {
        title: "Remote Sensing and Gis:",
        event: "Final Year Project",
        date: "March 2025",
        description: "Conducted landslide susceptibility mapping for the Butwal–Tansen section of Siddhartha Highway using Frequency Ratio, Logistic Regression, and Random Forest models. Applied remote sensing and GIS techniques to analyze environmental changes and support hazard assessment. This project enhanced my skills in spatial modeling and disaster risk management.",
        image: "image/Poster.jpg"
    },

    {
        title: "Geospatial Mapping",
        event: "Academic",
        date: "",
        description: "Assisted in GIS data processing, spatial analysis, and mapping for ongoing geomatics projects, gaining valuable practical industry experience. Conducted GPS surveys to collect accurate spatial data and prepared detailed maps for various applications. This experience strengthened my technical skills and understanding of real-world geomatics workflows.",
        image: "image/community/emcee.jpg"
    },
    {
        title:"Municipal Digital Profile",
        event: "Freelancer Work",
        date: "June 2025",
        description: "Developed a digital municipal profile using GIS tools. Collected, processed, and visualized spatial data for infrastructure and land use planning. Created thematic maps to support local governance. Improved skills in GIS mapping and community-level data management. Ensured data accuracy through field verification and stakeholder consultation.",
        image: "image/community/emcee.jpg"
    },
];

function loadCommunityItems() {
    const container = document.getElementById('community-container');
    if (!container) return;

    communityData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'group relative overflow-hidden rounded-lg bg-[#1e293b] transform transition-all duration-300 hover:scale-105 p-4 w-full sm:w-[48%] lg:w-[31%]';

        card.innerHTML = `
            <div class="flex flex-col justify-start h-full">
                <span class="text-[#3b82f6] font-researcher text-sm">${item.date}</span>
                <h3 class="text-white font-bold text-xl mt-2 mb-1 font-researcher">${item.title}</h3>
                <p class="text-gray-300 text-sm mb-2 leading-relaxed">${item.description}</p>
                <h4 class="text-[#3b82f6] text-md font-medium">${item.event}</h4>
            </div>
        `;

        container.appendChild(card);
    });
}

// Load community items when the DOM is ready
document.addEventListener('DOMContentLoaded', loadCommunityItems);
