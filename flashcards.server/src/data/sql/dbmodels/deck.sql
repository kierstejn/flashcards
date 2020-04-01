CREATE TABLE deck(
   id uuid DEFAULT uuid_generate_v4() PRIMARY KEY ,
   name varchar(50) NOT NULL
);