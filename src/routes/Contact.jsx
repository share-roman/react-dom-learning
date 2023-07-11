import { Form } from "react-router-dom";
import Favorite from "../components/Favorite";

export default function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true
  };

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar} alt="Avatar" />
      </div>

      <div>
        <h1>
          {`${contact.first || ""} ${contact.last || ""}`.trim() || (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter ? (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
              rel="noreferrer"
            >
              {contact.twitter}
            </a>
          </p>
        ) : null}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="POST"
            action="destroy"
            onSubmit={(e) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
