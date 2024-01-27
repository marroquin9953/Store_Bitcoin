import compressImage from 'browser-image-compression';

export const compressFile = async (file, maxSizeMB) => {
  // No es necesario comprimir el archivo si tiene un tamaño inferior al máximo.
  if (file.size / 1024 / 1024 < maxSizeMB) {
    return file;
  }

  try {
    return compressImage(file, { maxSizeMB, useWebWorker: false });
  } catch (err) {
    console.error(err);

    return file;
  }
};
