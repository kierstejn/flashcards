CREATE DATABASE flashcards;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE deck (
   id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   name varchar(50) NOT NULL
);

CREATE TABLE card  (
   id uuid DEFAULT uuid_generate_v4() NOT NULL,
   front_text varchar(100) NULL,
   back_text varchar(100) NULL,
   deck_id uuid NOT NULL,
   CONSTRAINT PK_id PRIMARY KEY (id),
   CONSTRAINT FK_deck_id FOREIGN KEY (deck_id) REFERENCES deck (id) ON DELETE CASCADE
);