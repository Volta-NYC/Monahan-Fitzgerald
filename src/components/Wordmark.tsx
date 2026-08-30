import Link from "next/link";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link className={`wordmark ${light ? "wordmark--light" : ""}`} href="/" aria-label="Monahan and Fitzgerald home">
      <span className="wordmark__mark">M<span>&</span>F</span>
      <span className="wordmark__name">Monahan<br />&amp; Fitzgerald</span>
    </Link>
  );
}
