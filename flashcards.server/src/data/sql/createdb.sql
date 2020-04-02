CREATE DATABASE flashcards;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE deck (
   id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   name varchar(50) NOT NULL
);

CREATE TABLE card (
   id uuid DEFAULT uuid_generate_v4() NOT NULL,
   primary_front_text varchar(100) NOT NULL,
   secondary_front_text varchar(100) NULL,
   primary_back_text varchar(100) NOT NULL,
   secondary_back_text varchar(100) NULL,
   reversed BOOLEAN 0 NOT NULL,
   deck_id uuid NOT NULL,
   CONSTRAINT PK_id PRIMARY KEY (id),
   CONSTRAINT FK_deck_id FOREIGN KEY (deck_id) REFERENCES deck (id) ON DELETE CASCADE
);