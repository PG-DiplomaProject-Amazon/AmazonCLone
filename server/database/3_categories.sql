CREATE table categories(pcid int PRIMARY KEY AUTO_INCREMENT, category_name varchar(255), category_image varchar(255));
INSERT INTO categories VALUES(1, 'Smartphones','smartphones.jpg'), 
                            (2, 'Laptops','laptops.jpg'), 
                            (3, 'Tablets','tablets.jpg'),
                            (4, 'Computers','computers.jpg'),
                            (5, 'Smart Watches','smartwatches.jpg'),
                            (6, 'Mobile Accessories','mobile_accessories.jpg'),
                            (7, 'TVs','tvs.jpg'),
                            (8, 'Books','books.jpg'),
                            (9, "Men's Fashion",'mens_fashion.jpg'),
                            (10, "Women's Fashion",'womens_fashion.jpg');