'use strict';
module.exports = (sequelize, DataTypes) => {
  var Email = sequelize.define('Email', {
    Clicked: DataTypes.STRING,
    Contact: DataTypes.STRING,
    Contact_ID: DataTypes.STRING,
    Contact_Record_Type: DataTypes.STRING,
    Date_Bounced: DataTypes.DATE,
    Date_Opened: DataTypes.DATE,
    Date_Sent: DataTypes.DATE,
    Date_Unsubscribed: DataTypes.DATE,
    Deleted: DataTypes.STRING,
    Email: DataTypes.STRING,
    Email_Name: DataTypes.STRING,
    From_Address: DataTypes.STRING,
    From_Name: DataTypes.STRING,
    Hard_Bounce: DataTypes.STRING,
    Number_Total_Clicks: DataTypes.INTEGER,
    Number_Unique_Clicks: DataTypes.INTEGER,
    Opened: DataTypes.STRING,
    Related_Student_Contact_ID: DataTypes.STRING,
    Soft_Bounce: DataTypes.STRING,
    Subject_Line: DataTypes.STRING
  });

  Email.associate = function(models) {

  };
  
  return Email;
};