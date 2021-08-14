module.exports = (sequelize, DataType) => {

    const Registers = sequelize.define('Registers', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      done: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  
    Registers.associate = (models) => {
    Registers.belongsTo(models.Users);
    };
  
    return Registers;
  };