import noImage from '../assets/no-picture.webp';

const getCroppedImageUrl = (url: string) => {
  const target = 'media/';
  if (!url) return noImage;
  if (url) {
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  }
  return url;
};

export default getCroppedImageUrl;
