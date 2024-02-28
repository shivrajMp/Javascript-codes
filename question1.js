const details = [
  {
    empId: 1001,
    empName: "Sumit",
    salary: 20000,
  },
  { empId: 1002, empName: "Puneet", salary: 25000 },
];

// take input from user as employ id and check user exist or not and want true false return

id = 1001;
result = details.some((user) => user.empId == id);
console.log(result)
