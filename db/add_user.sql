INSERT INTO helo (username, password, profile_pic) 
VALUES (${name}, ${password}, ${profile})
RETURNING user_id;