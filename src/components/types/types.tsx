export type Book = {
  id: string;
  volumeInfo: {
    imageLinks: {
      smallThumbnail: string;
    };
    authors: string;
    title: string;
    description: string;
  };
};
