function starRating(rating) {
  let stars = "";
  if (!rating) return "Not Rated";
  for (let i = 0; i < rating; i++) {
    stars += "★";
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars += "☆";
  }

  return stars;
}

export default starRating;
