"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterConfig = void 0;
const multer_1 = require("multer");
exports.MulterConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: (req, file, callback) => {
            const fileExtName = file.originalname.split('.').pop();
            const buffer = Buffer.from(file.originalname, 'latin1').toString('utf8');
            const safeName = buffer
                .replace(/[\\?<>\\:\\*\\|"]/g, '')
                .replace(/\./g, '_')
                .replace(/#/g, '_')
                .replace(/%/g, '_');
            const lastIndex = safeName.lastIndexOf('_');
            const baseName = safeName.substring(0, lastIndex);
            callback(null, `${baseName}.${fileExtName}`);
        },
    }),
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
};
//# sourceMappingURL=multer.config.js.map