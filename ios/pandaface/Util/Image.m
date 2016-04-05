//
//  Image.m
//  pandaface
//
//  Created by caoyu03 on 16/4/4.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "Image.h"

@implementation Image

+ (UIImage *)scaleToMaxSize:(UIImage *)image
                   maxWidth:(float)maxWidth
                  maxHeight:(float)maxHeight {
    float width = image.size.width;
    float height = image.size.height;
    int flag = 0; // 0表示size未变，1表示size变了
    
    if (image.size.width / maxWidth > image.size.height / maxHeight) {
        if (image.size.width > maxWidth) {
            width = maxWidth;
            height = image.size.height / (image.size.width / maxWidth);
            flag = 1;
        }
    } else if(image.size.height / maxHeight > image.size.width / maxWidth) {
        if (image.size.height > maxHeight) {
            width = image.size.width / (image.size.height / maxHeight);
            height = maxHeight;
            flag = 1;
        }
    }
    
    if (flag == 1) {
        UIGraphicsBeginImageContext(CGSizeMake(width, height));
        
        [image drawInRect:CGRectMake(0, 0, width, height)];
        
        UIImage *scaledImage = UIGraphicsGetImageFromCurrentImageContext();
        
        UIGraphicsEndImageContext();
        return scaledImage;
    } else {
        return image;
    }
}

@end
