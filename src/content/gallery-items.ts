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
    caption: "A page for the people you would draw beside you.",
  },
  {
    id: "template-out-of-the-hospital",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/after-hospital.jpg`,
    title: "What Will You Do Once You're Out of the Hospital?",
    alt: "Illustrated prompt sheet asking what you will do once you are out of the hospital, with a kite, book, paintbrush, and flower around a blank center.",
    caption: "A prompt about the things you look forward to.",
  },
  {
    id: "template-draw-your-family",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/draw-family.jpg`,
    title: "Draw Your Family",
    alt: "Illustrated prompt sheet titled Draw Your Family, with a house, potted plant, and family portrait around a blank center.",
    caption: "A familiar way to bring family into the picture.",
  },
  {
    id: "template-summer-plans",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/summer-plans.jpg`,
    title: "What Do You Want to Do Over the Summer?",
    alt: "Illustrated prompt sheet asking what you want to do over the summer, with a sun hat, book, picnic blanket, and beach umbrella around a blank center.",
    caption: "A page for plans, hopes, and the days ahead.",
  },
  {
    id: "template-favorite-animal",
    category: "prompt",
    src: `${TEMPLATES}/template-favorite-animal.jpg`,
    title: "What's Your Favorite Animal?",
    alt: "Blank illustrated prompt sheet asking what your favorite animal is, with animal drawings around the page.",
    caption: "A favorite animal has a place on this page.",
  },
  {
    id: "template-favorite-thing-to-do",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/favorite-activity.jpg`,
    title: "What Is Your Favorite Thing to Do?",
    alt: "Illustrated prompt sheet asking about a favorite activity, with a paintbrush, soccer ball, open book, and music note around a blank center.",
    caption: "A place for the things you love to do.",
  },
  {
    id: "template-memorable-experience",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/memorable-experience.jpg`,
    title: "What Is a Memorable Experience for You?",
    alt: "Illustrated prompt sheet about a memorable experience, with a camera, blank keepsake ticket, and mountain postcard around a blank center.",
    caption: "A question that invites a memory to take shape.",
  },
  {
    id: "template-grow-up",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/future-ideas.jpg`,
    title: "What Do You Want to Be When You Grow Up?",
    alt: "Illustrated prompt sheet asking what you want to be when you grow up, with a telescope, notebook, potted plant, and hammer around a blank center.",
    caption: "Room to picture what you might become.",
  },
  {
    id: "template-favorite-food",
    category: "prompt",
    src: `${PROMPT_CONCEPTS}/favorite-food.jpg`,
    title: "What's Your Favorite Food?",
    alt: "Illustrated prompt sheet asking about a favorite food, with a bowl of fruit, bread, and pizza around a blank center.",
    caption: "A favorite food, ready to be drawn your way.",
  },
  {
    id: "process-sketching-prompt-oct-2026",
    category: "in-progress",
    src: `${ARTWORK}/process-sketching-prompt-oct-2026.jpg`,
    title: "Drawing on a Prompt Sheet",
    alt: "A hand draws on a favorite-activity prompt sheet, with colored pencils nearby.",
    caption: "A drawing taking shape, one pencil mark at a time.",
  },
  {
    id: "process-coloring-favorite-food",
    category: "in-progress",
    src: `${ARTWORK}/process-coloring-favorite-food.jpg`,
    title: "Coloring a Favorite Food",
    alt: "Hands coloring an ArtRX favorite-food prompt sheet, with colored pencils nearby.",
    caption: "Color finding its place on a favorite-food page.",
  },
  {
    id: "process-sketching-memorable-experience",
    category: "in-progress",
    src: `${ARTWORK}/process-sketching-memorable-experience.jpg`,
    title: "Sketching on a Prompt Sheet",
    alt: "Hands sketching with a pencil on an illustrated ArtRX prompt sheet at a table.",
    caption: "A memory beginning with pencil.",
  },
  {
    id: "process-sketching-pizza",
    category: "in-progress",
    src: `${ARTWORK}/process-sketching-pizza.jpg`,
    title: "Sketching a Favorite Food",
    alt: "A pencil sketch taking shape on an ArtRX favorite-food prompt sheet, with art materials nearby.",
    caption: "A favorite food, sketched onto the page.",
  },
  {
    id: "artwork-pizza-drawing",
    category: "drawing",
    src: `${ORIENTED_ARTWORK}/artwork-pizza-drawing.jpg`,
    title: "A Favorite Food, in Color",
    alt: "Colored-pencil drawing of a pizza on an ArtRX favorite-food prompt sheet.",
    caption: "A favorite food, drawn in the artist's own style.",
  },
  {
    id: "artwork-japan-drawing",
    category: "drawing",
    src: `${ORIENTED_ARTWORK}/artwork-japan-drawing.jpg`,
    title: "A Memorable Experience",
    alt: "Colored-pencil drawing of a building with flags and the word Japan on an ArtRX prompt sheet.",
    caption: "A memory, brought to the page in color.",
  },
  {
    id: "artwork-animal-drawing",
    category: "drawing",
    src: `${ORIENTED_ARTWORK}/artwork-animal-drawing.jpg`,
    title: "A Favorite Animal",
    alt: "Colored-pencil drawing of an animal on an ArtRX favorite-animal prompt sheet.",
    caption: "A favorite animal, imagined in color.",
  },
];
