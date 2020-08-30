CREATE KEYSPACE IF NOT EXISTS lairbnbbooking WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};

USE lairbnbbooking;

CREATE TABLE IF NOT EXISTS listings (
    id int,
    host text,
    rating float,
    raters int,
    price int,
    discount int,
    PRIMARY KEY (id)
);

/*  Create the schema from terminal by logging into
*   your Cassandra cluster using cqlsh and copying this code
*/