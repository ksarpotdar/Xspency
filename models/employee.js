module.exports = function(sequelize, DataTypes) {

   var Employee = sequelize.define("Employee", {

      empID: {
         type: DataTypes.INTEGER,
         allowNull: false
      },

      empName: {
         type: DataTypes.STRING,
         allowNull: false
      },

      mgrId: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
  	});

  	Employee.associate = function(models) {
    	// An Employee belongs to a Manager.
    	// An Employee can't be created without a Manager due to the foreign key
    	// constraint.
    	Employee.belongsTo(models.Manager, {
      	foreignKey: {
        	allowNull: false
      	}
    	});

     	Employee.associate = function(models) {
    	// An Employee has many Expense(s).
    	// When an Employee is deleted, also delete any associated Expenses (??).
    	Employee.hasMany(models.Expense, {
      	//onDelete: "cascade"
    	});
  	}; 

  return Employee;
};
