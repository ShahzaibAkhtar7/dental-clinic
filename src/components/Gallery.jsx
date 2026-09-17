import images from "../data/images";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Take a look inside" title="Around the clinic" align="center" />

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {images.gallery.map((img, i) => (
            <figure
              key={img.id}
              className={`overflow-hidden rounded-2xl bg-paper ${
                i === 0 ? "col-span-2 row-span-2" : "aspect-square"
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
