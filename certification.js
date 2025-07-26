// awards.js - Contains both award data and rendering logic
// Award Data
const awards = [
    {
      id: 1,
      title: "Gis Workshop",
      event: "May, 2024",
      image: "image/ashok1.png",
      alt: "Training Section"
      
    },
    {
      id: 2,
      title: "UAV Drone Surveying",
      event: "May, 2024",
      image: "image/ashok2.png",
      alt: "Training Section"
    },
    {
      id: 3,
      title: "Google Earth Engine",
      event: "July, 2024",
      image: "image/ashok3.png",
      alt: "Training Section"
      
    },

  ];
  
  // Rendering function - Executes when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const awardContainer = document.getElementById('award-container');
    
    // If the container exists, render all awards
    if (awardContainer) {
      // Generate HTML for each award
      const awardsHTML = awards.map(award => {
        // Return complete award card HTML
        return `
        <div class="bg-[#252525] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="${award.image}" alt="${award.alt}" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-[#E06031] font-poppins font-bold text-xl mb-2 tracking-mid-wide">${award.title}</h3>
            <h4 class="text-white font-poppins text-lg mb-2">${award.event}</h4>
          </div>
        </div>
        `;
      }).join('');
      
      // Insert all awards into the container
      awardContainer.innerHTML = awardsHTML;
    }
  });
  
  // Log a simple message to confirm the script has loaded
  console.log("awards.js has loaded!");