import React, { useState, useRef } from 'react';
import { Footer, Navbar } from '..';

function BlogWriter() {
  const [title, setTitle] = useState('');
  const [mainContentHtml, setMainContentHtml] = useState('');
  const [subheadings, setSubheadings] = useState([]);
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');
  const [showImageUrlInput, setShowImageUrlInput] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const mainContentRef = useRef(null);
  const subheadingContentRefs = useRef(new Map());

  const handleMainContentChange = () => {
    if (mainContentRef.current) {
      setMainContentHtml(mainContentRef.current.innerHTML);
    }
  };

  const handleAddSubheading = () => {
    setSubheadings([...subheadings, { id: Date.now(), text: '', contentHtml: '' }]);
  };

  const handleSubheadingTextChange = (id, newText) => {
    setSubheadings(subheadings.map(sub =>
      sub.id === id ? { ...sub, text: newText } : sub
    ));
  };

  const handleSubheadingContentChange = (id) => {
    const ref = subheadingContentRefs.current.get(id);
    if (ref) {
      setSubheadings(subheadings.map(sub =>
        sub.id === id ? { ...sub, contentHtml: ref.innerHTML } : sub
      ));
    }
  };

  const handleRemoveSubheading = (idToRemove) => {
    setSubheadings(subheadings.filter(sub => sub.id !== idToRemove));
    subheadingContentRefs.current.delete(idToRemove);
  };

  const handleInsertImage = (targetRef) => {
    if (imageUrl) {
      if (targetRef?.current) targetRef.current.focus();
      else mainContentRef.current?.focus();

      document.execCommand('insertImage', false, imageUrl);

      if (targetRef?.current === mainContentRef.current) handleMainContentChange();
      else {
        for (let [id, ref] of subheadingContentRefs.current.entries()) {
          if (ref === targetRef.current) {
            handleSubheadingContentChange(id);
            break;
          }
        }
      }

      setImageUrl('');
      setShowImageUrlInput(false);
    } else {
      setMessage('Please enter an image URL.');
    }
  };

  const countImagesInHtml = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString || '', 'text/html');
    return doc.querySelectorAll('img').length;
  };

  const totalImages =
    countImagesInHtml(mainContentHtml) +
    subheadings.reduce((sum, sub) => sum + countImagesInHtml(sub.contentHtml), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMainContent = mainContentRef.current?.innerHTML || '';
    const finalSubheadings = subheadings.map(sub => ({
      id: sub.id,
      text: sub.text,
      content: subheadingContentRefs.current.get(sub.id)?.innerHTML || sub.contentHtml
    }));

    if (!title || finalMainContent.trim() === '' || finalMainContent === '<br>') {
      setMessage('Please fill in both title and main content.');
      return;
    }

    const newBlog = {
      title,
      mainContent: finalMainContent,
      subheadings: finalSubheadings,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      date: new Date().toLocaleDateString(),
      author: 'Current User',
      likes: 0,
      comments: 0,
    };

    console.log('New Blog Post:', newBlog);

    setMessage('Blog post published successfully!');
    setTitle('');
    setMainContentHtml('');
    mainContentRef.current.innerHTML = '';
    setSubheadings([]);
    setTags('');
    subheadingContentRefs.current.clear();
    setShowImageUrlInput(false);
    setImageUrl('');
  };

  return (
    <>
    <Navbar/>
      <div className="min-h-screen   flex px-4 py-10 gap-6 w-4/5 mx-auto">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-white shadow-md rounded-xl p-4 space-y-4 sticky top-10 h-fit">
          <button
            onClick={handleAddSubheading}
            className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            ➕ Add Subheading
          </button>
          <button
            onClick={() => setShowImageUrlInput(prev => !prev)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            🖼️ Add Image
          </button>

          {showImageUrlInput && (
            <div className="flex gap-2 items-center mt-2">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
                className="flex-grow px-3 py-2 border rounded-md"
              />
              <button
                onClick={() => handleInsertImage(mainContentRef)}
                className="px-3 py-2 bg-blue-500 text-white rounded-md"
              >
                Insert
              </button>
            </div>
          )}

          {/* Subheading Summary Cards */}
          <div className="mt-4 space-y-3">
            <h2 className="text-lg font-semibold text-gray-700">Subheading Summary</h2>
            {subheadings.length === 0 ? (
              <p className="text-sm text-gray-400">No subheadings added yet.</p>
            ) : (
              subheadings.map(sub => (
                <div key={sub.id} className="bg-orange-100 p-3 rounded shadow-sm">
                  <div className="font-semibold text-orange-800 truncate">{sub.text || 'Untitled'}</div>
                  <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {sub.contentHtml.replace(/<[^>]+>/g, '').slice(0, 60)}...
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Section (Blog Editor) */}
        <div className="w-2/3 bg-white shadow-xl rounded-2xl p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Blog Title"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <div
              ref={mainContentRef}
              contentEditable
              onInput={handleMainContentChange}
              className="w-full min-h-[150px] px-4 py-2 border rounded-lg overflow-y-auto"
            ></div>

            {/* Subheadings Editor */}
            {subheadings.map((sub, index) => (
              <div key={sub.id} className="border p-4 rounded bg-orange-50">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-medium">Subheading {index + 1}</label>
                  <button type="button" onClick={() => handleRemoveSubheading(sub.id)} className="text-red-500 hover:underline">Remove</button>
                </div>
                <input
                  type="text"
                  value={sub.text}
                  onChange={(e) => handleSubheadingTextChange(sub.id, e.target.value)}
                  placeholder="Subheading title"
                  className="w-full px-3 py-2 mb-3 border rounded"
                />
                <div
                  ref={el => subheadingContentRefs.current.set(sub.id, el)}
                  contentEditable
                  onInput={() => handleSubheadingContentChange(sub.id)}
                  className="w-full h-32 px-3 py-2 border rounded overflow-y-auto"
                ></div>
              </div>
            ))}

            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Tags (comma separated)"
              className="w-full px-4 py-2 border rounded-lg"
            />

            {message && (
              <div className={`p-3 rounded text-center ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}

            <button type="submit" className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              🚀 Publish Blog
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default BlogWriter;
