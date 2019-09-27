INSERT INTO helo (username, password, profile_pic) 
VALUES (${username}, ${password}, ${profile_pic})
RETURNING user_id;