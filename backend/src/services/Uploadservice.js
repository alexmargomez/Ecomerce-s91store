import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads');
    },
    filename: ( req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer ({storage : storage});


const uploadImage = (req, res, next) => {
    upload.single('image')(req, res, (err) => {
        if (err){
            return res.status(500).json({message: 'Error al subir la iamgen', err})
        }else{
            next();
        }
        
    });
};

export default uploadImage;