import axios from 'axios';

type Quote = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

const options = {
  method: 'GET',
  url: 'https://api.quotable.io/random?tags=famous-quotes',
};

export default async (): Promise<Quote> => {
  return (await axios.request(options)).data;
};
