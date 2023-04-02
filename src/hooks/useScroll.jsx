import React from 'react';

export const useScrollToTop = (initialState = null) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [initialState]);
};
