import { reviewGroups } from "@/lib/reviews";

export function ReviewWall() {
  return <section className="review-section">
    <div className="shell review-section__heading reveal">
      <h2>Word around<br /><i>Bayside.</i></h2>
      <p>Twenty short excerpts from public reviews. Different nights, same neighborhood feeling.</p>
    </div>
    <div className="shell review-wall reveal" aria-label="Customer review highlights">
      {reviewGroups.map((group, groupIndex) => <article className="review-tile" key={groupIndex}>
        <ol start={reviewGroups.slice(0, groupIndex).reduce((count, item) => count + item.length, 0) + 1}>
          {group.map((review) => <li key={review.quote}>
            <blockquote>“{review.quote}”</blockquote>
            <a href={review.href} target="_blank" rel="noreferrer">{review.source}</a>
          </li>)}
        </ol>
      </article>)}
    </div>
  </section>;
}
