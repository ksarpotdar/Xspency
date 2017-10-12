module.exports = function(sequelize, DataTypes) {

   var Expense = sequelize.define("Expense", {

      expName: {
        type: DataTypes.STRING,
        allowNull: false
     },
      
      date: {
         type: DataTypes.DATE,
         allowNull: false
      },

      duration: {
         type: DataTypes.INTEGER,
         allowNull: false
      },

      costType: {
         type: DataTypes.STRING,
         allowNull: false
      },

      amount: {
         type: DataTypes.DECIMAL,
         allowNull: false
      },

      approved: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: false
      }
  });

  Expense.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Expense.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Expense;
};
