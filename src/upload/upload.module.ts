import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
@Module({
  imports: [MulterModule.register({
    storage: diskStorage({
      destination: join(__dirname, '../images'),
      filename: (req, file, callback) => {
         const fileName = `${new Date().getTime() + extname(file.originalname)}`;
         return callback(null, fileName);
      }
    })// 上传图片后图片存放的地址  用这个包diskStorage
  })],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}
