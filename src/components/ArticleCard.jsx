import Link from 'next/link';
import Image from 'next/image';
import { format, isValid } from 'date-fns';

const ArticleCard = ({ title, slug, image, introduction, category, publishedAt }) => {
  let formattedDate = '';

  if (publishedAt) {
    const date = new Date(publishedAt);
    // Check if date is valid
    formattedDate = isValid(date) ? format(date, 'dd MMM yyyy') : '';
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-indigo-100">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
        {formattedDate && (
          <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
        )}

        <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-56 rounded-xl overflow-hidden">
              <Image
                src={image}
                alt={title}
                priority // keeps preload for LCP
                width={800} // ✅ set width based on actual image size or container
                height={448} // ✅ maintain aspect ratio (e.g., 16:9)
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw" // ✅ responsive
              />
            </div>


          {/* Introduction + Link */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-5">
              {introduction}
            </p>

            <Link
              href={`/${category}/${slug}`}
              className="inline-block px-4 py-2 w-35 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 hover:text-yellow-300 transition-colors duration-100"
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
