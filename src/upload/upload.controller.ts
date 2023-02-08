import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { Response } from 'express';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express/multer';
import { zip } from 'compressing'; //把zip放大从compressing引入
import { join } from 'path';
// FileInterceptor单个文件 
// FilesInterceptor多个文件 支持批量上传

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log('file名称', file)
    return true;
  }
  //普通文件
  @Get('export')
  downLoad(@Res() res: Response) {
    console.log('res', res);
    const url = join(__dirname, '../images/pdf.pdf');
    res.download(url);
  }
  
  //流文件下载
  @Get('stream')
  async down(@Res() res: Response) {
    console.log('res', res);
    const url = join(__dirname, '../images/pdf.pdf');
    const tarStream = new zip.Stream();
    await tarStream.addEntry(url); //异步的
    res.setHeader('Content-Type', 'application/octet-steam');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=fileName`
    );
    tarStream.pipe(res);

  }
 
}
