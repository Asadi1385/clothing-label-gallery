// لیست برچسب‌ها (فقط اسم فایل‌ها را بنویس)
const labels = [
  "photo_2025-11-05_12-07-08.jpg",
  "photo_2025-11-05_12-08-30.jpg",
  "photo_2025-11-05_12-08-27.jpg",
  "photo_2025-11-05_12-08-23.jpg"
];

// گالری را از لیست بساز
const gallery = document.getElementById("gallery");
labels.forEach(label => {
  const img = document.createElement("img");
  img.src = `images/${label}`;
  img.alt = label;
  img.addEventListener("click", () => selectLabel(label));
  gallery.appendChild(img);
});

// وقتی کاربر روی عکس کلیک کرد:
function selectLabel(labelName) {
  const selectedImg = document.getElementById("selected-img");
  selectedImg.src = `images/${labelName}`;
  selectedImg.alt = labelName;
}
