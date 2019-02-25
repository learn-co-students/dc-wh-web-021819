## Challenges

1. Write the SQL to return all of the rows in the artists table?

SELECT * from artists;

2. Write the SQL to select the artist with the name "Black Sabbath"

SELECT * from artists where name like "Black Sabbath"

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

CREATE TABLE fans (id INTEGER PRIMARY KEY,
                   name TEXT);

4. Write the SQL to alter the fans table to have a ArtistId column type integer

ALTER TABLE fans ADD COLUMN ArtistId INTEGER

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

INSERT INTO fans (name, ArtistId) VALUES ("Lane", 169);

6. Write the SQL to update your name in the fans table to be a new name

UPDATE fans SET name="Paul" WHERE name="Lane"

7. Write the SQL to return fans that are not fans of the Black Eyed Peas.

SELECT * FROM fans WHERE ArtistId IS NOT 169;

8. Write the SQL to display an artist's name next to their album title

SELECT artist.name, albums.title FROM albums INNER JOIN artists on artists.ArtistId = albums.ArtistId

## BONUS

9. Write the SQL to display artist name, album name and number of tracks on that album


10. Write the SQL to return the name of all of the artists in the 'Pop' Genre


11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

