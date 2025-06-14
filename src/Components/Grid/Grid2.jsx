import React from "react";

const masonryItems = [
  {
    title: "Card Title 1",
    description: "A short description for the first collection.",
    img: "https://placehold.co/600x350",
    tags: ["Tag1", "Tag2"],
  },
  {
    title: "Card Title 2",
    description: "A longer description showing different layout handling.",
    img: "https://placehold.co/600x450",
    tags: ["Tag1", "Tag2"],
  },
  {
    title: "Card Title 3",
    description: "Another short entry to keep the layout dynamic.",
    img: "https://placehold.co/600x250",
    tags: ["Tag1", "Tag2", "Tag3"],
  },
  {
    title: "Card Title 4",
    description: "This card does not have an image, only text content.",
    tags: ["Tag1", "Tag2"],
  },
  {
    title: "Card Title 5",
    description: "A beautiful capture featuring warm colors and light.",
    img: "https://placehold.co/600x400",
    tags: ["Tag1", "Tag2"],
  },
  {
    title: "Card Title 6",
    description: "A taller image example showing vertical adjustments.",
    img: "https://placehold.co/600x550",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
  },
  {
    title: "Card Title 7",
    description: "Quick glimpse of creative patterns around us.",
    img: "https://placehold.co/600x200",
    tags: ["Tag1", "Tag2"],
  },
  {
    title: "Card Title 8",
    description: "Simple and candid moments captured beautifully.",
    img: "https://placehold.co/600x320",
    tags: ["Tag1", "Tag2"],
  },
];

const Grid2 = () => {
  return (
    <div className="w-full gap-x-5 [column-count:4] max-[1200px]:[column-count:3] max-[900px]:[column-count:2] max-[600px]:[column-count:1]">
      {masonryItems.map((item, index) => (
        <div
          key={index}
          className="mb-5 inline-block w-full break-inside-avoid overflow-hidden rounded-lg bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-[transform_0.3s,_box-shadow_0.3s] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
        >
          {item.img && (
            <img className="block w-full" src={item.img} alt={item.title} />
          )}
          <div className="p-[15px]">
            <h3 className="mb-2.5 text-[#2c3e50]">{item.title}</h3>
            <p className="leading-[1.6] text-[#7f8c8d]">{item.description}</p>
            <div className="mt-2.5">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="mr-[5px] mb-[5px] inline-block rounded bg-[#e0e0e0] px-[8px] py-[4px] text-[0.8em] text-[#555]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid2;
