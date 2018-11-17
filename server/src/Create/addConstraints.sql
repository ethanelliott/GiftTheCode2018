ALTER TABLE Cat (
    ADD CONSTRAINT fKeyLocId FOREIGN KEY (locId) REFERENCES Loc(id),
    ADD CONSTRAINT fKeyAdoptId  FOREIGN KEY (adopterId) REFERENCES Adopter(id),
    ADD CONSTRAINT fKeyPair FOREIGN KEY (pair) REFERENCES Cat(id)
);

ALTER TABLE Adopter (
    ADD CONSTRAINT fKeyUserConfirmation FOREIGN KEY (userConfirmationId) REFERENCES User(id),
    ADD CONSTRAINT fKeyACatId FOREIGN KEY (catId) REFERENCES Cat(id)
);

ALTER TABLE Health (
    ADD CONSTRAINT fKeyHCatId FOREIGN KEY (catId) REFERENCES Cat(id)
);

ALTER TABLE User (
    ADD CONSTRAINT fKeySLocId FOREIGN KEY (locId) REFERENCES Loc(id)
);

ALTER TABLE Img (
    ADD CONSTRAINT fKeyICatId FOREIGN KEY (catId) REFERENCES Cat(id)
);

ALTER TABLE Visit (
    ADD CONSTRAINT fKeyVCatId FOREIGN KEY (catId) REFERENCES Cat(id),
    ADD CONSTRAINT fKeyVLocId FOREIGN KEY (locId) REFERENCES Loc(id)
);