// certificate.js - Contains certificate data and rendering logic with new color theme
// Certificate Data
const certificates = [
    {
      id: 1,
      title: "GIS Workshop",
      event: "May, 2024",
      image: "image/ashok1.png",
      alt: "GIS Workshop Certificate"
    },
    {
      id: 2,
      title: "UAV Drone Surveying",
      event: "May, 2024",
      image: "image/ashok2.png",
      alt: "Drone Surveying Certificate"
    },
    {
      id: 3,
      title: "Google Earth Engine",
      event: "July, 2024",
      image: "image/ashok3.png",
      alt: "Google Earth Engine Certificate"
    },
  ];
  
  // Rendering function - Executes when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const awardContainer = document.getElementById('award-container');
    
    // If the container exists, render all awards
    if (awardContainer) {
      // Generate HTML for each certificate
      const certificatesHTML = certificates.map(cert => {
        // Return complete certificate card HTML with new theme
        return `
        <div class="bg-[#1e293b] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-[#3b82f6]/30">
          <div class="relative overflow-hidden">
            <img src="${cert.image}" alt="${cert.alt}" class="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-[#3b82f6] font-inter font-bold text-xl mb-2">${cert.title}</h3>
            <h4 class="text-gray-400 font-inter text-lg mb-2">${cert.event}</h4>
          </div>
        </div>
        `;
      }).join('');
      
      // Insert all certificates into the container
      awardContainer.innerHTML = certificatesHTML;
      console.log("Certificates rendered successfully!");
    }
  });
  
  // Log a simple message to confirm the script has loaded
  console.log("certificate.js has loaded!");
