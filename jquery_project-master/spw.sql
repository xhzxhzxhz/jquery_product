
SET NAMES UTF8;
DROP DATABASE IF EXISTS spw;
CREATE DATABASE spw CHARSET=UTF8;
USE spw;

#========================用户表=======================================================
CREATE TABLE user(
  uid INT AUTO_INCREMENT PRIMARY KEY,
  uname VARCHAR(128),
  upwd VARCHAR(64),
  phone char(11)
);
INSERT INTO user VALUES(1,'大哥','123456','13012345678');
INSERT INTO user VALUES(2,'dingding','123456','10000000000');
INSERT INTO user VALUES(3,'dangdang','123456','13012345678');
INSERT INTO user VALUES(4,'hh','123456','13000000000');
#========================商品图片=======================================================
CREATE TABLE picture(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(128),
  bin_data LONGBLOB,
  filename CHAR(50),
  filesize CHAR(50),
  filetype CHAR(50)
);
#==========================首页商品表===================================================
CREATE TABLE index_product(
  pid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(128),
  details varchar(128),
  pic varchar(300)
);
INSERT INTO index_product VALUES(1,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/1.jpg');
INSERT INTO index_product VALUES(2,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/2.jpg');
INSERT INTO index_product VALUES(3,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/3.jpg');
INSERT INTO index_product VALUES(4,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/4.jpg');
INSERT INTO index_product VALUES(5,'VOI','SDFDSDG重磅来袭','img/5.jpg');
INSERT INTO index_product VALUES(6,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/6.jpg');
INSERT INTO index_product VALUES(7,'VOI','火爆时尚圈的SDFGSG','img/7.jpg');
INSERT INTO index_product VALUES(8,'VOI','DTWERT','img/8.jpg');
INSERT INTO index_product VALUES(9,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/9.jpg');
INSERT INTO index_product VALUES(10,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/10.jpg');
INSERT INTO index_product VALUES(11,'VOI','DFTGERT','img/11.jpg');
INSERT INTO index_product VALUES(12,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/12.jpg');
INSERT INTO index_product VALUES(13,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/13.jpg');
INSERT INTO index_product VALUES(14,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/14.jpg');
INSERT INTO index_product VALUES(15,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/15.jpg');
INSERT INTO index_product VALUES(16,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/16.jpg');
INSERT INTO index_product VALUES(17,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/17.jpg');
INSERT INTO index_product VALUES(18,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/18.jpg');
INSERT INTO index_product VALUES(19,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/19.jpg');
INSERT INTO index_product VALUES(20,'VOI','火爆时尚圈的DANSE LENTE重磅来袭','img/20.jpg');
CREATE TABLE index_product_bottom(
  pid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(128),
  price varchar(128),
  pic varchar(300)
);
INSERT INTO index_product_bottom VALUES(1,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(2,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(3,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(4,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(5,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(6,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(7,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(8,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(9,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(10,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(11,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(12,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(13,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(14,'VOI','￥1650','img/20180717184601169025-190-252.jpg');
INSERT INTO index_product_bottom VALUES(15,'VOI','￥1650','img/20180717184601169025-190-252.jpg');

#===============products=================================================================
CREATE TABLE products_info(
  psid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ps_title varchar(128),
  ps_bq varchar(128),
  ps_brand varchar(128),
  ps_old_price varchar(128),
  ps_new_price varchar(128),
  ps_size varchar(600),
  i1 varchar(128),
  i2 varchar(128)
);
-- INSERT INTO products_info VALUES(1,'女士卫衣','新季','9483','10032','s','img/p1.jpg','img/p4.jpg');
INSERT INTO products_info VALUES(1,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/sm4.jpg','img/sm5.jpg');
INSERT INTO products_info VALUES(2,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p2.jpg','img/p3.jpg');
INSERT INTO products_info VALUES(3,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p5.jpg','img/p6.jpg');
INSERT INTO products_info VALUES(4,'【最新降价】女士卫衣','新季','DFG','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p8.jpg','img/p9.jpg');
INSERT INTO products_info VALUES(5,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p13.jpg','img/p14.jpg');
INSERT INTO products_info VALUES(6,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p15.jpg','img/p16.jpg');
INSERT INTO products_info VALUES(7,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p10.jpg','img/p19.jpg');
INSERT INTO products_info VALUES(8,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p20.jpg','img/p21.jpg');
INSERT INTO products_info VALUES(9,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p29.jpg','img/p30.jpg');
INSERT INTO products_info VALUES(10,'【最新降价】女士织带休闲服','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p22.jpg','img/p23.jpg');
INSERT INTO products_info VALUES(11,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p25.jpg','img/p26.jpg');
INSERT INTO products_info VALUES(12,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p27.jpg','img/p28.jpg');
INSERT INTO products_info VALUES(13,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p31.jpg','img/p32.jpg');
INSERT INTO products_info VALUES(14,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p33.jpg','img/p34.jpg');
INSERT INTO products_info VALUES(15,'【最新降价】女士织带休闲服','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p35.jpg','img/p36.jpg');
INSERT INTO products_info VALUES(16,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p37.jpg','img/p38.jpg');
INSERT INTO products_info VALUES(17,'【最新降价】女士织带休闲服','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p39.jpg','img/p40.jpg');
INSERT INTO products_info VALUES(18,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p41.jpg','img/p42.jpg');
INSERT INTO products_info VALUES(19,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p43.jpg','img/p44.jpg');
INSERT INTO products_info VALUES(20,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p45.jpg','img/p46.jpg');
INSERT INTO products_info VALUES(21,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/sm4.jpg','img/sm5.jpg');
INSERT INTO products_info VALUES(22,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p2.jpg','img/p3.jpg');
INSERT INTO products_info VALUES(23,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p5.jpg','img/p6.jpg');
INSERT INTO products_info VALUES(24,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p8.jpg','img/p9.jpg');
INSERT INTO products_info VALUES(25,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p13.jpg','img/p14.jpg');
INSERT INTO products_info VALUES(26,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p15.jpg','img/p16.jpg');
INSERT INTO products_info VALUES(27,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p10.jpg','img/p19.jpg');
INSERT INTO products_info VALUES(28,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p20.jpg','img/p21.jpg');
INSERT INTO products_info VALUES(29,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p29.jpg','img/p30.jpg');
INSERT INTO products_info VALUES(30,'【最新降价】女士织带休闲服','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p22.jpg','img/p23.jpg');
INSERT INTO products_info VALUES(31,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p25.jpg','img/p26.jpg');
INSERT INTO products_info VALUES(32,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p27.jpg','img/p28.jpg');
INSERT INTO products_info VALUES(33,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p31.jpg','img/p32.jpg');
INSERT INTO products_info VALUES(34,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p33.jpg','img/p34.jpg');
INSERT INTO products_info VALUES(35,'【最新降价】女士织带休闲服','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p35.jpg','img/p36.jpg');
INSERT INTO products_info VALUES(36,'【最新降价】女士卫衣','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p37.jpg','img/p38.jpg');
INSERT INTO products_info VALUES(37,'【最新降价】女士织带休闲服','新季','GUIUI','9483','10032','<div class="item_size"><span>S</span><span>M</span></div>','img/p39.jpg','img/p40.jpg');

#=================product_details============================================
CREATE TABLE product_details_pic(
  lid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- product_id int,
  psid int,
  sm varchar(128),
  md varchar(128),
  lg varchar(300),
  -- foreign key (product_id) references index_product(pid)
  foreign key (psid) references products_info(psid)
);
INSERT INTO product_details_pic VALUES(1,1,'img/sm1.jpg','img/sm2.jpg','img/sm2.jpg');
INSERT INTO product_details_pic VALUES(2,1,'img/sm3.jpg','img/sm4.jpg','img/sm4.jpg');
INSERT INTO product_details_pic VALUES(3,1,'img/sm5.jpg','img/sm6.jpg','img/sm6.jpg');
INSERT INTO product_details_pic VALUES(4,1,'img/sm7.jpg','img/sm8.jpg','img/sm8.jpg');
INSERT INTO product_details_pic VALUES(5,1,'img/sm9.jpg','img/sm9.jpg','img/sm9.jpg');
INSERT INTO product_details_pic VALUES(6,4,'img/sm-3.jpg','img/sm-7.jpg','img/sm-7.jpg');
INSERT INTO product_details_pic VALUES(7,4,'img/sm-4.jpg','img/sm-8.jpg','img/sm-8.jpg');
INSERT INTO product_details_pic VALUES(8,4,'img/sm-5.jpg','img/sm-9.jpg','img/sm-9.jpg');
INSERT INTO product_details_pic VALUES(9,4,'img/sm-6.jpg','img/sm-10.jpg','img/sm-10.jpg');
#=================product_cart_info============================================
CREATE TABLE product_cart_info(
  pcid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  psid int,
  p_brand varchar(128),
  pc_title varchar(128),
  pc_color varchar(300),
  pc_size varchar(300),
  pc_promise varchar(300),
  pc_price float,
  foreign key (psid) references products_info(psid)
);
INSERT INTO product_cart_info VALUES(1,4,'GUCCI  古驰','【最新降价】女士织带休闲服','黑色','38','	<p class="not_zc">
						<img src="shopping/seven-th.jpg" alt="" />
						<b>不支持7天无理由退换货</b>
					</p>',15850);
INSERT INTO product_cart_info VALUES(2,1,'GUCCI  古驰','男士卫衣','粉色','38','	<p class="not_zc">
						<img src="shopping/seven-th.jpg" alt="" />
						<b>不支持7天无理由退换货</b>
					</p>',9919);
#=================product_cart_item============================================
CREATE TABLE product_cart_item(
  iid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  uid int,
  psid int,
  count int,
  ischecked bool,
  foreign key (uid) references user(uid),
  foreign key (psid) references products_info(psid)
);

INSERT INTO product_cart_item VALUES(1,1,4,1,0);
INSERT INTO product_cart_item VALUES(2,1,1,1,0);
INSERT INTO product_cart_item VALUES(3,2,4,1,0);
#==================用户订单信息================================
CREATE TABLE user_order(
  oid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  uid int,
  psid int,
  count int,
  foreign key (uid) references user(uid),
  foreign key (psid) references products_info(psid)
);
INSERT INTO user_order VALUES(1,2,4,1);
INSERT INTO user_order VALUES(2,2,1,2);
INSERT INTO user_order VALUES(3,1,4,1);
INSERT INTO user_order VALUES(4,1,1,3);
#==================用户收货信息===============================
CREATE TABLE cart_user_info(
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  uid int,
  user_name varchar(128),
  address varchar(128),
  post varchar(6),
  user_phone varchar(20),
  foreign key (uid) references user(uid)
);
INSERT INTO cart_user_info VALUES(1,1,'花花','北京市海淀区万寿路','044000','18888888888');