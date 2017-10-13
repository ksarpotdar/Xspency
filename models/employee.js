var Expense = require('./expense');

module.exports = function(sequelize, DataTypes) {

   var Employee = sequelize.define("Employee", {
	id: {
		type: DataTypes.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
	},

    empName: {
         type: DataTypes.STRING,
         allowNull: false
	},
	  
    userID: {
		type: DataTypes.STRING,
		allowNull: false
	},

	password: {
		type: DataTypes.STRING,
		allowNull: false
	},

    mgrId: {
         type: DataTypes.INTEGER,
         allowNull: false
	},
	  
	mgrFlag: {
		type: DataTypes.BOOLEAN,
		allowNull: true
	}
	
  	});

	  Employee.associate = function(models) {
		Employee.hasMany(models.Expense, {
				//foreignKey: 'EmployeeID',
				sourceKey: 'id'
			});
	  };
	  // Relations
// Employee.hasMany(Expense, {
// 	foreignKey: 'EmployeeID',
// 	sourceKey: 'id'
// });


  return Employee;
};
