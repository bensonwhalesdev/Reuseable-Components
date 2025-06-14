import React from "react";

const masonryItems = [
  {
    title: "Card Title 1",
    description:
      "This is a short description for the first card in our masonry layout.",
    img: "https://placehold.co/600x700",
  },
  {
    title: "Card Title 2",
    description:
      "This is a longer description to demonstrate how cards with different content lengths will arrange themselves in the masonry layout. The CSS columns property handles the distribution automatically.",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Card Title 3",
    description:
      "Another card with a medium-length description to show the masonry effect.",
    img: "https://placehold.co/600x250",
  },
  {
    title: "Card Title 4",
    description: "This card has no image, just to demonstrate versatility.",
  },
  {
    title: "Card Title 5",
    description:
      "This card shows how the masonry layout handles different content lengths. Multiple paragraphs are supported too.",
    img: "https://placehold.co/600x350",
  },
  {
    title: "Card Title 6",
    description:
      "A taller image, which demonstrates how the masonry layout adjusts.",
    img: "https://placehold.co/600x500",
  },
  {
    title: "Card Title 7",
    description: "A shorter card with minimal content.",
    img: "https://placehold.co/600x200",
  },
  {
    title: "Card Title 8",
    description:
      "This is another card with a different height to show the masonry effect. The content flows down into columns based on available space. This creates a visually appealing layout.",
    img: "https://placehold.co/600x450",
  },
];

const Grid1 = () => {
  return (
    <div className="w-full [column-count:4] gap-x-[15px] max-[1200px]:[column-count:3] max-[900px]:[column-count:2] max-[600px]:[column-count:1]">
      {masonryItems.map((item, index) => (
        <div
          key={index}
          className="w-full overflow-hidden rounded-lg mb-[15px] break-inside-avoid inline-block bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
        >
          {item.img && (
            <img
              className="w-full h-auto block max-w-full"
              src={item.img}
              alt={item.title}
            />
          )}
          <div className="p-[15px]">
            <h3 className="text-[#333] mb-2.5">{item.title}</h3>
            {item.description.split("\n").map((text, i) => (
              <p key={i} className="text-[#666] leading-normal">
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid1;
