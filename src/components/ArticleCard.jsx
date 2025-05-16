import Link from 'next/link';
import Image from 'next/image';

const ArticleCard = ({ title, slug, image, summary }) => (
  <div className="rounded-xl hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <div className="relative w-full h-48">
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-t-xl"
        sizes="(max-width: 768px) 100vw, 33vw"
        //priority
      />
    </div>
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
