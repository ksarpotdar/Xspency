module.exports = function(sequelize, DataTypes) {

   var Manager = sequelize.define("Manager", {

      mgrID: {
         type: DataTypes.INTEGER,
         allowNull: false
      },

      mgrName: {
         type: DataTypes.STRING,
         allowNull: false
      },

      mgrId: {
         type: DataTypes.ARRAY(DataTypes.INTEGER)
         allowNull: false
      }
  	});

  	Manager.associate = function(models) {
    	// An Manager has many Expense(s).
    	Manager.hasMany(models.Expense, {

    	});
  	}; 

  return Manager;
};