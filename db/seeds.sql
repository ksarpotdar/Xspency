-- Test data for employees table.
INSERT INTO employees (empName, userId, PASSWORD, mgrId, mgrFlag) VALUES 
	("Sue Smith", "suesmith", "1a30451ebc264721b4a5666598c74837517c275409312884d60b2e6619b0f262", 0, TRUE),
	("John Jones", "jojones", "df38b468d607e6f9c846bd25bdedcee228bc747cee19669bc2dd7b925ccecd08", 1, FALSE),
	("Kelly Highland", "kelhigh", "94df75a2f258ff8d2647e700b969d2162278156b2c659e481e42c44ba769fc30", 6, FALSE),
	("Tom Thomas", "tthomas", "8619dc10b0178cb92cc4fa914985f489de5e94fee73efa298b2d403ad294be41", 6, FALSE),
	("Peter Piper", "pepiper", "114bca384863c789053b76a49b826a84ef6856f2fe8bd5c83e38b8df739c5ca6", 1, FALSE),
	("Mike Miles", "mmiles", "025998f9fd5394c87857a92ff05d9efdc20fcf06bb54adebd357f02c2cf90b2a", 0, TRUE);

-- Test data for expenses table.
INSERT INTO expenses (expName, DATE, duration, costType, amount, approved, EmployeeId) VALUES
	("San Francisco", "2017-05-20", 3, "Food",           300.00,  TRUE, 4),
	("San Francisco", "2017-05-20", 3, "Lodging",        1000.00, TRUE, 4),
	("San Francisco", "2017-05-20", 3, "Transportation", 500.00,  TRUE, 4),
	("New York City", "2017-06-10", 5, "Food",           650.00,  TRUE, 3),
	("New York City", "2017-06-10", 5, "Lodging",        2500.00, TRUE, 3),
	("New York City", "2017-06-10", 5, "Transportation", 1100.00, TRUE, 3),
	("New York City", "2017-06-10", 5, "Other",          300.00,  TRUE, 3),
	("Atlanta",       "2017-07-25", 4, "Food",           500.00,  TRUE, 2),
	("Atlanta",       "2017-07-25", 4, "Lodging",        1750.00, TRUE, 2),
	("Atlanta",       "2017-07-25", 4, "Transportation", 675.00,  TRUE, 2),
	("Dallas",        "2017-08-22", 2, "Food",           225.00,  TRUE, 1),
	("Dallas",        "2017-08-22", 2, "Lodging",        250.00,  TRUE, 1),
	("Dallas",        "2017-08-22", 2, "Transportation", 150.00,  TRUE, 1),
	("Dallas",        "2017-08-22", 2, "Other",          100.00,  TRUE, 1),
	("Charlotte",     "2017-09-04", 1, "Food",           75.00,   TRUE, 5),
	("Charlotte",     "2017-09-04", 1, "Transportation", 130.00,  TRUE, 5),
	("Washington DC", "2017-10-07", 1, "Food",           125.00,  TRUE, 3),
	("Washington DC", "2017-10-07", 1, "Transportation", 130.00,  TRUE, 3);
