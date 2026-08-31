import { useState } from "react";

const IMGBB_API_KEY = "발급받은_API_KEY";

function UploadImg() {
  const [imageUrl, setImageUrl] = useState("");

  async function uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_UPLOAD_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const result = await response.json();

    if (!result.success) {
      throw new Error("업로드 실패");
    }

    return result.data;
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files[0];
          if (!file) return;

          const image = await uploadImage(file);
          setImageUrl(image.url);
        }}
      />

      {imageUrl && <img src={imageUrl} alt="업로드된 이미지" />}
    </div>
  );
}

export default UploadImg;
