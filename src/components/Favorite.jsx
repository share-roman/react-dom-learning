import { Form } from "react-router-dom";

export default function Favorite({ contact }) {
  let favorite = contact.favorite;

  return (
    <Form method="POST">
      <button
        name="favorite"
        value={favorite ? true : false}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
