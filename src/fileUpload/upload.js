import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { AppError } from '../utilities/AppError.js';
import fs from 'fs';
import path from 'path';

// Ensure the 'uploads' directory exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${new Date().toISOString()}-${uuidv4()}-${file.originalname}`;
        cb(null, uniqueSuffix);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('Images only!', 401), false);
    }
};

const fileUpload = multer({ storage, fileFilter });

export const uploadSingleFile = fieldName => fileUpload.single(fieldName);
export const uploadArrayOfFiles = fieldName => fileUpload.array(fieldName, 10);
export const uploadFields = fields => fileUpload.fields(fields);
