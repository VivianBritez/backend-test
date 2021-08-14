const Sequelize = require('sequelize');
const path= require('path');
const fs = require('fs');
let db = null
module.exports = app =>{

 if(!db){
const sequelize= new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });

 db = {
    sequelize,
    Sequelize,
    models: {}
  };

  const dir = require(path.join(__dirname, 'models'));
 console.log(dir)
  fs.readdirSync(dir).forEach(filename => {
      console.log(fs.Dir)
    const modelDir = require(path.join(dir, fileName))(sequelize, Sequelize.DataTypes)
    const model = modelDir
    db.models[model.name] = model;
  });
  
  Object.keys(db.models).forEach(key => {
    db.models[key].associate(db.models);
  });
}
 return db;
}