-- Test data for employees table.
INSERT INTO employees (empName, userId, PASSWORD, mgrId, mgrFlag) VALUES 

	("Sue", ‘Sue123’, ‘123Sue’, 1, FALSE);
  -- To Do: Add for data here!!

-- Test Data for expenses table.
INSERT INTO expenses (expName, date, duration, costType, amount, approved) VALUES
	("San Francisco", "2017-05-20", 3, "Food",           300.00,  true),
	("San Francisco", "2017-05-20", 3, "Lodging",        1000.00, true),
	("San Francisco", "2017-05-20", 3, "Transportation", 500.00,  true),
	("New York City", "2017-06-10", 5, "Food",           650.00,  true),
	("New York City", "2017-06-10", 5, "Lodging",        2500.00, true),
	("New York City", "2017-06-10", 5, "Transportation", 1100.00, true),
	("New York City", "2017-06-10", 5, "Other",          300.00,  true),
	("Atlanta",       "2017-07-25", 4, "Food",           500.00,  true),
	("Atlanta",       "2017-07-25", 4, "Lodging",        1750.00, true),
	("Atlanta",       "2017-07-25", 4, "Transportation", 675.00,  true),
	("Dallas",        "2017-08-22", 2, "Food",           225.00,  true),
	("Dallas",        "2017-08-22", 2, "Lodging",        250.00,  true),
	("Dallas",        "2017-08-22", 2, "Transportation", 150.00,  true),
	("Dallas",        "2017-08-22", 2, "Other",          100.00,  true),
	("Charlotte",     "2017-09-04", 1, "Food",           75.00,   true),
	("Charlotte",     "2017-09-04", 1, "Transportation", 130.00,  true),
	("Washington DC", "2017-10-07", 1, "Food",           125.00,  true),
	("Washington DC", "2017-10-07", 1, "Transportation", 130.00,  true);
