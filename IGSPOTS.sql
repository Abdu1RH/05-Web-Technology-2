DROP TABLE if exists users;
DROP TABLE if exists rating;
DROP TABLE if exists spots;
DROP TABLE if exists user_rating;
DROP TABLE if exists images;
DROP TABLE if exists spot_img;

DROP TABLE if exists spots;
DROP TABLE if exists users;
DROP TABLE if exists images;
DROP TABLE if exists spot_image;
DROP TABLE if exists user_spot;


CREATE TABLE spots (	
	spot_id INTEGER, 
	location_name VARCHAR(50), 
	address VARCHAR(50), 
	season VARCHAR(50), 
	PRIMARY KEY (spot_id)
	);

	CREATE TABLE users (	
	user_id INTEGER,
    user_name VARCHAR(50),
    user_mail VARCHAR (50),
    PRIMARY KEY (user_id)
  	);
    
	CREATE TABLE images (	
	img_id INTEGER,
    img_link VARCHAR(50)
); 

CREATE TABLE spot_image (	
	spot_id INTEGER, 
	img_link VARCHAR(500)
);

    CREATE TABLE user_spot (	
    user_id INTEGER,
    user_name VARCHAR (50),
    user_mail VARCHAR (50),
	spot_id INTEGER,
    location_name VARCHAR(50)
    );
    
Insert into spots (spot_id,location_name,address,season) values (1,"Kalkgraven","Karlstrup Kalkgrav, 2690 Karlslunde","summer");
Insert into spots (spot_id,location_name,address,season) values (2,"Fælledparken","Fælledparken Østerbro, 2100 København","summer");
Insert into spots (spot_id,location_name,address,season) values (3,"Islands brygge havn","Islands Brygge 14, 2300 København S","summer");
Insert into spots (spot_id,location_name,address,season) values (4,"Kronborg slot","Kronborg  Kalkgrav 2C, 3000 Helsingør","winter");
Insert into spots (spot_id,location_name,address,season) values (5,"Tivoli","Vesterbrogade 3, 1630 København V","winter");
Insert into spots (spot_id,location_name,address,season) values (6,"Rundetårn","Købmagergade 52A, 1150 København","winter");
Insert into spots (spot_id,location_name,address,season) values (7,"Silkeborgskovene","Knagerne Silkeborg, 8600 Silkeborg","autumn");
Insert into spots (spot_id,location_name,address,season) values (8,"Christiansborg Slot","Prins Jørgens Gård 1, 1218 København","autumn");
Insert into spots (spot_id,location_name,address,season) values (9,"Møns klint","Møn fyr, 4791 Borre","fall");
Insert into spots (spot_id,location_name,address,season) values (10,"Nyhavn","Nyhavn 65, 1051 København","fall");
    
  
insert into users (user_id, user_name, user_mail) values (1,"Hans Nielsen","HN1@gmail.com");
insert into users (user_id, user_name, user_mail) values (2,"Marie Karen","MK2@hotmail.com");
insert into users (user_id, user_name, user_mail) values (3,"Jens Christensen","Jens1@KEA.com");
insert into users (user_id, user_name, user_mail) values (4,"Jimmy Møller","JimmyM8@yahoo.com");
insert into users (user_id, user_name, user_mail) values (5,"Peter Madsen","PM5@outlook.com");
insert into users (user_id, user_name, user_mail) values (6,"Lars Andersen","LA15@outlook.com");
insert into users (user_id, user_name, user_mail) values (7,"Frederik Prier","FPM8@outlook.com");
insert into users (user_id, user_name, user_mail) values (8,"Rosa Lund","RL111@hotmail.com");
insert into users (user_id, user_name, user_mail) values (9,"Niklas Jakobsen","PM5@gmail.com");
insert into users (user_id, user_name, user_mail) values (10,"Pia Larsen","PM5@outlook.com");


insert into images (img_id,img_link) values (1,"shorturl.at/diEV1");
insert into images (img_id,img_link) values (2,"shorturl.at/kpqy6");
insert into images (img_id,img_link) values (3,"shorturl.at/frZ29");
insert into images (img_id,img_link) values (4,"shorturl.at/pRSY5");
insert into images (img_id,img_link) values (5,"shorturl.at/qBLNY");
insert into images (img_id,img_link) values (6,"shorturl.at/hFSXZ");
insert into images (img_id,img_link) values (7,"shorturl.at/eGMZ0");
insert into images (img_id,img_link) values (8,"shorturl.at/itZ15");
insert into images (img_id,img_link) values (9,"shorturl.at/koRV5");
insert into images (img_id,img_link) values (10,"shorturl.at/ewFQZ");


insert into spot_image(spot_id,img_link) values (1,"https://naturstyrelsen.dk/media/264144/udsigt-over-kalkgravens-soe-fra-skraent-ved-p-plads-juli-2012p7240493.jpg");
insert into spot_image(spot_id,img_link) values (2,"https://migogkbh.dk/wp-content/uploads/2021/02/faelledparken-kk.jpg");
insert into spot_image(spot_id,img_link) values (3,"https://www.loa-fonden.dk/media/2061/isl-brygge-havnebad_1388.jpg?anchor=center&mode=crop&width=660&height=440&rnd=131154024720000000");
insert into spot_image(spot_id,img_link) values (4,"https://i.pinimg.com/originals/6a/33/25/6a3325a564f3b1ddb7b76e3f49b77591.jpg");
insert into spot_image(spot_id,img_link) values (5,"https://i.ytimg.com/vi/xQ9M2mm0WTM/maxresdefault.jpg");
insert into spot_image(spot_id,img_link) values (6,"https://a.cdn-hotels.com/gdcs/production129/d797/a559c81e-e275-4149-8537-b4ff86c31b65.jpg");
insert into spot_image(spot_id,img_link) values (7,"https://files.guidedanmark.org/files/454/243767_Hrvejen_Stenholt_Skov_Danmark_foto-Silkeborg_Kommune.jpg");
insert into spot_image(spot_id,img_link) values (8,"https://upload.wikimedia.org/wikipedia/commons/8/8e/Christiansborg_Slot_Copenhagen_2014_02.jpg");
insert into spot_image(spot_id,img_link) values (9,"https://media.lex.dk/media/4347/standard_Moens_Klint.JPG");
insert into spot_image(spot_id,img_link) values (10,"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/86/f9.jpg");




Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (1,"Hans Nielsen","HN1@gmail.com",10, "Nyhavn");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (2,"Marie Karen","MK2@hotmail.com",9, "Møns klint");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (3,"Jens Christensen","Jens1@KEA.com",8, "Christiansborg Slot");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (4,"Jimmy Møller","JimmyM8@yahoo.com",7, "Silkeborgskovene");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (5,"Peter Madsen","PM5@outlook.com",6, "Rundetårn");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (6,"Lars Andersen","LA15@outlook.com",5, "Tivoli");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (7,"Frederik Prier","FPM8@outlook.com",4, "Kronborg slot");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (8,"Rosa Lund","RL111@hotmail.com",3, "Islands brygge havn");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (9,"Niklas Jakobsen","PM5@gmail.com",2, "Fælledparken");
Insert into user_spot (user_id, user_name, user_mail, spot_id, location_name) values (10,"Pia Larsen","PM5@outlook.com",1, "Kalkgraven");