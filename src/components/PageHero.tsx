import Image from "next/image";

export function PageHero({ title, children, image, imagePosition = "center" }: { title: string; children: React.ReactNode; image?: string; imagePosition?: string }) {
  return <section className={`page-hero${image ? " page-hero--image" : ""}`}>
    {image ? <><Image className="page-hero__image" src={image} alt="" fill sizes="100vw" priority style={{ objectPosition: imagePosition }} /><div className="page-hero__overlay" /></> : null}
    <div className="shell page-hero__inner"><h1>{title}</h1><div className="page-hero__copy">{children}</div></div>
  </section>;
}
