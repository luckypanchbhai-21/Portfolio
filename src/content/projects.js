/** @format */

export const projectCategories = [
  {
    id: "short-form",
    name: "Short-form Edits",
    description: "Fast-paced, attention-grabbing reels for social media",
    projects: [
      {
        id: 1,
        title: "Real Estate reel",
        subtitle: "Showcasing properties with cinematic visuals, smooth transitions, and engaging storytelling.",
        thumbnail:
          "https://img.youtube.com/vi/DmjMsuKTgJ8/hqdefault.jpg",
        video: "https://www.youtube.com/embed/DmjMsuKTgJ8",
      },
      {
        id: 5,
        title: "Podcast Reels",
        subtitle: "Engaging podcast highlights edited with captions, motion graphics, and social-first pacing.",
        thumbnail:
          "https://img.youtube.com/vi/v6w107DRVF4/hqdefault.jpg",
        video: "https://www.youtube.com/embed/v6w107DRVF4",
      },
    ],
  },
  {
    id: "brand",
    name: "Brand Edits",
    description: "Premium commercial videos and brand storytelling",
    projects: [
      {
        id: 2,
        title: "Brand Launch Film",
        subtitle:
          "Premium product narrative with smooth transitions and sound design.",
        thumbnail:
          "https://img.youtube.com/vi/hA4P30LpFnw/hqdefault.jpg",
        video: "https://www.youtube.com/embed/hA4P30LpFnw",
      },
      {
        id: 6,
        title: "Corporate Promotion Edit",
        subtitle: "Cinematic testimonial films that bring your clients' success stories to life.",
        thumbnail:
          "https://img.youtube.com/vi/_G9X03jUcIY/hqdefault.jpg",
        video: "https://www.youtube.com/embed/_G9X03jUcIY",
      },
    ],
  },
  {
    id: "motion",
    name: "Motion graphic Edits",
    description: "Graphics-heavy edits with visual effects and animations",
    projects: [
      {
        id: 3,
        title: "Motion Graphics Showcase", // No change needed for title as per prompt
        subtitle: "Professional motion design featuring smooth transitions, animated elements, and polished visuals.",
        thumbnail:
          "https://img.youtube.com/vi/yKBmDjnsUtc/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/yKBmDjnsUtc",
      },
      {
        id: 7,
        title: "Visual Storytelling Showcase", // No change needed for title as per prompt
        subtitle: "Transforming concepts into engaging visual narratives through motion and design.", // No change needed for subtitle as per prompt
        thumbnail:
          "https://img.youtube.com/vi/yCXpaQU7MQU/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/yCXpaQU7MQU",
      },
    ],
  },
  {
    id: "longform",
    name: "Long-form Edit",
    description: "YouTube videos and extended storytelling content",
    projects: [
      {
        id: 4,
        title: "Documentary Edit",
        subtitle: "Beat-synced visuals, expressive speed ramps, and mood-first color.",
        thumbnail: "https://img.youtube.com/vi/Q5LxnBuX77Q/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/Q5LxnBuX77Q",
      },
      {
        id: 8,
        title: "Vlog Series",
        subtitle: "Engaging vlog edits with natural cuts and compelling pacing.",
        thumbnail: "https://img.youtube.com/vi/zN81bM6P9ro/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/zN81bM6P9ro",
      },
    ],
  },
  {
    id: "normal-edits",
    name: "Normal Edits",
    description: "Clean and professional edits for everyday content needs",
    projects: [
      {
        id: 9,
        title: "Daily life content",
        subtitle: "Engaging short-form videos with dynamic captions and cinematic editing.",
        thumbnail: "https://img.youtube.com/vi/NiC0FI10YTs/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/NiC0FI10YTs",
      },
      {
        id: 10,
        title: "Wedding video edit",
        subtitle: "Capturing timeless wedding moments with cinematic storytelling, smooth transitions, and emotional highlights that preserve every special memory.",
        thumbnail: "https://img.youtube.com/vi/LpoiWsVqDr8/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/LpoiWsVqDr8",
      },
    ],
  },
  {
    id: "gaming",
    name: "Gaming video editing",
    description: "Dynamic and immersive video content for the gaming community.",
    projects: [
      {
        id: 11,
        title: "Long-form Gaming video edit",
        subtitle: "Narrative-driven content designed to keep viewers engaged from start to finish.",
        thumbnail:
          "https://img.youtube.com/vi/E0QExvDLxCM/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/E0QExvDLxCM",
      },
      {
        id: 12,
        title: "Short-form gaming video edit",
        subtitle: "Engaging edits packed with memes, sound effects, and entertaining moments.",
        thumbnail:
          "https://img.youtube.com/vi/D7pJWycZcrU/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/D7pJWycZcrU",
      },
    ],
  },
];

// Keep the flat array for backward compatibility
export const projects = projectCategories.reduce((acc, cat) => {
  return acc.concat(cat.projects);
}, []);
