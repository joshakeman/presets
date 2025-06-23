import Image from "next/image";

export default function OptimizedImage() {
  return (
    <Image
      src="https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_800,h_600,q_auto,f_auto/sample.jpg"
      alt="Cloudinary Optimized Image"
      width={800}
      height={600}
    />
  );
}
