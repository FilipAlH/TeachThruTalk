const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Location extends Model {
    async getLocation(location) {
    const locationalFetch = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZmlsaXBhbGgiLCJhIjoiY2t2ZTliNzJmYmZqejJxcTZ5Mzg0eXBkeCJ9.Rbgy_AKOx657SU1EM_F4bw`)
    const locationalData = JSON.parse(locationalFetch)
    return locationalData[0].features
  }
}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;