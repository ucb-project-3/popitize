use popitize;
CREATE TABLE renters (
	  id int AUTO_INCREMENT NOT NULL,
    user_id BINARY(16), 
    popup_category int,
    popup_description text(500),
    desired_begin_date datetime,
    desired_end_date datetime,
    is_active bit,
    rental_rate float(10,2)
    PRIMARY KEY(id)
);

CREATE TABLE users (
	  id int AUTO_INCREMENT NOT NULL,
    email varchar(128),
    user_password varchar(128),
    age_range int,
	credit_rating int,
    address_1 varchar(128),
    city varchar(48),
    state varchar(24),
    zip int,
    address_2 varchar(128),
    PRIMARY KEY(id)
    );
    
 CREATE TABLE popup_categories(
 id int AUTO_INCREMENT NOT NULL,
 category_name varchar(48),
 catergoty_desc varchar(255),
 PRIMARY KEY(id)
);  






INSERT INTO renters (user_id, popup_category, popup_description, desired_begin_date, desired_end_date, is_active, rental_rate)
VALUES (2, 2 , 'pop-up shop was bad', '2019-05-02 05:20:00', '2019-07-01 05:35:00',0, 900.65),
(3, 3 , 'pop-up shop was ok', '2019-4-02 09:20:00', '2019-10-01 06:35:00',0, 1000.65),
(4, 4 , 'pop-up shop was great', '2019-12-02 09:20:00', '2019-3-01 06:58:00',1, 1200.90);
