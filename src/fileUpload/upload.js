import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { AppError } from '../utilities/AppError.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Temporary folder to hold uploads before sending to Cloudinary
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${new Date().toISOString()}-${uuidv4()}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only specific file types (e.g., jpeg and png)
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new AppError('Invalid file type, only JPEG and PNG are allowed!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }  // 5MB file size limit
});

export default upload;
