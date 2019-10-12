// CRUD API
const router = require('express').Router();
let Employee = require('../models/employee.model');

// get request nacte json z db
router.route('/').get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

// post request vlozi data
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const job = req.body.job;
  const birthdate = req.body.birthdate.toString();
  // vytvori promenou kde se ukladaji data
  const newEmployee = new Employee({
    name,
    surname,
    job,
    birthdate
  });
  // ulozi newEmployee
  newEmployee
    .save()
    .then(() => res.json('Zaměstnanec zaevidován!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// nacte ID zaznamu
router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});
// smaze zaznam dle ID
router.route('/:id').delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Zaměstnanec odešel na ÚP!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// update zaznamu dle mongo ID
router.route('/update/:id').post((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => {
      employee.name = req.body.name;
      employee.surname = req.body.surname;
      employee.job = req.body.job;
      employee.birthdate = Date.parse(req.body.birthdate);

      employee
        .save()
        .then(() => res.json('Zaměstnanec editován!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
