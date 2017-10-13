-- Test data for employees table.
INSERT INTO employees (empName, userId, PASSWORD, mgrId, mgrFlag) VALUES 
	("Sue Smith", "suesmith", "123Sue", 0, TRUE),
	("John Jones", "jojones", "jj1122", 1, FALSE),
	("Kelly Highland", "kelhigh", "kel546", 6, FALSE),
	("Tom Thomas", "tthomas", "tomthom2", 6, FALSE),
	("Peter Piper", "pepiper", "pep324", 1, FALSE),
	("Mike Miles", "mmiles", "miles3245", 0, TRUE);
	
	SELECT * FROM employees;
  -- To Do: Add for data here!!

-- Test Data for expenses table.
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

SELECT * FROM expenses;
