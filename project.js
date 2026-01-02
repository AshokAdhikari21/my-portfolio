// projects.js - Contains both project data and rendering logic
// Project Data
const projects = [
  {
    id: 1,
    title: "Landslide Suspceptibility Mapping",
    description:
      "This project focuses on mapping landslide susceptibility in the Butwal-Tansen section of the Siddhartha Highway using three statistical and machine learning models: Frequency Ratio (FR), Logistic Regression (LR), and Random Forest (RF). A landslide inventory was created using historical landslide data, and various conditioning factors like slope, geology, land use, and rainfall were analyzed. Each model was applied to identify high-risk areas and evaluate their predictive accuracy. The results were validated using ROC curves and AUC values. Among the models, Random Forest showed the highest prediction performance. The final susceptibility maps can support disaster risk management and infrastructure planning in the region.",
    image: "image/project.jpg",
    tags: ["Remote Sensing", "ArcGis"],
    github: "",
    demo: "#"
  },
  {
    id: 2,
    title: "Landuse Planning Project",
    description:
      "This project focuses on sustainable landuse planning to optimize the allocation of land resources for various socio-economic and environmental needs. Using GIS and remote sensing tools, current land use patterns were analyzed, and suitability analysis was conducted for residential, agricultural, industrial, and conservation zones. Key factors such as slope, soil type, accessibility, and proximity to infrastructure were considered. Multi-criteria decision analysis (MCDA) was used to prioritize land suitability. The final land use plan aims to support balanced development, reduce environmental degradation, and guide future urban expansion. Interactive spatial layers and thematic maps were generated to visualize results effectively. This project demonstrates how geospatial technologies can be used for data-driven policy-making and sustainable land management.",
    image: "image/Landuse.jpg",
    tags: ["ArcGIS"],
    github: "",
    demo: "#"
  },
  {
    id: 3,
    title: "Engineering Survey Project",
    description:
      "Executed comprehensive field surveys during academic training using Total Station, Theodolite, GNSS, and levelling equipment. The project involved capturing topographic and cadastral data for real-world mapping scenarios. Total Station was used for precise angle and distance measurements, while GNSS provided accurate georeferencing. Levelling was applied for elevation modeling and contour mapping. Additionally, drone-based photogrammetry and GPS surveys were conducted to enhance spatial data accuracy and coverage. Final outputs such as topographic maps, parcel boundaries, and elevation profiles—were produced using GIS software, supporting applications in land administration, urban planning, and infrastructure development.",


    image: "image/Engineering_Survey.jpg",
    tags: ["Arcmap", "TS"],
    github: "",
    demo: ""
  }
];

// Rendering function - Make sure this executes after the DOM is completely loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded, running projects.js...");

  const projectContainer = document.getElementById("project-container");
  

  if (projectContainer) {
    console.log("Project container found, rendering projects...");

    try {
      const projectsHTML = projects
        .map((project) => {
          const tagsHTML = project.tags
            .map(
              (tag) =>
                `<span class="bg-[#E06031] text-white text-xs px-2 py-1 rounded">${tag}</span>`
            )
            .join(" ");

          const githubLink =
            project.github &&
            project.github.trim() !== "#" &&
            project.github.trim() !== ""
              ? `
            <a href="${project.github}" target="_blank" class="text-gray-400 hover:text-[#E06031] transition-colors duration-300">
              <i class="fab fa-github"></i>
            </a>`
              : "";

          const demoLink =
            project.demo &&
            project.demo.trim() !== "#" &&
            project.demo.trim() !== ""
              ? `
            <a href="${project.demo}" target="_blank" class="text-gray-400 hover:text-[#E06031] transition-colors duration-300">
              <i class="fas fa-external-link-alt"></i>
            </a>`
              : "";

          const actionIcons =
            githubLink || demoLink
              ? `<div class="flex space-x-3">${githubLink}${demoLink}</div>`
              : "";

          return `
          <div class="group bg-[#252525] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
            <div class="relative overflow-hidden">
              <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div class="absolute top-4 right-4 space-x-2">
                ${tagsHTML}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-[#E06031] font-poppins font-bold text-xl mb-2">${project.title}</h3>
              <p class="text-gray-400 font-poppins font-medium text-sm mb-4">${project.description}</p>
              <div class="flex justify-between items-center">
                ${actionIcons}
              </div>
            </div>
          </div>
        `;
        })
        .join("");

      projectContainer.innerHTML = projectsHTML;
      console.log("Projects rendered successfully!");
    } catch (error) {
      console.error("Error rendering projects:", error);
    }
  } else {
    console.error(
      "Project container not found! Make sure the element with id='project-container' exists in the DOM."
    );
  }
});

// Add a window.onload handler as a backup to ensure scripts are loaded properly
window.onload = function () {
  console.log("Window loaded, checking if projects were rendered...");
  const projectContainer = document.getElementById("project-container");
  if (projectContainer && projectContainer.innerHTML.trim() === "") {
    console.log("Project container is empty, attempting to render projects again...");
    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);
  }
};

console.log("projects.js has loaded!");

