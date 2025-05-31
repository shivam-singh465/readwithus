

const BlogCard = ({ title, description, imageUrl, date, author }) => {
    // Placeholder image if imageUrl is not provided or fails to load.
    const placeholderImage = "https://placehold.co/400x250/E0E0E0/333333?text=Blog+Image";

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <img
                className="w-full h-48 object-cover"
                src={imageUrl || placeholderImage}
                alt={title}
                onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} // Fallback on error
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    {date} by <span className="font-semibold text-indigo-600">{author}</span>
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                    {description.substring(0, 100)}... {/* Truncate description */}
                </p>
                <a href="#" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                    Read More &rarr;
                </a>
            </div>
        </div>
    );
};
export default BlogCard