import Link from 'next/link';
import Image from 'next/image';

const ArticleCard = ({ title, slug, image, introduction,category, publishedAt }) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-indigo-100 ">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-56 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Introduction + Link */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-3">
              {introduction}
            </p>

            <Link
            href={`/${category}/${slug}`}

              className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
