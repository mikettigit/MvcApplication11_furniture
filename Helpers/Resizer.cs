using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;

namespace Helpers
{
    public static class Resizer
    {
        public static void Proceed(string filename)
        {
            FileInfo file = new FileInfo(filename);
            System.Drawing.Image img = null;
            System.Drawing.Image objImage = System.Drawing.Image.FromFile(filename);

            int w = (int)((float)objImage.Height * 4 / 3);
            if (w > objImage.Width)
            {
                img = ScaleImage(objImage, w, objImage.Height);
                objImage.Dispose();
                img.Save(filename);
                objImage = img;
            }
            int DefaultWidth = 650;
            if (objImage.Width > DefaultWidth)
            {
                int h = (int)((float)objImage.Height * DefaultWidth / (float)objImage.Width);
                img = ScaleImage(objImage, DefaultWidth, h);
                objImage.Dispose();
                img.Save(filename);
                objImage = img;
            }
        }

        private static Image ScaleImage(Image source, int width, int height)
        {

            Image dest = new Bitmap(width, height);
            using (Graphics gr = Graphics.FromImage(dest))
            {
                gr.FillRectangle(Brushes.White, 0, 0, width, height);  // Очищаем экран
                gr.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;

                float srcwidth = source.Width;
                float srcheight = source.Height;
                float dstwidth = width;
                float dstheight = height;

                if (srcwidth <= dstwidth && srcheight <= dstheight)  // Исходное изображение меньше целевого
                {
                    int left = (width - source.Width) / 2;
                    int top = (height - source.Height) / 2;
                    gr.DrawImage(source, left, top, source.Width, source.Height);
                }
                else if (srcwidth / srcheight > dstwidth / dstheight)  // Пропорции исходного изображения более широкие
                {
                    float cy = srcheight / srcwidth * dstwidth;
                    float top = ((float)dstheight - cy) / 2.0f;
                    if (top < 1.0f) top = 0;
                    gr.DrawImage(source, 0, top, dstwidth, cy);
                }
                else  // Пропорции исходного изображения более узкие
                {
                    float cx = srcwidth / srcheight * dstheight;
                    float left = ((float)dstwidth - cx) / 2.0f;
                    if (left < 1.0f) left = 0;
                    gr.DrawImage(source, left, 0, cx, dstheight);
                }

                return dest;
            }
        }
    }
}