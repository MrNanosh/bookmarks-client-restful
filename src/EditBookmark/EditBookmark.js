import React, {
  Component
} from 'react';
import { ApiContext } from '../ApiContext';

class EditBookmark extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <div className="EditBookmark">
        <form
          className="EditBookmark__form"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(e);
          }}
        >
          <div>
            <label htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div>
            <label htmlFor="url">
              URL
            </label>
            <input
              type="url"
              name="url"
              id="url"
            />
          </div>
          <div>
            <label htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
            />
          </div>
          <div>
            <label htmlFor="rating">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              id="rating"
              defaultValue="1"
              min="1"
              max="5"
            />
          </div>
          <div className="AddBookmark__buttons">
            <button
              type="button"
              onClick={
                this.context
                  .onClickCancel
              }
            >
              Cancel
            </button>{' '}
            <button type="submit">
              Submit changes
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditBookmark;
