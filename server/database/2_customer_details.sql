CREATE TABLE customer_details(
    customer_address varchar(255),
    customer_image varchar(255),
    cid INT,
    FOREIGN KEY(cid) REFERENCES customers(cid) ON DELETE CASCADE
);

INSERT INTO customer_details VALUES ('New Delhi','shailesh.jpg', 1),
                                    ('Jaipur','divya.jpg', 2),
                                    ('Gurugram','deepak.jpg', 3),
                                    ('Delhi','madhuri.jpg', 4),
                                    ('Aligarh','sunidhi.jpg',5);