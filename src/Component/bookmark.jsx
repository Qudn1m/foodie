import React, { useState, useEffect } from 'react';
import bookmarked_image from '../Asset/download.png';
import unbookmarked_image from '../Asset/download_save.png';

const Bookmark = ({ id }) => {
    // track bookmark status
    const [isBookmarked, setIsBookmarked] = useState(false);

    // Load bookmark status for specific item
    useEffect(() => {
        const savedBookmarkStatus = localStorage.getItem(`isBookmarked_${id}`);
        if (savedBookmarkStatus) {
            setIsBookmarked(JSON.parse(savedBookmarkStatus));
        }
    }, [id]);

    // magic function for bookmark state
    const toggleBookmark = () => {
        const newBookmarkStatus = !isBookmarked;
        setIsBookmarked(newBookmarkStatus);
        localStorage.setItem(`isBookmarked_${id}`, JSON.stringify(newBookmarkStatus));
    };

    return (
        <div onClick={toggleBookmark} style={{ cursor: 'pointer' }}>
            <img
                src={isBookmarked ? bookmarked_image : unbookmarked_image}
                alt="Bookmark Icon"
                style={{ width: '40px', height: '40px' }}
            />
        </div>
    );
};

export default Bookmark;
