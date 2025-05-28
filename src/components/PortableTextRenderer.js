// components/PortableTextRenderer.js
import { PortableText } from '@portabletext/react';

const components = {
  types: {},
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium my-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-medium my-1">{children}</h4>,
    normal: ({ children }) => <p className="text-base my-2">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5 my-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-5 my-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

export default function PortableTextRenderer({ value }) {
  return <PortableText value={value} components={components} />;
}
