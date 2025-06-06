const SidebarBlogCard = ({ title, author, imageUrl, readTime }) => {
    const placeholderImage = "https://placehold.co/60x60/E0E0E0/333333?text=Blog";
    return (
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-200 cursor-pointer">
            <img
                className="md:w-16 md:h-16 w-8 h-8 rounded-md object-cover flex-shrink-0"
                src={imageUrl || placeholderImage}
                alt={title}
                onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
            />
            <div className="flex-grow">
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {title}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                    {author} • {readTime} read
                </p>
            </div>
        </div>
    );
};

export default SidebarBlogCard