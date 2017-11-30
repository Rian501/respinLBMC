# LBMC-Hack
A repository for the LBMC coding for  a cause hack-a-thon.  


In order to run:
- npm install at the root in order to have access to sequelize
- Installing postgres (depends on your system): https://wiki.postgresql.org/wiki/Detailed_installation_guides
- Once you have installed postgres, type psql in the terminal; once you have logged in (if pw required on your machine), type `create database tnach_db;`
- Also install the sequelize CLI by following these steps: https://github.com/sequelize/cli
- In the `sequelize` directory of the project, run the commands `sequelize db:migrate` and `sequelize db:seed:all`

(I also made it so that you can run npm start from the root instead of in lib)