CREATE TABLE card (
   id uuid DEFAULT uuid_generate_v4() NOT NULL,
   primary_front_text varchar(100) NOT NULL,
   secondary_front_text varchar(100) NULL,
   primary_back_text varchar(100) NOT NULL,
   secondary_back_text varchar(100) NULL,
   deck_id uuid NOT NULL,
   reversed BOOLEAN 0 NOT NULL,
   CONSTRAINT PK_id PRIMARY KEY (id)
   CONSTRAINT FK_deck_id FOREIGN KEY (deck_id) REFERENCES card (id)
);