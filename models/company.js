module.exports = (sequelize,DataTypes)=>{
    const Company = sequelize.define('company',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allownull:false
        },
        employee_name: {
            type: DataTypes.STRING,
          
        },
        employee_designation: {
            type: DataTypes.STRING,
        },
        salary:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
       
    },{timestamps:false});
    return Company;
}

