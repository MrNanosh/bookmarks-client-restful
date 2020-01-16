import React from 'react';
import Rating from '../Rating/Rating';
import './BookmarkItem.css';

export default function BookmarkItem(
  props
) {
  return (
    <li className="BookmarkItem">
      <div className="BookmarkItem__row">
        <h3 className="BookmarkItem__title">
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </a>
          <button
            type="button"
            onClick={e => {
              console.log(e.target);
            }}
          >
            edit
          </button>
        </h3>
        <Rating value={props.rating} />
      </div>
      <p className="BookmarkItem__description">
        {props.description}
      </p>
      <button
        type="button"
        onClick={e => {
          console.log(e.target);
        }}
      >
        edit
      </button>
      <div className="BookmarkItem__buttons">
        <button
          className="BookmarkItem__description"
          onClick={() =>
            props.onClickDelete(
              props.id
            )
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
}

BookmarkItem.defaultProps = {
  onClickDelete: () => {}
};
