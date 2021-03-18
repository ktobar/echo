DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS videos CASCADE;

CREATE TABLE videos(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  link VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS moments CASCADE;

CREATE TABLE moments(
  id SERIAL PRIMARY KEY NOT NULL,
  label VARCHAR(255) NOT NULL,
  start_time INTEGER NOT NULL,
  end_time INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  video_id INTEGER REFERENCES videos(id) ON DELETE CASCADE
);

INSERT INTO users (first_name, last_name, email, password, avatar)
VALUES
  ('Armand', 'Hill', 'ahill@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://raw.githubusercontent.com/schenn1992/smart_TODO_list/master/public/avatars/identicon1.png'),
  ('Stephanie', 'Wolff', 'darius.homenick@tod.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://raw.githubusercontent.com/schenn1992/smart_TODO_list/master/public/avatars/identicon2.png'),
  ('Stan', 'Miller', 'mcdermott.maxie@schoen.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://raw.githubusercontent.com/schenn1992/smart_TODO_list/master/public/avatars/identicon3.png'),
  ('Ellie', 'Dickinson', 'derrick_pollich@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://raw.githubusercontent.com/schenn1992/smart_TODO_list/master/public/avatars/identicon4.png'),
  ('Lloyd', 'Boehm', 'ebba.deckow@yahoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://raw.githubusercontent.com/schenn1992/smart_TODO_list/master/public/avatars/identicon5.png'),
  ('Carla', 'Dyno', 'ebby.cloud@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://raw.githubusercontent.com/schenn1992/smart_TODO_list/master/public/avatars/identicon6.png');

INSERT INTO categories (name, user_id)
VALUES
  ('Education', 1),
  ('Sports', 1),
  ('Dance', 1),
  ('Art', 1),
  ('Cooking', 2),
  ('DIY', 3),
  ('Education', 4),
  ('Sports', 4),
  ('Dance', 5),
  ('Art', 5),
  ('Cooking', 6),
  ('DIY', 6),
  ('Education', 6);

INSERT INTO videos (title, link, created_at, user_id, category_id)
VALUES
('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T02:00:00+00:00', 1, 1),
('JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]', 'https://www.youtube.com/watch?v=W6NZfCO5SIk', '2021-01-01T03:00:00+00:00', 1, 1),
('GERMAN LESSON 2: How to say "MY NAME IS ..." in German 😄😄😄', 'https://www.youtube.com/watch?v=5aNdCmSruYA', '2021-01-01T03:00:00+00:00', 1, 1),

('10 ADVANCED HOCKEY DRILLS TO IMPROVE YOUR SKILLS', 'https://www.youtube.com/watch?v=OWEC-KSdmHw', '2021-01-01T04:00:00+00:00', 1, 2),
('50 Famous Goals ● Impossible To Forget', 'https://www.youtube.com/watch?v=bKOTKHtbM54', '2021-01-01T05:00:00+00:00', 1, 2),
('THE 5 EASIEST SKATEBOARD TRICKS FOR BEGINNERS', 'https://www.youtube.com/watch?v=MFvkDE_uYq8', '2021-01-01T05:00:00+00:00', 1, 2),

('Bachata Beginner Basic Steps Tutorial - Demetrio & Nicole - Bachata Dance Academy', 'https://www.youtube.com/watch?v=xhrdh-uFkog', '2021-01-01T06:00:00+00:00', 1, 3),
('Bachata dance - When the latin music hits you', 'https://www.youtube.com/watch?v=mQM8mnHYFHU', '2021-01-01T07:00:00+00:00', 1, 3),
('Learn How to Windmill - Complete Step by Step - Breakdance Tutorial', 'https://www.youtube.com/watch?v=0dB7JjpBMtI', '2021-01-01T08:00:00+00:00', 1, 3),

('Bob Ross - Towering Peaks (Season 10 Episode 1)', 'https://www.youtube.com/watch?v=1s58rW0_LN4', '2021-01-01T09:00:00+00:00', 1, 4),
('EASIEST DIY Simple Birdhouse with Minimal Tools Step by Step | Ale s Everyday', 'https://www.youtube.com/watch?v=BZwn6idcJE8', '2021-01-01T01:00:00+00:00', 1, 4),
('Oil Painting for Beginners - Basic Techniques + Step by Step Demonstration', 'https://www.youtube.com/watch?v=w3hbZfX0Abg', '2021-01-01T10:00:00+00:00', 1, 4),
('Bob Ross - Northern Lights (Season 8 Episode 13)', 'https://www.youtube.com/watch?v=vgbMONXc9Cs', '2021-01-01T10:00:00+00:00', 1, 4),


('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T01:00:00+00:00', 2, 5),
('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T07:00:00+00:00', 2, 5),
('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T03:00:00+00:00', 2, 5),
('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T11:00:00+00:00', 3, 6),
('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T05:00:00+00:00', 4, 7),
('EASIEST DIY Simple Birdhouse with Minimal Tools Step by Step | Ale''s Everyday', 'https://www.youtube.com/watch?v=BZwn6idcJE8', '2021-01-01T12:00:00+00:00', 4, 8),
('10 ADVANCED HOCKEY DRILLS TO IMPROVE YOUR SKILLS', 'https://www.youtube.com/watch?v=OWEC-KSdmHw', '2021-01-01T07:00:00+00:00', 5, 9),
('10 ADVANCED HOCKEY DRILLS TO IMPROVE YOUR SKILLS', 'https://www.youtube.com/watch?v=OWEC-KSdmHw', '2021-01-01T03:00:00+00:00', 5, 9),
('Bachata Beginner Basic Steps Tutorial - Demetrio & Nicole - Bachata Dance Academy', 'https://www.youtube.com/watch?v=xhrdh-uFkog', '2021-01-01T04:00:00+00:00', 5, 10),
('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T10:00:00+00:00', 6, 11),
('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T05:00:00+00:00', 6, 11),
('Learn Java in 14 Minutes (seriously)', 'https://www.youtube.com/watch?v=RRubcjpTkks&ab_channel=AlexLee', '2021-01-01T12:00:00+00:00', 6, 11),
('Gordon''s Quick & Simple Recipes | Gordon Ramsay ', 'https://www.youtube.com/watch?v=mhDJNfV7hjk', '2021-01-01T11:00:00+00:00', 6, 12),
('EASIEST DIY Simple Birdhouse with Minimal Tools Step by Step | Ale s Everyday', 'https://www.youtube.com/watch?v=BZwn6idcJE8', '2021-01-01T01:00:00+00:00', 6, 13),
('EASIEST DIY Simple Birdhouse with Minimal Tools Step by Step | Ale s Everyday', 'https://www.youtube.com/watch?v=BZwn6idcJE8', '2021-01-01T07:00:00+00:00', 6, 13),
('EASIEST DIY Simple Birdhouse with Minimal Tools Step by Step | Ale s Everyday', 'https://www.youtube.com/watch?v=BZwn6idcJE8', '2021-01-01T03:00:00+00:00', 6, 13),
('EASIEST DIY Simple Birdhouse with Minimal Tools Step by Step | Ale s Everyday', 'https://www.youtube.com/watch?v=BZwn6idcJE8', '2021-01-01T04:00:00+00:00', 6, 13);

INSERT INTO moments (label, start_time, end_time, user_id, video_id)
VALUES
('abca', 10, 70, 1, 1),
('abcb', 20, 40, 1, 1),
('abcc', 50, 100, 1, 1),

('abcd', 10, 70, 1, 2),
('abce', 10, 70, 1, 3),

('Variation Drill', 124, 127, 1, 4),
('Quick hanks + 360 Drillbce', 21, 25, 1, 4),

('abcg', 10, 70, 1, 5),
('abch', 10, 70, 1, 6),
('abci', 10, 70, 1, 7),

('The Wave', 18, 23, 1, 8),
('Side Travel', 32, 38, 1, 8),

('abck', 10, 70, 1, 9),

('abcl', 10, 70, 2, 10),
('abcm', 10, 70, 2, 11),
('abcn', 10, 70, 2, 12),

('Mountain Shade', 287, 344, 3, 13),
('Northern Light outline', 94, 102, 3, 13),

('abcp', 10, 70, 4, 15),
('abcq', 10, 70, 4, 16),
('abcr', 10, 70, 5, 17),
('abcs', 10, 70, 5, 18),
('abct', 10, 70, 5, 19),
('abcu', 10, 70, 6, 20),
('abcv', 10, 70, 6, 21),
('abcw', 10, 70, 6, 22),
('abcx', 10, 70, 6, 23),
('abcy', 10, 70, 6, 24),
('abcz', 10, 70, 6, 25),
('abca', 10, 70, 6, 26);


