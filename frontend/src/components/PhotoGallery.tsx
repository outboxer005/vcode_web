import React, { useState, useEffect } from "react";
import { Heart, ZoomIn } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  title: string;
  height: string;
}

const allPhotos: Photo[] = [
  {
    id: 1,
    url: "/galleryphotos/DSC00568.JPG",
    title: "VCODE 2025",
    height: "h-[300px]",
  },
  {
    id: 2,
    url: "/galleryphotos/DSC_6423.JPG",
    title: "VCODE 2025",
    height: "h-[400px]",
  },
  {
    id: 3,
    url: "/galleryphotos/DSC_6674.JPG",
    title: "VCODE 2025",
    height: "h-[350px]",
  },
  {
    id: 4,
    url: "/galleryphotos/DSC_6684.JPG",
    title: "VCODE 2025",
    height: "h-[280px]",
  },
  {
    id: 5,
    url: "/galleryphotos/DSC_6720.JPG",
    title: "VCODE 2025",
    height: "h-[320px]",
  },
  {
    id: 6,
    url: "/galleryphotos/DSC_6791.JPG",
    title: "VCODE 2025",
    height: "h-[340px]",
  },
  {
    id: 7,
    url: "/galleryphotos/DSC_6796.JPG",
    title: "VCODE 2025",
    height: "h-[380px]",
  },
  {
    id: 8,
    url: "/galleryphotos/DSC_6812.JPG",
    title: "VCODE 2025",
    height: "h-[360px]",
  },
  {
    id: 9,
    url: "/galleryphotos/DSC_6841.JPG",
    title: "VCODE 2025",
    height: "h-[300px]",
  },
  {
    id: 10,
    url: "/galleryphotos/DSC_6850.JPG",
    title: "VCODE 2025",
    height: "h-[350px]",
  },
  {
    id: 11,
    url: "/galleryphotos/DSC_6851.JPG",
    title: "VCODE 2025",
    height: "h-[380px]",
  },
  {
    id: 12,
    url: "/galleryphotos/DSC_6859.JPG",
    title: "VCODE 2025",
    height: "h-[340px]",
  },
  {
    id: 13,
    url: "/galleryphotos/DSC_6885.JPG",
    title: "VCODE 2025",
    height: "h-[320px]",
  },
  {
    id: 14,
    url: "/galleryphotos/DSC_6907.JPG",
    title: "VCODE 2025",
    height: "h-[290px]",
  },
  {
    id: 15,
    url: "/galleryphotos/IMG_9767.JPG",
    title: "VCODE 2025",
    height: "h-[370px]",
  },
];

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set());
  const [displayedPhotos, setDisplayedPhotos] = useState<Photo[]>(
    allPhotos.slice(0, 6),
  );
  const [startIndex, setStartIndex] = useState(0);

  // Rotate photos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % allPhotos.length;
        const newPhotos: Photo[] = [];
        for (let i = 0; i < 6; i++) {
          newPhotos.push(allPhotos[(newIndex + i) % allPhotos.length]);
        }
        setDisplayedPhotos(newPhotos);
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPhotos((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  return (
    <div className="p-6 min-h-screen bg-[var(--background)]">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent tracking-wider">
        Photo Gallery
      </h1>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mx-auto max-w-7xl">
        {displayedPhotos.map((photo) => (
          <div
            key={photo.id}
            className="relative mb-4 break-inside-avoid group cursor-pointer transition-opacity duration-500"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div
              className={`relative ${photo.height} overflow-hidden rounded-xl ring-2 ring-white/10 group-hover:ring-[#06b6d4]/50 transition-all duration-300`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg font-semibold text-[#06b6d4]">
                    {photo.title}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => toggleLike(photo.id, e)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
              >
                <Heart
                  className={`w-6 h-6 transition-colors ${
                    likedPhotos.has(photo.id)
                      ? "fill-[#f43f5e] text-[#f43f5e]"
                      : "text-white/60 hover:text-[#f43f5e]"
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full h-full object-contain rounded-lg ring-4 ring-[#06b6d4]/30"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
            >
              <ZoomIn className="w-6 h-6 text-[#06b6d4]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
