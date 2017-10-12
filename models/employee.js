module.exports = function(sequelize, DataTypes) {

   var Employee = sequelize.define("Employee", {

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

  return Employee;
};
