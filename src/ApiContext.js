import { createContext } from 'react';

export const ApiContext = createContext(
  {
    onClickCancel: () => {},
    updateBookmark: () => {}
  }
);
