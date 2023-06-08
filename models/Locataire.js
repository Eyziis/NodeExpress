module.exports = (sequelize, DataTypes) => {
    const Locataire = sequelize.define('Locataire', {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Locataire;
};