module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
   userName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING



  });
  User.associate = function (models) {
    User.hasOne(models.Profile)
  };
  User.associate = function (models) {
    User.hasMany(models.Skills)
  };
  User.associate = function (models) {
    User.hasMany(models.Comment)
  };
  User.associate = function (models) {
    User.hasMany(models.Event)
  };

  return User;
};
