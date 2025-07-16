const gallery = document.getElementById("gallery");
const prefix = location.hostname === "localhost" ? "" : ".";

for (let i = 0; i <= 35; i++) {
  const img = document.createElement("img");
  img.src = `${prefix}/assets/projects/img_${i}.jpg`;
  img.alt = `Image ${i}: Project Gallery`;
  img.className = "rounded-lg shadow-md";

  const wrapper = document.createElement("div");
  wrapper.className = `image-wrapper ${i > 34 ? "portrait" : "landscape"}`;

  wrapper.appendChild(img);
  gallery.appendChild(wrapper);
}
