CREATE TABLE products(
    pid int PRIMARY KEY AUTO_INCREMENT,
    product_name varchar(255),
    product_price INT,
    product_description varchar(255),
    product_image varchar(255),
    pcid INT,
    FOREIGN KEY(pcid) REFERENCES categories(pcid) ON DELETE CASCADE
);

INSERT INTO products VALUES (1,'Samsung M33 5G', 18999, 'Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately', 'samsung_m33.jpg', 1),
                            (2,'realme narzo', 11499, 'realme narzo 50A Prime (Flash Blue, 4GB RAM+64GB Storage) FHD+ Display | 50MP AI Triple Camera | Charger Included','realme_50a.jpg',1),
                            (3,'OnePlus Nord', 18999,'OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)','oneplus_nord.jpg',1),
                            (4,'Nokia G21',13499,'Nokia G21 Android Smartphone, Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage, 50MP Triple AI Camera | Nordic Blue','nokia_g21.jpg',1),
                            (5,'Oppo A78 5G',18999,'Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate ','oppo_a78.jpg',1),
                            (6,'HP 15s',38490,'HP 15s AMD Ryzen 3- 5300U 15.6inch(39.6cm) FHD Laptop (8GB RAM/512GB SSD, Micro-Edge, Anti-Glare Display/Radeon Graphics/Windows 11 Home/Alexa/Dual Speakers/Ms Office/1.69Kg, 15s-Eq2143au)','hp_15s.jpg',2),
                            (7,'LG Gram17',85990,'LG Gram17 Intel EVO-[12th Gen Core i5/Win11/8GB/512GB SSD Intel Iris Xe Graphics] [Thunderbolt4/USB-C] [FHD Webcam+Built-in AI] 80WH Battery 3 Yrs Warranty (Black,1.35 kg)','lg_gram17.jpg',2),
                            (8,'Dell Vostro',43490,'Dell Vostro 14-inch Laptop (35.56 cms) | Windows 11 and MS Office 2021 | Intel i3-1115G4 | 8GB DDR4 SDRAM and 512GB SSD | FHD Screen | Laptop for Work | 3420 - Carbon Black (D552276WIN9BE)','dell_vostro.jpg',2),
                            (9,'Samsung Galaxy Book2',94990,'Samsung Galaxy Book2 360 Intel 12th Gen i5 EvoTM 33.78cm (13.3") AMOLED 2 in 1 touch screen Laptop (16 GB/512 GB SSD/Windows 11/MS Office/Backlit KB/Fingerprint Sensor/Graphite/1.16Kg), NP730QED-KA2IN','galaxy_book2.jpg',2),
                            (10,'Lenovo IdeaPad Slim 3',25990,'Lenovo IdeaPad Slim 3 Intel Celeron N4020 4th Gen 15.6" (39.62cm) HD Thin & Light Laptop (8GB/256GB SSD/Windows 11/Office 2021/2Yr Warranty/3months Game Pass/Platinum Grey/1.7Kg), 81WQ00MQIN','ideapad_slim3.jpg',2),
                            (11,'Xiaomi Pad 5',26999,'Xiaomi Pad 5| Qualcomm Snapdragon 860| 120Hz Refresh Rate| 6GB, 128GB| 2.5K+ Display (10.95-inch/27.81cm)|1 Billion Colours| Dolby Vision Atmos| Quad Speakers| Wi-Fi| Gray','xiaomi_pad5.jpg',3),
                            (12,'Samsung Galaxy Tab S6 Lite',28999,'Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Gray','galaxy_tab_s6.jpg',3),
                            (13,'Apple 2022 iPad Air',53900,'Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Blue (5th Generation)','ipad_air.jpg',3),
                            (14,'Lenovo Tab M10',19999,'Lenovo Tab M10 FHD Plus (3rd Gen) (10.61 inch (26.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Calling), Storm Grey with Qualcomm Snapdragon Processor, 7700 mAH Battery and Quad Speakers with Dolby Atmos','lenovo_tab_m10.jpg',3),
                            (15,'Nokia T20 Tab',14221,'Nokia T20 Tab with 10.36 Inch(26cm) 2K Screen, Low Blue Light, Wi-Fi, 8200mAh Battery, Android 11 with 2 Years of OS Upgrades & 3 Years of Security Updates, 4GB RAM, 64GB Storage | Deep Ocean Blue','nokia_t20.jpg',3),
                            (16,'Dell AIO Inspiron',71941,'Dell AIO Inspiron 5415, AMD R5-5625U, Windows 11 + MSO21, 8GB DDR4, 512GB SSD, 23.8" FHD AG Infinity Narrow Border, Wireless Keyboard + Mouse, Pearl White Color (SLV-3YR-D262181WIN8)','dell_aio_inspiron.jpg',4),
                            (17,'HP All-in-One',55990,'HP All-in-One AMD Ryzen 5-5625U 23.8 inches(60.5 cm) 8GB RAM/512GB SSD/FHD, Micro-Edge, Anti-Glare Display/Wireless Keyboard & Mouse/Radeon Graphics/Windows 11/MSO 2021, 24-ck0678in','hp_all_in_one.jpg',4),
                            (18,'Apple 2020 Mac Mini',61990,'Apple 2020 Mac Mini M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD -Silver','mac_mini.jpg',4),
                            (19,'Acer Aspire C24',55743,'Acer Aspire C24 23.8 inch Full HD IPS All in One Desktop I Intel Core i5-1035G1 I 8GB DDR4 I 512GB SSD I Windows 11 Home I MS Office Home & Student 2021 I Full HD Camera I Wireless Keyboard & Mouse','aspire_c24.jpg',4),
                            (20,'Lenovo IdeaCentre A340',51274,'Lenovo IdeaCentre A340 23.8-inch Full HD IPS All-in-One Desktop (Intel Core i3-10110U/8GB/512GB SSD/Windows 11/MS Office 2021/HD 720p Camera/Wireless Keyboard & Mouse/Black), F0E800Y7IN','lenovo_ideacentre_A340.jpg',4),
                            (21,'Fastrack Reflex VOX',2494,'Fastrack Reflex VOX, Alexa Built-in Smart Watch, 1.69" HD Bright Display, Premium Metallic Finish, 10 Days Battery, 5ATM, 24 * 7 HRM, Stress & SpO2 Monitor, 100+ Cloud Watch Faces, Multi-Sport Mode','fastrack_reflex.jpg',5),
                            (22,'Noise Pulse 2',2999,'Noise Pulse 2 Max Advanced Bluetooth Calling Smart Watch with 1.85'' TFT and 550 Nits Brightness, Smart DND, 10 Days Battery, 100 Sports Mode, Smartwatch for Men and Women - (Midnight Blue)','noise_plus2.jpg',5),
                            (23,'boAt Wave Electra',3112,'boAt Wave Electra with 1.81" HD Display, Smart Calling with Ultra-Seamless BT Calling Chip,20 Built-in Watch Faces,100 + Sports Modes,Menu Personalization,in-Built Games(Charcoal Black)','boat_wave.jpg',5),
                            (24,'Fire-Boltt Phoenix',1799,'Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3",120+ Sports Modes, 240*240 PX High Res with SpO2, Heart Rate Monitoring & IP67 Rating','fireboltt_phoenix.jpg',5),
                            (25,'Amazfit GTS2 Mini',5998,'Amazfit GTS2 Mini (New Version) Smart Watch with Always-on AMOLED Display, Alexa Built-in, SpO2, 14 Days Battery Life, 68 Sports Modes, GPS, HR, Sleep & Stress Monitoring (Breeze Blue)','amazfit_mini.jpg',5),
                            (26,'SanDisk Ultra Dual',689,'SanDisk Ultra Dual Drive Go usb3.0 Type C Pendrive for Mobile (Black, 64 GB, 5Y - SDDDC3-064G-I35)','sandisk_ultra.jpg',6),
                            (27,'Amazon Basics 256GB',1599,'Amazon Basics 256GB microSDXC Memory Card with Full Size Adapter, 100MB/s, U3','amazon_256.jpg',6),
                            (28,'MI Power Bank 3i',2049,'MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black','mi_3i.jpg',6),
                            (29,'realme Buds',1299,'realme Buds Wireless 2 Neo Bluetooth in Ear Earphones with Mic, Fast Charging & Up to 17Hrs Playtime (Black)','realme_buds.jpg',6),
                            (30,'Mobile/Laptop Charger',1799,'Amazon Basics High Power 65W Mobile/Laptop Charger Dual Port Output with Type-C Charging Cable (Black)','ab_charger.jpg',6),
                            (31,'OnePlus 138 cm',39999,'OnePlus 138 cm (55 inches) Y Series 4K Ultra HD Smart Android LED TV 55Y1S Pro (Black)','oneplus_138.jpg',7),
                            (32,'Sony Bravia',124990,'Sony Bravia 139 cm (55 inches) XR series 4K Ultra HD Smart OLED Google TV XR-55A80J (Black)','sony_bravia.jpg',7),
                            (33,'Acer 80',11499,'Acer 80 cm (32 inches) I Series HD Ready Android Smart LED TV AR32AR2841HDFL (Black)','acer80.jpg',7),
                            (34,'Redmi 80 cm',12999,'Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)','redmi80.jpg',7),
                            (35,'TCL 100 cm',17990,'TCL 100 cm (40 inches) Full HD Certified Android Smart LED TV 40S6505 (Black)','tcl.jpg',7),
                            (36,"Wren & Martin's",161,"Key to Wren & Martin's Regular & Multicolour Edition of High School English Grammar & Composition Paperback – 1 January 2017",'wren_martins.jpg',8),
                            (37,'Head First Java',1625,'Head First Java: A Brain-Friendly Guide, Third Edition (Grayscale Indian Edition) Paperback – 1 June 2022','head_first_java.jpg',8),
                            (38,'Rich Dad Poor Dad',380,'Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not!: (25th Anniversary Edition) Mass Market Paperback – Import, 6 August 2022','rich_poor_dad.jpg',8),
                            (39,'The 80/20 Principle',550,'The 80/20 Principle: Achieve More with Less: THE NEW 2022 EDITION OF THE CLASSIC BESTSELLER Paperback – Import, 20 January 2022','the8020.jpg',8),
                            (40,'Atomic Habits',371,'Atomic Habits: The life-changing million copy bestseller [Paperback] James Clear Paperback – 30 October 2018','atomic_habits.jpg',8),
                            (41,'Dennis Shirt',575,"Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves",'dennis.jpg',9),
                            (42,'Urbano T-Shirt',399,"Urbano Fashion Men's Printed Full Sleeve Slim Fit Cotton T-Shirt",'urbano_tshirt.jpg',9),
                            (43,'fanideaz T-Shirt',299,'fanideaz Mens Cotton Half Sleeve Branded Polo T-Shirt with Collar','fanideaz_tshirt.jpg',9),
                            (44,'Urbano Jeans',606,"Urbano Fashion Men's Slim Fit Washed Jeans Stretchable",'urbano_jeans.jpg',9),
                            (45,'Veirdo Shorts',341,'Veirdo 100% Pure Cotton Shorts for Men | Badminton Shorts | Cycling Shorts | Biker Shorts | Swimming Shorts | Gym Shorts - Anthra Shorts (XXL Size)','veirdo_shorts.jpg',9),
                            (46,'SOOVI Kurta',599,"SOOVI Women's Cotton Floral Printed Regular Fit 3/4th Sleeve Mandarin Collar Peplum Top/Short Kurta Casual Wear (Blue)",'soovi_kurta.jpg',10),
                            (47,'Holy Libas Short Kurti',199,"Holy libas Women's Crepe Regular Fit Top, Printed Black Straight, Round Neck 3/4 Sleeves, Casual Wear Short Kurti, Stylish Tunic Tops for Women for Girls",'holi_libas.jpg',10),
                            (48,'Denim Stretchable Jeans',1119,"Women's Ankle Length Shaded Denim Stretchable Jeans - DX Blue",'denim_jeans.jpg',10),
                            (49,'FABRIC Shirt',759,"FABRIC FITOOR Women's Cotton Solid Regular Fit Casual Shirt Tops",'fabric_shirt.jpg',10),
                            (50,'M MOODY Jeans',680,"M MODDY Women's Slim FIT Ankle Length Slim Fit Denim Lycra Jeans",'m_moody.jpg',10);