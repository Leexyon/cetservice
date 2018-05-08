/*
Navicat MySQL Data Transfer

Source Server         : lixiang
Source Server Version : 100119
Source Host           : localhost:3306
Source Database       : cet

Target Server Type    : MYSQL
Target Server Version : 100119
File Encoding         : 65001

Date: 2018-05-08 18:40:05
*/

SET FOREIGN_KEY_CHECKS=0;

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
