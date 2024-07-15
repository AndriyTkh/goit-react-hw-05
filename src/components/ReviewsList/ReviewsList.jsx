import css from "./ReviewsList.module.css";

export default function ReviewsList({ reviews }) {
  if (reviews === undefined) {
    return;
  } else if (reviews.length === 0) {
    return (
      <div>
        <p>No reviews yet.</p>
      </div>
    );
  } else {
    return reviews.map((review) => {
      return (
        <li key={review.id} className={css.reviewBox}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      );
    });
  }
}
