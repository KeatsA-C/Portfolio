import { useState } from "react";

function importWebGallery() {
  const modules = import.meta.glob(
    "../assets/projects/Web/*.{jpg,jpeg,png,gif}",
    { eager: true }
  );
  return Object.entries(modules).map(([path, mod]) => ({
    src: mod.default,
    title: path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, ""),
  }));
}

function importMobileGallery() {
  const modules = import.meta.glob(
    "../assets/projects/Mobile/*.{jpg,jpeg,png,gif}",
    { eager: true }
  );
  return Object.entries(modules).map(([path, mod]) => ({
    src: mod.default,
    title: path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, ""),
  }));
}

const webImages = importWebGallery();
const mobileImages = importMobileGallery();

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <section className="min-h-screen py-10 px-6 text-white font-aldrich space-y-16">
      {/* Web Projects */}
      <div>
        <h2 className="text-4xl text-indigo-500 mb-6">Web Projects</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-2">
          {webImages.map((img, index) => (
            <div
              key={index}
              className="relative break-inside-avoid overflow-hidden rounded-lg group shadow-md hover:shadow-indigo-500/40 transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white text-lg font-semibold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Projects */}
      <div>
        <h2 className="text-4xl text-indigo-500 mb-6">Mobile Projects</h2>
        <div className="flex flex-wrap justify-start px-2 gap-2">
          {mobileImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group shadow-md hover:shadow-indigo-500/40 transition-shadow duration-300 cursor-pointer"
              style={{ width: "256px" }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full aspect-[9/16] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                <p className="text-white text-base font-semibold">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Highlights */}
      <div>
        <h2 className="text-4xl text-indigo-500 mb-6">Highlights</h2>

        <div className="relative w-96 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video
            id="highlightVideo"
            src="/videos/Project.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            Your browser does not support the video tag.
          </video>

          <button
            onClick={() => {
              const video = document.getElementById("highlightVideo");
              video.muted = !video.muted;
            }}
            className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white text-sm px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Toggle Sound
          </button>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[90vh] max-w-full rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
