import Link from 'next/link';

const ArticleCard = ({ title, slug, image, summary }) => (
  <div className=" rounded-xl  hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{summary}</p>
      <Link
        href={`/${slug}`}
        className="inline-block text-blue-600 mt-3 font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  </div>
);

export default ArticleCard;
