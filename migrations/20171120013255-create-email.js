'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Emails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Clicked: {
        type: Sequelize.STRING
      },
      Contact: {
        type: Sequelize.STRING
      },
      Contact_ID: {
        type: Sequelize.STRING
      },
      Contact_Record_Type: {
        type: Sequelize.STRING
      },
      Date_Bounced: {
        type: Sequelize.DATE
      },
      Date_Opened: {
        type: Sequelize.DATE
      },
      Date_Sent: {
        type: Sequelize.DATE
      },
      Date_Unsubscribed: {
        type: Sequelize.DATE
      },
      Deleted: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Email_Name: {
        type: Sequelize.STRING
      },
      From_Address: {
        type: Sequelize.STRING
      },
      From_Name: {
        type: Sequelize.STRING
      },
      Hard_Bounce: {
        type: Sequelize.STRING
      },
      Number_Total_Clicks: {
        type: Sequelize.INTEGER
      },
      Number_Unique_Clicks: {
        type: Sequelize.INTEGER
      },
      Opened: {
        type: Sequelize.STRING
      },
      Related_Student_Contact_ID: {
        type: Sequelize.STRING
      },
      Soft_Bounce: {
        type: Sequelize.STRING
      },
      Subject_Line: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Emails');
  }
};