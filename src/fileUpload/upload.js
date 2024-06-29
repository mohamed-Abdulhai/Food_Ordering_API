import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinaryConfig';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'meals',
    format: async (req, file) => 'jpg', // supports promises as well
    public_id: (req, file) => `${new Date().toISOString()}-${file.originalname}`,
  },
});

const upload = multer({ storage: storage });

export default upload;
