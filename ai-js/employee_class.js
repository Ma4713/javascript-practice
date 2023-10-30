class Employee {
    constructor(name, id, department, position) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.position = position;
    }
  
    // Method to get employee information
    getEmployeeInfo() {
      return `Employee Name: ${this.name}\nEmployee ID: ${this.id}\nDepartment: ${this.department}\nPosition: ${this.position}`;
    }
  
    // Method to update employee information
    updateEmployeeInfo(name, id, department, position) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.position = position;
    }
  }
  
  // Usage example:
  const employee1 = new Employee("John Doe", 12345, "HR", "Manager");
  console.log(employee1.getEmployeeInfo());
  
  employee1.updateEmployeeInfo("Jane Smith", 54321, "Finance", "Accountant");
  console.log(employee1.getEmployeeInfo());