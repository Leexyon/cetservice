/*
Navicat MySQL Data Transfer

Source Server         : lixiang
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : cet

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-05-17 08:47:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `bannerUrl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bannerLink` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('3', '0.3314314821805915.jpg', '15', 'banner1');
INSERT INTO `banner` VALUES ('4', '0.6294714162173081.jpg', '16', 'banner2');
INSERT INTO `banner` VALUES ('5', '0.22482124735100606.jpg', '17', 'banner3');
INSERT INTO `banner` VALUES ('6', '0.20368035418864716.jpg', '18', 'banner4');

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `length` double(255,0) DEFAULT NULL,
  `discription` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `teacher` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `chapter` varchar(255) DEFAULT NULL,
  `figureUrl` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `members` smallint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('1', '国际商务', '1525422289', '这111里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介', '佟丽娅', '20', 'http://hxrnewspic.oss-cn-zhangjiakou.aliyuncs.com/data/20180320110358788982.png?Expires=1836875038&OSSAccessKeyId=LTAIAj3AmB55nyDl&Signature=a43X7hPv55XP8ayax0VRJcq30sI%3D', '0');
INSERT INTO `course` VALUES ('2', '政治经济学', '1525452289', '这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是2222课程简介这里是课程简介', '张学成', '20', 'http://hxrnewspic.oss-cn-zhangjiakou.aliyuncs.com/data/20180320110047904969.png?Expires=1836874849&OSSAccessKeyId=LTAIAj3AmB55nyDl&Signature=8W1zDzc5k1NMbRKfgdjCKdyN%2FCY%3D', '0');

-- ----------------------------
-- Table structure for duanzi
-- ----------------------------
DROP TABLE IF EXISTS `duanzi`;
CREATE TABLE `duanzi` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `english` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `chinaese` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datatime` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of duanzi
-- ----------------------------
INSERT INTO `duanzi` VALUES ('1', 'make every day but no baby', '不孕不育', '07-18');
INSERT INTO `duanzi` VALUES ('3', 'Life  is  not  easy  for  any  of  us...', '我们生命不简单', '05-16');
