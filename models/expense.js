var Employee = require('./employee');

module.exports = function(sequelize, DataTypes) {
  var Expense = sequelize.define('Expense', {
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
    Expense.belongsTo(models.Employee, {
      targetKey: 'id',
      foreignKey: {
       allowNull: false
      }
    });
   };

  return Expense;
};
