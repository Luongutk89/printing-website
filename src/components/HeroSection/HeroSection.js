import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  // Mảng banner chính
  const bannermain = [
    {
      id: 1,
      img: 'https://margram.vn/files/vo-hop-qua-tet-2021-036.jpg',
      link: '#order-online',
    },
    {
      id: 2,
      img: 'https://anhieuprint.com/wp-content/uploads/2024/01/an-pham-in-an-truyen-thong-pho-bien-1.jpg',
      link: '#order-combo',
    },
    {
      id: 3,
      img: 'https://inhongdang.vn/upload/images/an-pham-truyen-thong.jpg',
      link: '#free-shipping',
    },
    {
      id: 4,
      img: 'https://thietkeinanquangcao.com/upload/hinhanh2/mau-thiet-ke-tap-chi-dep-05.jpg',
      link: '#special-offer',
    },
  ];

  // Mảng banner nhỏ (4 ảnh)
  const bannersmall = [
    {
      id: 1,
      img: 'https://innsp.vn/wp-content/uploads/2021/12/m%E1%BA%ABu-bao-b%C3%AC-m%E1%BB%B9-ph%E1%BA%A9m7.jpg',
      link: '#order-online',
    },
    {
      id: 2,
      img: 'https://spirit.vietnamairlines.com/old/tintuc/NewsDK/11625/120180710085908.png',
      link: '#order-combo',
    },
    {
      id: 3,
      img: 'https://inhongdang.vn/upload/images/an-pham-truyen-thong.jpg',
      link: '#free-shipping',
    },
    {
      id: 4,
      img: 'https://adsmo.vn/wp-content/uploads/2021/01/thiet-ke-an-pham-truyen-thong-du-lich-03.png',
      link: '#special-offer',
    },
  ];

  // State để theo dõi chỉ số của banner chính
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Tự động chuyển banner chính sau mỗi 3 giây (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === bannermain.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Clear interval khi component unmount
  }, [bannermain.length]);

  return (
    <div className="hero-section container">
      <div className="hero-main">
        {/* Hiển thị banner chính từ mảng bannermain */}
        <a href={bannermain[currentBannerIndex].link}>
          <img
            src={bannermain[currentBannerIndex].img}
            alt="Main Banner"
            className="hero-main-image"
          />
        </a>
        {/* Nút điều hướng cho banner chính */}
        <button
          className="arrow-btn left-arrow"
          onClick={() =>
            setCurrentBannerIndex((prevIndex) =>
              prevIndex === 0 ? bannermain.length - 1 : prevIndex - 1
            )
          }
        >
          &larr;
        </button>
        <button
          className="arrow-btn right-arrow"
          onClick={() =>
            setCurrentBannerIndex((prevIndex) =>
              prevIndex === bannermain.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          &rarr;
        </button>
      </div>

      <div className="hero-small-banners">
        {/* Hiển thị các banner nhỏ */}
        {bannersmall.map((banner) => (
          <div key={banner.id} className="small-banner">
            <a href={banner.link}>
              <img
                src={banner.img}
                alt="Small Banner"
                className="small-banner-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
