// تابع ساخت گالری بر اساس لیست عکس‌ها
function createGallery(imageList) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  // مرتب‌سازی بر اساس تاریخ (جدیدترین اول)
  imageList.sort((a, b) => b.date - a.date);

  imageList.forEach(img => {
    const imageElement = document.createElement("img");
    imageElement.src = `images/${img.file}`;
    imageElement.alt = img.name;
    gallery.appendChild(imageElement);
  });
}
