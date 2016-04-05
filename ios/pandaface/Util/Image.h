//
//  Image.h
//  pandaface
//
//  Created by caoyu03 on 16/4/4.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>

@interface Image : NSObject

+ (UIImage *)scaleToMaxSize:(UIImage *)image
           maxWidth:(float)maxWidth
          maxHeight:(float)maxHeight;

@end
