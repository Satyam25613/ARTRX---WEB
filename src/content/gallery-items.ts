import type { GalleryItem } from "@/lib/types";

const TEMPLATES = "/images/gallery/guided-templates";
const PROMPT_CONCEPTS = "/images/gallery/prompt-concepts";
const ARTWORK = "/images/gallery/patient-artwork";
const ORIENTED_ARTWORK = `${ARTWORK}/oriented`;

// Existing prompt sheets are preserved in public/images/gallery/guided-templates.
// The active page uses topic-matched illustrated versions for prompts that had
// unrelated animal decorations; the favorite-animal sheet keeps its animal art.
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "template-draw-you-and-your-friends",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/friends.jpg`,
    title: "Draw You and Your Friends",
    alt: "Illustrated drawing prompt sheet titled Draw You and Your Friends, with a small group of friends and conversation bubbles around a blank center.",
    caption: "A few friendly figures frame an open space to draw.",
  },
  {
    id: "template-out-of-the-hospital",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/after-hospital.jpg`,
    title: "What Will You Do Once You're Out of the Hospital?",
    alt: "Illustrated prompt sheet asking what you will do once you are out of the hospital, with a kite, book, paintbrush, and flower around a blank center.",
    caption: "Everyday things frame a question about future plans.",
  },
  {
    id: "template-draw-your-family",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/draw-family.jpg`,
    title: "Draw Your Family",
    alt: "Illustrated prompt sheet titled Draw Your Family, with a house, potted plant, and family portrait around a blank center.",
    caption: "Home and family illustrations frame the drawing space.",
  },
  {
    id: "template-summer-plans",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/summer-plans.jpg`,
    title: "What Do You Want to Do Over the Summer?",
    alt: "Illustrated prompt sheet asking what you want to do over the summer, with a sun hat, book, picnic blanket, and beach umbrella around a blank center.",
    caption: "A few summer objects frame the open page.",
  },
  {
    id: "template-favorite-animal",
    category: "prompt",
    src: `${TEMPLATES}/template-favorite-animal.jpg`,
    title: "What's Your Favorite Animal?",
    alt: "Blank illustrated prompt sheet asking what your favorite animal is, with animal drawings around the page.",
    caption: "A favorite-animal prompt with a large open space to draw.",
  },
  {
    id: "template-favorite-thing-to-do",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/favorite-activity.jpg`,
    title: "What Is Your Favorite Thing to Do?",
    alt: "Illustrated prompt sheet asking about a favorite activity, with a paintbrush, soccer ball, open book, and music note around a blank center.",
    caption: "Art, sport, reading, and music frame the question.",
  },
  {
    id: "template-memorable-experience",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/memorable-experience.jpg`,
    title: "What Is a Memorable Experience for You?",
    alt: "Illustrated prompt sheet about a memorable experience, with a camera, blank keepsake ticket, and mountain postcard around a blank center.",
    caption: "A camera and keepsakes frame a memory prompt.",
  },
  {
    id: "template-grow-up",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/future-ideas.jpg`,
    title: "What Do You Want to Be When You Grow Up?",
    alt: "Illustrated prompt sheet asking what you want to be when you grow up, with a telescope, notebook, potted plant, and hammer around a blank center.",
    caption: "Tools for looking, making, and growing frame the question.",
  },
  {
    id: "template-favorite-food",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/favorite-food.jpg`,
    title: "What's Your Favorite Food?",
    alt: "Illustrated prompt sheet asking about a favorite food, with a bowl of fruit, bread, and pizza around a blank center.",
    caption: "Food illustrations frame an open space for a drawing.",
  },
  {
    id: "process-sketching-prompt-oct-2026",
    category: "in-progress",
    src: `${ARTWORK}/process-sketching-prompt-oct-2026.jpg`,
    title: "Drawing on a Prompt Sheet",
    alt: "A hand draws on a favorite-activity prompt sheet, with colored pencils nearby.",
    caption: "A drawing taking shape with colored pencils.",
  },
  {
    id: "process-coloring-favorite-food",
    category: "in-progress",
    src: `${ARTWORK}/process-coloring-favorite-food.jpg`,
    title: "Coloring a Favorite Food",
    alt: "Hands coloring an ArtRX favorite-food prompt sheet, with colored pencils nearby.",
    caption: "A prompt page being filled in with color.",
  },
  {
    id: "process-sketching-memorable-experience",
    category: "in-progress",
    src: `${ARTWORK}/process-sketching-memorable-experience.jpg`,
    title: "Sketching on a Prompt Sheet",
    alt: "Hands sketching with a pencil on an illustrated ArtRX prompt sheet at a table.",
    caption: "Pencil marks taking shape on the page.",
  },
  {
    id: "process-sketching-pizza",
    category: "in-progress",
    src: `${ARTWORK}/process-sketching-pizza.jpg`,
    title: "Sketching a Favorite Food",
    alt: "A pencil sketch taking shape on an ArtRX favorite-food prompt sheet, with art materials nearby.",
    caption: "A drawing in progress on a favorite-food prompt.",
  },
  {
    id: "artwork-pizza-drawing",
    category: "drawing",
    src: `${ORIENTED_ARTWORK}/artwork-pizza-drawing.jpg`,
    title: "A Favorite Food, in Color",
    alt: "Colored-pencil drawing of a pizza on an ArtRX favorite-food prompt sheet.",
    caption: "A completed drawing on the favorite-food prompt.",
  },
  {
    id: "artwork-japan-drawing",
    category: "drawing",
    src: `${ORIENTED_ARTWORK}/artwork-japan-drawing.jpg`,
    title: "A Memorable Experience",
    alt: "Colored-pencil drawing of a building with flags and the word Japan on an ArtRX prompt sheet.",
    caption: "A completed drawing on the memorable-experience prompt.",
  },
  {
    id: "artwork-animal-drawing",
    category: "drawing",
    src: `${ORIENTED_ARTWORK}/artwork-animal-drawing.jpg`,
    title: "A Favorite Animal",
    alt: "Colored-pencil drawing of an animal on an ArtRX favorite-animal prompt sheet.",
    caption: "A completed drawing on the favorite-animal prompt.",
  },
];
