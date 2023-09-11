CREATE TABLE orders(
    cid INT NOT NULL,
    pid INT NOT NULL UNIQUE,
    qty INT DEFAULT 1,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(cid) REFERENCES customers(cid),
    FOREIGN KEY(pid) REFERENCES products(pid)
);

INSERT INTO orders(cid,pid) VALUES (1, 1),
                            (1,9),
                            (1,13),
                            (1,18);