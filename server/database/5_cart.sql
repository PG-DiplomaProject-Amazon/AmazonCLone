CREATE TABLE cart(
    cid INT NOT NULL,
    pid INT NOT NULL UNIQUE,
    qty INT DEFAULT 1,
    FOREIGN KEY(cid) REFERENCES customers(cid),
    FOREIGN KEY(pid) REFERENCES products(pid)
);

INSERT INTO cart(cid, pid) VALUES (1, 17),
                            (1,21);